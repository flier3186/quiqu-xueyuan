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

  // Check state at different times
  for (let i = 0; i <= 3; i++) {
    await pg.waitForTimeout(500);
    const state = await pg.evaluate(() => ({
      stage: MathFlowV5?._sess?.stage,
      ds: MathFlowV5?._sess?.discoveryStep,
      choicesCount: document.querySelectorAll('#v5DiscoveryChoices .wp-choice').length,
      feedback: document.getElementById('v5RMEFeedback')?.innerHTML?.substring(0, 50) || 'none'
    }));
    console.log(`t=${i*500}ms:`, JSON.stringify(state));
  }

  await p.close();
})();
