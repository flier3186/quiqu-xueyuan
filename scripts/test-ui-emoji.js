// UI 去 SVG 化后的视觉与功能回归
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:8146/index.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);

  // 1) 首屏无残留 UI-SVG：检查 nav/logo/quick 区域无 svg 元素
  const r1 = await p.evaluate(() => {
    const zones = ['.nav-tabs', '.logo-mark', '.parent-btn', '#micToggle'];
    return zones.map(z => {
      const el = document.querySelector(z);
      return z + ':' + (el ? (el.querySelector('svg') ? 'SVG残留' : '无svg ✓') : '选择器未找到');
    });
  });

  // 2) 各视图切换截图
  await p.screenshot({ path: 'scripts/_ui_overview.png' });
  for (const [view, file] of [['math', '_ui_math.png'], ['english', '_ui_english.png'], ['speak', '_ui_speak.png'], ['pet', '_ui_pet.png']]) {
    await p.evaluate(v => { if (typeof switchView === 'function') switchView(v); }, view);
    await p.waitForTimeout(1200);
    await p.screenshot({ path: 'scripts/' + file });
  }

  // 3) 收藏星 toggle 功能（english 视图第一个收藏按钮）
  await p.evaluate(() => switchView('english'));
  await p.waitForTimeout(1200);
  const fav = await p.evaluate(() => {
    const el = document.querySelector('.vocab-fav');
    if (!el) return '无收藏按钮';
    const before = el.querySelector('.em') ? el.querySelector('.em').style.filter : 'NO_EM';
    el.click();
    const after = el.querySelector('.em') ? el.querySelector('.em').style.filter : 'NO_EM';
    return '点击前filter=' + before + ' → 点击后filter=' + after;
  });

  console.log(r1.join('\n'));
  console.log('收藏toggle:', fav);
  console.log('pageerror:', errs.length, errs.slice(0, 3));
  await b.close();
})();
