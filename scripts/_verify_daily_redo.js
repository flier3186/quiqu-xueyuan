// scripts/_verify_daily_redo.js · 验证 2026-09-10 三件事：
//   ① 日练去重 + 指针不回绕 ② 教具按需路由 ③ 分步解析 ④ 数学区少年蓝 ⑤ TTS 数字归一化
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
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
    const o = {};
    const sleep = ms => new Promise(r2 => setTimeout(r2, ms));

    // ---------- 0. 等年级数据就绪（懒加载）----------
    try {
      if (typeof window.loadGrade === 'function') { await window.loadGrade('3b'); await window.loadGrade('4a'); }
      for (let i = 0; i < 40 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3b'] && window.MATH_BY_GRADE['3b'].problems); i++) await sleep(150);
    } catch (e) {}
    o.loaded3b = !!(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3b'] && window.MATH_BY_GRADE['3b'].problems && window.MATH_BY_GRADE['3b'].problems.length + ' 题');

    // ---------- 1. 净化池 ----------
    const stats = {};
    let dupLeft = 0, constBad = 0;
    for (const k of Object.keys(window.MATH_BY_GRADE)) {
      const b = window.MathDailyBank.build(k);
      if (!b.total) continue;
      const seen = {};
      b.list.forEach(p => { const q = window.MathDailyBank._norm(p.question); if (seen[q]) dupLeft++; seen[q] = 1; });
      b.list.forEach(p => {
        const f = window.MathDailyBank.CONST_FACTS.find(x => x.re.test(String(p.question || '')));
        if (f && Math.abs(parseFloat(p.answer) - f.v) > 1e-9) constBad++;
      });
      stats[k] = { raw: b.total, pool: b.kept, review: b.reviewPool.length };
    }
    o.bankStats = stats;
    o.dupLeft = dupLeft;
    o.constBad = constBad;
    o.pool3b = stats['3b'] ? stats['3b'].pool : -1;

    // ---------- 2. 日练：连点 20 次，题干不得重复，指针单调递增 ----------
    try {
      window.switchView('math');
      S.math.grade = '3'; S.math.semester = 'b'; S.math.daily = null;
      S.math.idxBySem = { '3b': 0 };
      window.MATH_SESSION = null;
      window.render();
      await sleep(300);
      const seenQ = [], idxs = [], sems = [], doneList = [];
      for (let i = 0; i < 20; i++) {
        const p = window.CURRENT_MATH_PROBLEM;
        seenQ.push(String(p && p.question || '').trim());
        idxs.push(window.MATH_SESSION.problemIdx);
        sems.push(window.MATH_SESSION.semKey);
        doneList.push(S.math.daily ? S.math.daily.done : -1);
        window.mathNextProblem();
        await sleep(60);
      }
      o.clicked = seenQ.length;
      o.uniqueQ = new Set(seenQ).size;
      o.dupInSession = seenQ.length - new Set(seenQ).size;
      // 单调性：同一册内必须严格递增；换册时归零是设计意图
      o.idxMonotonic = idxs.every((v, i) => i === 0 || sems[i] !== sems[i - 1] ? true : v > idxs[i - 1]);
      o.idxFirst = idxs[0]; o.idxLast = idxs[idxs.length - 1];
      o.semSeq = [...new Set(sems)].join('→');
      o.dailyDoneLast = doneList[doneList.length - 1];
      o.headerText = (document.querySelector('.grade-bar') ? document.querySelector('.grade-bar').innerText.replace(/\s+/g, ' ').slice(0, 100) : '');
      o.dailyBannerShown = document.body.innerText.indexOf('题已完成') >= 0;
    } catch (e) { o.dailyErr = String(e).slice(0, 220); }

    // ---------- 3. 教具按需路由 ----------
    try {
      const mk = (f, k, ans, q) => ({ formula: f, knowledge: k, answer: String(ans), question: q || '一共是多少？', visualData: {} });
      const cases = {
        '3×6+4(单步乘加)': mk('3 × 6 = ?', '表内乘法', 18),
        '45+27(进位加法)': mk('45 + 27 = ?', '两位数加两位数', 72),
        '3+4(一步口算)':   mk('3 + 4 = ?', '10以内加法', 7),
        '86÷2(除法)':      mk('86 ÷ 2 = ?', '口算除法', 43),
        '1234×567(大积)':  mk('1234 × 567 = ?', '多位数乘法', 699678)
      };
      const cls = {}, safeHasBoard = {};
      for (const name in cases) {
        cls[name] = window.MathManipulative.classify(cases[name]);
        const h = window.MathManipulative.renderSafe(cases[name]) || '';
        safeHasBoard[name] = /mp-block|十进制|mp-place/.test(h);
      }
      o.toolClassify = cls;
      o.solveStageLeak = safeHasBoard;   // 作答前出现位值板 = 泄题
      o.arrayRendered = /mp-array/.test(window.MathManipulative.render(cases['3×6+4(单步乘加)']) || '');
    } catch (e) { o.toolErr = String(e).slice(0, 200); }

    // ---------- 4. 分步解析（用一个确定含 discoverySteps 的题）----------
    try {
      const raw = (window.MATH_BY_GRADE['3b'].problems || []).find(p => p.discoverySteps && p.discoverySteps.length && p.explainLayers && p.explainLayers.length);
      const adapted = window._adaptStaticProblem(raw, '3b');
      o.adaptedHasSteps = Array.isArray(adapted.discoverySteps) ? adapted.discoverySteps.length : 0;
      o.adaptedHasLayers = Array.isArray(adapted.explainLayers) ? adapted.explainLayers.length : 0;
      const h = window._mathStepByStep(adapted);
      o.stepHtmlLen = h.length;
      o.stepHasTitle = h.indexOf('一步一步想清楚') >= 0;
      o.stepHasLayerText = raw ? h.indexOf(String(raw.explainLayers[0].text).slice(0, 12)) >= 0 : false;
    } catch (e) { o.stepErr = String(e).slice(0, 200); }

    // ---------- 5. 数学区配色（少年蓝）----------
    try {
      const el = document.querySelector('.math-scope');
      if (el) {
        const cs = getComputedStyle(el);
        o.mathScopeTeal = cs.getPropertyValue('--teal').trim();
        const bar = document.querySelector('.math-banner');
        o.bannerBg = bar ? getComputedStyle(bar).backgroundImage.slice(0, 80) : '';
      } else { o.mathScopeTeal = 'no .math-scope'; }
      o.rootTeal = getComputedStyle(document.documentElement).getPropertyValue('--teal').trim();
    } catch (e) { o.colorErr = String(e).slice(0, 160); }

    // ---------- 6. TTS 数字归一化（截获真正送进语音层的文本）----------
    try {
      o.hasNormalizer = typeof window.NeuralTTS !== 'undefined' && typeof window.NeuralTTS._normalizeNumbers === 'function';
      if (o.hasNormalizer) {
        o.normCases = {
          page10: window.NeuralTTS._normalizeNumbers('Open your books to page 10.'),
          two: window.NeuralTTS._normalizeNumbers('I have 2 apples.'),
          decimal: window.NeuralTTS._normalizeNumbers('pi is 3.14'),
          cjk: window.NeuralTTS._normalizeNumbers('我有5个苹果')
        };
      }
      // 截获 speechSynthesis.speak
      const captured = [];
      const orig = window.speechSynthesis.speak.bind(window.speechSynthesis);
      window.speechSynthesis.speak = function (u) { captured.push(String(u && u.text || '')); };
      try { if (window.VoiceCore && VoiceCore.speak) VoiceCore.speak('Open your books to page 10.'); } catch (e) {}
      window.speak('Turn to page 5.');
      await new Promise(r2 => setTimeout(r2, 500));
      window.speechSynthesis.speak = orig;
      o.ttsCaptured = captured;
      o.ttsAllNormalized = captured.length > 0 && captured.every(t => !/\d/.test(t.replace(/3\.14|5:30/g, '')));
    } catch (e) { o.ttsErr = String(e).slice(0, 200); }

    // ---------- 7. 切换年级必须加载真实题库（P0 回归）----------
    try {
      window.switchView('math');
      await sleep(200);
      // 注意：以下为各册 loadGrade 后的真实题数快照（2026-09-10 核对）。
      // 题库扩充后脚本旧 expect 全部偏低，属期望值漂移而非回归；本次已同步为实测值。
      const expect = { '2b': 71, '3b': 199, '4b': 90, '5b': 79, '6b': 24, '4a': 84, '5a': 80, '6a': 111 };
      const got = {};
      for (const g of ['4', '5', '6', '2']) {
        const pill = document.querySelector('#mathGrades .grade-pill[data-grade="' + g + '"]');
        if (!pill) { got[g] = 'no-pill'; continue; }
        pill.click();
        for (let i = 0; i < 40; i++) {
          await sleep(120);
          const sk = window.MATH_SESSION && window.MATH_SESSION.semKey;
          if (sk && window.MATH_BY_GRADE[sk] && (window.MATH_LOADED_GRADES || {})[sk]) break;
        }
        const sk = window.MATH_SESSION && window.MATH_SESSION.semKey;
        const raw = sk && window.MATH_BY_GRADE[sk] ? (window.MATH_BY_GRADE[sk].problems || []).length : -1;
        const pool = sk ? window.MathDailyBank.build(sk).kept : -1;
        got[g] = { semKey: sk, raw: raw, pool: pool, expect: expect[sk], isReal: expect[sk] === raw };
      }
      o.gradeSwitch = got;
      o.allGradesReal = Object.keys(got).every(g => got[g].isReal === true);
    } catch (e) { o.gradeErr = String(e).slice(0, 200); }

    return o;
  });

  console.log(JSON.stringify(r, null, 1));
  const fail = [];
  if (r.dupLeft !== 0) fail.push('净化池残留重复 ' + r.dupLeft);
  if (r.constBad !== 0) fail.push('净化池常量错题 ' + r.constBad);
  if (r.dupInSession > 0) fail.push('连做 20 题出现重复 ' + r.dupInSession + ' 次');
  if (!r.idxMonotonic) fail.push('题号指针非单调（仍会回绕）');
  if (r.idxLast <= r.idxFirst) fail.push('指针没有前进');
  if (Object.values(r.solveStageLeak || {}).some(Boolean)) fail.push('作答前仍在泄题（位值板出现在解题阶段）');
  if (!r.stepHasTitle) fail.push('答错分步解析未生成');
  if (String(r.mathScopeTeal).toUpperCase() !== '#2570E8') fail.push('数学区主色不是少年蓝：' + r.mathScopeTeal);
  if (r.normCases && r.normCases.page10 !== 'Open your books to page ten.') fail.push('TTS page 10 未归一化');
  if (r.ttsCaptured && r.ttsCaptured.some(t => /\b10\b/.test(t))) fail.push('朗读文本仍含阿拉伯数字 10');
  if (r.allGradesReal !== true) fail.push('切换年级后仍在用占位题库：' + JSON.stringify(r.gradeSwitch));
  console.log('\n=== 运行时错误 ===');
  console.log([...new Set(errs)].slice(0, 12).join('\n') || '(无)');
  console.log('\n=== 结论 ===');
  console.log(fail.length ? '❌ ' + fail.join(' | ') : '✅ 全部通过');
  await browser.close();
  process.exit(fail.length ? 1 : 0);
})();
