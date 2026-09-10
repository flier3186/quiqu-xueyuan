// 验证修复：① 2a/3b/5a/6b 各连做 20 题重复数=0、JS错误=0
//           ② 自适应档位随连对升、连错降
const { chromium } = require('playwright-core');
const PORT = process.env.PORT || 8161;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 200)); });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const r = await page.evaluate(async () => {
    const sleep = ms => new Promise(r2 => setTimeout(r2, ms));
    const o = { sems: {} };
    const semKeys = ['2a', '3b', '5a', '6b'];

    // ① 各册连做 20 题：去重 + 指针单调
    for (const sk of semKeys) {
      try {
        await window.loadGrade(sk);
        for (let i = 0; i < 40 && !(window.MATH_BY_GRADE[sk] && window.MATH_BY_GRADE[sk].problems); i++) await sleep(120);
        window.switchView('math');
        S.math.grade = sk.replace(/[ab]$/, '');
        S.math.semester = sk.slice(-1);
        S.math.daily = null;
        S.math.idxBySem = {}; S.math.idxBySem[sk] = 0;
        window.MATH_SESSION = null;
        window.render();
        await sleep(250);
        const qs = [], idxs = [];
        for (let i = 0; i < 20; i++) {
          const p = window.CURRENT_MATH_PROBLEM;
          qs.push(String(p && p.question || '').trim());
          idxs.push(window.MATH_SESSION.problemIdx);
          window.mathNextProblem();
          await sleep(45);
        }
        const set = new Set(qs);
        o.sems[sk] = {
          clicked: qs.length,
          unique: set.size,
          dup: qs.length - set.size,
          idxFirst: idxs[0], idxLast: idxs[idxs.length - 1],
          monotonic: idxs.every((v, i) => i === 0 || v > idxs[i - 1]),
          sample: qs.slice(0, 3)
        };
      } catch (e) { o.sems[sk] = { err: String(e).slice(0, 200) }; }
    }

    // ② 自适应档位：连对升、连错降（用 3b）
    try {
      await window.loadGrade('3b');
      S.math.adaptive = { level: 1, correctStreak: 0, wrongStreak: 0 };
      const before = window._mathLevel();
      for (let i = 0; i < 3; i++) window._mathAdaptiveRecord(true);
      const afterUp = window._mathLevel();
      for (let i = 0; i < 2; i++) window._mathAdaptiveRecord(false);
      const afterDown = window._mathLevel();
      o.adaptive = { before, afterUp, afterDown,
        rose: afterUp > before, fell: afterDown < afterUp };
    } catch (e) { o.adaptiveErr = String(e).slice(0, 200); }

    // ③ 重开日练（_resetSemIdx）不重复
    try {
      window.switchView('math');
      S.math.grade = '3'; S.math.semester = 'b'; S.math.daily = null;
      S.math.idxBySem = { '3b': 0 }; window.MATH_SESSION = null; window.render();
      await sleep(200);
      // 先连做 10 题推进指针
      for (let i = 0; i < 10; i++) { window.mathNextProblem(); await sleep(30); }
      window._resetSemIdx();
      await sleep(150);
      const qs2 = [];
      for (let i = 0; i < 20; i++) { qs2.push(String(window.CURRENT_MATH_PROBLEM.question || '').trim()); window.mathNextProblem(); await sleep(30); }
      o.redoDup = qs2.length - new Set(qs2).size;
    } catch (e) { o.redoErr = String(e).slice(0, 200); }

    return o;
  });

  console.log(JSON.stringify(r, null, 1));
  const fail = [];
  for (const sk of ['2a', '3b', '5a', '6b']) {
    const s = r.sems[sk];
    if (!s || s.err) { fail.push(`${sk} 异常: ${s ? s.err : '无数据'}`); continue; }
    if (s.dup > 0) fail.push(`${sk} 重复 ${s.dup} 题`);
    if (!s.monotonic) fail.push(`${sk} 指针非单调`);
    if (s.idxLast <= s.idxFirst) fail.push(`${sk} 指针未前进`);
  }
  if (!r.adaptive || !r.adaptive.rose) fail.push('连对未升档');
  if (!r.adaptive || !r.adaptive.fell) fail.push('连错未降档');
  if (r.redoDup > 0) fail.push('重开日练后重复 ' + r.redoDup);

  console.log('\n=== 运行时错误 ===');
  console.log([...new Set(errs)].slice(0, 12).join('\n') || '(无)');
  console.log('\n=== 结论 ===');
  console.log(fail.length ? '❌ ' + fail.join(' | ') : '✅ 全部通过');
  await browser.close();
  process.exit(fail.length ? 1 : 0);
})();
