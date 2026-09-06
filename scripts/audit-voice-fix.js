// 语音与听算专项实测（playwright-core + Edge）
const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1400 } });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));

  await page.goto('http://127.0.0.1:8145/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  // 1. 首页面板音色列表
  const homeVoices = await page.evaluate(() => {
    const zh = [...document.querySelectorAll('#cttsVoiceZh option')].map(o => o.value.split(':').pop());
    const en = [...document.querySelectorAll('#cttsVoiceEn option')].map(o => o.value.split(':').pop());
    return { zh, en };
  });
  const PRESET = ['alex', 'benjamin', 'charles', 'david', 'anna', 'bella', 'claire', 'diana'];
  const homeOk = homeVoices.zh.every(v => PRESET.includes(v)) && homeVoices.en.every(v => PRESET.includes(v));
  console.log('1. 首页面板音色全部合法:', homeOk ? 'PASS' : 'FAIL ' + JSON.stringify(homeVoices));

  // 2. 家长面板：解锁 → 语音卡片存在 + 打开 + 音色合法 + 保存防呆
  await page.evaluate(() => { document.getElementById('parentBtn').click(); });
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    const pwd = document.getElementById('parentPwd');
    if (pwd) {
      pwd.value = '1234';
      checkParentPwd();
    }
  });
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    const tab = document.querySelector('.parent-tab[data-pt="ai"]');
    if (tab) tab.click();
  });
  await page.waitForTimeout(600);
  const pTts = await page.evaluate(() => {
    const key = document.getElementById('cttsPKey');
    const zh = [...document.querySelectorAll('#cttsPVoiceZh option')].map(o => o.value.split(':').pop());
    const en = [...document.querySelectorAll('#cttsPVoiceEn option')].map(o => o.value.split(':').pop());
    const saveBtn = document.getElementById('cttsPSave');
    const testBtn = document.getElementById('cttsPTest');
    const clrBtn = document.getElementById('cttsPClear');
    // 防呆：粘网址应被拒
    key.value = 'cloud.siliconflow.cn';
    saveBtn.click();
    const status1 = document.getElementById('cttsPStatus').textContent;
    return { hasInput: !!key, zh, en, saveBtn: !!saveBtn, testBtn: !!testBtn, clrBtn: !!clrBtn, urlRejected: /网址|sk-/.test(status1) };
  });
  const pVoicesOk = pTts.zh.every(v => PRESET.includes(v)) && pTts.en.every(v => PRESET.includes(v));
  console.log('2. 家长面板语音卡片:', pTts.hasInput && pTts.saveBtn && pTts.testBtn && pTts.clrBtn ? 'PASS' : 'FAIL', '| 网址防呆:', pTts.urlRejected ? 'PASS' : 'FAIL', '| 音色合法:', pVoicesOk ? 'PASS' : 'FAIL ' + JSON.stringify({ zh: pTts.zh, en: pTts.en }));

  // 3. 听算挑战：打开 → 出 ✕ → 点击关闭 → 语音停
  await page.evaluate(() => { document.getElementById('parentClose')?.click(); });
  await page.waitForTimeout(500);
  await page.evaluate(() => { document.getElementById('lmOverlay')?.remove(); });
  const fab = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('button')];
    const b = btns.find(x => /听算挑战/.test(x.textContent || ''));
    if (b) { b.click(); return true; }
    return false;
  });
  await page.waitForTimeout(1200);
  const lmState1 = await page.evaluate(() => ({
    overlay: !!document.getElementById('lmOverlay'),
    closeBtn: !!document.getElementById('lmClose'),
    phase: window.ListeningMath ? ListeningMath.state.phase : null
  }));
  // 点 ✕
  await page.evaluate(() => { const c = document.getElementById('lmClose'); if (c) c.click(); });
  await page.waitForTimeout(300);
  const lmState2 = await page.evaluate(() => ({
    overlay: !!document.getElementById('lmOverlay'),
    phase: window.ListeningMath ? ListeningMath.state.phase : null,
    speechCancelled: !window.speechSynthesis || !window.speechSynthesis.speaking
  }));
  console.log('3. 听算浮动入口:', fab ? 'PASS' : 'FAIL', '| 弹层出现:', lmState1.overlay ? 'PASS' : 'FAIL', '| ✕按钮:', lmState1.closeBtn ? 'PASS' : 'FAIL', '| 点✕后关闭:', !lmState2.overlay ? 'PASS' : 'FAIL', '| phase=stopped:', lmState2.phase === 'stopped' ? 'PASS' : 'FAIL(' + lmState2.phase + ')', '| 语音已停:', lmState2.speechCancelled ? 'PASS' : 'FAIL');

  // 4. 重开确认 stop 后重开正常
  await page.evaluate(() => { const btns = [...document.querySelectorAll('button')]; btns.find(x => /听算挑战/.test(x.textContent || '')).click(); });
  await page.waitForTimeout(1200);
  const lmState3 = await page.evaluate(() => ({ overlay: !!document.getElementById('lmOverlay'), phase: ListeningMath.state.phase }));
  console.log('4. 关闭后重开正常:', lmState3.overlay && lmState3.phase === 'playing' ? 'PASS' : 'FAIL ' + JSON.stringify(lmState3));
  await page.evaluate(() => { try { ListeningMath.stop(); } catch (e) {} });

  console.log('pageerror 数量:', errs.length, errs.slice(0, 3));
  await page.screenshot({ path: 'selfcheck/supervisor/voice-listen-fix.png', fullPage: false });
  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('SCRIPT ERR:', e.message); process.exit(1); });
