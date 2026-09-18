// engine/russian-questioning.js · 小老师挑战（俄罗斯追问 v2）
// 主入口：点选答案卡片（低门槛参与）；辅助：TTS 听问题、可选自己说（宽松判定）
// 借鉴：Khan Kids 全点选无倒计时 / Prodigy 计时器后台不展示 / 斑马「对角色说、只引导不判定」

window.RussianQuestioning = {
  checkAnswer(answer, keywords){
    if(!answer || !keywords || !keywords.length) return false;
    const text = String(answer).toLowerCase();
    const hits = keywords.filter(kw => text.indexOf(kw.toLowerCase()) >= 0);
    return hits.length >= Math.max(1, Math.ceil(keywords.length / 2));
  },

  _curQ(idx){
    return (window.MathFlowV5 && window.MathFlowV5._sess && window.MathFlowV5._sess.problem)
      ? (window.MathFlowV5._sess.problem.russianQuestions || [])[idx] : null;
  },

  renderQuestion(problem, idx){
    const qs = (problem.russianQuestions || []);
    if(!qs.length || !qs[idx]) return '';
    const q = qs[idx];
    const opts = (q.options && q.options.length) ? q.options : null;
    const optBtns = opts ? opts.map((o, oi) =>
      `<button onclick="RussianQuestioning._pick(${idx},${oi})" style="display:block;width:100%;text-align:left;margin:6px 0;padding:12px 14px;background:#fff;border:2px solid rgba(30,58,95,.18);border-radius:12px;font-size:14px;font-weight:600;color:var(--navy);cursor:pointer;font-family:inherit;line-height:1.5">${this._escape(o.text)}</button>`
    ).join('') : '';
    return `<div class="cpa-layer" style="border-left-color:var(--navy);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--navy);color:#fff">小老师挑战 · 第 ${idx+1} / ${qs.length} 题</span>
      <div style="margin:12px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">✨ 选一选，答对了你就能当小老师！</div>
      <div style="padding:14px 16px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:14px;color:#fff;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div style="font-size:15px;font-weight:700;line-height:1.7">💬 ${this._escape(q.q)}</div>
        <button onclick="RussianQuestioning._play(${idx})" title="听问题" style="flex-shrink:0;padding:8px 12px;background:rgba(255,255,255,.18);color:#fff;border:none;border-radius:16px;font-size:13px;font-weight:700;cursor:pointer">🔊 听</button>
      </div>
      ${opts ? `<div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:4px">👇 你觉得哪句话对？点一点：</div>` + optBtns : ''}
      <details style="margin-top:8px">
        <summary style="font-size:12px;color:var(--text-2);font-weight:600;cursor:pointer">✍️ 想自己说？点这里（也可以直接选上面）</summary>
        <div style="margin-top:8px">
          <textarea id="v5RussianInput_${idx}" placeholder="用自己的话回答..." style="width:100%;min-height:64px;padding:10px 12px;border:1.5px solid rgba(30,58,95,.2);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box"></textarea>
          <div style="display:flex;gap:10px;margin-top:8px;justify-content:center">
            <button onclick="RussianQuestioning._submit(${idx})" style="padding:8px 22px;background:var(--teal);color:#fff;border:none;border-radius:18px;font-weight:700;cursor:pointer">提交 →</button>
          </div>
        </div>
      </details>
      <div id="v5RussianFeedback_${idx}" style="margin-top:12px"></div>
    </div>`;
  },

  _play(idx){
    const q = this._curQ(idx);
    if(!q || !q.q) return;
    try{
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(q.q);
      u.lang = 'zh-CN'; u.rate = 0.9; u.pitch = 1.05;
      speechSynthesis.speak(u);
    }catch(e){}
  },

  _pick(idx, optIdx){
    const q = this._curQ(idx);
    const fb = document.getElementById('v5RussianFeedback_' + idx);
    if(!q || !fb) return;
    const o = (q.options || [])[optIdx];
    if(!o) return;
    if(o.correct){
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ⭐ <b>答对了，你就是小老师！</b>「${this._escape(o.text)}」<br>
        <span style="font-size:12px;color:var(--text-2)">数学道理被你记住了！</span>
      </div>`;
      setTimeout(()=>{
        if(typeof MathFlowV5!=='undefined' && MathFlowV5.advance){
          MathFlowV5.advance('practice');
          if(typeof updateMathStageV5==='function') updateMathStageV5();
        }
      }, 1300);
    }else{
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">
        💪 再想想哪句才是对的，点其他卡片试试，你一定行！
      </div>`;
    }
  },

  _submit(idx){
    const input = document.getElementById('v5RussianInput_' + idx);
    const fb = document.getElementById('v5RussianFeedback_' + idx);
    if(!input || !fb) return;
    const answer = input.value.trim();
    if(!answer){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">还没写哦——也可以直接点上面的卡片，更快！👆</div>`;
      return;
    }
    const q = this._curQ(idx);
    if(!q){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700)">回答已记录！</div>`;
      return;
    }
    // 宽松判定：命中任意 1 个关键词 或 写得足够完整（≥8 字）即通过
    const kwHit = (q.keywords || []).some(kw => answer.indexOf(kw) >= 0);
    const lenOk = answer.replace(/\s/g,'').length >= 8;
    if(kwHit || lenOk){
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ✅ <b>说得太棒了！小老师就是你！</b><br>
        <span style="font-size:12px;color:var(--text-2)">「${this._escape(answer.slice(0,60))}${answer.length>60?'...':''}」</span>
      </div>`;
      setTimeout(()=>{
        if(typeof MathFlowV5!=='undefined' && MathFlowV5.advance){
          MathFlowV5.advance('practice');
          if(typeof updateMathStageV5==='function') updateMathStageV5();
        }
      }, 1500);
    }else{
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">
        💪 再想想，试试提到这些词：<b>${q.keywords.slice(0,4).map(k=>'「'+k+'」').join('、')}</b><br>
        <span style="font-size:12px">也可以直接点上面的卡片快速过关 👆</span><br>
        <button onclick="RussianQuestioning._retry(${idx})" style="margin-top:8px;padding:6px 16px;background:var(--coral);color:#fff;border:none;border-radius:14px;cursor:pointer">再试一次</button>
      </div>`;
    }
  },

  _retry(idx){
    const fb = document.getElementById('v5RussianFeedback_' + idx);
    if(fb) fb.innerHTML = '';
    const input = document.getElementById('v5RussianInput_' + idx);
    if(input) input.value = '';
  },

  _escape(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
};
