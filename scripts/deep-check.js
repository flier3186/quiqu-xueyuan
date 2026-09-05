const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.goto('http://127.0.0.1:8131/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2500);

  // 1. QuizMood 钩子连通性（答对→庆祝+成长，答错→陪伴）
  const mood = await page.evaluate(async () => {
    if (!window.QuizMood || !window.PetCompanion) return 'NO_HOOK';
    const before = PetCompanion.getGrowth();
    QuizMood.right();
    const afterRight = { growth: PetCompanion.getGrowth(), mood: PetCompanion.getMood() };
    await new Promise(r => setTimeout(r, 2300)); // 等庆祝回落
    QuizMood.wrong();
    const afterWrong = PetCompanion.getMood();
    await new Promise(r => setTimeout(r, 3200));
    return JSON.stringify({ before, afterRight, afterWrong, finalMood: PetCompanion.getMood() });
  });
  console.log('QuizMood钩子:', mood);

  // 2. 数学内核直连压测（浏览器内跑）
  const kernel = await page.evaluate(() => {
    if (!window.MathKernel) return 'NO_KERNEL';
    let dup = 0, noAns = 0, hintLeak = 0;
    const seen = new Set();
    for (let i = 0; i < 300; i++) {
      const inst = MathKernel.generate();
      const key = (inst.formula || inst.question || '') + '#' + inst.answer;
      if (seen.has(key)) dup++;
      seen.add(key);
      if (inst.answer === undefined || inst.answer === null) noAns++;
      (inst.hints || []).slice(0, 2).forEach(h => { if (String(h).includes(String(inst.answer))) hintLeak++; });
    }
    return JSON.stringify({ generated: 300, dup, noAns, hintLeak });
  });
  console.log('内核300次:', kernel);

  // 3. 听算挑战完整一轮（弹开→开始→截图）
  await page.evaluate(() => { const b = Array.from(document.querySelectorAll('button')).find(x => /听算挑战/.test(x.textContent || '')); if (b) b.click(); });
  await page.waitForTimeout(900);
  await page.screenshot({ path: 'selfcheck/10-listen-open.png' });
  const listen = await page.evaluate(() => {
    const ov = document.getElementById('lmOverlay');
    if (!ov) return 'NO_OVERLAY';
    const btns = Array.from(ov.querySelectorAll('button')).map(b => b.textContent.trim()).slice(0, 8);
    return JSON.stringify({ btns });
  });
  console.log('听算弹层:', listen);
  await page.screenshot({ path: 'selfcheck/11-listen-run.png' });

  // 4. 全页 a-z 各导航视图遍历截图（冒烟：无 JS 崩溃即过）
  const views = await page.evaluate(() => Array.from(document.querySelectorAll('.nav-tab')).map(t => t.dataset.view));
  console.log('导航views:', JSON.stringify(views));
  for (const v of views) {
    await page.evaluate(view => { const t = document.querySelector('.nav-tab[data-view="' + view + '"]'); if (t) t.click(); }, v);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: 'selfcheck/nav-' + v + '.png' });
  }
  console.log('pageerror:', errs.length ? errs.join(' || ').slice(0, 300) : '0');
  await browser.close();
})();
