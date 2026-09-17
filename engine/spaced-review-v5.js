// engine/spaced-review-v5.js · 奇趣学园 V5 间隔复习引擎（FSRS-5 主路径 + SM-2 阶梯降级）
// 阶段1（线B2）：把内部 SM-2 调度替换为 FSRS-5（src/lib/ts-fsrs.mjs，自研精简版 17 参数），
//   - 环境变量 QUICKU_USE_SM2=1 时回退到原 SM-2 阶梯（保留向后兼容）
//   - 新增 spacedReviewVersion 字段写入 S，区分老用户（v1=SM-2）与新用户（v2=FSRS-5）
//   - 老数据平滑迁移：读队列时识别 engine 字段，无 engine 视为 SM-2 阶梯数据；
//     老卡片下次 markResult 时若 FSRS 可用则自动升级为 FSRS 卡片（fsrs 子对象）
// 与 engine/spaced-review.js（V4）共存，本文件优先。
// 依赖：window.QuQFSRS（来自 lib/ts-fsrs.mjs）；S / saveState（来自 index.html），均做存在性兜底。

if (typeof SpacedReview === 'undefined') {
window.SpacedReview = (function () {
  var DAY = 24 * 60 * 60 * 1000;
  // SM-2 阶梯（降级路径）：1天→3天→7天→14天→30天→掌握
  var INTERVALS = [1, 3, 7, 14, 30];
  var ENGINE_FSRS = 'fsrs5';
  var ENGINE_SM2 = 'sm2';
  var SPACED_REVIEW_VERSION = 2; // 写入 S.spacedReviewVersion，v1=SM-2 / v2=FSRS-5

  // 解析是否启用 SM-2 降级（静态前端读不到 process.env，故以 window.QUICKU_USE_SM2 为准）
  function _useSM2() {
    if (typeof window !== 'undefined' && window.QUICKU_USE_SM2 === '1') return true;
    if (typeof process !== 'undefined' && process.env && process.env.QUICKU_USE_SM2 === '1') return true;
    return false;
  }

  // 是否已加载 FSRS 库；若 index.html 未接线 lib/ts-fsrs.mjs，则按需动态加载一次
  var _fsrsLoaded = false;
  function _fsrs() {
    if (typeof window !== 'undefined' && window.QuQFSRS) return window.QuQFSRS;
    if (typeof self !== 'undefined' && self.QuQFSRS) return self.QuQFSRS;
    if (!_fsrsLoaded && typeof document !== 'undefined') {
      _fsrsLoaded = true;
      try {
        var s = document.createElement('script');
        s.src = 'lib/ts-fsrs.mjs';
        document.head.appendChild(s);
      } catch (e) { /* 静态部署下若脚本 404，下次调用会再次尝试；仍失败则走 SM-2 降级 */ _fsrsLoaded = false; }
    }
    if (typeof window !== 'undefined' && window.QuQFSRS) return window.QuQFSRS;
    if (typeof self !== 'undefined' && self.QuQFSRS) return self.QuQFSRS;
    return null; // 库未就绪 → 调用方走 SM-2 降级
  }

  function _queue() {
    if (typeof S === 'undefined' || !S) return [];
    if (!Array.isArray(S.reviewQueue)) S.reviewQueue = [];
    return S.reviewQueue;
  }
  function _save() {
    if (typeof saveState === 'function') saveState();
  }
  function _find(profileId, type, key) {
    var q = _queue();
    for (var i = 0; i < q.length; i++) {
      var e = q[i];
      if (e.profileId === profileId && e.type === type && e.key === key) return e;
    }
    return null;
  }

  // 平滑迁移：给老 SM-2 数据补 engine 字段（无 engine 视为 SM-2 阶梯数据）
  function _migrateEntry(e) {
    if (!e || e.engine) return e;
    e.engine = ENGINE_SM2;
    return e;
  }

  // FSRS 路径：把 entry 升级为含 fsrs 子对象的 FSRS 卡片
  // 语义：首次学习时，按 rating 初始化 S/D，due = now + round(S0)*DAY
  function _ensureFSRSCard(e, rating, nowMs) {
    if (e.fsrs) return e; // 已是 FSRS 卡片
    var f = _fsrs();
    var now = nowMs || Date.now();
    if (!f) {
      e.engine = ENGINE_SM2; // FSRS 不可用 → 退回 SM-2 阶梯
      return e;
    }
    var card = f.createCard(now);
    var r = (rating === undefined) ? f.RATINGS.Good : rating;
    var next = f.next(card, r, now); // 首次学习
    e.fsrs = next;
    e.engine = ENGINE_FSRS;
    e.dueDate = next.due;
    e.interval = Math.max(1, Math.round((next.due - now) / DAY));
    return e;
  }

  // FSRS 复习：card + rating + now → 更新 entry.fsrs / dueDate / interval
  function _fsrsNext(e, rating, nowMs) {
    var f = _fsrs();
    var now = nowMs || Date.now();
    if (!f || !e.fsrs) {
      _ensureFSRSCard(e, rating, now);
      if (!e.fsrs) return; // FSRS 不可用，已退回 SM-2
    }
    var next = f.next(e.fsrs, rating, now);
    e.fsrs = next;
    e.dueDate = next.due;
    e.interval = Math.max(1, Math.round((next.due - now) / DAY));
    e.mastered = false;
    e.engine = ENGINE_FSRS;
  }

  // SM-2 阶梯复习（降级路径）
  function _sm2Next(e, correct, nowMs) {
    var now = nowMs || Date.now();
    if (correct) {
      e.intervalIndex = Math.min((e.intervalIndex || 0) + 1, INTERVALS.length - 1);
      e.interval = INTERVALS[e.intervalIndex];
      if (e.intervalIndex >= INTERVALS.length - 1) {
        e.mastered = true;
      } else {
        e.dueDate = now + e.interval * DAY;
      }
    } else {
      e.intervalIndex = 0;
      e.interval = INTERVALS[0];
      e.mastered = false;
      e.dueDate = now + INTERVALS[0] * DAY;
    }
    e.engine = ENGINE_SM2;
  }

  // correct(bool) → FSRS rating 映射
  function _ratingFromCorrect(correct) {
    var f = _fsrs();
    var R = f ? f.RATINGS : { Again: 1, Good: 3 };
    return correct ? R.Good : R.Again;
  }

  return {
    // 添加新学知识点到复习队列
    add(profileId, type, key, subject) {
      if (!profileId || !type || !key) return;
      if (_find(profileId, type, key)) return;
      var now = Date.now();
      var e = {
        profileId: profileId,
        type: type,
        key: key,
        subject: subject || type,
        addedAt: now,
        dueDate: now + INTERVALS[0] * DAY,
        intervalIndex: 0,
        interval: INTERVALS[0],
        mastered: false,
        history: [],
      };
      _queue().push(e);
      if (!_useSM2()) {
        _ensureFSRSCard(e, undefined, now); // 新用户直接走 FSRS（默认 Good）
      } else {
        e.engine = ENGINE_SM2;
      }
      // 写入 spacedReviewVersion（区分 v1=SM-2 / v2=FSRS-5）
      if (typeof S !== 'undefined' && S && S.spacedReviewVersion !== SPACED_REVIEW_VERSION) {
        S.spacedReviewVersion = _useSM2() ? 1 : SPACED_REVIEW_VERSION;
      }
      _save();
    },

    // 获取今天需要复习的内容
    getDue(profileId, subject) {
      var now = Date.now();
      var out = [];
      _queue().forEach(function (e) {
        if (e.profileId !== profileId) return;
        if (e.mastered) return;
        if (e.dueDate > now) return;
        if (subject && e.subject !== subject) return;
        out.push(e);
      });
      return out;
    },

    // 标记复习结果
    markResult(profileId, type, key, correct) {
      var e = _find(profileId, type, key);
      if (!e) return;
      _migrateEntry(e); // 老数据平滑迁移
      e.history = e.history || [];
      e.history.push({ ts: Date.now(), correct: correct });
      var useSM2 = _useSM2();
      var f = _fsrs();
      if (!useSM2 && f) {
        // FSRS 主路径（以“FSRS 是否可用”为准，而非上次引擎标记；
        // 老 SM-2 数据 / 曾兜底失败的卡，只要 FSRS 可用即自动升级为 FSRS 卡片）
        if (!e.fsrs) _ensureFSRSCard(e, _ratingFromCorrect(correct), Date.now());
        if (e.fsrs) {
          _fsrsNext(e, _ratingFromCorrect(correct));
          e.engine = ENGINE_FSRS;
        } else {
          _sm2Next(e, correct); // FSRS 不可用兜底
        }
      } else {
        _sm2Next(e, correct); // SM-2 降级路径（QUICKU_USE_SM2=1 或 FSRS 缺失）
      }
      if (typeof S !== 'undefined' && S && S.spacedReviewVersion !== SPACED_REVIEW_VERSION) {
        S.spacedReviewVersion = useSM2 ? 1 : SPACED_REVIEW_VERSION;
      }
      _save();
    },

    // 生成昨日回顾
    generateReview(profileId) {
      var today0 = new Date(); today0.setHours(0, 0, 0, 0);
      var yStart = today0.getTime() - DAY;
      var yEnd = today0.getTime();
      var out = { math: [], vocab: [], eng: [] };
      _queue().forEach(function (e) {
        if (e.profileId !== profileId) return;
        if (e.addedAt >= yStart && e.addedAt < yEnd) {
          if (e.subject === 'math') out.math.push(e.key);
          else if (e.type === 'vocab' || e.subject === 'eng') out.eng.push(e.key);
        }
      });
      return out;
    },

    // 获取复习队列统计
    getStats(profileId) {
      var due = this.getDue(profileId);
      var mastered = _queue().filter(function (e) { return e.profileId === profileId && e.mastered; }).length;
      var total = _queue().filter(function (e) { return e.profileId === profileId; }).length;
      return { due: due.length, mastered: mastered, total: total, percent: total > 0 ? Math.round(mastered / total * 100) : 0 };
    },

    // 渲染复习提醒 HTML
    renderReviewReminder(profileId) {
      var stats = this.getStats(profileId);
      if (stats.due === 0) return null;
      return '<div style="background:linear-gradient(135deg,#FFFBEB,#FFF7ED);border-radius:14px;padding:14px 16px;margin:12px 0;border:1.5px solid #FDE68A">' +
        '<div style="font-weight:700;color:#92400E;font-size:14px">⏰ 今日待复习 <span style="color:#DC2626">' + stats.due + '</span> 个知识点</div>' +
        '<div style="font-size:12px;color:#A16207;margin-top:4px">复习巩固能帮你记得更牢！已完成 ' + stats.percent + '% 🎯</div>' +
        '</div>';
    },

    // 内部：SM-2 阶梯（保留以测试/兼容）
    _nextInterval: function (cur) {
      return INTERVALS[Math.min(cur + 1, INTERVALS.length - 1)];
    },

    // 诊断：当前引擎选择
    _engine: function () {
      return _useSM2() ? ENGINE_SM2 : ENGINE_FSRS;
    },
  };
})();
}
