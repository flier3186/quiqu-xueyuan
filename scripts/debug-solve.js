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
  await pg.waitForTimeout(2500);

  // Complete 3 discovery steps
  for(let step = 0; step < 3; step++){
    const choices = await pg.evaluate(() =>
      Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
        idx: parseInt(c.dataset.idx), onclick: c.getAttribute('onclick')
      }))
    );
    const correctChoice = choices.find(c => {
      const m = (c.onclick||'').match(/_discoverAnswer\(this,(\d+),(\d+),(\d+)\)/);
      return m && parseInt(m[1]) === parseInt(m[2]);
    });
    if(correctChoice) {
      await pg.evaluate(({ chosen, s }) => {
        const el = document.querySelector(`#v5DiscoveryChoices .wp-choice[data-idx="${chosen}"]`);
        if(el) MathFlowV5._discoverAnswer(el, chosen, chosen, s);
      }, { chosen: correctChoice.idx, s: step });
    }
    await pg.waitForTimeout(1500);
  }

  // Check solve stage
  await pg.waitForTimeout(1500);
  const solveState = await pg.evaluate(() => ({
    stage: MathFlowV5?._sess?.stage,
    buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim()),
    html: document.getElementById('mathStage')?.innerHTML?.substring(0, 500)
  }));
  console.log('Solve stage:', JSON.stringify(solveState, null, 2));

  await p.close();
})();
