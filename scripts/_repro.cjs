const { chromium } = require('playwright-core');

const URL = 'file:///E:/workspace/project03-奇趣学园/src/quiqu-xueyuan/index.html';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const logs = [];
  page.on('console', m => logs.push('[console] ' + m.text()));
  page.on('pageerror', e => logs.push('[pageerror] ' + e.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof MathVisual !== 'undefined' && typeof MathVisualV5 !== 'undefined' && typeof MathKernel !== 'undefined', null, { timeout: 10000 }).catch(()=>{});

  const report = await page.evaluate(() => {
    const out = {};
    const bmInline = MathVisual.barModel({ parts:[{val:386,label:'A'},{val:247,label:'B'}], total:633 });
    out.inlineBarModelHasTotal = /合计\s*=\s*633/.test(bmInline);
    const m1 = [...bmInline.matchAll(/<rect[^>]*width="([\d.]+)"[^>]*>/g)].map(x=>+x[1]);
    out.inlineBarWidths = m1;

    const bmV5 = MathVisualV5.barModel({ parts:[{val:386,label:'A'},{val:247,label:'B'}], total:633 });
    out.v5BarModelHasTotal = /合计\s*=\s*633/.test(bmV5);

    const stepHTML = {};
    for (const s of [1,2,3]) stepHTML[s] = MathVisualV5.renderStep('barModel', { a:386, b:247 }, s);
    out.step1HasEquation = /386\s*\+\s*247\s*=\s*633/.test(stepHTML[1]);
    out.step1Title = (stepHTML[1].match(/<text[^>]*>(条形模型[^<]*)<\/text>/)||[])[1];
    out.step3HasEquation = /386\s*\+\s*247\s*=\s*633/.test(stepHTML[3]);
    const w1 = [...stepHTML[1].matchAll(/<rect[^>]*width="([\d.]+)"[^>]*>/g)].map(x=>+x[1]);
    out.stepBarWidths = w1;
    out.ratioActual = w1[0]/w1[1];
    out.ratioExpected = 386/247;

    out.currentProblem = window.CURRENT_MATH_PROBLEM ? {
      visualType: window.CURRENT_MATH_PROBLEM.visualType,
      modelFamily: window.CURRENT_MATH_PROBLEM.modelFamily,
      visualDataKeys: window.CURRENT_MATH_PROBLEM.visualData ? Object.keys(window.CURRENT_MATH_PROBLEM.visualData) : null,
      formula: window.CURRENT_MATH_PROBLEM.formula
    } : 'NO_CURRENT_PROBLEM';

    try { out.mkSample = MathKernel.generate('add-part-whole', 2); }
    catch(e) { out.mkSample = 'ERR:'+e.message; }
    return out;
  });

  console.log(JSON.stringify(report, null, 2));
  console.log('--- logs ---');
  console.log(logs.join('\n'));
  await browser.close();
})();
