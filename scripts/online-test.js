const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'networkidle', timeout: 30000 });
  await pg.waitForTimeout(5000);

  // Test English flashcards
  console.log('=== 英语闪卡图片测试 ===');
  await pg.locator('nav .nav-tab[data-view="english"]').click();
  await pg.waitForTimeout(3000);
  await pg.locator('.sub-tab[data-sub="vocab"]').click();
  await pg.waitForTimeout(2000);

  const photos = await pg.evaluate(() => {
    const imgs = document.querySelectorAll('.flash-photo');
    return Array.from(imgs).map(i => ({
      src: i.src.substring(0, 80),
      nw: i.naturalWidth,
      complete: i.complete
    }));
  });
  console.log('flash-photo 数量:', photos.length);
  console.log('图片详情:', JSON.stringify(photos));

  await p.close();
})();
