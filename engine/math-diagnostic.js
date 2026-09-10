/* engine/math-diagnostic.js · 诊断定级（Mathplore 式"先评估再定路径"）
 *
 * 为什么需要：日练从"本册第 1 题"开始，对已经会了的孩子是浪费时间、对没学懂的孩子
 * 是直接劝退。业界做法（Mathplore / 小猿）都是学习前先做一次短诊断，再个性化定起点。
 *
 * 做法（够短、够准、可解释）：
 *   - 抽样：用 MathDailyBank 的 segments（知识点连续段）在整册上均匀抽 KP，
 *     每个 KP 出一"基础题"；答对才追问一道"加深题"。最多 12 题封顶。
 *   - 判定：基础题错 → 该 KP 记为薄弱，跳过加深题（省钱省时间）；
 *           基础 + 加深都对 → 该 KP 记为已掌握；只对基础 → 在学。
 *   - 定级：看"最靠前的 KP 是否掌握"和"最靠后的 KP 是否掌握"，
 *           给出 需要补基础 / 跟上进度 / 可以跳级 三档，并给出建议起点题号。
 *   - 落盘：写 localStorage + 回灌知识点进度与 WeaknessDetector，并（可选）把
 *           日练指针挪到建议起点 —— 孩子下一次打开就从"刚好不会的地方"开始。
 *
 * 依赖（全部可选，缺失则降级）：window.MathDailyBank / window.GradeLimits /
 *   window.WeaknessDetector / S / saveState / _bumpMathProgress / toast
 */
(function (root) {
  'use strict';

  var KEY = 'quiqu_math_diag_v1';
  var MAX_Q = 12;
  var STALE_DAYS = 30;

  var PREV = { '2a': null, '2b': '2a', '3a': '2b', '3b': '3a', '4a': '3b', '4b': '4a', '5a': '4b', '5b': '5a', '6a': '5b', '6b': '6a' };
  var GNAME = { '2a': '二上', '2b': '二下', '3a': '三上', '3b': '三下', '4a': '四上', '4b': '四下', '5a': '五上', '5b': '五下', '6a': '六上', '6b': '六下' };

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysBetween(a, b) {
    var t1 = Date.parse(a), t2 = Date.parse(b);
    if (isNaN(t1) || isNaN(t2)) return 1e9;
    return Math.abs(t2 - t1) / 86400000;
  }
  function e(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // ================= 持久化 =================
  function loadAll() {
    try {
      var raw = root.localStorage && root.localStorage.getItem(KEY);
      var o = raw ? JSON.parse(raw) : {};
      return (o && typeof o === 'object') ? o : {};
    } catch (e2) { return {}; }
  }
  function saveAll(o) {
    try { if (root.localStorage) root.localStorage.setItem(KEY, JSON.stringify(o)); } catch (e2) {}
  }
  function getResult(semKey) { return loadAll()[semKey] || null; }
  function isStale(res) { return !res || daysBetween(res.date, todayKey()) > STALE_DAYS; }

  // ================= 抽样设计 =================
  function plan(semKey, opts) {
    opts = opts || {};
    var bank = root.MathDailyBank;
    var built = null;
    try { built = bank && bank.build ? bank.build(semKey) : null; } catch (e2) { built = null; }
    var list = (built && built.list) || [];
    var segs = (built && built.segments) || [];
    if (!list.length || !segs.length) {
      // 退路：直接用原始题目顺序
      var G = root.MATH_BY_GRADE || {};
      var raw = (G[semKey] && G[semKey].problems) || [];
      if (!raw.length) return { semKey: semKey, items: [] };
      var step = Math.max(1, Math.floor(raw.length / 6));
      var items = [];
      for (var i = 0; i < raw.length && items.length < MAX_Q; i += step) {
        items.push({ kp: raw[i].knowledge || '(未标注)', base: raw[i], deep: null, baseIdx: i, deepIdx: null });
      }
      return { semKey: semKey, items: items, total: items.length };
    }

    // 均匀抽 KP（首尾必取），每 KP 一基础题 + 可选加深题
    var maxKp = opts.maxKp || 6;
    var n = Math.min(segs.length, maxKp);
    var pickedSegs = [];
    for (var k = 0; k < n; k++) {
      var si = (n === 1) ? 0 : Math.round(k * (segs.length - 1) / (n - 1));
      if (pickedSegs.indexOf(si) < 0) pickedSegs.push(si);
    }
    var items = [];
    pickedSegs.forEach(function (si) {
      var seg = segs[si];
      var first = list[seg.from];
      var deep = (seg.to > seg.from) ? list[seg.to] : null;   // 段内最后一道作为加深
      items.push({
        kp: seg.kp,
        base: first, deep: (deep && deep !== first) ? deep : null,
        baseIdx: seg.from, deepIdx: (deep && deep !== first) ? seg.to : null
      });
    });
    // 由易到难：按教材顺序（seg 顺序）——样本即顺序
    return { semKey: semKey, items: items, total: items.length, segTotal: segs.length };
  }

  // ================= 运行态 =================
  var R = null;   // { semKey, items, idx, phase:'base'|'deep', answers:[], done, t0 }

  function start(semKey, opts) {
    var p = plan(semKey, opts);
    if (!p.items.length) { R = null; return null; }
    R = { semKey: semKey, items: p.items, idx: 0, phase: 'base', answers: [], asked: 0, done: false, t0: Date.now(), plan: p };
    return R;
  }
  function current() {
    if (!R || R.done) return null;
    var it = R.items[R.idx];
    if (!it) return null;
    var q = (R.phase === 'deep' && it.deep) ? it.deep : it.base;
    return { kp: it.kp, phase: R.phase, problem: q, index: R.idx, total: R.items.length };
  }
  function questionCount() {
    if (!R) return 0;
    var n = 0;
    R.items.forEach(function (it) { n += 1 + (it.deep ? 1 : 0); });
    return Math.min(n, MAX_Q);
  }

  // 提交一题结果；返回 {next:'base'|'deep'|'kp'|'done', ...}
  function submit(correct) {
    if (!R || R.done) return { next: 'done' };
    var it = R.items[R.idx];
    if (R.phase === 'base') {
      if (correct) {
        if (it.deep) { R.phase = 'deep'; return { next: 'deep' }; }
        R.answers.push({ kp: it.kp, status: 'mastered' });
        return _advanceKp();
      }
      // 基础题错 → 薄弱，跳过加深
      R.answers.push({ kp: it.kp, status: 'weak' });
      return _advanceKp();
    }
    // deep
    R.answers.push({ kp: it.kp, status: correct ? 'mastered' : 'learning' });
    return _advanceKp();
  }
  function _advanceKp() {
    R.phase = 'base'; R.idx++;
    if (R.idx >= R.items.length || R.asked >= MAX_Q) { R.done = true; return { next: 'done' }; }
    return { next: 'kp' };
  }

  // ================= 结论 =================
  function result() {
    if (!R) return null;
    var byKp = {};
    R.items.forEach(function (it) {
      var rec = R.answers.filter(function (a) { return a.kp === it.kp; })[0];
      byKp[it.kp] = {
        status: rec ? rec.status : 'untested',
        baseIdx: it.baseIdx, deepIdx: it.deepIdx
      };
    });
    var kps = R.items.map(function (it) { return it.kp; });
    var first = byKp[kps[0]] || {};
    var last = byKp[kps[kps.length - 1]] || {};

    // 建议起点：第一个不是 mastered 的 KP 的首题
    var recIdx = 0, recKp = kps[0];
    for (var i = 0; i < kps.length; i++) {
      var s = byKp[kps[i]].status;
      if (s !== 'mastered') { recIdx = byKp[kps[i]].baseIdx || 0; recKp = kps[i]; break; }
      recIdx = (byKp[kps[i]].deepIdx != null ? byKp[kps[i]].deepIdx : byKp[kps[i]].baseIdx) + 1;
      recKp = kps[i];
    }

    var level, levelLabel, advice;
    var weakCount = kps.filter(function (k2) { return byKp[k2].status === 'weak'; }).length;
    if (first.status === 'weak' || weakCount >= Math.ceil(kps.length * 0.5)) {
      level = 'below'; levelLabel = '需要补基础';
      advice = '前面几个知识点还不太稳，建议从本册开头跟着微课卡慢慢过一遍，别急着往下冲。';
    } else if (last.status === 'mastered' && weakCount === 0) {
      level = 'above'; levelLabel = '可以跳级';
      advice = '这一册的大部分知识点你都已经会了，可以直接从「' + recKp + '」往后挑战，或者试试下一册。';
    } else {
      level = 'on'; levelLabel = '跟上进度';
      advice = '基础不错，个别知识点需要补一补。建议从「' + recKp + '」开始，这块还有提升空间。';
    }
    return {
      semKey: R.semKey, date: todayKey(), level: level, levelLabel: levelLabel,
      advice: advice, perKp: byKp, kps: kps, recommendIdx: recIdx, recommendKp: recKp,
      weakCount: weakCount,
      mastered: kps.filter(function (k2) { return byKp[k2].status === 'mastered'; }),
      weak: kps.filter(function (k2) { return byKp[k2].status === 'weak'; }),
      answered: R.answers.length
    };
  }

  // 落盘 + 回灌
  function applyResult(res, opts) {
    opts = opts || {};
    if (!res) return false;
    var all = loadAll(); all[res.semKey] = res; saveAll(all);
    // 回灌知识点进度：mastered → 视为已掌握；weak → 记 1 次触及（进入"在学"）
    res.mastered.forEach(function (kp) {
      try {
        if (typeof _bumpMathProgress === 'function' && _bumpMathProgress(kp)) {
          // 再补两次让它达到"已掌握"阈值（3 次）
          _bumpMathProgress(kp); _bumpMathProgress(kp);
        }
      } catch (e2) {}
    });
    res.weak.forEach(function (kp) { try { if (typeof _bumpMathProgress === 'function') _bumpMathProgress(kp); } catch (e2) {} });
    // 回灌薄弱点检测器
    try {
      if (root.WeaknessDetector && root.WeaknessDetector.recordAnswer && root.S) {
        res.weak.forEach(function (kp) {
          root.WeaknessDetector.recordAnswer(root.S, { subject: 'math', knowledge: kp, difficulty: 'medium' }, 'wrong', 0);
        });
        res.mastered.forEach(function (kp) {
          root.WeaknessDetector.recordAnswer(root.S, { subject: 'math', knowledge: kp, difficulty: 'medium' }, 'correct', 0);
        });
      }
    } catch (e2) {}
    // 挪日练指针到建议起点（仅在用户选择"从这里开始"时）
    if (opts.movePointer) {
      try {
        if (root.S && root.S.math) {
          root.S.math.idxBySem = root.S.math.idxBySem || {};
          root.S.math.idxBySem[res.semKey] = Math.max(0, res.recommendIdx | 0);
          if (typeof root.saveState === 'function') root.saveState();
        }
      } catch (e2) {}
    }
    return true;
  }

  // ================= UI =================
  function renderEntryCard(semKey) {
    var res = getResult(semKey);
    var stale = isStale(res);
    if (!stale) {
      return '<div style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#EAF2FF,#F7FAFF);border-left:4px solid #2570E8;border-radius:12px;padding:12px 16px;margin-bottom:14px">' +
        '<span style="font-size:22px">🧭</span>' +
        '<div style="flex:1;min-width:0">' +
        '<div style="font-size:13.5px;font-weight:800;color:#1349A6">已定级：' + e(res.levelLabel) + '</div>' +
        '<div style="font-size:12px;color:var(--text-2);margin-top:2px">建议起点「' + e(res.recommendKp) + '」· ' + e(res.date) + ' 测得</div>' +
        '</div>' +
        '<button onclick="MathDiagnostic.openResult()" style="padding:8px 14px;border-radius:20px;border:1px solid #2570E8;background:white;color:#2570E8;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">看报告</button>' +
        '<button onclick="MathDiagnostic.startRun()" style="padding:8px 14px;border-radius:20px;border:1px solid var(--ink-200);background:white;color:var(--text-2);font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">重测</button>' +
        '</div>';
    }
    return '<div style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#EAF2FF,#F7FAFF);border-left:4px solid #2570E8;border-radius:12px;padding:12px 16px;margin-bottom:14px">' +
      '<span style="font-size:22px">🧭</span>' +
      '<div style="flex:1;min-width:0">' +
      '<div style="font-size:13.5px;font-weight:800;color:#1349A6">3 分钟摸底 · 找到你的起点</div>' +
      '<div style="font-size:12px;color:var(--text-2);margin-top:2px">最多 12 道题，测完就知道该从哪一单元开始，不浪费时间做已经会了的题</div>' +
      '</div>' +
      '<button onclick="MathDiagnostic.startRun()" style="padding:9px 16px;border-radius:20px;border:none;background:#2570E8;color:white;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">开始摸底 →</button>' +
      '</div>';
  }

  function renderRunPanel() {
    var cur = current();
    if (!cur) return '<div style="padding:24px;text-align:center">诊断已结束</div>';
    var q = cur.problem || {};
    var choices = (q.choices && q.choices.length) ? q.choices : [];
    var opts = choices.map(function (c, i) {
      return '<button onclick="MathDiagnostic.answer(\'' + String(c).replace(/'/g, "\\'") + '\')" ' +
        'style="display:block;width:100%;text-align:left;padding:14px 16px;margin-bottom:10px;border-radius:14px;border:2px solid #E3EAF3;background:white;font-size:16px;font-weight:700;color:#12263F;cursor:pointer">' +
        String.fromCharCode(65 + i) + '. ' + e(c) + '</button>';
    }).join('');
    var fb = root.__diagFeedback || '';
    return '<div style="background:white;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(30,58,95,.06)">' +
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">' +
      '<span style="font-size:20px">🧭</span>' +
      '<div style="flex:1"><div style="font-size:14px;font-weight:800;color:#1349A6">摸底中 · ' + (cur.index + 1) + '/' + cur.total + ' 知识点</div>' +
      '<div style="font-size:12px;color:var(--text-3);margin-top:2px">当前知识点：' + e(cur.kp) + (cur.phase === 'deep' ? ' · 加深题' : '') + '</div></div>' +
      '<button onclick="MathDiagnostic.exit()" style="padding:6px 12px;border-radius:16px;border:1px solid var(--ink-200);background:white;font-size:12px;color:var(--text-2);cursor:pointer;font-weight:600">退出</button>' +
      '</div>' +
      (q.scene ? '<div style="font-size:13px;color:var(--text-2);line-height:1.7;margin-bottom:10px">' + e(q.scene) + '</div>' : '') +
      '<div style="font-size:17px;font-weight:800;color:#12263F;line-height:1.6;margin-bottom:14px">' + e(q.question || q.formula || '') + '</div>' +
      opts +
      fb +
      '</div>';
  }

  function renderResultPanel(res) {
    res = res || _lastResult || getResult(root.S && root.S.math && (root.S.math.semKey || (String(root.S.math.grade || 3) + (root.S.math.semester || 'a')))) || null;
    if (!res) return '<div style="padding:24px;text-align:center">还没有诊断结果</div>';
    var COLOR = { mastered: '#2570E8', learning: '#F5B800', weak: '#FB923C', untested: '#C9D6DE' };
    var ICON = { mastered: '✅ 已掌握', learning: '📖 在学', weak: '⚠️ 薄弱', untested: '○ 未测' };
    var rows = res.kps.map(function (kp) {
      var st = (res.perKp[kp] || {}).status || 'untested';
      return '<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--ink-100)">' +
        '<span style="flex:1;font-size:13.5px;color:#12263F">' + e(kp) + '</span>' +
        '<span style="font-size:12px;font-weight:700;color:' + COLOR[st] + '">' + ICON[st] + '</span></div>';
    }).join('');
    var badge = res.level === 'above' ? '#2570E8' : res.level === 'on' ? '#00A896' : '#FB923C';
    return '<div style="background:white;border-radius:16px;padding:20px;box-shadow:0 2px 12px rgba(30,58,95,.06)">' +
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">' +
      '<span style="font-size:26px">🧭</span>' +
      '<div><div style="font-size:18px;font-weight:800;color:' + badge + '">' + e(res.levelLabel) + '</div>' +
      '<div style="font-size:12px;color:var(--text-3)">' + e(res.date) + ' · 测了 ' + res.kps.length + ' 个知识点</div></div></div>' +
      '<div style="font-size:14px;color:var(--text-2);line-height:1.8;margin-bottom:14px;background:#F4F8FD;border-radius:12px;padding:12px 14px">' + e(res.advice) + '</div>' +
      '<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:6px">知识点掌握情况</div>' +
      rows +
      '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">' +
      '<button onclick="MathDiagnostic.applyAndGo()" style="padding:11px 18px;border-radius:22px;border:none;background:#2570E8;color:white;font-size:14px;font-weight:800;cursor:pointer">从「' + e(res.recommendKp) + '」开始 →</button>' +
      '<button onclick="MathDiagnostic.exit()" style="padding:11px 18px;border-radius:22px;border:1px solid var(--ink-200);background:white;color:var(--text-2);font-size:14px;font-weight:700;cursor:pointer">先随便看看</button>' +
      '</div></div>';
  }

  // ================= 闭环（供 index.html 调用） =================
  var _lastResult = null;

  function startRun() {
    var sem = _semKey();
    var r = start(sem);
    if (!r) { try { root.toast && root.toast('这一册还没有题目，稍后再试'); } catch (e2) {} return; }
    root.__diagFeedback = '';
    root.MATH_IS_DIAG = true;
    _rerender();
  }
  function answer(choice) {
    var cur = current();
    if (!cur) return;
    var q = cur.problem || {};
    var correct = String(choice) === String(q.answer);
    if (R) R.asked++;
    root.__diagFeedback = '<div style="padding:10px 14px;border-radius:12px;font-size:13.5px;font-weight:700;margin-top:4px;background:' +
      (correct ? '#E1F5EE;color:#006B5E' : '#FFE9D6;color:#B4530A') + '">' +
      (correct ? '✅ 答对了' : '❌ 这题先记下，稍后从这儿补') + '</div>';
    var r = submit(correct);
    if (r.next === 'done') {
      _lastResult = result();
      root.__diagFeedback = '';
      // 诊断结果立即落盘（是否挪动日练指针由用户点"从…开始"时再决定）
      try { applyResult(_lastResult, { movePointer: false }); } catch (e2) {}
      _rerender();
      return;
    }
    _rerender();
  }
  function finish() {
    _lastResult = result();
    if (_lastResult) applyResult(_lastResult, { movePointer: false });
    _rerender();
  }
  function applyAndGo() {
    var res = _lastResult || result();
    if (res) applyResult(res, { movePointer: true });
    root.MATH_IS_DIAG = false;
    root.MATH_SESSION = null;
    _rerender();
  }
  function exit() {
    root.MATH_IS_DIAG = false;
    root.__diagFeedback = '';
    _rerender();
  }
  function openResult() {
    _lastResult = getResult(_semKey());
    root.MATH_IS_DIAG = true;
    root.__diagResultView = true;
    _rerender();
  }
  function _semKey() {
    try {
      if (root.S && root.S.math) return String(root.S.math.grade || 3) + (root.S.math.semester || 'a');
    } catch (e2) {}
    return '3a';
  }
  function _rerender() {
    try {
      if (typeof root.render === 'function') root.render();
      else if (typeof root.renderView === 'function') root.renderView();
    } catch (e2) {}
  }

  // 供 index.html 在数学板块里直接取 HTML
  function panelHTML() {
    if (!root.MATH_IS_DIAG) return '';
    if (root.__diagResultView) { root.__diagResultView = false; return renderResultPanel(_lastResult || getResult(_semKey())); }
    if (R && R.done) { root.__diagResultView = false; return renderResultPanel(_lastResult || result()); }
    return renderRunPanel();
  }

  root.MathDiagnostic = {
    plan: plan,
    start: start,
    current: current,
    questionCount: questionCount,
    submit: submit,
    result: result,
    applyResult: applyResult,
    getResult: getResult,
    isStale: isStale,
    renderEntryCard: renderEntryCard,
    renderRunPanel: renderRunPanel,
    renderResultPanel: renderResultPanel,
    panelHTML: panelHTML,
    startRun: startRun,
    answer: answer,
    finish: finish,
    applyAndGo: applyAndGo,
    exit: exit,
    openResult: openResult,
    _state: function () { return R; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
