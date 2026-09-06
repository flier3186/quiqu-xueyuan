// 奇趣学园 全板块真实用户自检脚本（playwright-core + 系统 Edge）
// 用法: node scripts/self-check.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-core');

const BASE = 'http://127.0.0.1:8141/index.html';
const OUT = path.join(__dirname, '..', 'selfcheck');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const errors = [];
const results = [];

function log(name, ok, detail) {
  results.push({ name, ok, detail: detail || '' });
  console.log((ok ? 'PASS' : 'FAIL') + ' | ' + name + (detail ? ' | ' + detail : ''));
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  // 1. 首页加载
  await page.goto(BASE, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const bodyText = await page.evaluate(() => document.body.innerText);
  log('首页加载', bodyText.length > 50);
  await page.screenshot({ path: path.join(OUT, '01-home.png'), fullPage: false });

  // 2. 全局资源加载检查（pet3d 等）
  const badRes = await page.evaluate(() => Array.from(document.images)
    .filter(i => i.src && i.naturalWidth === 0 && i.src.includes('pet3d'))
    .map(i => i.src));
  log('首页无 pet3d 404', badRes.length === 0, badRes.join(','));

  // 3. 数学板块：进入 + 出题 + 答题
  const navMath = await page.evaluate(() => {
    // 寻找数学入口
    const btns = Array.from(document.querySelectorAll('button, .nav-item, .card, [onclick]'));
    const b = btns.find(x => /数学/.test(x.textContent || '') && (x.onclick || x.getAttribute('onclick') || x.className.includes('nav') || x.className.includes('card')));
    if (b) { b.click(); return true; } return false;
  });
  await page.waitForTimeout(1500);
  log('进入数学板块', navMath);
  await page.screenshot({ path: path.join(OUT, '02-math.png') });

  // 数学练习内页截图（滚动查看数形结合图）
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(OUT, '03-math-full.png'), fullPage: true });

  // 4. 宠物板块
  const navPet = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, .nav-item, .card, [onclick], .menu-item, li, div'));
    const b = els.find(x => /宠物/.test(x.textContent || '') && (x.getAttribute('onclick') || x.onclick));
    if (b) { b.click(); return true; }
    // 兜底:尝试全局函数
    if (typeof window.showPage === 'function') { try { window.showPage('pet'); return true; } catch(e) {} }
    return false;
  });
  await page.waitForTimeout(1800);
  log('进入宠物板块', navPet);
  const pcMounted = await page.evaluate(() => !!document.querySelector('.pc-stage-3d'));
  log('3D伙伴舞台挂载', pcMounted);
  const pcSprite = await page.evaluate(() => { const i = document.querySelector('.pc-sprite'); return i ? i.src.split('/').pop() : 'NONE'; });
  log('伙伴精灵加载', pcSprite.includes('.png'), pcSprite);
  await page.screenshot({ path: path.join(OUT, '04-pet.png'), fullPage: true });

  // 5. 宠物切换（5只，逐只等待异步挂载）
  let switchOk = true, switchDetail = [];
  if (await page.evaluate(() => typeof switchPet === 'function' && typeof PETS !== 'undefined')) {
    for (let i = 0; i < await page.evaluate(() => PETS.length); i++) {
      await page.evaluate(n => switchPet(n), i);
      await page.waitForTimeout(900);
      const sprite = await page.evaluate(() => { const el = document.querySelector('.pc-sprite'); return el ? el.src.split('/').pop() : 'NONE'; });
      const pid = await page.evaluate(n => PETS[n].id, i);
      switchDetail.push(pid + ':' + sprite);
      if (!sprite.startsWith(pid + '-')) switchOk = false;
    }
  } else { switchOk = false; switchDetail.push('NO_FN'); }
  log('五宠物切换', switchOk, switchDetail.join(' | '));
  await page.screenshot({ path: path.join(OUT, '05-pet-switch.png') });

  // 6. 喂食
  const feedRes = await page.evaluate(() => { try { petAction('feed'); return true; } catch (e) { return 'ERR:' + e.message; } });
  await page.waitForTimeout(600);
  log('喂食动作', feedRes === true, String(feedRes));
  await page.screenshot({ path: path.join(OUT, '06-pet-feed.png') });

  // 7. 英语板块
  const navEng = await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, .nav-item, [onclick]'));
    const b = els.find(x => /英语|单词/.test(x.textContent || '') && (x.getAttribute('onclick') || x.onclick));
    if (b) { b.click(); return true; } return false;
  });
  await page.waitForTimeout(1500);
  log('进入英语板块', navEng);
  await page.screenshot({ path: path.join(OUT, '07-english.png'), fullPage: true });

  // 8. 口语板块（主导航 nav-tab data-view=speak）
  const navTalk = await page.evaluate(() => {
    const t = document.querySelector('.nav-tab[data-view="speak"]');
    if (t) { t.click(); return true; } return false;
  });
  await page.waitForTimeout(1200);
  log('进入口语板块', navTalk);
  await page.screenshot({ path: path.join(OUT, '08-talk.png') });

  // 9. 听算挑战入口（浮动按钮，按文字匹配）
  const navListen = await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find(x => /听算挑战/.test(x.textContent || ''));
    if (b) { b.click(); return true; } return false;
  });
  await page.waitForTimeout(800);
  const lmOpen = await page.evaluate(() => !!document.getElementById('lmOverlay'));
  log('听算挑战弹层', navListen && lmOpen, 'fab=' + navListen + ' overlay=' + lmOpen);
  await page.screenshot({ path: path.join(OUT, '09-listening.png') });
  // 关闭
  await page.evaluate(() => { const o = document.getElementById('lmOverlay'); if (o) o.remove(); });

  // 汇总
  const fails = results.filter(r => !r.ok);
  console.log('\n===== 自检汇总 =====');
  console.log('PASS: ' + (results.length - fails.length) + '/' + results.length);
  if (errors.length) { console.log('JS错误 ' + errors.length + ' 条:'); errors.slice(0, 10).forEach(e => console.log('  ' + e.slice(0, 150))); }
  else console.log('JS错误: 0');
  fs.writeFileSync(path.join(OUT, 'report.txt'), results.map(r => (r.ok ? 'PASS' : 'FAIL') + ' | ' + r.name + ' | ' + r.detail).join('\n') + '\n\nJS_ERRORS:\n' + errors.join('\n'));
  await browser.close();
  process.exit(fails.length || errors.length ? 1 : 0);
})();
