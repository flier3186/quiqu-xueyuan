const { chromium } = require('playwright-core');
const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathVisualV5!=='undefined' && typeof MathKernel!=='undefined' && typeof MathFlowV5!=='undefined', null, { timeout: 10000 }).catch(()=>{});

  const res = await page.evaluate(() => {
    const out = {};
    // 1) barModelStep 标题泄漏修复
    const sh1 = MathVisualV5.renderStep('barModel', { a:386, b:247, parts:[{val:386},{val:247}] }, 1);
    out.step1Title = (sh1.match(/<text[^>]*>(条形模型[^<]*)<\/text>/)||[])[1];
    out.step1LeakEq = /386\s*\+\s*247\s*=\s*633/.test(sh1);
    const sh3 = MathVisualV5.renderStep('barModel', { a:386, b:247, parts:[{val:386},{val:247}] }, 3);
    out.step3RevealKept = /386\s*\+\s*247\s*=\s*633/.test(sh3); // step3 揭示应保留
    // 2) 出题链路切换验证
    let mkOk = true, sample = null;
    try {
      if (typeof renderMath === 'function') {
        // 模拟进入数学板块（需要 S 状态）
        if (S && S.math) S.math.mathProfile = { studyMode:'beginner', setAt: Date.now() };
        renderMath('3');
        const p = window.CURRENT_MATH_PROBLEM;
        sample = { hasTopic: !!p.topic, hasHints: Array.isArray(p.hints), hintL1: p.hint, hintHasAnswer: (p.hints && p.hints[0] ? /633|=[0-9]/.test(p.hints[0]) : null), choicesHasAnswer: p.choices ? p.choices.indexOf(p.answer) >= 0 : null, visualType: p.visualType };
      } else mkOk = false;
    } catch(e){ mkOk = false; sample = 'ERR:'+e.message; }
    out.renderMathOk = mkOk;
    out.sample = sample;
    // 3) 用生成的题目渲染 MathFlowV5 是否崩溃
    try {
      const p = window.CURRENT_MATH_PROBLEM;
      const html = MathFlowV5.start(p);
      out.flowStartOk = typeof html === 'string' && html.length > 50;
      out.flowHtmlHasAnswerInVisual = (function(){
        const host=document.createElement('div'); host.innerHTML=html; document.body.appendChild(host);
        const svg = host.querySelector('.mv-wrap svg') || host.querySelector('svg');
        const txt = svg ? svg.textContent : '';
        document.body.removeChild(host);
        return txt.indexOf(String(p.answer)) >= 0;
      })();
    } catch(e){ out.flowStartOk = 'ERR:'+e.message; }
    return out;
  });
  console.log(JSON.stringify(res, null, 2));
  console.log('errs:', errs.join(' | '));
  await browser.close();
})();
