const { chromium } = require('playwright-core');
const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathVisualV5!=='undefined' && typeof MathKernel!=='undefined', null, { timeout: 10000 }).catch(()=>{});
  const res = await page.evaluate(() => {
    const p = { visualType:'barModel', visualData:{ total:633, parts:[{label:'原有',val:386,color:'#00A896'},{label:'新买',val:247,color:'#F5B800'}] } };
    // 真实链路：base barModel（solve/explain 用）
    const base = MathVisualV5.render('barModel', p.visualData, p);
    const baseW = [...base.matchAll(/<rect[^>]*width="([\d.]+)"[^>]*>/g)].map(x=>+(+x[1]).toFixed(1));
    // 分步动画（explain 用）
    const mf = MathVisualV5._resolveModelFamily(p);
    const stepW = {};
    for (const s of [1,2,3]){
      const sh = MathVisualV5.renderStep(mf, p.visualData, s);
      stepW[s] = [...sh.matchAll(/<rect[^>]*width="([\d.]+)"[^>]*>/g)].map(x=>+(+x[1]).toFixed(1));
    }
    return {
      baseWidths: baseW,
      baseRatio: baseW[0]/baseW[1],
      expectedRatio: 386/247,
      stepWidths: stepW,
      stepRatios: {1: stepW[1][0]/stepW[1][1], 2: stepW[2][0]/stepW[2][1], 3: stepW[3][0]/stepW[3][1]},
      baseLeak: /合计\s*=\s*633/.test(base),
    };
  });
  console.log(JSON.stringify(res, null, 2));
  await browser.close();
})();
