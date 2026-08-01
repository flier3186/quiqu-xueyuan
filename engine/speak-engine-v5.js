// engine/speak-engine-v5.js · 奇趣学园 V5 引擎模块
// 口语引擎 V5：三老师人设 + Groq AI 自由对话 + 分支对话树降级 + 最优 TTS + 语音识别 + 三阶段发音评分
// 依赖全局：S / saveState / toast / speak / SPEAK_SCENARIOS / WORD_DICT（均来自 index.html，做存在性兜底）
// 状态字段：S.speakV5（运行时初始化，不修改 defaultState 已有字段）
window.SpeakEngineV5 = {
  // ===== 三老师人设 =====
  teachers: {
    emma: {
      name: 'Emma',
      avatar: '👩‍🏫',
      avatarImg: 'assets/teacher-emma.jpg',
      personality: '热情活泼，说话快，爱用感叹句',
      voice: { rate: 1.1, pitch: 1.2, preferGender: 'female' },
      scenarios: ['daily_greeting', 'shopping', 'weather'],
      systemPrompt: 'You are Emma, an energetic and enthusiastic English teacher for young Chinese learners (ages 8-12). Keep responses short (1-3 sentences). Use simple words. Be encouraging and use exclamation marks. If the student speaks Chinese, gently encourage them to try English.'
    },
    leo: {
      name: 'Leo',
      avatar: '👨‍🏫',
      avatarImg: 'assets/teacher-leo.jpg',
      personality: '幽默搞笑，爱讲笑话',
      voice: { rate: 0.95, pitch: 0.9, preferGender: 'male' },
      scenarios: ['restaurant', 'school_life', 'hobbies'],
      systemPrompt: 'You are Leo, a humorous and fun English teacher for young Chinese learners (ages 8-12). Keep responses short (1-3 sentences). Use simple words. Add light humor when appropriate. Be encouraging.'
    },
    aria: {
      name: 'Aria',
      avatar: '👩‍💼',
      avatarImg: 'assets/teacher-aria.jpg',
      personality: '温柔耐心，说话慢，擅长纠音鼓励',
      voice: { rate: 0.85, pitch: 1.1, preferGender: 'female' },
      scenarios: ['self_intro', 'family', 'health'],
      systemPrompt: 'You are Aria, a patient and gentle English teacher for young Chinese learners (ages 8-12). Speak slowly. Keep responses short (1-2 sentences). Use very simple words. Always praise effort before correcting.'
    }
  },

  // ===== 状态初始化（运行时新增字段，不破坏 defaultState） =====
  _bestVoice: null,
  _voiceCache: { female: null, male: null },
  recognition: null,
  isListening: false,
  SR: (typeof window !== 'undefined') ? (window.SpeechRecognition || window.webkitSpeechRecognition || null) : null,

  init(){
    if(!S.speakV5) S.speakV5 = {};
    if(!Array.isArray(S.speakV5.history)) S.speakV5.history = [];
    if(!S.speakV5.teacher) S.speakV5.teacher = 'emma';
    if(!S.speakV5.scenario) S.speakV5.scenario = null;
    if(typeof S.speakV5.lastScore !== 'number') S.speakV5.lastScore = 0;
    if(typeof S.speakV5.completed !== 'boolean') S.speakV5.completed = false;
    if(typeof S.engStage !== 'number') S.engStage = 1;
  },

  _save(){ if(typeof saveState === 'function') saveState(); },

  getTeacher(teacherId){
    const id = teacherId || (S.speakV5 && S.speakV5.teacher) || 'emma';
    return this.teachers[id] || this.teachers.emma;
  },

  // ===== 选择最优 TTS voice =====
  _selectVoice(preferGender){
    if(!('speechSynthesis' in window)) return null;
    const cacheKey = preferGender || 'female';
    if(this._voiceCache[cacheKey]) return this._voiceCache[cacheKey];
    let voices = [];
    try{ voices = speechSynthesis.getVoices() || []; }catch(e){ return null; }
    if(!voices.length) return null;
    const genderRe = preferGender === 'male'
      ? /male|man|boy|david|mark|alex|daniel|fred|george/i
      : /female|woman|girl|samantha|victoria|zira|susan|karen|moira|tessa/i;
    // 优先 en-US 匹配性别 → en-GB → 任意 en
    let v = voices.find(v => /en[-_]US/i.test(v.lang) && genderRe.test(v.name));
    if(!v) v = voices.find(v => /en[-_]GB/i.test(v.lang) && genderRe.test(v.name));
    if(!v) v = voices.find(v => /en[-_]US/i.test(v.lang));
    if(!v) v = voices.find(v => /^en/i.test(v.lang));
    if(v) this._voiceCache[cacheKey] = v;
    return v || null;
  },

  // ===== TTS 朗读（带语调模拟 + 情绪标记） =====
  speak(text, teacherId){
    if(!('speechSynthesis' in window) || !text) return;
    const teacher = this.getTeacher(teacherId);
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.volume = 1;
    let rate = teacher.voice.rate;
    // 情绪标记：开心（感叹号多）+10%，疑惑（问句多）-15%
    const excl = (text.match(/!/g) || []).length;
    const ques = (text.match(/\?/g) || []).length;
    if(excl > ques) rate *= 1.10;
    else if(ques > excl) rate *= 0.85;
    u.rate = Math.max(0.6, Math.min(1.4, rate));
    u.pitch = teacher.voice.pitch;
    const v = this._selectVoice(teacher.voice.preferGender);
    if(v){ try{ u.voice = v; }catch(e){} }
    // 句末停顿模拟语调
    try{ speechSynthesis.resume(); }catch(e){}
    speechSynthesis.speak(u);
  },

  // ===== 调用 Groq AI API =====
  async _callAI(teacherId, userText, dialogHistory){
    const key = (S.apiConfig && S.apiConfig.groqKey) || '';
    if(!key) return null; // 触发降级
    const teacher = this.getTeacher(teacherId);
    // 对话历史只保留最近10轮
    const recent = (dialogHistory || []).slice(-10).map(h => ({
      role: h.role === 'teacher' ? 'assistant' : 'user',
      content: h.text
    }));
    const messages = [
      { role: 'system', content: teacher.systemPrompt },
      ...recent,
      { role: 'user', content: userText }
    ];
    try{
      const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: messages,
          max_tokens: 150,
          temperature: 0.7
        })
      });
      if(!resp.ok) return null;
      const data = await resp.json();
      const reply = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      return reply ? reply.trim() : null;
    }catch(e){
      return null;
    }
  },

  // ===== 降级模式：分支对话树 =====
  _fallback(scenarioId, userText){
    const scenarios = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS : [];
    const sc = scenarios.find(s => s.id === scenarioId);
    if(!sc){
      // 无场景时的通用回复
      const generic = ["That's interesting! Tell me more.", 'Great! Keep going!', 'I see! What else?', 'Nice! Can you say more?'];
      return generic[Math.floor(Math.random() * generic.length)];
    }
    // 当前轮数决定期望回答
    const turn = (S.speakV5 && S.speakV5.history || []).filter(h => h.role === 'student').length;
    const exp = sc.studentExpected[Math.min(turn, sc.studentExpected.length - 1)];
    let matched = false;
    if(exp && userText){
      const t = userText.toLowerCase();
      matched = exp.keywords.some(k => t.includes(k));
    }
    const good = ['Great! ', 'Awesome! ', 'Good job! ', 'Well done! '];
    const bad = ["That's okay! ", "Don't worry! ", 'Good try! '];
    const enc = matched ? good[Math.floor(Math.random() * good.length)] : bad[Math.floor(Math.random() * bad.length)];
    const nextIdx = turn + 1;
    if(sc.teacherLines[nextIdx]){
      return enc + sc.teacherLines[nextIdx].text;
    }
    return enc + 'You did wonderfully! See you next time!';
  },

  // ===== 开始对话 =====
  startDialog(teacherId, scenarioId){
    this.init();
    S.speakV5.teacher = teacherId || 'emma';
    S.speakV5.scenario = scenarioId;
    S.speakV5.history = [];
    S.speakV5.completed = false;
    const scenarios = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS : [];
    const sc = scenarios.find(s => s.id === scenarioId);
    const opener = sc ? sc.teacherLines[0].text : ('Hi! I am ' + this.getTeacher(teacherId).name + '. Let us start!');
    const openerCn = sc ? sc.teacherLines[0].cn : '你好！我们开始吧！';
    S.speakV5.history.push({ role: 'teacher', text: opener, cn: openerCn, ts: Date.now() });
    this._save();
    const self = this;
    setTimeout(function(){ self.speak(opener, teacherId); }, 350);
    return opener;
  },

  // ===== 处理用户输入 =====
  async handleInput(teacherId, userText){
    this.init();
    if(!userText) return '';
    if(S.speakV5.completed){
      if(typeof toast === 'function') toast('对话已结束，可换一个场景继续哦 ✨');
      return '';
    }
    S.speakV5.history.push({ role: 'student', text: userText, ts: Date.now() });
    // 1. 尝试 AI API
    let reply = await this._callAI(teacherId, userText, S.speakV5.history);
    // 2. 失败则降级到分支对话树
    if(!reply){
      reply = this._fallback(S.speakV5.scenario, userText);
    }
    S.speakV5.history.push({ role: 'teacher', text: reply, ts: Date.now() });
    // 判断是否到达场景末尾（降级模式下）
    const scenarios = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS : [];
    const sc = scenarios.find(s => s.id === S.speakV5.scenario);
    if(sc){
      const studentTurns = S.speakV5.history.filter(h => h.role === 'student').length;
      if(studentTurns >= sc.teacherLines.length){
        S.speakV5.completed = true;
        if(typeof setStar === 'function') setStar(5, '完成口语对话');
      }
    }
    this._save();
    // 3. TTS 朗读回复
    const self = this;
    setTimeout(function(){ self.speak(reply, teacherId); }, 400);
    return reply;
  },

  // ===== 语音识别 =====
  startListening(onResult){
    const self = this;
    if(!this.SR){
      if(typeof toast === 'function') toast('当前浏览器不支持语音识别，请用文本输入 ✍️');
      return false;
    }
    if(this.isListening){ this.stopListening(); return false; }
    try{ this.recognition = new this.SR(); }
    catch(e){ if(typeof toast === 'function') toast('语音识别初始化失败'); return false; }
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.onresult = function(ev){
      const tr = ev.results[0][0].transcript;
      if(typeof toast === 'function') toast('🎤 识别：' + tr);
      if(onResult) onResult(tr);
    };
    this.recognition.onerror = function(ev){
      self.isListening = false;
      if(typeof toast === 'function') toast('识别出错：' + (ev.error || '未知'));
    };
    this.recognition.onend = function(){ self.isListening = false; };
    this.recognition.start();
    this.isListening = true;
    if(typeof toast === 'function') toast('🎤 正在听... 请大声回答');
    return true;
  },

  stopListening(){
    if(this.recognition && this.isListening){
      try{ this.recognition.stop(); }catch(e){}
    }
    this.isListening = false;
  },

  // ===== 录音判音（Levenshtein 距离 + 三阶段） =====
  _levenshtein(a, b){
    if(a === b) return 0;
    if(!a.length) return b.length;
    if(!b.length) return a.length;
    const m = [];
    for(let i = 0; i <= b.length; i++) m[i] = [i];
    for(let j = 0; j <= a.length; j++) m[0][j] = j;
    for(let i = 1; i <= b.length; i++){
      for(let j = 1; j <= a.length; j++){
        const cost = (a[j-1] === b[i-1]) ? 0 : 1;
        m[i][j] = Math.min(m[i-1][j] + 1, m[i][j-1] + 1, m[i-1][j-1] + cost);
      }
    }
    return m[b.length][a.length];
  },

  scorePronunciation(spoken, target, stage){
    const st = stage || (typeof S.engStage === 'number' ? S.engStage : 1);
    const e = (target || '').toLowerCase().replace(/[^a-z\s]/g, '').trim();
    const r = (spoken || '').toLowerCase().replace(/[^a-z\s]/g, '').trim();
    // 阶段1：不评分，只检测有没有说话（有声音即通过）
    if(st === 1){
      const passed = r.length > 0;
      return { passed: passed, score: passed ? 100 : 0, feedback: passed ? '真棒，你开口说啦！🌟' : '没听清，再试一次好吗？' };
    }
    if(!e && !r) return { passed: false, score: 0, feedback: '再试一次吧 🌱' };
    if(!e || !r) return { passed: false, score: r ? 40 : 20, feedback: '再大声说一次 💪' };
    const dist = this._levenshtein(e, r);
    const maxLen = Math.max(e.length, r.length);
    const sim = maxLen ? 1 - dist / maxLen : 1;
    const score = Math.round(Math.max(0, Math.min(1, sim)) * 100);
    const prev = S.speakV5 && S.speakV5.lastScore || 0;
    S.speakV5.lastScore = score;
    this._save();
    // 阶段2：评分但不显示绝对分，显示"比上次好多了！"
    if(st === 2){
      const better = score >= prev;
      return { passed: true, score: score, feedback: better ? '比上次好多了！继续加油！🎉' : '不错哦，再多练几次会更棒！💪' };
    }
    // 阶段3：正式评分，及格线40%
    const passed = score >= 40;
    let feedback;
    if(score >= 85) feedback = '发音很棒！🌟';
    else if(score >= 60) feedback = '不错，继续加油！👍';
    else if(score >= 40) feedback = '可以再练习一下 💪';
    else feedback = '没关系，多说几次 🌱';
    return { passed: passed, score: score, feedback: feedback };
  },

  // ===== 渲染对话区 HTML =====
  renderDialog(){
    this.init();
    const teacher = this.getTeacher(S.speakV5.teacher);
    const srOK = !!this.SR;
    if(!S.speakV5.history.length){
      return '<div style="text-align:center;padding:40px 20px;color:var(--text-2)">' +
        '<div style="font-size:46px;margin-bottom:10px">🗣️</div>' +
        '<div style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px">和 ' + teacher.name + ' 老师自由交谈吧！</div>' +
        '<div style="font-size:12px">选一个场景，点击开始对话</div></div>';
    }
    const msgs = S.speakV5.history.map(function(m){
      if(m.role === 'teacher'){
        const cn = m.cn ? '<div style="font-size:11px;color:var(--text-2);margin-top:4px">' + m.cn + '</div>' : '';
        return '<div style="display:flex;gap:10px;margin-bottom:12px">' +
          '<div style="width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0;background:var(--teal-soft)"><img src="' + (teacher.avatarImg||'') + '" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"></div>' +
          '<div><div style="background:white;padding:10px 14px;border-radius:14px;border-top-left-radius:4px;box-shadow:var(--shadow-sm);font-size:14px;color:var(--navy);max-width:280px">' + m.text + '</div>' + cn + '</div></div>';
      } else {
        return '<div style="display:flex;gap:10px;margin-bottom:12px;flex-direction:row-reverse">' +
          '<div style="min-width:36px"></div>' +
          '<div><div style="background:var(--teal);color:white;padding:10px 14px;border-radius:14px;border-top-right-radius:4px;font-size:14px;max-width:280px">' + m.text + '</div></div></div>';
      }
    }).join('');
    const done = S.speakV5.completed
      ? '<div style="margin-top:10px;padding:14px;text-align:center;background:linear-gradient(135deg,var(--teal-soft),rgba(245,184,0,.08));border-radius:14px;font-size:13px;color:var(--navy)">🎉 对话完成！获得 <strong>+5 ⭐</strong></div>'
      : '';
    const inputBar = S.speakV5.completed ? '' :
      '<div style="display:flex;gap:8px;padding:12px;background:white;border-radius:12px;box-shadow:var(--shadow-sm);margin-top:12px">' +
        '<input id="seV5Input" type="text" placeholder="输入英文回复，按 Enter 发送..." style="flex:1;border:1px solid var(--ink-200);border-radius:8px;padding:10px 12px;font-size:14px;outline:none" ' +
        'onkeydown="if(event.key===\'Enter\'){SpeakEngineV5._onSend()}">' +
        '<button onclick="SpeakEngineV5._onSend()" style="background:var(--teal);color:white;border:none;border-radius:8px;padding:0 16px;font-weight:700;cursor:pointer">发送</button>' +
        '<button onclick="SpeakEngineV5._onMic()" title="' + (srOK ? '点击说话' : '不支持语音识别') + '" style="background:' + (srOK ? 'var(--yellow)' : '#cbd5e1') + ';color:white;border:none;border-radius:8px;padding:0 12px;cursor:pointer;font-size:18px">🎤</button>' +
      '</div>';
    return '<div>' + msgs + done + inputBar + '</div>';
  },

  // 输入框发送（供 onclick 调用）
  async _onSend(){
    const inp = document.getElementById('seV5Input');
    if(!inp) return;
    const text = inp.value.trim();
    if(!text) return;
    inp.value = '';
    await this.handleInput(S.speakV5.teacher, text);
    const box = document.getElementById('seV5Dialog');
    if(box){ box.innerHTML = this.renderDialog(); }
  },

  // 麦克风按钮
  _onMic(){
    const self = this;
    if(!this.SR){ if(typeof toast === 'function') toast('当前浏览器不支持语音识别，请用文本输入 ✍️'); return; }
    if(this.isListening){ this.stopListening(); return; }
    this.startListening(async function(tr){
      await self.handleInput(S.speakV5.teacher, tr);
      const box = document.getElementById('seV5Dialog');
      if(box){ box.innerHTML = self.renderDialog(); }
    });
  }
};
