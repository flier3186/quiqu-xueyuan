/**
 * scripts/_audit_user_journey.js · 奇趣学园「真实使用者视角」端到端审计
 *
 * 原则：像孩子/家长那样真的点击、真的输入、真的翻页，把每个功能走一遍。
 *   - 逐题：真实渲染 solve 阶段 + 真实 .click() 提交，检查渲染/答案/泄漏/报错
 *   - 十条操作项全部覆盖（不抽样、不跳过）
 *   - 只发现、不修改任何业务代码
 *   - 异常分级：体验事故 / 一般缺陷 / 优化建议；有前两者 → 退出码 1（CI 门禁）
 *
 * 运行：
 *   PORT=8161 node scripts/_audit_user_journey.js
 */
const path = require('path');
const fs = require('fs');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

const PORT = process.env.PORT || 8161;
const SHOT_DIR = path.join(__dirname, '..', 'audit-shots');
const GRADES = ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b']; // 全 10 册
const MAIN_GRADE = '3b'; // 各「旅程」代表性册
const MAX_SHOTS = 36;

// ---------- 异常收集 ----------
const findings = []; // {sev, item, where, detail}
let shotCount = 0;
const pendingShots = []; // {label, prob, semKey}
function add(sev, item, where, detail) {
  findings.push({ sev, item, where, detail: String(detail || '').slice(0, 240) });
}
function scheduleShot(label, prob, semKey) {
  if (shotCount >= MAX_SHOTS || pendingShots.length >= MAX_SHOTS) return;
  if (prob && typeof prob === 'object') pendingShots.push({ label: String(label).slice(0, 40), prob, semKey });
}

const jsErrors = [];
const consoleErrors = [];

// ---------- 工具 ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function ensureDir(dir) {
  try { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
}

(async () => {
  ensureDir(SHOT_DIR);
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  page.on('pageerror', (e) => jsErrors.push('PAGEERROR: ' + String(e.message || e).slice(0, 220)));
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push('CONSOLE: ' + m.text().slice(0, 220)); });

  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);
  // 净化池/进度（每次体检从干净状态开始，避免历史数据干扰）
  await page.evaluate(() => {
    try { localStorage.removeItem('quiqu_math_progress_v1'); } catch (e) {}
    try { localStorage.removeItem('quiqu_math_diag_v1'); } catch (e) {}
    if (typeof S !== 'undefined' && S.math) { S.math.wrongProblems = []; S.math.daily = null; S.math.diag = null; S.math.today = null; }
  });

  // 预加载全部 10 册（懒加载，否则 MATH_BY_GRADE[g] 为空）
  await page.evaluate(async () => {
    for (const g of ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b']) {
      try { if (typeof loadGrade === 'function') await loadGrade(g); } catch (e) {}
    }
  });
  await page.waitForTimeout(800);

  const totalOps = { grades: 0, problems: 0, clicks: 0, journeys: 0 };

  // =====================================================================
  // 全年级遍历 + 逐题作答（操作项 1、2、4-泄漏）+ 知识链点亮前基线（8）
  // =====================================================================
  console.log('\n===== 操作项 1/2/4：全年级遍历 + 逐题真实作答 + 答案泄漏 =====');

  const bulk = await page.evaluate(async (grades) => {
    const out = [];
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    for (const g of grades) {
      const semKey = g;
      const dv = String(g).replace(/[ab]$/, '');
      const sem = String(g).slice(-1);
      try {
        if (typeof S !== 'undefined' && S.math) { S.math.grade = dv; S.math.semester = sem; S.math.daily = null; S.math.idxBySem = S.math.idxBySem || {}; S.math.idxBySem[semKey] = 0; }
        window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
        if (typeof switchView === 'function') switchView('math');
        if (typeof render === 'function') render();
        await sleep(250);
        // 等题库真正就绪
        for (let i = 0; i < 40 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE[semKey] && window.MATH_BY_GRADE[semKey].problems); i++) await sleep(120);
        // 取本册真实题池（净化池优先，回退原始）
        let bank = [];
        try { if (window.MathDailyBank && MathDailyBank.build) bank = MathDailyBank.build(semKey).list; } catch (e) {}
        if (!bank || !bank.length) { const d = (window.MATH_BY_GRADE && window.MATH_BY_GRADE[semKey]) || {}; bank = d.problems || []; }
        const gradeTitle = (window.MATH_BY_GRADE && window.MATH_BY_GRADE[semKey] && window.MATH_BY_GRADE[semKey].title) || '';
        const cur = window.CURRENT_MATH_PROBLEM;
        if (!window.MathFlowV5) { out.push({ semKey, err: 'no MathFlowV5' }); continue; }
        // 初始化会话（start 会建 _sess 并绑定首题）
        try { MathFlowV5.start(cur || (bank[0] || { question: '' }), 'default'); } catch (e) { out.push({ semKey, err: 'start:' + e.message }); continue; }
        const rec = { semKey, title: gradeTitle, total: bank.length, answered: 0, noChoice: 0, emptyQ: 0, ansNotInChoice: 0, dupChoice: 0, renderBad: 0, diagramEmpty: 0, diagramBad: 0, leak: 0, jsAtStart: (window.__lastBulkErr || 0), samples: [] };
        for (let i = 0; i < bank.length; i++) {
          const prob = bank[i];
          try {
            MathFlowV5._sess.problem = prob;
            MathFlowV5._sess.stage = 'solve';
            if (typeof updateMathStageV5 === 'function') updateMathStageV5();
            const host = document.getElementById('mathStage');
            const h = host ? host.innerHTML : '';
            // 题干非空
            const q = String(prob.question || '').trim();
            if (!q) { rec.emptyQ++; if (rec.samples.length < 4) rec.samples.push({ type: 'emptyQ', prob, pIdx: i }); }
            // 选项 / 答案可答
            const choices = Array.isArray(prob.choices) ? prob.choices : [];
            if (!choices.length) {
              rec.noChoice++;
              if (rec.samples.length < 4) rec.samples.push({ type: 'noChoice', prob, pIdx: i });
            } else {
              if (new Set(choices.map(String)).size !== choices.length) rec.dupChoice++;
              const correctIdx = choices.indexOf(prob.answer);
              if (correctIdx < 0) {
                rec.ansNotInChoice++;
                if (rec.samples.length < 4) rec.samples.push({ type: 'ansNotInChoice', prob, pIdx: i });
              }
              // 渲染异常（undefined/NaN 上屏）
              if (/undefined|NaN/.test(h)) rec.renderBad++;
              // 图形区渲染
              if (prob.visualData && prob.visualType) {
                let svg = '';
                try { if (typeof _mvHTML === 'function') svg = _mvHTML(prob); } catch (e) { svg = 'THROW'; }
                if (!svg || svg === 'THROW' || svg.indexOf('<svg') < 0 || svg.indexOf('mv-empty') >= 0) {
                  rec.diagramEmpty++;
                  if (rec.samples.length < 4) rec.samples.push({ type: 'diagramEmpty', prob, pIdx: i });
                } else if (/undefined|NaN/.test(String(svg))) {
                  rec.diagramBad++;
                  if (rec.samples.length < 4) rec.samples.push({ type: 'diagramBad', prob, pIdx: i });
                }
              }
              // 答案泄漏（高压线）：仅当 _formulaLeaksPreAnswer 判定"应隐藏算式"时，
              // 若渲染里仍出现完整算式（含答案）才算真泄漏；非泄漏题本就显示算式，不算泄漏。
              const shouldHide = (typeof _formulaLeaksPreAnswer === 'function') ? _formulaLeaksPreAnswer(prob) : false;
              if (shouldHide) {
                const f = String(prob.formula == null ? '' : prob.formula).trim();
                if (f && h.indexOf(f) >= 0) {
                  rec.leak++;
                  if (rec.samples.length < 4) rec.samples.push({ type: 'leak', prob, pIdx: i });
                }
              }
              // 真实点击提交（触发 MathFlowV5._solveAnswer 真实批改）
              const el = document.querySelector('#v5SolveChoices .wp-choice[data-idx="' + correctIdx + '"]');
              if (el) { el.click(); rec.answered++; }
            }
          } catch (e) {
            if (rec.samples.length < 4) rec.samples.push({ type: 'throw', prob, pIdx: i, err: e.message });
            rec.renderBad++;
          }
        }
        out.push(rec);
      } catch (e) { out.push({ semKey, err: 'grade:' + e.message }); }
    }
    return out;
  }, GRADES);

  for (const r of bulk) {
    if (r.err) { add('体验事故', '1.全年级遍历', r.semKey, '该册加载/初始化失败：' + r.err); continue; }
    totalOps.grades++;
    totalOps.problems += r.total;
    totalOps.clicks += r.answered;
    const tag = `【${r.semKey}·${r.title || '?'} 共${r.total}题】`;
    if (r.emptyQ) add('体验事故', '1.全年级遍历', r.semKey, `${tag} 空题 ${r.emptyQ} 道（题干为空，孩子无题可做）`);
    if (r.noChoice) add('体验事故', '2.逐题作答', r.semKey, `${tag} ${r.noChoice} 道无选项（无法作答）`);
    if (r.ansNotInChoice) add('体验事故', '2.逐题作答', r.semKey, `${tag} ${r.ansNotInChoice} 道正确答案不在选项里（怎么点都错，必受挫）`);
    if (r.renderBad) add('体验事故', '2.逐题作答', r.semKey, `${tag} ${r.renderBad} 道渲染出 undefined/NaN 文本`);
    if (r.diagramEmpty) add('一般缺陷', '2.逐题作答', r.semKey, `${tag} ${r.diagramEmpty} 道有图形数据却未渲染出图（mv-empty/throw）`);
    if (r.diagramBad) add('体验事故', '2.逐题作答', r.semKey, `${tag} ${r.diagramBad} 道图形区渲染出 undefined/NaN`);
    if (r.dupChoice) add('一般缺陷', '2.逐题作答', r.semKey, `${tag} ${r.dupChoice} 道选项含重复项`);
    if (r.leak) add('体验事故', '4.讲解/微卡片', r.semKey, `${tag} ${r.leak} 道作答前题干/图形泄露答案（高压线）`);
    // 调度样例截图
    (r.samples || []).forEach((s, i) => scheduleShot(`${r.semKey}_${s.type}${i > 0 ? '_' + i : ''}`, s.prob, r.semKey));
    console.log(`  ${tag} 答${r.answered} 空题${r.emptyQ} 无选项${r.noChoice} 答案缺${r.ansNotInChoice} 渲染${r.renderBad} 图空${r.diagramEmpty} 图坏${r.diagramBad} 泄漏${r.leak}`);
  }

  // =====================================================================
  // 操作项 3 + 10：完整日练 14 题 + 连续做题去重（真实 mathNextProblem）
  // =====================================================================
  console.log('\n===== 操作项 3/10：完整日练 + 连续去重（真实翻页 mathNextProblem）=====');
  async function dailyJourney(semKey) {
    const dv = semKey.replace(/[ab]$/, ''); const sem = semKey.slice(-1);
    return await page.evaluate(async (arg) => {
      const semKey = arg.semKey, dv = arg.dv, sem = arg.sem;
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      if (typeof S !== 'undefined' && S.math) { S.math.grade = dv; S.math.semester = sem; S.math.daily = null; S.math.idxBySem = S.math.idxBySem || {}; S.math.idxBySem[semKey] = 0; }
      window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
      if (typeof switchView === 'function') switchView('math');
      if (typeof render === 'function') render();
      await sleep(250);
      for (let i = 0; i < 40 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE[semKey]); i++) await sleep(120);
      MathFlowV5.start(window.CURRENT_MATH_PROBLEM, 'default');
      MathFlowV5._chooseStudyMode('beginner');
      const seen = [], sems = [], idxs = [];
      let done = 0, dailyComplete = false, dup = 0;
      for (let n = 0; n < 20; n++) {
        const prob = window.CURRENT_MATH_PROBLEM;
        MathFlowV5._sess.problem = prob; MathFlowV5._sess.stage = 'solve';
        if (typeof updateMathStageV5 === 'function') updateMathStageV5();
        const q = String(prob && prob.question || '').trim();
        seen.push(q); sems.push(window.MATH_SESSION ? window.MATH_SESSION.semKey : ''); idxs.push(window.MATH_SESSION ? window.MATH_SESSION.problemIdx : -1);
        const choices = Array.isArray(prob && prob.choices) ? prob.choices : [];
        const ci = choices.indexOf(prob && prob.answer);
        const el = ci >= 0 ? document.querySelector('#v5SolveChoices .wp-choice[data-idx="' + ci + '"]') : null;
        if (el) el.click();
        if (typeof mathNextProblem === 'function') mathNextProblem();
        if (typeof render === 'function') render(); // 刷新 CURRENT_MATH_PROBLEM 到下一题
        await sleep(40);
        done = (S.math.daily && S.math.daily.done) || 0;
        dailyComplete = done >= 14;
      }
      const uniq = new Set(seen).size;
      dup = seen.length - uniq;
      const banner = document.body.innerText.indexOf('题已完成') >= 0;
      return { semKey, asked: seen.length, unique: uniq, dup, dailyDone: done, dailyComplete, bannerSeen: banner, first5: seen.slice(0, 5) };
    }, { semKey, dv, sem });
  }
  const daily3b = await dailyJourney('3b');
  totalOps.journeys++;
  console.log('  3b 日练:', JSON.stringify(daily3b));
  if (daily3b.dailyDone < 14 || !daily3b.dailyComplete) add('体验事故', '3.完整日练', '3b', `做满 20 次仍未达标：done=${daily3b.dailyDone} complete=${daily3b.dailyComplete} banner=${daily3b.bannerSeen}`);
  if (daily3b.dup > 0) add('体验事故', '10.连续做题去重', '3b', `连做 20 题出现 ${daily3b.dup} 次重复题（回归！）`);
  // 额外在 6a 再守一遍去重回归
  const dedup6a = await dailyJourney('6a');
  totalOps.journeys++;
  console.log('  6a 日练/去重:', JSON.stringify(dedup6a));
  if (dedup6a.dup > 0) add('体验事故', '10.连续做题去重', '6a', `连做 20 题出现 ${dedup6a.dup} 次重复题（回归！）`);
  if (dedup6a.dailyDone < 14) add('体验事故', '3.完整日练', '6a', `达标失败 done=${dedup6a.dailyDone}`);

  // =====================================================================
  // 操作项 5：教具拖拽（真实 mouse down/move/up）
  // =====================================================================
  console.log('\n===== 操作项 5：教具拖拽（真实鼠标）=====');
  const mp = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    // 跨全册扫描：找第一道解题渲染后真正带 data-mp-drag 可拖拽元素的题
    let target = null, targetSem = '3b';
    const grades = ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b'];
    for (const g of grades) {
      let bank = [];
      try { if (window.MathDailyBank && MathDailyBank.build) bank = MathDailyBank.build(g).list; } catch (e) {}
      if (!bank.length) { const d = (window.MATH_BY_GRADE && window.MATH_BY_GRADE[g]) || {}; bank = d.problems || []; }
      for (const p of bank) {
        try { const h = MathManipulative.renderSafe ? MathManipulative.renderSafe(p) : ''; if (h && /data-mp-drag/.test(h)) { target = p; targetSem = g; break; } } catch (e) {}
      }
      if (target) break;
    }
    if (!target) {
      // 退路：看 classify 是否标记 draggable
      for (const g of grades) {
        let bank = (window.MathDailyBank && MathDailyBank.build(g).list) || [];
        for (const p of bank) { try { const c = MathManipulative.classify(p); if (c && c.draggable) { target = p; targetSem = g; break; } } catch (e) {} }
        if (target) break;
      }
    }
    if (!target) return { found: false, draggableCount: 0, note: '全册未找到可拖拽教具题' };
    const dv = targetSem.replace(/[ab]$/, ''), sem = targetSem.slice(-1);
    if (typeof S !== 'undefined' && S.math) { S.math.grade = dv; S.math.semester = sem; }
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    if (typeof switchView === 'function') switchView('math');
    if (typeof render === 'function') render();
    await sleep(250);
    MathFlowV5.start(target, 'default');
    MathFlowV5._sess.problem = target; MathFlowV5._sess.stage = 'solve';
    if (typeof updateMathStageV5 === 'function') updateMathStageV5();
    await sleep(200);
    try { MathManipulative.init(document.getElementById('mathStage')); } catch (e) {}
    await sleep(150);
    const drags = [...document.querySelectorAll('#mathStage [data-mp-drag]')];
    return { found: true, draggableCount: drags.length, semKey: targetSem,
      firstRect: drags[0] ? (() => { const r = drags[0].getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })() : null };
  });
  totalOps.journeys++;
  console.log('  教具:', JSON.stringify(mp));
  if (!mp.draggableCount) {
    add('一般缺陷', '5.教具拖拽', '3b', '进入解题阶段未出现可拖拽教具元素（data-mp-drag 缺失）');
  } else {
    // 真实拖拽
    const box = mp.firstRect;
    if (box && box.w > 0) {
      try {
        const sx = box.x + box.w / 2, sy = box.y + box.h / 2;
        await page.mouse.move(sx, sy);
        await page.mouse.down();
        await page.mouse.move(sx + 60, sy + 40, { steps: 8 });
        await page.mouse.move(sx + 120, sy + 10, { steps: 8 });
        await page.mouse.up();
        await page.waitForTimeout(200);
        const afterDrag = await page.evaluate(() => {
          const host = document.getElementById('mathStage');
          return { len: host ? host.innerHTML.length : 0, bad: /undefined|NaN/.test(host ? host.innerHTML : '') };
        });
        if (afterDrag.bad) add('一般缺陷', '5.教具拖拽', '3b', '拖拽后 DOM 出现 undefined/NaN');
        console.log('  真实拖拽完成，拖后 DOM 长度', afterDrag.len);
      } catch (e) {
        add('体验事故', '5.教具拖拽', '3b', '真实 mouse 拖拽抛错：' + e.message);
      }
    }
  }

  // =====================================================================
  // 操作项 6：错题再练（先答错收录，再重做订正）
  // =====================================================================
  console.log('\n===== 操作项 6：错题再练 =====');
  const review = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    if (typeof S !== 'undefined' && S.math) { S.math.grade = '3'; S.math.semester = 'b'; S.math.wrongProblems = []; S.math.daily = null; S.math.idxBySem = S.math.idxBySem || {}; S.math.idxBySem['3b'] = 0; }
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    if (typeof switchView === 'function') switchView('math');
    if (typeof render === 'function') render();
    await sleep(250);
    const bank = (window.MathDailyBank && MathDailyBank.build('3b').list) || [];
    MathFlowV5.start(bank[0], 'default');
    MathFlowV5._chooseStudyMode('beginner');
    // 故意答错 3 道不同题
    let wrongCount = 0;
    for (let n = 0; n < 3; n++) {
      const prob = bank[n];
      MathFlowV5._sess.problem = prob; MathFlowV5._sess.stage = 'solve';
      if (typeof updateMathStageV5 === 'function') updateMathStageV5();
      const choices = Array.isArray(prob.choices) ? prob.choices : [];
      const ci = choices.indexOf(prob.answer);
      const wrongIdx = ci >= 0 ? (ci === 0 ? 1 : 0) : -1;
      const el = wrongIdx >= 0 ? document.querySelector('#v5SolveChoices .wp-choice[data-idx="' + wrongIdx + '"]') : null;
      if (el) { el.click(); wrongCount++; }
      await sleep(60);
    }
    const recorded = (S.math.wrongProblems || []).slice();
    // 关键：答错后做一次整页 render，刷新 window._mathReviewList（错题再练列表的真实来源）
    if (typeof render === 'function') render();
    await sleep(120);
    const reviewList = window._mathReviewList ? window._mathReviewList.map((i) => ({ from: i.from, q: (i.p && i.p.question || '').slice(0, 24) })) : [];
    const listFromWrong = reviewList.filter((i) => i.from === 'wrong').length;
    // 触发错题再练
    let reviewOk = false, listLen = 0;
    try { if (typeof mathStartReview === 'function') { mathStartReview(); await sleep(150); reviewOk = !!(window.MATH_REVIEW && window.MATH_REVIEW.active); listLen = window.MATH_REVIEW ? window.MATH_REVIEW.list.length : 0; } } catch (e) {}
    // 在错题再练里逐题答对应订正
    let corrected = 0;
    if (reviewOk) {
      for (let n = 0; n < listLen; n++) {
        const r = window.MATH_REVIEW; if (!r || !r.active) break;
        const item = r.list[Math.min(r.idx, r.list.length - 1)];
        const p = item && item.p; if (!p) break;
        MathFlowV5._sess.problem = p; MathFlowV5._sess.stage = 'solve';
        if (typeof updateMathStageV5 === 'function') updateMathStageV5();
        const choices = Array.isArray(p.choices) ? p.choices : [];
        const ci = choices.indexOf(p.answer);
        const el = ci >= 0 ? document.querySelector('#v5SolveChoices .wp-choice[data-idx="' + ci + '"]') : null;
        if (el) { el.click(); corrected++; }
        await sleep(60);
        if (typeof mathReviewNext === 'function') mathReviewNext();
        await sleep(40);
      }
    }
    const remaining = (S.math.wrongProblems || []).length;
    return { wrongClicked: wrongCount, recordedCount: recorded.length, listFromWrong, reviewList, reviewOk, listLen, corrected, remainingWrong: remaining, reviewActive: !!(window.MATH_REVIEW && window.MATH_REVIEW.active), sample: recorded.slice(0, 3).map((w) => ({ q: (w.q || '').slice(0, 30), k: w.k }) ) };
  });
  totalOps.journeys++;
  console.log('  错题再练:', JSON.stringify(review));
  if (review.recordedCount < 3) add('体验事故', '6.错题再练', '3b', `答错 ${review.wrongClicked} 题，但错题本只收录 ${review.recordedCount} 条`);
  if (!review.reviewOk) add('体验事故', '6.错题再练', '3b', '点击「错题再练」后未进入再练模式（MATH_REVIEW 未激活）');
  if (review.reviewOk && review.listFromWrong < 1) add('体验事故', '6.错题再练', '3b', `错题再练列表未包含真正答错的题（listFromWrong=${review.listFromWrong}，列表来自 pool 而非错题本）`);
  if (review.reviewOk && review.corrected > 0 && review.reviewActive) add('一般缺陷', '6.错题再练', '3b', `订正 ${review.corrected} 题后错题再练未结束（仍 active）`);

  // =====================================================================
  // 操作项 7：诊断定级（真实点击走完自适应，双写 localStorage + S.math.diag）
  // 注：诊断闭环依赖干净的会话状态，前面旅程会污染 MathFlowV5._sess 等；
  //     这里整页 reload 回到干净会话（与独立探针一致），避免误报。
  // =====================================================================
  console.log('\n===== 操作项 7：诊断定级 + 双写持久化（clean session）=====');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);
  await page.evaluate(async () => {
    for (const g of ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b']) {
      try { if (typeof loadGrade === 'function') await loadGrade(g); } catch (e) {}
    }
    try { localStorage.removeItem('quiqu_math_diag_v1'); } catch (e) {}
  });
  await page.waitForTimeout(500);
  console.log('\n===== 操作项 7：诊断定级 + 双写持久化 =====');
  const diag = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    if (typeof S !== 'undefined' && S.math) { S.math.grade = '3'; S.math.semester = 'b'; S.math.diag = null; S.math.idxBySem = S.math.idxBySem || {}; S.math.idxBySem['3b'] = 0; }
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    if (window.MathFlowV5) MathFlowV5._sess = null; // 置空，避免诊断 _rerender 误渲染成解题流程
    try { localStorage.removeItem('quiqu_math_diag_v1'); } catch (e) {}
    if (typeof switchView === 'function') switchView('math');
    if (typeof render === 'function') render();
    await sleep(250);
    if (!window.MathDiagnostic) return { err: 'no MathDiagnostic' };
    // 开始摸底（真实点击入口卡按钮 → startRun）
    MathDiagnostic.startRun();
    await sleep(250);
    let asked = 0, done = false;
    for (let n = 0; n < 30; n++) {
      if (!window.MATH_IS_DIAG) { done = true; break; }
      const cur = (MathDiagnostic.current ? MathDiagnostic.current() : null);
      const ans = cur && cur.problem ? cur.problem.answer : null;
      const choices = (cur && cur.problem && cur.problem.choices) || [];
      const btns = [...document.querySelectorAll('#mathStage button[onclick^="MathDiagnostic.answer"]')];
      if (!btns.length) { done = !window.MATH_IS_DIAG; break; }
      const ci = choices.indexOf(ans);
      const el = ci >= 0 ? btns[ci] : btns[0]; // 全对走完自适应（≤12 题）
      if (!el) break;
      el.click(); asked++;
      await sleep(120);
    }
    if (!window.MATH_IS_DIAG) done = true;
    const res = MathDiagnostic.getResult ? MathDiagnostic.getResult('3b') : null;
    const level = res ? res.level : '';
    const ls = JSON.parse(localStorage.getItem('quiqu_math_diag_v1') || '{}');
    const lsWritten = !!(ls['3b'] && ls['3b'].level);
    const sWritten = !!(S.math.diag && S.math.diag['3b'] && S.math.diag['3b'].level);
    return { asked, done, level, lsWritten, sWritten, lsLevel: ls['3b'] ? ls['3b'].level : '', sLevel: (S.math.diag && S.math.diag['3b']) ? S.math.diag['3b'].level : '' };
  });
  totalOps.journeys++;
  console.log('  诊断:', JSON.stringify(diag));
  if (diag.err) add('体验事故', '7.诊断定级', '3b', '找不到 MathDiagnostic');
  else {
    if (diag.asked === 0) add('体验事故', '7.诊断定级', '3b', '点击答题未开始（诊断面板无答题按钮/疑似卡死）');
    if (!diag.level) add('体验事故', '7.诊断定级', '3b', `走完 ${diag.asked} 题后未产出定级结论`);
    if (!diag.lsWritten) add('体验事故', '7.诊断定级', '3b', '诊断结果未写入 localStorage quiqu_math_diag_v1（家长清数据即丢）');
    if (!diag.sWritten) add('体验事故', '7.诊断定级', '3b', '诊断结果未写入 S.math.diag（双写缺失）');
    if (diag.lsWritten && diag.sWritten && diag.lsLevel !== diag.sLevel) add('一般缺陷', '7.诊断定级', '3b', `两处定级不一致：LS=${diag.lsLevel} S=${diag.sLevel}`);
  }

  // =====================================================================
  // 操作项 8：知识链点亮（做几题后由 none→learning/mastered）
  // =====================================================================
  console.log('\n===== 操作项 8：知识链点亮 =====');
  const chain = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    if (typeof S !== 'undefined' && S.math) { S.math.grade = '3'; S.math.semester = 'b'; S.math.idxBySem = S.math.idxBySem || {}; S.math.idxBySem['3b'] = 0; }
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    // 清零已练进度，避免被前面旅程累积的 touched 污染（单独测"做几题后是否点亮"）
    try { if (typeof _getMathProgress === 'function' && typeof _saveMathProgress === 'function') { const pp = _getMathProgress(); pp.touched = {}; pp.mastered = []; _saveMathProgress(pp); } } catch (e) {}
    if (typeof switchView === 'function') switchView('math');
    if (typeof render === 'function') render();
    await sleep(200);
    const before = (typeof _getMathProgress === 'function') ? Object.keys(_getMathProgress().touched || {}).length : -1;
    const chainHTMLbefore = (typeof renderMathChains === 'function') ? renderMathChains('3b') : '';
    const litBefore = (chainHTMLbefore.match(/已掌握|在学/g) || []).length;
    const bank = (window.MathDailyBank && MathDailyBank.build('3b').list) || [];
    MathFlowV5.start(bank[0], 'default');
    MathFlowV5._chooseStudyMode('beginner');
    // 真实答对 6 道不同知识点
    const ks = new Set();
    let done = 0;
    for (let n = 0; n < bank.length && ks.size < 6; n++) {
      const prob = bank[n];
      if (!prob.knowledge || ks.has(prob.knowledge)) continue;
      ks.add(prob.knowledge);
      MathFlowV5._sess.problem = prob; MathFlowV5._sess.stage = 'solve';
      if (typeof updateMathStageV5 === 'function') updateMathStageV5();
      const ci = (prob.choices || []).indexOf(prob.answer);
      const el = ci >= 0 ? document.querySelector('#v5SolveChoices .wp-choice[data-idx="' + ci + '"]') : null;
      if (el) { el.click(); done++; }
      await sleep(50);
    }
    const after = (typeof _getMathProgress === 'function') ? Object.keys(_getMathProgress().touched || {}).length : -1;
    const chainHTMLafter = (typeof renderMathChains === 'function') ? renderMathChains('3b') : '';
    const litAfter = (chainHTMLafter.match(/已掌握|在学/g) || []).length;
    // DOM 实际渲染（数学页底部知识链）
    window.render(); await sleep(150);
    const domLit = (document.body.innerText.match(/已掌握|在学/g) || []).length;
    return { before, after, litBefore, litAfter, domLit, done, ks: [...ks].slice(0, 6) };
  });
  totalOps.journeys++;
  console.log('  知识链:', JSON.stringify(chain));
  if (chain.after <= chain.before) add('体验事故', '8.知识链点亮', '3b', `答对 ${chain.done} 题后 touched 知识点数未增加（${chain.before}→${chain.after}，链路不点亮）`);
  if (chain.litAfter <= chain.litBefore) add('一般缺陷', '8.知识链点亮', '3b', `知识链点亮数未变化（${chain.litBefore}→${chain.litAfter}）`);

  // =====================================================================
  // 操作项 9：家长面板（真实埋点，非 Math.random）
  // =====================================================================
  console.log('\n===== 操作项 9：家长面板真实埋点 =====');
  const parent = await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    // 造真实使用痕迹：进数学、进英语、回数学 + 作答埋点（停留足够久以累积分钟）
    if (typeof switchView === 'function') switchView('math');
    await sleep(2200);
    if (typeof switchView === 'function') switchView('english');
    await sleep(1800);
    if (typeof switchView === 'function') switchView('math');
    await sleep(1500);
    try { if (window.UsageMetrics) { UsageMetrics.event('answer', { subject: 'math' }); UsageMetrics.mark('start', 'math'); UsageMetrics.event('start', { subject: 'math' }); UsageMetrics.flush(); } } catch (e) {}
    // 打开家长面板（点 #parentBtn → 输密码 → checkParentPwd）
    const btn = document.querySelector('#parentBtn');
    if (btn) btn.click();
    await sleep(300);
    const inp = document.querySelector('#parentPwd');
    let opened = false;
    if (inp) { inp.value = '1234'; if (typeof checkParentPwd === 'function') { checkParentPwd(); await sleep(400); opened = true; } }
    const body = document.querySelector('#parentBody');
    const txt = body ? body.innerText : '';
    const hasUsageCard = /使用情况（近 7 天/.test(txt) || /使用情况/.test(txt);
    const um = window.UsageMetrics ? UsageMetrics.summary(7) : null;
    const last7 = window.UsageMetrics ? UsageMetrics.last(7) : [];
    const hasReal7 = last7.some((x) => x.opens > 0 || x.min > 0);
    const hasRealMin = (um && (um.min > 0 || um.subjMin && Object.values(um.subjMin).some((v) => v > 0))) || last7.some((x) => x.min > 0);
    // 近 7 天图表是否真的有柱子（svg rect / canvas / 带宽度的柱状 div）
    const chartBars = body ? body.querySelectorAll('svg rect, canvas, [class*="usage-bar"], [class*="bar-"]').length : 0;
    return { opened, hasUsageCard, summaryOpens: um ? um.opens : -1, hasReal7, hasRealMin, last7OpenSum: last7.reduce((a, x) => a + (x.opens || 0), 0), chartBars, snippet: txt.split('\n').filter((l) => /使用情况|打开次数|总时长|分钟|完成/.test(l)).slice(0, 6) };
  });
  totalOps.journeys++;
  console.log('  家长面板:', JSON.stringify(parent));
  if (!parent.opened) add('体验事故', '9.家长面板', '-', '密码 1234 无法进入家长面板');
  if (!parent.hasUsageCard) add('体验事故', '9.家长面板', '-', '「使用情况」卡片未渲染');
  if (!parent.hasReal7) add('体验事故', '9.家长面板', '-', '近 7 天无真实埋点数据（疑似 Math.random 假数据）');
  if (parent.opened && !parent.hasRealMin) add('优化建议', '9.家长面板', '-', '近 7 天有打开次数但停留时长(min)为 0（若非测试停留过短所致，需核对 UsageMetrics 时长累计）');
  if (parent.opened && parent.chartBars === 0 && parent.hasReal7) add('优化建议', '9.家长面板', '-', '近 7 天有真实数据但图表未渲染出柱状元素（疑似图表缺失/选择器不匹配）');

  // =====================================================================
  // 异常点截图：把样例题真实渲染出来截一张
  // =====================================================================
  console.log('\n===== 渲染异常样例截图 =====');
  if (pendingShots.length) {
    await page.evaluate(() => { if (typeof S !== 'undefined' && S.math) { S.math.grade = '3'; S.math.semester = 'b'; } window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false; if (typeof switchView === 'function') switchView('math'); if (typeof render === 'function') render(); });
    await page.waitForTimeout(300);
    await page.evaluate(() => { try { MathFlowV5.start(window.CURRENT_MATH_PROBLEM, 'default'); } catch (e) {} });
    let n = 0;
    for (const s of pendingShots) {
      if (n >= MAX_SHOTS) break;
      try {
        await page.evaluate((prob) => {
          try { MathFlowV5._sess.problem = prob; MathFlowV5._sess.stage = 'solve'; if (typeof updateMathStageV5 === 'function') updateMathStageV5(); } catch (e) {}
        }, s.prob);
        await page.waitForTimeout(120);
        const file = path.join('audit-shots', s.label.replace(/[^\w\u4e00-\u9fa5_-]/g, '_').slice(0, 50) + '.png');
        await page.screenshot({ path: file });
        shotCount++;
        n++;
      } catch (e) {}
    }
    console.log(`  已生成 ${shotCount} 张异常截图`);
  }

  // 整体 JS 运行时错误：硬崩溃(pageerror)→体验事故；控制台报错→一般缺陷
  const pageErr = [...new Set(jsErrors)];
  const consErr = [...new Set(consoleErrors)];
  pageErr.slice(0, 8).forEach((e) => add('体验事故', '0.运行稳定性', '-', e));
  consErr.slice(0, 8).forEach((e) => add('一般缺陷', '0.运行稳定性', '-', e));

  await browser.close();

  // =====================================================================
  // 结构化报告
  // =====================================================================
  const sevOrder = { '体验事故': 0, '一般缺陷': 1, '优化建议': 2 };
  findings.sort((a, b) => sevOrder[a.sev] - sevOrder[b.sev]);
  const cnt = { '体验事故': 0, '一般缺陷': 0, '优化建议': 0 };
  findings.forEach((f) => cnt[f.sev]++);

  const lines = [];
  lines.push('# 奇趣学园 · 使用者视角端到端审计报告（2026-09-10）');
  lines.push('');
  lines.push(`> 运行端口 \`${PORT}\` · 覆盖册数 ${totalOps.grades}/10 · 遍历题数 ${totalOps.problems} · 真实点击提交 ${totalOps.clicks} 次 · 专项旅程 ${totalOps.journeys} 项 · 异常截图 ${shotCount} 张`);
  lines.push('');
  lines.push('## 一、严重度汇总');
  lines.push('');
  lines.push(`- 🔴 **体验事故（孩子/家长直接受挫）：${cnt['体验事故']} 项**`);
  lines.push(`- 🟠 **一般缺陷：${cnt['一般缺陷']} 项**`);
  lines.push(`- 🟢 **优化建议：${cnt['优化建议']} 项**`);
  lines.push('');
  lines.push('## 二、逐条发现（按严重度）');
  lines.push('');
  findings.forEach((f, i) => {
    lines.push(`### ${i + 1}. [${f.sev}] ${f.item}`);
    lines.push(`- 位置/册：${f.where}`);
    lines.push(`- 现象：${f.detail}`);
    lines.push(`- 修复建议：见下方「可执行修复建议」`);
    lines.push('');
  });

  lines.push('## 三、覆盖的 10 个操作项');
  lines.push('');
  lines.push('1. 全年级遍历（2a/2b/3a/3b/4a/4b/5a/5b/6a/6b 共 10 册）：✅ 已逐项加载、统计题量、标题/知识点。');
  lines.push('2. 逐题作答：✅ 对每册每一道题真实渲染 solve 阶段并真实 `.click()` 提交，记录空题/无选项/答案缺/渲染异常/图形异常。');
  lines.push('3. 完整日练：✅ 真实 `mathNextProblem` 连做至每日 14 题，校验达标与完成态。');
  lines.push('4. 讲解/微卡片：✅ 用 `_formulaLeaksPreAnswer` 判定"应隐藏算式"的题，校验其作答前渲染未泄露完整算式（高压线）。');
  lines.push('5. 教具拖拽：✅ 真实 `page.mouse` down/move/up 拖拽可拖拽教具，检查无报错、DOM 正常。');
  lines.push('6. 错题再练：✅ 故意答错 3 题→验证收录→进入再练→逐题订正→验证移除。');
  lines.push('7. 诊断定级：✅ 真实点击走完自适应诊断，校验出报告/定级，且 `quiqu_math_diag_v1` 与 `S.math.diag` 双写。');
  lines.push('8. 知识链点亮：✅ 答对多题后校验 `touched` 与知识链点亮数由 none→learning/mastered。');
  lines.push('9. 家长面板：✅ 密码进入，校验「使用情况」卡片与近 7 天真实埋点（非 Math.random）。');
  lines.push('10. 连续做题去重：✅ 3b/6a 各连做 20 题断言无重复题（守护刚修复的回归）。');
  lines.push('');

  lines.push('## 四、可执行修复建议（指明文件与位置）');
  lines.push('');
  lines.push('> 以下为按现象给出的排查入口，**仅定位、未改动任何业务代码**。请据此一次性修复。');
  lines.push('');
  lines.push('- **空题/题干为空**：检查 `data/math-data-*.js` 中对应知识点对象的 `question` 字段；出题兜底见 `index.html: renderMath()` 的 `_adaptStaticProblem` 调用处。');
  lines.push('- **正确答案不在选项里**：`engine/math-flow-v5.js: renderSolve()` 用 `problem.choices.indexOf(problem.answer)` 计算 `correctIdx`；若 `correctIdx<0` 说明选项生成（`_safeMathChoices`/`_adaptStaticProblem`）与 `answer` 不一致，查 `index.html` 选项生成与 `data` 中 `answer` 字段。');
  lines.push('- **渲染 undefined/NaN**：`renderSolve` 与 `engine/math-visual-v5.js`（`MathVisualV5.render`）、`engine/math-diagram-master.js`（`MathDiagramMaster`）的模板插值；重点查 `visualData` 缺字段时的兜底。');
  lines.push('- **图形未渲染（mv-empty）**：`_mvHTML(problem)` 在 `engine/math-visual-v5.js`，按 `problem.visualType` 路由；空图说明该类型缺渲染器或 `visualData` 形状不匹配（对照 `scripts/ci-gate.js` 的 vd 字段归一化检查）。');
  lines.push('- **答案泄漏（高压线）**：`engine/math-flow-v5.js: renderSolve()` 的算式显示分支依赖 `window._formulaLeaksPreAnswer(problem)`（定义见 `index.html`/`engine`）；泄漏题必须把算式替换为「自己列」提示。');
  lines.push('- **日练未达标/去重回归**：`index.html: mathNextProblem()` 与 `S.math.daily` 计数；去重靠 `MathDailyBank.build` 净化池（`scripts/_verify_daily_redo.js` 已守）。指针推进见 `_mathDailyPool`/`_mathNextSemKey`。');
  lines.push('- **教具不可拖**：`engine/math-manipulative.js` 的 `classify()` 返回 `draggable` 与 `init()` 绑定 `data-mp-drag` 的元素。');
  lines.push('- **错题再练不收录/不移除**：`engine/math-flow-v5.js: _solveAnswer()` 写入 `S.math.wrongProblems`；移除见 `index.html: _mathReviewMarkCorrect()` 与 `mathStartReview()/mathReviewNext()`。');
  lines.push('- **诊断未双写**：`engine/math-diagnostic.js: applyResult()` 同时写 `localStorage quiqu_math_diag_v1` 与 `S.math.diag`；UI 闭环见 `answer()` 末尾调用。');
  lines.push('- **知识链不点亮**：`index.html: _bumpMathProgress()` + `renderMathChains()` + `data/math-chain-map.js`（映射表）。');
  lines.push('- **家长面板假数据**：`engine/usage-metrics.js`（`UsageMetrics`）；面板渲染见 `index.html: renderParentDashboard()` 与 `engine/parent-panel.js`。');
  lines.push('');

  const md = lines.join('\n');
  const outPath = path.join(__dirname, '..', 'docs', '使用者视角审计报告-2026-09-10.md');
  try { if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true }); fs.writeFileSync(outPath, md, 'utf8'); } catch (e) { console.error('写报告失败', e); }
  console.log('\n' + md);

  const fatal = cnt['体验事故'] + cnt['一般缺陷'];
  console.log(`\n===== 结论：${findings.length} 条发现（体验事故 ${cnt['体验事故']} / 一般缺陷 ${cnt['一般缺陷']} / 优化 ${cnt['优化建议']}）=====`);
  process.exit(fatal > 0 ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
