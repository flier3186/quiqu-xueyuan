const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));
  pg.on('console', msg => { if(msg.type()==='error') console.log('CONSOLE_ERR:', msg.text()); });

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(6000);

  // Click math tab
  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(4000);
  await pg.locator('[data-mode="beginner"]').click();
  await pg.waitForTimeout(3000);
  await pg.locator('button:has-text("一起来发现")').first().click();
  await pg.waitForTimeout(2000);
  await pg.locator('#v5RMEAnswer').fill('500');
  await pg.locator('button:has-text("提交")').click();
  await pg.waitForTimeout(2500);

  // Debug: check discover stage
  const debug = await pg.evaluate(() => ({
    stage: MathFlowV5?._sess?.stage,
    ds: MathFlowV5?._sess?.discoveryStep,
    choices: Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
      idx: c.dataset.idx, onclick: c.getAttribute('onclick')
    })),
    html: document.getElementById('mathStage')?.innerHTML?.substring(0, 500)
  }));
  console.log('DEBUG:', JSON.stringify(debug, null, 2));

  await p.close();
})();
