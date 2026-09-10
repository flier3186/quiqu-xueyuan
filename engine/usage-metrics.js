// engine/usage-metrics.js · 最简使用埋点（P2-10）
//
// 为什么需要它：家长面板的"近 7 天学习时长"图此前用 Math.random() 现编数据，
// 家长看到的是假的。这里补一层**本地、无网络、可解释**的埋点，喂真实数字。
//
// 隐私：全部数据只写在本机（随 S 一起持久化），不上传、不联网、不含任何身份信息。
//
// 记录粒度：按天 × 科目
//   opens      当天打开 App 次数（同一会话去重，避免每次 render 都 +1）
//   min        当天停留分钟（按视图进入/离开结算）
//   starts     开始练习次数（进入某科并真正看到题）
//   completed  完成一次"每日目标"的次数
//   abandoned  开始了但没完成就离开的次数（对家长最有信息量的一项）
//   answers    作答次数（可选，用于校验）
//
// 依赖：无。通过 window.S 拿状态（S 不存在时安静降级为内存态）。
(function (root) {
  'use strict';

  var KEY = 'quiqu_metrics_v1';
  var VERSION = 1;
  var SESSION_GAP_MS = 30 * 60 * 1000;   // 超过 30 分钟算新会话

  var mem = null;          // S 不可用时的内存兜底
  var curView = null;      // 当前正在计时的视图
  var curSince = 0;        // 当前视图开始时间戳
  var sessionStart = 0;
  var openedThisSession = false;
  var installed = false;

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function store() {
    var S = root.S;
    if (S && typeof S === 'object') {
      if (!S.metrics || S.metrics.v !== VERSION) S.metrics = { v: VERSION, days: {}, tk: {} };
      if (!S.metrics.days) S.metrics.days = {};
      if (!S.metrics.tk) S.metrics.tk = {};
      return S.metrics;
    }
    if (!mem) mem = { v: VERSION, days: {}, tk: {} };
    return mem;
  }

  function day(ms) {
    var m = store();
    var k = ms || today();
    if (!m.days[k]) m.days[k] = { opens: 0, min: 0, starts: 0, completed: 0, abandoned: 0, answers: 0, subj: {} };
    var d = m.days[k];
    if (!d.subj) d.subj = {};
    return d;
  }

  function subj(d, name) {
    if (!d.subj[name]) d.subj[name] = { min: 0, starts: 0, completed: 0, abandoned: 0, answers: 0 };
    return d.subj[name];
  }

  function save() {
    try { if (typeof root.saveState === 'function') root.saveState(); } catch (e) {}
    try { if (root.localStorage) root.localStorage.setItem(KEY, JSON.stringify(store())); } catch (e) {}
  }

  // 修剪：只留最近 60 天，避免状态无限膨胀
  function prune() {
    var m = store();
    var keys = Object.keys(m.days).sort();
    while (keys.length > 60) { delete m.days[keys.shift()]; }
  }

  // 把"当前视图已停留的时间"结算进今天
  function settle(now) {
    if (!curView || !curSince) return 0;
    var ms = (now || Date.now()) - curSince;
    if (ms < 0) ms = 0;
    if (ms > 3 * 60 * 60 * 1000) ms = 3 * 60 * 60 * 1000;   // 挂后台不计（防止开着网页睡觉刷时长）
    var mins = ms / 60000;
    if (mins > 0) {
      var d = day();
      d.min = +(d.min + mins).toFixed(2);
      subj(d, curView).min = +(subj(d, curView).min + mins).toFixed(2);
    }
    curSince = now || Date.now();
    return mins;
  }

  var API = {
    version: VERSION,

    /** 启动：绑定离开事件 + 首屏打开计数（幂等） */
    init: function () {
      if (installed) return API;
      installed = true;
      sessionStart = Date.now();
      var flush = function () { API.flush(); };
      try {
        root.addEventListener('pagehide', flush);
        root.addEventListener('beforeunload', flush);
        root.document && root.document.addEventListener('visibilitychange', function () {
          if (root.document.visibilityState === 'hidden') API.flush();
          else { curSince = Date.now(); }   // 回到前台重新开始计时
        });
      } catch (e) {}
      return API;
    },

    /** 记一次"打开应用"。同一会话只记一次；跨会话（>30 分钟）再记一次 */
    open: function () {
      var now = Date.now();
      var fresh = !openedThisSession || (now - sessionStart > SESSION_GAP_MS);
      if (!fresh) return 0;
      openedThisSession = true;
      sessionStart = now;
      var d = day();
      d.opens++;
      save();
      return d.opens;
    },

    /** 切换视图：结算上一个视图的停留时间，开始给新视图计时 */
    nav: function (view) {
      var now = Date.now();
      settle(now);
      curView = view || null;
      curSince = now;
      return true;
    },

    /** 通用事件 */
    event: function (name, meta) {
      var d = day();
      var s = meta && meta.subject ? subj(d, meta.subject) : null;
      if (name === 'start') { d.starts++; if (s) s.starts++; }
      else if (name === 'complete') { d.completed++; if (s) s.completed++; }
      else if (name === 'abandon') { d.abandoned++; if (s) s.abandoned++; }
      else if (name === 'answer') { d.answers++; if (s) s.answers++; }
      save();
      return true;
    },

    /** 落盘（离开页面/切后台时调用） */
    flush: function () {
      // 结算当前视图；若"开始了但没完成"则记一次中断
      settle(Date.now());
      try {
        var tk = store().tk || {};
        Object.keys(tk).forEach(function (k) {
          var t = tk[k];
          if (t && t.started && !t.completed) {
            day(k).abandoned++;
            if (t.subject) subj(day(k), t.subject).abandoned++;
            t.started = false;   // 同一天只记一次，避免反复切页刷高
          }
        });
      } catch (e) {}
      prune();
      save();
    },

    /** 标记"今天在某科开始过 / 完成过"（用于中断判定） */
    mark: function (kind, subject) {
      var m = store();
      var k = today();
      if (!m.tk[k]) m.tk[k] = {};
      var t = m.tk[k];
      if (!t.subject) t.subject = subject || null;
      if (kind === 'start') t.started = true;
      else if (kind === 'complete') t.completed = true;
      save();
      return t;
    },

    /** 原始数据（家长面板/审计用） */
    data: function () { return store(); },

    /** 近 N 天数组（日期升序），每项含 opens/min/starts/completed/abandoned */
    last: function (n) {
      n = n || 7;
      var m = store();
      var out = [];
      for (var i = n - 1; i >= 0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        var k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        var rec = m.days[k] || { opens: 0, min: 0, starts: 0, completed: 0, abandoned: 0, answers: 0, subj: {} };
        out.push({ date: k, dow: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
          opens: rec.opens || 0, min: Math.round(rec.min || 0), starts: rec.starts || 0,
          completed: rec.completed || 0, abandoned: rec.abandoned || 0, answers: rec.answers || 0,
          subj: rec.subj || {} });
      }
      return out;
    },

    /** 汇总：打开天数、总时长、平均每次时长、完成/中断、按科目分钟 */
    summary: function (days) {
      var arr = API.last(days || 7);
      var o = { days: arr.length, openDays: 0, opens: 0, min: 0, starts: 0, completed: 0, abandoned: 0, answers: 0, subjMin: {} };
      arr.forEach(function (x) {
        if (x.opens > 0) o.openDays++;
        o.opens += x.opens; o.min += x.min; o.starts += x.starts;
        o.completed += x.completed; o.abandoned += x.abandoned; o.answers += x.answers;
        Object.keys(x.subj || {}).forEach(function (k) {
          o.subjMin[k] = (o.subjMin[k] || 0) + Math.round(x.subj[k].min || 0);
        });
      });
      o.avgMinPerOpen = o.opens ? Math.round(o.min / o.opens) : 0;
      o.finishRate = o.starts ? Math.round(o.completed / o.starts * 100) : 0;
      return o;
    },

    /** 清空（家长面板"重置统计"用） */
    reset: function () {
      var m = store();
      m.days = {}; m.tk = {};
      save();
      return true;
    }
  };

  root.UsageMetrics = API;
})(typeof window !== 'undefined' ? window : this);
