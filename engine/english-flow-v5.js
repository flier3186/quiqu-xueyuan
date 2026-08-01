// engine/english-flow-v5.js · 奇趣学园 V5 引擎模块
// 英语每日板块流程：9 板块围绕同一场景，词汇跨板块复现 + 三阶段升级系统
// 依赖全局：S / saveState / toast / speak / setStar / SceneManager / VOCAB_BY_GRADE / WORD_DICT / SpeakEngineV5（均做存在性兜底）
// 状态字段：S.engV5（运行时初始化，不修改 defaultState 已有字段）
window.EnglishFlowV5 = {
  // ===== 每日9板块定义（同一场景贯穿，词汇复现） =====
  boards: [
    { id: 'review',   name: '昨日回顾',   icon: '📚', time: 3 },
    { id: 'listen',   name: '磨耳朵电台', icon: '🎧', time: 5 },
    { id: 'tpr',      name: 'TPR动作屋',  icon: '🏃', time: 3 },
    { id: 'phrase',   name: '每日短语',   icon: '💬', time: 5 },
    { id: 'vocab',    name: '图片词汇库', icon: '🖼️', time: 4 },
    { id: 'sentence', name: '句型启蒙',   icon: '🔤', time: 4 },
    { id: 'reading',  name: '绘本阅读',   icon: '📖', time: 5 },
    { id: 'speak',    name: '口语对话',   icon: '🗣️', time: 8 },
    { id: 'notebook', name: '我的单词本', icon: '📝', time: 3 }
  ],

  // ===== 状态初始化 =====
  init(){
    if(!S.engV5) S.engV5 = {};
    if(typeof S.engV5.currentBoard !== 'number') S.engV5.currentBoard = 0;
    if(!S.engV5.completed) S.engV5.completed = [];
    // 升级追踪指标
    if(typeof S.engV5.listenStars !== 'number') S.engV5.listenStars = 0;
    if(typeof S.engV5.tprLevels !== 'number') S.engV5.tprLevels = 0;
    if(typeof S.engV5.listenTasks !== 'number') S.engV5.listenTasks = 0;
    if(typeof S.engV5.repeatSum !== 'number') S.engV5.repeatSum = 0;
    if(typeof S.engV5.repeatCount !== 'number') S.engV5.repeatCount = 0;
    if(typeof S.engV5.booksRead !== 'number') S.engV5.booksRead = 0;
    if(typeof S.engV5.sentencePatterns !== 'number') S.engV5.sentencePatterns = 0;
    if(typeof S.engV5.taskCards !== 'number') S.engV5.taskCards = 0;
    if(typeof S.engStage !== 'number') S.engStage = 1;
    if(!Array.isArray(S.engV5.notebook)) S.engV5.notebook = [];
  },

  _save(){ if(typeof saveState === 'function') saveState(); },

  // 获取今日场景（依赖 SceneManager）
  _todayScene(){
    if(typeof SceneManager !== 'undefined' && SceneManager.getToday){
      return SceneManager.getToday(S.profileId || 'default');
    }
    // 兜底场景
    return { id: 'supermarket', name: '超市购物', icon: '🛒', words: ['apple', 'bread', 'milk', 'egg', 'rice'], phrases: ['How much is it?', 'I want...'], grammar: 'I want ___' };
  },

  // 单词释义查询（依赖 WORD_DICT）
  _wordInfo(w){
    if(typeof WORD_DICT !== 'undefined' && WORD_DICT[w]){
      return WORD_DICT[w];
    }
    return { pos: 'n.', def: w, example: '', coll: [], syn: '—', ant: '—' };
  },

  // ===== 渲染单个板块 =====
  renderBoard(boardId, sceneData){
    const scene = sceneData || this._todayScene();
    switch(boardId){
      case 'review':   return this._renderReview(scene);
      case 'listen':   return this._renderListen(scene);
      case 'tpr':      return this._renderTPR(scene);
      case 'phrase':   return this._renderPhrase(scene);
      case 'vocab':    return this._renderVocab(scene);
      case 'sentence': return this._renderSentence(scene);
      case 'reading':  return this._renderReading(scene);
      case 'speak':    return this._renderSpeak(scene);
      case 'notebook': return this._renderNotebook(scene);
      default:         return '<div style="padding:20px;color:var(--text-2)">未知板块</div>';
    }
  },

  // ===== 1. 昨日回顾（3分钟）=====
  _renderReview(scene){
    // 复现昨日场景核心词，快速闪卡复习
    const yWords = (S.eng && S.eng.favoriteWords && S.eng.favoriteWords.length) ? S.eng.favoriteWords.slice(0, 5) : scene.words.slice(0, 5);
    const cards = yWords.map((w, i) => {
      const info = this._wordInfo(w);
      return '<div class="ef-review-card" data-w="' + w + '" onclick="EnglishFlowV5._reviewFlip(this)" style="background:white;border-radius:12px;padding:14px;box-shadow:var(--shadow-sm);cursor:pointer;text-align:center;min-height:90px;display:flex;flex-direction:column;justify-content:center">' +
        '<div class="ef-front"><div style="font-size:18px;font-weight:800;color:var(--teal)">' + w + '</div><div style="font-size:11px;color:var(--text-2);margin-top:4px">👆 点击翻面</div></div>' +
        '<div class="ef-back" style="display:none"><div style="font-size:12px;color:var(--text-2)">' + (info.pos || '') + '</div><div style="font-size:13px;color:var(--navy);margin-top:4px">' + ((info.def || w).split('。')[0]) + '</div></div>' +
        '</div>';
    }).join('');
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">📚</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">昨日回顾</div>' +
        '<div style="font-size:12px;color:var(--text-2)">复习最近收藏的单词，点击卡片翻面看释义</div></div></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px">' + cards + '</div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'review\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">复习完成 ✓</button>' +
    '</div>';
  },

  _reviewFlip(el){
    const f = el.querySelector('.ef-front');
    const b = el.querySelector('.ef-back');
    if(f && b){ f.style.display = (f.style.display === 'none') ? 'flex' : 'none'; b.style.display = (b.style.display === 'none') ? 'block' : 'none'; }
    const w = el.getAttribute('data-w');
    if(typeof speak === 'function') speak(w);
  },

  // ===== 2. 磨耳朵电台（5分钟）=====
  _renderListen(scene){
    // 播放场景相关对话，中间插入2-3个互动验证点（听到关键词时点击）
    const keywords = scene.words.slice(0, 3);
    const dialogue = (typeof SPEAK_SCENARIOS !== 'undefined')
      ? (SPEAK_SCENARIOS.find(s => s.id === 'shopping' || s.id === 'restaurant') || SPEAK_SCENARIOS[0])
      : null;
    const lines = dialogue ? dialogue.teacherLines.slice(0, 3).map(l => l.text) : ['I want an apple.', 'How much is it?', 'Here you are.'];
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">🎧</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">磨耳朵电台</div>' +
        '<div style="font-size:12px;color:var(--text-2)">听对话，听到关键词就点它！</div></div></div>' +
      '<div style="background:linear-gradient(135deg,var(--teal-soft),rgba(245,184,0,.06));border-radius:14px;padding:16px;margin-bottom:12px">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">🔊 点击播放：</div>' +
        '<button onclick="EnglishFlowV5._playListen()" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:8px 18px;font-weight:700;cursor:pointer">▶ 播放对话</button>' +
        '<div id="efListenText" style="margin-top:10px;font-size:13px;color:var(--navy);min-height:20px"></div>' +
      '</div>' +
      '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">仔细听，听到这些词就点：</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
        keywords.map((w, i) => '<button id="efLw' + i + '" onclick="EnglishFlowV5._hitWord(' + i + ', \'' + w + '\')" style="background:white;border:2px solid var(--yellow);border-radius:12px;padding:12px 20px;font-size:16px;font-weight:700;color:var(--navy);cursor:pointer;transition:all .2s">' + w + '</button>').join('') +
      '</div>' +
      '<div id="efListenResult" style="margin-top:12px;font-size:13px;min-height:20px"></div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'listen\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">完成听力 ✓</button>' +
    '</div>';
  },

  _listenLines: null,
  _listenIdx: 0,
  _listenHit: 0,
  _playListen(){
    const scene = this._todayScene();
    const dialogue = (typeof SPEAK_SCENARIOS !== 'undefined')
      ? (SPEAK_SCENARIOS.find(s => s.id === 'shopping' || s.id === 'restaurant') || SPEAK_SCENARIOS[0])
      : null;
    this._listenLines = dialogue ? dialogue.teacherLines.slice(0, 3).map(l => l.text) : ['I want an apple.', 'How much is it?', 'Here you are.'];
    this._listenIdx = 0;
    this._listenHit = 0;
    this._playNextLine();
  },

  _playNextLine(){
    if(!this._listenLines || this._listenIdx >= this._listenLines.length){
      const r = document.getElementById('efListenResult');
      if(r) r.innerHTML = '<span style="color:var(--teal);font-weight:700">🎧 听力完成！点上方关键词继续答题</span>';
      return;
    }
    const line = this._listenLines[this._listenIdx];
    const t = document.getElementById('efListenText');
    if(t) t.textContent = line;
    if(typeof speak === 'function') speak(line);
    this._listenIdx++;
    const self = this;
    setTimeout(function(){ self._playNextLine(); }, 3500);
  },

  _hitWord(i, w){
    const btn = document.getElementById('efLw' + i);
    if(btn){
      btn.style.background = 'var(--teal)';
      btn.style.color = 'white';
      btn.style.borderColor = 'var(--teal)';
      btn.disabled = true;
    }
    if(typeof speak === 'function') speak(w);
    this._listenHit++;
    const r = document.getElementById('efListenResult');
    if(r) r.innerHTML = '<span style="color:var(--teal)">✓ 听到了 ' + w + '！</span>';
  },

  // ===== 3. TPR动作屋（3分钟）- 真实动作 =====
  _renderTPR(scene){
    // 播放指令，孩子做真实动作，点击"我做完了"
    const cmds = this._tprCommands(scene);
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">🏃</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">TPR动作屋</div>' +
        '<div style="font-size:12px;color:var(--text-2)">听到指令后做真实动作，做完点"我做完了"</div></div></div>' +
      '<div id="efTprBox" style="background:white;border-radius:14px;padding:20px;box-shadow:var(--shadow-sm);text-align:center">' +
        '<div id="efTprCmd" style="font-size:22px;font-weight:800;color:var(--navy);min-height:30px">' + cmds[0] + '</div>' +
        '<div id="efTprCn" style="font-size:13px;color:var(--text-2);margin-top:6px">' + this._tprCn(cmds[0]) + '</div>' +
        '<button onclick="EnglishFlowV5._tprPlay(0)" style="margin-top:14px;background:var(--yellow);color:white;border:none;border-radius:10px;padding:8px 18px;font-weight:700;cursor:pointer">🔊 听指令</button>' +
      '</div>' +
      '<div id="efTprProgress" style="margin-top:12px;text-align:center;font-size:13px;color:var(--text-2)">第 1 / ' + cmds.length + ' 个</div>' +
      '<button id="efTprDone" onclick="EnglishFlowV5._tprDone()" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">我做完了！✓</button>' +
    '</div>';
  },

  _tprCommands(scene){
    // 基于场景生成动作指令（真实身体动作）
    const map = {
      supermarket: ['Pick up the apple!', 'Put it in the bag!', 'Walk to the door!', 'Show me your money!'],
      restaurant: ['Open the menu!', 'Drink the juice!', 'Eat the rice!', 'Wave to the waiter!'],
      school: ['Open your book!', 'Raise your hand!', 'Stand up!', 'Sit down!'],
      park: ['Run to the tree!', 'Point to the flower!', 'Look at the bird!', 'Jump three times!'],
      weather: ['Touch the sun!', 'Feel the wind!', 'Show me rain!', 'Look up at the sky!'],
      clothes: ['Put on your shirt!', 'Touch your shoes!', 'Wear your hat!', 'Show your pants!'],
      animals: ['Walk like an elephant!', 'Jump like a rabbit!', 'Roar like a tiger!', 'Fly like a bird!'],
      birthday: ['Clap your hands!', 'Sing happy birthday!', 'Blow the candle!', 'Give a gift!']
    };
    return map[scene.id] || ['Stand up!', 'Sit down!', 'Clap your hands!', 'Jump three times!'];
  },

  _tprCn(cmd){
    const cn = {
      'Pick up the apple!': '捡起苹果！', 'Put it in the bag!': '放进袋子里！', 'Walk to the door!': '走到门口！', 'Show me your money!': '给我看看你的钱！',
      'Open the menu!': '打开菜单！', 'Drink the juice!': '喝果汁！', 'Eat the rice!': '吃米饭！', 'Wave to the waiter!': '向服务员挥手！',
      'Open your book!': '打开书！', 'Raise your hand!': '举手！', 'Stand up!': '起立！', 'Sit down!': '坐下！',
      'Run to the tree!': '跑到树那里！', 'Point to the flower!': '指一指花！', 'Look at the bird!': '看那只鸟！', 'Jump three times!': '跳三下！',
      'Touch the sun!': '摸摸太阳！', 'Feel the wind!': '感受风！', 'Show me rain!': '做下雨的动作！', 'Look up at the sky!': '抬头看天空！',
      'Put on your shirt!': '穿上衬衫！', 'Touch your shoes!': '摸摸鞋子！', 'Wear your hat!': '戴上帽子！', 'Show your pants!': '展示裤子！',
      'Walk like an elephant!': '像大象一样走！', 'Jump like a rabbit!': '像兔子一样跳！', 'Roar like a tiger!': '像老虎一样吼！', 'Fly like a bird!': '像鸟一样飞！',
      'Clap your hands!': '拍拍手！', 'Sing happy birthday!': '唱生日歌！', 'Blow the candle!': '吹蜡烛！', 'Give a gift!': '送礼物！'
    };
    return cn[cmd] || '做这个动作！';
  },

  _tprIdx: 0,
  _tprPlay(i){
    const scene = this._todayScene();
    const cmds = this._tprCommands(scene);
    this._tprIdx = i;
    const cmd = cmds[i] || cmds[0];
    if(typeof speak === 'function') speak(cmd);
  },

  _tprDone(){
    const scene = this._todayScene();
    const cmds = this._tprCommands(scene);
    this._tprIdx++;
    if(this._tprIdx < cmds.length){
      const cmd = cmds[this._tprIdx];
      const c = document.getElementById('efTprCmd');
      const cn = document.getElementById('efTprCn');
      const p = document.getElementById('efTprProgress');
      if(c) c.textContent = cmd;
      if(cn) cn.textContent = this._tprCn(cmd);
      if(p) p.textContent = '第 ' + (this._tprIdx + 1) + ' / ' + cmds.length + ' 个';
      if(typeof speak === 'function') setTimeout(function(){ speak(cmd); }, 300);
      if(typeof toast === 'function') toast('👍 做得好！');
    } else {
      this.init();
      S.engV5.tprLevels += cmds.length;
      this._completeBoard('tpr');
      if(typeof toast === 'function') toast('🎉 TPR 全部完成！+3 ⭐');
      if(typeof setStar === 'function') setStar(3, 'TPR动作完成');
    }
  },

  // ===== 4. 每日短语（5分钟）=====
  _renderPhrase(scene){
    // 听完整对话(30s)→拆解听3遍(60s)→跟读(90s)→造句(60s)
    const phrases = scene.phrases;
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">💬</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">每日短语</div>' +
        '<div style="font-size:12px;color:var(--text-2)">场景：' + scene.icon + ' ' + scene.name + '</div></div></div>' +
      '<div style="background:white;border-radius:14px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:12px">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">第一步：听完整短语</div>' +
        phrases.map((p, i) => '<div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--teal-soft);border-radius:10px;margin-bottom:8px">' +
          '<button onclick="EnglishFlowV5._phrasePlay(\'' + p.replace(/'/g, "\\'") + '\')" style="background:var(--teal);color:white;border:none;border-radius:8px;padding:6px 12px;cursor:pointer">🔊</button>' +
          '<span style="font-size:14px;font-weight:600;color:var(--navy)">' + p + '</span></div>').join('') +
      '</div>' +
      '<div style="background:white;border-radius:14px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:12px">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">第二步：跟读（点击录音按钮跟读）</div>' +
        '<button id="efPhraseMic" onclick="EnglishFlowV5._phraseRepeat()" style="background:var(--coral);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer">🎤 录音跟读</button>' +
        '<div id="efPhraseFb" style="margin-top:10px;font-size:13px;min-height:20px"></div>' +
      '</div>' +
      '<div style="background:white;border-radius:14px;padding:16px;box-shadow:var(--shadow-sm);margin-bottom:12px">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">第三步：造句（用短语造一个新句子）</div>' +
        '<input id="efPhraseInput" type="text" placeholder="例如：I want two apples." style="width:100%;border:1px solid var(--ink-200);border-radius:8px;padding:10px 12px;font-size:14px;outline:none;box-sizing:border-box">' +
        '<button onclick="EnglishFlowV5._phraseSubmit()" style="margin-top:8px;background:var(--teal);color:white;border:none;border-radius:8px;padding:8px 18px;font-weight:700;cursor:pointer">提交造句</button>' +
        '<div id="efPhraseResult" style="margin-top:8px;font-size:13px;min-height:20px"></div>' +
      '</div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'phrase\')" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">完成短语学习 ✓</button>' +
    '</div>';
  },

  _phrasePlay(p){ if(typeof speak === 'function') speak(p); },

  _phraseRepeatTarget: '',
  _phraseRepeat(){
    const phrases = this._todayScene().phrases;
    this._phraseRepeatTarget = phrases[0] || 'I want an apple.';
    const fb = document.getElementById('efPhraseFb');
    if(fb) fb.innerHTML = '<span style="color:var(--coral)">🎤 正在听... 请跟读：' + this._phraseRepeatTarget + '</span>';
    if(typeof speak === 'function') speak(this._phraseRepeatTarget);
    const self = this;
    if(window.SpeakEngineV5 && SpeakEngineV5.startListening){
      SpeakEngineV5.startListening(function(tr){
        const res = SpeakEngineV5.scorePronunciation(tr, self._phraseRepeatTarget);
        self.init();
        S.engV5.repeatSum += res.score;
        S.engV5.repeatCount++;
        self._save();
        if(fb) fb.innerHTML = '<span style="color:var(--teal)">' + res.feedback + '</span>';
      });
    } else if(fb){
      fb.innerHTML = '<span style="color:var(--text-2)">语音识别不可用，请大声跟读三遍 ✓</span>';
    }
  },

  _phraseSubmit(){
    const inp = document.getElementById('efPhraseInput');
    const r = document.getElementById('efPhraseResult');
    if(!inp || !r) return;
    const text = inp.value.trim();
    if(!text){ r.innerHTML = '<span style="color:var(--coral)">请输入一个句子</span>'; return; }
    // 简单验证：包含场景关键词或长度合理
    const scene = this._todayScene();
    const hasWord = scene.words.some(w => text.toLowerCase().includes(w));
    if(text.length >= 5){
      r.innerHTML = '<span style="color:var(--teal)">🎉 造句成功！' + (hasWord ? '用到了场景词汇！' : '') + '</span>';
      if(typeof setStar === 'function') setStar(2, '短语造句');
    } else {
      r.innerHTML = '<span style="color:var(--coral)">句子太短，再写长一点吧</span>';
    }
  },

  // ===== 5. 图片词汇库（4分钟）=====
  _renderVocab(scene){
    // 场景核心词配图+发音（用 emoji 作为图片替代，纯前端无外部资源）
    const emojiMap = { apple: '🍎', bread: '🍞', milk: '🥛', egg: '🥚', rice: '🍚', book: '📕', pen: '🖊️', desk: '🪑', chair: '🪑', teacher: '👩‍🏫', tree: '🌳', flower: '🌸', bird: '🐦', dog: '🐶', run: '🏃', sun: '☀️', rain: '🌧️', cloud: '☁️', wind: '💨', hot: '🥵', shirt: '👕', pants: '👖', shoes: '👟', hat: '🎩', dress: '👗', elephant: '🐘', lion: '🦁', monkey: '🐵', rabbit: '🐰', tiger: '🐯', cake: '🎂', candle: '🕯️', gift: '🎁', song: '🎵', party: '🎉' };
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">🖼️</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">图片词汇库</div>' +
        '<div style="font-size:12px;color:var(--text-2)">点击图片听发音，认识点 ✓</div></div></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px">' +
        scene.words.map((w) => {
          const info = this._wordInfo(w);
          const emoji = emojiMap[w] || '📷';
          return '<div style="background:white;border-radius:12px;padding:14px;box-shadow:var(--shadow-sm);text-align:center">' +
            '<div style="font-size:40px;margin-bottom:6px">' + emoji + '</div>' +
            '<div style="font-size:15px;font-weight:800;color:var(--navy)">' + w + '</div>' +
            '<div style="font-size:11px;color:var(--text-2);margin-top:2px">' + ((info.def || '').split('。')[0].slice(0, 16)) + '</div>' +
            '<div style="display:flex;gap:6px;justify-content:center;margin-top:8px">' +
              '<button onclick="speak(\'' + w + '\')" style="background:var(--teal-soft);border:none;border-radius:8px;padding:4px 10px;cursor:pointer;font-size:14px">🔊</button>' +
              '<button onclick="EnglishFlowV5._vocabKnow(\'' + w + '\',this)" style="background:var(--teal);color:white;border:none;border-radius:8px;padding:4px 10px;cursor:pointer;font-size:12px">✓ 认识</button>' +
            '</div></div>';
        }).join('') +
      '</div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'vocab\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">词汇学习完成 ✓</button>' +
    '</div>';
  },

  _vocabKnow(w, btn){
    btn.style.background = 'var(--teal-600)';
    btn.textContent = '✓ 已学';
    btn.disabled = true;
    if(typeof speak === 'function') speak(w);
    // 累计已学词数
    if(S.eng && typeof S.eng.learnedWords === 'number'){
      S.eng.learnedWords++;
    }
    if(typeof toast === 'function') toast('📖 学会 ' + w + '！');
    this._save();
  },

  // ===== 6. 句型启蒙（4分钟）=====
  _renderSentence(scene){
    // 教场景语法句型，填空练习
    const grammar = scene.grammar;
    const pattern = grammar.split('___')[0].trim();
    const words = scene.words.slice(0, 3);
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">🔤</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">句型启蒙</div>' +
        '<div style="font-size:12px;color:var(--text-2)">今天学句型：' + grammar + '</div></div></div>' +
      '<div style="background:linear-gradient(135deg,var(--teal-soft),rgba(245,184,0,.06));border-radius:14px;padding:16px;margin-bottom:12px">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:6px">句型示范：</div>' +
        words.map(w => '<div style="background:white;border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px">' +
          '<span style="font-size:14px;color:var(--navy);font-weight:600">' + pattern + ' ' + w + '</span>' +
          '<button onclick="speak(\'' + pattern.replace(/'/g, "\\'") + ' ' + w + '\')" style="margin-left:auto;background:var(--teal);color:white;border:none;border-radius:8px;padding:4px 10px;cursor:pointer">🔊</button>' +
        '</div>').join('') +
      '</div>' +
      '<div style="background:white;border-radius:14px;padding:16px;box-shadow:var(--shadow-sm)">' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">你来造句：选择正确的词填空</div>' +
        '<div style="font-size:16px;color:var(--navy);font-weight:700;margin-bottom:10px">' + pattern + ' ___</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
          scene.words.concat(['wrong1', 'wrong2']).map((w, i) => '<button onclick="EnglishFlowV5._sentencePick(\'' + w + '\', ' + (i < scene.words.length) + ')" style="background:white;border:2px solid var(--ink-200);border-radius:10px;padding:8px 16px;font-size:14px;cursor:pointer;font-weight:600">' + w + '</button>').join('') +
        '</div>' +
        '<div id="efSentFb" style="margin-top:10px;font-size:13px;min-height:20px"></div>' +
      '</div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'sentence\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">句型学习完成 ✓</button>' +
    '</div>';
  },

  _sentencePick(w, correct){
    const fb = document.getElementById('efSentFb');
    if(correct){
      if(fb) fb.innerHTML = '<span style="color:var(--teal)">✓ 正确！' + w + ' 是场景词汇</span>';
      if(typeof speak === 'function') speak(w);
      this.init();
      S.engV5.sentencePatterns++;
      this._save();
      if(typeof setStar === 'function') setStar(1, '句型练习');
    } else {
      if(fb) fb.innerHTML = '<span style="color:var(--coral)">✗ 这个词不太合适，再试试</span>';
    }
  },

  // ===== 7. 绘本阅读（5分钟）- 新增 =====
  _renderReading(scene){
    // 场景主题分级读物（每页1-3句），听读→跟读→自主读，翻页交互
    const pages = this._readerPages(scene);
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">📖</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">绘本阅读</div>' +
        '<div style="font-size:12px;color:var(--text-2)">主题：' + scene.icon + ' ' + scene.name + ' · 共 ' + pages.length + ' 页</div></div></div>' +
      '<div id="efReader" style="background:white;border-radius:14px;padding:20px;box-shadow:var(--shadow-sm);text-align:center;min-height:200px;display:flex;flex-direction:column;justify-content:center">' +
        '<div id="efReaderPage" style="font-size:18px;color:var(--navy);font-weight:600;line-height:1.8;margin-bottom:16px">' + pages[0].en + '</div>' +
        '<div style="font-size:13px;color:var(--text-2);margin-bottom:16px">' + pages[0].cn + '</div>' +
        '<div style="display:flex;gap:10px;justify-content:center">' +
          '<button onclick="EnglishFlowV5._readerPlay()" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:8px 16px;cursor:pointer;font-weight:700">🔊 听读</button>' +
          '<button onclick="EnglishFlowV5._readerRepeat()" style="background:var(--coral);color:white;border:none;border-radius:10px;padding:8px 16px;cursor:pointer;font-weight:700">🎤 跟读</button>' +
        '</div>' +
        '<div id="efReaderFb" style="margin-top:10px;font-size:13px;min-height:20px"></div>' +
      '</div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px">' +
        '<button id="efReaderPrev" onclick="EnglishFlowV5._readerPrev()" style="background:var(--ink-100);color:var(--navy);border:none;border-radius:10px;padding:8px 16px;cursor:pointer" disabled>← 上一页</button>' +
        '<span id="efReaderNum" style="font-size:13px;color:var(--text-2);font-weight:600">1 / ' + pages.length + '</span>' +
        '<button id="efReaderNext" onclick="EnglishFlowV5._readerNext()" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:8px 16px;cursor:pointer">下一页 →</button>' +
      '</div>' +
      '<button onclick="EnglishFlowV5._readerComplete()" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">读完绘本 ✓</button>' +
    '</div>';
  },

  _readerPages(scene){
    // 基于场景生成简单分级读物（每页1-3句，复用场景词汇）
    const w = scene.words;
    const readers = {
      supermarket: [
        { en: 'Mom and I go to the supermarket.', cn: '妈妈和我去超市。' },
        { en: 'I see red apples. I want an apple.', cn: '我看到红苹果。我想要一个苹果。' },
        { en: 'Mom buys bread and milk.', cn: '妈妈买了面包和牛奶。' },
        { en: 'We are happy. We go home.', cn: '我们很开心。我们回家。' }
      ],
      restaurant: [
        { en: 'We go to a restaurant.', cn: '我们去餐厅。' },
        { en: 'I eat rice and chicken.', cn: '我吃米饭和鸡肉。' },
        { en: 'I drink juice. It is sweet.', cn: '我喝果汁。它很甜。' },
        { en: 'The food is yummy. I like it.', cn: '食物很好吃。我喜欢。' }
      ]
    };
    if(readers[scene.id]) return readers[scene.id];
    // 通用生成
    return [
      { en: 'Today we talk about ' + scene.name + '.', cn: '今天我们聊' + scene.name + '。' },
      { en: 'I see a ' + w[0] + '.', cn: '我看到一个' + (this._wordInfo(w[0]).def || w[0]).split('。')[0].slice(0, 6) + '。' },
      { en: 'I like the ' + w[1] + '.', cn: '我喜欢这个' + (this._wordInfo(w[1]).def || w[1]).split('。')[0].slice(0, 6) + '。' },
      { en: 'It is a good day!', cn: '今天真是美好的一天！' }
    ];
  },

  _readerIdx: 0,
  _readerPlay(){
    const pages = this._readerPages(this._todayScene());
    const p = pages[this._readerIdx] || pages[0];
    if(typeof speak === 'function') speak(p.en);
  },

  _readerRepeat(){
    const pages = this._readerPages(this._todayScene());
    const p = pages[this._readerIdx] || pages[0];
    const fb = document.getElementById('efReaderFb');
    if(fb) fb.innerHTML = '<span style="color:var(--coral)">🎤 请跟读...</span>';
    if(typeof speak === 'function') speak(p.en);
    if(window.SpeakEngineV5 && SpeakEngineV5.startListening){
      SpeakEngineV5.startListening(function(tr){
        const res = SpeakEngineV5.scorePronunciation(tr, p.en);
        if(fb) fb.innerHTML = '<span style="color:var(--teal)">' + res.feedback + '</span>';
      });
    } else if(fb){
      fb.innerHTML = '<span style="color:var(--text-2)">语音识别不可用，请大声朗读 ✓</span>';
    }
  },

  _readerPrev(){
    const pages = this._readerPages(this._todayScene());
    if(this._readerIdx > 0){ this._readerIdx--; this._readerRender(pages); }
  },

  _readerNext(){
    const pages = this._readerPages(this._todayScene());
    if(this._readerIdx < pages.length - 1){ this._readerIdx++; this._readerRender(pages); }
  },

  _readerRender(pages){
    const p = pages[this._readerIdx] || pages[0];
    const pe = document.getElementById('efReaderPage');
    const num = document.getElementById('efReaderNum');
    const prev = document.getElementById('efReaderPrev');
    const next = document.getElementById('efReaderNext');
    if(pe) pe.textContent = p.en;
    if(num) num.textContent = (this._readerIdx + 1) + ' / ' + pages.length;
    if(prev) prev.disabled = (this._readerIdx === 0);
    if(next) next.disabled = (this._readerIdx === pages.length - 1);
  },

  _readerComplete(){
    this.init();
    S.engV5.booksRead++;
    this._completeBoard('reading');
    if(typeof toast === 'function') toast('🎉 读完一本绘本！+5 ⭐');
    if(typeof setStar === 'function') setStar(5, '完成绘本阅读');
  },

  // ===== 8. 口语对话（8分钟）=====
  _renderSpeak(scene){
    // 使用 SpeakEngineV5 进行自由对话
    const scenarioMap = {
      supermarket: 'shopping', restaurant: 'restaurant', school: 'school_life',
      park: 'hobbies', weather: 'weather', clothes: 'shopping', animals: 'family', birthday: 'daily_greeting'
    };
    const scenarioId = scenarioMap[scene.id] || 'daily_greeting';
    const teachers = window.SpeakEngineV5 ? SpeakEngineV5.teachers : {};
    const teacherCards = Object.keys(teachers).map(tid => {
      const t = teachers[tid];
      return '<div style="background:white;border-radius:12px;padding:10px 12px;box-shadow:var(--shadow-sm);cursor:pointer;border:2px solid transparent;text-align:center" onclick="EnglishFlowV5._speakStart(\'' + tid + '\', \'' + scenarioId + '\')">' +
        '<div style="width:48px;height:48px;border-radius:50%;overflow:hidden;margin:0 auto 6px;background:var(--teal-soft)"><img src="' + (t.avatarImg||'') + '" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=\'none\'"></div>' +
        '<div style="font-size:13px;font-weight:700;color:var(--navy)">' + t.name + '</div>' +
        '<div style="font-size:10px;color:var(--text-2)">' + t.personality + '</div>' +
      '</div>';
    }).join('');
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">🗣️</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">口语对话</div>' +
        '<div style="font-size:12px;color:var(--text-2)">选一位老师，开始场景对话</div></div></div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px">' + teacherCards + '</div>' +
      '<div id="seV5Dialog" style="background:var(--ink-50);border-radius:14px;padding:14px;min-height:160px">' +
        '<div style="text-align:center;padding:30px 10px;color:var(--text-2)"><div style="font-size:40px;margin-bottom:8px">🗣️</div><div style="font-size:13px">点击上方老师开始对话</div></div>' +
      '</div>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'speak\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">完成口语练习 ✓</button>' +
    '</div>';
  },

  _speakStart(teacherId, scenarioId){
    if(!window.SpeakEngineV5){ if(typeof toast === 'function') toast('口语引擎未加载'); return; }
    SpeakEngineV5.startDialog(teacherId, scenarioId);
    const box = document.getElementById('seV5Dialog');
    if(box) box.innerHTML = SpeakEngineV5.renderDialog();
  },

  // ===== 9. 我的单词本（3分钟）- 新增 =====
  _renderNotebook(scene){
    // 选今日最爱3词→配图→造句→导出单词卡
    return '<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">' +
        '<span style="font-size:24px">📝</span>' +
        '<div><div style="font-size:16px;font-weight:800;color:var(--navy)">我的单词本</div>' +
        '<div style="font-size:12px;color:var(--text-2)">选 3 个最喜欢的词，做成单词卡</div></div></div>' +
      '<div style="font-size:13px;color:var(--text-2);margin-bottom:8px">第一步：选择今日最爱（点选 3 个）</div>' +
      '<div id="efNbPick" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;margin-bottom:14px">' +
        scene.words.map(w => '<div onclick="EnglishFlowV5._nbPick(\'' + w + '\',this)" data-w="' + w + '" style="background:white;border:2px solid var(--ink-200);border-radius:10px;padding:10px;text-align:center;cursor:pointer;font-size:14px;font-weight:600;color:var(--navy)">' + w + '</div>').join('') +
      '</div>' +
      '<div id="efNbCards" style="display:none;flex-direction:column;gap:12px"></div>' +
      '<button id="efNbExport" onclick="EnglishFlowV5._nbExport()" style="display:none;margin-top:14px;background:var(--yellow);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">📤 导出单词卡</button>' +
      '<button onclick="EnglishFlowV5._completeBoard(\'notebook\')" style="margin-top:14px;background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 20px;font-weight:700;cursor:pointer;width:100%">完成单词本 ✓</button>' +
    '</div>';
  },

  _nbPicked: null,
  _nbPick(w, el){
    this.init();
    if(!this._nbPicked) this._nbPicked = [];
    const idx = this._nbPicked.indexOf(w);
    if(idx >= 0){
      this._nbPicked.splice(idx, 1);
      el.style.borderColor = 'var(--ink-200)';
      el.style.background = 'white';
    } else {
      if(this._nbPicked.length >= 3){ if(typeof toast === 'function') toast('最多选 3 个哦'); return; }
      this._nbPicked.push(w);
      el.style.borderColor = 'var(--teal)';
      el.style.background = 'var(--teal-soft)';
    }
    if(typeof speak === 'function') speak(w);
    if(this._nbPicked.length === 3) this._nbRenderCards();
  },

  _nbRenderCards(){
    const box = document.getElementById('efNbCards');
    const exp = document.getElementById('efNbExport');
    if(!box) return;
    const emojiMap = { apple: '🍎', bread: '🍞', milk: '🥛', egg: '🥚', rice: '🍚', book: '📕', pen: '🖊️', tree: '🌳', flower: '🌸', bird: '🐦', dog: '🐶', sun: '☀️', rain: '🌧️', shirt: '👕', shoes: '👟', elephant: '🐘', lion: '🦁', cake: '🎂' };
    box.innerHTML = this._nbPicked.map((w, i) => {
      const info = this._wordInfo(w);
      return '<div style="background:white;border-radius:12px;padding:14px;box-shadow:var(--shadow-sm)">' +
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
          '<span style="font-size:32px">' + (emojiMap[w] || '📷') + '</span>' +
          '<div><div style="font-size:18px;font-weight:800;color:var(--teal)">' + w + '</div>' +
          '<div style="font-size:11px;color:var(--text-2)">' + (info.pos || '') + '</div></div>' +
          '<button onclick="speak(\'' + w + '\')" style="margin-left:auto;background:var(--teal-soft);border:none;border-radius:8px;padding:6px 10px;cursor:pointer">🔊</button>' +
        '</div>' +
        '<div style="font-size:12px;color:var(--navy);margin-bottom:6px">' + (info.def || w).split('。')[0] + '</div>' +
        '<input type="text" placeholder="用 ' + w + ' 造个句子..." oninput="EnglishFlowV5._nbSent[' + i + ']=this.value" style="width:100%;border:1px solid var(--ink-200);border-radius:8px;padding:8px 10px;font-size:13px;outline:none;box-sizing:border-box">' +
      '</div>';
    }).join('');
    this._nbSent = ['', '', ''];
    box.style.display = 'flex';
    if(exp) exp.style.display = 'block';
  },

  _nbSent: ['', '', ''],
  _nbExport(){
    this.init();
    if(!this._nbPicked || !this._nbPicked.length){ if(typeof toast === 'function') toast('请先选词'); return; }
    // 保存到单词本
    this._nbPicked.forEach(w => {
      if(S.engV5.notebook.indexOf(w) < 0) S.engV5.notebook.push(w);
    });
    this._save();
    if(typeof toast === 'function') toast('📤 已导出 ' + this._nbPicked.length + ' 张单词卡！');
    if(typeof setStar === 'function') setStar(3, '制作单词卡');
  },

  // ===== 完成单个板块 =====
  _completeBoard(boardId){
    this.init();
    if(S.engV5.completed.indexOf(boardId) < 0){
      S.engV5.completed.push(boardId);
      if(boardId === 'listen'){ S.engV5.listenTasks++; S.engV5.listenStars += 5; }
      if(boardId === 'speak'){ S.engV5.taskCards++; }
      this._save();
    }
    if(typeof toast === 'function') toast('✓ ' + boardId + ' 完成');
    // 检查是否全部完成
    if(S.engV5.completed.length >= this.boards.length){
      this.checkStageUpgrade();
    }
  },

  // ===== 三阶段升级系统 =====
  checkStageUpgrade(profileId){
    this.init();
    const stage = S.engStage;
    let upgraded = false;
    let newStage = stage;
    const badges = [];
    // 阶段1→2：100听力星星 + 20 TPR关卡 + 200词 + 10磨耳朵任务
    if(stage === 1){
      const listenStars = S.engV5.listenStars;
      const tprLevels = S.engV5.tprLevels;
      const words = (S.eng && S.eng.learnedWords) || 0;
      const listenTasks = S.engV5.listenTasks;
      if(listenStars >= 100 && tprLevels >= 20 && words >= 200 && listenTasks >= 10){
        S.engStage = 2;
        newStage = 2;
        upgraded = true;
        badges.push({ id: 'eng-stage-2', name: '开口说英语', icon: '🗣️' });
      }
    }
    // 阶段2→3：跟读均分≥60 + 5本绘本 + 15句型 + 8任务卡
    if(stage === 2){
      const repeatAvg = S.engV5.repeatCount > 0 ? Math.round(S.engV5.repeatSum / S.engV5.repeatCount) : 0;
      const books = S.engV5.booksRead;
      const patterns = S.engV5.sentencePatterns;
      const tasks = S.engV5.taskCards;
      if(repeatAvg >= 60 && books >= 5 && patterns >= 15 && tasks >= 8){
        S.engStage = 3;
        newStage = 3;
        upgraded = true;
        badges.push({ id: 'eng-stage-3', name: '自主输出达人', icon: '🏆' });
      }
    }
    if(upgraded){
      this._save();
      // 授予徽章
      if(typeof addBadge === 'function'){
        badges.forEach(b => addBadge(b.id, b.name, b.icon));
      }
    }
    return { upgraded: upgraded, newStage: newStage, badges: badges };
  },

  // ===== 升级动画 =====
  renderUpgrade(newStage){
    const stageInfo = {
      2: { title: '升级到引导输出期！', desc: '你可以开始跟读和简单造句啦', color: 'var(--coral)' },
      3: { title: '升级到自主输出期！', desc: '你已能独立说英语，太棒了！', color: 'var(--purple)' }
    };
    const info = stageInfo[newStage] || stageInfo[2];
    return '<div style="position:fixed;inset:0;background:rgba(15,23,42,.6);display:flex;align-items:center;justify-content:center;z-index:9999;animation:efFadeIn .3s">' +
      '<div style="background:white;border-radius:20px;padding:32px 24px;text-align:center;max-width:320px;box-shadow:var(--shadow-xl);animation:efPop .5s">' +
        '<div style="font-size:64px;margin-bottom:12px">🎉</div>' +
        '<div style="font-size:20px;font-weight:900;color:' + info.color + ';margin-bottom:8px">' + info.title + '</div>' +
        '<div style="font-size:14px;color:var(--text-2);margin-bottom:16px">' + info.desc + '</div>' +
        '<div style="font-size:13px;color:var(--teal);font-weight:600;margin-bottom:16px">🗺️ 解锁新地图！</div>' +
        '<button onclick="this.parentElement.parentElement.remove()" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 24px;font-weight:700;cursor:pointer">太棒了！</button>' +
      '</div>' +
      '<style>@keyframes efFadeIn{from{opacity:0}to{opacity:1}}@keyframes efPop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}</style>' +
    '</div>';
  },

  // ===== 主流程控制器 =====
  start(profileId){
    this.init();
    S.profileId = profileId || 'default';
    S.engV5.currentBoard = 0;
    S.engV5.completed = [];
    this._save();
    const scene = this._todayScene();
    if(typeof toast === 'function') toast(scene.icon + ' 今日场景：' + scene.name);
    return this.renderAll(scene);
  },

  // 渲染全部板块（带导航）
  renderAll(scene){
    const sc = scene || this._todayScene();
    this.init();
    const cur = S.engV5.currentBoard;
    const nav = this.boards.map((b, i) => {
      const done = S.engV5.completed.indexOf(b.id) >= 0;
      const active = i === cur;
      return '<div onclick="EnglishFlowV5._goBoard(' + i + ')" style="display:flex;flex-direction:column;align-items:center;padding:8px 4px;cursor:pointer;border-radius:10px;background:' + (active ? 'var(--teal-soft)' : 'transparent') + ';flex:1">' +
        '<div style="font-size:20px">' + (done ? '✅' : b.icon) + '</div>' +
        '<div style="font-size:10px;color:' + (active ? 'var(--teal)' : 'var(--text-2)') + ';margin-top:2px;font-weight:' + (active ? '700' : '500') + '">' + b.name + '</div>' +
        '<div style="font-size:9px;color:var(--text-2)">' + b.time + '分</div>' +
      '</div>';
    }).join('');
    const curBoard = this.boards[cur];
    const content = this.renderBoard(curBoard.id, sc);
    return '<div>' +
      '<div style="background:white;border-radius:14px;padding:8px;box-shadow:var(--shadow-sm);margin-bottom:12px;display:flex;overflow-x:auto">' + nav + '</div>' +
      '<div style="background:white;border-radius:14px;padding:0;box-shadow:var(--shadow-sm)">' + content + '</div>' +
      '<div style="display:flex;justify-content:space-between;margin-top:12px;gap:10px">' +
        '<button onclick="EnglishFlowV5._prevBoard()" style="background:var(--ink-100);color:var(--navy);border:none;border-radius:10px;padding:10px 16px;cursor:pointer;font-weight:600">← 上一板块</button>' +
        '<button onclick="EnglishFlowV5._nextBoard()" style="background:var(--teal);color:white;border:none;border-radius:10px;padding:10px 16px;cursor:pointer;font-weight:700">下一板块 →</button>' +
      '</div>' +
    '</div>';
  },

  _goBoard(i){
    this.init();
    S.engV5.currentBoard = i;
    this._save();
    this._refresh();
  },

  _prevBoard(){
    this.init();
    if(S.engV5.currentBoard > 0){ S.engV5.currentBoard--; this._save(); this._refresh(); }
  },

  _nextBoard(){
    this.init();
    if(S.engV5.currentBoard < this.boards.length - 1){ S.engV5.currentBoard++; this._save(); this._refresh(); }
    else {
      // 全部完成，检查升级
      const res = this.checkStageUpgrade();
      if(res.upgraded){
        const overlay = document.createElement('div');
        overlay.innerHTML = this.renderUpgrade(res.newStage);
        document.body.appendChild(overlay.firstChild);
      } else if(typeof toast === 'function'){
        toast('🎉 今日英语全部完成！');
      }
    }
  },

  _refresh(){
    const box = document.getElementById('engContent') || document.getElementById('contentArea');
    if(box){ box.innerHTML = this.renderAll(); }
  }
};
