// engine/pet-whisper.js · 可选口头解说「说给宠物听」（2026-09-18）
// 原则：完全可选（不点零影响）· 有奖励无惩罚 · 判定宽松（说了就给，命中策略词加奖）
// 借鉴：芬兰 verbalization（出声思考）研究 + 斑马「对角色说、只引导不判定」+ 移除强制追问的教训
window.PetWhisper = {

  // practice 答对后由 MathFlowV5._practiceAnswer 注入邀请卡（每题仅一次）
  offer(problem){
    if(!problem) return '';
    try{ if(window.MathFlowV5 && MathFlowV5._sess) MathFlowV5._sess.whisperDone = true; }catch(e){}
    return `<div id="petWhisperCard" style="margin-top:12px;padding:14px 16px;background:linear-gradient(135deg,#FFF6E8,#FFEFD6);border-radius:14px;border:1.5px dashed var(--yellow);animation:fadeIn .4s ease">
      <div style="font-size:13px;font-weight:800;color:var(--yellow-700);margin-bottom:4px">🐣 蛋蛋想知道：这道题你是怎么算出来的？</div>
      <div style="font-size:12px;color:var(--text-2);margin-bottom:8px">说给它听 +2💰，打字告诉它 +1💰；不想说就直接点「下一题 →」</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button onclick="PetWhisper.listen()" style="padding:9px 18px;background:var(--teal);color:#fff;border:none;border-radius:18px;font-size:13px;font-weight:800;cursor:pointer">🎤 说给蛋蛋听（+2💰）</button>
        <button onclick="PetWhisper.showInput()" style="padding:9px 18px;background:#fff;color:var(--teal-700);border:1.5px solid var(--teal);border-radius:18px;font-size:13px;font-weight:700;cursor:pointer">✍️ 打字告诉它（+1💰）</button>
      </div>
      <div id="petWhisperArea" style="margin-top:10px"></div>
    </div>`;
  },

  // ===== 语音路径：ASR zh-CN，失败/不支持自动切文字 =====
  listen(){
    const area = document.getElementById('petWhisperArea');
    if(!area) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SR){
      this._msg('浏览器不支持语音识别，用打字告诉蛋蛋吧 ✍️');
      this.showInput();
      return;
    }
    area.innerHTML = `<div style="padding:10px 12px;background:#fff;border:1.5px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700)">🎤 正在听…大声说：你是怎么算的？</div>`;
    try{
      const rec = new SR();
      rec.lang = 'zh-CN';
      rec.continuous = false;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (ev)=>{
        const tr = (ev.results && ev.results[0] && ev.results[0][0] && ev.results[0][0].transcript) || '';
        this._judge(tr, 'voice');
      };
      rec.onerror = (ev)=>{
        const err = (ev && ev.error) || '';
        if(err === 'not-allowed'){ this._msg('🔇 麦克风被拒绝了，用打字告诉蛋蛋吧 ✍️'); }
        else { this._msg('🎙️ 没听清（' + err + '），也可以打字告诉它 ✍️'); }
        this.showInput();
      };
      rec.onend = ()=>{};
      rec.start();
    }catch(e){
      this._msg('语音启动失败，用打字告诉蛋蛋吧 ✍️');
      this.showInput();
    }
  },

  // ===== 文字路径（兜底：ASR 不可用时照样能参与）=====
  showInput(){
    const area = document.getElementById('petWhisperArea');
    if(!area) return;
    area.innerHTML =
      '<textarea id="petWhisperInput" placeholder="比如：先算出 12+8=20，再减去 3…" style="width:100%;min-height:56px;padding:10px 12px;border:1.5px solid rgba(0,168,150,.3);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box"></textarea>' +
      '<div style="display:flex;gap:10px;margin-top:8px;justify-content:center">' +
      '<button onclick="PetWhisper.submit()" style="padding:8px 20px;background:var(--teal);color:#fff;border:none;border-radius:16px;font-weight:700;cursor:pointer">告诉蛋蛋 →</button></div>';
    try{ const inp = document.getElementById('petWhisperInput'); if(inp) inp.focus(); }catch(e){}
  },

  submit(){
    const inp = document.getElementById('petWhisperInput');
    if(!inp) return;
    this._judge(inp.value, 'text');
  },

  // ===== 宽松判定：非空就奖励；命中数字/策略词额外 +1 =====
  _judge(raw, via){
    const text = String(raw == null ? '' : raw).trim();
    if(!text){
      this._msg('还没说呢，蛋蛋在等你的答案哦 🐣');
      return;
    }
    const hitStrategy = /[0-9一二三四五六七八九十]|先算|再|凑|一共|还剩|多|少|乘|加|减|分|倍/.test(text);
    const n = (via === 'voice' ? 2 : 1) + (hitStrategy ? 1 : 0);
    this._reward(n, text, hitStrategy);
  },

  _reward(n, text, hitStrategy){
    try{
      if(typeof S !== 'undefined' && S && S.pet){
        S.pet.coins = (S.pet.coins || 0) + n;
        if(typeof saveState === 'function') saveState();
      }
    }catch(e){}
    const area = document.getElementById('petWhisperArea');
    if(area){
      area.innerHTML = `<div style="padding:12px 14px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        🎉 蛋蛋听懂了！+${n}💰<br>
        <span style="font-size:12px;color:var(--text-2)">「${this._escape(text.slice(0,50))}」${hitStrategy ? '——你说出了关键的数学道理，太棒了！' : '——说出想法就是数学家的好习惯！'}</span>
      </div>`;
    }
    // 宠物 TTS 回应一句
    try{
      if('speechSynthesis' in window){
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(hitStrategy ? '我听懂啦，你讲得真清楚！' : '谢谢你告诉我，你真是个小数学家！');
        u.lang = 'zh-CN'; u.rate = 1.0; u.pitch = 1.2;
        speechSynthesis.speak(u);
      }
    }catch(e){}
    // 提示可继续下一题
    try{
      const btn = document.getElementById('v5PracticeNextBtn');
      if(btn) btn.style.display = 'block';
    }catch(e){}
  },

  _msg(txt){
    const area = document.getElementById('petWhisperArea');
    if(area) area.innerHTML = `<div style="font-size:12px;color:var(--text-2);margin-bottom:6px">${this._escape(txt)}</div>`;
  },

  _escape(s){
    return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
};
