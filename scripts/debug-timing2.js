const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(6000);

  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(4000);
  await pg.locator('[data-mode="beginner"]').click();
  await pg.waitForTimeout(3000);
  await pg.locator('button:has-text("一起来发现")').first().click();
  await pg.waitForTimeout(2000);
  await pg.locator('#v5RMEAnswer').fill('500');
  await pg.locator('button:has-text("提交")').click();

  // 精确等待1800ms后检查
  await pg.waitForTimeout(2000);
  const state = await pg.evaluate(() => ({
    stage: MathFlowV5?._sess?.stage,
    ds: MathFlowV5?._sess?.discoveryStep,
    choicesCount: document.querySelectorAll('#v5DiscoveryChoices .wp-choice').length,
    allChoices: Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
      idx: c.dataset.idx, onclick: c.getAttribute('onclick')
    }))
  }));
  console.log('After 2000ms:', JSON.stringify(state, null, 2));

  // 检查所有可能的discover元素
  const all = await pg.evaluate(() => ({
    stage: MathFlowV5?._sess?.stage,
    mathStageHtml: document.getElementById('mathStage')?.innerHTML?.substring(0, 300),
    hasV5DiscoveryChoices: !!document.getElementById('v5DiscoveryChoices'),
    hasWpChoices: document.querySelectorAll('.wp-choice').length
  }));
  console.log('DOM check:', JSON.stringify(all, null, 2));

  await p.close();
})();
