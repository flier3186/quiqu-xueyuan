// engine/math-warmup.js · 数字感日常热身（2026-09-18）
// 借鉴芬兰课堂 Math-duel 三玩法：点数快认 / 凑十数字伙伴 / 算式快抢
// 原则：低压无倒计时、点选即答、答对给金币、答错显示正确答案不惩罚（错误安全）
window.MathWarmup = {
  _mode: 'dots', _ans: 0, _speakTxt: '', _coins: 0, _count: 0,

  _grade(){ try{ return Number((S.math && S.math.grade) || 3); }catch(e){ return 3; } },

  _shuffle(a){
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  },

  // ===== 三种玩法题目生成 =====
  _gen(mode){
    const g = this._grade();
    if(mode === 'dots'){
      const max = g <= 2 ? 6 : 9;
      const n = 1 + Math.floor(Math.random() * max);
      const cand = [];
      const push = v => { if(v >= 1 && v <= max && cand.indexOf(v) < 0) cand.push(v); };
      push(n); push(n - 1); push(n + 1); push(n - 2); push(n + 2);
      for(let v = 1; v <= max && cand.length < 4; v++) push(v);
      const opts = this._shuffle(cand.slice(0, 4));
      return { tag: '点数快认', q: '数一数，有几个点？', kind: 'dots', n: n, opts: opts, ans: opts.indexOf(n), speak: '数一数，有几个点？' };
    }
    if(mode === 'ten'){
      const n = 1 + Math.floor(Math.random() * 9);
      const ansV = 10 - n;
      const cand = [];
      const push = v => { if(v >= 1 && v <= 9 && cand.indexOf(v) < 0) cand.push(v); };
      push(ansV); push(ansV - 1); push(ansV + 1); push(ansV - 2); push(ansV + 2);
      for(let v = 1; v <= 9 && cand.length < 4; v++) push(v);
      const opts = this._shuffle(cand.slice(0, 4));
      return { tag: '凑十伙伴', q: n + ' 和几凑成 10？', kind: 'ten', big: n + ' + ? = 10', opts: opts, ans: opts.indexOf(ansV), speak: n + ' 和几凑成十？' };
    }
    // 算式快抢：报和/积，选对应算式
    let a, b, op, target;
    if(g >= 6){ a = 2 + Math.floor(Math.random() * 8); b = 2 + Math.floor(Math.random() * 8); op = '×'; target = a * b; }
    else if(g >= 4){ a = 3 + Math.floor(Math.random() * 8); b = 2 + Math.floor(Math.random() * 8); op = '+'; target = a + b; }
    else { a = 1 + Math.floor(Math.random() * 6); b = 1 + Math.floor(Math.random() * (9 - a)); op = '+'; target = a + b; }
    const correct = a + ' ' + op + ' ' + b;
    const cand = [];
    const push = e => { if(cand.indexOf(e) < 0) cand.push(e); };
    push(correct);
    push(a + ' ' + op + ' ' + (b + 1));
    push((a + 1) + ' ' + op + ' ' + b);
    push(a + ' ' + op + ' ' + Math.max(1, b - 1));
    for(let d = 2; cand.length < 4; d++){
      push((a + d) + ' ' + op + ' ' + b);
      push(a + ' ' + op + ' ' + (b + d));
    }
    const opts = this._shuffle(cand.slice(0, 4));
    return { tag: '算式快抢', q: '和是 ' + target + '，哪个算式对？', kind: 'sum', opts: opts, ans: opts.indexOf(correct), speak: target + '，哪个算式？' };
  },

  _speak(text){
    this._speakTxt = text;
    try{
      if(!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN'; u.rate = 0.95; u.pitch = 1.1;
      speechSynthesis.speak(u);
    }catch(e){}
  },

  // ===== 打开/关闭 =====
  _clearTimer(){ if(this._nextTimer){ clearTimeout(this._nextTimer); this._nextTimer = null; } },

  open(mode){
    this._clearTimer();
    this._mode = mode || 'dots';
    this._coins = 0; this._count = 0;
    let ov = document.getElementById('mwOverlay');
    if(!ov){ ov = document.createElement('div'); ov.id = 'mwOverlay'; document.body.appendChild(ov); }
    this._shell(ov);
    this._next();
  },
  close(){
    this._clearTimer();
    const ov = document.getElementById('mwOverlay');
    if(ov && ov.parentNode) ov.parentNode.removeChild(ov);
    try{ speechSynthesis.cancel(); }catch(e){}
  },
  switchMode(mode){
    this._clearTimer();
    this._mode = mode;
    this._next();
  },

  _shell(ov){
    ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(16,34,58,.55);display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(2px)';
    ov.innerHTML = `
      <div style="width:100%;max-width:420px;background:#fff;border-radius:22px;padding:20px 22px;box-shadow:0 24px 60px rgba(16,34,58,.35);animation:fadeIn .35s ease;position:relative">
        <button onclick="MathWarmup.close()" style="position:absolute;top:12px;right:14px;width:30px;height:30px;border-radius:50%;border:none;background:var(--ink-100);color:var(--text-2);font-size:16px;font-weight:800;cursor:pointer;line-height:1">✕</button>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="font-size:20px">🧮</span>
          <div style="flex:1">
            <div style="font-size:16px;font-weight:900;color:var(--navy)">今日热身 · 1 分钟</div>
            <div style="font-size:11px;color:var(--text-3)">没有倒计时，点一点就算赢</div>
          </div>
          <span id="mwStats" style="font-size:11px;font-weight:800;color:var(--teal-700);background:var(--teal-soft);padding:4px 10px;border-radius:14px"></span>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:14px">
          <button onclick="MathWarmup.switchMode('dots')" class="mw-tab" data-m="dots" style="flex:1;padding:7px 0;border-radius:12px;border:1.5px solid var(--ink-200);background:#fff;font-size:12px;font-weight:800;color:var(--text-2);cursor:pointer">🔢 数点</button>
          <button onclick="MathWarmup.switchMode('ten')" class="mw-tab" data-m="ten" style="flex:1;padding:7px 0;border-radius:12px;border:1.5px solid var(--ink-200);background:#fff;font-size:12px;font-weight:800;color:var(--text-2);cursor:pointer">🤝 凑十</button>
          <button onclick="MathWarmup.switchMode('sum')" class="mw-tab" data-m="sum" style="flex:1;padding:7px 0;border-radius:12px;border:1.5px solid var(--ink-200);background:#fff;font-size:12px;font-weight:800;color:var(--text-2);cursor:pointer">⚡ 快抢</button>
        </div>
        <div id="mwBody"></div>
      </div>`;
    ov.querySelectorAll('.mw-tab').forEach(b=>{
      b.style.borderColor = b.dataset.m === this._mode ? 'var(--teal)' : 'var(--ink-200)';
      b.style.background = b.dataset.m === this._mode ? 'var(--teal-soft)' : '#fff';
      b.style.color = b.dataset.m === this._mode ? 'var(--teal-700)' : 'var(--text-2)';
    });
  },

  _render(t){
    const body = document.getElementById('mwBody');
    if(!body) return;
    let visual = '';
    if(t.kind === 'dots'){
      const dots = [];
      for(let i = 0; i < t.n; i++) dots.push('<span style="width:22px;height:22px;border-radius:50%;background:var(--navy);display:inline-block"></span>');
      visual = `<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0 4px">${dots.join('')}</div>`;
    } else if(t.kind === 'ten'){
      visual = `<div style="text-align:center;font-size:30px;font-weight:900;color:var(--teal);font-family:'Inter',sans-serif;margin:10px 0 4px">${this._escape(t.big)}</div>`;
    }
    body.innerHTML = `
      <div style="padding:14px 16px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:14px;color:#fff;display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="background:rgba(255,255,255,.18);padding:3px 10px;border-radius:12px;font-size:11px;font-weight:800">${t.tag}</span>
        <div style="flex:1;font-size:14.5px;font-weight:800;line-height:1.6">${this._escape(t.q)}</div>
        <button onclick="MathWarmup._speak('${this._speakTxt.replace(/'/g, '')}')" title="再听一遍" style="flex-shrink:0;padding:7px 11px;background:rgba(255,255,255,.18);color:#fff;border:none;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer">🔊 听</button>
      </div>
      ${visual}
      <div class="wp-choices" style="grid-template-columns:repeat(2,1fr);margin-top:8px">
        ${t.opts.map((o, i) => `<div class="wp-choice" data-i="${i}" onclick="MathWarmup.pick(${i})" style="justify-content:center;font-size:17px;font-weight:900;font-family:'Inter',sans-serif">${this._escape(String(o))}</div>`).join('')}
      </div>
      <div id="mwFb" style="margin-top:12px"></div>`;
  },

  _next(){
    this._cur = this._gen(this._mode);
    const t = this._cur;
    this._ans = t.ans;
    this._speak(t.speak);
    this._render(t);
    const st = document.getElementById('mwStats');
    if(st) st.textContent = '答对 ' + this._count + ' · +' + this._coins + '💰';
  },

  pick(i){
    const t = this._cur || this._gen(this._mode);
    const ok = i === this._ans;
    const body = document.getElementById('mwBody');
    const fb = document.getElementById('mwFb');
    const container = body ? body.querySelector('.wp-choices') : null;
    if(container){
      container.querySelectorAll('.wp-choice').forEach(c => {
        const ci = parseInt(c.dataset.i || '-1');
        c.classList.remove('correct', 'wrong');
        if(ci === this._ans) c.classList.add('correct');
        if(ci === i && !ok) c.classList.add('wrong');
      });
    }
    if(fb){
      if(ok){
        this._count++; this._coins++;
        try{ if(S && S.pet){ S.pet.coins = (S.pet.coins || 0) + 1; if(typeof saveState === 'function') saveState(); } }catch(e){}
        try{ if(window.QuizMood) window.QuizMood.right(); }catch(e){}
        fb.innerHTML = `<div style="padding:11px 14px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);font-weight:800">🎉 答对啦！+1💰</div>`;
        const st = document.getElementById('mwStats');
        if(st) st.textContent = '答对 ' + this._count + ' · +' + this._coins + '💰';
      }else{
        fb.innerHTML = `<div style="padding:11px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13.5px;color:var(--coral);font-weight:700">答案是 <b style="font-family:'Inter',sans-serif">${this._escape(String(t.opts[this._ans]))}</b> —— 记住它，下次一定行！</div>`;
      }
    }
    // 自动下一题（无倒计时惩罚，仅快速过渡）
    this._clearTimer();
    this._nextTimer = setTimeout(()=>{ this._nextTimer = null; this._next(); }, 1100);
  },

  _escape(s){
    return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
};
