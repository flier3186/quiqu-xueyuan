// engine/math-flow-v5.js · 奇趣学园 V5 数学引擎
// 数学教学流程 V5：7 阶段（每日 25 分钟）
// 阶段：0昨日回顾 → 1数学阅读+数感预热 → 2引导发现 → 3正式解题 → 4数形结合讲解 → 5你来提问 → 6阶梯练习
// 附加：苏格拉底式追问（L4 做错触发）、教小伙伴（表达度判定）、单元挑战（单元完成触发）
// 依赖全局：S / saveState / SpacedReview / MathVisualV5 / toast / setStar / WeaknessDetector（均做存在性兜底）
// 颜色统一用 CSS 变量；SVG 动画带 -webkit-transform-box:fill-box 前缀
window.MathFlowV5 = {

  // ===== 会话状态（断点续学） =====
  _sess: null,

  // ===== 主流程控制器：初始化会话，返回当前阶段 HTML =====
  start(problem, profileId){
    // 断点续学：若已有未完成会话且题目一致，直接恢复
    if(this._sess && this._sess.problem && problem && this._sess.problem.question === problem.question){
      return this.renderCurrent();
    }
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
      practiceTotal: 10,        // 总练习题数
      practiceLevels: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2],  // 练习级别序列
      rmeAnswered: false,       // RME选择题是否已回答
      neriageErrorClicked: false, // Neriage错误卡片是否已点击
      russianIdx: 0,            // 俄罗斯追问当前索引
      parentSettings: (typeof ParentPanel!=='undefined' && ParentPanel.getSettings) ? ParentPanel.getSettings() : {},
    };
    // 若有到期复习项，先进入昨日回顾
    if(profileId && typeof SpacedReview!=='undefined' && SpacedReview.getDue){
      const due = SpacedReview.getDue(profileId).filter(e=>e.type==='math');
      if(due.length>0) this._sess.stage = 'review';
    }
    this._saveProgress();
    return this.renderCurrent();
  },

  // ===== 当前阶段渲染分发 =====
  renderCurrent(){
    const s = this._sess;
    if(!s || !s.problem) return '<div style="padding:30px;text-align:center;color:var(--text-2)">会话未开始，请先选择一道题</div>';
    const p = s.problem;
    switch(s.stage){
      case 'review':    return this.renderReview(s.profileId);
      case 'warmup':    return this.renderWarmup(p);
      case 'rme':       return this.renderRMEChoice(p);
      case 'discover':  return this.renderDiscover(p);
      case 'neriage':   return this._renderNeriage(p);
      case 'solve':     return this.renderSolve(p);
      case 'explain':   return this.renderExplain(p);
      case 'russian':   return this.renderRussianQuestion(p);
      case 'askChild':  return this.renderAskChild(p);
      case 'practice':  return this.renderPractice(p);
      case 'complete':  return this._renderComplete(p);
      default:          return this.renderWarmup(p);
    }
  },

  // ===== 推进阶段（每阶段完成后保存进度，支持断点续学） =====
  advance(stage){
    if(!this._sess) return;
    this._sess.stage = stage;
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
          <button onclick="MathFlowV5.advance('warmup')" style="padding:12px 28px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 16px rgba(0,168,150,.3)">开始学习 →</button>
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
    this.advance('warmup');
  },

  // ============================================================
  // 阶段 1：数学阅读 + 数感预热（3 分钟）
  // ============================================================
  renderWarmup(problem){
    const emoji = this._sceneEmoji(problem);
    const gradient = this._sceneGradient(problem);
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 1 · 数学阅读 + 数感预热</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📖 3 分钟 · 先读故事，再发现数学</div>
      <!-- 1a 阅读小故事（纯文字，培养读题能力） -->
      <div style="padding:18px 20px;background:linear-gradient(135deg,#FFF8E6,#fff);border-radius:14px;border:1px solid rgba(245,184,0,.25);margin-bottom:12px">
        <div style="font-size:12px;color:var(--yellow-700);font-weight:700;margin-bottom:8px">📖 1 分钟 · 读一读这个小故事</div>
        <div style="font-size:15px;color:var(--ink-700);line-height:1.85">${emoji} ${this._escape(problem.scene)}</div>
      </div>
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
        <div style="font-size:12px;opacity:.9;margin-top:4px">💡 提示：${this._escape(problem.hint || '')}</div>
      </div>
      <div style="text-align:center;margin-top:16px">
        <button onclick="MathFlowV5.advance('rme')" style="padding:12px 28px;background:linear-gradient(135deg,var(--yellow),#FFD45E);color:var(--navy);border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(245,184,0,.35)">一起来发现 →</button>
      </div>
    </div>`;
  },
  // 预热阶段：从场景提取关键数词，做成可点击小标签
  _warmupChips(problem){
    const nums = (problem.scene||'').match(/\d+(\.\d+)?/g) || [];
    const unique = [...new Set(nums)].slice(0,5);
    if(!unique.length) return '<span style="font-size:13px;color:var(--text-2)">故事里好像没有明显的数字，再仔细读一遍？</span>';
    return unique.map(n=>`<div onclick="this.style.background='var(--teal)';this.style.color='#fff'" style="padding:6px 14px;background:#fff;border:1.5px solid var(--teal);color:var(--teal-700);border-radius:16px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s">${n}</div>`).join('');
  },

  // ============================================================
  // 阶段 2：RME 选择题建模（4 分钟）
  // ============================================================
  renderRMEChoice(problem){
    const choices = problem.rmeChoices || [
      { label:'画条形图', desc:'画条形表示数量关系', correct:true },
      { label:'列算式', desc:'直接列算式计算', correct:true },
      { label:'画圆圈/方块', desc:'画圆圈代表每个物体', correct:false }
    ];
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 2 · RME 选择题建模</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">✏️ 4 分钟 · 先纸上建模，再对照标准</div>
      <div style="padding:16px 18px;background:linear-gradient(135deg,var(--teal-soft),#fff);border-radius:14px;border:1px solid rgba(0,168,150,.15);margin-bottom:14px">
        <div style="font-size:12px;color:var(--teal-700);font-weight:700;margin-bottom:8px">📖 读题，在纸上画图或列算式</div>
        <div style="font-size:15px;color:var(--navy);font-weight:700;line-height:1.7">${this._escape(problem.scene)}</div>
        <div style="font-size:13px;color:var(--text-2);margin-top:8px">💡 想好怎么表示数量关系了吗？点"我算好了"</div>
      </div>
      <div style="text-align:center;margin-bottom:14px">
        <button onclick="MathFlowV5._rmeShowChoices()" style="padding:12px 28px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer;box-shadow:0 6px 16px rgba(0,168,150,.3)">我算好了 →</button>
      </div>
      <div id="v5RMEChoices" style="display:none">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:10px">🤔 我会用什么方法建模？</div>
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._rmeSelect(this,${i},${choices.length})" style="padding:14px 16px;margin-bottom:8px;border:2px solid var(--ink-100);border-radius:12px;cursor:pointer;transition:all .2s">
          <div style="font-size:15px;font-weight:700;color:var(--navy)">${this._escape(c.label)}</div>
          <div style="font-size:13px;color:var(--text-2);margin-top:4px">${this._escape(c.desc)}</div>
        </div>`).join('')}
        <div id="v5RMEFeedback" style="margin-top:12px"></div>
      </div>
    </div>`;
  },
  _rmeShowChoices(){
    const el = document.getElementById('v5RMEChoices');
    if(el) el.style.display = 'block';
  },
  _rmeSelect(el, idx, total){
    const container = el.parentElement;
    container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
    const problem = this._sess.problem;
    const choices = problem.rmeChoices || [];
    const isCorrect = !choices[idx] || choices[idx].correct;
    el.classList.add(isCorrect?'correct':'wrong');
    const fb = document.getElementById('v5RMEFeedback');
    if(fb){
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">✅ 好方法！现在看看标准答案是怎么建模的</div>`
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">💪 没关系，看看标准答案怎么用图形表示</div>`;
    }
    this._sess.rmeAnswered = true;
    setTimeout(()=>{
      // RME完成后进入引导发现
      this.advance('discover');
    }, 1200);
  },

  // ============================================================
  // 阶段 2：引导发现（4 分钟）—— 3 步选择引导，从已知到未知
  // ============================================================
  renderDiscover(problem){
    const steps = this._discoverySteps(problem);
    const idx = Math.min((this._sess.discoveryStep||0), steps.length-1);
    const step = steps[idx];
    const correctIdx = step.choices.indexOf(step.answer);
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
    </div>`;
  },
  // 发现阶段答题
  _discoverAnswer(el, chosenIdx, correctIdx, stepIdx){
    const isCorrect = chosenIdx === correctIdx;
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
          const hasNeriage = this._sess.problem && this._sess.problem.neriage;
          this.advance(hasNeriage ? 'neriage' : 'solve');
        }else{
          this._sess.discoveryStep = next;
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
    const errors = n.neriageErrors || n.typical_errors || [];
    const methodA = n.methodA || (alternatives[0] || '标准解法');
    const methodB = n.methodB || (alternatives[1] || '巧算解法');
    const errorC = n.errorC || (errors.length > 0 ? errors[0] : null);

    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 2.5 · Neriage 多解法+错误诊断</span>
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
    const correctIdx = problem.choices.indexOf(problem.answer);
    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 3 · 正式解题</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📝 5 分钟 · 用刚才发现的方法解决这道题</div>
      <div style="font-size:16px;color:var(--navy);font-weight:700;line-height:1.7;padding:16px 18px;background:linear-gradient(135deg,#FFE9D6,#fff);border-radius:12px;border:1px solid rgba(251,146,60,.2)">
        ${this._escape(problem.question)}
      </div>
      <div style="margin-top:12px;font-size:14px;color:var(--text-2)">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--teal)">${this._escape(problem.formula)}</span></div>
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
    const isCorrect = chosenIdx === correctIdx;
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
      if(fb){
        fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:15px;color:var(--teal-700);font-weight:700;line-height:1.7">🎉 <b>答对了！</b>用时 ${timeUsed} 秒 · +3 ⭐<br><span style="font-size:13px;font-weight:500;color:var(--text-2)">接下来用图形看清这道题的内在结构</span></div>`;
      }
      setTimeout(()=>{ this.advance('explain'); if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 1100);
    }else{
      this._sess.hintUsed = true;
      this._sess.solveAttempts = (this._sess.solveAttempts||0) + 1;
      try{ if(typeof WeaknessDetector!=='undefined') WeaknessDetector.recordAnswer(S, wdQ, 'wrong', timeUsed); }catch(e){}
      // 错题本
      try{
        S.math = S.math || {};
        S.math.wrongProblems = S.math.wrongProblems || [];
        if(!S.math.wrongProblems.some(w=>w.q===problem.question)){
          S.math.wrongProblems.push({q:problem.question, a:String(problem.answer)});
          if(typeof saveState==='function') saveState();
        }
      }catch(e){}
      try{ if(typeof SpacedReview!=='undefined') SpacedReview.add(S.currentProfileId||'default', 'math', problem.id||problem.question); }catch(e2){}
      if(fb) fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">❌ 差一点点！已加入错题本。<b>看看下面的提示再试一次</b></div>`;
      setTimeout(()=>{ if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 900);
    }
  },

  // ============================================================
  // 阶段 4：数形结合讲解（5 分钟）—— 核心
  // ============================================================
  renderExplain(problem){
    const visual = (typeof MathVisualV5!=='undefined' && MathVisualV5.render)
      ? MathVisualV5.render(problem.visualType, problem.visualData, problem)
      : '<div class="mv-empty">可视化引擎不可用</div>';
    setTimeout(()=>this._initFractionWall(),50);
    const layers = this._explainLayers(problem);
    const methodName = this._methodName(problem);
    return `<div class="cpa-layer pictorial" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag pictorial">STAGE 4 · 数形结合讲解</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📊 5 分钟 · 用图形看清这道题的内在结构</div>
      <div style="background:#fff;border-radius:14px;padding:8px;border:1px solid rgba(0,168,150,.15);box-shadow:0 6px 18px rgba(0,168,150,.08)">
        ${visual}
      </div>
      <div style="text-align:center;margin-top:8px">
        <button onclick="MathFlowV5._replayVisual()" style="padding:8px 18px;background:var(--teal-soft);color:var(--teal-700);border:1px solid rgba(0,168,150,.3);border-radius:18px;font-size:12px;font-weight:700;cursor:pointer">🎬 重新播放动画</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px">
        ${layers.map(l=>`
          <div style="padding:14px 16px;border-radius:12px;background:${l.bg};border-left:4px solid ${l.color}">
            <div style="font-size:13px;font-weight:800;color:${l.color};margin-bottom:6px">${l.icon} ${l.title}</div>
            <div style="font-size:14px;color:var(--ink-700);line-height:1.75">${l.text}</div>
          </div>`).join('')}
      </div>
      <!-- 口诀总结 -->
      <div style="margin-top:14px;padding:14px 18px;background:linear-gradient(135deg,var(--navy),#2a4a72);border-radius:12px;color:#fff">
        <div style="font-size:12px;opacity:.85;font-weight:600;margin-bottom:4px">🎵 小口诀</div>
        <div style="font-size:15px;font-weight:800;line-height:1.6">${this._rhyme(problem, methodName)}</div>
      </div>
      <div style="text-align:center;margin-top:18px">
        <button onclick="MathFlowV5.advance('askChild')" style="padding:12px 28px;background:linear-gradient(135deg,var(--pink),#F4C2D8);color:#fff;border:none;border-radius:22px;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(232,160,191,.4)">🙋 轮到你提问了 →</button>
      </div>
    </div>`;
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
    const idx = this._sess.russianIdx || 0;
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
    const variant = (problem.variants && problem.variants[0]) || {};
    const variantScene = variant.question ? problem.scene.replace(/\d+/g, m=>{
      const idx = parseInt(m);
      return idx > 5 ? Math.max(2, idx-2) : idx+3;
    }) : problem.scene;
    // 3 个选项 + 1 个自由输入
    const q1 = problem.question;
    const q2 = variant.question || '如果是原来的 2 倍呢？';
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
  _askChoose(el, idx){
    const container = el.parentElement;
    container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct'));
    el.classList.add('correct');
    const fb = document.getElementById('v5AskFeedback');
    if(fb) fb.innerHTML = `<div style="padding:10px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:13px;color:var(--teal-700);line-height:1.7">🌟 好问题！会提问的孩子，数学一定学得好。</div>`;
  },
  _askSubmit(){
    const ta = document.getElementById('v5AskInput');
    const q = ta ? ta.value.trim() : '';
    const fb = document.getElementById('v5AskFeedback');
    if(fb){
      fb.innerHTML = q
        ? `<div style="padding:12px 14px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">🌟 <b>你提的问题真棒！</b>「${this._escape(q)}」<br><span style="font-size:12px;color:var(--text-2)">数学家就是这样从问题开始的。进入练习检验今天的学习吧！</span></div>`
        : `<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">还没写问题哦，或者从上面选一个也行 👆</div>`;
    }
    if(q) setTimeout(()=>{ this.advance('practice'); if(typeof updateMathStageV5==='function') updateMathStageV5(); }, 1400);
  },

  // ============================================================
  // 阶段 6：阶梯练习（3 分钟）—— L1基础 → L2变式(先文字后图形) → L4陷阱
  // ============================================================
  renderPractice(problem){
    const level = this._sess.practiceLevels[this._sess.practiceIndex] || 1;
    if(level === 1) return this._renderL1(problem);
    if(level === 2) return this._renderL2(problem);
    if(level === 3) return this._renderL3(problem);  // 新增 L3
    return this._renderL4(problem);
  },
  // ===== 工具：为 variants 生成安全选项（确保正确答案在选项中） =====
  _safeChoices(v, problem){
    let ans = v.answer != null ? v.answer : problem.answer;
    let choices = (v.choices && v.choices.length) ? v.choices : problem.choices;
    // 如果正确答案不在选项中，自动生成干扰选项
    if(choices.indexOf(ans) === -1){
      const a = Number(ans);
      const base = isNaN(a) ? ans : a;
      const distractors = [];
      if(typeof base === 'number'){
        // 数字题：围绕正确答案生成 ±10、±20、±50、位数错位等干扰项
        const step = Math.max(1, Math.pow(10, Math.max(0, String(Math.floor(Math.abs(base))).length-2)));
        const pool = [
          base + step, base - step,
          base + step*2, base - step*2,
          Math.round(base * 1.1), Math.round(base * 0.9),
          base + 50, base - 50,
          // 易错：位数交换（如 683→638, 863）
          (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[0]+s[2]+s[1])*(base<0?-1:1):base+10;})(),
          (()=>{const s=String(Math.abs(Math.floor(base)));return s.length>=3?Number(s[1]+s[0]+s[2])*(base<0?-1:1):base-10;})()
        ].filter(x => x !== base && !distractors.includes(x));
        // 选取3个最接近的干扰项
        pool.sort((x,y)=>Math.abs(x-base)-Math.abs(y-base));
        distractors.push(...pool.slice(0,3));
      }else{
        // 非数字题：用原题选项去掉重复后 + 正确答案
        problem.choices.forEach(c => { if(c !== ans && !distractors.includes(c)) distractors.push(c); });
        while(distractors.length < 3) distractors.push(ans + '？');
        distractors.length = Math.min(3, distractors.length);
      }
      // 打乱顺序插入正确答案
      const merged = [ans, ...distractors];
      for(let i=merged.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[merged[i],merged[j]]=[merged[j],merged[i]];}
      choices = merged;
    }
    return {ans, choices, correctIdx: choices.indexOf(ans)};
  },

  // L1 基础：原题换数字（巩固）
  _renderL1(problem){
    const v = (problem.variants && problem.variants[0]) || problem;
    const {ans, choices, correctIdx} = this._safeChoices(v, problem);
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">STAGE 8 · 阶梯练习 · L1 基础</span>
      <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
        <span style="padding:3px 10px;background:var(--teal-soft);color:var(--teal-700);border-radius:12px;font-size:11px;font-weight:700">L1 基础</span>
        <span style="font-size:13px;color:var(--text-3);font-weight:600">先来一道相似的题热热手</span>
      </div>
      <div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),#fff);border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
        ${this._escape(v.question || problem.question)}
      </div>
      <div style="font-size:14px;color:var(--text-2);margin-bottom:6px">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--teal)">${this._escape(v.formula || problem.formula)}</span></div>
      <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(choices.length,4)},1fr)">
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},1)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // L2 变式：先文字后图形（数学阅读训练核心）
  _renderL2(problem){
    const showVisual = this._sess.practiceVisualShown;
    const v = (problem.variants && problem.variants[1]) || (problem.variants && problem.variants[0]) || problem;
    if(!showVisual){
      // 1) 纯文字题：孩子先在没有图形辅助下解答
      const {ans, choices, correctIdx} = this._safeChoices(v, problem);
      return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
        <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 8 · 阶梯练习 · L2 变式</span>
        <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
          <span style="padding:3px 10px;background:var(--yellow-soft);color:var(--yellow-700);border-radius:12px;font-size:11px;font-weight:700">L2 变式</span>
          <span style="font-size:13px;color:var(--text-3);font-weight:600">先读文字解答，再看图验证 📖</span>
        </div>
        <div style="padding:14px 16px;background:#FFF8E6;border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
          📖 ${this._escape(v.question || problem.question)}
        </div>
        <div style="font-size:14px;color:var(--text-2);margin-bottom:6px">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--teal)">${this._escape(v.formula || problem.formula)}</span></div>
        <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(choices.length,4)},1fr)">
          ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},2)">${this._escape(String(c))}</div>`).join('')}
        </div>
        <div style="margin-top:10px;padding:10px 12px;background:var(--teal-soft);border-radius:8px;font-size:12px;color:var(--teal-700);font-weight:600">
          💡 答完后点击下方按钮，用图形验证你的答案对不对
        </div>
        <div style="text-align:center;margin-top:10px">
          <button onclick="MathFlowV5._showPracticeVisual()" style="padding:10px 22px;background:var(--teal);color:#fff;border:none;border-radius:18px;font-weight:700;cursor:pointer">📊 看图验证 →</button>
        </div>
        <div id="v5PracticeFeedback" style="margin-top:12px"></div>
      </div>`;
    }
    // 2) 显示图形验证
    const visual = (typeof MathVisualV5!=='undefined' && MathVisualV5.render)
      ? MathVisualV5.render(problem.visualType, problem.visualData, problem)
      : '<div class="mv-empty">可视化引擎不可用</div>';
    const {ans} = this._safeChoices(v, problem);
    return `<div class="cpa-layer" style="border-left-color:var(--yellow);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--yellow);color:var(--navy)">STAGE 8 · 阶梯练习 · L2 图形验证</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📊 用图形对照你的答案</div>
      <div style="background:#fff;border-radius:14px;padding:8px;border:1px solid rgba(245,184,0,.25);margin-bottom:10px">${visual}</div>
      <div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">
        ✅ 正确答案是 <b>${this._escape(String(ans))}</b>。<br>看，图形里的数量关系和你的答案一致吗？
      </div>
      <div style="text-align:center;margin-top:14px">
        <button onclick="MathFlowV5._practiceNext()" style="padding:10px 24px;background:var(--coral);color:#fff;border:none;border-radius:20px;font-weight:800;cursor:pointer">挑战 L4 陷阱题 →</button>
      </div>
    </div>`;
  },
  // L3 进阶题：应用题（结合生活场景）
  _renderL3(problem){
    const variant = problem.variants && problem.variants[1] || {};
    const scene = variant.scene || problem.scene;
    const question = variant.question || '如果情况变化，结果会怎样？';
    const choices = variant.choices || problem.choices;
    const correctIdx = choices.indexOf(variant.answer != null ? variant.answer : problem.answer);
    
    return `<div class="cpa-layer" style="border-left-color:var(--pink);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--pink);color:#fff">STAGE 6 · 阶梯练习 · L3 进阶</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">📝 进阶挑战 · 第 ${this._sess.practiceIndex + 1} / ${this._sess.practiceTotal} 题</div>
      <div style="font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;padding:16px 18px;background:linear-gradient(135deg,#FCE7F3,#fff);border-radius:12px;border:1px solid rgba(232,160,191,.3)">
        ${this._escape(scene)}<br>${this._escape(question)}
      </div>
      <div class="wp-choices" id="v5PracticeChoices" style="grid-template-columns:repeat(2,1fr);margin-top:12px">
        ${choices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},3)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // L4 陷阱题：含干扰信息或易错点，做错触发苏格拉底追问
  _renderL4(problem){
    // 用第 2 个变式或构造陷阱题
    const v = (problem.variants && problem.variants[1]) || (problem.variants && problem.variants[0]) || problem;
    const {ans, choices} = this._safeChoices(v, problem);
    // 构造陷阱选项：把正确答案和易错答案都放进去
    const trap = choices.length > 1 ? choices.find(c => c !== ans) : (ans + 2);
    const trapChoices = [...new Set([ans, trap, ...choices.filter(c => c !== ans && c !== trap)])].slice(0,4);
    const correctIdx = trapChoices.indexOf(ans);
    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">STAGE 8 · 阶梯练习 · L4 陷阱</span>
      <div style="display:flex;align-items:center;gap:8px;margin:14px 0 8px">
        <span style="padding:3px 10px;background:var(--coral-soft);color:var(--coral);border-radius:12px;font-size:11px;font-weight:700">L4 陷阱</span>
        <span style="font-size:13px;color:var(--text-3);font-weight:600">⚠️ 小心！这道题有容易出错的地方</span>
      </div>
      <div style="padding:14px 16px;background:linear-gradient(135deg,#FFE9D6,#fff);border-radius:12px;font-size:15px;color:var(--navy);font-weight:700;line-height:1.7;margin-bottom:10px">
        ${this._escape(v.question || problem.question)}
      </div>
      <div style="font-size:14px;color:var(--text-2);margin-bottom:6px">算式：<span style="font-family:'Inter',sans-serif;font-weight:800;color:var(--coral)">${this._escape(v.formula || problem.formula)}</span></div>
      <div style="margin-top:6px;padding:8px 12px;background:#FFE9D6;border-radius:8px;font-size:12px;color:var(--coral);font-weight:600">⚠️ 提示：${this._escape(problem.hint || '注意审题，分清已知和所求')}</div>
      <div class="wp-choices" style="grid-template-columns:repeat(${Math.min(trapChoices.length,4)},1fr);margin-top:8px">
        ${trapChoices.map((c,i)=>`<div class="wp-choice" onclick="MathFlowV5._practiceAnswer(this,${i},${correctIdx},4)">${this._escape(String(c))}</div>`).join('')}
      </div>
      <div id="v5PracticeFeedback" style="margin-top:12px"></div>
    </div>`;
  },
  // 阶梯练习答题
  _practiceAnswer(el, chosenIdx, correctIdx, level){
    const isCorrect = chosenIdx === correctIdx;
    const container = el.parentElement;
    if(container){
      container.querySelectorAll('.wp-choice').forEach(c=>c.classList.remove('correct','wrong'));
      el.classList.add(isCorrect?'correct':'wrong');
    }
    const fb = document.getElementById('v5PracticeFeedback');
    if(fb){
      fb.innerHTML = isCorrect
        ? `<div style="padding:12px 14px;background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">✅ 答对了！进入下一题...</div>`
        : `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:14px;color:var(--coral);line-height:1.7">❌ 再想想，看下面的解析</div>`;
    }
    if(isCorrect){
      this._sess.practiceIndex++;
      if(this._sess.practiceIndex >= this._sess.practiceTotal){
        // 完成所有练习
        setTimeout(()=>{ this.advance('complete'); }, 1000);
      } else {
        setTimeout(()=>{ this.advance('practice'); }, 1200);
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
    // 渲染完成页
    const html = `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .5s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">🎉 今日学习完成</span>
      <div style="margin:20px 0;padding:22px 24px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-radius:16px;text-align:center">
        <div style="font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px">🏆 太棒了！你完成了今天的学习</div>
        <div style="font-size:14px;color:var(--ink-700);line-height:1.8">
          知识点：<b style="color:var(--teal)">${this._escape(this._sess.problem && this._sess.problem.knowledge || '')}</b><br>
          明天会自动安排复习，记得来哦！<br>
          <span style="font-size:12px;color:var(--text-2)">💡 教别人一遍，胜过自己学十遍。试试教小伙伴模式？</span>
        </div>
      </div>
      <div style="text-align:center;display:flex;gap:10px;justify-content:center">
        <button onclick="MathFlowV5.renderTeachPetModal()" style="padding:12px 24px;background:linear-gradient(135deg,var(--pink),var(--coral));color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer">🐰 教小伙伴</button>
        <button onclick="MathFlowV5.advance('warmup');if(typeof updateMathStageV5==='function') updateMathStageV5()" style="padding:12px 24px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer">学习下一题 →</button>
      </div>
    </div>`;
    const target = document.getElementById('v5PracticeFeedback');
    if(target) target.innerHTML = html;
    // 清理会话
    this._sess.stage = 'done';
    this._saveProgress();
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
        <button onclick="MathFlowV5._backToGrade()" style="padding:12px 28px;background:var(--teal);color:#fff;border:none;border-radius:22px;font-weight:800;cursor:pointer">返回年级选择</button>
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
    const isCorrect = chosenIdx === correctIdx;
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

  // 引导发现 3 步（理解题意 / 找关键信息 / 选方法）
  _discoverySteps(problem){
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

  // 小口诀
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
    };
    for(const key in rhymes){ if(k.indexOf(key)>=0) return rhymes[key]; }
    return `${methodName}题要细心，看清数字和符号，做完记得验一遍`;
  },

  // HTML 转义
  _escape(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
};
