const { chromium } = require('playwright-core');
const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const logs = []; page.on('pageerror', e => logs.push('[pageerror] ' + e.message));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathFlowV5 !== 'undefined' && typeof MathVisualV5 !== 'undefined' && typeof MathKernel !== 'undefined', null, { timeout: 10000 }).catch(()=>{});

  const res = await page.evaluate(() => {
    // 找静态 386+247 barModel 题
    const arr = (window.MATH_BY_GRADE && (MATH_BY_GRADE['3a']||{}).problems) || [];
    const p = arr.find(x => x.formula && x.formula.indexOf('386') >= 0) || arr.find(x => x.visualType === 'barModel');
    const out = { found: !!p, formula: p && p.formula, vd: p && p.visualData };
    if (!p) return out;
    // 走真实链路
    const html = MathFlowV5.start(p);
    const host = document.createElement('div');
    host.innerHTML = html;
    document.body.appendChild(host);
    const rects = [...host.querySelectorAll('svg rect')].map(r => {
      const b = r.getBoundingClientRect();
      return { w: Math.round(b.width*100)/100, h: Math.round(b.height*100)/100, cls: r.getAttribute('class')||'' };
    });
    out.rectCount = rects.length;
    out.rects = rects;
    // 提取 bar 段（排除装饰小 rect）
    const barRects = rects.filter(r => r.h >= 20 && r.w > 5);
    out.barRects = barRects;
    if (barRects.length >= 2) {
      out.ratioActual = barRects[0].w / barRects[1].w;
      out.ratioExpected = p.visualData.parts[0].val / p.visualData.parts[1].val;
    }
    out.htmlHasTotal = /合计\s*=\s*633/.test(html);
    out.htmlHasStepEq = /386\s*\+\s*247\s*=\s*633/.test(html);
    document.body.removeChild(host);
    return out;
  });
  console.log(JSON.stringify(res, null, 2));
  console.log('logs:', logs.join(' | '));
  await browser.close();
})();
