const { chromium } = require('playwright-core');
const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathFlowV5!=='undefined' && typeof MathVisualV5!=='undefined' && typeof MathKernel!=='undefined', null, { timeout: 10000 }).catch(()=>{});

  const res = await page.evaluate(() => {
    if (S && S.math) S.math.mathProfile = { studyMode: 'beginner' };
    const arr = (window.MATH_BY_GRADE && (MATH_BY_GRADE['3a']||{}).problems) || [];
    const p = arr.find(x => x.formula && x.formula.indexOf('386') >= 0) || arr.find(x => x.visualType === 'barModel');

    MathFlowV5.start(p);
    const stages = ['warmup','rme','discover','neriage','solve','explain','russian','askChild','practice'];
    const out = {};
    function measure(html){
      const host = document.createElement('div'); host.innerHTML = html; document.body.appendChild(host);
      const rects = [...host.querySelectorAll('svg rect')].map(r=>{const b=r.getBoundingClientRect();return {w:Math.round(b.width*100)/100,h:Math.round(b.height*100)/100};});
      const bars = rects.filter(r=>r.h>=20 && r.w>5);
      document.body.removeChild(host);
      return { count: rects.length, bars, leakTotal: /合计\s*=\s*633/.test(html), leakStepEq: /386\s*\+\s*247\s*=\s*633/.test(html) };
    }
    out.perStage = {};
    for (const st of stages){
      try {
        MathFlowV5._sess.stage = st;
        const html = MathFlowV5.renderCurrent();
        out.perStage[st] = measure(html);
      } catch(e){ out.perStage[st] = 'ERR:'+e.message; }
    }
    // 分步动画直接测
    out.steps = {};
    const mf = MathVisualV5._resolveModelFamily(p);
    for (const s of [1,2,3]){
      const sh = MathVisualV5.renderStep(mf, p.visualData, s);
      const host = document.createElement('div'); host.innerHTML = sh; document.body.appendChild(host);
      const rects = [...host.querySelectorAll('svg rect')].map(r=>{const b=r.getBoundingClientRect();return Math.round(b.width*100)/100;});
      const bars = rects.filter(w=>w>=20);
      document.body.removeChild(host);
      out.steps[s] = { bars, ratio: bars.length>=2 ? Math.round(bars[0]/bars[1]*1000)/1000 : null, leakEq: /386\s*\+\s*247\s*=\s*633/.test(sh), title: (sh.match(/<text[^>]*>(条形模型[^<]*)<\/text>/)||[])[1] };
    }
    out.modelFamily = mf;
    return out;
  });
  console.log(JSON.stringify(res, null, 2));
  console.log('errs:', errs.join(' | '));
  await browser.close();
})();
