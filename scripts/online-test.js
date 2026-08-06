const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));

  await pg.goto('https://flier3186.github.io/quiqu-xueyuan/?v=' + Date.now(), { waitUntil: 'networkidle', timeout: 30000 });
  await pg.waitForTimeout(8000);

  console.log('=== 线上最终验证 ===');

  // Test math flow
  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(4000);

  // Click beginner mode
  await pg.locator('[data-mode="beginner"]').click();
  await pg.waitForTimeout(2000);

  const step1 = await pg.evaluate(() => ({
    studyMode: MathFlowV5?._sess?.studyMode,
    stage: MathFlowV5?._sess?.stage,
    buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 30))
  }));
  console.log('1. 选择模式后:', JSON.stringify(step1));

  // Click 一起来发现
  const discoverBtn = await pg.locator('button:has-text("一起来发现")').first();
  if (await discoverBtn.count() > 0) {
    await discoverBtn.click();
    await pg.waitForTimeout(2000);
    const step2 = await pg.evaluate(() => ({
      stage: MathFlowV5?._sess?.stage,
      step: MathFlowV5?._currentStep,
      buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 30))
    }));
    console.log('2. 发现后:', JSON.stringify(step2));
  }

  // Click 我开始答题
  const solveBtn = await pg.locator('button:has-text("我开始答题")').first();
  if (await solveBtn.count() > 0) {
    await solveBtn.click();
    await pg.waitForTimeout(2000);
    const step3 = await pg.evaluate(() => ({
      stage: MathFlowV5?._sess?.stage,
      step: MathFlowV5?._currentStep,
      buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 30))
    }));
    console.log('3. 答题后:', JSON.stringify(step3));
  }

  // Click 进入数形结合
  const explainBtn = await pg.locator('button:has-text("数形结合")').first();
  if (await explainBtn.count() > 0) {
    await explainBtn.click();
    await pg.waitForTimeout(2000);
    const step4 = await pg.evaluate(() => ({
      stage: MathFlowV5?._sess?.stage,
      step: MathFlowV5?._currentStep,
      buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 30))
    }));
    console.log('4. 数形结合后:', JSON.stringify(step4));
  }

  // Click next step
  for (let i = 1; i <= 3; i++) {
    const nextBtn = await pg.locator('button:has-text("下一步")').first();
    if (await nextBtn.count() > 0) {
      const before = await pg.evaluate(() => ({ stage: MathFlowV5?._sess?.stage, step: MathFlowV5?._currentStep }));
      await nextBtn.click();
      await pg.waitForTimeout(1500);
      const after = await pg.evaluate(() => ({ stage: MathFlowV5?._sess?.stage, step: MathFlowV5?._currentStep }));
      console.log(`5. 第${i}次下一步: ${before.stage}(step=${before.step}) -> ${after.stage}(step=${after.step})`);
    }
  }

  // Test English flashcards
  console.log('\n=== 英语闪卡测试 ===');
  await pg.locator('nav .nav-tab[data-view="english"]').click();
  await pg.waitForTimeout(3000);
  await pg.locator('.sub-tab[data-sub="vocab"]').click();
  await pg.waitForTimeout(2000);

  const photos = await pg.evaluate(() => {
    const imgs = document.querySelectorAll('.flash-photo');
    return {
      count: imgs.length,
      loaded: Array.from(imgs).filter(i => i.naturalWidth > 0).length
    };
  });
  console.log('flash-photo:', photos.count, '已加载:', photos.loaded);

  console.log('\n=== 验证完成 ===');
  await p.close();
})();
