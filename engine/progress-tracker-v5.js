// engine/progress-tracker-v5.js · 奇趣学园 V5 进度追踪引擎
// 增强版：跨科目统计 / 周报增强 / 星星累计 / 成就联动
// 与 index.html 内联 V4 共存
if (typeof ProgressTracker === 'undefined') {
window.ProgressTracker = {
  _fmt(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },
  _weekStart(dateStr) {
    const d = dateStr ? new Date(dateStr) : new Date();
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - dow);
    return this._fmt(d);
  },
  _weekDates(weekStart) {
    const arr = []; const d = new Date(weekStart);
    for (let i = 0; i < 7; i++) { const dd = new Date(d); dd.setDate(d.getDate() + i); arr.push(this._fmt(dd)); }
    return arr;
  },

  // 记录每日学习数据
  recordDaily(state, date, data) {
    if (!state.study) state.study = { lastDate: '', totalTime: 0, dailyRecords: {}, streak: 0 };
    if (!state.study.dailyRecords) state.study.dailyRecords = {};
    state.study.dailyRecords[date] = {
      date, time: data.time || 0, mathTime: data.mathTime || 0, engTime: data.engTime || 0,
      accuracy: data.accuracy || 0, solvedCount: data.solvedCount || 0,
      newWords: data.newWords || 0, newKnowledge: data.newKnowledge || 0,
      stars: data.stars || 0, ts: Date.now()
    };
    state.study.totalTime = (state.study.totalTime || 0) + (data.time || 0);
    state.study.lastDate = date;
    this._calcStreak(state);
    if (typeof saveState === 'function') saveState();
    return state.study.dailyRecords[date];
  },

  // 计算连续学习天数
  _calcStreak(state) {
    if (!state.study || !state.study.dailyRecords) return;
    const records = state.study.dailyRecords;
    const dates = Object.keys(records).sort().reverse();
    if (dates.length === 0) { state.study.streak = 0; return; }
    const today = this._fmt(new Date());
    const yesterday = this._fmt(new Date(Date.now() - 86400000));
    let streak = 0;
    let checkDate = new Date(today);
    for (let i = 0; i < 365; i++) {
      const ds = this._fmt(checkDate);
      if (records[ds] && records[ds].time > 0) { streak++; checkDate.setDate(checkDate.getDate() - 1); }
      else break;
    }
    state.study.streak = streak;
  },

  // 获取连续天数
  calcStreak(state) {
    return (state.study && state.study.streak) || 0;
  },

  // 生成本周 vs 上周对比报告
  generateWeeklyReport(state, weekStart) {
    const ws = weekStart || this._weekStart();
    const curDates = this._weekDates(ws);
    const prevStart = (() => { const d = new Date(ws); d.setDate(d.getDate() - 7); return this._fmt(d); })();
    const prevDates = this._weekDates(prevStart);
    const recs = (state.study && state.study.dailyRecords) ? state.study.dailyRecords : {};
    const cur = curDates.map(d => recs[d]).filter(Boolean);
    const prev = prevDates.map(d => recs[d]).filter(Boolean);
    const sum = (arr, f) => arr.reduce((s, x) => s + (f(x) || 0), 0);
    const curDays = cur.length;
    const curTime = sum(cur, x => x.time);
    const curAccuracy = cur.length ? Math.round(sum(cur, x => x.accuracy) / cur.length) : 0;
    const curSolved = sum(cur, x => x.solvedCount);
    const curStars = sum(cur, x => x.stars || 0);
    const prevTime = sum(prev, x => x.time);
    const prevAccuracy = prev.length ? Math.round(sum(prev, x => x.accuracy) / prev.length) : 0;
    const prevSolved = sum(prev, x => x.solvedCount);
    return {
      curDays, curTime: Math.round(curTime / 60), curAccuracy, curSolved, curStars,
      prevTime: Math.round(prevTime / 60), prevAccuracy, prevSolved,
      timeDelta: Math.round(((curTime - prevTime) / (prevTime || 1)) * 100),
      accuracyDelta: curAccuracy - prevAccuracy,
      solvedDelta: curSolved - prevSolved
    };
  },

  // 渲染周报 HTML
  renderWeeklyReport(state) {
    const r = this.generateWeeklyReport(state);
    if (!r || r.curDays === 0) {
      return '<div style="text-align:center;padding:20px;color:var(--text-2)">本周还没有学习记录，加油！💪</div>';
    }
    const arrow = (v) => v > 0 ? '📈' : v < 0 ? '📉' : '➡️';
    return `<div style="padding:16px">
      <h3 style="margin:0 0 12px;color:var(--navy)">📊 本周学习报告</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px">
        <div style="background:#F0FDFA;border-radius:12px;padding:12px;text-align:center">
          <div style="font-size:24px;font-weight:700;color:var(--teal)">${r.curDays}</div>
          <div style="font-size:11px;color:var(--text-2)">学习天数</div>
        </div>
        <div style="background:#FFFBEB;border-radius:12px;padding:12px;text-align:center">
          <div style="font-size:24px;font-weight:700;color:var(--yellow)">${r.curTime}</div>
          <div style="font-size:11px;color:var(--text-2)">分钟</div>
        </div>
        <div style="background:#FFF7ED;border-radius:12px;padding:12px;text-align:center">
          <div style="font-size:24px;font-weight:700;color:var(--coral)">${r.curAccuracy}%</div>
          <div style="font-size:11px;color:var(--text-2)">正确率 ${arrow(r.accuracyDelta)}</div>
        </div>
        <div style="background:#F0F9FF;border-radius:12px;padding:12px;text-align:center">
          <div style="font-size:24px;font-weight:700;color:var(--navy)">${r.curSolved}</div>
          <div style="font-size:11px;color:var(--text-2)">做题数 ${arrow(r.solvedDelta)}</div>
        </div>
        <div style="background:#FAF5FF;border-radius:12px;padding:12px;text-align:center">
          <div style="font-size:24px;font-weight:700;color:#7C3AED">⭐${r.curStars}</div>
          <div style="font-size:11px;color:var(--text-2)">星星</div>
        </div>
      </div>
    </div>`;
  },

  // 累计星星（用于数学/英语完成练习后）
  addStars(state, count, reason) {
    if (!state.study) state.study = { dailyRecords: {}, streak: 0 };
    const today = this._fmt(new Date());
    if (!state.study.dailyRecords[today]) state.study.dailyRecords[today] = { date: today, stars: 0 };
    state.study.dailyRecords[today].stars = (state.study.dailyRecords[today].stars || 0) + count;
    if (typeof saveState === 'function') saveState();
    return state.study.dailyRecords[today].stars;
  },

  // 获取累计星星总数
  totalStars(state) {
    if (!state.study || !state.study.dailyRecords) return 0;
    return Object.values(state.study.dailyRecords).reduce((s, r) => s + (r.stars || 0), 0);
  }
};
}
