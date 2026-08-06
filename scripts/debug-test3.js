const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));

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

  // Test the same logic as full-sim-test.js
  const choices = await pg.evaluate(() =>
    Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
      idx: parseInt(c.dataset.idx),
      text: c.textContent.trim().substring(0, 20),
      onclick: c.getAttribute('onclick')
    }))
  );
  console.log('choices:', JSON.stringify(choices));

  const correctChoice = choices.find(c => {
    const m = (c.onclick||'').match(/_discoverAnswer\(this,(\d+),(\d+),(\d+)\)/);
    console.log('match for', c.idx, ':', m);
    return m && parseInt(m[1]) === parseInt(m[2]);
  });
  console.log('correctChoice:', JSON.stringify(correctChoice));

  await p.close();
})();
