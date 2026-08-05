div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${statCard('学习天数', r.studyDays, '天', null, true)}
        ${statCard('总用时', r.totalTime, '分钟', imp.time, true)}
        ${statCard('平均正确率', r.avgAccuracy, '%', imp.accuracy, true)}
        ${statCard('解题数', r.solvedCount, '题', imp.solved, true)}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:12px">
          <div style="font-size:12px;color:var(--text-3);margin-bottom:6px">🌟 本周收获</div>
          <div style="font-size:13px;color:var(--text-2)">掌握新知识点 <b style="color:var(--teal)">${r.newKnowledge}</b> 个 · 新学单词 <b style="color:var(--coral)">${r.newWords}</b> 个</div>
        </div>
        <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:12px">
          <div style="font-size:12px;color:var(--text-3);margin-bottom:6px">🔁 反复错误点</div>
          <div style="font-size:12px">${repeatedHtml}</div>
        </div>
      </div>
      ${r.engV5Stats ? '<div style="background:linear-gradient(135deg,rgba(0,168,150,.06),rgba(245,184,0,.06));border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:12px"><div style="font-size:12px;color:var(--text-3);margin-bottom:8px">📚 英语 V5 板块进度</div><div style="display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:var(--text-2)"><span>板块完成 <b style="color:var(--teal)">' + r.engV5Stats.completed + '/' + r.engV5Stats.totalBoards + '</b></span><span>🎧 听力⭐' + r.engV5Stats.listenStars + '</span><span>🏃 TPR ' + r.engV5Stats.tprLevels + '</span><span>📖 绘本 ' + r.engV5Stats.booksRead + '</span><span>📝 句型 ' + r.engV5Stats.sentencePatterns + '</span><span>📓 生词本 ' + r.engV5Stats.notebookSize + '</span>' + (r.engV5Stats.repeatAvg ? '<span>🎤 跟读均分 ' + r.engV5Stats.repeatAvg + '</span>' : '') + '</div></div>' : ''}
      <div style="background:linear-gradient(135deg,var(--navy-50),var(--teal-50));border-radius:var(--radius-md);padding:12px 14px">
        <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:6px">🎯 下周建议</div>
        <ul style="margin:0;padding-left:18px">${suggestHtml}</ul>
      </div>
    </div>`;
  }
};

// === 4. TimeController 时长控制引擎 ===
// 单科20分钟 / 总40分钟 / 每15分钟护眼提醒 / 顶部固定计时器
const TimeController = {
  _state: { subject:null, startTs:0, elapsed:0, running:false, lastBreakCheck:0, reminders:{} },
  _timer: null,
  SUBJECT_LIMIT: 20*60,    // 单科20分钟
  TOTAL_LIMIT:   40*60,    // 总时长40分钟
  BREAK_INTERVAL:15*60,    // 每15分钟护眼提醒

  // 开始学习会话
  startSession(subject){
    this._state.subject = subject;
    this._state.startTs = Date.now();
    this._state.elapsed = 0;
    this._state.running = true;
    this._state.lastBreakCheck = 0;
    this._state.reminders = {};
    if(this._timer){ clearInterval(this._timer); this._timer=null; }
    this._timer = setInterval(()=>this.tick(), 1000);
    this.renderTimer();
    this._render();
    return { subject, startedAt:new Date().toISOString(), limit:this.SUBJECT_LIMIT };
  },

  // 更新会话时长（每秒调用）
  tick(){
    if(!this._state.running) return null;
    this._state.elapsed = Math.floor((Date.now()-this._state.startTs)/1000);
    // 每15分钟护眼提醒
    if(this._state.elapsed - this._state.lastBreakCheck >= this.BREAK_INTERVAL){
      this._state.lastBreakCheck = this._state.elapsed;
      this._eyeBreak();
    }
    const status = this.checkTimeout();
    this._render();
    return status;
  },

  // 检查是否超时（改为提醒，不强制结束）
  checkTimeout(){
    const e = this._state.elapsed;
    this._state.reminders = this._state.reminders || {};
    const r = this._state.reminders;
    // 提前 10 分钟提醒（30 分钟）
    if(e >= 30*60 && !r.m30){ r.m30 = true; if(typeof toast==='function') toast('⏰ 还有10分钟到40分钟'); }
    // 提前 5 分钟提醒（35 分钟）
    if(e >= 35*60 && !r.m35){ r.m35 = true; if(typeof toast==='function') toast('⏰ 还有5分钟到40分钟'); }
    // 单科 20 分钟：提醒但不强制
    if(e >= this.SUBJECT_LIMIT && !r.subject){
      r.subject = true;
      const subj = this._state.subject==='math'?'数学':(this._state.subject==='eng'?'英语':'本节');
      if(typeof toast==='function') toast(`⏰ ${subj}20分钟到啦，建议切换科目`);
    }
    // 总时长到 40 分钟：不调用 forceBreak，只提醒，继续计时
    if(e >= this.TOTAL_LIMIT){
      if(!r.total){ r.total = true; if(typeof toast==='function') toast('⏰ 已学习40分钟，建议休息！如需继续请点击延时'); }
      return { type:'totalTimeout', elapsed:e, msg:'⏰ 已学习40分钟，建议休息！如需继续请点击延时' };
    }
    return { type:'running', elapsed:e, remaining:this.TOTAL_LIMIT-e };
  },

  // 休息提醒（不停止计时器，改为只提醒，继续计时）
  forceBreak(){
    if(typeof toast==='function') toast('😴 学习时间较长了，建议休息！如需继续可点击延时');
    this._render();
  },

  // 延时会话：用户点击延时，TOTAL_LIMIT 增加 minutes 分钟
  extendSession(minutes){
    this.TOTAL_LIMIT += minutes*60;
    this._state.reminders = this._state.reminders || {};
    this._state.reminders.total = false; // 允许再次到时提醒
    if(typeof toast==='function') toast(`✅ 已延时 ${minutes} 分钟，继续加油！`);
    this._render();
  },

  _eyeBreak(){
    if(typeof toast==='function') toast('👀 护眼提醒：看远方20秒，眨眨眼～');
  },

  _fmt(sec){ sec=Math.max(0,sec); const m=Math.floor(sec/60), s=sec%60; return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; },

  // 更新计时器内容
  _render(){
    const el = document.getElementById('tc-timer');
    if(!el) return;
    const e = this._state.elapsed;
    const overtime = e >= this.TOTAL_LIMIT;
    const remain = this.TOTAL_LIMIT - e;
    const subjectRemain = Math.max(0, this.SUBJECT_LIMIT - e);
    const pct = Math.min(100, (e/this.TOTAL_LIMIT)*100);
    const color = overtime ? 'var(--coral)' : (e>=this.SUBJECT_LIMIT ? 'var(--yellow)' : 'var(--teal)');
    const subjectLabel = this._state.subject==='math' ? '📐 数学' : (this._state.subject==='eng' ? '🔤 英语' : '📚 学习中');
    const overtimeMin = Math.floor((e - this.TOTAL_LIMIT)/60);
    const tailHtml = overtime
      ? `<span style="font-size:11px;color:var(--coral);font-weight:700">已超时 ${overtimeMin} 分钟</span><button onclick="TimeController.extendSession(10)" style="padding:4px 12px;background:var(--coral);color:white;border:none;border-radius:12px;font-size:11px;font-weight:700;cursor:pointer">延时10分钟</button>`
      : `<span style="font-size:11px;color:var(--text-3)">单科剩余 ${this._fmt(subjectRemain)}</span>`;
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center">
        <span style="font-size:14px;font-weight:600;color:var(--navy)">${subjectLabel}</span>
        <div style="background:var(--ink-100);border-radius:var(--radius-full);width:180px;height:8px;overflow:hidden">
          <div style="background:${color};height:100%;width:${pct}%;transition:width 1s linear"></div>
        </div>
        <span style="font-weight:700;color:${color};font-size:15px;font-variant-numeric:tabular-nums">⏱️ ${this._fmt(Math.abs(remain))}${overtime?' ⚠️':''}</span>
        ${tailHtml}
      </div>`;
  },

  // 渲染计时器（顶部固定，挂载到 DOM）
  renderTimer(){
    let el = document.getElementById('tc-timer');
    if(!el){
      el = document.createElement('div');
      el.id = 'tc-timer';
      el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-bottom:1px solid var(--glass-border);padding:8px 16px;display:flex;justify-content:center;align-items:center;box-shadow:var(--shadow-sm)';
      document.body.appendChild(el);
      document.body.style.paddingTop = '44px';
    }
    this._render();
    return '<div id="tc-timer-mount" style="color:var(--text-3);font-size:12px;text-align:center;padding:8px">⏱️ 计时器已挂载到页面顶部</div>';
  },

  // 停止会话
  stop(){
    this._state.running = false;
    if(this._timer){ clearInterval(this._timer); this._timer=null; }
    this._render();
  }
};

// === PEP词汇 ===
const VOCAB_BY_GRADE = {
  '3':[
    {w:'ruler',pos:'n. 名词',def:'尺子；直尺。测量长度或画直线的文具。',ex:'I have a new ruler.',coll:['a new ruler 新尺子','ruler and pen 尺和笔'],syn:'—',ant:'—'},
    {w:'pencil',pos:'n. 名词',def:'铅笔。用石墨芯的笔，可擦除。',ex:'My pencil is yellow.',coll:['sharpen a pencil 削铅笔','pencil box 铅笔盒'],syn:'—',ant:'pen (对应钢笔)'},
    {w:'eraser',pos:'n. 名词',def:'橡皮。擦除铅笔字迹的文具。',ex:'Can I borrow your eraser?',coll:['use an eraser 用橡皮','pink eraser 粉色橡皮'],syn:'rubber (英式)',ant:'—'},
    {w:'crayon',pos:'n. 名词',def:'蜡笔。用蜡制成的彩色绘画笔。',ex:'I color with crayons.',coll:['red crayon 红蜡笔','crayon box 蜡笔盒'],syn:'—',ant:'—'},
    {w:'bag',pos:'n. 名词',def:'包；袋子。装物品的容器。',ex:'My bag is heavy.',coll:['school bag 书包','hand bag 手提包'],syn:'backpack / sack',ant:'—'},
    {w:'pen',pos:'n. 名词',def:'钢笔；笔。用墨水书写的笔。',ex:'I write with a pen.',coll:['ball pen 圆珠笔','pen friend 笔友'],syn:'—',ant:'pencil'},
    {w:'book',pos:'n. 名词',def:'书；书籍。装订成册的印刷品。',ex:'This book is fun.',coll:['read a book 读书','picture book 图画书'],syn:'volume',ant:'—'},
    {w:'hello',pos:'int. 感叹词',def:'你好。最常用的问候语。',ex:'Hello, I am Tom.',coll:['say hello 打招呼','hello there 嘿'],syn:'hi / hey',ant:'goodbye'},
    {w:'goodbye',pos:'int. 感叹词',def:'再见。告别的常用语。',ex:'Goodbye, see you tomorrow.',coll:['say goodbye 道别','kiss goodbye 吻别'],syn:'bye / farewell',ant:'hello'},
    {w:'name',pos:'n. 名词',def:'名字；名称。人或事物的称呼。',ex:'My name is Lily.',coll:['first name 名','last name 姓'],syn:'—',ant:'—'},
    {w:'school',pos:'n. 名词',def:'学校。学习的场所。',ex:'I go to school by bus.',coll:['go to school 上学','after school 放学后'],syn:'academy',ant:'—'},
    {w:'teacher',pos:'n. 名词',def:'老师。教授知识的人。',ex:'My teacher is kind.',coll:['English teacher 英语老师','become a teacher 当老师'],syn:'instructor / tutor',ant:'student'},
    {w:'student',pos:'n. 名词',def:'学生。在学校学习的人。',ex:'I am a student.',coll:['good student 好学生','college student 大学生'],syn:'pupil / learner',ant:'teacher'},
    {w:'friend',pos:'n. 名词',def:'朋友。彼此友好的人。',ex:'She is my best friend.',coll:['best friend 最好朋友','make friends 交朋友'],syn:'buddy / pal',ant:'enemy'},
    {w:'morning',pos:'n. 名词',def:'早晨；上午。从日出到中午的时间。',ex:'Good morning, class!',coll:['good morning 早上好','in the morning 在早上'],syn:'—',ant:'evening'},
    {w:'afternoon',pos:'n. 名词',def:'下午。从中午到日落的时间。',ex:'See you this afternoon.',coll:['good afternoon 下午好','this afternoon 今天下午'],syn:'—',ant:'morning'},
  ],
  '4':[
    {w:'classroom',pos:'n. 名词',def:'教室。学校里上课的房间。',ex:'Our classroom is big.',coll:['in the classroom 在教室','clean the classroom 打扫教室'],syn:'—',ant:'—'},
    {w:'window',pos:'n. 名词',def:'窗户。墙上供采光通风的开口。',ex:'Please close the window.',coll:['open the window 开窗','close the window 关窗'],syn:'—',ant:'—'},
    {w:'door',pos:'n. 名词',def:'门。进出房间的开口。',ex:'Please open the door.',coll:['open the door 开门','close the door 关门'],syn:'—',ant:'—'},
    {w:'picture',pos:'n. 名词',def:'图画；照片。视觉图像。',ex:'I draw a picture.',coll:['draw a picture 画画','take a picture 拍照'],syn:'photo / image',ant:'—'},
    {w:'blackboard',pos:'n. 名词',def:'黑板。老师用粉笔写字的板。',ex:'Look at the blackboard.',coll:['on the blackboard 在黑板上','clean the blackboard 擦黑板'],syn:'—',ant:'—'},
    {w:'what',pos:'pron. 代词',def:'什么。疑问代词，询问事物。',ex:'What is your name?',coll:['what time 几点','what about ...怎么样'],syn:'—',ant:'—'},
    {w:'where',pos:'adv. 副词',def:'在哪里。疑问副词，询问地点。',ex:'Where is my book?',coll:['where is 在哪','where are 在哪（复数）'],syn:'—',ant:'—'},
    {w:'who',pos:'pron. 代词',def:'谁。疑问代词，询问人。',ex:'Who is that boy?',coll:['who is 谁是','who are 你们是谁'],syn:'—',ant:'—'},
  ],
  '5':[
    {w:'weekend',pos:'n. 名词',def:'周末。星期六和星期日。',ex:'I play on weekends.',coll:['on the weekend 在周末','at weekends 在周末（英式）'],syn:'—',ant:'weekday'},
    {w:'sometimes',pos:'adv. 副词',def:'有时。表示偶尔发生。',ex:'I sometimes go swimming.',coll:['sometimes often sometimes 有时常常有时'],syn:'occasionally',ant:'always / never'},
    {w:'often',pos:'adv. 副词',def:'经常。表示频繁发生。',ex:'I often read books.',coll:['how often 多久一次','often go 经常去'],syn:'frequently',ant:'seldom / rarely'},
    {w:'always',pos:'adv. 副词',def:'总是。表示每次都发生。',ex:'I always brush my teeth.',coll:['always early 总是早','always happy 总是开心'],syn:'—',ant:'never'},
  ],
  '6':[
    {w:'future',pos:'n./adj.',def:'n. 未来。adj. 未来的。指将来的时间或事物。',ex:'I want to be a doctor in the future.',coll:['in the future 在未来','future job 未来的工作'],syn:'—',ant:'past'},
    {w:'dream',pos:'n./v.',def:'n. 梦想；梦。v. 做梦；梦想。',ex:'My dream is to be a pilot.',coll:['have a dream 有个梦想','dream about 梦见'],syn:'—',ant:'—'},
    {w:'travel',pos:'v./n.',def:'v. 旅行。n. 旅行。指到外地游览。',ex:'I want to travel the world.',coll:['travel to 去旅行','travel around 环游'],syn:'journey / trip',ant:'—'},
  ],
};

// === 自然拼读 ===
// type: vowel(元音)/bilabial(双唇)/labiodental(唇齿)/dental(齿音)/alveolar(齿龈)/velar(软腭)/palatal(硬腭)/nasal(鼻音)/digraph(组合)/silent-e(魔法e)
const PHONICS_LETTERS = [
  // 阶段1：字母音 + CVC
  {l:'Aa',sound:'apple, ant, alligator',mouth:'双唇自然张开，舌位低平，气流不受阻。',mouthIdx:0,type:'vowel',stage:1,phoneme:'A',tip:'发 /æ/ 音，嘴巴张到能塞进两根手指。',words:['apple','ant','cat','bag']},
  {l:'Bb',sound:'bag, ball, bat',mouth:'双唇紧闭，气流突然冲开双唇。',mouthIdx:1,type:'bilabial',stage:1,phoneme:'B',tip:'先闭嘴憋气，再"噗"地一下爆开。',words:['bag','ball','bat','cab']},
  {l:'Cc',sound:'cat, car, cap',mouth:'舌后部抬起抵软腭，气流冲出。',mouthIdx:2,type:'velar',stage:1,phoneme:'C',tip:'像咳嗽一样，舌根顶住嗓子眼上方。',words:['cat','car','cap','cup']},
  {l:'Dd',sound:'dog, duck, doll',mouth:'舌尖抵上齿龈，气流突然释放。',mouthIdx:3,type:'alveolar',stage:1,phoneme:'D',tip:'舌尖顶住上门牙后面的牙龈，再弹开。',words:['dog','duck','doll','bed']},
  {l:'Ff',sound:'fish, fun, fan',mouth:'上齿咬下唇，气流摩擦而出。',mouthIdx:4,type:'labiodental',stage:1,phoneme:'F',tip:'上牙轻咬下嘴唇，吹气出来。',words:['fish','fun','fan','leaf']},
  // 阶段2：辅音组合
  {l:'TH',sound:'think, this, bath',mouth:'舌尖伸出上下齿之间，气流通过。',mouthIdx:5,type:'dental',stage:2,phoneme:'TH',tip:'舌头尖轻轻伸出牙齿，吐气或振动声带。',words:['think','this','bath','thumb']},
  {l:'SH',sound:'ship, fish, wish',mouth:'双唇略突前圆，舌前部抬起靠近硬腭。',mouthIdx:6,type:'palatal',stage:2,phoneme:'SH',tip:'像让人安静"嘘——"，嘴唇撅起吹气。',words:['ship','fish','wish','shell']},
  {l:'CH',sound:'chip, chair, lunch',mouth:'先舌尖抵上齿龈，再迅速张开像SH。',mouthIdx:7,type:'affricate',stage:2,phoneme:'SH',tip:'先做t的动作，再做sh的动作，连起来。',words:['chip','chair','lunch','chalk']},
  {l:'CK',sound:'duck, clock, kick',mouth:'舌后部抬起抵软腭，气流瞬间冲出。',mouthIdx:8,type:'velar',stage:2,phoneme:'C',tip:'和c的口型一样，多用在词尾。',words:['duck','clock','kick','sock']},
  {l:'NG',sound:'sing, ring, long',mouth:'舌后部抬起抵软腭，气流从鼻腔出。',mouthIdx:9,type:'nasal',stage:2,phoneme:'B',tip:'舌根抬起堵住口腔，让气流从鼻子出。',words:['sing','ring','long','king']},
  // 阶段3：长元音魔法 e
  {l:'a_e',sound:'cake, name, gate',mouth:'嘴张得比短a小，舌尖抵下齿。',mouthIdx:10,type:'silent-e',stage:3,phoneme:'A',tip:'词尾e不发音，让a变成自己名字的音/eɪ/。',words:['cake','name','gate','make']},
  {l:'i_e',sound:'kite, bike, time',mouth:'嘴角向两侧拉开，舌尖抵下齿。',mouthIdx:11,type:'silent-e',stage:3,phoneme:'E',tip:'词尾e让i变成/aɪ/，像说"爱"。',words:['kite','bike','time','five']},
  {l:'o_e',sound:'home, nose, bone',mouth:'双唇拢圆，舌后部略抬起。',mouthIdx:12,type:'silent-e',stage:3,phoneme:'A',tip:'词尾e让o变成/oʊ/，像说"欧"。',words:['home','nose','bone','rose']},
  {l:'u_e',sound:'cube, tube, cute',mouth:'双唇拢圆前突，舌尖离开下齿。',mouthIdx:13,type:'silent-e',stage:3,phoneme:'E',tip:'词尾e让u变成/juː/，像说"尤"。',words:['cube','tube','cute','mule']},
];

// 阶段定义
const PHONICS_STAGES = [
  {id:1,name:'入门：字母音 + CVC',desc:'26个字母的发音 + 辅音-元音-辅音拼读',done:true},
  {id:2,name:'进阶：辅音组合',desc:'SH/CH/TH/CK/NG 等组合音',done:false,current:true},
  {id:3,name:'精通：长元音魔法 e',desc:'a_e/i_e/o_e/u_e 让元音读自己名字',done:false},
  {id:4,name:'大师：r 控制 + 后缀',desc:'ar/er/ir/or/ur + s/es/ed/ing',done:false},
];

// === 口语人设 ===
const PERSONAS = [
  {id:'emma',name:'Emma',desc:'12岁开朗女孩 · 美音',tags:['热情','耐心','爱聊天'],avatar:ASSETS.teacherEmma,intro:'Hi! 我是Emma，最喜欢交新朋友！想聊什么都可以，我会帮你纠正发音哦~'},
  {id:'leo',name:'Leo',desc:'11岁冒险男孩 · 英音',tags:['有趣','足球','探险'],avatar:ASSETS.teacherLeo,intro:'Hey! 我是Leo，最爱足球和冒险！准备好和我聊聊你的爱好了吗？'},
  {id:'aria',name:'Aria',desc:'神秘科学家 · 澳音',tags:['博学','科普','爱提问'],avatar:ASSETS.teacherAria,intro:'Hello! 我是Aria，喜欢研究各种有趣的现象。我们可以聊科学、自然、宇宙...'},
];

// === 宠物 ===
const PETS = [
  {id:'dragon',name:'小星',type:'星云龙',rarity:'SSR',level:12,avatar:ASSETS.petDragon,stats:{饱食:75,心情:82,精力:68,清洁:90}},
  {id:'fox',name:'银宝',type:'机械狐',rarity:'SSR',level:10,avatar:ASSETS.petFox,stats:{饱食:60,心情:90,精力:75,清洁:85}},
  {id:'cat',name:'极光',type:'极光猫',rarity:'SR',level:8,avatar:ASSETS.petCat,stats:{饱食:82,心情:88,精力:72,清洁:78}},
  {id:'bunny',name:'量子',type:'量子兔',rarity:'SR',level:6,avatar:ASSETS.petBunny,stats:{饱食:70,心情:85,精力:90,清洁:80}},
  {id:'whale',name:'深海',type:'深海鲸',rarity:'R',level:4,avatar:ASSETS.petWhale,stats:{饱食:65,心情:78,精力:80,清洁:88}},
];

// === 工具函数 ===
function $(s){return document.querySelector(s)}
function $$(s){return Array.from(document.querySelectorAll(s))}
function toast(msg){const t=$('#toast');t.innerHTML=`<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>${msg}`;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
let _speakUnlocked = false, _speakVoicesReady = false, _pendingSpeak = null;
// 语音播报：兼容移动端，预加载语音列表 + resume 防暂停 + 儿童友好语调 + 优先英文女声
function speak(text){
  if(!('speechSynthesis' in window)) return;
  if(!text) return;
  unlockAudio();
  speechSynthesis.cancel();
  // 确保语音列表已加载（部分浏览器需等待voiceschanged事件）
  let voices = [];
  try{ voices = speechSynthesis.getVoices() || []; }catch(e){}
  if(!voices.length || !voices.some(v=>/en/i.test(v.lang))){
    // 语音列表未就绪或没有英语语音，等待事件
    try{
      speechSynthesis.addEventListener('voiceschanged', function handler(){
        speechSynthesis.removeEventListener('voiceschanged', handler);
        voices = speechSynthesis.getVoices() || [];
        _speakVoicesReady = true;
        if(_pendingSpeak){
          const pending = _pendingSpeak;
          _pendingSpeak = null;
          _doSpeak(pending.text, pending.voices);
        } else {
          _doSpeak(text, voices);
        }
      });
      _pendingSpeak = { text, voices: [] };
      return;
    }catch(e){}
  }
  _doSpeak(text, voices);
}
function _doSpeak(text, voices){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.volume = 1; u.rate = 0.85; u.pitch = 1.1;
  // 优先选择英文女声
  const preferred = voices.find(v=>/en[-_]US/i.test(v.lang) && /female|samantha|victoria|zira|woman|girl|google|microsoft/i.test(v.name))
    || voices.find(v=>/en[-_]US/i.test(v.lang))
    || voices.find(v=>/^en/i.test(v.lang));
  if(preferred){ try{ u.voice = preferred; }catch(e){} }
  // 解决部分浏览器暂停后无法继续的问题
  try{ speechSynthesis.resume(); }catch(e){}
  speechSynthesis.speak(u);
}
// 解锁音频引擎：移动端浏览器要求用户手势交互后才能播放音频
function unlockAudio(){
  if(_speakUnlocked) return;
  _speakUnlocked = true;
  if(!('speechSynthesis' in window)) return;
  try{
    // 触发一次空 utterance 解锁音频上下文
    const u = new SpeechSynthesisUtterance('');
    u.volume = 0;
    speechSynthesis.speak(u);
    // 预加载语音列表
    const voices = speechSynthesis.getVoices() || [];
    if(voices.some(v=>/en/i.test(v.lang))){
      _speakVoicesReady = true;
    } else {
      // 语音未就绪，注册监听等待
      speechSynthesis.addEventListener('voiceschanged', function handler(){
        speechSynthesis.removeEventListener('voiceschanged', handler);
        const v = speechSynthesis.getVoices() || [];
        if(v.some(x=>/en/i.test(x.lang))){
          _speakVoicesReady = true;
          if(_pendingSpeak){
            const pending = _pendingSpeak;
            _pendingSpeak = null;
            _doSpeak(pending.text, v);
          }
        }
      });
    }
  }catch(e){}
  if(typeof toast==='function') toast('🔊 音频已开启');
}
// 转义 HTML 属性中的特殊字符，防止单引号/双引号破坏 onclick 等内联事件
function escapeAttr(s){
  return String(s).replace(/&/g,'&amp;').replace(/'/g,'&#39;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ===== 英语年级映射：自然拼读阶段、短语场景、语法模块 =====
function getPhonicsMaxStage(grade){
  const map={'2b':1,'3':2,'4':3,'5':4,'6':4};
  return map[grade]||2;
}
function getPhraseScenesForGrade(grade){
  const map={
    '2b':['居家','学校','公园','动物园','天气'],
    '3':['居家','学校','公园','动物园','餐厅','超市','生日','运动','天气'],
    '4':['居家','学校','公园','动物园','餐厅','超市','生日','运动','医院','图书馆','电影院','天气','旅行'],
    '5':Object.keys(PHRASE_BANK),
    '6':Object.keys(PHRASE_BANK)
  };
  return map[grade]||Object.keys(PHRASE_BANK);
}
function getGrammarPillsForGrade(grade){
  const allPills=[
    {id:'simple',name:'一般现在时',rule:'描述习惯、事实、真理。第三人称单数动词加-s/-es。I/You/We/They + 动词原形；He/She/It + 动词s形。',sentences:[
      {en:'I <b>go</b> to school every day.',cn:'我每天上学。',hl:'go'},
      {en:'She <b>likes</b> apples very much.',cn:'她非常喜欢苹果。',hl:'likes'},
      {en:'The sun <b>rises</b> in the east.',cn:'太阳从东方升起。',hl:'rises'},
      {en:'Do you <b>play</b> football on weekends?',cn:'你周末踢足球吗？',hl:'play'},
    ]},
    {id:'continuous',name:'现在进行时',rule:'描述此刻正在发生的动作。结构：be(am/is/are) + 动词-ing。',sentences:[
      {en:'I <b>am reading</b> a book now.',cn:'我现在正在看书。',hl:'am reading'},
      {en:'Look! The cat <b>is sleeping</b> on the sofa.',cn:'看！猫正在沙发上睡觉。',hl:'is sleeping'},
      {en:'They <b>are playing</b> basketball.',cn:'他们正在打篮球。',hl:'are playing'},
      {en:'What <b>are you doing</b> right now?',cn:'你现在在做什么？',hl:'are you doing'},
    ]},
    {id:'comparative',name:'比较级',rule:'两者比较用比较级。单音节词+er，多音节词前加more，不规则变化good→better, bad→worse。',sentences:[
      {en:'Tom is <b>taller than</b> Jack.',cn:'汤姆比杰克高。',hl:'taller than'},
      {en:'This book is <b>more interesting</b> than that one.',cn:'这本书比那本更有趣。',hl:'more interesting'},
      {en:'I feel <b>better</b> today.',cn:'我今天感觉好多了。',hl:'better'},
      {en:'Which is <b>bigger</b>, the sun or the moon?',cn:'太阳和月亮哪个更大？',hl:'bigger'},
    ]},
    {id:'past',name:'一般过去时',rule:'描述过去发生的动作。动词变过去式，加-ed（规则）或特殊变化。',sentences:[
      {en:'I <b>visited</b> my grandma yesterday.',cn:'我昨天看望了奶奶。',hl:'visited'},
      {en:'She <b>watched</b> a movie last night.',cn:'她昨晚看了一部电影。',hl:'watched'},
      {en:'They <b>went</b> to the park on Sunday.',cn:'他们周日去了公园。',hl:'went'},
      {en:'He <b>ate</b> breakfast at seven.',cn:'他七点吃了早饭。',hl:'ate'},
    ]},
    {id:'future',name:'一般将来时',rule:'描述将要发生的动作。结构：be going to + 动词原形 或 will + 动词原形。',sentences:[
      {en:'I <b>am going to</b> visit Beijing.',cn:'我打算去北京。',hl:'am going to'},
      {en:'She <b>will</b> come to my party.',cn:'她会来我的派对。',hl:'will'},
      {en:'They <b>are going to</b> play football.',cn:'他们打算踢足球。',hl:'are going to'},
      {en:'What <b>will</b> you do tomorrow?',cn:'你明天会做什么？',hl:'will'},
    ]},
    {id:'superlative',name:'最高级',rule:'三者以上比较用最高级。the + 形容词est（单音节），the most + 形容词（多音节）。',sentences:[
      {en:'Mount Everest is <b>the highest</b> mountain.',cn:'珠穆朗玛峰是最高的山。',hl:'the highest'},
      {en:'She is <b>the tallest</b> girl in our class.',cn:'她是班上最高的女孩。',hl:'the tallest'},
      {en:'This is <b>the most interesting</b> book.',cn:'这是最有趣的书。',hl:'the most interesting'},
      {en:'Summer is <b>the hottest</b> season.',cn:'夏天是最热的季节。',hl:'the hottest'},
    ]},
    {id:'modal',name:'情态动词',rule:'can/may/must/should + 动词原形。表示能力、许可、必须、建议。',sentences:[
      {en:'I <b>can</b> swim very well.',cn:'我游泳游得很好。',hl:'can'},
      {en:'You <b>must</b> finish your homework.',cn:'你必须完成作业。',hl:'must'},
      {en:'She <b>should</b> drink more water.',cn:'她应该多喝水。',hl:'should'},
      {en:'<b>May</b> I come in?',cn:'我可以进来吗？',hl:'May'},
    ]},
  ];
  const map={'2b':[allPills[0],allPills[1]],'3':allPills.slice(0,3),'4':allPills.slice(0,5),'5':allPills.slice(0,7),'6':allPills};
  return map[grade]||allPills.slice(0,3);
}
// 年级标签中文
function gradeLabel(grade){
  return {'2b':'二年级','3':'三年级','4':'四年级','5':'五年级','6':'六年级'}[grade]||grade+'年级';
}

function makeClickableSentence(sentence){
  return sentence.split(/(\s+)/).map((tok)=>{
    if(/^\s+$/.test(tok))return tok;
    const clean=tok.replace(/[^a-zA-Z']/g,'').toLowerCase();
    if(!clean)return tok;
    return `<span class="click-word" data-word="${clean}">${tok}</span>`;
  }).join('');
}

function showWordTooltip(word,x,y){
  const tip=$('#wordTooltip');
  const w=word.toLowerCase();
  const data=WORD_DICT[w];
  if(!data){
    tip.innerHTML=`<div class="wt-head"><div class="wt-word">${word}</div><div class="wt-close">×</div></div><div class="wt-def" style="color:var(--text-2)">该词暂未收录详细释义，可点击下方按钮听发音。</div><div class="wt-actions"><button onclick="speak('${escapeAttr(word)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>听发音</button></div>`;
  }else{
    tip.innerHTML=`<div class="wt-head"><div class="wt-word">${word}</div><div class="wt-close">×</div></div><div class="wt-pos">${data.pos}</div><div class="wt-def">${data.def}</div><div class="wt-example">例：${data.example||''}</div><div class="wt-coll"><strong>常见搭配：</strong>${(data.coll||[]).join(' · ')}</div><div class="wt-syn"><strong>近义：</strong>${data.syn||'—'}　<strong>反义：</strong>${data.ant||'—'}</div><div class="wt-actions"><button onclick="speak('${escapeAttr(word)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>听发音</button><button class="yellow" onclick="speak('${escapeAttr(data.example||word)}')"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>听例句</button></div>`;
  }
  tip.style.left=Math.min(x,window.innerWidth-320)+'px';
  tip.style.top=Math.max(80,y-20)+'px';
  tip.classList.add('show');
  tip.querySelector('.wt-close').onclick=()=>tip.classList.remove('show');
}

document.addEventListener('click',(e)=>{
  if(e.target.classList&&e.target.classList.contains('click-word')){
    e.stopPropagation();
    const r=e.target.getBoundingClientRect();
    showWordTooltip(e.target.dataset.word,r.left,r.top+r.height+8);
    speak(e.target.dataset.word);
  }else if(!e.target.closest('.word-tooltip')){
    $('#wordTooltip').classList.remove('show');
  }
});

/* ============ 渲染函数 ============ */
function renderSidePanel(){
      const pet=S.pet&&PETS[S.pet.idx]||PETS[0]||{name:'宝贝',avatar:'',type:'星云龙'};
  const streak=Math.min(7,S.overview.streak);
  return `
    <div class="side-panel">
      <div class="panel-card">
        <h3>⭐ 星星银行 ${badgeDots()}</h3>
        <div class="star-bank">
          <div class="star-count"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/></svg><span class="mono">${S.overview.stars}</span></div>
          <div class="star-sub">可用</div>
        </div>
        <div class="streak-row">${Array(7).fill(0).map((_,i)=>`<div class="streak-cell ${i<streak?'done':''}"></div>`).join('')}</div>
        <div style="font-size:11px;color:var(--text-2);margin-top:6px">🔥 连续学习 <b style="color:var(--coral)">${S.overview.streak}</b> 天 · 本周 <b style="color:var(--teal)">${S.overview.weekDone}/${S.overview.weekGoal}</b> 目标</div>
        ${S.badges.length?`<div style="margin-top:10px;display:flex;gap:4px;flex-wrap:wrap">${S.badges.slice(0,6).map(b=>`<div title="${b.name}" style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--yellow),#FFB300);display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:var(--shadow-sm)">${b.icon}</div>`).join('')}${S.badges.length>6?`<div style="width:28px;height:28px;border-radius:8px;background:var(--ink-100);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--ink-500)">+${S.badges.length-6}</div>`:''}</div>`:''}
      </div>
      <div class="panel-card" onclick="switchView('pet')" style="cursor:pointer;transition:all var(--dur-base)">
        <h3>🐲 我的宠物</h3>
        <div class="pet-status-area">
          <div class="pet-mini" style="border-color:${['#00A896','#8B5CF6','#FB923C','#F5B800','#E8A0BF'][S.pet.idx%5]}"><img src="${pet.avatar}" alt="宠物"></div>
          <div style="font-size:13px;font-weight:700;color:var(--navy)">${pet.name}<span style="color:var(--teal)">·Lv${S.pet.level}</span></div>
          <div class="status-rings">
            <div class="ring-stat"><div class="ring-stat-val">${S.pet.hunger}</div><div class="ring-stat-label">饱食</div></div>
            <div class="ring-stat"><div class="ring-stat-val">${S.pet.mood}</div><div class="ring-stat-label">心情</div></div>
            <div class="ring-stat"><div class="ring-stat-val">${Math.round(S.pet.exp%100)}</div><div class="ring-stat-label">经验</div></div>
            <div class="ring-stat"><div class="ring-stat-val">${S.pet.clean}</div><div class="ring-stat-label">清洁</div></div>
          </div>
        </div>
      </div>
      <div class="panel-card">
        <h3>📋 今日任务</h3>
        <div class="task-list">
          <div class="task-item" onclick="switchView('math')">
            <div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg></div>
            <div class="task-info"><div class="task-title">数学 · 多位数乘法</div><div class="task-meta">3道 · 15分钟 · <span style="color:var(--teal)">待开始</span></div></div>
          </div>
          <div class="task-item" onclick="switchView('english')">
            <div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg></div>
            <div class="task-info"><div class="task-title">英语 · SH拼读</div><div class="task-meta">5个词 · 10分钟 · <span style="color:var(--yellow-700)">3/5</span></div></div>
          </div>
          <div class="task-item" onclick="switchView('speak')">
            <div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg></div>
            <div class="task-info"><div class="task-title">口语 · 咖啡店</div><div class="task-meta">3轮 · 8分钟 · <span style="color:var(--ink-400)">未开始</span></div></div>
          </div>
        </div>
      </div>
      <div class="panel-card">
        <h3>⚡ 快速入口</h3>
        <div class="quick-grid">
          <div class="quick-item" onclick="switchView('math')"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg><span>训练营</span></div>
          <div class="quick-item" onclick="switchView('math')"><svg viewBox="0 0 24 24"><path d="M3 3v18h18v-2H5V3H3zm14 12V8h-2v7h-2v-4h-2v4H9V6H7v9h10z"/></svg><span>几何</span></div>
          <div class="quick-item" onclick="toast('错题本：'+S.math.wrongProblems.length+' 道')"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg><span>错题</span></div>
          <div class="quick-item" onclick="switchView('english')"><svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11z"/></svg><span>进阶</span></div>
          <div class="quick-item" onclick="switchView('pet')"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg><span>宠物</span></div>
          <div class="quick-item" onclick="setStar(10,'签到成功');this.style.background='var(--teal-soft)';this.querySelector('span').style.color='var(--teal)'"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg><span>签到</span></div>
        </div>
      </div>

      <div class="panel-card">
        <h3>🎭 每日场景</h3>
        <div id="dailySceneCard">
          ${function(){try{
            const today=SceneManager?SceneManager.getToday(S.currentProfileId||'default'):null;
            if(!today)return'<div style="font-size:13px;color:var(--text-3)">加载中...</div>';
            const words=SceneManager?SceneManager.getWords(today.id):[];
            return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <div style="font-size:32px">${today.icon}</div>
              <div>
                <div style="font-size:14px;font-weight:700;color:var(--navy)">${today.name}</div>
                <div style="font-size:11px;color:var(--text-2);margin-top:2px">${today.phrases[0]}</div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px">
              ${words.slice(0,5).map(w=>`<span style="padding:3px 8px;background:var(--teal-soft);border-radius:10px;font-size:11px;color:var(--teal);font-weight:600">${w}</span>`).join('')}
            </div>`;
          }catch(e){return'<div style="font-size:13px;color:var(--text-3)">暂无场景</div>';}
          }()}</div>
      </div>
      <div class="panel-card">
        <h3>📖 复习提醒</h3>
        <div id="reviewReminder">
          ${function(){try{
            const sid=S.currentProfileId||'default';
            const r=typeof SpacedReview!=='undefined'&&SpacedReview?SpacedReview.renderReviewReminder(sid):null;
            return r||'<div style="font-size:13px;color:var(--teal)">✅ 今日复习任务已清空，太棒了！</div>';
          }catch(e){return'<div style="font-size:13px;color:var(--text-3)">暂无复习</div>';}
          }()}</div>
      </div>
      <div class="panel-card">
        <h3>🏆 成就墙</h3>
        <div id="achievementWall">
          ${function(){try{
            const sid=S.currentProfileId||'default';
            const achieved=typeof Achievements!=='undefined'&&Achievements?Achievements.getList(sid):[];
            const pending=typeof Achievements!=='undefined'&&Achievements?Achievements.getProgress(sid):[];
            const all=[...achieved.map(b=>({...b,done:true})),...pending.map(p=>({...p,done:false}))];
            if(!all.length)return'<div style="font-size:13px;color:var(--text-3)">开始学习解锁成就吧！</div>';
            return `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px">
              ${all.map(a=>`<div title="${a.name}" style="width:100%;aspect-ratio:1;border-radius:10px;background:${a.done?'linear-gradient(135deg,#FEF3C7,#FDE68A)':'var(--ink-100)'};display:flex;align-items:center;justify-content:center;font-size:18px;${a.done?'cursor:pointer':a.progress<a.target?'cursor:default':''};transition:all var(--dur-base)"
                onmouseenter="this.style.transform='scale(1.1)'" onmouseleave="this.style.transform=''"
                ${a.done?`onclick="toast('🏆 ${a.name}: ${a.desc}')"`:''}>
                ${a.done?a.icon:`<span style="font-size:10px;color:var(--text-3)">${Math.round(a.progress*100)}%</span>`}
              </div>`).join('')}
            </div>
            ${achieved.length?`<div style="font-size:12px;color:var(--text-2)">已解锁 ${achieved.length}/${achieved.length+pending.length} 个</div>`:''}
          `;}catch(e){return'<div style="font-size:13px;color:var(--text-3)">-</div>';}
          }()}</div>
      </div>
    </div>`;
}

function renderOverview(){
  const o = S.overview || {};
  const _today = (()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');})();

  // ===== 引擎调用（全部带容错，不修改引擎与数据） =====
  let dailyHTML = '';
  let dailyCheck = null;
  try { dailyHTML = LearningPath.renderDailyPlan(S) || ''; } catch(e){ dailyHTML = ''; }
  try { dailyCheck = LearningPath.checkDailyCompletion(S, _today); } catch(e){ dailyCheck = null; }

  let weakHTML = '';
  let weakAnalysis = null;
  try { weakHTML = WeaknessDetector.renderWeaknessReport(S) || ''; } catch(e){ weakHTML = ''; }
  try { weakAnalysis = WeaknessDetector.analyzeWeakness(S, 'math'); } catch(e){ weakAnalysis = null; }

  let weeklyHTML = '';
  let weeklyReport = null;
  try { weeklyHTML = ProgressTracker.renderWeeklyReport(S) || ''; } catch(e){ weeklyHTML = ''; }
  try { weeklyReport = ProgressTracker.generateWeeklyReport(S); } catch(e){ weeklyReport = null; }

  let streak = 0;
  try { streak = ProgressTracker.calcStreak(S) || 0; } catch(e){ streak = (o.streak||0); }

  // 计时器（挂载到页面顶部，幂等）
  let timerMountHTML = '';
  try { timerMountHTML = TimeController.renderTimer() || ''; } catch(e){ timerMountHTML = ''; }

  // ===== 今日进度 =====
  const doneTime  = (dailyCheck && dailyCheck.doneTime)  || 0;
  const totalTime = (dailyCheck && dailyCheck.totalTime) || 40;
  const dayPct    = Math.min(100, Math.round(doneTime / Math.max(1,totalTime) * 100));
  const allDone   = dailyCheck ? !!dailyCheck.allDone : false;

  // ===== 统计数据 =====
  const totalMin   = (S.study && S.study.totalTime) || o.totalMin || 0;
  const totalStars = o.stars || 0;
  const totalCoins = (S.pet && S.pet.coins) || 0;
  const weekDays   = (weeklyReport && weeklyReport.studyDays) || o.weekDone || 0;
  const weakCount  = (weakAnalysis && weakAnalysis.weakPoints && weakAnalysis.weakPoints.length) || 0;

  // ===== 宠物快照 =====
  const pet = (typeof PETS!=='undefined' && PETS[S.pet.idx]) || (typeof PETS!=='undefined' && PETS[0]) || {name:'宝贝',type:'宠物',rarity:'R',avatar:''};
  const petLevel  = (S.pet && S.pet.level)  || 1;
  const petMood   = (S.pet && S.pet.mood!=null)  ? S.pet.mood  : 0;
  const petHunger = (S.pet && S.pet.hunger!=null)? S.pet.hunger: 0;
  const petClean  = (S.pet && S.pet.clean!=null) ? S.pet.clean : 0;

  // ===== 快速入口待办数 =====
  const mathTodo  = (dailyCheck && dailyCheck.tasks && dailyCheck.tasks[0] && !dailyCheck.tasks[0].done) ? 1 : 0;
  const engTodo   = (dailyCheck && dailyCheck.tasks && dailyCheck.tasks[1] && !dailyCheck.tasks[1].done) ? 1 : 0;
  const speakTodo = 1;
  const petTodo   = (petHunger < 50 ? 1 : 0) + (petMood < 50 ? 1 : 0);

  // ===== 调度图表初始化（DOM 渲染完成后执行） =====
  setTimeout(()=>{ try{ initOverviewCharts(); }catch(e){ console.warn('overview charts failed', e); } }, 60);

  return `
    <div class="layout-with-side">
      <div style="flex:1;min-width:0">
        <!-- 顶部欢迎条 · 学习驾驶舱 -->
        <div class="tilt-card" style="position:relative;overflow:hidden;border-radius:var(--radius-2xl);padding:22px 28px;margin-bottom:16px;background:linear-gradient(135deg,var(--navy) 0%,var(--teal-700) 50%,var(--teal) 100%);color:#fff;box-shadow:var(--shadow-xl)">
          <div style="position:absolute;right:-30px;top:-30px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(245,184,0,.22),transparent 60%);filter:blur(8px)"></div>
          <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap">
            <div style="flex:1;min-width:260px">
              <div style="font-size:11px;font-weight:700;color:var(--yellow-300);letter-spacing:.18em;margin-bottom:8px;text-transform:uppercase">🚀 学习驾驶舱 · DAY ${streak}</div>
              <h1 style="font-size:26px;font-weight:900;line-height:1.15;margin-bottom:6px">你好，<span style="color:var(--yellow-300)">小探索家</span>！今日任务${allDone?'已全部完成 🎉':'加油进行中'}</h1>
              <p style="font-size:13px;opacity:.85">已学习 <b>${doneTime}</b>/${totalTime} 分钟 · 连续 <b>${streak}</b> 天 🔥 · 薄弱点 <b>${weakCount}</b> 个</p>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button class="btn" onclick="switchView('math')" style="background:var(--yellow);color:var(--navy-800);font-weight:700;padding:10px 18px;font-size:14px">📐 开始数学</button>
              <button class="btn" onclick="switchView('english')" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.25);font-weight:700;padding:10px 18px;font-size:14px">📖 学英语</button>
            </div>
          </div>
        </div>

        <!-- Bento Grid 学习驾驶舱 -->
        <div class="bento-grid" style="display:grid;grid-template-columns:repeat(12,1fr);gap:16px;align-items:stretch;margin-bottom:20px">

          <!-- 卡片1：今日学习任务（主卡，span 7，跨2行） -->
          <div class="card tilt-card" style="grid-column:span 7;grid-row:span 2;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,var(--teal-50) 100%);border:1px solid var(--teal-100)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
              <h2 style="font-size:16px;font-weight:800;color:var(--navy)">📋 今日学习任务</h2>
              <span style="background:var(--navy);color:#fff;padding:4px 12px;border-radius:var(--radius-full);font-size:11px;font-weight:600">${totalTime} 分钟</span>
            </div>
            <!-- 今日完成进度条 -->
            <div style="margin-bottom:12px">
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-3);margin-bottom:5px"><span>今日完成进度</span><span>${doneTime}/${totalTime} 分钟 · ${dayPct}%</span></div>
              <div style="background:var(--ink-100);border-radius:var(--radius-full);height:10px;overflow:hidden"><div style="height:100%;width:${dayPct}%;background:linear-gradient(90deg,var(--teal),var(--yellow));transition:width .5s"></div></div>
            </div>
            <!-- 引擎渲染的今日计划（数学 + 英语） -->
            <div style="flex:1;overflow:auto;max-height:520px">
              ${dailyHTML || '<div style="padding:24px;text-align:center;color:var(--text-3);font-size:13px">📅 今日任务生成中...</div>'}
              <!-- 口语任务（引擎 generateDailyPlan 仅覆盖数学/英语，手动补充口语卡） -->
              <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-lg);padding:14px 16px;border-left:4px solid var(--coral);box-shadow:var(--shadow-sm);margin-top:12px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                  <div style="display:flex;align-items:center;gap:8px">
                    <span style="font-size:22px">🎤</span>
                    <div>
                      <div style="font-weight:700;color:var(--text-1);font-size:15px">口语 · ${(S.speak&&S.speak.teacher)?S.speak.teacher+'老师':'Emma老师'} · 15分钟</div>
                      <div style="font-size:12px;color:var(--text-2)">真实场景对话 · 跟读与角色扮演</div>
                    </div>
                  </div>
                  <span style="background:var(--yellow-100);color:var(--yellow-700);padding:3px 10px;border-radius:var(--radius-full);font-size:12px;font-weight:600">⏳ 待开始</span>
                </div>
                <div style="background:var(--coral-soft);border-radius:var(--radius-sm);padding:8px 10px;font-size:12.5px;color:var(--coral-600);margin-bottom:8px">🎯 <b>目标：</b>完成 1 个情景对话，发音清晰度 ≥80%</div>
                <button class="btn" onclick="switchView('speak')" style="width:100%;background:var(--coral);color:#fff;font-weight:700;padding:9px;font-size:13px">🎤 开始口语练习</button>
              </div>
            </div>
            <!-- 计时器挂载点 + 三科开始按钮 -->
            <div style="margin-top:12px;padding-top:12px;border-top:1px dashed var(--ink-100)">
              ${timerMountHTML}
              <div style="display:flex;gap:8px;margin-top:8px">
                <button class="btn" onclick="switchView('math')" style="flex:1;background:var(--teal);color:#fff;font-weight:700;padding:9px;font-size:12.5px">📐 数学</button>
                <button class="btn" onclick="switchView('english')" style="flex:1;background:var(--yellow);color:var(--navy-800);font-weight:700;padding:9px;font-size:12.5px">📖 英语</button>
                <button class="btn" onclick="switchView('speak')" style="flex:1;background:var(--coral);color:#fff;font-weight:700;padding:9px;font-size:12.5px">🎤 口语</button>
              </div>
            </div>
          </div>

          <!-- 卡片2：连续学习 + 数据统计 + mini折线图 -->
          <div class="card tilt-card hoverable" style="grid-column:span 5;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,var(--yellow-50) 100%);border:1px solid var(--yellow-100)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
              <h2 style="font-size:16px;font-weight:800;color:var(--navy)">🔥 连续学习</h2>
              <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;background:var(--coral-soft);color:var(--coral-600)">本周 ${weekDays} 天</div>
            </div>
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
              <div style="font-size:54px;line-height:1">🔥</div>
              <div>
                <div style="font-size:40px;font-weight:900;color:var(--coral);font-family:'Inter',sans-serif;line-height:1">${streak}<span style="font-size:16px;color:var(--ink-400);margin-left:4px">天</span></div>
                <div style="font-size:12px;color:var(--text-2)">坚持就是胜利！</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
              <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:8px;text-align:center">
                <div style="font-size:17px;font-weight:800;color:var(--teal);font-family:'Inter',sans-serif">${Math.floor(totalMin/60)}<span style="font-size:11px">h</span>${totalMin%60}<span style="font-size:10px">m</span></div>
                <div style="font-size:10px;color:var(--text-3);margin-top:2px">总学习时长</div>
              </div>
              <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:8px;text-align:center">
                <div style="font-size:17px;font-weight:800;color:var(--yellow-700);font-family:'Inter',sans-serif">${totalStars}<span style="font-size:11px">⭐</span></div>
                <div style="font-size:10px;color:var(--text-3);margin-top:2px">总星数</div>
              </div>
              <div style="background:var(--surface);border:1px solid var(--ink-100);border-radius:var(--radius-md);padding:8px;text-align:center">
                <div style="font-size:17px;font-weight:800;color:var(--coral-600);font-family:'Inter',sans-serif">${totalCoins}<span style="font-size:11px">🪙</span></div>
                <div style="font-size:10px;color:var(--text-3);margin-top:2px">总金币</div>
              </div>
            </div>
            <div style="margin-top:auto">
              <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:2px">📈 最近 7 天学习时长</div>
              <div id="ovChartLine" style="width:100%;height:120px"></div>
            </div>
          </div>

          <!-- 卡片3：知识漏洞报告 -->
          <div class="card tilt-card hoverable" style="grid-column:span 5;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,#FFF5F0 100%);border:1px solid rgba(251,146,60,.18)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
              <h2 style="font-size:16px;font-weight:800;color:var(--navy)">🩺 知识漏洞报告</h2>
              <span style="background:var(--coral);color:#fff;padding:3px 10px;border-radius:var(--radius-full);font-size:11px;font-weight:600">${weakCount} 个薄弱点</span>
            </div>
            <div style="flex:1;overflow:auto;max-height:300px">
              ${weakHTML || '<div style="padding:20px;text-align:center;color:var(--teal-700);background:var(--teal-50);border-radius:var(--radius-lg);font-size:13px">🎉 暂无漏洞，继续保持！</div>'}
            </div>
            <div style="margin-top:10px;display:flex;gap:8px">
              <button class="btn" onclick="switchView('math')" style="flex:1;background:var(--coral);color:#fff;font-weight:700;padding:9px;font-size:12.5px">🎯 去练习</button>
              <button class="btn btn-ghost" style="flex:1;padding:9px;font-size:12.5px" onclick="switchView('math')">查看详情</button>
            </div>
          </div>

          <!-- 卡片4：本周进步回顾 + 雷达图 -->
          <div class="card tilt-card hoverable" style="grid-column:span 4;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,var(--teal-50) 100%);border:1px solid var(--teal-100)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
              <h2 style="font-size:16px;font-weight:800;color:var(--navy)">📈 本周进步</h2>
              <span style="background:var(--teal);color:#fff;padding:3px 10px;border-radius:var(--radius-full);font-size:11px;font-weight:600">${weekDays} 天</span>
            </div>
            <div style="flex:1;overflow:auto;max-height:260px;font-size:12px;line-height:1.5">
              ${weeklyHTML || '<div style="padding:16px;text-align:center;color:var(--text-3)">暂无周报数据</div>'}
            </div>
            <div style="margin-top:10px">
              <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:2px">🎯 知识点掌握度</div>
              <div id="ovChartRadar" style="width:100%;height:160px"></div>
            </div>
          </div>

          <!-- 卡片5：宠物状态快照 -->
          <div class="card tilt-card hoverable" style="grid-column:span 4;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,var(--navy-50) 100%);border:1px solid var(--ink-100)">
            <h2 style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px">🐾 宠物状态</h2>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
              <div style="width:60px;height:60px;border-radius:16px;overflow:hidden;border:2px solid var(--teal);flex-shrink:0;background:var(--teal-soft)">${pet.avatar?`<img src="${pet.avatar}" style="width:100%;height:100%;object-fit:cover" alt="pet">`:''}</div>
              <div>
                <div style="font-size:15px;font-weight:800;color:var(--navy)">${pet.name} <span style="font-size:11px;color:var(--teal);background:var(--teal-soft);padding:2px 8px;border-radius:10px">Lv${petLevel}</span></div>
                <div style="font-size:11px;color:var(--text-3);margin-top:2px">${pet.type} · ${pet.rarity} · 清洁 ${petClean}</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-2);margin-bottom:3px"><span>😊 心情</span><span>${petMood}</span></div>
                <div style="background:var(--ink-100);border-radius:var(--radius-full);height:7px;overflow:hidden"><div style="height:100%;width:${petMood}%;background:linear-gradient(90deg,var(--yellow),var(--coral))"></div></div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-2);margin-bottom:3px"><span>🍖 饱食</span><span>${petHunger}</span></div>
                <div style="background:var(--ink-100);border-radius:var(--radius-full);height:7px;overflow:hidden"><div style="height:100%;width:${petHunger}%;background:linear-gradient(90deg,var(--coral),var(--yellow))"></div></div>
              </div>
            </div>
            <button class="btn" onclick="switchView('pet')" style="width:100%;background:var(--navy);color:#fff;font-weight:700;padding:10px;font-size:13px;margin-top:auto">🐾 去看宠物</button>
          </div>

          <!-- 卡片6：快速入口 -->
          <div class="card tilt-card" style="grid-column:span 4;display:flex;flex-direction:column;background:linear-gradient(160deg,#fff 0%,var(--coral-soft) 100%);border:1px solid rgba(251,146,60,.15)">
            <h2 style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px">⚡ 快速入口</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;flex:1">
              <button onclick="switchView('math')" style="border:none;border-radius:var(--radius-md);padding:12px 8px;background:linear-gradient(135deg,var(--teal),var(--teal-700));color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;transition:transform var(--dur-base)">
                <span style="font-size:24px">📐</span><span style="font-size:12px;font-weight:700">数学星球</span>
                <span style="font-size:10px;opacity:.9;background:rgba(0,0,0,.18);padding:1px 7px;border-radius:8px">${mathTodo} 待办</span>
              </button>
              <button onclick="switchView('english')" style="border:none;border-radius:var(--radius-md);padding:12px 8px;background:linear-gradient(135deg,var(--yellow),#FFB300);color:var(--navy-800);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;transition:transform var(--dur-base)">
                <span style="font-size:24px">📖</span><span style="font-size:12px;font-weight:700">英语世界</span>
                <span style="font-size:10px;opacity:.85;background:rgba(0,0,0,.1);padding:1px 7px;border-radius:8px">${engTodo} 待办</span>
              </button>
              <button onclick="switchView('speak')" style="border:none;border-radius:var(--radius-md);padding:12px 8px;background:linear-gradient(135deg,var(--coral),#FB7185);color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;transition:transform var(--dur-base)">
                <span style="font-size:24px">🎤</span><span style="font-size:12px;font-weight:700">口语伙伴</span>
                <span style="font-size:10px;opacity:.9;background:rgba(0,0,0,.18);padding:1px 7px;border-radius:8px">${speakTodo} 待办</span>
              </button>
              <button onclick="switchView('pet')" style="border:none;border-radius:var(--radius-md);padding:12px 8px;background:linear-gradient(135deg,var(--navy),var(--teal-700));color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;transition:transform var(--dur-base)">
                <span style="font-size:24px">🐲</span><span style="font-size:12px;font-weight:700">宠物乐园</span>
                <span style="font-size:10px;opacity:.9;background:rgba(0,0,0,.18);padding:1px 7px;border-radius:8px">${petTodo} 待办</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      ${renderSidePanel()}
    </div>`;
}

/* 总览页 ECharts 图表初始化（学习驾驶舱：7天时长折线 + 知识掌握雷达） */
function initOverviewCharts(){
  if(typeof echarts === 'undefined') return;
  const _fmt = (d)=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  try{
    // 1) 最近7天学习时长 mini 折线图
    const elL = document.getElementById('ovChartLine');
    if(elL){
      if(window._ovChartLine){ try{ window._ovChartLine.dispose(); }catch(e){} }
      const labels = ['周一','周二','周三','周四','周五','周六','周日'];
      const xLabels = [], vals = [];
      const today = new Date();
      for(let i=0;i<7;i++){
        const d = new Date(today); d.setDate(today.getDate()-(6-i));
        const ds = _fmt(d);
        xLabels.push(labels[(d.getDay()+6)%7]);
        const rec = (S.study && S.study.dailyRecords && S.study.dailyRecords[ds]) || null;
        let t = rec ? (rec.time||0) : 0;
        if(!rec && S.streakHistory){
          const idx = S.streakHistory.length - 7 + i;
          if(idx>=0 && S.streakHistory[idx]) t = 30;
        }
        vals.push(t);
      }
      window._ovChartLine = echarts.init(elL);
      window._ovChartLine.setOption({
        grid:{left:30,right:12,top:14,bottom:22},
        tooltip:{trigger:'axis',backgroundColor:'#1E3A5F',textStyle:{color:'#fff',fontSize:11},borderWidth:0,borderRadius:6,padding:[6,8],formatter:p=>`${p[0].name}<br/>学习 <b>${p[0].value}</b> 分钟`},
        xAxis:{type:'category',data:xLabels,axisLine:{lineStyle:{color:'#E2E8F0'}},axisLabel:{color:'#94A3B8',fontSize:10},axisTick:{show:false}},
        yAxis:{type:'value',name:'分钟',nameTextStyle:{color:'#CBD5E1',fontSize:9},axisLine:{show:false},axisTick:{show:false},splitLine:{lineStyle:{color:'#F1F5F9',type:'dashed'}},axisLabel:{color:'#CBD5E1',fontSize:9}},
        series:[{type:'line',smooth:true,symbol:'circle',symbolSize:5,data:vals,lineStyle:{color:'#FB923C',width:2.5},itemStyle:{color:'#FB923C',borderColor:'#fff',borderWidth:1.5},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(251,146,60,0.3)'},{offset:1,color:'rgba(251,146,60,0.02)'}]}}}]
      });
    }
    // 2) 知识点掌握度雷达图
    const elR = document.getElementById('ovChartRadar');
    if(elR){
      if(window._ovChartRadar){ try{ window._ovChartRadar.dispose(); }catch(e){} }
      const mastery = (S.math && S.math.mastery) || {};
      let kps = Object.keys(mastery);
      let pairs = kps.map(k=>{ let v=0; try{ v=WeaknessDetector.calcMastery(S,k); }catch(e){ v=0; } return [k,v]; }).filter(p=>p[1]>0);
      if(pairs.length < 3){
        const mp = (S.math && S.math.moduleProgress) || {cpa:65,bar:45,area:35,fract:25,wp:50,kg:30};
        const fb = [['计算CPA',mp.cpa||65],['条形模型',mp.bar||45],['面积模型',mp.area||35],['分数',mp.fract||25],['应用题',mp.wp||50],['几何',mp.kg||30]];
        kps = fb.map(f=>f[0]); pairs = fb;
      } else {
        pairs.sort((a,b)=>b[1]-a[1]);
        pairs = pairs.slice(0,6);
        kps = pairs.map(p=>p[0]);
      }
      const rVals = pairs.map(p=>p[1]);
      while(kps.length < 3){ kps.push('综合'); rVals.push(0); }
      window._ovChartRadar = echarts.init(elR);
      window._ovChartRadar.setOption({
        tooltip:{backgroundColor:'#1E3A5F',textStyle:{color:'#fff',fontSize:11},borderWidth:0,borderRadius:6},
        radar:{
          indicator: kps.map(k=>({name:k, max:100})),
          radius:'62%', center:['50%','55%'],
          axisName:{color:'#64748B',fontSize:9.5},
          splitLine:{lineStyle:{color:'#E2E8F0'}},
          splitArea:{areaStyle:{color:['rgba(0,168,150,0.04)','rgba(0,168,150,0.02)']}},
          axisLine:{lineStyle:{color:'#E2E8F0'}}
        },
        series:[{
          type:'radar',
          data:[{value:rVals, name:'掌握度', areaStyle:{color:'rgba(0,168,150,0.25)'}, lineStyle:{color:'#00A896',width:2}, itemStyle:{color:'#00A896'}}]
        }]
      });
    }
    // 响应式（仅绑定一次）
    if(!window._ovChartResizeBound){
      window._ovChartResizeBound = true;
      window.addEventListener('resize', ()=>{ try{ window._ovChartLine && window._ovChartLine.resize(); }catch(e){} try{ window._ovChartRadar && window._ovChartRadar.resize(); }catch(e){} });
    }
  }catch(e){ console.warn('overview charts init failed', e); }
}

/* ============================================================
   数学板块 · 场景发现式教学（5 阶段流程）
   阶段：场景导入 → 引导发现 → 正式解题 → 数形结合讲解 → 发散思维
   整合：MathVisual / LearningPath / WeaknessDetector / TimeController
   说明：保留年级选择 + 单元知识树，仅重写题目练习部分
============================================================ */
function renderMath(grade='3'){
  // 进入数学板块：启动计时会话（仅当未在 math 计时中时启动，避免每次重渲染重置）
  try{
    if(typeof TimeController!=='undefined' && TimeController.startSession &&
       (!TimeController._state || !TimeController._state.running || TimeController._state.subject!=='math')){
      TimeController.startSession('math');
    }
  }catch(e){}

  const g = String(grade);
  const semKey = g + (S.math.semester || 'a');
  const data = MATH_BY_GRADE[semKey] || MATH_BY_GRADE[g+'a'] || MATH_BY_GRADE['3a'];

  // 初始化本节学习会话（年级切换或首次进入时重置）
  if(!window.MATH_SESSION || window.MATH_SESSION.grade !== g || window.MATH_SESSION.problemIdx == null){
    window.MATH_SESSION = {
      grade:g, problemIdx:0, stage:'scene',
      discoveryStep:0, hintUsed:false, solveAttempts:0,
      divergentIdx:0, divergentNotes:[], startTs:Date.now()
    };
  }
  const problem = data.problems[window.MATH_SESSION.problemIdx] || data.problems[0];
  window.CURRENT_MATH_PROBLEM = problem;

  return `
    <div class="layout-with-side">
      <div style="flex:1;min-width:0">
        <div class="grade-bar">
          <span class="grade-label">年级：</span>
          <div class="grade-pills" id="mathGrades">
            ${['2','3','4','5','6'].map(gx=>`<div class="grade-pill ${gx===g?'active':''}" data-grade="${gx}">${gx}年级</div>`).join('')}
          </div>
          <span style="margin-left:auto;font-size:12px;color:var(--text-3);font-weight:600">第 ${Math.min(window.MATH_SESSION.problemIdx+1,data.problems.length)} / ${data.problems.length} 题</span>
        </div>
        <div class="math-banner">
          <div>
            <h2>${data.title}</h2>
            <p>${data.sub} · 场景发现式教学 · 数形结合 CPA</p>
          </div>
          <div class="progress"><span>掌握进度</span><span class="num">${data.progress}%</span></div>
        </div>
        ${renderMathStageProgress()}
        <div id="mathStage" class="math-stage-host">${(window.MathFlowV5 ? MathFlowV5.start(problem) : renderMathStage(problem))}</div>
        <div class="knowledge-tree">
          <div class="card-title" style="margin-bottom:14px">🌳 知识图谱</div>
          ${(data.units||[]).map(k=>`
            <div class="tree-node l1"><div class="tree-dot ${k.level==='done'?'green':k.level==='current'?'yellow':'gray'}"></div>${k.name}</div>
            ${(k.children||[]).map(c=>`
              <div class="tree-node l2"><div class="tree-dot ${c.level==='done'?'green':c.level==='current'?'yellow':'gray'}"></div>${c.name}</div>
              ${(c.children||[]).map(cc=>`<div class="tree-node l3"><div class="tree-dot ${cc.level==='done'?'green':cc.level==='current'?'yellow':'gray'}"></div>${cc.name}</div>`).join('')}
            `).join('')}
          `).join('')}
        </div>
      </div>
      ${renderSidePanel()}
    </div>`;
}

// ===== 阶段进度条（V5 九步进度指示器） =====
function renderMathStageProgress(){
  const stages = [
    {key:'review',   name:'昨日回顾', icon:'📚'},
    {key:'warmup',   name:'数感预热', icon:'📖'},
    {key:'rme',      name:'RME建模', icon:'✏️'},
    {key:'discover', name:'引导发现', icon:'🔍'},
    {key:'neriage',  name:'多解法', icon:'💡'},
    {key:'solve',    name:'正式解题', icon:'📝'},
    {key:'explain',  name:'数形结合', icon:'📊'},
    {key:'russian',  name:'俄罗斯追问', icon:'🤔'},
    {key:'askChild', name:'你来提问', icon:'🙋'},
    {key:'practice', name:'阶梯练习', icon:'🎯'}
  ];
  const sess = (window.MathFlowV5 && MathFlowV5._sess) || {};
  const cur = sess.stage || 'warmup';
  const curIdx = Math.max(0, stages.findIndex(s=>s.key===cur));
  return `<div id="mathStageProgress" style="display:flex;align-items:center;gap:4px;background:white;border-radius:var(--radius-md);padding:12px 14px;box-shadow:0 2px 12px rgba(30,58,95,.05);margin-bottom:16px;flex-wrap:wrap">
    ${stages.map((s,i)=>{
      const done = i<curIdx, active = i===curIdx;
      const bg = done ? 'var(--teal-soft)' : active ? 'var(--teal)' : 'var(--ink-100)';
      const col = done ? 'var(--teal)' : active ? 'white' : 'var(--text-3)';
      const shadow = active ? 'box-shadow:0 4px 12px rgba(0,168,150,.3)' : '';
      return `<div style="display:flex;align-items:center;gap:4px">
        <div style="display:flex;align-items:center;gap:6px;padding:6px 11px;border-radius:18px;font-size:12.5px;font-weight:700;background:${bg};color:${col};${shadow}">
          <span>${done?'✓':s.icon}</span><span>${s.name}</span>
        </div>
        ${i<stages.length-1?`<div style="width:14px;height:2px;background:${done?'var(--teal)':'var(--ink-100)'}"></div>`:''}
      </div>`;
    }).join('')}
  </div>`;
}

// ===== 阶段调度器（根据当前 stage 渲染对应内容） =====
function renderMathStage(problem){
  const stage = (window.MATH_SESSION && window.MATH_SESSION.stage) || 'scene';
  if(stage==='discovery') return renderMathDiscovery(problem);
  if(stage==='solve')     return renderMathSolve(problem);
  if(stage==='explain')   return renderMathExplain(problem);
  if(stage==='divergent') return renderMathDivergent(problem);
  return renderMathScene(problem);
}

// ===== 局部刷新阶段容器（不重渲染整页，配合淡入动画） =====
function updateMathStage(){
  if(window.MathFlowV5 && MathFlowV5._sess){ updateMathStageV5(); return; }
  const host = document.getElementById('mathStage');
  if(!host){ render(); return; }
  const problem = window.CURRENT_MATH_PROBLEM;
  if(!problem) return;
  host.style.animation = 'none';
  host.innerHTML = renderMathStage(problem);
  void host.offsetWidth;            // 触发重排，重置 CSS 动画
  host.style.animation = 'fadeIn .45s ease';
  const prog = document.getElementById('mathStageProgress');
  if(prog) prog.outerHTML = renderMathStageProgress();
}

// ===== V5 局部刷新阶段容器 =====
function updateMathStageV5(){
  const host = document.getElementById('mathStage');
  if(!host){ render(); return; }
  if(!window.MathFlowV5 || !MathFlowV5._sess) return;
  host.style.animation = 'none';
  host.innerHTML = MathFlowV5.renderCurrent();
  void host.offsetWidth;
  host.style.animation = 'fadeIn .45s ease';
  const prog = document.getElementById('mathStageProgress');
  if(prog) prog.outerHTML = renderMathStageProgress();
}

// ===== 阶段切换 =====
function mathAdvance(stage){
  if(window.MathFlowV5 && MathFlowV5._sess){
    MathFlowV5.advance(stage);
    updateMathStageV5();
    return;
  }
  if(!window.MATH_SESSION) return;
  window.MATH_SESSION.stage = stage;
  if(stage==='solve'){
    window.MATH_SESSION.solveAttempts = 0;
    window.MATH_SESSION.startTs = Date.now();
  }
  if(stage==='divergent'){
    window.MATH_SESSION.divergentIdx = 0;
    window.MATH_SESSION.divergentNotes = [];
  }
  updateMathStage();
}

// ===== 进入下一题（重置会话） =====
function mathNextProblem(){
  const g = window.MATH_SESSION.grade;
  const semKey = g + (S.math.semester || 'a');
  const data = MATH_BY_GRADE[semKey] || MATH_BY_GRADE['3a'];
  const total = data.problems.length;
  window.MATH_SESSION = {
    grade:g, problemIdx:(window.MATH_SESSION.problemIdx+1)%total, stage:'scene',
    discoveryStep:0, hintUsed:false, solveAttempts:0,
    divergentIdx:0, divergentNotes:[], startTs:Date.now()
  };
  if(window.MathFlowV5) MathFlowV5._sess = null; // 重置 V5 会话
  setStar(2,'完成一题');
  render();
}

// ===== 阶段 1：场景导入（Scene Hook） =====
function renderMathScene(problem){
  const emoji = _mathSceneEmoji(problem);
  const grad  = _mathSceneGradient(problem);
  return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
    <span class="cpa-tag concrete">STAGE 1 · 场景导入</span>
    <div style="text-align:center;padding:12px 8px 4px">
      <div style="width:140px;height:140px;margin:0 auto 18px;border-radius:50%;background:${grad};display:flex;align-items:center;justify-content:center;font-size:74px;box-shadow:0 14px 34px rgba(0,168,150,.22);animation:fadeIn .6s ease">
        ${emoji}
      </div>
      <div style="font-size:12px;color:var(--text-3);font-weight:700;letter-spacing:2px;margin-bottom:12px">📖 故事场景</div>
      <div style="font-size:16px;line-height:1.85;color:var(--ink-700);max-width:580px;margin:0 auto;padding:20px 24px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-radius:16px;border:1px solid rgba(0,168,150,.15)">
        ${problem.scene}
      </div>
      <div style="margin-top:18px;padding:12px 18px;background:white;border:2px dashed var(--yellow);border-radius:12px;display:inline-block;font-size:15px;color:var(--navy);font-weight:700;max-width:560px">
        🤔 引导思考：${_mathSceneLead(problem)}
      </div>
    </div>
    <div style="text-align:center;margin-top:18px">
      <button onclick="mathAdvance('discovery')" style="padding:13px 32px;background:linear-gradient(135deg,var(--teal),#14C3B2);color:white;border:none;border-radius:24px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 8px 22px rgba(0,168,150,.35);transition:transform .2s">
        🚀 开始探索 →
      </button>
    </div>
  </div>`;
}

// ===== 阶段 2：引导发现（Guided Discovery） =====
function renderMathDiscovery(problem){
  const steps = _mathDiscoverySteps(problem);
  const idx = Math.min(window.MATH_SESSION.discoveryStep||0, steps.length-1);
  const step = steps[idx];
  const correctIdx = step.choices.indexOf(step.answer);
  return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
    <span class="cpa-tag pictorial">STAGE 2 · 引导发现</span>
    <div style="display:flex;align-items:center;gap:10px;margin:14px 0 8px">
      <div style="width:30px;height:30px;border-radius:50%;background:var(--yellow);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">${idx+1}</div>
      <div style="font-size:13px;color:var(--text-3);font-weight:600">第 ${idx+1} / ${steps.length} 步 · 自己想想看</div>
    </div>
    <div style="font-size:16px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:16px">${step.q}</div>
    <div class="wp-choices" id="mathDiscoveryChoices" style="grid-template-columns:repeat(2,1fr)">
      ${step.choices.map((c,i)=>`<div class="wp-choice" data-idx="${i}" onclick="mathAnswer(this,${i},${correctIdx},'discovery',${idx})">${c}</div>`).join('')}
    </div>
    <div id="mathDiscoveryFeedback" style="margin-top:14px"></div>
  </div>`;
}

// ===== 安全选项生成器（确保正确答案永远在选项中） =====
function _safeMathChoices(problem){
  const ans = problem.answer;
  let choices = problem.choices || [];
  if(choices.indexOf(ans) !== -1) return {choices, correctIdx: choices.indexOf(ans)};
  const a = Number(ans);
  const base = isNaN(a) ? ans : a;
  const distractors = [];
  if(typeof base === 'number'){
    const step = Math.max(1, Math.pow(10, Math.max(0, String(Math.floor(Math.abs(base))).length-2)));
    const pool = [
      base + step, base - step,
      base + step*2, base - step*2,
      Math.round(base * 1.1), Math.round(base * 0.9),
      base + 50, base - 50,
      (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[0]+s[2]+s[1])*(base<0?-1:1):base+10;})(),
      (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[1]+s[0]+s[2])*(base<0?-1:1):base-10;})()
    ].filter(x => x !== base && !distractors.includes(x) && !choices.includes(x));
    pool.sort((x,y)=>Math.abs(x-base)-Math.abs(y-base));
    distractors.push(...pool.slice(0, Math.max(0, 4 - choices.length - 1)));
    choices.forEach(c => { if(c !== ans && !distractors.includes(c)) distractors.push(c); });
    distractors.length = Math.min(3, distractors.length);
  } else {
    choices.forEach(c => { if(c !== ans && !distractors.includes(c)) distractors.push(c); });
    while(distractors.length < 3) distractors.push(ans + '？');
    distractors.length = 3;
  }
  const merged = [ans, ...distractors];
  for(let i=merged.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[merged[i],merged[j]]=[merged[j],merged[i]];}
  return {choices: merged, correctIdx: merged.indexOf(ans)};
}

// ===== 阶段 3：正式解题（Solve） =====
function renderMathSolve(problem){
  const showHint = window.MATH_SESSION.hintUsed;
  const {choices, correctIdx} = _safeMathChoices(problem);
  return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
    <span class="cpa-tag" style="background:var(--coral-soft);color:var(--coral)">STAGE 3 · 正式解题</span>
    <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📝 用刚才发现的方法，解决这道题</div>
    <div style="font-size:16px;color:var(--navy);font-weight:700;line-height:1.7;padding:16px 18px;background:linear-gradient(135deg,var(--coral-soft),white);border-radius:12px;border:1px solid rgba(251,146,60,.2)">
      ${problem.question}
    </div>
    <div style="margin-top:12px;font-size:14px;color:var(--text-2)">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--teal)">${problem.formula}</span></div>
    <div style="margin-top:8px;font-size:12px;color:var(--text-3)">选择正确的答案：</div>
    <div class="wp-choices" id="mathSolveChoices" style="grid-template-columns:repeat(${Math.min(choices.length,4)},1fr);margin-top:8px">
      ${choices.map((c,i)=>`<div class="wp-choice" data-idx="${i}" data-val="${c}" onclick="mathAnswer(this,${i},${correctIdx},'solve',0)">${c}</div>`).join('')}
    </div>
    ${showHint?`<div style="margin-top:14px;padding:14px 16px;background:var(--yellow-soft);border-left:4px solid var(--yellow);border-radius:10px;font-size:14px;color:var(--yellow-700);line-height:1.7">💡 <b>小提示：</b>${problem.hint}<br><span style="font-size:12px;color:var(--text-3)">再想想，你可以的！</span></div>`:''}
    <div id="mathSolveFeedback" style="margin-top:14px"></div>
  </div>`;
}

// ===== 阶段 4：数形结合讲解（Visual Explain）—— 核心 =====
function renderMathExplain(problem){
  const visual = (typeof MathVisual!=='undefined' && MathVisual.render)
    ? MathVisual.render(problem.visualType, problem.visualData)
    : '<div class="mv-empty">可视化引擎不可用</div>';
  const layers = _mathExplainLayers(problem);
  return `<div class="cpa-layer pictorial" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
    <span class="cpa-tag pictorial">STAGE 4 · 数形结合讲解</span>
    <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📊 用图形看清这道题的内在结构（动画播放中）</div>
    <div style="background:white;border-radius:14px;padding:8px;border:1px solid rgba(0,168,150,.15);box-shadow:0 6px 18px rgba(0,168,150,.08)">
      ${visual}
    </div>
    <div style="text-align:center;margin-top:8px">
      <button onclick="replayMathVisual()" style="padding:8px 18px;background:var(--teal-soft);color:var(--teal-700);border:1px solid rgba(0,168,150,.3);border-radius:18px;font-size:12px;font-weight:700;cursor:pointer">🎬 重新播放动画</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px">
      ${layers.map(l=>`
        <div style="padding:14px 16px;border-radius:12px;background:${l.bg};border-left:4px solid ${l.color}">
          <div style="font-size:13px;font-weight:800;color:${l.color};margin-bottom:6px">${l.icon} ${l.title}</div>
          <div style="font-size:14px;color:var(--ink-700);line-height:1.75">${l.text}</div>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center;margin-top:18px">
      <button onclick="mathAdvance('divergent')" style="padding:12px 28px;background:linear-gradient(135deg,var(--yellow),#FFD45E);color:var(--navy);border:none;border-radius:22px;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(245,184,0,.35)">
        💡 继续发散思维 →
      </button>
    </div>
  </div>`;
}

// 重新播放数形结合动画：通过 cloneNode 替换节点重置 CSS 动画（等同于移除再添加 class）
function replayMathVisual(){
  const wrap = document.querySelector('.mv-wrap');
  if(!wrap){ if(typeof toast==='function') toast('未找到可重播的动画'); return; }
  const animated = wrap.querySelectorAll('.mv-bar-rect,.mv-bar-text,.mv-area-block,.mv-bond-line,.mv-bond-part,.mv-bond-total,.mv-frac-fill,.mv-nl-point,.mv-geo-outline,.mv-circle-radius');
  animated.forEach(el=>{
    const clone = el.cloneNode(true);
    el.parentNode.replaceChild(clone, el);
  });
  if(typeof toast==='function') toast('🎬 动画已重新播放');
}

// ===== 阶段 5：发散思维（Divergent Thinking）—— 核心 =====
function renderMathDivergent(problem){
  const variants = problem.variants || [];
  if(!variants.length){
    return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--pink);color:white">STAGE 5 · 发散思维</span>
      <div style="text-align:center;padding:30px 16px;color:var(--text-2);font-size:14px">本题暂无变式题，直接挑战下一题</div>
      <div style="text-align:center">
        <button onclick="mathNextProblem()" style="padding:12px 28px;background:var(--teal);color:white;border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 16px rgba(0,168,150,.3)">挑战下一题 →</button>
      </div>
    </div>`;
  }
  const idx = Math.min(window.MATH_SESSION.divergentIdx||0, variants.length);
  if(idx >= variants.length) return _mathDivergentSummary(problem, variants);
  const v = variants[idx];
  const notes = window.MATH_SESSION.divergentNotes || [];
  return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
    <span class="cpa-tag" style="background:var(--pink);color:white">STAGE 5 · 发散思维</span>
    <div style="display:flex;align-items:center;gap:10px;margin:14px 0 10px">
      <div style="width:30px;height:30px;border-radius:50%;background:var(--pink);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px">${idx+1}</div>
      <div style="font-size:13px;color:var(--text-3);font-weight:600">变式题 ${idx+1} / ${variants.length} · 举一反三</div>
    </div>
    <div style="padding:16px 18px;background:linear-gradient(135deg,var(--pink),#F4C2D8);color:white;border-radius:12px;font-size:16px;font-weight:700;line-height:1.7">
      🔄 ${v.question}
    </div>
    <div style="margin-top:10px;font-size:13px;color:var(--text-2)">参考算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--navy)">${v.formula}</span> · 答案：<span style="font-weight:800;color:var(--teal)">${v.answer}</span></div>
    <div style="margin-top:16px;padding:14px 16px;background:var(--yellow-soft);border-radius:10px;border:1px dashed var(--yellow)">
      <div style="font-size:13px;font-weight:800;color:var(--yellow-700);margin-bottom:8px">🤔 想一想：这道题和刚才的原题，<b>哪里一样？哪里不一样？</b></div>
      <textarea id="mathDivergentInput" placeholder="说说你的发现..." style="width:100%;min-height:72px;padding:10px 12px;border:1.5px solid rgba(245,184,0,.3);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box">${notes[idx]?String(notes[idx]).replace(/</g,'&lt;'):''}</textarea>
    </div>
    <div style="text-align:center;margin-top:14px;display:flex;gap:10px;justify-content:center">
      ${idx>0?`<button onclick="mathDivergentBack()" style="padding:10px 22px;background:white;border:1.5px solid var(--ink-100);color:var(--text-2);border-radius:20px;font-weight:700;cursor:pointer">← 上一题</button>`:''}
      <button onclick="mathDivergentNext()" style="padding:10px 28px;background:linear-gradient(135deg,var(--pink),var(--coral));color:white;border:none;border-radius:20px;font-weight:800;cursor:pointer;box-shadow:0 6px 16px rgba(232,160,191,.4)">${idx<variants.length-1?'下一道变式 →':'查看举一反三总结 →'}</button>
    </div>
  </div>`;
}

// 发散思维：下一题（保存当前笔记）
function mathDivergentNext(){
  const ta = document.getElementById('mathDivergentInput');
  const note = ta ? ta.value.trim() : '';
  if(!window.MATH_SESSION.divergentNotes) window.MATH_SESSION.divergentNotes = [];
  window.MATH_SESSION.divergentNotes[window.MATH_SESSION.divergentIdx] = note;
  window.MATH_SESSION.divergentIdx = (window.MATH_SESSION.divergentIdx||0) + 1;
  updateMathStage();
}
// 发散思维：上一题（保存当前笔记后回退）
function mathDivergentBack(){
  if((window.MATH_SESSION.divergentIdx||0) <= 0) return;
  const ta = document.getElementById('mathDivergentInput');
  if(!window.MATH_SESSION.divergentNotes) window.MATH_SESSION.divergentNotes = [];
  if(ta) window.MATH_SESSION.divergentNotes[window.MATH_SESSION.divergentIdx] = ta.value.trim();
  window.MATH_SESSION.divergentIdx--;
  updateMathStage();
}

// 举一反三总结页
function _mathDivergentSummary(problem, variants){
  const notes = window.MATH_SESSION.divergentNotes || [];
  const method = _mathMethodName(problem);
  return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .5s ease">
    <span class="cpa-tag concrete">🎉 举一反三 · 总结</span>
    <div style="margin:16px 0;padding:18px 20px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-radius:14px;border:1px solid rgba(0,168,150,.18)">
      <div style="font-size:15px;font-weight:800;color:var(--navy);margin-bottom:10px">🌟 你发现了什么？</div>
      <div style="font-size:14px;color:var(--ink-700);line-height:1.85">
        原题考的是 <b style="color:var(--teal)">${problem.knowledge}</b>，核心方法是 <b style="color:var(--coral)">${method}</b>。<br>
        ${variants.length} 道变式题虽然<b>数字和情境变了</b>，但<b style="color:var(--teal)">解题思路是一样的</b>：${problem.hint}<br>
        <span style="color:var(--text-2)">💡 学会一类题的通法，比刷一百道题更有用！</span>
      </div>
    </div>
    ${notes.filter(Boolean).length?`
      <div style="margin-top:12px">
        <div style="font-size:13px;font-weight:800;color:var(--text-2);margin-bottom:8px">📝 你的思考记录：</div>
        ${notes.map((n,i)=>n?`<div style="padding:10px 14px;background:white;border-radius:10px;margin-bottom:6px;font-size:13px;color:var(--ink-700);border-left:3px solid var(--pink)"><b>变式 ${i+1}：</b>${String(n).replace(/</g,'&lt;')}</div>`:'').join('')}
      </div>
    `:''}
    <div style="text-align:center;margin-top:18px">
      <button onclick="mathNextProblem()" style="padding:13px 34px;background:linear-gradient(135deg,var(--teal),#14C3B2);color:white;border:none;border-radius:24px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 8px 22px rgba(0,168,150,.35)">
        🚀 挑战下一题 →
      </button>
    </div>
  </div>`;
}

// ===== 统一答题处理（选择 / 填空通用入口） =====
// kind: 'discovery' | 'solve' ；chosenIdx/correctIdx 为选项在 choices 中的下标
function mathAnswer(el, chosenIdx, correctIdx, kind, stepIdx){
  const isCorrect = chosenIdx === correctIdx;
  const container = el.parentElement;
  if(container){
    container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
    el.classList.add(isCorrect?'correct':'wrong');
    // 解题阶段答错时揭示正确答案；发现阶段不揭示，让孩子再想
    if(!isCorrect && kind==='solve'){
      container.querySelectorAll('.wp-choice').forEach(c=>{ if(parseInt(c.dataset.idx)===correctIdx) c.classList.add('correct'); });
    }
  }

  // ---- 发现阶段 ----
  if(kind==='discovery'){
    const fb = document.getElementById('mathDiscoveryFeedback');
    const steps = _mathDiscoverySteps(window.CURRENT_MATH_PROBLEM);
    const step = steps[stepIdx] || steps[0];
    if(fb){
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">✅ <b>说得好！</b>${step.explain}</div>`
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">💪 再想想，回头看看场景里的关键信息</div>`;
    }
    if(isCorrect){
      setTimeout(()=>{
        const next = stepIdx + 1;
        if(next >= steps.length){
          mathAdvance('solve');
        }else{
          window.MATH_SESSION.discoveryStep = next;
          updateMathStage();
        }
      }, 900);
    }
    return;
  }

  // ---- 解题阶段 ----
  const problem = window.CURRENT_MATH_PROBLEM || {};
  const timeUsed = Math.max(1, Math.round((Date.now() - (window.MATH_SESSION.startTs||Date.now()))/1000));
  const fb = document.getElementById('mathSolveFeedback');
  const wdQuestion = {
    subject:'math', knowledge:problem.knowledge || '未知知识点',
    difficulty:String(problem.difficulty||'medium'), visualType:problem.visualType||'barModel'
  };

  if(isCorrect){
    // 记录答题到漏洞检测引擎
    try{ WeaknessDetector.recordAnswer(S, wdQuestion, window.MATH_SESSION.hintUsed ? 'hint' : 'correct', timeUsed); }catch(e){}
    setStar(3, '数学场景题');
    if(fb){
      // 数形结合预览：答对后立即展示小图，引导用户进入阶段4看完整动画
      const previewVisual = (typeof MathVisual!=='undefined' && MathVisual.render && problem.visualType)
        ? `<div style="margin-top:12px;max-height:130px;overflow:hidden;border-radius:10px;border:1px dashed var(--teal);opacity:.9;pointer-events:none">${MathVisual.render(problem.visualType, problem.visualData)}</div>`
        : '';
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:15px;color:var(--teal-700);font-weight:700;line-height:1.7">🎉 <b>答对了！</b>用时 ${timeUsed} 秒 · +3 ⭐<br><span style="font-size:13px;font-weight:500;color:var(--text-2)">接下来用图形看清这道题的内在结构</span></div>${previewVisual}<div style="margin-top:8px;text-align:center;font-size:12px;color:var(--teal-700);font-weight:700">⬇️ 数形结合预览 · 即将进入阶段4查看完整动画</div>`;
    }
    setTimeout(()=>mathAdvance('explain'), 1100);
  }else{
    window.MATH_SESSION.hintUsed = true;
    window.MATH_SESSION.solveAttempts = (window.MATH_SESSION.solveAttempts||0) + 1;
    // 记录错误（每次错误都记录，供掌握度计算）
    try{ WeaknessDetector.recordAnswer(S, wdQuestion, 'wrong', timeUsed); }catch(e){}
    // 错题本去重后加入
    S.math.wrongProblems = S.math.wrongProblems || [];
    if(!S.math.wrongProblems.some(w=>w.q===problem.question)){
      S.math.wrongProblems.push({q:problem.question, a:String(problem.answer)});
      saveState();
    }
    try{ SpacedReview.add(S.currentProfileId||'default', 'math', problem.id||problem.question); }catch(e){}
    if(fb) fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">❌ 差一点点！已加入错题本。<b>看看下面的提示再试一次</b></div>`;
    // 重新渲染 solve 阶段，展示提示
    setTimeout(()=>updateMathStage(), 900);
  }
}

// ===== 辅助：场景 emoji =====
function _mathSceneEmoji(problem){
  const t = problem.visualType;
  const m = { barModel:'📊', areaModel:'⬛', numberBond:'🔗', fractionStrip:'🍰', numberLine:'📏', geometry:'📐' };
  if(m[t]) return m[t];
  const s = problem.scene || '';
  if(/草莓|蛋糕|饼干|苹果|果汁|牛奶|糖/.test(s)) return '🍓';
  if(/花坛|花圃|草坪|菜地|花园|花/.test(s)) return '🌺';
  if(/时钟|时|分|秒|火车|出发|温度|体温/.test(s)) return '🕐';
  if(/鱼缸|水杯|圆柱|圆锥|水/.test(s)) return '🥛';
  if(/地图|比例尺|鸽子|零件|校园|社区|公园/.test(s)) return '🗺️';
  if(/操场|座位|看台|报告厅|校服|班级|家长|同学|学校/.test(s)) return '🏟️';
  if(/鸡|兔|农场|饲养|动物/.test(s)) return '🐰';
  return '🧮';
}

// ===== 辅助：场景渐变背景 =====
function _mathSceneGradient(problem){
  const t = problem.visualType;
  if(t==='geometry')     return 'linear-gradient(135deg,var(--teal),var(--navy))';
  if(t==='fractionStrip')return 'linear-gradient(135deg,var(--coral),var(--pink))';
  if(t==='numberLine')   return 'linear-gradient(135deg,var(--yellow),var(--coral))';
  if(t==='numberBond')   return 'linear-gradient(135deg,var(--pink),var(--purple))';
  if(t==='areaModel')    return 'linear-gradient(135deg,var(--teal),var(--yellow))';
  return 'linear-gradient(135deg,var(--teal),#14C3B2)';
}

// ===== 辅助：场景引导性问题 =====
function _mathSceneLead(problem){
  return '你能从刚才的故事里，找到哪些关键的数和条件？';
}

// ===== 辅助：从算式提取运算方法名 =====
function _mathMethodName(problem){
  const f = (problem.formula||'').replace(/\s/g,'');
  if(f.indexOf('×')>=0) return '乘法';
  if(f.indexOf('÷')>=0) return '除法';
  if(f.indexOf('+')>=0) return '加法';
  if(f.indexOf('-')>=0) return '减法';
  return problem.knowledge || '计算';
}

// ===== 辅助：生成引导发现步骤（3 步：理解题意 / 找关键信息 / 选方法） =====
function _mathDiscoverySteps(problem){
  const f = (problem.formula||'').replace(/\s/g,'');
  const op = f.indexOf('×')>=0 ? '×' : f.indexOf('÷')>=0 ? '÷' : (f.indexOf('+')>=0 ? '+' : (f.indexOf('-')>=0 ? '-' : '＝'));
  const methodName = _mathMethodName(problem);

  // 稳定轮转：让正确答案不总在第 0 位（按 stepIdx 轮转，保证重渲染时位置一致）
  const rot = (arr, k)=>{ const n=arr.length; k=((k%n)+n)%n; return arr.slice(k).concat(arr.slice(0,k)); };

  // Step 1：理解题意 —— 选项为「正确问法 + 3 个干扰」
  const distractQ = ['求原来有多少','求相差多少','求平均每份是多少','求一共多少'].filter(x=>x!==problem.question);
  let c1 = [problem.question, ...distractQ.slice(0,3)];
  while(c1.length<4) c1.push('以上都不对');
  c1 = rot(c1, 1);

  // Step 2：找关键信息 —— 从算式提取关键数
  const nums = (f.match(/-?\d+(\.\d+)?/g)||[]).filter(n=>parseFloat(n)!==0);
  const keyInfo = `关键数：${nums.slice(0,4).join('、')}${nums.length>4?'...':''}（来自算式 ${problem.formula}）`;
  const c2 = rot([keyInfo, '没有给出任何数', '只有问题没有条件', '只有答案没有过程'], 2);

  // Step 3：选方法 —— 正确运算 + 其它运算干扰
  const otherMethods = ['加法','减法','乘法','除法','画图'].filter(m=>m!==methodName);
  const c3 = rot([methodName, ...otherMethods.slice(0,3)], 1);

  return [
    { q:'📖 再读一遍场景，这道题要我们求什么？', choices:c1, answer:problem.question, explain:`题目问的是：${problem.question}` },
    { q:'🔢 题目给了我们哪些关键的数和条件？', choices:c2, answer:keyInfo, explain:`从场景里能找到关键数，写出算式就是：${problem.formula}` },
    { q:'🧩 要解决这个问题，你觉得该用什么方法？', choices:c3, answer:methodName, explain:`看算式 ${problem.formula} 里有「${op}」，所以用${methodName}来解决。` }
  ];
}

// ===== 辅助：数形结合讲解三层（看图 / 理解 / 推广） =====
function _mathExplainLayers(problem){
  const t = problem.visualType;
  const vmap = { barModel:'条形模型', areaModel:'面积模型', numberBond:'数字 Bond', fractionStrip:'分数条', numberLine:'数轴', geometry:'几何图形' };
  const vname = vmap[t] || '可视化图形';
  const lookMap = {
    barModel:'看这个条形模型，整条被分成了几段不同颜色的色块，每段代表题目里的一个数量。',
    areaModel:'看这个面积模型，大长方形被切成了 4 个小长方形，每个小格代表一部分乘积。',
    numberBond:'看这个数字 Bond，顶部大圆是总数，下方几个小圆是分出来的部分。',
    fractionStrip:'看这条分数条，整体被平均分成了若干等份，涂色部分就是我们要的份数。',
    numberLine:'看这条数轴，关键点被标了出来，区间高亮表示了我们关心的范围。',
    geometry:'看这个几何图形，标注了边长、高或半径，图形的形状直接对应了公式。'
  };
  const understandMap = {
    barModel:'各段色块拼起来就是总数 —— 这就是「部分 + 部分 = 整体」的关系，加减法和分配都能这样看。',
    areaModel:'把两位数拆成「十位 × 个位」分别相乘，4 个小格的面积加起来就是总乘积 —— 拆分让计算更简单。',
    numberBond:'总数能分解成几个部分，反过来几个部分合起来就是总数 —— 加法和减法是一家人。',
    fractionStrip:'分母是平均分的总份数，分子是取的份数 —— 分数就是「部分占整体的比例」。',
    numberLine:'数轴上右边的数比左边大，两点之间的距离就是它们的差 —— 数的大小关系一目了然。',
    geometry:'周长是「一圈」的长度，面积是「铺满」的大小 —— 图形的边和角决定了它的所有性质。'
  };
  const generalizeMap = {
    barModel:'以后遇到「求总数」或「已知总数求部分」的题，都可以画条形模型帮助理解。',
    areaModel:'以后遇到两位数乘法，都可以拆成面积模型，分块相乘再相加。',
    numberBond:'以后遇到加减法关系，都可以用数字 Bond 看清「分与合」。',
    fractionStrip:'以后遇到分数的题，都可以画分数条，把抽象的分数变成看得见的份数。',
    numberLine:'以后遇到比大小、算距离、看温度的题，都可以借助数轴。',
    geometry:'以后遇到周长面积体积的题，都先画图形标数据，公式自然就出来了。'
  };
  return [
    { icon:'👀', title:'看图 — 图形结构', text:lookMap[t]||`看这个${vname}，它把题目里的数量关系变成了看得见的图形。`, bg:'var(--teal-soft)', color:'var(--teal)' },
    { icon:'🧠', title:'理解 — 数学关系', text:understandMap[t]||`图形揭示了题目里的数量关系。`, bg:'var(--yellow-soft)', color:'var(--yellow-700)' },
    { icon:'🚀', title:'推广 — 通用规律', text:generalizeMap[t]||`以后遇到这类题，都可以用${vname}帮助理解。`, bg:'var(--coral-soft)', color:'var(--coral)' }
  ];
}

function checkMathAnswer(el,val,answer){
  $$('#wpChoices .wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
  const problem = window.CURRENT_MATH_PROBLEM || {};
  const bm = problem.barModel || {};
  const isCorrect = val===answer;

  if(isCorrect){
    el.classList.add('correct');
    setStar(3);
    toast('答对了！+3 ⭐');
  }else{
    el.classList.add('wrong');
    $$('#wpChoices .wp-choice').forEach(c=>{if(parseInt(c.dataset.val)===answer)c.classList.add('correct')});
    const qText=document.querySelector('.wp-q')?.innerText||'数学应用题';
    S.math.wrongProblems.push({q:qText,a:String(answer)});
    saveState();
    try{ SpacedReview.add(S.currentProfileId||'default', 'math', qText); }catch(e){}
    toast('已加入错题本，正确答案已标出');
  }

  // ========== 生成答案讲解图形（数形结合核心） ==========
  const explEl = document.getElementById('wpExplanation');
  const explInner = document.getElementById('wpExplainInner');
  if(explEl && explInner && bm.ming){
    const f = (problem.formula||'').replace(/\s/g,'');
    let type = bm.type;
    if(!type){
      if(f.indexOf('×')>=0) type='multiply';
      else if(f.indexOf('÷')>=0) type='divide';
      else if(f.indexOf('-')>=0) type='subtract';
      else type='add';
    }
    const opSymbol = type==='multiply'?'×':type==='divide'?'÷':type==='add'?'+':'−';
    const a = bm.ming;
    const b = bm.diff;
    let barSvg = '';

    if(type==='multiply'){
      // 乘法：阵列可视化 + 条形模型
      const rows = Math.min(b,4);
      barSvg = `
        <svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:95px">
          <text x="4" y="12" font-size="10" font-weight="800" fill="#005047">📐 阵列模型 · ${b} 行 × ${a} 列</text>
          <g transform="translate(4,20)">
            ${Array(rows).fill(0).map((_,r)=>`
              <g transform="translate(0,${r*18})">
                ${Array(a).fill(0).slice(0,10).map((_,c)=>`
                  <rect x="${c*16}" y="0" width="14" height="14" rx="3" fill="${['#00A896','#F5B800','#8B5CF6','#EF5350'][r%4]}" opacity="0.78"/>
                `).join('')}
                <text x="${Math.min(a,10)*16+4}" y="11" font-size="10" font-weight="700" fill="#12263F">${a} 个</text>
              </g>
            `).join('')}
            <line x1="-2" y1="${rows*18+2}" x2="${Math.min(a,10)*16+40}" y2="${rows*18+2}" stroke="#12263F" stroke-width="1"/>
            <text x="${Math.min(a,10)*16/2}" y="${rows*18+15}" text-anchor="middle" font-size="10" font-weight="700" fill="#005047">共 ${a} × ${b} = ${answer} 个</text>
          </g>
        </svg>`;
    }else if(type==='divide'){
      // 除法：分组模型
      const groups = Math.min(b,5);
      const each = Math.floor(a/b);
      barSvg = `
        <svg viewBox="0 0 360 85" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:80px">
          <text x="4" y="12" font-size="10" font-weight="800" fill="#005047">📦 分组模型 · 把 ${a} 平均分成 ${b} 组</text>
          <g transform="translate(2,22)">
            ${Array(groups).fill(0).map((_,i)=>`
              <g transform="translate(${i*70},0)">
                <rect x="0" y="0" width="64" height="40" rx="8" fill="${['#00A896','#F5B800','#8B5CF6','#EF5350','#06B6D4'][i]}" opacity="0.15" stroke="${['#00A896','#F5B800','#8B5CF6','#EF5350','#06B6D4'][i]}" stroke-width="1.5"/>
                ${Array(Math.min(each,5)).fill(0).map((_,j)=>`
                  <circle cx="${10+j*11}" cy="20" r="5" fill="${['#00A896','#F5B800','#8B5CF6','#EF5350','#06B6D4'][i]}" opacity="0.85"/>
                `).join('')}
                <text x="32" y="56" text-anchor="middle" font-size="10" font-weight="800" fill="#12263F">每组 ${each}</text>
              </g>
            `).join('')}
          </g>
        </svg>`;
    }else{
      // 加减法：条形模型 Bar Model (新加坡数学核心)
      const total = a + (type==='add'? b : -b);
      const isAdd = type==='add';
      barSvg = `
        <svg viewBox="0 0 360 85" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:80px">
          <text x="4" y="12" font-size="10" font-weight="800" fill="#005047">📊 条形模型 Bar Model · 新加坡数学</text>
          <g transform="translate(4,22)">
            <!-- 总条 -->
            <rect x="0" y="0" width="340" height="26" rx="5" fill="#F5F7FA" stroke="#12263F" stroke-width="1.2"/>
            <!-- 第一段 -->
            <rect x="0" y="0" width="${Math.max(40,Math.round(a/(a+b)*340))}" height="26" rx="5" fill="#00A896" opacity="0.82"/>
            <text x="${Math.max(20,Math.round(a/(a+b)*170))}" y="17" text-anchor="middle" font-size="11" font-weight="900" fill="#fff">${a}</text>
            <!-- 分割线 -->
            <line x1="${Math.max(40,Math.round(a/(a+b)*340))}" y1="-2" x2="${Math.max(40,Math.round(a/(a+b)*340))}" y2="28" stroke="#12263F" stroke-width="1.5" stroke-dasharray="4 2"/>
            ${isAdd ? `
              <!-- 加法：第二段 -->
              <rect x="${Math.max(40,Math.round(a/(a+b)*340))}" y="0" width="${340-Math.max(40,Math.round(a/(a+b)*340))-1}" height="26" rx="5" fill="#F5B800" opacity="0.82"/>
              <text x="${Math.max(40,Math.round(a/(a+b)*340)) + (340-Math.max(40,Math.round(a/(a+b)*340)))/2}" y="17" text-anchor="middle" font-size="11" font-weight="900" fill="#12263F">+ ${b}</text>
            ` : `
              <!-- 减法：去掉的部分用红色叉 -->
              <rect x="${Math.max(40,Math.round(a/(a+b)*340))}" y="0" width="${340-Math.max(40,Math.round(a/(a+b)*340))-1}" height="26" rx="5" fill="#EF5350" opacity="0.25"/>
              <text x="${Math.max(40,Math.round(a/(a+b)*340)) + (340-Math.max(40,Math.round(a/(a+b)*340)))/2}" y="17" text-anchor="middle" font-size="11" font-weight="900" fill="#B91C1C">− ${b} 吃掉</text>
              <path d="M${Math.max(40,Math.round(a/(a+b)*340))+4} 4 L${336} 22 M${Math.max(40,Math.round(a/(a+b)*340))+4} 22 L${336} 4" stroke="#B91C1C" stroke-width="1.8" opacity="0.6"/>
            `}
            <!-- 大括号箭头 -->
            <path d="M0 32 L0 42 L340 42 L340 32" fill="none" stroke="#00A896" stroke-width="1.8"/>
            <text x="170" y="58" text-anchor="middle" font-size="12" font-weight="900" fill="#005047">结果 = ${answer}</text>
          </g>
        </svg>`;
    }

    explInner.innerHTML = `
      <div style="margin-bottom:10px;display:flex;align-items:center;gap:8px">
        <span style="display:inline-block;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:800;background:${isCorrect?'#D1FAE5;color:#065F46':'#FEE2E2;color:#B91C1C'}">
          ${isCorrect?'✅ 正确回答':'❌ 再想一想'}
        </span>
        <span style="font-size:13px;font-weight:700;color:var(--navy)">答案讲解 · 数形结合</span>
      </div>
      ${barSvg}
      <div style="margin-top:12px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.8);border:1px solid rgba(30,58,95,.08);line-height:1.7">
        <div style="font-size:12px;color:var(--text-2);margin-bottom:4px">💡 解题步骤</div>
        <div style="font-size:13px;color:var(--text-1)">
          ① ${problem.scene || '理解题意'}<br>
          ② 列式：<b style="color:var(--navy)">${problem.formula || (a+' '+opSymbol+' '+b)}</b><br>
          ③ 用 ${type==='multiply'?'阵列':type==='divide'?'分组':'条形模型'} 理解含义：上面每段都有具体的数量<br>
          ④ 答案：<b style="color:var(--teal);font-size:15px">${answer}</b>
        </div>
      </div>
    `;
    explEl.style.display = 'block';
    explEl.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
}

let appleLeftCount=5,appleRightCount=3;
function addApple(side){
  if(side==='left'){appleLeftCount++;document.getElementById('appleLeft').insertAdjacentHTML('beforeend','<svg class="apple" viewBox="0 0 32 32"><circle cx="16" cy="18" r="11" fill="#FB923C"/><path d="M16 8 Q14 5 12 5" stroke="#5a3d2b" stroke-width="2" fill="none"/><path d="M18 6 Q22 4 24 8" fill="#10B981"/></svg>')}
  else{appleRightCount++;document.getElementById('appleRight').insertAdjacentHTML('beforeend','<svg class="apple" viewBox="0 0 32 32"><circle cx="16" cy="18" r="11" fill="#FB923C"/><path d="M16 8 Q14 5 12 5" stroke="#5a3d2b" stroke-width="2" fill="none"/><path d="M18 6 Q22 4 24 8" fill="#10B981"/></svg>')}
}

let pickedTile=null;
const PUZZLE_ANSWER=['🍎','🍎','🍎','➕','❓'];
function pickPuzzle(el,val){
  if(el.classList.contains('used'))return;
  $$('.puzzle-tile').forEach(t=>t.style.outline='');
  el.style.outline='3px solid var(--teal)';
  pickedTile={el,val};
}
function placePuzzle(idx){
  const slot=$$('.puzzle-slot')[idx];
  if(!pickedTile){
    if(slot.classList.contains('has')){
      const val=slot.dataset.val;
      slot.classList.remove('has');
      slot.innerText='';
      delete slot.dataset.val;
      const trayTile=$$('.puzzle-tile').find(t=>t.classList.contains('used')&&t.dataset.val===val);
      if(trayTile)trayTile.classList.remove('used');
      checkPuzzle();
    }
    return;
  }
  if(slot.classList.contains('has')){
    const oldVal=slot.dataset.val;
    const oldTile=$$('.puzzle-tile').find(t=>t.classList.contains('used')&&t.dataset.val===oldVal);
    if(oldTile)oldTile.classList.remove('used');
  }
  slot.classList.add('has');
  slot.innerText=pickedTile.val;
  slot.dataset.val=pickedTile.val;
  pickedTile.el.classList.add('used');
  pickedTile.el.style.outline='';
  pickedTile=null;
  checkPuzzle();
}
function checkPuzzle(){
  const slots=$$('.puzzle-slot');
  const board=$('#puzzleBoard');
  let filled=true,correct=true;
  slots.forEach((s,i)=>{
    if(!s.classList.contains('has')){filled=false;return;}
    if(s.dataset.val!==PUZZLE_ANSWER[i]&&!(PUZZLE_ANSWER[i]==='🍎'&&s.dataset.val==='🍎'))correct=false;
  });
  const slot3=slots[3].dataset.val;
  const slot4=slots[4].dataset.val;
  const hasApples=slots[0].dataset.val==='🍎'&&slots[1].dataset.val==='🍎'&&slots[2].dataset.val==='🍎';
  const isOK=filled&&hasApples&&slot3==='➕'&&(slot4==='🍎'||slot4==='❓