const { chromium } = require('playwright-core');
const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathVisualV5 !== 'undefined', null, { timeout: 10000 }).catch(()=>{});
  const report = await page.evaluate(() => {
    const debug = MathVisualV5.barModelStep.toString().slice(0, 400);
    const r1 = MathVisualV5.barModelStep({ a:386, b:247 }, 1);
    const r2 = MathVisualV5.renderStep('barModel', { a:386, b:247 }, 1);
    const direct1 = MathVisualV5.barModelStep({ parts:[{val:386},{val:247}] }, 1);
    return {
      debugHead: debug,
      r1_html: r1,
      r2_html: r2,
      direct1_html: direct1
    };
  });
  console.log('=== barModelStep source head ===');
  console.log(report.debugHead);
  console.log('\n=== renderStep(barModel,{a:386,b:247},1) ===');
  console.log(report.r2_html);
  await browser.close();
})();
