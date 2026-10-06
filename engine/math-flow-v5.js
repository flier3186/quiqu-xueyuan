// engine/math-flow-v5.js · 奇趣学园 V5 数学引擎
// 数学教学流程 V5：7 阶段（每日 25 分钟）
// 阶段：0昨日回顾 → 1数学阅读+数感预热 → 2引导发现 → 3正式解题 → 4数形结合讲解 → 5你来提问 → 6阶梯练习
// 附加：苏格拉底式追问（L4 做错触发）、教小伙伴（表达度判定）、单元挑战（单元完成触发）
// 依赖全局：S / saveState / SpacedReview / MathVisualV5 / toast / setStar / WeaknessDetector（均做存在性兜底）
// 颜色统一用 CSS 变量；SVG 动画带 -webkit-transform-box:fill-box 前缀

// ===== 统一图形入口（2026-09-10 阶段 2）=====
// 既有可视化引擎优先；返回空时由「课程图母版库」用参数派生图形兜底。
// 目的：彻底消灭"教具/图形区整块空白"这一类问题，任何一道题都至少有图可看。
function _mvHTML(problem){
  if(!problem) return '';
  try{
    if(problem.visualType && problem.visualData && typeof MathVisualV5!=='undefined' && MathVisualV5.render){
      const h = MathVisualV5.render(problem.visualType, problem.visualData, problem);
      if(h && h.indexOf('mv-empty') < 0) return h;
    }
  }catch(e){}
  try{
    if(typeof MathDiagramMaster!=='undefined' && MathDiagramMaster.renderFor){
      const r = MathDiagramMaster.renderFor(problem,{dynamic:false});
      if(r && r.html) return r.html;
    }
  }catch(e){}
  return '';
}

window.MathFlowV5 = {

  // ===== 会话状态（断点续学） =====
  _sess: null,

  // ===== Neriage 独立错误库：按知识点分类的典型错误池 =====
  // 设计原则：错误解法与用户数据无关，每次从错误库随机抽取
  _ERROR_LIB: {
    '加减法': [
      { answer:'25', reason:'个位5+7=12，只写了2忘了进位', fix:'个位相加满十要向十位进1，十位3+4+1=8' },
      { answer:'58', reason:'把减法当成加法做了', fix:'注意运算符号，减法要退位' },
      { answer:'33', reason:'数位没对齐，个位和十位混加了', fix:'相同数位才能直接相加减' },
    ],
    '乘法': [
      { answer:'18', reason:'乘法口诀记错了，6×3应该是18但写成了16', fix:'背熟乘法口诀表，6×3=18' },
      { answer:'36', reason:'忘记进位，个位4×3=12只写了2', fix:'个位相乘满十要向十位进1' },
      { answer:'24', reason:'把乘法当加法做了', fix:'注意区分乘号和加号' },
    ],
    '除法': [
      { answer:'5余3', reason:'商的位置写错了，应该是6余1', fix:'从高位除起，不够商1就看前两位' },
      { answer:'3', reason:'余数比除数大了，还可以再商1', fix:'余数必须比除数小' },
      { answer:'12', reason:'试商偏大减不够，直接用除数改商', fix:'试商要合适，不够减就调小' },
    ],
    '分数': [
      { answer:'2/6', reason:'分子分母同时加了相同的数', fix:'分数相加要先通分，分母不变分子相加' },
      { answer:'3/4', reason:'把分子分母直接相加', fix:'异分母分数相加必须先通分' },
      { answer:'5/8', reason:'约分没约到底，还可以继续约', fix:'约分到分子分母互质为止' },
    ],
    '几何': [
      { answer:'18cm', reason:'周长和面积搞混了，这是求面积不是周长', fix:'面积用底×高，周长是各边相加' },
      { answer:'24cm', reason:'忘记除以2，三角形面积=底×高÷2', fix:'三角形面积公式要记得除以2' },
      { answer:'20cm²', reason:'单位写错了，面积单位应该是平方厘米', fix:'面积用平方单位，周长用长度单位' },
    ],
    '数位': [
      { answer:'400', reason:'百位上的数乘100应该是400，但写成了40', fix:'百位的计数单位是100不是10' },
      { answer:'5000', reason:'进率搞混了，百位到千位应该是10倍但写成了100倍', fix:'相邻数位进率是10' },
      { answer:'3', reason:'把万以内的数读成了三位数', fix:'读数时要注意数位顺序' },
    ],
    '默认': [
      { answer:'一个运算顺序弄错的结果', reason:'算错了，可能是运算顺序错了', fix:'按正确的运算顺序重新计算' },
      { answer:'一个单位弄错的结果', reason:'单位换算错了', fix:'检查单位换算是否正确' },
      { answer:'一个看错数字的结果', reason:'审题不清，看错了数字或符号', fix:'仔细读题，圈出关键数字和符号' },
    ],
  },
  // 从错误库按知识点随机抽取一个错误
  _pickError(knowledge){
    if(!knowledge) knowledge = '默认';
    // 模糊匹配知识点
    const keys = Object.keys(this._ERROR_LIB);
    let matchedKey = keys.find(k => knowledge.indexOf(k) >= 0);
    if(!matchedKey){
      // 反向匹配：检查错误库的key是否在知识点中
      matchedKey = keys.find(k => k !== '默认' && k.indexOf(knowledge) >= 0);
    }
    const pool = this._ERROR_LIB[matchedKey || '默认'];
    return pool[Math.floor(Math.random() * pool.length)];
  },

  // ===== 主流程控制器：初始化会话，返回当前阶段 HTML =====
  start(problem, profileId){
    // 每次 start() 都强制创建新会话，避免断点续学导致同题循环
    this._sess = {
      stage: 'warmup',
      problem: problem,
      profileId: profileId || (typeof S!=='undefined' && S.profileId) || 'default',
      startTs: Date.now(),
      discoveryStep: 0,
      hintUsed: false,
      solveAttempts: 0,
      practiceLevel: 1,        // 1=L1基础 2=L2变式 3=L3进阶 4=L4陷阱
      practiceVisualShown: false, // L2 变式：先文字后图形
      socraticStep: 0,
      reviewDone: false,
      practiceIndex: 0,        // 当前练习题索引
      practiceTotal: 10,        // 总练习题数（下方按知识点题库池覆盖）
      practiceLevels: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],  // 练习级别序列（下方按池覆盖）
      practicePool: null,       // 同知识点去重题库池（避免 10 道子题全是同一题）
      rmeAnswered: false,       // RME选择题是否已回答
      neriageErrorClicked: false, // Neriage错误卡片是否已点击
      russianIdx: 0,            // 俄罗斯追问当前索引
      parentSettings: (typeof ParentPanel!=='undefined' && ParentPanel.getSettings) ? ParentPanel.getSettings() : {},
      studyMode: null,          // 学习模式：null=未选择, 'beginner'=刚学, 'intermediate'=学过但卡住, 'advanced'=已熟练
      rmeTimeoutTimer: null,    // RME超时定时器
    };
    // 构建"同知识点去重题库池"：每个主问题做练习时，从池中抽不同题，
    // 避免概念题（无公式可变异）出现"10 道子题完全一样"的重复（用户反馈：题目重复/循环重复）。
    try{
      const _pool = this._buildPracticePool(problem);
      this._sess.practicePool = _pool;
      this._sess.practiceTotal = Math.min(_pool.length, 10);
      this._sess.practiceLevels = _pool.map((_, i) => [1, 2, 3, 4][i % 4]);
      this._sess.practiceIndex = 0;
    }catch(e){ /* 兜底：保持原 10 道设置 */ }
    // 若有到期复习项，先进入昨日回顾（优先级：到期复习 > 微课卡 > 常规路径）
    let forced = null;
    try{
      if(profileId && typeof SpacedReview!=='undefined' && SpacedReview.getDue){
        const due = SpacedReview.getDue(profileId).filter(e=>e.type==='math');
        if(due.length>0) forced = 'review';
      }
    }catch(e){}
    // 检查是否需要显示学习状态选择
    const mathProfile = (S && S.math && S.math.mathProfile) || null;
    if(!mathProfile){
      // 首次使用，显示选择弹窗
      return this._renderStudyModeChoice(problem);
    }
    // 应用已保存的学习模式
    this._applyStudyMode(mathProfile.studyMode);
    // 修复：_applyStudyMode 会无条件改写 stage，旧版因此把"到期复习"覆盖掉、永远进不去。
    // 现在把复习/微课卡作为显式覆盖层，压在模式默认路径之上。
    if(forced){
      this._sess.stage = forced;
    } else if(this.needsMicrocard(problem) && !this._skipGuideOn()){
      this._sess.stage = 'microcard';
    }
    this._saveProgress();
    return this.renderCurrent();
  },

  // ===== 学习状态选择弹窗 =====
  _renderStudyModeChoice(problem){
    const q = this._escape(problem.title || problem.question || '这道题目');
    const html = `<div class="cpa-layer mode-choice-layer" style="border-left-color:var(--navy);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--navy);color:#fff">欢迎使用 · 选择你的学习方式</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">我们会根据你的选择调整学习路径</div>
      <div style="font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;padding:14px 16px;background:var(--teal-soft);border-radius:12px;margin-bottom:16px">
        📖 今天我们要学习：${q}
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
        <div onclick="MathFlowV5._chooseStudyMode('beginner')" style="padding:14px 16px;background:var(--teal-soft);border:2px solid var(--teal);border-radius:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='var(--teal)';this.style.color='#fff'" onmouseout="this.style.background='var(--teal-soft)';this.style.color='inherit'">
          <div style="font-size:14px;font-weight:700;color:var(--teal-700)">🌟 刚学这个知识点</div>
          <div style="font-size:12px;color:var(--text-2);margin-top:4px;font-weight:400">完整学习路径：从情境导入一步步来</div>
        </div>
        <div onclick="MathFlowV5._chooseStudyMode('intermediate')" style="padding:14px 16px;background:var(--yellow-soft);border:2px solid var(--yellow);border-radius:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='var(--yellow)';this.style.color='var(--navy)'" onmouseout="this.style.background='var(--yellow-soft)';this.style.color='inherit'">
          <div style="font-size:14px;font-weight:700;color:var(--navy)">💪 学过但不太会</div>
          <div style="font-size:12px;color:var(--text-2);margin-top:4px;font-weight:400">跳过RME建模，直接看别人的解法</div>
        </div>
        <div onclick="MathFlowV5._chooseStudyMode('advanced')" style="padding:14px 16px;background:var(--coral-soft);border:2px solid var(--coral);border-radius:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='var(--coral)';this.style.color='#fff'" onmouseout="this.style.background='var(--coral-soft)';this.style.color='inherit'">
          <div style="font-size:14px;font-weight:700;color:var(--coral)">🚀 已经很熟练了</div>
          <div style="font-size:12px;color:var(--text-2);margin-top:4px;font-weight:400">跳过基础环节，直接看多解法对比</div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-3);text-align:center">💡 以后可以在"设置"中随时修改学习模式</div>
    </div>`;
    return html;
  },
  // 选择学习模式
  _chooseStudyMode(mode){
    if(S && S.math){
      S.math.mathProfile = { studyMode: mode, setAt: Date.now() };
      if(typeof saveState==='function') saveState();
    }
    this._applyStudyMode(mode);
    this._saveProgress();
    try{
      if(typeof updateMathStageV5==='function'){ updateMathStageV5(); return; }
      const container = document.getElementById('mathStage');
      if(container){
        container.innerHTML = this.renderCurrent();
        try{ if(window.MathManipulative) MathManipulative.init(container); }catch(e){}
      }
    }catch(e){
      this.advance(this._sess.stage);
    }
  },
  // 应用学习模式到会话流程
  _applyStudyMode(mode){
    if(!this._sess) return;
    this._sess.studyMode = mode;
    if(!this._sess.visited) this._sess.visited = [];
    const mark = st => { if(this._sess.visited.indexOf(st) < 0) this._sess.visited.push(st); };
    // 根据模式调整初始阶段
    if(mode === 'intermediate'){
      // 学过但卡住：跳过RME，从引导发现开始
      this._sess.stage = 'discover';
      mark('discover');
    } else if(mode === 'advanced'){
      // 已熟练：跳过RME+引导发现，直接从Neriage开始
      this._sess.stage = 'neriage';
      mark('neriage');
    } else {
      // 刚学：完整路径
      this._sess.stage = 'warmup';
      mark('warmup');
    }
    // 家长开关「直接做题」：覆盖模式默认起点，直接进正式解题（P5-B2）
    if(this._skipGuideOn()){ this._sess.stage = 'solve'; mark('solve'); }
  },

  // ===== 当前阶段渲染分发 =====
  // 同一题、会话仍在 → 续用现有会话（只重绘当前阶段），避免任何一次中途 render
  // 触发 start() 把 stage 重置回 warmup —— 表现为"学到一半被打回热身"或"跳过导入"。
  // 只有题目变了、会话不存在、或尚未选学习模式时，才新建会话。
  _resumeOrStart(problem){
    try{
      const s = this._sess;
      const k = p => (p && (p.id || p.question)) ? String(p.id || p.question) : '';
      const hasProfile = !!(typeof S !== 'undefined' && S && S.math && S.math.mathProfile);
      const same = !!(s && s.problem && k(s.problem) === k(problem) && k(problem) !== '');
      if(hasProfile && same && s.stage){ return this.renderCurrent(); }
    }catch(e){}
    return this.start(problem);
  },
  renderCurrent(){
    const s = this._sess;
    if(!s || !s.problem) return '<div style="padding:30px;text-align:center;color:var(--text-2)">会话未开始，请先选择一道题</div>';
    const p = s.problem;
    switch(s.stage){
      case 'review':    return this.renderReview(s.profileId);
      case 'microcard': return this.renderMicrocard(p);
      case 'warmup':    return this.renderWarmup(p);
      case 'rme':       return this.renderRMEChoice(p);
      case 'discover':  return this.renderDiscover(p);
      case 'neriage':   return this._renderNeriage(p);
      case 'solve':     return this.renderSolve(p);
      case 'explain':   return this.renderExplain(p);
      // 2026-09-18：russian/askChild 口头环节已移除，旧会话断点兼容直接落 practice
      case 'russian':
      case 'askChild':  return this.renderPractice(p);
      case 'practice':  return this.renderPractice(p);
      case 'complete':  return this._renderComplete(p);
      default:          return this.renderWarmup(p);
    }
  },

  // ===== 推进阶段（每阶段完成后保存进度，支持断点续学） =====
  advance(stage){
    if(!this._sess) return;
    // 修复缺陷6：阶段白名单校验——拒绝已移除/非法的阶段值（如 divergent），
    // 防止写脏 _sess.stage 后 renderCurrent 的 default 分支静默渲染成热身。
    const _ALLOWED_STAGES = ['review','microcard','warmup','rme','discover','neriage','solve','explain','russian','askChild','practice','complete'];
    if(_ALLOWED_STAGES.indexOf(stage) < 0){
      if(typeof console !== 'undefined' && console.warn) console.warn('[MathFlowV5] 忽略未知阶段:', stage);
      return;
    }
    this._sess.stage = stage;
    // 记录"真实经过"的阶段，进度条只给真正走过的环节打勾（跳过的不算完成）
    if(!this._sess.visited) this._sess.visited = [];
    if(this._sess.visited.indexOf(stage) < 0) this._sess.visited.push(stage);
    // 进入新阶段重置相关子状态
    if(stage==='solve'){ this._sess.hintUsed=false; this._sess.solveAttempts=0; this._sess.startTs=Date.now(); }
    if(stage==='practice'){ this._sess.practiceLevel=1; this._sess.practiceVisualShown=false; this._sess.socraticStep=0; }
    this._saveProgress();
    // 立即刷新 UI（同步更新"上一步/下一步"按钮状态）
    try{
      if(typeof updateMathStageV5==='function') updateMathStageV5();
    }catch(e){}
  },

  // ===== 保存进度到 S.lastSession（断点续学） =====
  _saveProgress(){
    try{
      if(typeof S==='undefined' || !S) return;
      S.lastSession = S.lastSession || {};
      S.lastSession.mathV5 = {
        stage: this._sess.stage,
        problemQ: this._sess.problem && this._sess.problem.question,
        profileId: this._sess.profileId,
        ts: Date.now()
      };
      if(typeof saveState==='function') saveState();
    }catch(e){ /* 静默兜底 */ }
  },

  // ============================================================
  // 阶段 0：昨日回顾（3 分钟）
  // ============================================================
  renderReview(profileId){
    let due = [];
    try{
      if(profileId && typeof SpacedReview!=='undefined' && SpacedReview.getDue){
        due = SpacedReview.getDue(profileId).filter(e=>e.type==='math');
      }
    }catch(e){}
    if(!due.length){
      // 无到期复习项，直接进入预热
      return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
        <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 0 · 昨日回顾</span>
        <div style="margin:18px 0;padding:18px 20px;background:var(--teal-soft);border-radius:14px;text-align:center">
          <div style="font-size:16px;font-weight:700;color:var(--navy);margin-bottom:6px">🎉 今天没有到期的复习内容</div>
          <div style="font-size:13px;color:var(--text-2)">直接开始今天的新知识吧！</div>
        </div>
        <div style="text-align:center;margin-top:14px">
          <button onclick="MathFlowV5._afterReview()" style="padding:12px 28px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 16px rgba(37,112,232,.3)">开始学习 →</button>
        </div>
      </div>`;
    }
    const first = due[0];
    const key = first.key || '上一课内容';
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 0 · 昨日回顾</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">⏰ 3 分钟 · 复习到期知识点</div>
      <div style="padding:18px 20px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-radius:14px;border:1px solid rgba(0,168,150,.18)">
        <div style="font-size:15px;font-weight:800;color:var(--navy);margin-bottom:10px">📖 还记得这个知识点吗？</div>
        <div style="font-size:16px;color:var(--teal-700);font-weight:700;padding:10px 14px;background:#fff;border-radius:10px">${this._escape(key)}</div>
        <div style="margin-top:12px;font-size:13px;color:var(--text-2);line-height:1.7">回忆一下：这个知识点的核心方法是什么？想好了就点下面按钮验证一下 👇</div>
      </div>
      <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center">
        <button onclick="MathFlowV5._reviewMark(true)" style="padding:10px 22px;background:var(--teal);color:#fff;border:none;border-radius:20px;font-weight:700;cursor:pointer">✅ 我想起来了</button>
        <button onclick="MathFlowV5._reviewMark(false)" style="padding:10px 22px;background:var(--coral);color:#fff;border:none;border-radius:20px;font-weight:700;cursor:pointer">😅 有点忘了</button>
      </div>
    </div>`;
  },
  // 昨日回顾结果处理
  _reviewMark(correct){
    try{
      if(this._sess.profileId && typeof SpacedReview!=='undefined' && SpacedReview.getDue){
        const due = SpacedReview.getDue(this._sess.profileId).filter(e=>e.type==='math');
        if(due[0] && SpacedReview.markResult){
          SpacedReview.markResult(this._sess.profileId, 'math', due[0].key, correct);
        }
      }
    }catch(e){}
    if(typeof toast==='function') toast(correct?'✅ 记得很牢！进入新课':'💪 忘了没关系，重新学一遍');
    this._afterReview();
  },
  // 复习之后：新知识点先看微课卡，否则直接进预热
  _afterReview(){
    if(this._skipGuideOn()){ this.advance('solve'); return; }
    this.advance(this.needsMicrocard(this._sess && this._sess.problem) ? 'microcard' : 'warmup');
  },

  // ============================================================
  // 阶段 0.5：微课卡（60-90 秒 · 新知识点首次出现前）
  // ============================================================
  // 设计依据（借鉴猿辅导/作业帮"先讲后练"）：新知识点直接上题，孩子手里没有可模仿的
  // 心智模型，只能靠猜。所以第一次遇到某个知识点时先给一张引导卡：
  //   ① 这个概念是什么、为什么值得学（knowledgeMap.concept / coreLiteracy）
  //   ② 这类题用什么图形表示（visualStrategy + 一张条形图示例）
  //   ③ 一道"同知识点的另一道题"的整题示范（含算式与推理步骤）
  // 硬约束：卡里出现的图形与例题必须是"另一道题"或抽象示意，绝不展示今天这道题的算式/答案。
  _MICRO_KEY(){ return 'quiqu_micro_seen_v1'; },
  _microMap(){
    try{ return JSON.parse(localStorage.getItem(this._MICRO_KEY())||'{}') || {}; }catch(e){ return {}; }
  },
  _microPid(){
    return (this._sess && this._sess.profileId)
      || (typeof S!=='undefined' && S && S.currentProfileId)
      || 'default';
  },
  microSeen(kp){
    if(!kp) return true;
    const m = this._microMap();
    return !!(m[this._microPid()] && m[this._microPid()][kp]);
  },
  _markMicroSeen(kp){
    if(!kp) return;
    try{
      const m = this._microMap();
      const pid = this._microPid();
      m[pid] = m[pid] || {};
      m[pid][kp] = Date.now();
      localStorage.setItem(this._MICRO_KEY(), JSON.stringify(m));
    }catch(e){}
  },
  // 是否需要微课卡：非"已熟练"模式 + 该知识点从未看过
  // 家长设置：是否跳过前置引导直接做题（P5-B2；到期复习优先级仍最高）
  _skipGuideOn(){
    try{ return !!(this._sess && this._sess.parentSettings && this._sess.parentSettings.skipGuide); }catch(e){ return false; }
  },
  needsMicrocard(problem){
    try{
      if(!problem || !problem.knowledge) return false;
      const mode = (this._sess && this._sess.studyMode)
        || (typeof S!=='undefined' && S.math && S.math.mathProfile && S.math.mathProfile.studyMode)
        || 'beginner';
      if(mode === 'advanced') return false;
      return !this.microSeen(problem.knowledge);
    }catch(e){ return false; }
  },
  // 知识点元数据：concept / visualStrategy / coreLiteracy / prerequisite / extends
  _knowledgeMeta(problem){
    try{
      const sem = (problem && problem.semester) || (window.MATH_SESSION && window.MATH_SESSION.semKey) || '';
      const d = window.MATH_BY_GRADE && window.MATH_BY_GRADE[sem];
      const map = d && d.knowledgeMap;
      if(!map) return null;
      const k = String(problem.knowledge || '');
      for(const key in map){ const v = map[key]; if(v && (v.name === k || v.id === k)) return v; }
      // 退化匹配：名称互相包含（题库知识点名与知识图偶有措辞差异）
      for(const key in map){ const v = map[key]; if(v && v.name && k && (v.name.indexOf(k)>=0 || k.indexOf(v.name)>=0)) return v; }
      return null;
    }catch(e){ return null; }
  },
  // 找一道"同知识点的另一道题"作为引导例（题干必须与今天这道不同）
  _microSibling(problem){
    try{
      const sem = (problem && problem.semester) || (window.MATH_SESSION && window.MATH_SESSION.semKey) || '';
      let pool = (typeof _mathDailyPool === 'function') ? _mathDailyPool(sem) : null;
      if((!pool || !pool.length) && window.MATH_BY_GRADE && window.MATH_BY_GRADE[sem]) pool = window.MATH_BY_GRADE[sem].problems;
      if(!pool || !pool.length) return null;
      const k = problem.knowledge;
      const cur = String(problem.question || '').trim();
      let cands = pool.filter(p => p && p.knowledge === k
        && String(p.question||'').trim()
        && String(p.question||'').trim() !== cur);
      if(!cands.length) return null;
      // 关键防护：示范题不能把今天的答案说漏 —— 排除"答案相同""算式相同"，
      // 以及图形数据里出现今天答案数字的候选。找不到安全候选就宁可不给示范。
      const curAns = Number(problem.answer);
      const curF = String(problem.formula || '');
      const hitAns = x => {
        if(!isFinite(curAns)) return false;
        const vd = x.visualData || {};
        const vals = [vd.total];
        (vd.parts || vd.bars || []).forEach(q => { if(q) vals.push(q.val != null ? q.val : q.value); });
        return vals.some(v => v != null && Number(v) === curAns);
      };
      const safe = cands.filter(p => String(p.answer) !== String(problem.answer)
        && String(p.formula || '') !== curF && !hitAns(p));
      if(!safe.length) return null;
      cands = safe;
      // 优先能给图形 + 有推理链的（示范效果最好），并且数字小一点更易看懂
      const score = x => ((x.visualData && (x.visualData.parts || x.visualData.bars)) ? 4 : 0)
        + ((Array.isArray(x.discoverySteps) && x.discoverySteps.length) ? 2 : 0)
        + ((String(x.question||'').length <= 26) ? 1 : 0);
      cands.sort((a,b)=> score(b) - score(a));
      return cands[0];
    }catch(e){ return null; }
  },
  // 示范图：用"另一道题"的图形数据，且不做答案掩码（整题示范是本意）
  _microDemo(sib){
    try{
      if(!sib || !sib.visualData) return '';
      if(typeof MathVisualV5 === 'undefined' || !MathVisualV5.render) return '';
      const demo = Object.assign({}, sib, { answer: null });
      const data = Object.assign({}, sib.visualData);
      if(Array.isArray(data.parts)) data.parts = data.parts.map(p => Object.assign({}, p));
      if(Array.isArray(data.bars))  data.bars  = data.bars.map(p => Object.assign({}, p));
      const html = MathVisualV5.render(sib.visualType || 'barModel', data, demo);
      if(!html || html.indexOf('mv-empty') >= 0) return '';
      return html;
    }catch(e){ return ''; }
  },
  // 没有同类题时退回一张抽象示意（自造数字，且主动避开今天的答案，零泄漏风险）
  _microDemoGeneric(problem){
    try{
      if(typeof MathVisualV5 === 'undefined' || !MathVisualV5.render) return '';
      const ans = Number(problem && problem.answer);
      // 候选示意数字，逐个排除与今天答案相同的
      let a = 20, b = 25;
      if(isFinite(ans)){
        if(a === ans) a = 24;
        if(b === ans) b = 30;
        if(!isFinite(a)) a = 20;
        if(a + b === ans){ a += 4; b += 6; }
        if(a === ans) a += 2;
        if(b === ans) b += 2;
      }
      const html = MathVisualV5.render('barModel',
        { total: a + b, parts: [{label:'部分 A', val:a, color:'#2570E8'}, {label:'部分 B', val:b, color:'#F5B800'}] },
        { answer: null });
      if(!html || html.indexOf('mv-empty') >= 0) return '';
      return html;
    }catch(e){ return ''; }
  },
  // 泄漏兜底：把 HTML 的可见文本抽出来，查今天的答案是否作为一个独立 token 出现。
  // 用于拦"示范图里恰好标出了今天的答案"这类巧合（数字或中文答案都覆盖）。
  _microLeaksAnswer(html, problem){
    try{
      const ans = String(problem && problem.answer == null ? '' : problem.answer).trim();
      if(!ans || !html) return false;
      const visible = String(html).replace(/<[^>]*>/g, ' ');
      const re = new RegExp('(?<![0-9A-Za-z.])' + ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![0-9A-Za-z.])');
      return re.test(visible);
    }catch(e){ return false; }
  },
  renderMicrocard(problem){
    const kp = problem.knowledge || '新知识';
    try{ this._markMicroSeen(kp); }catch(e){}
    const km = this._knowledgeMeta(problem) || {};
    const sib = this._microSibling(problem);
    // 示范图选型 + 泄漏兜底：渲染出来后按"可见文本 token"再查一遍今天的答案
    // （数字答案由 _microSibling 的 hitAns 预过滤；文字答案如"西"在这里兜住）
    let demo = this._microDemo(sib);
    if(demo && this._microLeaksAnswer(demo, problem)) demo = '';
    if(!demo) demo = this._microDemoGeneric(problem);
    const steps = (sib && Array.isArray(sib.discoverySteps)) ? sib.discoverySteps.filter(s => s && (s.q || s.explain)).slice(0,4) : [];
    const chip = (label, val) => `<div style="flex:1;min-width:150px;padding:10px 12px;background:var(--teal-soft);border-radius:10px;border:1px solid rgba(37,112,232,.14)">
      <div style="font-size:11px;font-weight:800;color:var(--teal-700);margin-bottom:3px">${this._escape(label)}</div>
      <div style="font-size:12.5px;color:var(--ink-700);line-height:1.6">${this._escape(val)}</div></div>`;
    const example = sib ? `
      <div style="margin-top:14px;padding:14px 16px;background:#fff;border:1.5px solid rgba(37,112,232,.2);border-radius:12px">
        <div style="font-size:12px;font-weight:800;color:var(--teal-700);margin-bottom:8px">👀 跟着看一道同类题（这不是今天要做的题）</div>
        <div style="font-size:14px;color:var(--navy);font-weight:700;line-height:1.7">${this._escape(sib.question)}</div>
        ${sib.formula?`<div style="margin-top:8px;font-size:14px;color:var(--text-2)">算式：<b style="color:var(--teal);font-family:'Inter',sans-serif">${this._escape(String(sib.formula))}</b></div>`:''}
        ${sib.answer!=null?`<div style="margin-top:4px;font-size:13px;color:var(--teal-700);font-weight:700">答：${this._escape(String(sib.answer))}</div>`:''}
        ${steps.length?`<div style="margin-top:10px;border-top:1px dashed var(--ink-200);padding-top:9px;display:flex;flex-direction:column;gap:7px">
          ${steps.map((s,i)=>`<div style="font-size:12.5px;color:var(--text-2);line-height:1.7"><b style="color:var(--teal-700)">${i+1}. </b>${this._escape(s.q||'')}${s.explain?` <span style="color:var(--text-3)">${this._escape(s.explain)}</span>`:''}</div>`).join('')}
        </div>`:''}
      </div>` : '';
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">微课卡 · 60 秒预习</span>
      <div style="margin:14px 0 10px;font-size:13px;color:var(--text-3);font-weight:600">🌟 60 秒 · 先看懂今天要学什么，再动手</div>
      <div style="padding:16px 18px;background:linear-gradient(135deg,var(--teal-soft),#fff);border-radius:14px;border:1px solid rgba(37,112,232,.16)">
        <div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:6px">今天的新知识</div>
        <div style="font-size:19px;font-weight:800;color:var(--navy);line-height:1.5">${this._escape(kp)}</div>
        ${km.concept?`<div style="margin-top:8px;font-size:14px;color:var(--ink-700);line-height:1.8">${this._escape(km.concept)}</div>`:''}
      </div>
      ${(km.visualStrategy||km.coreLiteracy||km.prerequisite)?`
      <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
        ${km.visualStrategy?chip('🧭 用什么图表示', km.visualStrategy):''}
        ${km.coreLiteracy?chip('🎯 练的是什么能力', km.coreLiteracy):''}
        ${km.prerequisite?chip('🔗 需要先会', km.prerequisite):''}
      </div>`:''}
      ${demo?`
      <div style="margin-top:14px;font-size:12px;font-weight:800;color:var(--teal-700)">📊 这类题的图形长这样</div>
      <div style="background:#fff;border-radius:12px;padding:6px;border:1px solid rgba(37,112,232,.14)">${demo}</div>
      <div style="text-align:center;font-size:12px;color:var(--text-3);margin-top:4px">整体 = 部分 + 部分 · 每条加起来和整体一样长就对了</div>`:''}
      ${example}
      ${km.extends?`<div style="margin-top:12px;padding:10px 14px;background:var(--yellow-soft);border-radius:10px;border-left:4px solid var(--yellow);font-size:12.5px;color:var(--yellow-700);line-height:1.7">🚀 学好这个，接下来会学：${this._escape(km.extends)}</div>`:''}
      <div style="text-align:center;margin-top:18px">
        <button onclick="MathFlowV5._finishMicrocard()" style="padding:12px 30px;background:linear-gradient(135deg,var(--teal),#4A8DFF);color:#fff;border:none;border-radius:22px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(37,112,232,.3)">看懂了，开始今天的题 →</button>
        <div style="font-size:11px;color:var(--text-3);margin-top:8px">🤫 今天的题要自己列算式，答完才会揭晓完整算式</div>
      </div>
    </div>`;
  },
  _finishMicrocard(){
    try{ this._markMicroSeen(this._sess && this._sess.problem && this._sess.problem.knowledge); }catch(e){}
    this.advance('warmup');
  },

  // ============================================================
  // 阶段 1：数学阅读 + 数感预热（3 分钟）
  // ============================================================
  // CPA 具象层（2026-09）：旧版场景阶段只有一个静态 emoji，孩子看不到"数量是怎么形成的"。
  // 这里把题里的数量变成逐个入场的实物并按组呈现 —— 具象阶段要能看、能动，不是插图。
  _concrete(problem){
    try{
      // 概念题（无数量关系）没有可操作的教具；旧版会把 parts[].val=null 画成「一部分 0」
      if(this._conceptEntry(problem)) return '';
      if(typeof window.MathManipulative === 'undefined' || !window.MathManipulative.scene) return '';
      const h = window.MathManipulative.scene(problem);
      return h || '';
    }catch(e){ return ''; }
  },
  // 可拖曳教具（探索用，不显示答案）
  _tool(problem){
    try{
      // 3D 几何教具优先（Q6-2）：长方体/正方体/圆柱/圆锥/圆 → 可拖拽旋转的立体教具
      if(typeof window.MathGeo3D !== 'undefined' && window.MathGeo3D.render){
        const g = window.MathGeo3D.render(problem);
        if(g) return g;
      }
      if(typeof window.MathManipulative === 'undefined' || !window.MathManipulative.render) return '';
      return window.MathManipulative.render(problem) || '';
    }catch(e){ return ''; }
  },
  // 作答前的教具（2026-09-10 新增）：
  // 旧版在 STAGE 3 正式解题（作答前）也挂十进制位值板/点阵，会显示总数 = 直接泄题，
  // 而且单步口算（3×6+4）挂方块等于"工具找题"。这里只放行不泄漏答案的形态：
  // 3D 几何（旋转看形状）与分数条；其余一律不出现，等答后到数形结合阶段再给。
  _solveTool(problem){
    try{
      if(typeof window.MathGeo3D !== 'undefined' && window.MathGeo3D.render){
        const g = window.MathGeo3D.render(problem);
        if(g) return g;
      }
      if(typeof window.MathManipulative === 'undefined' || !window.MathManipulative.renderSafe) return '';
      return window.MathManipulative.renderSafe(problem) || '';
    }catch(e){ return ''; }
  },

  renderWarmup(problem){
    const emoji = this._sceneEmoji(problem);
    const gradient = this._sceneGradient(problem);
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 1 · 数学阅读 + 数感预热</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📖 3 分钟 · 先读故事，再发现数学</div>
      <!-- 1a 阅读小故事（纯文字，培养读题能力） -->
      <div style="padding:18px 20px;background:linear-gradient(135deg,#FFF8E6,#fff);border-radius:14px;border:1px solid rgba(245,184,0,.25);margin-bottom:12px">
        <div style="font-size:12px;color:var(--yellow-700);font-weight:700;margin-bottom:8px">📖 1 分钟 · 读一读这个小故事</div>
        <div style="font-size:15px;color:var(--ink-700);line-height:1.85">${emoji} ${(typeof window!=='undefined'&&window._sceneLines)?window._sceneLines(problem.scene):this._escape(problem.scene)}</div>
      </div>
      <!-- 1a+ CPA 具象层：让数量动起来 -->
      ${this._concrete(problem)}
      <!-- 1b 场景图观察 + 开放提问 -->
      <div style="padding:16px 18px;background:var(--teal-soft);border-radius:12px;margin-bottom:12px">
        <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:8px">👀 1 分钟 · 你从故事里发现了什么？</div>
        <div style="font-size:14px;color:var(--navy);font-weight:600;margin-bottom:10px">想一想，故事里有哪些「数」和「量」？</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${this._warmupChips(problem)}
        </div>
      </div>
      <!-- 1c 引出今日知识点 -->
      <div style="padding:14px 16px;background:${gradient};border-radius:12px;color:#fff">
        <div style="font-size:12px;opacity:.9;font-weight:600;margin-bottom:4px">🌟 1 分钟 · 今天要学</div>
        <div style="font-size:16px;font-weight:800">${this._escape(problem.knowledge || '新知识')}</div>
        <div style="font-size:12px;opacity:.9;margin-top:4px">💡 学法提示：${this._escape(this._preHint(problem))}</div>
      </div>
      <div style="text-align:center;margin-top:16px">
        <button onclick="MathFlowV5.advance('rme')" style="padding:12px 28px;background:linear-gradient(135deg,var(--yellow),#FFD45E);color:var(--navy);border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(245,184,0,.35)">一起来发现 →</button>
      </div>
    </div>`;
  },
  // 解题前的"学法提示"：只给方向不给结果。
  // 2026-09 修复：旧版直接展示 problem.hint，而教材题库的 hint 字段写的是完整解析
  // （如「先算 3×6=18，再算 18+4=22」），等于在孩子作答前就把答案摊开了。
  _preHint(problem){
    if(!problem) return '先把题目读两遍，圈出关键数量。';
    if(typeof window._preSolvePrompt === 'function') return window._preSolvePrompt(problem);
    const f = String(problem.formula || '');
    if(!f) return '先把题目读两遍，圈出里面的关键数量。';
    if(/[×x*]/.test(f) && /[+\-]/.test(f)) return '这道题里既有乘法（或除法）又有加减法，先想想应该先算哪一步？';
    if(/[×x*]/.test(f)) return '想一想：这是"几个几"，还是"每份是多少"？';
    if(/÷/.test(f))     return '想一想：这是平均分，还是求里面有几个几？';
    return '先找出题目里的两个关键数量，想清楚它们是"合起来"还是"相差多少"。';
  },
  // 预热阶段：从场景提取关键数词，做成可点击小标签
  _warmupChips(problem){
    const nums = (problem.scene||'').match(/\d+(\.\d+)?/g) || [];
    const unique = [...new Set(nums)].slice(0,5);
    if(!unique.length) return '<span style="font-size:13px;color:var(--text-2)">故事里好像没有明显的数字，再仔细读一遍？</span>';
    return unique.map(n=>`<div onclick="this.style.background='var(--teal)';this.style.color='#fff'" style="padding:6px 14px;background:#fff;border:1.5px solid var(--teal);color:var(--teal-700);border-radius:16px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s">${n}</div>`).join('');
  },

  // ============================================================
  // 阶段 2：RME 自我建模（4 分钟）—— 情境题 + 数字输入，不评判对错
  // ============================================================
  renderRMEChoice(problem){
    const scene = this._escape(problem.scene || '');
    const hasRMEInput = this._sess.rmeAnswer != null;
    // 启动动态超时检测（8分钟）
    this._startRMETimeout();
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 2 · 自己列一列（RME 建模）</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">✏️ 4 分钟 · 在纸上画图或列算式，不用电脑</div>
      <div style="padding:16px 18px;background:linear-gradient(135deg,var(--teal-soft),#fff);border-radius:14px;border:1px solid rgba(0,168,150,.15);margin-bottom:14px">
        <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:8px">📖 仔细读题，在纸上用你自己的方法表示数量关系</div>
        <div style="font-size:15px;color:var(--navy);font-weight:700;line-height:1.7">${scene}</div>
      </div>
      ${hasRMEInput ? `<div style="padding:14px;background:var(--teal-soft);border-radius:12px;border-left:4px solid var(--teal);font-size:14px;color:var(--teal-700);font-weight:700">✅ 你提交了答案：${this._sess.rmeAnswer}。<span style="font-weight:400">现在看看老师是怎么用图形表示的吧！</span></div>` : `
      <div style="background:var(--yellow-soft);border-radius:12px;padding:12px 14px;margin-bottom:14px">
        <div style="font-size:13px;color:var(--navy);font-weight:600;margin-bottom:8px">💡 想好答案了吗？输入你算出的结果（不用管对不对）</div>
        <div style="display:flex;gap:8px">
          <input id="v5RMEAnswer" type="text" placeholder="输入答案..." style="flex:1;padding:12px 14px;border:2px solid var(--ink-100);border-radius:10px;font-size:16px;font-weight:600;color:var(--navy);outline:none" onkeydown="if(event.key==='Enter') MathFlowV5._rmeSubmit()">
          <button onclick="MathFlowV5._rmeSubmit()" style="padding:12px 20px;background:var(--teal);color:#fff;border:none;border-radius:10px;font-weight:800;cursor:pointer">提交</button>
        </div>
      </div>`}
      <div id="v5RMETimeoutHint" style="display:none;margin-top:12px;padding:12px 14px;background:var(--coral-soft);border-radius:10px;border-left:4px solid var(--coral);font-size:13px;color:var(--coral);line-height:1.7"></div>
      <div id="v5RMEFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // RME超时检测（8分钟）
  _startRMETimeout(){
    this._clearRMETimeout();
    if(this._sess.rmeAnswered) return;
    this._sess.rmeTimeoutTimer = setTimeout(()=>{
      const hint = document.getElementById('v5RMETimeoutHint');
      if(hint && !this._sess.rmeAnswered){
        hint.style.display = 'block';
        hint.innerHTML = '⏰ 时间差不多了！如果还没想好，可以先输入一个猜测的答案，或者点击下方按钮跳过，直接看讲解。<br><button onclick="MathFlowV5._rmeSkip()" style="margin-top:8px;padding:10px 20px;background:var(--coral);color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">跳过建模 →</button>';
      }
    }, 8 * 60 * 1000); // 8分钟
  },
  _clearRMETimeout(){
    if(this._sess && this._sess.rmeTimeoutTimer){
      clearTimeout(this._sess.rmeTimeoutTimer);
      this._sess.rmeTimeoutTimer = null;
    }
  },
  // 跳过RME直接进入下一阶段
  _rmeSkip(){
    this._clearRMETimeout();
    this._sess.rmeAnswer = '跳过';
    this._sess.rmeAnswered = true;
    this.advance('discover');
  },
  _rmeSubmit(){
    const input = document.getElementById('v5RMEAnswer');
    if(!input || !input.value.trim()){
      const fb = document.getElementById('v5RMEFeedback');
      if(fb) fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">请输入你的答案，哪怕是"?"也没关系</div>`;
      return;
    }
    const answer = input.value.trim();
    this._sess.rmeAnswer = answer;
    this._sess.rmeAnswered = true;
    const fb = document.getElementById('v5RMEFeedback');
    if(fb){
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">${this._rmeSubmitFeedback(answer)}<br><span style="font-size:12px;font-weight:400">（你的答案不会被评判，它只是帮助我们选择最适合你的讲解方式）</span></div>`;
    }
    // 先更新当前界面显示提交结果，然后跳转
    setTimeout(()=>{
      this.advance('discover');
      if(typeof updateMathStageV5==='function') updateMathStageV5();
    }, 1800);
  },
  _rmeSubmitFeedback(answer){
    const num = parseFloat(answer);
    const fb = this._sess.rmeFeedback;
    if(fb) return fb;
    if(!isNaN(num)){
      return `收到你的答案 ${answer}！很棒，勇敢尝试本身就是进步。`;
    }
    return '收到你的想法！每种思路都值得尊重，让我们看看标准的图形方法。';
  },

  // ============================================================
  // 阶段 2：引导发现（4 分钟）—— 3 步选择引导，从已知到未知
  // ============================================================
  renderDiscover(problem){
    const steps = this._discoverySteps(problem);
    const idx = Math.min((this._sess.discoveryStep||0), steps.length-1);
    const step = steps[idx];
    const correctIdx = step.choices.indexOf(step.answer);
    const nextIdx = idx + 1;
    const isLastStep = nextIdx >= steps.length;
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag pictorial">STAGE 2 · 引导发现</span>
      <div style="display:flex;align-items:center;gap:10px;margin:14px 0 8px">
        <div style="width:30px;height:30px;border-radius:50%;background:var(--yellow);color:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">${idx+1}</div>
        <div style="font-size:13px;color:var(--text-3);font-weight:600">第 ${idx+1} / ${steps.length} 步 · 自己想想看</div>
      </div>
      <div style="font-size:16px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:16px">${step.q}</div>
      <div class="wp-choices" id="v5DiscoveryChoices" style="grid-template-columns:repeat(2,1fr)">
        ${step.choices.map((c,i)=>`<div class="wp-choice" data-idx="${i}" onclick="MathFlowV5._discoverAnswer(this,${i},${correctIdx},${idx})">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5DiscoveryFeedback" style="margin-top:14px"></div>
      ${isLastStep ? `<div id="v5DiscoveryNextBtn" style="margin-top:16px;display:none">
        <button onclick="MathFlowV5.advance('${problem.neriageErrors||problem.neriage ? 'neriage' : 'solve'}')" style="width:100%;padding:14px;background:var(--teal);color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer">✦ 进入数形结合</button>
      </div>` : ''}
    </div>`;
  },
  // 发现阶段答题
  _discoverAnswer(el, chosenIdx, correctIdx, stepIdx){
    chosenIdx = parseInt(chosenIdx);
    correctIdx = parseInt(correctIdx);
    stepIdx = parseInt(stepIdx);
    const isCorrect = chosenIdx === correctIdx;
    try{ if(window.QuizMood) window.QuizMood[isCorrect?'right':'wrong'](); }catch(e){}
    const container = el.parentElement;
    if(container){
      container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
      el.classList.add(isCorrect?'correct':'wrong');
    }
    const fb = document.getElementById('v5DiscoveryFeedback');
    const steps = this._discoverySteps(this._sess.problem);
    const step = steps[stepIdx] || steps[0];
    if(fb){
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">✅ <b>说得好！</b>${this._escape(step.explain)}</div>`
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">💪 再想想，回头看看故事里的关键信息</div>`;
    }
    if(isCorrect){
      setTimeout(()=>{
        const next = stepIdx + 1;
        if(next >= steps.length){
          // 引导发现完成，若有 neriage 数据则进入多解法阶段
          const hasNeriage = this._sess.problem && (this._sess.problem.neriageErrors || this._sess.problem.neriage);
          this.advance(hasNeriage ? 'neriage' : 'solve');
        }else{
          this._sess.discoveryStep = next;
          this.advance('discover');
        }
      }, 900);
    }
  },

  // ============================================================
  // 阶段 2.5：Neriage 多解法+错误诊断（3 分钟）
  // ============================================================
  _renderNeriage(problem){
    const n = problem.neriage || {};
    const alternatives = n.alternatives || [];
    // 兼容新旧格式：新格式顶层 neriateErrors，旧格式 nested neriate
    const errors = n.neriateErrors || n.typical_errors || problem.neriageErrors || [];
    const methodA = n.methodA || (alternatives[0] || '标准解法');
    const methodB = n.methodB || (alternatives[1] || '巧算解法');
    // 优先使用题目指定错误，否则从独立错误库按知识点随机抽取
    const errorC = n.errorC || (errors.length > 0 ? errors[0] : this._pickError(problem.knowledge));

    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 2.5 · 多解法对比（Neriage）</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">💡 3 分钟 · 看看别人怎么想的，找出错误在哪</div>

      <!-- 3 张解法卡片 -->
      <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
        <div style="flex:1;min-width:140px;padding:14px;background:var(--teal-soft);border-radius:12px;border:2px solid var(--teal)">
          <div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:6px">✅ 标准解法</div>
          <div style="font-size:13px;color:var(--ink-700);line-height:1.6">${this._escape(methodA)}</div>
        </div>
        <div style="flex:1;min-width:140px;padding:14px;background:var(--teal-soft);border-radius:12px;border:2px solid var(--teal)">
          <div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:6px">✅ 巧算解法</div>
          <div style="font-size:13px;color:var(--ink-700);line-height:1.6">${this._escape(methodB)}</div>
        </div>
        ${errorC ? `
        <div id="v5NeriageErrorCard" onclick="MathFlowV5._showNeriageError()" style="flex:1;min-width:140px;padding:14px;background:var(--coral-soft);border-radius:12px;border:2px solid var(--coral);cursor:pointer;transition:all .2s">
          <div style="font-size:12px;font-weight:700;color:var(--coral);margin-bottom:6px">❌ 典型错误 · 点击诊断</div>
          <div style="font-size:13px;color:var(--coral-700);font-weight:700">答案：${errorC.answer != null ? this._escape(String(errorC.answer)) : '？'}</div>
          <div style="font-size:12px;color:var(--text-2);margin-top:4px">点我看看错在哪</div>
        </div>` : ''}
      </div>

      <!-- Neriage 错误诊断详情 -->
      <div id="v5NeriageErrorDetail" style="display:none;margin-bottom:14px">
        ${errorC ? `
        <div style="padding:16px;background:var(--coral-soft);border-radius:12px;border-left:4px solid var(--coral)">
          <div style="font-size:14px;font-weight:700;color:var(--coral);margin-bottom:8px">🔍 错误诊断</div>
          <div style="font-size:13px;color:var(--coral-700);line-height:1.7;margin-bottom:8px">❌ <b>错误答案：</b>${this._escape(String(errorC.answer))}</div>
          <div style="font-size:13px;color:var(--coral-700);line-height:1.7;margin-bottom:8px">💡 <b>错误原因：</b>${this._escape(errorC.reason)}</div>
          <div style="font-size:13px;color:var(--teal-700);line-height:1.7">✅ <b>正确做法：</b>${this._escape(errorC.fix)}</div>
        </div>
        <div style="margin-top:10px;padding:12px 14px;background:var(--teal-soft);border-radius:10px;font-size:13px;color:var(--teal-700);line-height:1.7">
          💬 追问：<b>这个错误答案是怎么来的？错在哪一步？</b>
        </div>` : ''}
      </div>

      <!-- 标准答案 -->
      <div style="padding:10px 14px;background:var(--yellow-soft);border-radius:8px;border-left:3px solid var(--yellow);font-size:13px;color:var(--yellow-700);font-weight:600;margin-bottom:14px">
        💡 标准答案：${this._escape(n.canonical || '计算验证')}
      </div>

      <div style="text-align:center;margin-top:16px">
        <button onclick="MathFlowV5.advance('solve')" style="padding:12px 28px;background:var(--coral);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer">我开始答题 →</button>
      </div>
    </div>`;
  },
  _showNeriageError(){
    const detail = document.getElementById('v5NeriageErrorDetail');
    if(detail) detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
  },

  // ============================================================
  // 阶段 3：正式解题（5 分钟）
  // ============================================================
  renderSolve(problem){
    const showHint = this._sess.hintUsed;
    let correctIdx = problem.choices.indexOf(problem.answer);
    // 防御式兜底（问题1·2026-09-11）：题库里偶发「正确答案不在选项里」
    // （数值型 vs 字符串型、带单位 vs 不带单位）。先做类型归一化再匹配；
    // 若仍不匹配，强制把正确答案写进首选项位，确保孩子永远有正确选项可点。
    if(correctIdx < 0){
      const aStr = String(problem.answer);
      correctIdx = (problem.choices || []).map(String).indexOf(aStr);
    }
    if(correctIdx < 0 && Array.isArray(problem.choices) && problem.choices.length){
      problem = Object.assign({}, problem, { choices: problem.choices.slice() });
      problem.choices[0] = problem.answer;
      correctIdx = 0;
    }
    // CPA 前移：先看图再解题——形象模型是通往抽象的脚手架，不是事后的图解。
    // 有可视化数据的题，在选项之前先给一个静态图形支架。
    let pictorialScaffold = '';
    if(problem.visualType && problem.visualData){
      try{
        const svg = _mvHTML(problem);
        if(svg && svg.indexOf('mv-empty') < 0){
          pictorialScaffold = `
          <div style="margin-top:12px;padding:10px 14px;background:var(--teal-soft);border-radius:12px;border:1px solid rgba(0,168,150,.2)">
            <div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:6px">👀 先看图，再解题 —— 图形会告诉你数字之间的关系</div>
            <div style="background:#fff;border-radius:10px;padding:6px">${svg}</div>
            ${this._solveTool(problem)}
          </div>`;
        }
      }catch(e){}
    }
    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 3 · 正式解题</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📝 5 分钟 · 用刚才发现的方法解决这道题</div>
      <div style="font-size:16px;color:var(--navy);font-weight:700;line-height:1.7;padding:16px 18px;background:linear-gradient(135deg,#FFE9D6,#fff);border-radius:12px;border:1px solid rgba(251,146,60,.2)">
        ${this._escape(problem.question)}
      </div>
      ${pictorialScaffold}
      ${(typeof window._formulaLeaksPreAnswer==='function' && window._formulaLeaksPreAnswer(problem))
        ? `<div style="margin-top:12px;font-size:13px;color:var(--text-3);padding:10px 14px;background:var(--teal-soft);border-radius:10px">🤫 这道题的算式要<b>自己列</b>——先想清楚用哪几个数、怎么算，答完会揭晓完整算式</div>`
        : this._formulaRow(problem.formula, 'var(--teal)')}
      <div style="margin-top:8px;font-size:12px;color:var(--text-3)">选择正确的答案：</div>
      <div class="wp-choices" id="v5SolveChoices" style="grid-template-columns:repeat(${Math.min(problem.choices.length,4)},1fr);margin-top:8px">
        ${problem.choices.map((c,i)=>`<div class="wp-choice" data-idx="${i}" data-val="${c}" onclick="MathFlowV5._solveAnswer(this,${i},${correctIdx})">${this._escape(String(c))}</div>`).join('')}
      </div>
      ${showHint?`<div style="margin-top:14px;padding:14px 16px;background:#FFF8E6;border-left:4px solid var(--yellow);border-radius:10px;font-size:14px;color:var(--yellow-700);line-height:1.7">💡 <b>小提示：</b>${this._escape(problem.hint)}<br><span style="font-size:12px;color:var(--text-3)">再想想，你可以的！</span></div>`:''}
      <div id="v5SolveFeedback" style="margin-top:14px"></div>
    </div>`;
  },
  // 解题阶段答题
  _solveAnswer(el, chosenIdx, correctIdx){
    chosenIdx = parseInt(chosenIdx);
    correctIdx = parseInt(correctIdx);
    const isCorrect = chosenIdx === correctIdx;
    try{ if(window.QuizMood) window.QuizMood[isCorrect?'right':'wrong'](); }catch(e){}
    const container = el.parentElement;
    const problem = this._sess.problem || {};
    const timeUsed = Math.max(1, Math.round((Date.now() - (this._sess.startTs||Date.now()))/1000));
    if(container){
      container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
      el.classList.add(isCorrect?'correct':'wrong');
      if(!isCorrect){
        container.querySelectorAll('.wp-choice').forEach(c=>{ if(parseInt(c.dataset.idx)===correctIdx) c.classList.add('correct'); });
      }
    }
    const fb = document.getElementById('v5SolveFeedback');
    // 漏洞检测记录
    const wdQ = {subject:'math', knowledge:problem.knowledge||'未知', difficulty:String(problem.difficulty||'medium'), visualType:problem.visualType||'barModel'};
    if(isCorrect){
      try{ if(typeof WeaknessDetector!=='undefined') WeaknessDetector.recordAnswer(S, wdQ, this._sess.hintUsed?'hint':'correct', timeUsed); }catch(e){}
      try{ if(typeof setStar==='function') setStar(3, '数学场景题'); }catch(e){}
      // 2026-09：知识链打通进度——答对给本题 knowledge 记一次"学过"
      try{ if(typeof _bumpMathProgress==='function') _bumpMathProgress(problem.knowledge); }catch(e){}
      // 错题再练：答对即订正成功，从错题本移除（2026-09-10）
      try{ if(typeof window._mathReviewMarkCorrect==='function' && window.MATH_REVIEW && window.MATH_REVIEW.active) window._mathReviewMarkCorrect(problem); }catch(e){}
      if(fb){
        fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:15px;color:var(--teal-700);font-weight:700;line-height:1.7">🎉 <b>答对了！</b>用时 ${timeUsed} 秒 · +3 ⭐${problem.formula?`<br><span style="font-size:13px;font-weight:600;color:var(--text-2)">📜 完整算式：<b style="color:var(--teal);font-family:'Inter',sans-serif">${this._escape(String(problem.formula))}</b></span>`:''}<br><span style="font-size:13px;font-weight:500;color:var(--text-2)">接下来用图形看清这道题的内在结构</span></div>`;
      }
      setTimeout(()=>{ this.advance('explain'); if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 1800);
    }else{
      this._sess.hintUsed = true;
      this._sess.solveAttempts = (this._sess.solveAttempts||0) + 1;
      try{ if(typeof WeaknessDetector!=='undefined') WeaknessDetector.recordAnswer(S, wdQ, 'wrong', timeUsed); }catch(e){}
      // 错题再练：记一次"仍需再练"
      try{ if(typeof window._mathReviewMarkWrong==='function' && window.MATH_REVIEW && window.MATH_REVIEW.active) window._mathReviewMarkWrong(); }catch(e){}
      // 错题本（Q6-5：带 knowledge 供按知识点聚合；Q6-9：答错也记入今日画像）
      try{
        S.math = S.math || {};
        if(typeof _logToday==='function') _logToday(false, problem.knowledge);
        S.math.wrongProblems = S.math.wrongProblems || [];
        if(!S.math.wrongProblems.some(w=>w.q===problem.question)){
          S.math.wrongProblems.push({
            q:problem.question, a:String(problem.answer),
            k:(typeof _normK==='function'?_normK(problem.knowledge):'')||'',
            s:problem.semester || ((window.MATH_SESSION&&window.MATH_SESSION.semKey)||''),
            t:Date.now()
          });
          if(typeof saveState==='function') saveState();
        }
      }catch(e){}
      try{ if(typeof SpacedReview!=='undefined') SpacedReview.add(S.currentProfileId||'default', 'math', problem.id||problem.question); }catch(e2){}
      if(fb) fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">❌ 差一点点！已加入错题本。${problem.formula?`<br><span style="color:var(--text-2);font-size:13px">📜 完整算式：<b style="color:var(--teal);font-family:'Inter',sans-serif">${this._escape(String(problem.formula))}</b></span>`:''}<br><b>别急，看下面的分步推理，再试一次</b></div>${(typeof window._mathStepByStep==='function'?window._mathStepByStep(problem):'')}`;
      setTimeout(()=>{ if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 900);
    }
  },

  // ============================================================
  // 阶段 4：数形结合讲解（5 分钟）—— 核心
  // ============================================================
  renderExplain(problem){
    // 使用 _resolveModelFamily 统一获取模型家族名
    const modelFamily = (typeof MathVisualV5!=='undefined' && MathVisualV5._resolveModelFamily)
      ? MathVisualV5._resolveModelFamily(problem)
      : (problem.modelFamily || problem.visualType);
    const hasStepRenderer = (typeof MathVisualV5!=='undefined' && MathVisualV5._getStepRenderer)
      ? !!MathVisualV5._getStepRenderer(modelFamily)
      : false;
    const hasModelFamily = hasStepRenderer;
    // 概念题优先给「概念示意图」，没有可看的图时改用「概念对照卡」，绝不落回空图提示
    const conceptEntry = this._conceptEntry(problem);
    const visual = this._visualFor(problem);
    const isConceptVisual = !!(conceptEntry && (!visual || visual.indexOf('mv-concept') >= 0));
    setTimeout(()=>this._initFractionWall(),50);
    const layers = this._explainLayers(problem);
    const methodName = this._methodName(problem);
    const hasRussian = problem.russianQuestions && problem.russianQuestions.length > 0;
    const stepControls = hasModelFamily ? `
      <div id="v5StepControls" style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:12px">
        <button onclick="MathFlowV5._prevStep()" style="padding:8px 16px;background:var(--ink-100);color:var(--navy);border:none;border-radius:16px;font-size:13px;font-weight:700;cursor:pointer">← 上一步</button>
        <span id="v5StepIndicator" style="font-size:13px;font-weight:700;color:var(--navy)">分步演示</span>
        <button onclick="MathFlowV5._nextStep()" style="padding:8px 16px;background:var(--teal);color:#fff;border:none;border-radius:16px;font-size:13px;font-weight:700;cursor:pointer">下一步 →</button>
      </div>` : '';
    return `<div class="cpa-layer pictorial" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag pictorial">STAGE 4 · 数形结合讲解</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📊 5 分钟 · 用图形看清这道题的内在结构</div>
      <div style="background:#fff;border-radius:14px;padding:8px;border:1px solid rgba(0,168,150,.15);box-shadow:0 6px 18px rgba(0,168,150,.08)">
        ${visual || this._conceptCardHTML(problem)}
      </div>
      ${isConceptVisual ? '' : `<div style="text-align:center;margin-top:8px">
        <button onclick="MathFlowV5._replayVisual()" style="padding:8px 18px;background:var(--teal-soft);color:var(--teal-700);border:1px solid rgba(0,168,150,.3);border-radius:18px;font-size:12px;font-weight:700;cursor:pointer">🎬 重新播放动画</button>
      </div>`}
      <!-- 可拖曳教具：数形结合从"看"升级为"做" -->
      ${this._tool(problem)}
      ${stepControls}
      ${problem.barTranslateLine && problem.barTranslateLine.items ? `
      <div style="margin-top:14px;padding:14px 18px;background:var(--yellow-soft);border-radius:12px;border-left:4px solid var(--yellow)">
        <div style="font-size:12px;font-weight:700;color:var(--yellow-700);margin-bottom:8px">📝 Bar Model 翻译行</div>
        ${problem.barTranslateLine.items.map(item=>`<div style="font-size:14px;font-weight:600;color:var(--ink-700);line-height:1.8;padding:4px 0">${this._escape(item)}</div>`).join('')}
      </div>` : ''}
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px">
        ${layers.map(l=>`
          <div style="padding:14px 16px;border-radius:12px;background:${l.bg};border-left:4px solid ${l.color}">
            <div style="font-size:13px;font-weight:800;color:${l.color};margin-bottom:6px">${l.icon} ${l.title}</div>
            <div style="font-size:14px;color:var(--ink-700);line-height:1.75">${l.text}</div>
          </div>`).join('')}
      </div>
      ${this._followupBlock(problem)}
      <div style="margin-top:14px;padding:14px 18px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:12px;color:#fff">
        <div style="font-size:12px;opacity:.85;font-weight:600;margin-bottom:4px">🎵 小口诀</div>
        <div style="font-size:15px;font-weight:800;line-height:1.6">${this._rhyme(problem, methodName)}</div>
      </div>
      <div style="text-align:center;margin-top:18px">
        <button onclick="MathFlowV5.advance('practice')" style="padding:12px 28px;background:linear-gradient(135deg,var(--pink),#F4C2D8);color:#fff;border:none;border-radius:22px;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(232,160,191,.4)">🚀 跳过讲解，去做练习 →</button>
      </div>
    </div>`;
  },
  // ===== M3 图解追问（2026-09-17）：图解揭示后的深度追问，varsOf 派生，非自由聊天 =====
  _followupBlock(problem){
    try{
      if(typeof window.DiagramFollowup==='undefined' || !problem || !problem.visualType) return '';
      const g = window.DiagramFollowup.generate(problem);
      if(!g || !g.followUps || !g.followUps.length) return '';
      const cards = g.followUps.map((u,i)=>{
        const opts = (u.threeStep && u.threeStep.choices || []).map(c=>
          '<div style="font-size:13px;color:var(--ink-700);line-height:1.8;padding:2px 0">• ' + this._escape(c) + '</div>').join('');
        return '<div style="padding:14px 16px;border-radius:12px;background:var(--ink-100);border-left:4px solid var(--teal);margin-bottom:10px">' +
          '<div style="font-size:12px;font-weight:800;color:var(--teal-700);margin-bottom:6px">🧩 图解追问 ' + (i+1) + ' · ' + this._followupIcon(u.type) + '</div>' +
          '<div style="font-size:14px;color:var(--navy);font-weight:700;line-height:1.7">' + this._escape(u.q) + '</div>' +
          '<div style="margin-top:10px">' +
            '<button onclick="MathFlowV5._toggleFollowup(this)" style="padding:7px 16px;background:var(--teal-soft);color:var(--teal-700);border:1px solid rgba(0,168,150,.3);border-radius:16px;font-size:12px;font-weight:700;cursor:pointer">🔒 先想一想</button>' +
            '<div class="v5-fu" style="display:none;margin-top:10px;padding:12px 14px;background:#fff;border-radius:10px;border:1px dashed rgba(0,168,150,.4)">' +
              opts +
              '<div style="margin-top:8px;font-size:13px;font-weight:800;color:var(--teal)">✔ ' + this._escape(u.threeStep.answer) + '</div>' +
              '<div style="margin-top:6px;font-size:12.5px;color:var(--text-2);line-height:1.7">' + this._escape(u.threeStep.explain) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
      return '<div style="margin-top:16px">' +
        '<div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:8px">🧠 想得再深一步 —— 和这张图有关的小追问（先自己想想，再点开验证）</div>' +
        cards + '</div>';
    }catch(e){ return ''; }
  },
  _followupIcon(type){
    if(type==='change') return '➕';
    if(type==='relate') return '⚖️';
    if(type==='reverse') return '🔁';
    if(type==='generic') return '🪄';
    return '❓';
  },
  _toggleFollowup(btn){
    const wrap = btn && btn.nextElementSibling;
    if(!wrap) return;
    const open = wrap.style.display !== 'none';
    wrap.style.display = open ? 'none' : 'block';
    btn.textContent = open ? '🔒 先想一想' : '🔓 看点拨';
  },
  // ===== 分步演示控制 =====
  _currentStep: 1,
  _prevStep(){
    if(!this._sess || !this._sess.problem) return;
    if(this._currentStep <= 1) return;
    this._currentStep--;
    this._updateStepVisual();
  },
  _nextStep(){
    if(!this._sess || !this._sess.problem) return;
    if(this._currentStep >= 3){
      const indicator = document.getElementById('v5StepIndicator');
      if(indicator) indicator.textContent = '✅ 演示完成！';
      // 演示完成 → 自动进入练习（2026-09-18：russian/askChild 口头环节已移除）
      setTimeout(()=>{ this.advance('practice'); }, 800);
      return;
    }
    this._currentStep++;
    this._updateStepVisual();
  },
  _updateStepVisual(){
    const problem = this._sess.problem;
    if(!problem) return;
    if(typeof MathVisualV5 === 'undefined' || !MathVisualV5.renderStep) return;
    // 使用 _resolveModelFamily 统一获取模型家族名
    const modelFamily = (MathVisualV5._resolveModelFamily)
      ? MathVisualV5._resolveModelFamily(problem)
      : (problem.modelFamily || problem.visualType);
    if(!MathVisualV5._getStepRenderer(modelFamily)) return;
    const stepVisual = MathVisualV5.renderStep(modelFamily, problem.visualData, this._currentStep, problem);
    // 更新可视化区域
    const wrap = document.querySelector('.mv-wrap');
    if(wrap){
      wrap.outerHTML = stepVisual;
    }
    const indicator = document.getElementById('v5StepIndicator');
    if(indicator){
      indicator.textContent = `第 ${this._currentStep}/3 步`;
    }
  },
  // 重新播放动画（重置 CSS 动画）
  _replayVisual(){
    const wrap = document.querySelector('.mv-wrap');
    if(!wrap){ if(typeof toast==='function') toast('未找到可重播的动画'); return; }
    const animated = wrap.querySelectorAll('.mv-bar-rect,.mv-bar-text,.mv-area-block,.mv-bond-line,.mv-bond-part,.mv-bond-total,.mv-frac-fill,.mv-nl-point,.mv-geo-outline,.mv-circle-radius,.mv-lens,.mv-finger,.mv-map-level,.mv-ton-cell,.mv-beam,.mv-ca-sector,.mv-ca-piece,.mv-bd-beam');
    animated.forEach(el=>{
      const clone = el.cloneNode(true);
      el.parentNode.replaceChild(clone, el);
    });
    if(typeof toast==='function') toast('🎬 动画已重新播放');
  },
  // 分数墙点击高亮交互
  _initFractionWall(){
    const svg = document.getElementById('fvWallSvg');
    if(!svg) return;
    const rows = svg.querySelectorAll('.mv-fraction-row');
    rows.forEach(row=>{
      row.addEventListener('click',()=>{
        const idx = parseInt(row.getAttribute('data-row'));
        const segs = svg.querySelectorAll('.mv-fraction-seg');
        const targetRows = [1,3];
        segs.forEach(seg=>{
          const segRow = seg.closest('.mv-fraction-row');
          const segIdx = Array.from(rows).indexOf(segRow);
          if(targetRows.includes(idx) || targetRows.includes(segIdx)){
            seg.style.opacity = (targetRows.includes(idx) && targetRows.includes(segIdx)) ? '1' : '0.25';
          } else {
            seg.style.opacity = '0.25';
          }
        });
        const hint = svg.querySelector('text:last-child');
        if(hint && !hint.textContent.includes('找：')){
          const labels = ['1/2','2/4','4/8'];
          if(idx===1) hint.textContent='💡 点击1/2，高亮等值：'+labels.join(' = ');
          else if(idx===3) hint.textContent='💡 点击4/8，高亮等值：'+labels.join(' = ');
          else hint.textContent='💡 点击任意行高亮等值分数';
        }
      });
    });
  },

  // ============================================================
  // 阶段 6：俄罗斯追问（4 分钟）
  // ============================================================
  renderRussianQuestion(problem){
    const qs = problem.russianQuestions || [];
    if(!qs.length){
      // 无追问数据，直接跳过
      this.advance('askChild');
      return '';
    }
    const idx = (this._sess && this._sess.russianIdx) || 0;
    if(idx >= qs.length){
      // 追问完成
      this.advance('askChild');
      return '';
    }
    if(typeof RussianQuestioning!=='undefined' && RussianQuestioning.renderQuestion){
      return RussianQuestioning.renderQuestion(problem, idx);
    }
    // 降级：显示文字输入
    const q = qs[idx];
    return `<div class="cpa-layer" style="border-left-color:var(--navy);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--navy);color:#fff">STAGE 6 · 俄罗斯追问 · 第 ${idx+1} / ${qs.length} 题</span>
      <div style="padding:16px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:14px;color:#fff;margin-bottom:14px">
        <div style="font-size:15px;font-weight:700;line-height:1.7">${this._escape(q.q)}</div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">
        ${(q.keywords||[]).map(k=>`<span style="padding:4px 10px;background:var(--navy-soft);color:var(--navy);border-radius:12px;font-size:12px;font-weight:600">${this._escape(k)}</span>`).join('')}
      </div>
      <textarea id="v5RussianInput_${idx}" placeholder="用自己的话回答..." style="width:100%;min-height:80px;padding:12px;border:1.5px solid rgba(30,58,95,.2);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box;margin-bottom:10px"></textarea>
      <div style="text-align:center">
        <button onclick="MathFlowV5._russianSubmit(${idx})" style="padding:10px 24px;background:var(--teal);color:#fff;border:none;border-radius:20px;font-weight:700;cursor:pointer">提交回答 →</button>
      </div>
      <div id="v5RussianFeedback_${idx}" style="margin-top:12px"></div>
    </div>`;
  },
  _russianSubmit(idx){
    const input = document.getElementById('v5RussianInput_' + idx);
    const fb = document.getElementById('v5RussianFeedback_' + idx);
    if(!input || !fb) return;
    const answer = input.value.trim();
    const problem = this._sess.problem;
    const qs = problem && problem.russianQuestions || [];
    const q = qs[idx];
    if(!answer){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">还没写回答哦 👆</div>`;
      return;
    }
    if(!q){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700)">回答已记录！</div>`;
      setTimeout(()=>{ this.advance('askChild'); }, 1000);
      return;
    }
    const passed = (typeof RussianQuestioning!=='undefined' && RussianQuestioning.checkAnswer)
      ? RussianQuestioning.checkAnswer(answer, q.keywords)
      : q.keywords.some(kw => answer.toLowerCase().indexOf(kw.toLowerCase()) >= 0);
    if(passed){
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ✅ <b>说得太棒了！</b>你提到了关键词，说明你真的理解了这道题的数量关系！
      </div>`;
      this._sess.russianIdx = (idx || 0) + 1;
      this._saveProgress();
      setTimeout(()=>{
        if(this._sess.russianIdx >= qs.length){
          this.advance('askChild');
        }else{
          if(typeof updateMathStageV5==='function') updateMathStageV5();
        }
      }, 1500);
    }else{
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">
        💪 再想想，试试提到这些词：<b>${q.keywords.slice(0,4).map(k=>'「'+k+'」').join('、')}</b>
      </div>`;
    }
  },

  // ============================================================
  // 阶段 7：你来提问（2 分钟）—— 新课标"四能"
  // ============================================================
  renderAskChild(problem){
    // 给一个变式场景，孩子自己提出数学问题
    // 修复：变体场景的数字直接取自变体算式（不再盲改 ±2/+3），
    // 保证展示的故事、预设问题 2 里的数字三者一致。
    const variant = (problem.variants && problem.variants[0]) || {};
    const variantScene = variant.question
      ? (this._reScene(problem.scene, problem.formula, variant.formula || variant.question) || problem.scene)
      : problem.scene;
    // 3 个选项 + 1 个自由输入
    const q1 = problem.question;
    // 只有当变体问题的数字能和展示场景对上时才用它，否则用与场景无关的通用追问
    const q2 = (variant.question && this._reScene(problem.scene, problem.formula, variant.formula || variant.question))
      ? variant.question
      : '如果是原来的 2 倍呢？';
    const q3 = '还剩多少？';
    return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--pink);color:#fff">STAGE 5 · 你来提问</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">🙋 2 分钟 · 像小数学家一样提问题</div>
      <div style="padding:16px 18px;background:linear-gradient(135deg,var(--pink),#F4C2D8);color:#fff;border-radius:12px;font-size:15px;font-weight:700;line-height:1.7;margin-bottom:12px">
        🔄 换个角度看看这个故事：<br>${this._escape(variantScene)}
      </div>
      <div style="font-size:14px;color:var(--navy);font-weight:700;margin-bottom:10px">🤔 你能根据这个故事，提出一个数学问题吗？</div>
      <div class="wp-choices" style="grid-template-columns:1fr;margin-top:8px">
        <div class="wp-choice" onclick="MathFlowV5._askChoose(this,1)" style="padding:12px 14px">📋 ${this._escape(q1)}</div>
        <div class="wp-choice" onclick="MathFlowV5._askChoose(this,2)" style="padding:12px 14px">📋 ${this._escape(q2)}</div>
        <div class="wp-choice" onclick="MathFlowV5._askChoose(this,3)" style="padding:12px 14px">📋 ${this._escape(q3)}</div>
      </div>
      <div style="margin-top:12px;padding:12px 14px;background:var(--teal-soft);border-radius:10px">
        <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:6px">✏️ 或者自己写一个问题：</div>
        <textarea id="v5AskInput" placeholder="我想知道..." style="width:100%;min-height:54px;padding:10px 12px;border:1.5px solid rgba(0,168,150,.3);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box"></textarea>
      </div>
      <div style="text-align:center;margin-top:14px;display:flex;gap:10px;justify-content:center">
        <button onclick="MathFlowV5._askSubmit()" style="padding:10px 24px;background:var(--teal);color:#fff;border:none;border-radius:20px;font-weight:800;cursor:pointer">提交我的问题 →</button>
        <button onclick="MathFlowV5.advance('practice')" style="padding:10px 24px;background:var(--coral);color:#fff;border:none;border-radius:20px;font-weight:800;cursor:pointer">直接去练习 →</button>
      </div>
      <div id="v5AskFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // 三个预设问题给出差异化反馈：说清楚"这个问题好在哪"，而不是一律同一句夸奖
  _askChoose(el, idx){
    const container = el.parentElement;
    container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct'));
    el.classList.add('correct');
    const fb = document.getElementById('v5AskFeedback');
    if(!fb) return;
    const tips = {
      1: '这就是这道题<b>本身</b>在问的事。能一眼看清"题目到底要你求什么"，是解题最关键的一步 ✅',
      2: '把数字换一换再问一遍 —— 这是数学家找规律的老办法。条件变了，原来的方法还成立吗？🔍',
      3: '你换了个方向提问。想一想：这个新问题和刚才那道，解法会一样吗？哪里会不一样？🤔'
    };
    fb.innerHTML = `<div style="padding:10px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700);line-height:1.7">${tips[idx] || '🌟 好问题！会提问的孩子，数学一定学得好。'}</div>`;
  },

  // 判断孩子提的是不是一个"能算出答案的数学问题"
  _askQuality(q){
    if(!q) return { ok:false, reason:'empty' };
    if(q.length < 5) return { ok:false, reason:'short' };
    const m = q.match(/多少|几个|几只|几条|几支|第几|为什么|怎么会|怎么|怎样|一共|总共|还剩|剩下|比|多远|多久|哪个/);
    if(m) return { ok:true, hook:m[0] };
    if(/\d/.test(q)) return { ok:true, hook:null };   // 有具体数字，也能算
    return { ok:false, reason:'notaquestion' };
  },
  _askSubmit(){
    const ta = document.getElementById('v5AskInput');
    const q = ta ? ta.value.trim() : '';
    const fb = document.getElementById('v5AskFeedback');
    if(!fb) return;
    const r = this._askQuality(q);
    if(r.ok){
      const why = r.hook
        ? `你用上了「${this._escape(r.hook)}」—— 这就是一个<b>能算出答案</b>的问题 👍`
        : `你给出了具体的数字，这样问题就能算了 👍`;
      fb.innerHTML = `<div style="padding:12px 14px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">🌟 <b>会问了！</b>${why}<br><span style="font-size:12px;color:var(--text-2)">数学家就是从"能算的问题"开始的。进入练习检验一下吧！</span></div>`;
      setTimeout(()=>{ this.advance('practice'); if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 1400);
    } else {
      const tip = r.reason === 'short'
        ? '再写长一点点～ 好问题里通常会有「多少」「几个」「为什么」这样的词 👀'
        : `你写的是「${this._escape(q.slice(0,24))}」，它更像一句话，不像一个能算出来的问题。<br>试试加上「多少」或「为什么」，让它变成一个<b>有答案</b>的数学问题？✏️`;
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">${r.reason === 'empty' ? '还没写问题哦，或者从上面选一个也行 👆' : tip}</div>`;
    }
  },

  // ============================================================
  // 阶段 6：阶梯练习（3 分钟）—— L1基础 → L2变式(先文字后图形) → L4陷阱
  // ============================================================
  renderPractice(problem){
    // 从"同知识点题库池"按序号抽一道不同题作为本轮练习母题，杜绝重复
    const base = (this._sess.practicePool && this._sess.practicePool[this._sess.practiceIndex]) || problem;
    const level = this._sess.practiceLevels[this._sess.practiceIndex] || 1;
    // 每次渲染注入随机新数字的同类变体——翻页永远是新题，不再"翻来覆去就那两道"
    this._sess.levelVar = this._freshProblem(base, level);
    if(level === 1) return this._renderL1(base);
    if(level === 2) return this._renderL2(base);
    if(level === 3) return this._renderL3(base);  // 新增 L3
    return this._renderL4(base);
  },

  // 构建"同知识点去重题库池"：把当前题 + 自己的变体 + 同知识点兄弟题(及其变体) 收集起来，
  // 按题干去重后返回（最多 12 条）。练习阶段每道子题从池里抽一条，保证不重复。
  _buildPracticePool(problem){
    try{
      if(!problem) return [];
      const kp = problem.knowledge || '';
      const sem = (window.MATH_SESSION && window.MATH_SESSION.semKey) ||
                   ((typeof S!=='undefined' && S.math) ? (S.math.grade + (S.math.semester||'a')) : '');
      const bank = (window.MATH_SESSION && window.MATH_SESSION.bank) ||
                   (typeof MATH_BY_GRADE!=='undefined' && MATH_BY_GRADE[sem] && MATH_BY_GRADE[sem].problems) || [];
      const seen = {};
      const pool = [];
      const norm = s => String(s||'').replace(/\s/g,'');
      const add = p => {
        if(!p || !p.question) return;
        const k = norm(p.question);
        if(seen[k]) return;
        seen[k] = 1; pool.push(p);
      };
      // 1) 当前题 + 自己的变体
      // 变式只有 question/formula/answer/hint，没有 visualType/visualData。
      // 直接入池 → 抽到它做 L2 图形验证时 _mvHTML 两条路径都空 → 显示「可视化引擎不可用」。
      // 合并母题字段后再入池，让变式继承视觉配置。
      const mix = (base, v) => Object.assign({}, base, v);
      add(problem);
      (problem.variants||[]).forEach(v => add(mix(problem, v)));
      // 2) 同知识点兄弟题 + 变体
      bank.forEach(p => { if(p && p.knowledge === kp){ add(p); (p.variants||[]).forEach(v => add(mix(p, v))); } });
      // 3) 仍不足 3 条时，用全库变体兜底（尽量不让练习只有孤零零一题）
      if(pool.length < 3){ bank.forEach(p => { (p.variants||[]).forEach(v => add(mix(p, v))); }); }
      return pool.slice(0, 12);
    }catch(e){ return [problem]; }
  },

  // 语义常量保护：从题干/场景中识别单位进率等固定数值，
  // 返回算式中不应被变异的数字下标数组（与 _mutateFormula 的 keepIdx 语义一致）。
  // 例："1分钟"、"1分"、"60秒" 都映射到 60；"跳了38秒还差几秒到1分" 中 60 必须固定。
  _semanticKeepIdx(base, formula){
    try{
      const text = String(base.scene || '') + ' ' + String(base.question || '');
      if(!text) return null;
      const head = String(formula || '').slice(0, String(formula || '').indexOf('=')).trim();
      const nums = (head.match(/\d+/g) || []).map(Number);
      if(!nums.length) return null;
      // 规则：题干中出现左侧单位表述，且算式中有对应进率数值，则保护该数值。
      const rules = [
        { re: /1\s*分\s*钟?|1\s*分钟|60\s*秒|半\s*分\s*钟|半\s*分钟/, v: 60 },
        { re: /1\s*小?时\s*[=是]?\s*60\s*分\s*钟?|1\s*小?时|60\s*分\s*钟?/, v: 60 },
        { re: /1\s*[日天]\s*[=是]?\s*24\s*小?时|1\s*[日天]|24\s*小?时/, v: 24 },
        { re: /1\s*周\s*期?|1\s*星期|7\s*[日天]/, v: 7 },
        { re: /1\s*年\s*[=是]?\s*12\s*个?月|1\s*年|12\s*个?月/, v: 12 },
        { re: /1\s*米\s*[=是]?\s*100\s*厘米|100\s*厘米\s*[=是]?\s*1\s*米/, v: 100 },
        { re: /1\s*米\s*[=是]?\s*10\s*分米|10\s*分米\s*[=是]?\s*1\s*米/, v: 10 },
        { re: /1\s*分米\s*[=是]?\s*10\s*厘米|10\s*厘米\s*[=是]?\s*1\s*分米/, v: 10 },
        { re: /1\s*厘米\s*[=是]?\s*10\s*毫米|10\s*毫米\s*[=是]?\s*1\s*厘米/, v: 10 },
        { re: /1\s*千?米\s*[=是]?\s*1000\s*米|1\s*公里\s*[=是]?\s*1000\s*米/, v: 1000 },
        { re: /1\s*吨\s*[=是]?\s*1000\s*千?克|1000\s*千?克\s*[=是]?\s*1\s*吨/, v: 1000 },
        { re: /1\s*千?克\s*[=是]?\s*1000\s*克|1000\s*克\s*[=是]?\s*1\s*千?克/, v: 1000 },
        { re: /1\s*元\s*[=是]?\s*10\s*角|10\s*角\s*[=是]?\s*1\s*元/, v: 10 },
        { re: /1\s*角\s*[=是]?\s*10\s*分|10\s*分\s*[=是]?\s*1\s*角/, v: 10 },
        { re: /半\s*小?时/, v: 30 },
        { re: /半\s*年/, v: 6 },
        { re: /一\s*周\s*有\s*七\s*天|一星期有七天/, v: 7 }
      ];
      const keep = new Set();
      for(let i = 0; i < rules.length; i++){
        const r = rules[i];
        if(r.re.test(text)){
          nums.forEach((n, idx) => { if(n === r.v) keep.add(idx); });
        }
      }
      return keep.size ? Array.from(keep).sort((a,b)=>a-b) : null;
    }catch(e){ return null; }
  },

  // ============================================================
  // 数字变异引擎：从基准题生成"同结构新数字"的变体
  // 保证图文一致、难度一致（同位数）、运算可行（整除/非负），失败则原样返回
  // ============================================================
  _freshProblem(problem, level){
    try{
      if(problem.visualType === 'fractionStrip') return problem; // 分数概念题不变异（怕破坏图形语义）
      const hasVariants = problem.variants && problem.variants.length;
      const useVisual = level === 2 && problem.visualType && problem.visualData;
      // L1/L4 用变体0做模板，L3 用变体1；L2 用母题（文字与图必须同源）
      const base = useVisual ? problem
        : (hasVariants ? (problem.variants[(level === 1 || level === 4) ? 0 : 1] || problem.variants[0]) : problem);
      if(!base || !base.formula) return problem;
      // 带图约束：除数（份数语义）/括号后乘数（周长×2语义）不可变，只变异其余数字
      let keepIdx = null;
      if(useVisual){
        const fm = String(problem.formula).replace(/\s/g, '');
        if(fm.indexOf('÷') >= 0 || fm.indexOf('/') >= 0) keepIdx = [1];
        else if(/\)[×x]\d+$/.test(fm)) keepIdx = ['last'];
      }
      // 语义常量保护：题干里出现"1分/1小时/1天/1米/1千克"等单位进率时，
      // 算式中对应的 60/24/7/100/1000 等数字不可变异，否则会出现
      // "跳了19秒还差几秒到1分？"变成"21-19=?"这类图文矛盾的题目。
      const semKeep = this._semanticKeepIdx(base, base.formula);
      if(semKeep && semKeep.length){
        keepIdx = Array.isArray(keepIdx) ? keepIdx.concat(semKeep) : semKeep;
      }
      const m = this._mutateFormula(base.formula, keepIdx);
      if(!m) return problem;
      const q = this._mutQuestion(base, m.formula);
      if(!q) return problem;
      const out = Object.assign({}, base, {
        formula: m.formula, answer: m.answer, question: q,
        choices: undefined   // 让 _safeChoices 围绕新答案生成干扰项
      });
      if(useVisual){
        const vd = this._mutateVisual(problem, m.oldNums, m.newNums, m.answer);
        if(!vd) return problem;   // 图改不了就整题不变异，绝不图文不符
        out.visualData = vd;
        out.visualType = problem.visualType;
        const sc = this._reScene(problem.scene || '', problem.formula, m.formula);
        if(sc) out.scene = sc;
      } else if(level === 3){
        const sc = this._reScene(base.scene || problem.scene || '', base.formula, m.formula);
        if(sc) out.scene = sc;
      }
      return out;
    }catch(e){ return problem; }
  },

  // 纯算术式数字变异（拒绝采样 + 逐步求值校验）；keepIdx: 不可变异的数字序号（'last'=最后一个）
  _mutateFormula(formula, keepIdx){
    const f = String(formula);
    const eqM = f.match(/=\s*\?/);
    if(!eqM) return null;   // 没有 =? 结果占位的不处理
    const head = f.slice(0, f.indexOf('=')).trim();
    if(!head) return null;
    if(/\d\.\d/.test(head)) return null;  // 小数不安全（正则会拆坏），不处理
    if(!/^[\d\s+\-×x÷*/()]+$/.test(head)) return null;
    const oldNums = head.match(/\d+/g).map(Number);
    if(!oldNums.length || oldNums.length > 4) return null;
    const keepSet = new Set();
    if(Array.isArray(keepIdx)){
      keepIdx.forEach(i => keepSet.add(i === 'last' ? oldNums.length - 1 : i));
    }
    const oldAns = this._evalArith(head);
    if(oldAns == null) return null;
    for(let t = 0; t < 60; t++){
      const pairs = oldNums.map((n, idx) => {
        if(keepSet.has(idx) || n === 1) return { o: n, w: n };   // 1 是常量因子（×1），不变异
        let nv = this._rndSameDigit(n);
        let guard = 0;
        while(nv === n && guard++ < 9) nv = this._rndSameDigit(n);
        return { o: n, w: nv };
      });
      // 按出现顺序替换（第 k 个数字 → pairs[k].w），同值数字也能各自独立变异
      let occ = 0;
      const newHead = head.replace(/\d+/g, () => String(pairs[occ++] ? pairs[occ - 1].w : pairs[pairs.length - 1].w));
      const ans = this._evalArith(newHead);
      // 约束：可求值、非负、非退化（结果≠0且≠1，除非原题就是）、至少有一个数变了
      if(ans == null || ans < 0 || (ans !== oldAns && (ans === 0 || ans === 1))) continue;
      if(pairs.every(p => p.w === p.o)) continue;
      // 除法题结果位数明显膨胀时放弃（如 96÷4 变 97÷4 不整除会被 eval 拦住；此处防商过大）
      return {
        formula: newHead + ' = ?',
        answer: ans,
        oldNums: oldNums,
        newNums: pairs.map(p => p.w)
      };
    }
    return null;
  },

  // 同位数随机数（保持难度一致）
  _rndSameDigit(n){
    const s = String(Math.abs(Math.floor(n)));
    const d = s.length;
    const min = d === 1 ? 2 : Math.pow(10, d - 1);
    const max = d === 1 ? 9 : Math.pow(10, d) - 1;
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  // 安全算术求值：仅数字与 + - * / ( )；要求每个除法步骤整除、除数非零
  _evalArith(expr){
    try{
      const toks = String(expr).replace(/×/g, '*').replace(/x/g, '*').replace(/÷/g, '/').match(/\d+|[+\-*/()]/g);
      if(!toks) return null;
      let pos = 0;
      const peek = () => toks[pos];
      function factor(){
        const t = toks[pos++];
        if(t === '('){
          const v = expr0();
          if(toks[pos++] !== ')') return NaN;
          return v;
        }
        if(/^\d+$/.test(t)) return parseInt(t, 10);
        return NaN;
      }
      function term(){
        let v = factor();
        while(peek() === '*' || peek() === '/'){
          const op = toks[pos++];
          const r = factor();
          if(op === '/'){
            if(r === 0) return NaN;
            v = v / r;
            if(!Number.isInteger(v)) return NaN;   // 除法必须整除
          } else v = v * r;
        }
        return v;
      }
      function expr0(){
        let v = term();
        while(peek() === '+' || peek() === '-'){
          const op = toks[pos++];
          const r = term();
          v = op === '+' ? v + r : v - r;
        }
        return v;
      }
      const val = expr0();
      if(pos !== toks.length || !Number.isFinite(val) || Number.isNaN(val)) return null;
      return val;
    }catch(e){ return null; }
  },

  // 用新算式的数字改写题干（数字个数对不上或题干无数字则返回原文/空）
  _mutQuestion(base, newFormula){
    const q = String(base.question || '');
    if(!/\d/.test(q)) return q;   // 纯文字题干（"一共能坐多少人？"）直接沿用
    const rewritten = this._reScene(q, base.formula, newFormula);
    return rewritten || '';   // 改写失败返回空，调用方放弃变异
  },

  // visualData 数字同步变异（按运算语义），失败返回 null（宁可不变异）
  _mutateVisual(problem, oldNums, newNums, answer){
    const vt = problem.visualType;
    const src = problem.visualData || {};
    const vd = JSON.parse(JSON.stringify(src));
    const f = String(problem.formula).replace(/\s/g, '');
    // 主运算符 = 表达式中第一个出现的运算符（"20-3×4" 是减法图，不能因含×误判为乘法图）
    const firstOp = (f.match(/[+×*\-÷/]/) || [''])[0];
    const isDiv = firstOp === '÷' || firstOp === '/';
    const isMul = firstOp === '×' || firstOp === '*';
    const isSub = firstOp === '-';
    const A = newNums[0], B = newNums[1];
    const parts = Array.isArray(vd.parts) ? vd.parts : null;
    if(vt === 'barModel' || vt === 'numberBond'){
      const bars = parts || (Array.isArray(vd.bars) ? vd.bars.map(b => ({ val: (b.val != null ? b.val : b.value), label: b.label, color: b.color })) : null);
      if(!bars) return null;
      if(isDiv){
        const nParts = bars.length;
        if(oldNums[1] !== nParts) return null;   // 原图份数≠除数，语义未知，不动
        if(A % B !== 0) return null;
        const q = A / B;
        if(answer !== q) return null;   // 算式含其他因子（图只表示除法部分），语义对不上就不动
        bars.forEach(p => { p.val = q; });   // P2-8：统一只写 val
        vd.total = A;
        return vd;
      }
      if(isMul){
        const nParts = bars.length;
        if(oldNums[1] !== nParts) return null;
        bars.forEach(p => { p.val = A; });
        vd.total = A * B;
        return vd;
      }
      if(isSub){
        if(bars.length !== 2) return null;
        // 通用减法语义：parts=[被减掉总量, 剩余]；对 125-(38+62) 复合式同样成立
        vd.total = A;
        bars[0].val = A - answer;
        bars[1].val = answer;
        return vd;
      }
      // 容斥原理图（a+b-c，三段=只A/交集/只B）
      if(isAdd && !isSub && bars.length === 3 && newNums.length === 3 && /^\d+\+\d+-\d+=/.test(f)){
        const C = newNums[2];
        if(A >= C && B >= C){
          bars[0].val = A - C;   // 只A
          bars[1].val = C;           // 交集
          bars[2].val = B - C;   // 只B
          vd.total = answer;
          return vd;
        }
        return null;
      }
      // 加法：parts 对应操作数
      if(bars.length === newNums.length){
        bars.forEach((p, i) => { p.val = newNums[i]; });
        vd.total = newNums.reduce((s, x) => s + x, 0);
        return vd;
      }
      return null;
    }
    if(vt === 'areaModel'){
      if(newNums.length < 2) return null;
      const a = A, b = B;
      const aT = Math.floor(a / 10) * 10, aO = a % 10, bT = Math.floor(b / 10) * 10, bO = b % 10;
      vd.a = a; vd.b = b;
      vd.parts = [aT * bT, aT * bO, aO * bT, aO * bO];
      vd.result = a * b;
      return vd;
    }
    if(vt === 'numberLine'){
      const oldA = oldNums[0];
      const delta = A - oldA;
      const shift = v => v + delta;
      if(vd.start != null) vd.start = shift(vd.start);
      if(vd.min != null) vd.min = shift(vd.min);
      if(vd.end != null) vd.end = shift(vd.end);
      if(vd.max != null) vd.max = shift(vd.max);
      (vd.points || []).forEach(p => { p.pos = shift(p.pos); });
      (vd.highlight || []).forEach((v, i, arr) => { arr[i] = shift(v); });
      return vd;
    }
    if(vt === 'geometry'){
      const pm = vd.params || {};
      const keys = ['length', 'width', 'base', 'height', 'side', 'radius', 'diameter', 'top', 'bottom'];
      // 旧参数按公式数字顺序映射（前 n 个数字）
      const geomOld = keys.filter(k => pm[k] != null);
      if(geomOld.length > newNums.length) return null;
      for(let i = 0; i < geomOld.length; i++){
        const nv = newNums[i];
        if(nv == null || nv < 1) return null;
        pm[geomOld[i]] = nv;
      }
      return vd;
    }
    return null;
  },
  // ===== 工具：为 variants 生成安全选项（确保正确答案在选项中且无重复） =====
  // 非数字题的语义相近干扰词（修复缺陷4：替代原"答案？N"畸形填充）
  // 几何/形状类题用形状词表，其它非数字题用"条件不足"类通用词表；只提供与正确答案不同的词
  _nonNumericDistractors(base, problem){
    const qText = String((problem && problem.question) || '');
    const kw = String((problem && problem.knowledge) || '');
    const isGeo = (problem && problem.visualType === 'geometry')
      || /图形|几何|观察|周长|面积|正方体|长方体|圆柱|三角形|正方形|长方形|圆/.test(kw + qText);
    const pool = isGeo
      ? ['正方形','长方形','三角形','圆','正方体','长方体','圆柱','球','棱柱','平行四边形','半圆','扇形']
      : ['无法确定','缺少条件','以上都不对','不能求出','数据不足'];
    return pool.map(s => String(s)).filter(s => s !== String(base));
  },

  _safeChoices(v, problem){
    let ans = v.answer != null ? v.answer : problem.answer;
    let choices = (v.choices && v.choices.length) ? v.choices : problem.choices;
    // 去重输入选项（避免母题/变体自带重复项）
    if(choices && choices.length){
      const seen = new Set();
      choices = choices.filter(c => { const k = String(c); if(seen.has(k)) return false; seen.add(k); return true; });
    }
    // 如果正确答案不在选项中，自动生成干扰选项
    if(!choices || choices.indexOf(ans) === -1){
      const a = Number(ans);
      const base = isNaN(a) ? ans : a;
      const distractors = [];
      if(typeof base === 'number'){
        // 数字题：围绕正确答案生成档位差/比例/位数错位等干扰项
        // 修复缺陷4：最小间距 step0（档位/4）淘汰"差 1/差 50"这类与答案雷同的大数干扰项，
        // 但保留"位数交换/错位"的易错干扰（它们虽接近答案，但属于真实易错点）
        const step = Math.max(1, Math.pow(10, Math.max(0, String(Math.floor(Math.abs(base))).length-2)));
        const step0 = Math.max(1, Math.floor(step / 4));
        const isDigitSwap = v => {
          try{
            const t = String(Math.abs(Math.floor(v)));
            return String(t).split('').sort().join('') === String(String(Math.abs(Math.floor(base)))).slice(0,t.length).split('').sort().join('');
          }catch(e){ return false; }
        };
        const seen = new Set([String(base)]);
        const pool = [
          base + step, base - step,
          base + step*2, base - step*2,
          Math.round(base * 1.1), Math.round(base * 0.9),
          // 易错：位数交换（如 683→638, 863）
          (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[0]+s[2]+s[1])*(base<0?-1:1):base+10;})(),
          (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[1]+s[0]+s[2])*(base<0?-1:1):base-10;})()
        ].filter(x => {
          if(x === base || x < 0) return false;
          if(!isDigitSwap(x) && Math.abs(x - base) < step0) return false; // 大数淘汰"差 50"类雷同项
          const k = String(x);
          if(seen.has(k)) return false;
          seen.add(k);
          return true;
        });
        // 选取3个最接近的干扰项
        pool.sort((x,y)=>Math.abs(x-base)-Math.abs(y-base));
        distractors.push(...pool.slice(0,3));
        // 兜底：若上述策略不足3个，按档位递进补齐（不再用 +1/+2/+3 制造雷同）
        let g = step0;
        while(distractors.length < 3 && g < Math.abs(base) + step*4){
          for(const cand of [base + g, base - g]){
            const k = String(cand);
            if(cand !== base && cand >= 0 && !seen.has(k) && Math.abs(cand - base) >= step0){ seen.add(k); distractors.push(cand); break; }
          }
          if(distractors.length < 3) g += step0;
        }
      }else{
        // 非数字题：用原题选项去掉重复后 + 正确答案
        const seen = new Set([String(base)]);
        (problem.choices || []).forEach(c => {
          const k = String(c);
          if(c !== ans && !seen.has(k)){ seen.add(k); distractors.push(c); }
        });
        // 修复缺陷4：不足 3 个干扰项时用语义相近的同类干扰词补齐，不再拼"答案？N"畸形项
        const fillPool = this._nonNumericDistractors(base, problem);
        for(const word of fillPool){
          if(distractors.length >= 3) break;
          const k = String(word);
          if(!seen.has(k)){ seen.add(k); distractors.push(word); }
        }
        distractors.length = Math.min(3, distractors.length);
      }
      // 打乱顺序插入正确答案
      const merged = [ans, ...distractors];
      for(let i=merged.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[merged[i],merged[j]]=[merged[j],merged[i]];}
      choices = merged;
    }
    // 再次去重并确保答案在选项中
    const finalSeen = new Set();
    const finalChoices = [];
    choices.forEach(c => {
      const k = String(c);
      if(!finalSeen.has(k) && finalChoices.length < 4){ finalSeen.add(k); finalChoices.push(c); }
    });
    if(finalChoices.indexOf(ans) < 0) finalChoices.unshift(ans);
    return {ans, choices: finalChoices.slice(0,4), correctIdx: finalChoices.indexOf(ans)};
  },

  // L1 基础：原题换数字（巩固）
  _renderL1(problem){
    const v = (problem.variants && problem.variants[0]) || problem;
    const {ans, choices, correctIdx} = this._safeChoices(v, problem);
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 6 · 阶梯练习 · L1 基础</span>
      <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
        <span style="padding:3px 10px;background:var(--teal-soft);color:var(--teal-700);border-radius:12px;font-size:11px;font-weight:700">L1 基础</span>
        <span style="font-size:13px;color:var(--text-3);font-weight:600">先来一道相似的题热热手</span>
      </div>
      <div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),#fff);border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
        ${this._escape(v.question || problem.question)}
      </div>
      ${this._formulaRow(v.formula || problem.formula, 'var(--teal)')}
      <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(choices.length,4)},1fr)">
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},1)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // 概念题没有算式：不能再出现「算式：」后面空着的一行，直接整行不显示
  _formulaRow(txt, color){
    const s = String(txt == null ? '' : txt).trim();
    if(!s) return '';
    return `<div style="font-size:14px;color:var(--text-2);margin-bottom:6px">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:${color}">${this._escape(s)}</span></div>`;
  },
  // L2 变式：先文字后图形（数学阅读训练核心）
  _renderL2(problem){
    const showVisual = this._sess.practiceVisualShown;
    const v = (problem.variants && problem.variants[1]) || (problem.variants && problem.variants[0]) || problem;
    // 全链路探测：真实数值图 → 概念示意图。旧版这里无条件承诺「看图验证」，
    // 遇到概念题（无图）就变成点开一片空白 —— 孩子感受＝「点了没反应」。
    const visualHTML = this._visualFor(problem);
    const conceptEntry = this._conceptEntry(problem);
    const isConcept = !!conceptEntry;
    if(!showVisual){
      // 1) 纯文字题：孩子先在没有图形辅助下解答
      const {ans, choices, correctIdx} = this._safeChoices(v, problem);
      return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
        <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 6 · 阶梯练习 · L2 变式</span>
        <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
          <span style="padding:3px 10px;background:var(--yellow-soft);color:var(--yellow-700);border-radius:12px;font-size:11px;font-weight:700">L2 变式</span>
          <span style="font-size:13px;color:var(--text-3);font-weight:600">先读文字解答，再看图验证 📖</span>
        </div>
        <div style="padding:14px 16px;background:#FFF8E6;border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
          📖 ${this._escape(v.question || problem.question)}
        </div>
        ${(typeof window._formulaLeaksPreAnswer==='function' && window._formulaLeaksPreAnswer({formula:(v.formula||problem.formula), question:(v.question||problem.question), scene:v.scene||''}))
          ? `<div style="font-size:13px;color:var(--text-3);padding:8px 12px;background:var(--teal-soft);border-radius:8px;margin-bottom:6px">🤫 算式要自己列，答完再揭晓</div>`
          : this._formulaRow(v.formula || problem.formula, 'var(--teal)')}
        <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(choices.length,4)},1fr)">
          ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},2)">${this._escape(String(c))}</div>`).join('')}
        </div>
        <div style="margin-top:10px;padding:10px 12px;background:var(--teal-soft);border-radius:8px;font-size:12px;color:var(--teal-700);font-weight:600">
          ${isConcept ? '💡 答完后点击下方按钮，用概念对照核对自己的答案' : '💡 答完后点击下方按钮，用图形验证你的答案对不对'}
        </div>
        <div style="text-align:center;margin-top:10px">
          <button onclick="MathFlowV5._showPracticeVisual()" style="padding:10px 22px;background:var(--teal);color:#fff;border:none;border-radius:18px;font-weight:700;cursor:pointer">${isConcept ? '📌 概念验证 →' : '📊 看图验证 →'}</button>
        </div>
        <div id="v5PracticeFeedback" style="margin-top:12px"></div>
      </div>`;
    }
    // 2) 显示验证屏：概念题给「概念对照图 + 概念验证」，数值题给「图形 + 图形验证」；
    //    两者都保证屏上一定有可看的图，不再出现「空图 + 空承诺」。
    const {ans} = this._safeChoices(v, problem);
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 6 · 阶梯练习 · L2 ${isConcept ? '概念验证' : '图形验证'}</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">${isConcept ? '📌 用概念对照核对你的答案' : '📊 用图形对照你的答案'}</div>
      <div style="background:#fff;border-radius:14px;padding:8px;border:1px solid rgba(245,184,0,.25);margin-bottom:10px">${visualHTML || this._conceptCardHTML(problem)}</div>
      <div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ✅ 正确答案是 <b>${this._escape(String(ans))}</b>。<br>${isConcept ? '对照上面的概念要点，你的选择和它一致吗？' : '看，图形里的数量关系和你的答案一致吗？'}
      </div>
      <div style="text-align:center;margin-top:14px">
        <button onclick="MathFlowV5._practiceNext()" style="padding:10px 24px;background:var(--coral);color:#fff;border:none;border-radius:20px;font-weight:800;cursor:pointer">挑战 L4 陷阱题 →</button>
      </div>
    </div>`;
  },
  // L3 进阶题：应用题（结合生活场景）
  // 修复：变体没有自己的 scene 时，必须保证“一屏一题”，绝不再把母题场景和变体问题生硬拼接。
  // 策略：
  //   1) 变体自带 scene → 直接用；
  //   2) 变体 question 含数字（自成一道完整题）→ 只用 question；
  //   3) 否则才尝试 _reScene，且改写后仍要语义一致：question 里的关键名词必须在改写后的 scene 中出现。
  _renderL3(problem){
    const variant = problem.variants && problem.variants[1] || {};
    // 修复缺陷4：L3 不再用无信息占位句 + 与题干脱节的母题答案生成雷同干扰项。
    // 变体缺 question 时退回母题真实题干（与 L2/L4 对齐），选项也随母题，保证“有前提、可选”。
    const question = variant.question || problem.question;
    let scene = variant.scene || '';
    if(!scene && !(/\d/.test(question))){
      scene = this._reScene(problem.scene, problem.formula, variant.formula || variant.question);
      if(scene && !this._sceneQuestionConsistent(scene, question)) scene = '';
    }
    // 变体无 answer 时改用母题答案生成选项，避免“占位题干 + 母题答案”错位
    const {ans, choices, correctIdx} = this._safeChoices(variant.answer != null ? variant : problem, problem);

    return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--pink);color:#fff">STAGE 6 · 阶梯练习 · L3 进阶</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📝 进阶挑战 · 第 ${this._sess.practiceIndex + 1} / ${this._sess.practiceTotal} 题</div>
      <div style="font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;padding:16px 18px;background:linear-gradient(135deg,#FCE7F3,#fff);border-radius:12px;border:1px solid rgba(232,160,191,.3)">
        ${scene ? this._escape(scene) + '<br>' : ''}${this._escape(question)}
      </div>
      <div class="wp-choices" id="v5PracticeChoices" style="grid-template-columns:repeat(2,1fr);margin-top:12px">
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},3)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // scene 与 question 语义一致性检查：question 中的实词名词应在 scene 中出现。
  _sceneQuestionConsistent(scene, question){
    if(!scene || !question) return false;
    // 提取 question 中的名词候选（2字及以上连续中文字符）
    const qNouns = (String(question).match(/[\u4e00-\u9fa5]{2,}/g) || []);
    if(!qNouns.length) return true;
    const s = String(scene);
    const matched = qNouns.filter(n => s.indexOf(n) >= 0);
    // 至少 50% 的名词在 scene 中出现，或核心疑问词一致（多少/几/多少元等）
    return matched.length / qNouns.length >= 0.5;
  },
  // 用新算式的数字按出现顺序改写场景文本，得到数字一致的新场景。
  // 例：scene"…原有386本…新买进247本…" + 旧式"386 + 247 = ?" + 新式"295+156=?"
  //  →  "…原有295本…新买进156本…"。任何一步对不上就返回 ''，由调用方降级为只显示题目。
  _reScene(scene, oldFormula, newFormula){
    try{
      if(!scene || !oldFormula || !newFormula) return '';
      const oldNums = (String(oldFormula).match(/\d+/g) || []).map(Number);
      const newNums = (String(newFormula).match(/\d+/g) || []).map(Number);
      // 数字个数不一致：放弃改写（宁可不出场景，也不出数字互相矛盾的场景）
      if(!oldNums.length || newNums.length !== oldNums.length) return '';
      let replaced = 0;
      const out = String(scene).replace(/\d+/g, m => {
        const v = parseInt(m, 10);
        const i = oldNums.indexOf(v, replaced);
        if(i >= 0){ replaced = i + 1; return String(newNums[i]); }
        return m;
      });
      return replaced >= oldNums.length ? out : '';
    }catch(e){ return ''; }
  },
  // L4 陷阱题：含干扰信息或易错点，做错触发苏格拉底追问
  _renderL4(problem){
    // 用第 2 个变式或构造陷阱题——数字来自变异引擎，每次全新
    const v = this._sess.levelVar || (problem.variants && problem.variants[1]) || (problem.variants && problem.variants[0]) || problem;
    const {ans, choices} = this._safeChoices(v, problem);
    // 构造陷阱选项：把正确答案和易错答案都放进去
    const trap = choices.length > 1 ? choices.find(c => c !== ans) : (ans + 2);
    const trapChoices = [...new Set([ans, trap, ...choices.filter(c => c !== ans && c !== trap)])].slice(0,4);
    const correctIdx = trapChoices.indexOf(ans);
    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 6 · 阶梯练习 · L4 陷阱</span>
      <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
        <span style="padding:3px 10px;background:var(--coral-soft);color:var(--coral);border-radius:12px;font-size:11px;font-weight:700">L4 陷阱</span>
        <span style="font-size:13px;color:var(--text-3);font-weight:600">⚠️ 小心！这道题有容易出错的地方</span>
      </div>
      <div style="padding:14px 16px;background:linear-gradient(135deg,#FFE9D6,#fff);border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
        ${this._escape(v.question || problem.question)}
      </div>
      ${this._formulaRow(v.formula || problem.formula, 'var(--coral)')}
      <div style="margin-top:6px;padding:8px 12px;background:#FFE9D6;border-radius:8px;font-size:12px;color:var(--coral);font-weight:600">⚠️ 提示：${this._escape(problem.hint || '注意审题，分清已知和所求')}</div>
      <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(trapChoices.length,4)},1fr);margin-top:8px">
        ${trapChoices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},4)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // 阶梯练习答题
  _practiceAnswer(el, chosenIdx, correctIdx, level){
    chosenIdx = parseInt(chosenIdx);
    correctIdx = parseInt(correctIdx);
    level = parseInt(level);
    const isCorrect = chosenIdx === correctIdx;
    try{ if(window.QuizMood) window.QuizMood[isCorrect?'right':'wrong'](); }catch(e){}
    const container = el.parentElement;
    if(container){
      container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
      el.classList.add(isCorrect?'correct':'wrong');
    }
    const fb = document.getElementById('v5PracticeFeedback');
    if(fb){
      const _pwOffer = (typeof PetWhisper!=='undefined' && !this._sess.whisperDone)
        ? PetWhisper.offer(this._sess.problem) : '';
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7;margin-bottom:12px">✅ 答对了！</div>` + _pwOffer
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">❌ 再想想，看下面的解析</div>`;
    }
    if(isCorrect){
      this._sess.practiceIndex++;
      if(this._sess.practiceIndex >= this._sess.practiceTotal){
        this._finishPractice();
        return;
      }
      // 立即显示下一题按钮，不依赖 setTimeout
      const nextBtn = document.getElementById('v5PracticeNextBtn');
      if(nextBtn){
        nextBtn.style.display = 'block';
      } else {
        // 注入按钮
        const div = document.createElement('div');
        div.id = 'v5PracticeNextBtn';
        div.style.cssText = 'margin-top:12px;display:none';
        div.innerHTML = `<button onclick="MathFlowV5.advance('practice')" style="width:100%;padding:13px;background:var(--teal);color:#fff;border:none;border-radius:11px;font-size:15px;font-weight:700;cursor:pointer">下一题 →</button>`;
        fb.parentNode.appendChild(div);
        div.style.display = 'block';
      }
    } else {
      // 答错显示解析
      setTimeout(()=>{ if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 1500);
    }
  },
  // L2 显示图形验证
  _showPracticeVisual(){
    this._sess.practiceVisualShown = true;
    this._saveProgress();
    if(typeof updateMathStageV5==='function') updateMathStageV5();
  },
  // 进入下一练习等级
  _practiceNext(){
    this._sess.practiceLevel = 4;
    this._sess.practiceVisualShown = false;
    this._saveProgress();
    if(typeof updateMathStageV5==='function') updateMathStageV5();
  },
  // 阶梯练习完成
  _finishPractice(){
    // 加入复习队列
    try{
      const pid = this._sess.profileId;
      const k = this._sess.problem && this._sess.problem.knowledge;
      if(pid && k && typeof SpacedReview!=='undefined' && SpacedReview.add) SpacedReview.add(pid, 'math', k);
    }catch(e){}
    if(typeof toast==='function') toast('🎉 今日学习完成！已加入复习队列');
    // 设置完成状态并立即更新DOM
    this._sess.stage = 'complete';
    this._saveProgress();
    if(typeof updateMathStageV5==='function') updateMathStageV5();
  },
  // 完成页面（10题练习结束后）
  _renderComplete(problem){
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 6 · 练习完成</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">🎉 恭喜完成今日练习！</div>
      <div style="padding:20px;background:linear-gradient(135deg,var(--yellow-soft),#fff);border-radius:14px;text-align:center">
        <div style="font-size:24px;font-weight:800;color:var(--navy);margin-bottom:12px">🌟 今日学习完成 🌟</div>
        <div style="font-size:14px;color:var(--text-2);line-height:1.8">
          完成了 ${this._sess.practiceTotal} 道练习题<br>
          掌握了 ${this._escape(problem.knowledge || '新知识')}<br>
          继续保持，每天进步一点点！
        </div>
      </div>
      <div style="text-align:center;margin-top:18px">
        <button onclick="mathNextProblem()" style="padding:12px 28px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer">下一题 →</button>
        <button onclick="MathFlowV5._backToGrade()" style="padding:12px 28px;margin-left:8px;background:var(--navy-soft);color:var(--navy);border:2px solid var(--navy);border-radius:22px;font-weight:700;cursor:pointer">返回年级选择</button>
      </div>
    </div>`;
  },
  // 返回年级选择
  _backToGrade(){
    this._sess = null;
    if(typeof render==='function') render();
  },

  // ============================================================
  // 苏格拉底式追问（L4 做错时触发）
  // ============================================================
  renderSocratic(problem, userAnswer){
    const step = this._sess.socraticStep || 0;
    const op = (typeof MathVisualV5!=='undefined' && MathVisualV5._detectOp) ? MathVisualV5._detectOp(problem.formula) : this._detectOp(problem.formula);
    const steps = [
      { q:'我们一起来检查。第一步：先把题目里的<b>关键数</b>找出来，写在本子上。', action:'找数' },
      { q:'好，那这些数之间是什么关系？看算式里的「'+op+'」，是要把数合起来、分开、还是几倍？', action:'定关系' },
      { q:'再看：你刚才选的答案是「'+this._escape(String(userAnswer))+'」，我们倒着想——如果答案是它，反推回去对不对？', action:'反推' },
      { q:'你看，正确答案是「'+this._escape(String(problem.answer))+'」，和你选的「'+this._escape(String(userAnswer))+'」<b>一样吗？</b>哪里差了一点？', action:'对比' },
    ];
    const cur = steps[Math.min(step, steps.length-1)];
    return `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:12px;color:#fff">
      <div style="font-size:12px;opacity:.85;font-weight:600;margin-bottom:6px">🦉 苏格拉底式追问 · 第 ${step+1} / ${steps.length} 步</div>
      <div style="font-size:14px;line-height:1.75">${cur.q}</div>
      <div style="margin-top:12px;display:flex;gap:8px">
        <button onclick="MathFlowV5._socraticNext()" style="padding:8px 18px;background:var(--yellow);color:var(--navy);border:none;border-radius:16px;font-weight:700;cursor:pointer;font-size:12px">我明白了，下一步 →</button>
        ${step>=steps.length-1?'<button onclick="MathFlowV5._socraticRetry()" style="padding:8px 18px;background:var(--coral);color:#fff;border:none;border-radius:16px;font-weight:700;cursor:pointer;font-size:12px">重新做这道题</button>':''}
      </div>
    </div>`;
  },
  _socraticNext(){
    this._sess.socraticStep = (this._sess.socraticStep||0) + 1;
    if(this._sess.socraticStep >= 4){
      // 追问完成，回到 L4 重做
      this._sess.socraticStep = 0;
      if(typeof updateMathStageV5==='function') updateMathStageV5();
      return;
    }
    if(typeof updateMathStageV5==='function') updateMathStageV5();
  },
  _socraticRetry(){
    this._sess.socraticStep = 0;
    if(typeof updateMathStageV5==='function') updateMathStageV5();
  },

  // ============================================================
  // 表达度判定：教小伙伴模式
  // ============================================================
  renderTeachPet(problem){
    // 从 problem.knowledge 提取关键词
    const knowledge = problem.knowledge || '这个知识';
    const keywords = this._extractKeywords(knowledge);
    const SR = (typeof window!=='undefined') && (window.SpeechRecognition || window.webkitSpeechRecognition);
    const petEmoji = '🐰';
    if(SR){
      return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
        <span class="cpa-tag" style="background:var(--pink);color:#fff">🐰 教小伙伴</span>
        <div style="margin:14px 0;padding:18px 20px;background:linear-gradient(135deg,var(--pink),#F4C2D8);border-radius:14px;color:#fff;text-align:center">
          <div style="font-size:36px;margin-bottom:8px">${petEmoji}</div>
          <div style="font-size:15px;font-weight:700;line-height:1.7">「我不太懂<b>${this._escape(knowledge)}</b>，<br>你能用自己的话教教我吗？」</div>
        </div>
        <div style="margin-top:12px;padding:14px 16px;background:var(--teal-soft);border-radius:10px">
          <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:8px">🎤 点击按钮开始讲解（需要麦克风权限）</div>
          <div style="display:flex;gap:8px">
            <button onclick="MathFlowV5._startTeach()" style="padding:10px 22px;background:var(--teal);color:#fff;border:none;border-radius:18px;font-weight:700;cursor:pointer">🎤 我开始教它了</button>
          </div>
          <div id="v5TeachStatus" style="margin-top:10px;font-size:13px;color:var(--text-2)">等待你开口讲解...</div>
        </div>
        <div style="margin-top:10px;padding:10px 12px;background:#FFF8E6;border-radius:8px;font-size:12px;color:var(--yellow-700)">💡 讲解时说到这些关键词算你过关：${keywords.map(k=>'「'+k+'」').join('、')}</div>
        <div id="v5TeachFeedback" style="margin-top:12px"></div>
      </div>`;
    }
    // 降级：选择题
    const choices = [
      `${knowledge}的核心方法是${this._methodName(problem)}`,
      `${knowledge}用画图没用`,
      `${knowledge}不用记公式`,
      `${knowledge}随便算就行`
    ];
    const correctIdx = 0;
    return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--pink);color:#fff">🐰 教小伙伴</span>
      <div style="margin:14px 0;padding:18px 20px;background:linear-gradient(135deg,var(--pink),#F4C2D8);border-radius:14px;color:#fff;text-align:center">
        <div style="font-size:36px;margin-bottom:8px">${petEmoji}</div>
        <div style="font-size:15px;font-weight:700;line-height:1.7">「我不太懂<b>${this._escape(knowledge)}</b>，<br>你能告诉我哪个说法对吗？」</div>
      </div>
      <div class="wp-choices" style="grid-template-columns:1fr">
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._teachChoose(this,${i},${correctIdx})">${this._escape(c)}</div>`).join('')}
      </div>
      <div id="v5TeachFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // 教小伙伴 modal 入口（完成页调用）
  renderTeachPetModal(){
    if(!this._sess || !this._sess.problem) return;
    const html = this.renderTeachPet(this._sess.problem);
    const target = document.getElementById('v5PracticeFeedback') || document.querySelector('.cpa-layer');
    if(target) target.innerHTML = html;
  },
  // 启动语音识别教小伙伴
  _startTeach(){
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SR){ if(typeof toast==='function') toast('浏览器不支持语音识别，请用选择题模式'); return; }
    const rec = new SR();
    rec.lang = 'zh-CN';
    rec.continuous = false;
    rec.interimResults = false;
    const status = document.getElementById('v5TeachStatus');
    const fb = document.getElementById('v5TeachFeedback');
    if(status) status.textContent = '🎤 正在听...大声讲吧！';
    rec.onresult = (e)=>{
      const text = e.results[0][0].transcript || '';
      if(status) status.textContent = '📝 你说：「'+text+'」';
      this._checkTeach(text, fb);
    };
    rec.onerror = ()=>{
      if(status) status.textContent = '⚠️ 没听清，再试一次或用文字说';
    };
    rec.onend = ()=>{
      if(status && status.textContent.indexOf('正在听')>=0) status.textContent='没有检测到声音，再点一次试试';
    };
    try{ rec.start(); }catch(e){ if(typeof toast==='function') toast('启动失败，请重试'); }
  },
  // 检测讲解关键词
  _checkTeach(text, fb){
    const knowledge = this._sess.problem && this._sess.problem.knowledge || '';
    const keywords = this._extractKeywords(knowledge);
    const hit = keywords.filter(k=> text.indexOf(k) >= 0);
    if(fb){
      if(hit.length >= Math.max(1, Math.ceil(keywords.length/2))){
        fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">🐰 <b>「哦！原来是这样！谢谢你老师！🎉」</b><br><span style="font-size:12px;color:var(--text-2)">你讲到了关键词：${hit.map(k=>'「'+k+'」').join('、')}，表达得真清楚！</span></div>`;
        try{ if(typeof setStar==='function') setStar(3, '教小伙伴'); }catch(e){}
      }else{
        fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">🐰「我还有点不明白...」<br>试试提到这些关键词：${keywords.map(k=>'「'+k+'」').join('、')}<br><button onclick="MathFlowV5._startTeach()" style="margin-top:8px;padding:6px 16px;background:var(--coral);color:#fff;border:none;border-radius:14px;cursor:pointer">再讲一次</button></div>`;
      }
    }
  },
  _teachChoose(el, chosenIdx, correctIdx){
    chosenIdx = parseInt(chosenIdx);
    correctIdx = parseInt(correctIdx);
    const isCorrect = chosenIdx === correctIdx;
    try{ if(window.QuizMood) window.QuizMood[isCorrect?'right':'wrong'](); }catch(e){}
    const container = el.parentElement;
    container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
    el.classList.add(isCorrect?'correct':'wrong');
    if(!isCorrect) container.querySelectorAll('.wp-choice')[correctIdx].classList.add('correct');
    const fb = document.getElementById('v5TeachFeedback');
    if(fb){
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">🐰 <b>「哦！原来是这样！谢谢你老师！🎉」</b></div>`
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">🐰「嗯...好像不太对哦」再想想？</div>`;
    }
    if(isCorrect){ try{ if(typeof setStar==='function') setStar(3, '教小伙伴'); }catch(e){} }
  },
  // 从知识点提取关键词
  _extractKeywords(knowledge){
    const k = knowledge || '';
    const map = {
      '加法':['加','合起来','一共','加法'],
      '减法':['减','去掉','还剩','减法'],
      '乘法':['乘','几倍','几个','乘法'],
      '除法':['除','平均分','每份','除法'],
      '毫米':['毫米','mm','小','尺子'],
      '分米':['分米','dm','手掌','10厘米'],
      '千米':['千米','km','1000米','远'],
      '吨':['吨','1000千克','重','大象'],
      '周长':['周长','一圈','边长'],
      '面积':['面积','铺满','长乘宽'],
      '分数':['分数','平均分','分子','分母'],
      '集合':['集合','重复','减去','重叠'],
      '圆':['圆','半径','π','r'],
    };
    let keys = [];
    for(const mk in map){ if(k.indexOf(mk)>=0){ keys = keys.concat(map[mk]); } }
    if(!keys.length) keys = [k, '公式', '计算'];
    return [...new Set(keys)].slice(0,4);
  },

  // ============================================================
  // 单元挑战（每完成一个单元触发，5 分钟）
  // ============================================================
  renderUnitChallenge(unitName, knowledgePoints){
    const kps = knowledgePoints || [];
    const scene = `小明家要装修新房子。他要用本单元学过的「${this._escape(unitName||'本单元')}」的所有知识来帮忙：${kps.slice(0,3).map((k,i)=>`第${i+1}步用到「${this._escape(k)}」`).join('，')}。`;
    return `<div class="cpa-layer" style="border-left-color:var(--navy);animation:fadeIn .5s ease">
      <span class="cpa-tag" style="background:var(--navy);color:#fff">🏆 单元挑战 · ${this._escape(unitName||'综合任务')}</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">⏰ 5 分钟 · 用本单元所有知识解决真实问题</div>
      <div style="padding:18px 20px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:14px;color:#fff;margin-bottom:12px">
        <div style="font-size:12px;opacity:.85;font-weight:600;margin-bottom:8px">🏠 真实场景</div>
        <div style="font-size:15px;line-height:1.8">${this._escape(scene)}</div>
      </div>
      <div style="padding:14px 16px;background:var(--yellow-soft);border-radius:10px;margin-bottom:12px">
        <div style="font-size:13px;font-weight:800;color:var(--yellow-700);margin-bottom:8px">📋 本单元知识点清单</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${kps.map((k,i)=>`<span style="padding:4px 10px;background:#fff;border:1px solid var(--yellow);color:var(--yellow-700);border-radius:12px;font-size:12px;font-weight:600">${i+1}. ${this._escape(k)}</span>`).join('')}
        </div>
      </div>
      <div style="padding:14px 16px;background:var(--teal-soft);border-radius:10px">
        <div style="font-size:13px;color:var(--teal-700);font-weight:700;margin-bottom:8px">✏️ 你的任务</div>
        <div style="font-size:14px;color:var(--ink-700);line-height:1.7">写出一个解决这个问题的方案，说说每一步用到哪个知识点。完成后请爸爸妈妈帮忙看看 👨‍👩‍👧</div>
        <textarea id="v5UnitInput" placeholder="我的方案是..." style="width:100%;min-height:80px;padding:10px 12px;border:1.5px solid rgba(0,168,150,.3);border-radius:10px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box;margin-top:8px"></textarea>
      </div>
      <div style="text-align:center;margin-top:14px">
        <button onclick="MathFlowV5._unitSubmit()" style="padding:12px 28px;background:linear-gradient(135deg,var(--navy),#2a4a72);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(30,58,95,.35)">提交挑战方案 →</button>
      </div>
      <div id="v5UnitFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  _unitSubmit(){
    const ta = document.getElementById('v5UnitInput');
    const v = ta ? ta.value.trim() : '';
    const fb = document.getElementById('v5UnitFeedback');
    if(!fb) return;
    if(v.length < 10){
      fb.innerHTML = `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">再写详细一点吧，至少说明每一步用哪个知识点哦 👆</div>`;
      return;
    }
    try{ if(typeof setStar==='function') setStar(5, '单元挑战'); }catch(e){}
    fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.75">
      🏆 <b>挑战完成！</b>+5 ⭐<br>
      <span style="font-size:13px;color:var(--text-2)">你的方案：「${this._escape(v.slice(0,80))}${v.length>80?'...':''}」</span><br>
      <span style="font-size:12px;color:var(--text-2)">能综合运用本单元知识解决真实问题，你已经是小小数学家了！🎉</span>
    </div>`;
  },

  // ============================================================
  // ===== 辅助方法 =====
  // ============================================================

  // ============================================================
  // 概念题支持（2026-09-26 真机缺陷修复）
  // 背景：3a/3b 里 13 道「概念判断 / 单位认识」题（formula 为空、没有数量关系）
  // 被误配成 numberBond 数值图形，数据里 parts[].val 全是 null →
  //   ① STAGE 4 数形结合讲解：图形区只剩一句「这是一道概念题…」，却还在讲「数字 Bond」；
  //   ② L2 变式「📊 看图验证」点开后没有图，只有同一句提示（孩子感受＝点了没反应）。
  // 修法：给这 7 个知识点补「概念示意图 + 概念对照卡」，并把概念分支接入
  //       L2 验证、STAGE 4 讲解、STAGE 2 引导发现；另拦住预热阶段把 val=null 画成 0。
  // ============================================================
  _conceptMap(){
    if(this.__conceptMap) return this.__conceptMap;
    // 平移与旋转共用同一张对照图与同一套讲解，只改名称
    const motion = {
      key:'motion',
      look:'看上面这张对照图：左边是平移——物体沿直线整体挪动，方向不变；右边是旋转——物体绕着一个点转动，中心点不动。',
      keyPoint:'物体是沿着直线整体移动，还是绕着一个固定的点转动',
      method:'对照「平移沿直线、方向不变；旋转绕点转」来判断',
      points:[
        '平移：物体沿直线移动，移动过程中方向不变',
        '平移的例子：推拉窗户、拉开抽屉、电梯上下、国旗上升',
        '旋转：物体绕一个点（或一条轴）转动，中心点不动',
        '旋转的例子：风车叶片、钟表指针、方向盘、荡秋千'
      ],
      understand:'平移和旋转都只是位置或朝向在变。平移是「整体沿直线挪动」，物体本身的方向不变；旋转是「绕着一个固定点转」，方向在改变。',
      generalize:'以后看到物体在动，先问一句：它是整块沿直线挪，还是绕着一个点在转？沿直线挪＝平移，绕点转＝旋转。'
    };
    this.__conceptMap = {
      '平移': Object.assign({}, motion, { name:'平移', judge:'判断是平移还是旋转' }),
      '旋转': Object.assign({}, motion, { name:'旋转', judge:'判断是平移还是旋转' }),
      '年、月、日': {
        key:'calendar', name:'年、月、日', judge:'判断年份或日期的知识',
        look:'看上面两张 2 月日历：平年的 2 月只有 28 天，闰年的 2 月多出 1 天、是 29 天。',
        keyPoint:'2 月有多少天：28 天是平年，29 天是闰年',
        method:'用年份除以 4 看有没有余数',
        points:[
          '平年 2 月 28 天，全年 365 天；闰年 2 月 29 天，全年 366 天',
          '年份能被 4 整除的一般是闰年（整百年要能被 400 整除）',
          '2024 ÷ 4 = 506，没有余数 → 2024 年是闰年',
          '节日日期要记牢：儿童节 6 月 1 日、国庆节 10 月 1 日'
        ],
        understand:'闰年比平年多出的那一天，就加在 2 月里。所以看 2 月是 28 天还是 29 天，就知道这一年是平年还是闰年。',
        generalize:'判断平年闰年：普通年份除以 4 没有余数就是闰年；整百年（如 1900 年）要除以 400 没有余数才是闰年。'
      },
      '克和千克': {
        key:'mass', name:'克和千克', judge:'选出合适的质量单位',
        look:'看上面的等量关系：1 千克 ＝ 1000 克。下面三个例子里，越轻的东西用的单位越小。',
        keyPoint:'这个东西有多重：轻的用克，重的用千克，很重的用吨',
        method:'拿生活经验估一估轻重，再选单位',
        points:[
          '1 千克 ＝ 1000 克，1 吨 ＝ 1000 千克',
          '较轻的用「克」：1 个鸡蛋约 50 克、1 袋食盐 500 克',
          '较重的用「千克」：1 个西瓜约 5 千克、1 头牛约 500 千克',
          '很重的大宗货物用「吨」，如 1 头大象约 5 吨'
        ],
        understand:'单位要和物体的轻重匹配：数字小、东西轻，多半用克；数字大、东西重，多半用千克。',
        generalize:'估重量时先想生活经验：鸡蛋、硬币、食盐用克；西瓜、书包、小动物用千克；卡车、大象用吨。'
      },
      '数字编码': {
        key:'idcode', name:'数字编码', judge:'判断号码中某一位表示的意思',
        look:'看上面的身份证号分成了几段：每一段都固定表示一项信息，位数不同，含义就不同。',
        keyPoint:'这个号码的第几位，固定表示什么信息',
        method:'把号码分段，再对到「第几位表示什么」上',
        points:[
          '身份证号共 18 位，是「分段的编码」',
          '前 6 位＝地址码（出生地）；第 7～14 位＝出生日期码（年月日）',
          '第 15～17 位＝顺序码，其中第 17 位（倒数第 2 位）表示性别：奇数男、偶数女',
          '最后 1 位＝校验码，用来检查号码有没有写错'
        ],
        understand:'身份证号不是随便排的，每一段都固定表示一项信息，所以能从号码里读出出生地和出生日期。',
        generalize:'遇到编码类问题，先想「哪几位/哪一段固定表示什么」，再对着位数去读，别一位一位瞎猜。'
      },
      '线段直线射线': {
        key:'lines', name:'线段直线射线', judge:'判断是线段、射线还是直线',
        look:'看上面三行图：端点越少，能延长的方向越多——2 个端点是线段，1 个端点是射线，没有端点是直线。',
        keyPoint:'这条线有几个端点，还能不能无限延长',
        method:'数端点：2 个→线段，1 个→射线，0 个→直线',
        points:[
          '线段：有 2 个端点，可以量出长度',
          '射线：只有 1 个端点，一端无限延长，量不出长度',
          '直线：没有端点，两端都无限延长，量不出长度',
          '「一端无限延长」→射线；「两端都无限延长」→直线'
        ],
        understand:'区别只看「端点个数」：2 个端点是线段，1 个端点是射线，0 个端点是直线。',
        generalize:'以后看到「无限延长」，先数端点：一端延长是射线，两端延长是直线；没说延长就是线段。'
      },
      '锐角直角钝角': {
        key:'angles', name:'锐角直角钝角', judge:'判断是什么角',
        look:'看上面四个角：拿直角当标尺，比直角小的是锐角，比直角大的是钝角，正好够半圈的是平角。',
        keyPoint:'这个角比直角大还是小',
        method:'拿直角当标尺比一比',
        points:[
          '锐角：比直角小（小于 90°）',
          '直角：正好 90°，用「∟」标出来',
          '钝角：比直角大、比平角小（90°～180°）',
          '平角：正好 180°，两条边连成一条直线'
        ],
        understand:'判断角的大小，就拿直角当标尺：比直角小的是锐角，比直角大的是钝角，正好 90° 的是直角。',
        generalize:'以后量角先找直角对照：小于直角→锐角，等于→直角，大于→钝角，正好半圈→平角。'
      }
    };
    return this.__conceptMap;
  },
  // 命中概念题返回该条配置（含按题干微调），否则 null
  _conceptEntry(problem){
    try{
      if(!problem) return null;
      const k = String(problem.knowledge || '').trim();
      if(!k) return null;
      const map = this._conceptMap();
      let e = map[k] || null;
      if(!e){ for(const key in map){ if(k.indexOf(key) >= 0){ e = map[key]; break; } } }
      if(!e) return null;
      e = Object.assign({}, e);
      // 年月日：节日日期题与平年闰年题问的不是同一件事，按题干微调第一步
      if(e.key === 'calendar' && /节/.test(String(problem.question || ''))) e.judge = '判断这个节日是几月几日';
      return e;
    }catch(err){ return null; }
  },
  // 概念示意图（按 key 缓存，避免每次重算）
  _conceptSVG(key){
    try{
      this.__conceptSvgCache = this.__conceptSvgCache || {};
      if(this.__conceptSvgCache[key] != null) return this.__conceptSvgCache[key];
      const fn = this['_csvg_' + key];
      this.__conceptSvgCache[key] = (typeof fn === 'function') ? (fn.call(this) || '') : '';
      return this.__conceptSvgCache[key];
    }catch(e){ return ''; }
  },
  // 该题该看的图：真实数值图优先，概念题退回概念示意图
  _visualFor(problem){
    try{
      const h = _mvHTML(problem);
      if(h && h.indexOf('mv-empty') < 0) return h;
    }catch(e){}
    const e = this._conceptEntry(problem);
    return (e && this._conceptSVG(e.key)) || '';
  },
  // 概念对照卡：没有图形可看时，用「要点」替代空图
  _conceptCardHTML(problem, answer){
    const e = this._conceptEntry(problem);
    const pts = (e && e.points) || ['这是一道概念判断题：答案要靠理解概念来判断，不是靠算数。'];
    return `<div class="mv-wrap mv-concept-card">
      <div style="font-size:13px;font-weight:800;color:#0F766E;margin-bottom:8px">📌 ${this._escape((e ? e.name + ' · ' : '') + '概念对照')}</div>
      <ul style="margin:0;padding-left:20px;font-size:13.5px;line-height:1.95;color:var(--navy)">
        ${pts.map(x=>`<li>${this._escape(x)}</li>`).join('')}
      </ul>
      ${(answer != null && answer !== '') ? `<div style="margin-top:10px;font-size:13.5px;font-weight:800;color:var(--teal-700)">✅ 正确答案：${this._escape(String(answer))}</div>` : ''}
    </div>`;
  },
  // 概念题的引导发现 3 步：改成「判断什么 / 看什么 / 怎么判断」，不再问「求原来有多少」
  _conceptDiscovery(problem, e){
    const rot = (arr,k)=>{ const n=arr.length; k=((k%n)+n)%n; return arr.slice(k).concat(arr.slice(0,k)); };
    // 干扰项必须是「同类概念判断」，不能再放「求原来有多少 / 求相差多少」这类数值算式选项：
    // 孩子做「拉开抽屉是()现象」时看到这些选项只会更糊涂。
    const map = this._conceptMap();
    const others = Object.keys(map).map(k => map[k]).filter(x => x && x.judge && x.judge !== e.judge);
    const pool = (field, generic) => {
      const out = [];
      others.forEach(o => { const v = o[field]; if (v && v !== e[field] && out.indexOf(v) < 0) out.push(v); });
      generic.forEach(v => { if (v !== e[field] && out.indexOf(v) < 0) out.push(v); });
      return out.slice(0, 3);
    };
    const c1 = rot([e.judge].concat(pool('judge', ['数一数一共有几个图形', '算出结果是多少', '量一量它有多长'])), 1);
    const c2 = rot([e.keyPoint].concat(pool('keyPoint', ['题目里的数字分别是多少', '算式用的是加法还是减法', '这段文字一共有几行'])), 2);
    const c3 = rot([e.method].concat(pool('method', ['把题目里的数字全部加起来', '直接猜一个最像的', '用尺子量一量'])), 1);
    return [
      { q:'📖 这道题要我们判断什么？', choices:c1, answer:e.judge, explain:`题目让我们${e.judge}。` },
      { q:'🔎 要判断它，关键看什么？', choices:c2, answer:e.keyPoint, explain:`关键看：${e.keyPoint}。` },
      { q:'🧩 你会用什么方法判断？', choices:c3, answer:e.method, explain:`${e.method}。${e.understand}` }
    ];
  },
  // ---- 概念示意图（纯 SVG，无外部依赖）----
  _csvgWrap(w, h, inner){
    return `<div class="mv-wrap mv-concept"><svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${inner}</svg></div>`;
  },
  // 平移 / 旋转 对照图
  _csvg_motion(){
    return this._csvgWrap(520, 200, `
      <rect x="46" y="50" width="56" height="56" rx="8" fill="#00A896"/>
      <rect x="172" y="50" width="56" height="56" rx="8" fill="none" stroke="#00A896" stroke-width="2.5" stroke-dasharray="7 5"/>
      <line x1="110" y1="78" x2="160" y2="78" stroke="#0F766E" stroke-width="3" stroke-linecap="round"/>
      <polygon points="166,78 154,72 154,84" fill="#0F766E"/>
      <text x="137" y="134" text-anchor="middle" font-size="13" font-weight="800" fill="#0F766E">平移：沿直线移动</text>
      <text x="137" y="154" text-anchor="middle" font-size="11.5" fill="#4A6285">方向不变，整体挪动</text>
      <line x1="260" y1="34" x2="260" y2="158" stroke="#E2E8F0" stroke-width="1.5"/>
      <path d="M 322 86 A 64 64 0 0 1 450 86" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="6 5"/>
      <polygon points="454,90 443,84 447,96" fill="#F59E0B"/>
      <circle cx="386" cy="86" r="7" fill="#F5B800"/>
      <line x1="386" y1="81" x2="386" y2="38" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="387" y1="90" x2="428" y2="112" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="383" y1="90" x2="342" y2="64" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
      <text x="386" y="134" text-anchor="middle" font-size="13" font-weight="800" fill="#B45309">旋转：绕一个点转动</text>
      <text x="386" y="154" text-anchor="middle" font-size="11.5" fill="#4A6285">中心点不动，方向在变</text>
    `);
  },
  // 线段 / 射线 / 直线
  _csvg_lines(){
    const rows = [
      { y:52,  name:'线段', cap:'有 2 个端点 · 可以量出长度',   left:false, right:false, dotL:true,  dotR:true  },
      { y:122, name:'射线', cap:'只有 1 个端点 · 一端无限延长', left:false, right:true,  dotL:true,  dotR:false },
      { y:192, name:'直线', cap:'没有端点 · 两端都无限延长',    left:true,  right:true,  dotL:false, dotR:false }
    ];
    const inner = rows.map(r=>{
      const x1 = 100, x2 = 282, y = r.y;
      let s = `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#1E3A5F" stroke-width="3" stroke-linecap="round"/>`;
      if(r.left)  s += `<polygon points="${x1},${y} ${x1+12},${y-6} ${x1+12},${y+6}" fill="#1E3A5F"/>`;
      if(r.right) s += `<polygon points="${x2},${y} ${x2-12},${y-6} ${x2-12},${y+6}" fill="#1E3A5F"/>`;
      if(r.dotL)  s += `<circle cx="${x1}" cy="${y}" r="5.5" fill="#00A896"/>`;
      if(r.dotR)  s += `<circle cx="${x2}" cy="${y}" r="5.5" fill="#00A896"/>`;
      return `<g>${s}<text x="16" y="${y+5}" font-size="13.5" font-weight="800" fill="#1E3A5F">${r.name}</text><text x="300" y="${y+5}" font-size="11.5" fill="#4A6285">${r.cap}</text></g>`;
    }).join('');
    return this._csvgWrap(520, 228, inner);
  },
  // 锐角 / 直角 / 钝角 / 平角
  _csvg_angles(){
    const defs = [
      { cx:72,  d:42,  name:'锐角', note:'小于 90°' },
      { cx:190, d:90,  name:'直角', note:'正好 90°' },
      { cx:308, d:135, name:'钝角', note:'90°~180°' },
      { cx:426, d:180, name:'平角', note:'正好 180°' }
    ];
    const vy = 136, L = 44, r = 19;
    const inner = defs.map(o=>{
      const rad = o.d * Math.PI / 180;
      const ex = o.cx + L*Math.cos(rad), ey = vy - L*Math.sin(rad);
      let s = `<line x1="${o.cx}" y1="${vy}" x2="${o.cx+L}" y2="${vy}" stroke="#1E3A5F" stroke-width="3" stroke-linecap="round"/>`;
      s += `<line x1="${o.cx}" y1="${vy}" x2="${ex}" y2="${ey}" stroke="#1E3A5F" stroke-width="3" stroke-linecap="round"/>`;
      s += `<circle cx="${o.cx}" cy="${vy}" r="3.5" fill="#1E3A5F"/>`;
      if(o.d === 90){
        s += `<path d="M ${o.cx+21} ${vy} L ${o.cx+21} ${vy-21} L ${o.cx+42} ${vy-21}" fill="none" stroke="#00A896" stroke-width="2"/>`;
      }else{
        s += `<path d="M ${o.cx+r} ${vy} A ${r} ${r} 0 0 0 ${o.cx + r*Math.cos(rad)} ${vy - r*Math.sin(rad)}" fill="none" stroke="#00A896" stroke-width="2"/>`;
      }
      return `<g>${s}<text x="${o.cx}" y="${vy+42}" text-anchor="middle" font-size="13" font-weight="800" fill="#1E3A5F">${o.name}</text><text x="${o.cx}" y="${vy+60}" text-anchor="middle" font-size="10.5" fill="#4A6285">${o.note}</text></g>`;
    }).join('');
    return this._csvgWrap(520, 212, inner);
  },
  // 克 / 千克 / 吨
  _csvg_mass(){
    const chip = (x,txt)=>`<rect x="${x}" y="142" width="150" height="42" rx="9" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.2"/><text x="${x+75}" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">${txt}</text>`;
    return this._csvgWrap(520, 200, `
      <rect x="52" y="30" width="150" height="54" rx="12" fill="#00A896"/>
      <text x="127" y="64" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">1 千克</text>
      <text x="260" y="68" text-anchor="middle" font-size="26" font-weight="800" fill="#1E3A5F">=</text>
      <rect x="318" y="30" width="150" height="54" rx="12" fill="#F5B800"/>
      <text x="393" y="64" text-anchor="middle" font-size="20" font-weight="800" fill="#3D2C00">1000 克</text>
      <text x="260" y="122" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0F766E">1 千克 ＝ 1000 克　·　1 吨 ＝ 1000 千克</text>
      ${chip(28, '鸡蛋 约 50 克')}
      ${chip(185, '食盐 500 克')}
      ${chip(342, '西瓜 约 5 千克')}
    `);
  },
  // 身份证号分段编码
  _csvg_idcode(){
    const digits = '110101201501011234'.split('');
    const groups = [
      { n:6, color:'#00A896', label:'地址码（出生地）', text:'#0F766E' },
      { n:8, color:'#F5B800', label:'出生日期码', text:'#8A5A00' },
      { n:3, color:'#E8A0BF', label:'顺序码', text:'#9D4A6B' },
      { n:1, color:'#94A3B8', label:'校验', text:'#475569' }
    ];
    const bw = 24, gap = 3, y = 58, h = 32, x0 = (520 - (digits.length*bw + (digits.length-1)*gap)) / 2;
    let x = x0, idx = 0, boxes = '', labels = '';
    groups.forEach(g=>{
      const gx0 = x;
      for(let i=0;i<g.n;i++){
        const isGender = (idx === 16);
        boxes += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="5" fill="${g.color}" opacity="${isGender?1:0.25}" stroke="${g.color}" stroke-width="${isGender?2.5:1.2}"/>`;
        boxes += `<text x="${x+bw/2}" y="${y+22}" text-anchor="middle" font-size="14" font-weight="700" fill="${isGender?'#fff':'#1E3A5F'}">${digits[idx]}</text>`;
        x += bw + gap; idx++;
      }
      labels += `<text x="${(gx0 + x - gap)/2}" y="${y+h+18}" text-anchor="middle" font-size="10.5" font-weight="700" fill="${g.text}">${g.label}</text>`;
    });
    const g17cx = x0 + 16*(bw+gap) + bw/2;
    return this._csvgWrap(520, 168, `
      <text x="20" y="26" font-size="13" font-weight="800" fill="#1E3A5F">身份证号 = 18 位分段编码</text>
      <text x="508" y="26" text-anchor="end" font-size="11.5" font-weight="800" fill="#DC2626">倒数第 2 位 ＝ 性别</text>
      <line x1="${g17cx}" y1="32" x2="${g17cx}" y2="${y-3}" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3 3"/>
      ${boxes}
      ${labels}
      <text x="260" y="${y+h+42}" text-anchor="middle" font-size="11.5" fill="#4A6285">奇数为男 · 偶数为女；第 7～14 位是出生日期</text>
    `);
  },
  // 平年 / 闰年 二月日历
  _csvg_calendar(){
    const cell = (x,y,extra)=>`<rect x="${x}" y="${y}" width="16" height="16" rx="3" fill="${extra?'#F5B800':'#00A896'}" opacity="${extra?0.35:0.22}" stroke="${extra?'#B45309':'#00A896'}" stroke-width="1.2"${extra?' stroke-dasharray="4 3"':''}/>`;
    const grid = (ox,oy,extra)=>{
      let s = '';
      for(let i=0;i<28+extra;i++){
        s += cell(ox + (i%7)*18, oy + Math.floor(i/7)*18, i >= 28);
      }
      return s;
    };
    return this._csvgWrap(520, 196, `
      <text x="112" y="26" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1E3A5F">平年 · 2 月</text>
      ${grid(50,38,0)}
      <text x="112" y="132" text-anchor="middle" font-size="11.5" fill="#4A6285">28 天 · 全年 365 天</text>
      <line x1="240" y1="30" x2="240" y2="168" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="366" y="26" text-anchor="middle" font-size="12.5" font-weight="800" fill="#B45309">闰年 · 2 月</text>
      ${grid(304,38,1)}
      <text x="366" y="150" text-anchor="middle" font-size="11.5" fill="#4A6285">29 天 · 全年 366 天</text>
      <text x="260" y="186" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0F766E">2 月多出的那 1 天，就是平年与闰年的区别</text>
    `);
  },

  // 引导发现 3 步（理解题意 / 找关键信息 / 选方法）
  _discoverySteps(problem){
    const conceptEntry = this._conceptEntry(problem);
    if(conceptEntry) return this._conceptDiscovery(problem, conceptEntry);
    const f = String(problem.formula||'').replace(/\s/g,'');
    const op = this._detectOp(problem.formula);
    const methodName = this._methodName(problem);
    const rot = (arr, k)=>{ const n=arr.length; k=((k%n)+n)%n; return arr.slice(k).concat(arr.slice(0,k)); };
    const distractQ = ['求原来有多少','求相差多少','求平均每份是多少','求一共多少'].filter(x=>x!==problem.question);
    let c1 = [problem.question, ...distractQ.slice(0,3)];
    while(c1.length<4) c1.push('以上都不对');
    c1 = rot(c1, 1);
    const nums = (f.match(/-?\d+(\.\d+)?/g)||[]).filter(n=>parseFloat(n)!==0);
    const keyInfo = `关键数：${nums.slice(0,4).join('、')}${nums.length>4?'...':''}（来自算式 ${problem.formula}）`;
    const c2 = rot([keyInfo, '没有给出任何数', '只有问题没有条件', '只有答案没有过程'], 2);
    const otherMethods = ['加法','减法','乘法','除法','画图'].filter(m=>m!==methodName);
    const c3 = rot([methodName, ...otherMethods.slice(0,3)], 1);
    return [
      { q:'📖 再读一遍场景，这道题要我们求什么？', choices:c1, answer:problem.question, explain:`题目问的是：${problem.question}` },
      { q:'🔢 题目给了我们哪些关键的数和条件？', choices:c2, answer:keyInfo, explain:`从场景里能找到关键数，写出算式就是：${problem.formula}` },
      { q:'🧩 要解决这个问题，你觉得该用什么方法？', choices:c3, answer:methodName, explain:`看算式 ${problem.formula} 里有「${op}」，所以用${methodName}来解决。` }
    ];
  },

  // 数形结合讲解三层（看图 / 理解 / 推广）
  _explainLayers(problem){
    // 概念题（无数量关系）：三层讲解改成「概念对比 / 关键区别 / 会判断了」，
    // 否则会对着概念题讲「看这个数字 Bond」，图文自相矛盾。
    const ce = this._conceptEntry(problem);
    if(ce){
      return [
        { icon:'👀', title:'看图 — 概念对比', text:ce.look, bg:'var(--teal-soft)', color:'var(--teal)' },
        { icon:'🧠', title:'理解 — 关键区别', text:ce.understand, bg:'var(--yellow-soft)', color:'var(--yellow-700)' },
        { icon:'🚀', title:'推广 — 会判断了', text:ce.generalize, bg:'var(--coral-soft)', color:'var(--coral)' }
      ];
    }
    const t = problem.visualType;
    const vmap = { barModel:'条形模型', areaModel:'面积模型', numberBond:'数字 Bond', fractionStrip:'分数条', numberLine:'数轴', geometry:'几何图形',
      rulerMagnifier:'放大镜尺子', bodyRuler:'身体尺', mapZoom:'地图缩放', balanceScale:'天平对比', vennDiagram:'韦恩图', balanceDecision:'天平决策', circleArea:'圆面积割补' };
    const vname = vmap[t] || '可视化图形';
    const k = problem.knowledge || '';
    let lookText = `看这个${vname}，它把题目里的数量关系变成了看得见的图形。`;
    if(k.indexOf('毫米')>=0) lookText='看放大镜里的尺子，1cm 里正好有 10 个小格，每格就是 1 毫米。';
    else if(k.indexOf('分米')>=0) lookText='看手掌张开的宽度，大约就是 1 分米，下面尺子显示 1dm=10cm。';
    else if(k.indexOf('千米')>=0) lookText='看 4 层嵌套的地图，从教室到 1 千米是一级一级放大的，1km=1000 米。';
    else if(k.indexOf('吨')>=0) lookText='看天平两边：左边 1 千克砝码，右边 1000 个 1 克小方块，天平平衡说明一样重。';
    else if(k.indexOf('集合')>=0) lookText='看韦恩图，两个圆相交的部分是「都参加」的人，只在一个圆里的不重复。';
    else if(k.indexOf('找次品')>=0) lookText='看天平，把物品分成 3 组称，比较两组就能知道次品在哪边。';
    else if(k.indexOf('圆的面积')>=0||k.indexOf('圆面积')>=0) lookText='看圆被切成 16 份再拼成长方形，长是圆周的一半(πr)，宽是半径(r)。';
    return [
      { icon:'👀', title:'看图 — 图形结构', text:lookText, bg:'var(--teal-soft)', color:'var(--teal)' },
      { icon:'🧠', title:'理解 — 数学关系', text:this._understandText(problem, vname), bg:'var(--yellow-soft)', color:'var(--yellow-700)' },
      { icon:'🚀', title:'推广 — 通用规律', text:this._generalizeText(problem, vname), bg:'var(--coral-soft)', color:'var(--coral)' }
    ];
  },
  _understandText(problem, vname){
    const t = problem.visualType;
    const k = problem.knowledge || '';
    const map = {
      barModel:'各段色块拼起来就是总数 —— 这就是「部分 + 部分 = 整体」的关系。',
      areaModel:'把两位数拆成「十位 × 个位」分别相乘，4 个小格面积加起来就是总乘积。',
      numberBond:'总数能分解成几个部分，反过来几个部分合起来就是总数。',
      fractionStrip:'分母是平均分的总份数，分子是取的份数 —— 分数就是「部分占整体的比例」。',
      numberLine:'数轴上右边的数比左边大，两点之间距离就是它们的差。',
      geometry:'周长是「一圈」的长度，面积是「铺满」的大小。'
    };
    if(map[t]) return map[t];
    if(k.indexOf('毫米')>=0) return '1 厘米 = 10 毫米，毫米是更小的单位，量更短的东西用 mm。';
    if(k.indexOf('分米')>=0) return '1 分米 = 10 厘米，1 米 = 10 分米，手掌张开约 1 分米。';
    if(k.indexOf('千米')>=0) return '1 千米 = 1000 米，量较远的距离用 km，走 1km 约要 15 分钟。';
    if(k.indexOf('吨')>=0) return '1 吨 = 1000 千克，称很重的东西用吨，比如大象、汽车。';
    if(k.indexOf('集合')>=0) return '两个集合相加，重叠部分被算了两次，所以要减去一次：A+B-都参加。';
    if(k.indexOf('找次品')>=0) return '把物品尽量平均分 3 组，称一次能排除 2/3，这是最省称的方法。';
    if(k.indexOf('圆的面积')>=0||k.indexOf('圆面积')>=0) return '把圆割补成长方形，长=πr、宽=r，所以面积=πr×r=πr²。';
    return `图形揭示了题目里的数量关系。`;
  },
  _generalizeText(problem, vname){
    const t = problem.visualType;
    const k = problem.knowledge || '';
    const map = {
      barModel:'以后遇到「求总数」或「已知总数求部分」的题，都可以画条形模型。',
      areaModel:'以后遇到两位数乘法，都可以拆成面积模型分块相乘。',
      numberBond:'以后遇到加减法关系，都可以用数字 Bond 看清「分与合」。',
      fractionStrip:'以后遇到分数的题，都可以画分数条把分数变成看得见的份数。',
      numberLine:'以后遇到比大小、算距离、看温度的题，都可以借助数轴。',
      geometry:'以后遇到周长面积体积的题，都先画图形标数据。'
    };
    if(map[t]) return map[t];
    if(k.indexOf('毫米')>=0||k.indexOf('分米')>=0||k.indexOf('千米')>=0) return '以后量东西，先想用什么单位合适：短的用 mm/cm，中的用 dm/m，远的用 km。';
    if(k.indexOf('吨')>=0) return '以后称重，重的东西用吨，轻的用 kg，更轻的用 g。';
    if(k.indexOf('集合')>=0) return '以后遇到「两个类别有重复」的题，都用韦恩图，记得减去重叠部分。';
    if(k.indexOf('找次品')>=0) return '以后遇到找次品的题，都分 3 组称，每次尽量平分。';
    if(k.indexOf('圆')>=0) return '以后求圆的面积，都用 S=πr²，记住割补成长方形的思路。';
    return `以后遇到这类题，都可以用${vname}帮助理解。`;
  },

  // 运算方法名（修复：减法不被误判为加法）
  _methodName(problem){
    const op = this._detectOp(problem.formula);
    return (typeof MathVisualV5!=='undefined' && MathVisualV5._opName) ? MathVisualV5._opName(op) : {'×':'乘法','÷':'除法','-':'减法','+':'加法','=':'计算'}[op] || '计算';
  },
  _detectOp(formula){
    if(typeof MathVisualV5!=='undefined' && MathVisualV5._detectOp) return MathVisualV5._detectOp(formula);
    const f = String(formula||'').replace(/\([^)]*\)/g, '').replace(/\s/g, '');
    if(f.indexOf('×')>=0||f.indexOf('*')>=0) return '×';
    if(f.indexOf('÷')>=0||f.indexOf('/')>=0) return '÷';
    if(f.indexOf('-')>=0) return '-';
    if(f.indexOf('+')>=0) return '+';
    return '=';
  },

  // 场景 emoji
  _sceneEmoji(problem){
    const t = problem.visualType;
    const m = { barModel:'📊', areaModel:'⬛', numberBond:'🔗', fractionStrip:'🍰', numberLine:'📏', geometry:'📐',
      rulerMagnifier:'🔍', bodyRuler:'🖐️', mapZoom:'🗺️', balanceScale:'⚖️', vennDiagram:'⭕', balanceDecision:'⚖️', circleArea:'⭕' };
    if(m[t]) return m[t];
    const s = problem.scene || '';
    if(/草莓|蛋糕|饼干|苹果|果汁|牛奶|糖/.test(s)) return '🍓';
    if(/花坛|花圃|草坪|菜地|花园/.test(s)) return '🌺';
    if(/时钟|时|分|秒|火车|出发|温度|体温/.test(s)) return '🕐';
    if(/鱼缸|水杯|圆柱|圆锥|水/.test(s)) return '🥛';
    if(/地图|比例尺|鸽子|零件|校园|社区|公园/.test(s)) return '🗺️';
    if(/操场|座位|看台|校服|班级|学校/.test(s)) return '🏟️';
    if(/鸡|兔|农场|饲养|动物/.test(s)) return '🐰';
    return '🧮';
  },

  // 场景渐变
  _sceneGradient(problem){
    const t = problem.visualType;
    if(t==='geometry'||t==='circleArea') return 'linear-gradient(135deg,var(--teal),var(--navy))';
    if(t==='fractionStrip') return 'linear-gradient(135deg,var(--coral),var(--pink))';
    if(t==='numberLine') return 'linear-gradient(135deg,var(--yellow),var(--coral))';
    if(t==='numberBond') return 'linear-gradient(135deg,var(--pink),var(--purple))';
    if(t==='areaModel') return 'linear-gradient(135deg,var(--teal),var(--yellow))';
    if(t==='rulerMagnifier'||t==='bodyRuler') return 'linear-gradient(135deg,var(--yellow),var(--teal))';
    if(t==='mapZoom') return 'linear-gradient(135deg,var(--coral),var(--navy))';
    if(t==='balanceScale'||t==='balanceDecision') return 'linear-gradient(135deg,var(--teal),var(--coral))';
    if(t==='vennDiagram') return 'linear-gradient(135deg,var(--pink),var(--teal))';
    return 'linear-gradient(135deg,var(--teal),#14C3B2)';
  },

  // 小口诀：优先用本题 hint（数据里每题都有针对性提示，如"连续进位要细心"），
  // 再查知识点口诀表，最后才落到通用句——口诀必须承载这道题的特定结构，不能是"放之四海皆准"的空话。
  _rhyme(problem, methodName){
    const k = problem.knowledge || '';
    const rhymes = {
      '毫米':'一厘米十毫米，量短用它不会错',
      '分米':'一掌张开一分米，十厘米是一分米',
      '千米':'一千米一千米，等于一千个一米',
      '吨':'一吨一千千克，大象汽车才用它',
      '集合':'两个集合加一起，重叠部分减去一',
      '找次品':'分三组，称一次，次品马上现原形',
      '圆的面积':'圆切十六份，拼成长方形，长 πr 宽 r，面积 πr 平方',
      '周长':'周长就是走一圈，长加宽来乘以二',
      '面积':'面积就是铺满它，长乘宽来顶呱呱',
      '分数':'分数分数，分母分母在下，分子分子在上',
      '进位加法':'个位满十向前进，十位百位一样行',
      '退位减法':'不够减就借一当十，高位借了要记实',
      '万以内':'数位对齐再动笔，进位退位别忘记',
      '时分秒':'秒针走一小格是一秒，六十秒是一分跑不了',
      '乘法':'相同加数用乘法，几个几相加就是它',
      '倍':'求几倍就是几个几，乘一乘来就到底',
    };
    for(const key in rhymes){ if(k.indexOf(key)>=0) return rhymes[key]; }
    // 本题自带针对性提示时，把它编进口诀（比通用句有信息量）
    if(problem.hint) return `${problem.hint}；做完记得验一遍`;
    return `${methodName}题要细心，看清数字和符号，做完记得验一遍`;
  },

  // HTML 转义
  _escape(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
};
