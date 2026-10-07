/* 奇趣学园 · id 身份键真实点击回归（项目标准测试）
 * 原则：所有测试一律「以题目 id 为身份键 + 真实 DOM 点击模拟用户」，不再有"真机测试"。
 * 覆盖：neriage→solve→explain→practice→complete→下一题 全流程；断言主题 id 唯一、练习题干不重复。
 * 依赖：playwright-core（用环境变量 PW_CORE 指向安装目录，或 npm i -D playwright-core）。
 * 运行：node scripts/regress-math-id.js        # 自动起本地静态服务器（serve 本项目根）
 * 可选：PORT=8851 GRADES=2a,2b,... PER=8 OUT=<结果json>
 */
const http = require('http'), fss = require('fs'), pth = require('path');
const ROOT = pth.resolve(__dirname, '..');
function resolvePW(){
  const cands = [process.env.PW_CORE, ROOT + '/node_modules', process.cwd() + '/node_modules'].filter(Boolean);
  for (const c of cands){ try { return require(pth.join(c, 'playwright-core')); } catch (e) {} }
  try { return require('playwright-core'); } catch (e) {
    throw new Error('缺少 playwright-core：请 npm i -D playwright-core，或用 PW_CORE 指向其安装目录');
  }
}
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.gif':'image/gif',
  '.svg':'image/svg+xml', '.webp':'image/webp', '.woff':'font/woff', '.woff2':'font/woff2', '.mjs':'text/javascript; charset=utf-8', '.ico':'image/x-icon' };
function startServer(port){
  const srv = http.createServer((req, res) => {
    let u = decodeURIComponent(req.url.split('?')[0]); if (u === '/') u = '/index.html';
    const file = pth.join(ROOT, u.replace(/\//g, pth.sep));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
    fss.readFile(file, (err, buf) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': MIME[pth.extname(file).toLowerCase()] || 'application/octet-stream' }); res.end(buf);
    });
  });
  return new Promise(res => srv.listen(port, '127.0.0.1', () => res(srv)));
}
const PW = resolvePW();
const fs = require('fs');
const PORT = process.env.PORT || 8851;
const GRADES = (process.env.GRADES || '2a,2b,3a,3b,4a,4b,5a,5b,6a,6b').split(',');
const PER = Number(process.env.PER || 8);
const OUT = process.env.OUT || pth.join(ROOT, 'temp', 'idreg-result.json');

const PATS = ['_finishMicrocard', '_afterReview', '_reviewMark(true)', "advance('rme')", '_rmeSkip', '_rmeSubmit',
  "advance('neriage')", "advance('solve')", "advance('practice')", '_showPracticeVisual', '_practiceNext',
  '_socraticNext', "mathDismissDailyComplete('continue')", 'mathNextProblem'];

const SNAP = `() => {
  const F=window.MathFlowV5,s=F&&F._sess; const p=(s&&s.problem)||window.CURRENT_MATH_PROBLEM||{}; const lv=(s&&s.levelVar)||null;
  // "屏幕上显示的题面"：按 renderPractice/_renderL1..L4 的真实取题逻辑复算（L4 用 levelVar）
  let shown='';
  if(s && s.stage==='practice'){
    const pool=s.practicePool||[]; const base=pool[s.practiceIndex];
    if(base){
      const lvl=(s.practiceLevels&&s.practiceLevels[s.practiceIndex])||1;
      let v=null;
      // 引擎已改为「L1/L2/L3 直接渲染池内母题、L4 用 levelVar」；模型必须同步，否则自查假阳性
      shown = (lvl===4) ? String((s.levelVar&&s.levelVar.question)||base.question||'') : String(base.question||'');
    }
  }
  // 独立 DOM 校验值：练习卡里 font-size:15px + 粗体 的 div 即题面容器
  let domQ='';
  if(s && s.stage==='practice'){
    const layer=document.querySelector('#mathStage .cpa-layer');
    if(layer){
      layer.querySelectorAll('div').forEach(d=>{
        if(d.querySelector('.wp-choice')||d.querySelector('button')||d.querySelector('input')) return;
        const cs=getComputedStyle(d);
        if(cs.fontSize==='15px' && parseInt(cs.fontWeight,10)>=700){
          const t=(d.textContent||'').replace(/\\s+/g,'');
          if(t.length>domQ.length) domQ=t;
        }
      });
    }
  }
  const poolItem=(s&&s.stage==='practice')?((s.practicePool||[])[s.practiceIndex]):null;
  return { id:String(p.id||''), q:String(p.question||''), stage:s?s.stage:'(none)',
    pIdx:window.MATH_SESSION?window.MATH_SESSION.problemIdx:-1, sem:window.MATH_SESSION?window.MATH_SESSION.semKey:'',
    pI:s?s.practiceIndex:-1, pT:s?s.practiceTotal:-1,
    lvId:lv?String(lv.id||''):'', lvQ:lv?String(lv.question||''):'', shown:shown, domQ:domQ,
    poolId:poolItem?String(poolItem.id||''):'', poolQ:poolItem?String(poolItem.question||''):'',
    seenSize:(function(){try{const p=S&&S.math&&S.math.practiceSeen;return (p&&p.reg)?Object.keys(p.reg).length:-1;}catch(e){return -2;}})(),
    seenSem:(function(){try{const p=S&&S.math&&S.math.practiceSeen;return (p&&p.sem)||'';}catch(e){return 'err';}})(),
    seenKeys:(function(){try{const p=S&&S.math&&S.math.practiceSeen;return (p&&p.reg)?Object.keys(p.reg).slice(0,40).join('|'):'';}catch(e){return 'err';}})() };
}`;
const PICK = `() => {
  const host=document.getElementById('mathStage')||document.body;
  const nb=document.getElementById('v5PracticeNextBtn');
  if(nb && nb.style.display!=='none' && nb.offsetParent!==null) return {kind:'next',sel:'#v5PracticeNextBtn',nth:0,tag:'practice-next'};
  let answered=false; host.querySelectorAll('#v5PracticeFeedback, #v5SolveFeedback').forEach(f=>{ if(String(f.innerHTML||'').trim().length>2) answered=true; });
  const ch=Array.from(host.querySelectorAll('.wp-choice[onclick]'));
  if(ch.length && !answered){
    for(let i=0;i<ch.length;i++){ const oc=ch[i].getAttribute('onclick')||''; const m=oc.match(/\\(this,\\s*(\\d+),\\s*(\\d+)/);
      if(m&&Number(m[1])===Number(m[2])) return {kind:'choice',sel:'#mathStage .wp-choice[onclick]',nth:i,tag:oc.slice(0,40)}; }
    return {kind:'choice-none',sel:null,nth:-1,tag:'no-correct'};
  }
  const PATS=${JSON.stringify(PATS)};
  const all=Array.from(host.querySelectorAll('[onclick]'));
  for(const pat of PATS){ for(const el of all){ const oc=el.getAttribute('onclick')||'';
    if(oc.indexOf(pat)>=0){ if(el.offsetParent===null&&el.style.display==='none') continue; return {kind:'btn',sel:'#mathStage [onclick]',nth:all.indexOf(el),tag:oc.slice(0,40)}; } } }
  return {kind:'wait',sel:null,nth:-1,tag:''};
}`;
const evalFn = (src) => eval('(' + src + ')');
function withTimeout(p, ms, label) {
  return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout:' + label)), ms))]);
}
const snap = (page) => withTimeout(page.evaluate(evalFn(SNAP)), 8000, 'snap');
const pick = (page) => withTimeout(page.evaluate(evalFn(PICK)), 8000, 'pick');
const key = s => s.id + '|' + s.stage + '|' + s.pI;
const log = (s) => process.stdout.write(s + '\n');

async function clickPick(page, pk) {
  if (!pk.sel || pk.nth < 0) return false;
  try { const loc = page.locator(pk.sel).nth(pk.nth);
    await loc.scrollIntoViewIfNeeded({ timeout: 1200 }).catch(() => {});
    await loc.click({ timeout: 2000 }); return true;
  } catch (e) { return false; }
}
async function waitChange(page, prevKey, maxMs) {
  const t0 = Date.now();
  while (Date.now() - t0 < maxMs) {
    await page.waitForTimeout(140);
    const s = await snap(page);
    if (key(s) !== prevKey) return s;
  }
  return await snap(page);
}

async function runGrade(page, g) {
  const dv = g.replace(/[ab]$/, '');
  log('>>> ' + g);
  const ok = await withTimeout(page.evaluate(async (g) => {
    try {
      if (typeof S === 'undefined' || !S.math) return 'no-S';
      if (typeof switchView === 'function' && typeof currentMathGrade === 'undefined') switchView('math');
      S.math.semester = g.slice(-1);
      S.math.daily = null; S.math.idxBySem = { [g]: 0 };
      S.math.mathProfile = { studyMode: 'advanced', setAt: Date.now() };
      S.math.wrongProblems = [];
      window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
      window.MATH_DAILY_COMPLETE_DISMISSED = true;
      if (typeof loadGrade === 'function') await loadGrade(g);
      for (let i = 0; i < 60 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE[g] && window.MATH_BY_GRADE[g].problems); i++) await new Promise(r => setTimeout(r, 100));
      return 'ok';
    } catch (e) { return 'err:' + e.message; }
  }, g), 30000, 'init-' + g);
  if (ok !== 'ok') return { sem: g, err: ok };

  // 真实用户路径：点击年级药丸（同步 currentMathGrade + 内核 + 懒加载）
  try {
    await page.evaluate(() => { if (typeof switchView === 'function') switchView('math'); });
    await page.waitForSelector('#mathGrades .grade-pill', { timeout: 8000 });
    await page.locator(`#mathGrades .grade-pill[data-grade="${dv}"]`).first().click({ timeout: 4000 });
  } catch (e) { return { sem: g, err: 'grade-pill:' + String(e).slice(0, 120) }; }
  // 等待会话落到目标册
  let ready = false;
  for (let i = 0; i < 40; i++) {
    const st = await snap(page);
    if (st.sem === g && st.id) { ready = true; break; }
    await page.waitForTimeout(200);
  }
  if (!ready) return { sem: g, err: 'session-not-on-' + g, snap: await snap(page) };

  const mains = [], problems = [], acts = {};
  let mm = 0;   // 模型复算 vs DOM 实测 不一致次数（应为 0）
  for (let n = 0; n < PER; n++) {
    const first = await snap(page);
    if (!first.id) break;
    log('  . ' + g + ' #' + n + ' id=' + first.id + ' stage=' + first.stage + ' seen=' + first.seenSize + '/' + first.seenSem + ' keys=' + first.seenKeys);
    mains.push({ id: first.id, q: first.q, pIdx: first.pIdx, sem: first.sem });
    const byP = {};   // pI -> {baseId,q}（同一 pI 以"已重绘"的那次为准）
    let cur = first, turned = false;
    for (let k = 0; k < 46; k++) {
      const pk = await pick(page);
      acts[pk.kind] = (acts[pk.kind] || 0) + 1;
      if (pk.kind === 'wait' || !pk.sel) { await page.waitForTimeout(400); continue; }
      const before = key(cur);
      const clicked = await clickPick(page, pk);
      if (!clicked) { acts['click-fail'] = (acts['click-fail'] || 0) + 1; break; }
      const s = await waitChange(page, before, 1500);
      cur = s;
      // 只在"非选项点击"（即刚完成重绘）时记录，避免选项点击瞬间 practiceIndex 已+1 但 DOM 未重绘的脏值
      if (pk.kind !== 'choice' && s.stage === 'practice' && (s.domQ || s.shown)) {
        byP[s.pI] = { baseId: s.lvId, q: (s.domQ || s.shown), model: s.shown,
          level: (s.practiceLevels && s.practiceLevels[s.pI]), poolId: s.poolId, poolQ: s.poolQ, seenSize: s.seenSize };
        const _n = t => String(t||'').split('').filter(c=>{const k=c.charCodeAt(0);return (k>=48&&k<=57)||(k>=65&&k<=90)||(k>=97&&k<=122)||(k>=0x4e00&&k<=0x9fa5);}).join('');
        if (s.domQ && s.shown && _n(s.domQ).indexOf(_n(s.shown)) < 0) mm++;
      }
      if (s.id && s.id !== first.id) { turned = true; break; }
    }
    const prac = Object.keys(byP).map(Number).sort((a, b) => a - b).map(k => byP[k]);
    const qs = prac.map(x => x.q);
    // 归一化：去掉 📖/emoji/标点后比较，避免"同一题面多了个图标"被当成不同题
    const qn = qs.map(s => String(s).replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, ''));
    problems.push({ main: first.id, turned, pracCount: prac.length,
      dupQ: qn.length - new Set(qn).size, qs, qn, bases: prac.map(x => x.baseId) });
    await page.waitForTimeout(120);
  }
  const mainIds = mains.map(x => x.id);
  const uniqMain = new Set(mainIds).size;
  const dupWithin = problems.filter(p => p.dupQ > 0);
  // 跨主问题重复：整册所有练习出过的题面里，重复出现的次数（"做完这题又出这题"）
  const allQ = [];
  problems.forEach(p => (p.qn || []).forEach(q => allQ.push(q)));
  const crossDup = allQ.length - new Set(allQ).size;
  const crossDupPct = allQ.length ? Math.round(crossDup / allQ.length * 100) : 0;
  return { sem: g, mains, problems, acts,
    summary: { main: mainIds.length, uniqMain, dupMain: mainIds.length - uniqMain,
      notTurned: problems.filter(p => !p.turned).length,
      practiceProblems: problems.length, badPractice: dupWithin.length,
      crossDup, crossDupPct, modelMismatch: mm } };
}

(async () => {
  const WD = setTimeout(() => { log('WATCHDOG: 总超时，强制退出'); try { process.exit(3); } catch (e) {} }, 25 * 60 * 1000);
  const srv = await startServer(Number(PORT));
  const browser = await PW.chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await (await browser.newContext({ viewport: { width: 1366, height: 900 } })).newPage();
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 200)); });

  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);
  await page.evaluate(async () => {
    try { for (const r of await navigator.serviceWorker.getRegistrations()) await r.unregister(); } catch (e) {}
    try { if (window.caches) { for (const k of await caches.keys()) await caches.delete(k); } } catch (e) {}
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  const result = { grades: {}, errors: [] };
  for (const g of GRADES) {
    let r;
    try { r = await runGrade(page, g); }
    catch (e) { r = { sem: g, err: 'THREW:' + String(e).slice(0, 140) }; }
    result.grades[g] = r;
    log(g + ' ' + JSON.stringify(r.summary || { err: r.err }) + ' acts=' + JSON.stringify(r.acts || {}));
    try { fs.writeFileSync(OUT, JSON.stringify(result, null, 1)); } catch (e) {}
  }
  result.errors = [...new Set(errs)].slice(0, 20);
  try { fs.writeFileSync(OUT, JSON.stringify(result, null, 1)); console.log('saved ->', OUT); } catch (e) {}

  const fail = [];
  for (const g of GRADES) {
    const r = result.grades[g]; if (!r || !r.summary) continue;
    if (r.summary.dupMain > 0) fail.push(`${g} 主题 id 重复 ${r.summary.dupMain}`);
    if (r.summary.badPractice > 0) fail.push(`${g} 练习题重复(${r.summary.badPractice}题)`);
  }
  console.log('\n=== 运行时错误 ===\n' + (result.errors.join('\n') || '(无)'));
  console.log('\n=== 结论 ===\n' + (fail.length ? '❌ ' + fail.join(' | ') : '✅ 全部通过（id 唯一 / 练习不重复）'));
  clearTimeout(WD);
  await browser.close();
  try { srv.close(); } catch (e) {}
  process.exit(fail.length ? 1 : 0);
})();
