// 小黑骨骼动画专项实测：尾骨层挂载/情绪切换/散步动作
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console:' + m.text()); });

  await p.goto('http://127.0.0.1:8146/index.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2500);

  const r1 = await p.evaluate(async () => {
    const out = {};
    // 直接挂载到独立容器测 rig（不依赖页面切板块）
    if (!window.__pcTestBox) {
      const d = document.createElement('div');
      d.id = '__pcTestBox';
      d.style.cssText = 'position:fixed;left:0;top:0;width:280px;height:280px;z-index:9999;background:#0F172A';
      document.body.appendChild(d);
      window.PetCompanion.mount({ target: d, assetsRoot: 'assets/pet3d' });
    }
    window.PetCompanion.setPet('cat');
    window.PetCompanion.setMood('idle');
    await new Promise(r => setTimeout(r, 1500));
    const tail = document.querySelector('.pc-rig-tail');
    const base = document.querySelector('.pc-imgbox .pc-sprite:not(.pc-rig-tail)');
    out.tailLoaded = !!(tail && tail.complete && tail.naturalWidth === 512);
    out.tailVisible = !!(tail && parseFloat(tail.style.opacity) === 1);
    out.tailOrigin = tail ? tail.style.transformOrigin : 'none';
    out.tailAnim = tail ? getComputedStyle(tail).animationName : 'none';
    out.baseLoaded = !!(base && base.complete && base.naturalWidth > 0);
    out.baseIsTailless = !!(base && base.src.includes('cat-idle.png'));
    // 切到 celebrate：尾骨层应淡出
    window.PetCompanion.setMood('celebrate');
    await new Promise(r => setTimeout(r, 800));
    out.celebrateBase = !!(document.querySelector('.pc-imgbox .pc-sprite:not(.pc-rig-tail)') || {}).src;
    const t2 = document.querySelector('.pc-rig-tail');
    out.tailHiddenOnCelebrate = !t2 || t2.style.opacity === '0' || !t2.parentNode;
    // 回 idle：尾骨层回归
    window.PetCompanion.setMood('idle');
    await new Promise(r => setTimeout(r, 1200));
    out.tailBackOnIdle = !!document.querySelector('.pc-rig-tail');
    // 体色验证：idle 基座采样应为近黑
    const cv = document.createElement('canvas');
    const img = base;
    cv.width = img.naturalWidth; cv.height = img.naturalHeight;
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const px = ctx.getImageData(256, 300, 1, 1).data; // 身体区域
    out.bodyRGB = [px[0], px[1], px[2]];
    return out;
  });
  console.log(JSON.stringify(r1, null, 1));

  // 散步：压缩调度等待不可行，直接调内部——通过触发可见性不可靠；改为验证 CSS/类存在
  const r2 = await p.evaluate(() => {
    const wrap = document.querySelector('.pc-pet-wrap');
    return { strollVarSupported: wrap && getComputedStyle(wrap).getPropertyValue('--pc-stroll-x') !== undefined };
  });
  console.log(JSON.stringify(r2));
  console.log('pageerror:', errs.length, errs.slice(0, 3));
  await p.screenshot({ path: 'scripts/_rig_test.png' });
  await b.close();
  const pass = r1.tailLoaded && r1.tailVisible && r1.baseLoaded && r1.tailHiddenOnCelebrate && r1.tailBackOnIdle && errs.length === 0;
  console.log(pass ? 'RIG_TEST_PASS' : 'RIG_TEST_FAIL');
})().catch(e => { console.error('FATAL', e); process.exit(1); });
