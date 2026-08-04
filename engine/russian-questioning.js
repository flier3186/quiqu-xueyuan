// engine/russian-questioning.js · 俄罗斯追问关键词匹配引擎
// 每道题配2道追问：第一道必选数量追问，第二道按需选比较/视角/反向追问
// 关键词匹配：输入文本包含 ≥50% 的关键词即通过

window.RussianQuestioning = {
  checkAnswer(answer, keywords){
    if(!answer || !keywords || !keywords.length) return false;
    const text = String(answer).toLowerCase();
    const hits = keywords.filter(kw => text.indexOf(kw.toLowerCase()) >= 0);
    return hits.length >= Math.max(1, Math.ceil(keywords.length / 2));
  },

  renderQuestion(problem, idx){
    const qs = (problem.russianQuestions || []);
    if(!qs.length || !qs[idx]) return '';
    const q = qs[idx];
    return `<div class="cpa-layer" style="border-left-color:var(--navy);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--navy);color:#fff">STAGE 6 · 俄罗斯追问 · 第 ${idx+1} / ${qs.length} 题</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">🤔 4 分钟 · 用你自己的话说出数学道理</div>
      <div style="padding:16px 18px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:14px;color:#fff;margin-bottom:14px">
        <div style="font-size:12px;opacity:.8;font-weight:600;margin-bottom:6px">💬 试着用这句话回答：</div>
        <div style="font-size:15px;font-weight:700;line-height:1.7">${this._escape(q.q)}</div>
      </div>
      <div style="padding:12px 14px;background:var(--teal-soft);border-radius:10px;margin-bottom:12px">
        <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:6px">🎯 提示词（不一定全用上，提2-3个就够了）</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${q.keywords.map(k=>`<span style="padding:4px 10px;background:#fff;border:1px solid var(--teal);color:var(--teal-700);border-radius:12px;font-size:12px;font-weight:600">${this._escape(k)}</span>`).join('')}
        </div>
      </div>
      <textarea id="v5RussianInput_${idx}" placeholder="用自己的话回答..." style="width:100%;min-height:80px;padding:12px;border:1.5px solid rgba(30,58,95,.2);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box;margin-bottom:10px"></textarea>
      <div style="display:flex;gap:10px;justify-content:center">
        <button onclick="RussianQuestioning._submit(${idx})" style="padding:10px 24px;background:var(--teal);color:#fff;border:none;border-radius:20px;font-weight:700;cursor:pointer">提交回答 →</button>
      </div>
      <div id="v5RussianFeedback_${idx}" style="margin-top:12px"></div>
    </div>`;
  },

  _submit(idx){
    const input = document.getElementById('v5RussianInput_' + idx);
    const fb = document.getElementById('v5RussianFeedback_' + idx);
    if(!input || !fb) return;
    const answer = input.value.trim();
    if(!answer){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">还没写回答哦，先想一想再写吧 👆</div>`;
      return;
    }
    const q = (window.MathFlowV5 && window.MathFlowV5._sess && window.MathFlowV5._sess.problem)
      ? (window.MathFlowV5._sess.problem.russianQuestions || [])[idx] : null;
    if(!q){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700)">回答已记录！</div>`;
      return;
    }
    const passed = RussianQuestioning.checkAnswer(answer, q.keywords);
    if(passed){
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ✅ <b>说得太棒了！</b>你提到了关键词，说明你真的理解了这道题的数量关系！<br>
        <span style="font-size:12px;color:var(--text-2)">「${this._escape(answer.slice(0,60))}${answer.length>60?'...':''}</span>
      </div>`;
      setTimeout(()=>{
        if(typeof MathFlowV5!=='undefined' && MathFlowV5.advance){
          MathFlowV5.advance('askChild');
          if(typeof updateMathStageV5==='function') updateMathStageV5();
        }
      }, 1500);
    }else{
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">
        💪 再想想，试试提到这些词：<b>${q.keywords.slice(0,4).map(k=>'「'+k+'」').join('、')}</b><br>
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
