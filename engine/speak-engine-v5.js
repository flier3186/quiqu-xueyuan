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
    // 差异化语音：每老师独特音色 + 情感语调
    var pitch;
    var tKey = (teacherId || '').toLowerCase();
    if(tKey==='emma'){ pitch=1.25; rate*=0.95; }    // 女声：高频、稍慢、清晰热情
    else if(tKey==='leo'){ pitch=0.75; rate*=1.10; }  // 男声：低频、稍快、活泼
    else { pitch=1.0; }                        // aria：中性
    u.rate = Math.max(0.6, Math.min(1.4, rate));
    u.pitch = pitch;
    const v = this._selectVoice(teacher.voice.preferGender);
    if(v){ try{ u.voice = v; }catch(e){} }
    // 句末停顿模拟语调
    try{ speechSynthesis.resume(); }catch(e){}
    speechSynthesis.speak(u);
  },

  // ===== 调用 DeepSeek AI API（OpenAI 兼容格式，带重试+超时） =====
  async _callAI(teacherId, userText, dialogHistory){
    const key = (S.apiConfig && S.apiConfig.deepseekKey) || '';
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
    const body = JSON.stringify({
      model: 'deepseek-chat',
      messages: messages,
      max_tokens: 150,
      temperature: 0.7
    });
    // 最多重试 2 次（共 3 次请求），指数退避 1s/2s
    for(var attempt=0; attempt<3; attempt++){
      try{
        var ctrl = new AbortController();
        var timer = setTimeout(function(){ctrl.abort();}, 15000);
        var resp = await fetch('https://api.deepseek.com/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
          },
          body: body,
          signal: ctrl.signal
        });
        clearTimeout(timer);
        if(resp.ok){
          var data = await resp.json();
          var reply = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
          return reply ? reply.trim() : null;
        }
        // 401 Key 失效：不重试，直接降级
        if(resp.status === 401) return null;
        // 429 限流 / 5xx 服务器错误：重试
        if((resp.status === 429 || resp.status >= 500) && attempt < 2){
          await new Promise(function(r){setTimeout(r, 1000 * (attempt+1));});
          continue;
        }
        return null;
      }catch(e){
        // 网络异常 / abort：重试
        if(attempt < 2){
          await new Promise(function(r){setTimeout(r, 1000 * (attempt+1));});
          continue;
        }
        return null;
      }
    }
    return null;
  },

  // ===== 降级模式：分支对话树（带教师人设差异化） =====
  _fallback(scenarioId, userText, teacherId){
    const scenarios = (typeof SPEAK_SCENARIOS !== 'undefined') ? SPEAK_SCENARIOS : [];
    const sc = scenarios.find(s => s.id === scenarioId);
    const tId = teacherId || (S.speakV5 && S.speakV5.teacher) || 'emma';
    // 各老师独有的鼓励语
    const teacherGood = {
      emma: ['Exactly! ', 'Wonderful! ', 'You got it! ', 'Brilliant! ', 'Fantastic! '],
      leo: ['Haha, nice! ', 'Cool! ', 'You rock! ', 'Amazing! ', 'Super! '],
      aria: ['Well done! ', 'Good job! ', 'Nice try! ', 'You are doing great! ', 'I am proud of you! ']
    };
    const teacherBad = {
      emma: ["Almost! ", "Don't worry! ", "Try again! ", "You can do it! "],
      leo: ["Oops! ", "Not quite! ", "Almost there! ", "Keep trying! "],
      aria: ["That's okay! ", "Take your time! ", "Good effort! ", "Let me help! "]
    };
    // 各老师独有的额外追问（无场景时用）
    const teacherFollowups = {
      emma: ["That's interesting! Tell me more!", "Really? I want to know more!", "Wow! What else?", "Great! And then?", "Go on, I'm listening!"],
      leo: ["Haha, is that true? Tell me more!", "Cool story! What happened next?", "No way! Really?", "That's funny! What else?", "Awesome! Keep going!"],
      aria: ["I see! That's nice.", "How wonderful! Tell me more.", "Oh, I understand. And then?", "Very good! What else can you say?", "I'm listening. Go ahead."]
    };
    if(!sc){
      const followups = teacherFollowups[tId] || teacherFollowups.emma;
      return followups[Math.floor(Math.random() * followups.length)];
    }
    // 当前轮数决定期望回答
    const turn = (S.speakV5 && S.speakV5.history || []).filter(h => h.role === 'student').length;
    const exp = sc.studentExpected[Math.min(turn, sc.studentExpected.length - 1)];
    let matched = false;
    if(exp && userText){
      const t = userText.toLowerCase();
      matched = exp.keywords.some(k => t.includes(k));
    }
    const goodList = teacherGood[tId] || teacherGood.emma;
    const badList = teacherBad[tId] || teacherBad.emma;
    const enc = matched ? goodList[Math.floor(Math.random() * goodList.length)] : badList[Math.floor(Math.random() * badList.length)];
    const nextIdx = turn + 1;
    if(sc.teacherLines[nextIdx]){
      return enc + sc.teacherLines[nextIdx].text;
    }
    // 对话结束时的个性化结束语
    const endings = {
      emma: 'You did wonderfully! I had so much fun talking to you! See you next time!',
      leo: 'That was awesome! You are my star student! Catch you later!',
      aria: 'You did a great job today! I am very proud of you. See you next time!'
    };
    return endings[tId] || endings.emma;
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
      reply = this._fallback(S.speakV5.scenario, userText, teacherId);
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
    // 兼容性检测：iOS Safari 不支持 SpeechRecognition
    if(!this.SR){
      if(typeof toast === 'function'){
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if(isIOS) toast('📱 iOS 暂不支持语音识别，请用文字输入哦 ✍️');
        else toast('当前浏览器不支持语音识别，请用文本输入 ✍️');
      }
      return false;
    }
    if(this.isListening){ this.stopListening(); return false; }
    try{ this.recognition = new this.SR(); }
    catch(e){
      if(typeof toast === 'function') toast('语音识别初始化失败，请使用文字输入');
      return false;
    }
    // iOS Safari 强制设置 lang 避免报错
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
      const err = ev.error || '';
      if(typeof toast === 'function'){
        if(err === 'not-allowed') toast('🔇 麦克风权限被拒绝，请检查浏览器设置');
        else if(err === 'no-speech') toast('🤫 没有检测到语音，请再试一次');
        else if(err === 'network') toast('🌐 网络错误，请检查网络连接');
        else toast('识别出错：' + err);
      }
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
  },

  // 检查英语三阶段升级条件
  checkStageUpgrade(){
    if(typeof S.engStage !== 'number') S.engStage = 1;
    const stage = S.engStage;
    const words = S.eng && S.eng.learnedWords || 0;
    const phonics = S.eng && S.eng.phonicsStage || 1;
    const streak = S.overview && S.overview.streak || 0;
    if(stage === 1 && words >= 50 && phonics >= 2 && streak >= 3){
      S.engStage = 2;
      if(typeof addBadge === 'function') addBadge('eng_stage2', '开口说英语', '🗣️');
      if(typeof toast === 'function') toast('🎉 英语升级到第二阶段：引导输出期！');
      if(typeof saveState === 'function') saveState();
      return true;
    }
    if(stage === 2 && words >= 150 && phonics >= 3 && streak >= 7){
      S.engStage = 3;
      if(typeof addBadge === 'function') addBadge('eng_stage3', '自信说英语', '🎤');
      if(typeof toast === 'function') toast('🎉 英语升级到第三阶段：自主输出期！');
      if(typeof saveState === 'function') saveState();
      return true;
    }
    return false;
  }
};
