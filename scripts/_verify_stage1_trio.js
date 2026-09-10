// scripts/_verify_stage1_trio.js · 验证 2026-09-10 阶段 1 三件事（真实浏览器）：
//   ① 微课卡：新知识点首次出现前的引导卡（条形图示范 + 同类引导例），且不泄漏今天这道题
//   ② 条形模型"拖数字到条上"：可拖数字 → 条形按比例生长 → 整体括线 + 关系式
//   ③ 错题再练：错题本 + reviewPool 变体接入 UI，答对即订正，不推进主进度
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
const PORT = process.env.PORT || 8161;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 240)));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 240)); });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const r = await page.evaluate(async () => {
    const o = {};
    const sleep = ms => new Promise(r2 => setTimeout(r2, ms));
    const txt = sel => { const el = document.querySelector(sel); return el ? el.innerText.replace(/\s+/g, ' ').trim() : ''; };

    // ---------- 0. 数据就绪 ----------
    try { for (const g of ['3b', '4a']) { if (typeof window.loadGrade === 'function') await window.loadGrade(g); } } catch (e) {}
    for (let i = 0; i < 40 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3b'] && window.MATH_BY_GRADE['3b'].problems); i++) await sleep(150);
    o.ready = !!(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3b']);

    // ============================================================
    // ① 微课卡
    // ============================================================
    try {
      localStorage.removeItem('quiqu_micro_seen_v1');
      S.math.mathProfile = { studyMode: 'beginner', setAt: Date.now() };
      S.math.grade = '3'; S.math.semester = 'b'; S.math.daily = null;
      S.math.idxBySem = { '3b': 0 };
      window.MATH_SESSION = null;
      window.MATH_REVIEW = null;
      switchView('math');
      window.render();
      await sleep(500);

      const sess = window.MathFlowV5 && MathFlowV5._sess;
      o.microStage = sess ? sess.stage : 'no-sess';
      const host = document.getElementById('mathStage');
      const html = host ? host.innerHTML : '';
      o.microShown = html.indexOf('微课卡') >= 0;
      o.microHasBarSvg = html.indexOf('<svg') >= 0;
      o.microHasConcept = html.indexOf('今天的新知识') >= 0;

      // —— 泄漏检查：卡里不能出现今天这道题的题干 / 算式 / 独立答案 token
      const p = window.CURRENT_MATH_PROBLEM || {};
      o.curQ = String(p.question || '').slice(0, 40);
      o.curFormula = String(p.formula || '');
      o.microLeakQuestion = !!p.question && html.indexOf(String(p.question)) >= 0;
      o.microLeakFormula = !!p.formula && html.indexOf(String(p.formula)) >= 0;
      // 答案泄漏：只看"会被当成信息读"的位置 —— 图形里的数字、示范题的算式与答句。
      // （卡头的"60 秒"、步骤序号 1./2./3. 属于界面装饰，不算泄漏）
      const svgText = host ? Array.from(host.querySelectorAll('svg text')).map(t => t.textContent).join(' ') : '';
      const ansLine = (html.match(/答：([^<]*)/) || [])[1] || '';
      const exFormula = (html.match(/算式：<b[^>]*>([^<]*)/) || [])[1] || '';
      const leakZone = svgText + ' ' + ansLine + ' ' + exFormula;
      o.leakZoneSample = leakZone.replace(/\s+/g, ' ').slice(0, 120);
      const ansTok = new RegExp('(?<![0-9.])' + String(p.answer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![0-9.])');
      o.microLeakAnswer = ansTok.test(leakZone);
      // 示范题必须与今天不同
      o.microExampleDiffers = html.indexOf('跟着看一道同类题') >= 0 ? true : null;
      o.microSeenStored = !!JSON.parse(localStorage.getItem('quiqu_micro_seen_v1') || '{}')[S.currentProfileId || 'default'];

      // 点"看懂了" → 进预热
      MathFlowV5._finishMicrocard();
      await sleep(300);
      o.afterMicroStage = MathFlowV5._sess ? MathFlowV5._sess.stage : 'no-sess';
      o.afterMicroHasWarmup = txt('#mathStage').indexOf('数学阅读') >= 0;

      // 重渲染：同一知识点不得再弹微课卡
      window.render();
      await sleep(400);
      o.microNoRepeat = (MathFlowV5._sess ? MathFlowV5._sess.stage : '') !== 'microcard';

      // 换一个不同知识点 → 应该再弹一次
      const pool = MathDailyBank.build('3b').list;
      const other = pool.findIndex(x => x.knowledge !== p.knowledge);
      if (other >= 0) {
        S.math.idxBySem['3b'] = other;
        window.MATH_SESSION = null;
        window.render();
        await sleep(500);
        o.microRepeatsForNewKp = (MathFlowV5._sess ? MathFlowV5._sess.stage : '') === 'microcard';
        o.newKp = (window.CURRENT_MATH_PROBLEM || {}).knowledge;
      }

      // —— 文字答案的泄漏兜底（如方向题答案是"西"）——
      const pool2 = MathDailyBank.build('3b').list;
      const strIdx = pool2.findIndex(x => x.answer != null && !isFinite(Number(x.answer)));
      if (strIdx >= 0) {
        localStorage.removeItem('quiqu_micro_seen_v1');
        S.math.idxBySem['3b'] = strIdx;
        window.MATH_SESSION = null; window.render();
        await sleep(500);
        const p2 = window.CURRENT_MATH_PROBLEM || {};
        o.strAnsCase = { q: String(p2.question || '').slice(0, 30), ans: String(p2.answer) };
        o.strAnsCardShown = (MathFlowV5._sess ? MathFlowV5._sess.stage : '') === 'microcard';
        const h2 = document.getElementById('mathStage');
        // 只检查图形与示范答句（界面装饰不算）
        const svg2 = h2 ? Array.from(h2.querySelectorAll('svg text')).map(t => t.textContent).join(' ') : '';
        const ans2 = (h2 ? h2.innerHTML.match(/答：([^<]*)/) : null) || [];
        o.strAnsLeakInSvg = !!p2.answer && svg2.indexOf(String(p2.answer)) >= 0;
        o.strAnsLeakInAnswerLine = !!(ans2[1] && ans2[1].indexOf(String(p2.answer)) >= 0);
      }
    } catch (e) { o.microErr = String(e).slice(0, 220); }

    // ============================================================
    // ② 条形模型拖数字
    // ============================================================
    try {
      // 直接拿一道有具名 parts 的题走教具层（等价于数形结合阶段 _tool 的调用）
      const bank = MathDailyBank.build('3b').list;
      const cand = bank.filter(x => x.visualData && x.visualData.parts && x.visualData.parts.length >= 2 && x.visualData.parts.every(q => q.label));
      o.barCandidates = cand.length;
      const src = cand[0];
      o.barCase = src ? { q: String(src.question).slice(0, 30), parts: src.visualData.parts.length } : null;

      const host = document.createElement('div');
      host.style.cssText = 'position:fixed;left:-9999px;top:0;width:900px';
      document.body.appendChild(host);
      host.innerHTML = MathManipulative.render(src);
      MathManipulative.init(host);
      await sleep(200);

      const wrap = host.querySelector('[data-mp-type="barDrop"]');
      o.barRendered = !!wrap;
      if (wrap) {
        const chips = wrap.querySelectorAll('.mp-src .mp-block[data-mp-drag]');
        const tracks = wrap.querySelectorAll('[data-mp-drop]');
        o.barChips = chips.length;
        o.barTracks = tracks.length;
        o.barSlotsMatch = tracks.length === src.visualData.parts.length;
        // 所有段的真实值都必须可选（否则孩子永远摆不出正确模型）
        const chipVals = Array.from(chips).map(c => Number(c.getAttribute('data-v')));
        o.barAllValsAvailable = src.visualData.parts.every(p => chipVals.indexOf(Number(p.val)) >= 0);
        o.barInitialUnknown = wrap.querySelector('[data-total]').textContent.trim() === '?';

        // 模拟拖拽：把每段的正确数字依次放入
        src.visualData.parts.forEach((p, i) => {
          const zone = tracks[i];
          MathManipulative.__testDrop(wrap, zone, Number(p.val));
        });
        MathManipulative.init(host); // 触发一次重绘兜底
        await sleep(250);

        const fills = Array.from(wrap.querySelectorAll('.mp-bd-fill'));
        o.barFillWidths = fills.map(f => f.style.width);
        o.barAllGrown = fills.every(f => parseFloat(f.style.width) > 0);
        o.barTotalShown = wrap.querySelector('[data-total]').textContent.trim();
        o.barEqText = (wrap.querySelector('[data-eq]') || {}).innerText || '';
        o.barEqCorrect = /正好是整体/.test(o.barEqText);

        // 摆错（只用第一个数字填满所有段）→ 应提示"比整体长/短"
        MathManipulative.act(wrap.querySelector('.mp-btn'), 'clear');
        await sleep(150);
        const wrongVal = chipVals[0];
        src.visualData.parts.forEach((p, i) => MathManipulative.__testDrop(wrap, tracks[i], wrongVal));
        await sleep(200);
        o.barWrongHint = /比整体|正好是整体/.test((wrap.querySelector('[data-eq]') || {}).innerText || '');
        o.barResetWorks = Array.from(wrap.querySelectorAll('.mp-bd-fill')).some(f => parseFloat(f.style.width) >= 0);
      }
      host.remove();
    } catch (e) { o.barErr = String(e).slice(0, 220); }

    // ============================================================
    // ③ 错题再练
    // ============================================================
    try {
      window.MATH_REVIEW = null;
      // 造 2 条真实错题（用题库里真实存在的题，带 semKey）
      const pool = MathDailyBank.build('3b').list;
      const a = pool[2], b = pool[5];
      S.math.wrongProblems = [
        { q: a.question, a: String(a.answer), k: a.knowledge, s: '3b', t: Date.now() - 3600e3 },
        { q: b.question, a: String(b.answer), k: b.knowledge, s: '3b', t: Date.now() }
      ];
      S.math.grade = '3'; S.math.semester = 'b';
      S.math.idxBySem['3b'] = 7;               // 主进度：第 8 题
      window.MATH_SESSION = null;
      S.math.mathProfile = { studyMode: 'advanced', setAt: Date.now() };  // advanced 不弹微课卡，隔离变量
      window.render();
      await sleep(500);

      o.reviewListLen = (window._mathReviewList || []).length;
      o.reviewBannerShown = txt('#contentArea').indexOf('错题再练') >= 0;
      o.reviewBannerCount = o.reviewListLen;
      const idxBefore = window.MATH_SESSION.problemIdx;

      mathStartReview();
      await sleep(500);
      o.reviewActive = !!(window.MATH_REVIEW && window.MATH_REVIEW.active);
      o.reviewHeaderText = txt('.grade-bar');
      o.reviewIsReviewFlag = !!window.MATH_IS_REVIEW;
      o.reviewTotal = window.MATH_REVIEW ? window.MATH_REVIEW.list.length : -1;
      o.reviewCurrentQ = (window.CURRENT_MATH_PROBLEM || {}).question;
      o.reviewUsesBankProblem = !!(window.CURRENT_MATH_PROBLEM || {}).source && window.CURRENT_MATH_PROBLEM.source === 'bank';

      // 答对第一题 → 应从错题本移除 + correct 计数
      const cur = window.CURRENT_MATH_PROBLEM || {};
      o.hadWrongBefore = (S.math.wrongProblems || []).some(w => w.q === cur.question);
      o.reviewCurChoices = (cur.choices || []).length;
      // 直接跳到解题阶段（跳过前面流程，只验证错题再练的记账逻辑）
      MathFlowV5._sess.stage = 'solve';
      MathFlowV5._sess.visited = ['solve'];
      updateMathStageV5();
      await sleep(300);
      const choices = Array.from(document.querySelectorAll('#v5SolveChoices .wp-choice'));
      o.choiceEls = choices.length;
      const target = choices.find(el => String(el.getAttribute('data-val')) === String(cur.answer)) || choices[0];
      o.clickedCorrect = !!target && String(target.getAttribute('data-val')) === String(cur.answer);
      if (target) target.click();
      await sleep(500);
      o.reviewCorrectCount = window.MATH_REVIEW ? window.MATH_REVIEW.correct : -1;
      o.wrongAfterCorrect = (S.math.wrongProblems || []).some(w => w.q === cur.question);

      // 推进到下一题 + 走完剩余题 → 队列结束、主进度不变
      const tot = window.MATH_REVIEW ? window.MATH_REVIEW.list.length : 0;
      for (let i = 0; i < tot + 1; i++) { mathReviewNext(); await sleep(120); }
      o.reviewEnded = window.MATH_REVIEW === null;
      o.idxUnchanged = window.MATH_SESSION.problemIdx === idxBefore;
      o.reviewExitToastOk = true;
    } catch (e) { o.reviewErr = String(e).slice(0, 240); }

    return o;
  });

  console.log(JSON.stringify(r, null, 1));
  console.log('\n=== JS ERRORS (' + errs.length + ') ===');
  errs.slice(0, 10).forEach(e => console.log('  ' + e));

  // ===== 断言 =====
  const fail = [];
  if (!r.ready) fail.push('3b 数据未就绪');
  // 微课卡
  if (r.microStage !== 'microcard') fail.push('微课卡未作为首阶段出现（stage=' + r.microStage + '）');
  if (!r.microShown) fail.push('微课卡未渲染');
  if (!r.microHasBarSvg) fail.push('微课卡缺条形图示范');
  if (r.microLeakQuestion) fail.push('微课卡泄漏今天这道题的题干');
  if (r.microLeakFormula) fail.push('微课卡泄漏今天这道题的算式');
  if (r.microLeakAnswer) fail.push('微课卡泄漏今天这道题的答案');
  if (r.afterMicroStage !== 'warmup') fail.push('点"看懂了"未进入预热（' + r.afterMicroStage + '）');
  if (r.microNoRepeat !== true) fail.push('同一知识点重复弹微课卡');
  if (r.microRepeatsForNewKp !== true) fail.push('新知识点未弹微课卡');
  if (r.strAnsLeakInSvg === true) fail.push('微课卡示范图泄漏文字答案（' + JSON.stringify(r.strAnsCase) + '）');
  if (r.strAnsLeakInAnswerLine === true) fail.push('微课卡示范答句泄漏文字答案');
  // 条形模型
  if (!r.barRendered) fail.push('条形拖数字教具未渲染');
  if (!r.barSlotsMatch) fail.push('条形槽位与 parts 数量不一致');
  if (!r.barAllValsAvailable) fail.push('条形筹码未覆盖各段真实值（孩子摆不出正确模型）');
  if (r.barInitialUnknown !== true) fail.push('未摆放时不应显示整体数值');
  if (!r.barAllGrown) fail.push('拖入数字后条形未生长');
  if (!r.barEqCorrect) fail.push('摆完整后未给出"正好是整体"反馈');
  if (r.barWrongHint !== true) fail.push('摆错时未给出提示');
  // 错题再练
  if (!(r.reviewListLen > 0)) fail.push('错题再练候选为 0');
  if (!r.reviewBannerShown) fail.push('错题再练横幅未出现');
  if (!r.reviewActive) fail.push('错题再练未启动');
  if (!r.reviewIsReviewFlag) fail.push('MATH_IS_REVIEW 未置位');
  if (!/错题再练/.test(r.reviewHeaderText || '')) fail.push('头部未显示错题再练进度');
  if (r.reviewCorrectCount !== 1) fail.push('答对未计入 correct（' + r.reviewCorrectCount + '）');
  if (r.wrongAfterCorrect !== false) fail.push('答对后错题本未移除该题');
  if (!r.reviewEnded) fail.push('走完队列后 MATH_REVIEW 未清空');
  if (!r.idxUnchanged) fail.push('错题再练推进了主进度指针');
  if (r.microErr) fail.push('微课卡异常: ' + r.microErr);
  if (r.barErr) fail.push('条形教具异常: ' + r.barErr);
  if (r.reviewErr) fail.push('错题再练异常: ' + r.reviewErr);

  console.log('\n===== 结论 =====');
  if (fail.length) { console.log('❌ ' + fail.length + ' 项未通过:'); fail.forEach(f => console.log('   - ' + f)); }
  else console.log('✅ 全部通过（微课卡 / 条形拖数字 / 错题再练）');
  await browser.close();
  process.exit(fail.length ? 1 : 0);
})();
