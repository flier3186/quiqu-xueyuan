// ============================================================
// ListeningMath —— 三年级「听算」模式（零依赖，纯 ES + 全局 API）
// 体验基调（见 TEAM-CHARTER）：无对错审判、只有陪伴与惊喜；连胜不清零；永不在失败上收尾。
//
// 对外 API：
//   ListeningMath.mount(container, options?)     渲染并启动
//   ListeningMath.setQuestionSource(fn)          注入题目生成器（PM 接 MathKernel）
//   ListeningMath.setSpeed(x)                    设置语速 0.8 / 1.0 / 1.2
//   ListeningMath.start() / next() / replay() / submit(ans)
//   ListeningMath.on(event, fn)                  事件：'correct' | 'wrong' | 'done'
//
// 题目源契约（setQuestionSource）：
//   无参函数，返回 { prompt:String, answer:Number|String }
//   prompt 为口语读题文本（模块会把其中数字逐位拆开读清晰）
//   例：{ prompt:'23 加 45 等于 多少', answer:68 }
//   PM 接线：ListeningMath.setQuestionSource(() => MathKernel.nextListeningQuestion())
//
// TTS 依赖：优先 NeuralTTS.speakSafe（神经优先，失败自动降级浏览器 TTS）；
//          若 NeuralTTS 未加载则回退到内置 speechSynthesis 封装。
// ============================================================
(function (global) {
  'use strict';

  // ---------- 样式（自带，复用全站主题变量，带 hex 兜底）----------
  const CSS = `
.listen-math{--lm-teal:var(--teal,#00A896);--lm-teal-400:var(--teal-400,#2FD1AE);--lm-yellow:var(--yellow,#F5B800);--lm-navy:var(--navy,#1E3A5F);--lm-navy-800:var(--navy-800,#0D1A2B);--lm-ink:var(--text-1,#1f2937);--lm-soft:var(--teal-soft,#E6F7F3);--lm-dur:var(--dur-base,260ms);
  font-family:inherit;color:var(--lm-ink);max-width:560px;margin:0 auto;}
.listen-math *{box-sizing:border-box}
.listen-math .lm-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.listen-math .lm-title{font-weight:900;font-size:20px;color:var(--lm-navy);display:flex;align-items:center;gap:8px}
.listen-math .lm-title .dot{width:12px;height:12px;border-radius:50%;background:linear-gradient(135deg,var(--lm-teal),var(--lm-yellow))}
.listen-math .lm-progress{font-weight:700;color:var(--lm-teal);font-size:14px;background:var(--lm-soft);padding:5px 12px;border-radius:99px}
.listen-math .lm-card{background:#fff;border-radius:18px;padding:22px;box-shadow:0 10px 30px rgba(30,58,95,.10);border:1px solid rgba(0,168,150,.12)}
.listen-math .lm-qcount{font-size:13px;color:#64748b;font-weight:700;letter-spacing:.5px;text-transform:uppercase}
.listen-math .lm-prompt{font-size:26px;font-weight:800;color:var(--lm-navy);margin:10px 0 4px;min-height:38px;line-height:1.35}
.listen-math .lm-hint{font-size:13px;color:#94a3b8;margin-bottom:16px}
.listen-math .lm-controls{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.listen-math .lm-btn{flex:1;min-width:120px;border:none;cursor:pointer;font-weight:800;font-size:15px;padding:13px 14px;border-radius:14px;transition:transform var(--lm-dur),box-shadow var(--lm-dur),opacity var(--lm-dur);color:#fff;background:linear-gradient(135deg,var(--lm-teal),var(--lm-teal-400))}
.listen-math .lm-btn:active{transform:translateY(1px) scale(.99)}
.listen-math .lm-btn.ghost{background:#fff;color:var(--lm-teal);border:2px solid var(--lm-teal)}
.listen-math .lm-btn.yellow{background:linear-gradient(135deg,var(--lm-yellow),#ffd54d);color:var(--lm-navy-800)}
.listen-math .lm-btn:disabled{opacity:.5;cursor:not-allowed}
.listen-math .lm-speed{display:flex;gap:6px;align-items:center;margin-bottom:16px;font-size:13px;color:#64748b;font-weight:700}
.listen-math .lm-speed button{border:2px solid #e2e8f0;background:#fff;color:#475569;border-radius:99px;padding:5px 12px;cursor:pointer;font-weight:800;font-size:13px;transition:all var(--lm-dur)}
.listen-math .lm-speed button.active{background:var(--lm-teal);color:#fff;border-color:var(--lm-teal)}
.listen-math .lm-input{width:100%;font-size:30px;font-weight:800;text-align:center;padding:14px;border:2px solid #e2e8f0;border-radius:14px;color:var(--lm-navy);outline:none;transition:border-color var(--lm-dur);font-family:inherit}
.listen-math .lm-input:focus{border-color:var(--lm-teal)}
.listen-math .lm-feedback{min-height:30px;margin-top:12px;font-weight:800;font-size:16px;text-align:center;transition:opacity var(--lm-dur)}
.listen-math .lm-feedback.ok{color:#16a34a}
.listen-math .lm-feedback.no{color:#f59e0b}
.listen-math .lm-score{display:flex;justify-content:space-around;margin:6px 0 14px;text-align:center}
.listen-math .lm-score div{font-weight:800}
.listen-math .lm-score b{display:block;font-size:26px;color:var(--lm-teal)}
.listen-math .lm-done{text-align:center;padding:8px 0}
.listen-math .lm-done .big{font-size:54px;line-height:1}
.listen-math .lm-pop{animation:lmPop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes lmPop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}
.listen-math .lm-hidden{display:none}
`;

  // ---------- 内置默认题目源：三年级四则（可被注入覆盖）----------
  function _rand(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function defaultSource() {
    const types = ['add', 'sub', 'mul', 'div'];
    const t = types[_rand(0, types.length - 1)];
    if (t === 'add') {
      const a = _rand(12, 89), b = _rand(11, 99 - a > 0 ? 99 - a : 10);
      return { prompt: `${a} 加 ${b} 等于 多少`, answer: a + b };
    }
    if (t === 'sub') {
      let a = _rand(20, 99), b = _rand(11, a);
      return { prompt: `${a} 减 ${b} 等于 多少`, answer: a - b };
    }
    if (t === 'mul') {
      const a = _rand(2, 9), b = _rand(2, 9);
      return { prompt: `${a} 乘 ${b} 等于 多少`, answer: a * b };
    }
    // div：整除
    const a = _rand(2, 9), b = _rand(2, 9);
    const prod = a * b;
    return { prompt: `${prod} 除以 ${b} 等于 多少`, answer: a };
  }

  // 把文本里的连续数字逐位拆开（"23" -> "2 3"），让 TTS 读得清晰
  function spellDigits(text) {
    return String(text).replace(/\d+/g, m => m.split('').join(' '));
  }

  // ---------- TTS 封装（统一走 VoiceCore 选择层，中文神经音优先）----------
  let _voice = 'zh-CN-XiaoxiaoNeural';
  function _speak(text, opts) {
    opts = opts || {};
    const spoken = spellDigits(text);
    const ratePct = opts.ratePct != null ? opts.ratePct : 0;
    // Echo 统一语音层：严格优先级选神经音（中文 Xiaoxiao/Yunyang 优先）
    if (global.VoiceCore && typeof global.VoiceCore.speak === 'function') {
      return global.VoiceCore.speak(spoken, { lang: 'zh-CN', rate: 1 + ratePct / 100, pitch: 1.05 });
    }
    // 极旧兜底：内置 speechSynthesis
    return new Promise((resolve) => {
      try {
        if (!('speechSynthesis' in window)) return resolve('none');
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(spoken);
        u.lang = 'zh-CN'; u.rate = 1 + ratePct / 100; u.pitch = 1.05;
        u.onend = () => resolve('browser'); u.onerror = () => resolve('browser');
        speechSynthesis.speak(u);
      } catch (e) { resolve('none'); }
    });
  }
  // 读题两遍（首遍 + 间隔 + 第二遍）
  async function _readTwice(text, ratePct) {
    await _speak(text, { ratePct });
    await new Promise(r => setTimeout(r, 650));
    await _speak(text, { ratePct });
  }

  // ---------- 状态 ----------
  const state = {
    total: 10, current: 0, correct: 0, speed: 1.0,
    source: defaultSource, question: null, phase: 'idle',
    container: null, subs: {}
  };

  function ratePctFor() { return Math.round((state.speed - 1) * 100); }

  function on(ev, fn) { (state.subs[ev] = state.subs[ev] || []).push(fn); }
  function emit(ev, data) { (state.subs[ev] || []).forEach(f => { try { f(data); } catch (e) {} }); }

  function setQuestionSource(fn) { if (typeof fn === 'function') { state.source = fn; return true; } return false; }
  function setSpeed(x) {
    if (x === 0.8 || x === 1.0 || x === 1.2) { state.speed = x; _syncSpeedUI(); return true; }
    return false;
  }
  function setTotal(n) { if (n > 0 && n <= 50) { state.total = n | 0; } }

  // ---------- 渲染 ----------
  function _ensureStyle() {
    if (document.getElementById('lm-style')) return;
    const s = document.createElement('style'); s.id = 'lm-style'; s.textContent = CSS; document.head.appendChild(s);
  }

  function mount(container, options) {
    if (typeof container === 'string') container = document.querySelector(container);
    if (!container) { console.error('[ListeningMath] 容器不存在'); return; }
    options = options || {};
    if (options.total) setTotal(options.total);
    if (options.source) setQuestionSource(options.source);
    if (options.speed) setSpeed(options.speed);
    if (options.voice) _voice = options.voice;
    state.container = container;
    _ensureStyle();
    start();
  }

  function start() {
    state.current = 0; state.correct = 0; state.phase = 'playing';
    _renderShell();
    next();
  }

  function _renderShell() {
    const c = state.container;
    c.innerHTML = `<div class="listen-math">
      <div class="lm-head">
        <div class="lm-title"><span class="dot"></span>听算小挑战</div>
        <div class="lm-progress" id="lmProg">第 0 / ${state.total} 题</div>
      </div>
      <div class="lm-card" id="lmCard"></div>
    </div>`;
  }

  function next() {
    if (state.current >= state.total) { _renderDone(); return; }
    state.question = state.source();
    state.phase = 'playing';
    _renderQuestion();
    _readTwice(state.question.prompt, ratePctFor());
  }

  function _renderQuestion() {
    const card = document.getElementById('lmCard');
    document.getElementById('lmProg').textContent = `第 ${state.current + 1} / ${state.total} 题`;
    card.innerHTML = `
      <div class="lm-qcount">仔细听，心里算一算</div>
      <div class="lm-prompt" id="lmPrompt">🎧 正在读题…</div>
      <div class="lm-hint">听完后把答案填在下面（可无限重听）</div>
      <div class="lm-controls">
        <button class="lm-btn ghost" id="lmReplay">🔊 再听一遍</button>
      </div>
      <div class="lm-speed">语速：
        <button data-s="0.8">0.8×</button>
        <button data-s="1.0">1.0×</button>
        <button data-s="1.2">1.2×</button>
      </div>
      <input class="lm-input" id="lmAns" inputmode="numeric" placeholder="?" autocomplete="off">
      <div class="lm-controls">
        <button class="lm-btn yellow" id="lmSubmit">✅ 提交答案</button>
      </div>
      <div class="lm-feedback" id="lmFb"></div>`;

    const prompt = document.getElementById('lmPrompt');
    setTimeout(() => { prompt.textContent = '🔢 请算出答案'; }, 50);

    document.getElementById('lmReplay').onclick = () => replay();
    document.getElementById('lmSubmit').onclick = () => submit();
    const input = document.getElementById('lmAns');
    input.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
    input.focus();
    card.querySelectorAll('.lm-speed button').forEach(b => {
      b.onclick = () => { setSpeed(parseFloat(b.dataset.s)); };
    });
    _syncSpeedUI();
  }

  function _syncSpeedUI() {
    const card = document.getElementById('lmCard');
    if (!card) return;
    card.querySelectorAll('.lm-speed button').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.s) === state.speed);
    });
  }

  function replay() {
    if (state.question) _readTwice(state.question.prompt, ratePctFor());
  }

  async function submit() {
    if (state.phase !== 'playing' || !state.question) return;
    const input = document.getElementById('lmAns');
    const raw = (input.value || '').trim();
    if (raw === '') { input.focus(); return; }
    const ans = Number(raw);
    const correctAns = Number(state.question.answer);
    if (isNaN(ans)) { _fb('请输入数字哦', 'no'); input.focus(); return; }

    state.phase = 'answered';
    if (ans === correctAns) {
      state.correct++;
      _fb('🎉 答对啦！', 'ok');
      emit('correct', { current: state.current + 1, correct: state.correct });
      _speak('答对啦', { ratePct: ratePctFor() });
      _pop();
    } else {
      // 体验基调：无对错审判，只温柔提示，可继续改
      _fb('🤔 再想想，答案不对哦', 'no');
      emit('wrong', { current: state.current + 1 });
      _speak('再想想哦', { ratePct: ratePctFor() });
      state.phase = 'playing';
      input.focus();
      input.select();
      return;
    }
    await new Promise(r => setTimeout(r, 1100));
    state.current++;
    next();
  }

  function _fb(msg, cls) {
    const fb = document.getElementById('lmFb');
    if (!fb) return;
    fb.className = 'lm-feedback ' + (cls || '');
    fb.textContent = msg;
  }
  function _pop() {
    const p = document.getElementById('lmPrompt');
    if (p) { p.classList.remove('lm-pop'); void p.offsetWidth; p.classList.add('lm-pop'); }
  }

  function _renderDone() {
    state.phase = 'done';
    const card = document.getElementById('lmCard');
    document.getElementById('lmProg').textContent = '本轮完成';
    emit('done', { total: state.total, correct: state.correct });
    const allRight = state.correct === state.total;
    card.innerHTML = `
      <div class="lm-done">
        <div class="big lm-pop">${allRight ? '🌟' : '🎈'}</div>
        <h2 style="color:var(--lm-navy);margin:10px 0">太棒啦！</h2>
        <div class="lm-score">
          <div>答对<b>${state.correct}</b></div>
          <div>总题<b>${state.total}</b></div>
        </div>
        <div class="lm-hint">你专心听、认真算，真了不起～</div>
        <div class="lm-controls" style="margin-top:14px">
          <button class="lm-btn" id="lmAgain">🔁 再来一轮</button>
        </div>
      </div>`;
    document.getElementById('lmAgain').onclick = () => start();
    _speak(allRight ? '全部答对啦，你真厉害' : '你做得很好，再练一轮吧', { ratePct: ratePctFor() });
  }

  global.ListeningMath = {
    mount, start, next, submit, replay,
    setQuestionSource, setSpeed, setTotal, on,
    get state() { return { total: state.total, current: state.current, correct: state.correct, speed: state.speed, phase: state.phase }; }
  };
})(window);
