const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });
  await page.goto('http://127.0.0.1:8131/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => { const t = document.querySelector('[data-view="pet"]'); if (t) t.click(); else if (typeof switchPet === 'function') switchPet(0); });
  await page.waitForTimeout(1500);
  const diag = await page.evaluate(() => {
    const out = [];
    const pd = document.querySelector('#petDisplay');
    if (pd) { const r = pd.getBoundingClientRect(); out.push('petDisplay rect=' + Math.round(r.width) + 'x' + Math.round(r.height) + ' display=' + getComputedStyle(pd).display); }
    else out.push('petDisplay: NOT FOUND');
    const st = document.querySelector('.pc-stage-3d');
    if (st) { const r = st.getBoundingClientRect(); out.push('stage rect=' + Math.round(r.width) + 'x' + Math.round(r.height)); }
    else out.push('stage: NOT FOUND');
    const w = document.querySelector('.pc-pet-wrap');
    if (w) { const r = w.getBoundingClientRect(); const cs = getComputedStyle(w); out.push('wrap rect=' + Math.round(r.width) + 'x' + Math.round(r.height) + ' opacity=' + cs.opacity + ' transform=' + cs.transform.slice(0, 40)); }
    const sp = document.querySelector('.pc-sprite');
    if (sp) { const r = sp.getBoundingClientRect(); const cs = getComputedStyle(sp); out.push('sprite rect=' + Math.round(r.width) + 'x' + Math.round(r.height) + ' opacity=' + cs.opacity + ' natural=' + sp.naturalWidth); }
    const host = document.querySelector('.pc-host');
    if (host) { const r = host.getBoundingClientRect(); const cs = getComputedStyle(host); out.push('host rect=' + Math.round(r.width) + 'x' + Math.round(r.height) + ' overflow=' + cs.overflow + ' pos=' + cs.position); }
    return out.join('\n');
  });
  console.log(diag);
  await browser.close();
})();
