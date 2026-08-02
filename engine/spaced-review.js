// engine/spaced-review.js · 奇趣学园 V5 引擎模块
// 间隔复习引擎：新学 → 1天 → 3天 → 7天 → 掌握；答错重置为1天后
// 依赖全局：S / saveState（来自 index.html），均做存在性兜底
window.SpacedReview = (function(){
  const DAY = 24 * 60 * 60 * 1000;

  function _queue(){
    if(!Array.isArray(S.reviewQueue)) S.reviewQueue = [];
    return S.reviewQueue;
  }
  function _save(){
    if(typeof saveState === 'function') saveState();
  }
  function _find(profileId, type, key){
    return _queue().find(e => e.profileId === profileId && e.type === type && e.key === key);
  }
  // 间隔阶梯：1 → 3 → 7 → 0(掌握)
  function _nextInterval(cur){
    if(cur >= 7) return 0;
    if(cur >= 3) return 7;
    return 3;
  }

  return {
    // 添加新学的知识点/词汇到复习队列（1天后复习）
    add(profileId, type, key){
      if(!profileId || !type || !key) return;
      if(_find(profileId, type, key)) return; // 已存在则不重复添加
      _queue().push({
        profileId: profileId,
        type: type,            // 'math' / 'vocab'
        key: key,
        addedAt: Date.now(),
        dueDate: Date.now() + 1 * DAY,
        interval: 1,
        mastered: false
      });
      _save();
    },

    // 获取今天需要复习的内容（dueDate <= 今天 且 未掌握）
    getDue(profileId){
      const now = Date.now();
      return _queue().filter(e => e.profileId === profileId && !e.mastered && e.dueDate <= now);
    },

    // 标记复习结果：答对进入下一间隔，答错重置为1天后
    markResult(profileId, type, key, correct){
      const e = _find(profileId, type, key);
      if(!e) return;
      if(correct){
        const nxt = _nextInterval(e.interval);
        if(nxt === 0){
          e.mastered = true;
          e.interval = 0;
        }else{
          e.interval = nxt;
          e.dueDate = Date.now() + nxt * DAY;
        }
      }else{
        e.interval = 1;
        e.mastered = false;
        e.dueDate = Date.now() + 1 * DAY;
      }
      _save();
    },

    // 生成昨日回顾内容：返回 {math:[知识点], vocab:[单词]}
    generateReview(profileId){
      const today0 = new Date(); today0.setHours(0,0,0,0);
      const yStart = today0.getTime() - 1 * DAY;
      const yEnd = today0.getTime();
      const out = { math: [], vocab: [] };
      _queue().forEach(e => {
        if(e.profileId !== profileId) return;
        if(e.addedAt >= yStart && e.addedAt < yEnd){
          if(e.type === 'math') out.math.push(e.key);
          else if(e.type === 'vocab') out.vocab.push(e.key);
        }
      });
      return out;
    },

    // 内部：计算下次复习间隔（暴露以便测试）
    _nextInterval: _nextInterval,

    // 渲染复习提醒到指定 DOM 元素
    renderReviewReminder(profileId){
      const due = this.getDue(profileId || 'default');
      if(!due || due.length === 0) return null;
      const items = due.map(e => {
        const label = e.type === 'math' ? '📐 ' + (e.key.substring(0, 20) + (e.key.length > 20 ? '...' : '')) : '📖 ' + e.key;
        return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--ink-100);font-size:13px">
          <span style="color:var(--coral)">⏰</span>
          <span style="flex:1;color:var(--text-1)">${label}</span>
          <span style="color:var(--teal);font-weight:700">${e.type==='math'?'数学':'英语'}</span>
        </div>`;
      }).join('');
      return `<div style="padding:10px;background:var(--yellow-soft);border-radius:10px;font-size:13px">
        <div style="font-weight:700;color:var(--yellow);margin-bottom:6px">📋 今日有 ${due.length} 项待复习</div>
        ${items}
      </div>`;
    }
  };
})();
