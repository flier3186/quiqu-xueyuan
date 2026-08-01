// engine/spaced-review-v5.js · 奇趣学园 V5 间隔复习引擎
// 增强版：多科目支持 / 智能调度 / 遗忘曲线优化 / 可视化队列
// 与 engine/spaced-review.js（V4）共存，本文件优先
if (typeof SpacedReview === 'undefined') {
window.SpacedReview = (function () {
  const DAY = 24 * 60 * 60 * 1000;
  // V5 间隔阶梯：1天→3天→7天→14天→30天→掌握
  const INTERVALS = [1, 3, 7, 14, 30];

  function _queue() {
    if (!Array.isArray(S.reviewQueue)) S.reviewQueue = [];
    return S.reviewQueue;
  }
  function _save() {
    if (typeof saveState === 'function') saveState();
  }
  function _find(profileId, type, key) {
    return _queue().find(e => e.profileId === profileId && e.type === type && e.key === key);
  }

  return {
    // 添加新学知识点到复习队列
    add(profileId, type, key, subject) {
      if (!profileId || !type || !key) return;
      if (_find(profileId, type, key)) return;
      _queue().push({
        profileId, type, key, subject: subject || type,
        addedAt: Date.now(),
        dueDate: Date.now() + INTERVALS[0] * DAY,
        intervalIndex: 0,
        interval: INTERVALS[0],
        mastered: false,
        history: []
      });
      _save();
    },

    // 获取今天需要复习的内容
    getDue(profileId, subject) {
      const now = Date.now();
      return _queue().filter(e =>
        e.profileId === profileId && !e.mastered && e.dueDate <= now &&
        (!subject || e.subject === subject)
      );
    },

    // 标记复习结果
    markResult(profileId, type, key, correct) {
      const e = _find(profileId, type, key);
      if (!e) return;
      e.history.push({ ts: Date.now(), correct });
      if (correct) {
        e.intervalIndex = Math.min(e.intervalIndex + 1, INTERVALS.length - 1);
        e.interval = INTERVALS[e.intervalIndex];
        if (e.intervalIndex >= INTERVALS.length - 1) {
          e.mastered = true;
        } else {
          e.dueDate = Date.now() + e.interval * DAY;
        }
      } else {
        e.intervalIndex = 0;
        e.interval = INTERVALS[0];
        e.mastered = false;
        e.dueDate = Date.now() + INTERVALS[0] * DAY;
      }
      _save();
    },

    // 生成昨日回顾
    generateReview(profileId) {
      const today0 = new Date(); today0.setHours(0, 0, 0, 0);
      const yStart = today0.getTime() - DAY;
      const yEnd = today0.getTime();
      const out = { math: [], vocab: [], eng: [] };
      _queue().forEach(e => {
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
      const due = this.getDue(profileId);
      const mastered = _queue().filter(e => e.profileId === profileId && e.mastered).length;
      const total = _queue().filter(e => e.profileId === profileId).length;
      return { due: due.length, mastered, total, percent: total > 0 ? Math.round(mastered / total * 100) : 0 };
    },

    // 渲染复习提醒 HTML
    renderReviewReminder(profileId) {
      const stats = this.getStats(profileId);
      if (stats.due === 0) return null;
      return `<div style="background:linear-gradient(135deg,#FFFBEB,#FFF7ED);border-radius:14px;padding:14px 16px;margin:12px 0;border:1.5px solid #FDE68A">
        <div style="font-weight:700;color:#92400E;font-size:14px">⏰ 今日待复习 <span style="color:#DC2626">${stats.due}</span> 个知识点</div>
        <div style="font-size:12px;color:#A16207;margin-top:4px">复习巩固能帮你记得更牢！已完成 ${stats.percent}% 🎯</div>
      </div>`;
    },

    _nextInterval: function (cur) {
      return INTERVALS[Math.min(cur + 1, INTERVALS.length - 1)];
    }
  };
})();
}
