const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));
  pg.on('console', msg => { if(msg.type()==='error') console.log('CONSOLE_ERR:', msg.text()); });

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(8000);

  console.log('=== 调试：点击模式选择 ===');

  // 检查 MathFlowV5 状态
  const initState = await pg.evaluate(() => ({
    hasV5: !!window.MathFlowV5,
    hasSess: !!window.MathFlowV5?._sess,
    sessKeys: window.MathFlowV5?._sess ? Object.keys(window.MathFlowV5._sess) : [],
    studyMode: window.MathFlowV5?._sess?.studyMode,
    stage: window.MathFlowV5?._sess?.stage
  }));
  console.log('初始状态:', JSON.stringify(initState));

  // 点击数学tab
  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(4000);

  const afterMath = await pg.evaluate(() => ({
    hasV5: !!window.MathFlowV5,
    hasSess: !!window.MathFlowV5?._sess,
    studyMode: window.MathFlowV5?._sess?.studyMode,
    stage: window.MathFlowV5?._sess?.stage,
    problemQuestion: window.MathFlowV5?._sess?.problem?.question?.substring(0, 30)
  }));
  console.log('点击数学tab后:', JSON.stringify(afterMath));

  // 检查模式选择容器
  const modeContainer = await pg.evaluate(() => {
    const el = document.querySelector('.mode-choice-layer');
    return el ? { exists: true, html: el.innerHTML.substring(0, 200) } : { exists: false };
  });
  console.log('模式选择层:', JSON.stringify(modeContainer));

  // 点击初学者模式
  console.log('点击 [data-mode="beginner"]...');
  const btn = await pg.locator('[data-mode="beginner"]');
  const btnCount = await btn.count();
  console.log('找到按钮数:', btnCount);
  if(btnCount > 0) {
    await btn.click();
    await pg.waitForTimeout(3000);
  }

  const afterClick = await pg.evaluate(() => ({
    studyMode: window.MathFlowV5?._sess?.studyMode,
    stage: window.MathFlowV5?._sess?.stage,
    stageHtml: document.getElementById('mathStage')?.innerHTML?.substring(0, 100)
  }));
  console.log('点击后状态:', JSON.stringify(afterClick));

  // 直接调用 _chooseStudyMode 测试
  console.log('\n直接调用 _chooseStudyMode...');
  await pg.evaluate(() => {
    if(window.MathFlowV5 && window.MathFlowV5._sess) {
      window.MathFlowV5._chooseStudyMode('beginner');
    }
  });
  await pg.waitForTimeout(2000);
  const afterDirectCall = await pg.evaluate(() => ({
    studyMode: window.MathFlowV5?._sess?.studyMode,
    stage: window.MathFlowV5?._sess?.stage
  }));
  console.log('直接调用后:', JSON.stringify(afterDirectCall));

  await p.close();
})();
