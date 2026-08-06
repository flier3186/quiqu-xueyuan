const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  await pg.goto('https://flier3186.github.io/quiqu-xueyuan/');
  await pg.waitForLoadState('domcontentloaded');
  await pg.waitForTimeout(5000);

  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(3000);

  await pg.locator('div:has-text("刚学这个知识点")').first().click();
  await pg.waitForTimeout(3000);

  const info = await pg.evaluate(() => ({
    stage: MathFlowV5?._sess?.stage,
    step: MathFlowV5?._currentStep,
    // Test renderCurrent directly
    renderOutput: MathFlowV5?.renderCurrent ? MathFlowV5.renderCurrent().substring(0, 500) : 'N/A',
    // Test updateMathStageV5
    updateFunc: typeof updateMathStageV5,
    // Check what's in mathStage now
    stageHTML: document.getElementById('mathStage')?.innerHTML?.substring(0, 500),
    // Check all buttons
    allButtons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim()),
    // Check onclick handlers
    allOnclicks: Array.from(document.querySelectorAll('[onclick]')).map(el => el.getAttribute('onclick').substring(0, 80))
  }));
  console.log('=== 详细状态 ===');
  console.log('stage:', info.stage, 'step:', info.step);
  console.log('renderCurrent:', info.renderOutput);
  console.log('updateMathStageV5:', info.updateFunc);
  console.log('stageHTML:', info.stageHTML);
  console.log('buttons:', info.allButtons);
  console.log('onclicks:', info.allOnclicks);

  // Try calling updateMathStageV5 manually
  if (typeof updateMathStageV5 === 'function') {
    console.log('\n手动调用 updateMathStageV5...');
    updateMathStageV5();
    await pg.waitForTimeout(2000);
    const after = await pg.evaluate(() => ({
      stage: MathFlowV5?._sess?.stage,
      buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim()),
      stageHTML: document.getElementById('mathStage')?.innerHTML?.substring(0, 300)
    }));
    console.log('调用后:', JSON.stringify(after));
  }

  await p.close();
})();
