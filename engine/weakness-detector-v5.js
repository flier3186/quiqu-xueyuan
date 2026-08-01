// engine/weakness-detector-v5.js · 奇趣学园 V5 漏洞检测引擎
// 增强版：支持跨科目弱点聚合、推荐策略、可视化报告
// 与 index.html 内联 V4 共存（本文件优先，若已定义则跳过）
if (typeof WeaknessDetector === 'undefined') {
window.WeaknessDetector = {
  // 记录答题（扩展版：增加科目跨度和推荐队列）
  recordAnswer(state, question, result, timeUsed) {
    if (!state.answerLog) state.answerLog = [];
    const rec = {
      ts: Date.now(),
      date: this._fmt(new Date()),
      subject: question.subject || 'math',
      knowledge: question.knowledge || '未知知识点',
      difficulty: question.difficulty || 'medium',
      visualType: question.visualType || '',
      result: result,
      timeUsed: timeUsed || 0,
      hintUsed: result === 'hint'
    };
    state.answerLog.push(rec);
    if (state.answerLog.length > 300) state.answerLog = state.answerLog.slice(-300);
    // 更新掌握度
    const sub = state[question.subject || 'math'] || state.math;
    if (!sub.mastery) sub.mastery = {};
    const k = rec.knowledge;
    if (!sub.mastery[k]) sub.mastery[k] = { correct: 0, wrong: 0, hint: 0, times: [], lastSeen: 0, subject: rec.subject };
    if (rec.result === 'correct') sub.mastery[k].correct++;
    else if (rec.result === 'wrong' || rec.result === 'timeout') sub.mastery[k].wrong++;
    if (rec.hintUsed) sub.mastery[k].hint++;
    sub.mastery[k].times.push(rec.timeUsed);
    if (sub.mastery[k].times.length > 30) sub.mastery[k].times = sub.mastery[k].times.slice(-30);
    sub.mastery[k].lastSeen = rec.ts;
    if (typeof saveState === 'function') saveState();
    return rec;
  },

  _fmt(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },

  // 计算知识点掌握度 0-100
  calcMastery(state, knowledgePoint) {
    const sub = state.math || state;
    const m = (sub.mastery && sub.mastery[knowledgePoint]) || null;
    if (!m || (m.correct + m.wrong) === 0) return 0;
    const total = m.correct + m.wrong;
    const accuracy = m.correct / total;
    const avgT = m.times.length ? m.times.reduce((s, t) => s + (t || 0), 0) / m.times.length : 30;
    let timeScore;
    if (avgT < 5) timeScore = 0.3;
    else if (avgT < 10) timeScore = 0.7;
    else if (avgT > 120) timeScore = 0.6;
    else timeScore = 1;
    const hintScore = 1 - (total > 0 ? m.hint / total : 0);
    return Math.round(accuracy * 60 + timeScore * 20 + hintScore * 20);
  },

  // 获取弱点知识点列表（掌握度 < 60）
  getWeakPoints(state, subject) {
    const sub = subject ? (state[subject] || state) : state.math;
    if (!sub.mastery) return [];
    return Object.keys(sub.mastery).filter(k => this.calcMastery(state, k) < 60)
      .map(k => ({ knowledge: k, mastery: this.calcMastery(state, k), subject: sub.mastery[k].subject || subject || 'math' }));
  },

  // 分析薄弱点并生成推荐策略
  analyzeWeakness(state, subject) {
    const weaks = this.getWeakPoints(state, subject);
    if (weaks.length === 0) return null;
    const bySubject = {};
    weaks.forEach(w => {
      if (!bySubject[w.subject]) bySubject[w.subject] = [];
      bySubject[w.subject].push(w);
    });
    const recommendations = [];
    Object.keys(bySubject).forEach(s => {
      const items = bySubject[s].sort((a, b) => a.mastery - b.mastery);
      if (items.length > 0) {
        recommendations.push({
          subject: s,
          weakCount: items.length,
          avgMastery: Math.round(items.reduce((s, i) => s + i.mastery, 0) / items.length),
          topWeakness: items[0].knowledge,
          strategy: items[0].mastery < 30 ? '需要重新学习基础概念' : '建议做针对性练习'
        });
      }
    });
    return { totalWeakPoints: weaks.length, recommendations };
  },

  // 渲染弱点报告 HTML
  renderWeaknessReport(state) {
    const analysis = this.analyzeWeakness(state);
    if (!analysis || analysis.totalWeakPoints === 0) {
      return '<div class="wrd-wrap" style="text-align:center;padding:20px;color:var(--teal)"><b>🎉 太棒了！目前没有发现的薄弱知识点</b></div>';
    }
    let html = '<div class="wrd-wrap" style="padding:16px"><h3 style="margin:0 0 12px;color:var(--navy)">📊 学习漏洞报告</h3>';
    analysis.recommendations.forEach(rec => {
      const color = rec.avgMastery < 40 ? 'var(--coral)' : rec.avgMastery < 60 ? 'var(--yellow)' : 'var(--teal)';
      html += `<div style="background:#F8FAFC;border-radius:12px;padding:14px;margin-bottom:12px;border-left:4px solid ${color}">
        <div style="font-weight:700;color:var(--navy);margin-bottom:6px">${rec.subject === 'math' ? '🔢 数学' : '🔤 英语'} · 薄弱知识点 ${rec.weakCount} 个</div>
        <div style="font-size:13px;color:var(--text-2);margin-bottom:4px">最弱：${rec.topWeakness}（掌握度 ${rec.avgMastery}%）</div>
        <div style="font-size:12px;color:${color};font-weight:600">${rec.strategy}</div>
      </div>`;
    });
    html += '</div>';
    return html;
  }
};
}
