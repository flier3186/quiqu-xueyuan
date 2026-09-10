// engine/math-visual-v5.js · 奇趣学园 V5 数学引擎
// 数形结合可视化引擎 V5：6 种基础渲染器（与原 MathVisual 一致）+ 7 种优化渲染器
// 优化点：毫米/分米/千米/吨认识、集合韦恩图拖拽、找次品天平决策、圆面积 16 份割补
// 关键修复：① 运算类型从 formula 自动检测（× ÷ - +，减法不被误判为加法）
//          ② 文字颜色对比度（亮色背景用 #12263F，暗色背景用 #fff）
// 依赖：无（纯函数返回 HTML 字符串，由调用方插入 DOM）
window.MathVisualV5 = {

  // ===== 总入口：根据 type 调用对应渲染器；problem 可选，用于智能路由 =====
  // problem 始终透传给渲染器：渲染器据此把“等于答案”的段值/整体/差值显示为“?”（答案零泄漏）
  render(type, data, problem){
    // 字段归一化（P2-8）：统一在入口把 {value} 收敛为 {val}（实现见 data/math-data-core.js）。
    // 下游只认 val，不再到处写 `p.val != null ? p.val : p.value` 的双读兜底。
    if (typeof window.normVisualData === 'function') data = window.normVisualData(data);
    const resolved = this._resolveType(type, data, problem);
    const fn = this[resolved];
    if(typeof fn === 'function'){
      return this._scrubAnswer(fn.call(this, data, problem), problem);
    }
    return this._scrubAnswer(this.barModel.call(this, data, problem), problem);
  },

  // ===== 答案零泄漏：中心化掩码层 =====
  // 所有 SVG <text> 输出前统一过滤：内容中等于答案的独立数字 token 一律替换为 "?"
  // 教学揭示区（class 含 mv-reveal/mv-bar-sum/mv-result/mv-formula）豁免；
  // mv-bond-total 不再豁免：数字 bond 的“总数”若恰好等于答案会泄漏。
  // 宁可多掩不漏答：已知信息恰好等于答案时显示 "?"，由图形结构传达数量关系。
  _scrubAnswer(html, problem){
    if(html == null) return html;
    const ansNum = problem ? Number(problem.answer) : NaN;
    if(isNaN(ansNum)) return html;
    const tokens = [String(ansNum)];
    const ansStr = String(problem.answer);
    if(ansStr !== tokens[0] && /^\d+(\/\d+)?$/.test(ansStr)){
      // 分数形态答案（如 "3/4"）：整体与分子分母都参与匹配
      tokens.push(ansStr);
      ansStr.split('/').forEach(t => { if(!tokens.includes(t)) tokens.push(t); });
    }
    const testers = tokens.filter(t => t !== '').map(t => ({
      t,
      re: new RegExp('(^|[^0-9.])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=[^0-9.]|$)', 'g')
    }));
    return String(html).replace(/(<text[^>]*>)([\s\S]*?)(<\/text>)/g, (m, open, body, close) => {
      if(/class="[^"]*(mv-reveal|mv-bar-sum|mv-result|mv-formula)[^"]*"/.test(open)) return m;
      let out = body;
      testers.forEach(({re}) => { out = out.replace(re, '$1?'); });
      return open + out + close;
    });
  },

  // ===== 智能路由：统一仲裁入口（P0-2）=====
  // 静态图与动手教具必须来自同一个模型家族。历史上这里有两条独立 if 链
  //（本文件的 _resolveType 与 math-manipulative.js 的 classify），
  // 全册实测 170 处（26%）同一道题给出两套模型 → 认知断裂。
  // 现在判定统一交给 MathDiagramMaster；本文件只保留 _resolveTypeLegacy
  // 作为"教材对齐的静态语义"来源与降级实现。
  _resolveType(type, data, problem){
    const M = (typeof MathDiagramMaster !== 'undefined') ? MathDiagramMaster : null;
    if(M && M.v5RendererFor && !M.__resolving){
      try{
        const r = M.v5RendererFor(problem);
        if(r) return r;
      }catch(e){}
    }
    return this._resolveTypeLegacy(type, data, problem);
  },

  // 降级实现（原 _resolveType）—— 优先级顺序是本项目教材对齐工作的一部分，不要改动
  _resolveTypeLegacy(type, data, problem){
    // 优先使用 modelFamily 字段（如果题目有明确指定）
    const modelFamily = (problem && problem.modelFamily) || '';
    if(modelFamily){
      const stepRenderer = this._getStepRenderer(modelFamily);
      // 如果有对应分步渲染器，使用它
      if(stepRenderer && typeof this[stepRenderer] === 'function'){
        return stepRenderer;
      }
    }
    const k = (problem && problem.knowledge) || '';
    const shape = (data && data.shape) || '';
    if(k.indexOf('毫米') >= 0) return 'rulerMagnifier';
    if(k.indexOf('分米') >= 0) return 'bodyRuler';
    if(k.indexOf('千米') >= 0) return 'mapZoom';
    if(k.indexOf('吨') >= 0) return 'balanceScale';
    if(k.indexOf('集合') >= 0 || k.indexOf('韦恩') >= 0) return 'vennDiagram';
    if(k.indexOf('找次品') >= 0 || shape === 'balance') return 'balanceDecision';
    if(k.indexOf('圆的面积') >= 0 || k.indexOf('圆面积') >= 0) return 'circleArea';
    // P0-2 新增：表内乘除（两个乘数均为一位数）→ 点子图。
    // 这类题原本"静态图给条形、动手教具却给乘法点阵"，是 170 处分歧里最大的一类；
    // 统一到点子图后，看到的图与动手的教具是同一个模型（人教版也用点子图讲乘法）。
    if(/乘法|除法|口诀/.test(k)){
      const f = String((problem && problem.formula) || '');
      if(/[×x*÷]/.test(f)){
        const fn = (f.match(/\d+/g) || []).map(Number);
        if(fn.length >= 2 && fn[0] >= 1 && fn[0] <= 9 && fn[1] >= 1 && fn[1] <= 9) return 'dotArray';
      }
    }
    // 迭代2新增：课标打破点路由
    // baseTenBlocks 仅适合两位数加减法（≤99），三位数以上回退到原始类型
    if(k.indexOf('进位') >= 0 || k.indexOf('退位') >= 0 || k.indexOf('万以内') >= 0){
      // 取"题目里最大的那个数"判断是否适合块演示。数源依次为 parts / bars / a·b / 公式。
      // ⚠ 2026-09-10 修 P0 级数据错：旧版只看 data.parts，而题库大量用 data.bars，
      // 于是 maxNum 恒为 0 → 三位数题也被判为"适合块演示" → baseTenBlocks 拿不到数，
      // 用它内部兜底的 38/45 画图：孩子看到的是一张跟本题无关的图（可能含错误答案）。
      let maxNum = 0;
      const take = (n) => { const v = Number(n); if (isFinite(v) && Math.abs(v) > maxNum) maxNum = Math.abs(v); };
      if(data && data.parts) data.parts.forEach(p => take(p && p.val));
      if(data && data.bars) data.bars.forEach(p => take(p && p.val));
      if(data && data.a != null) { take(data.a); take(data.b); }
      if(maxNum === 0){
        const ff = String((problem && problem.formula) || '');
        (ff.match(/\d+/g) || []).forEach(take);
      }
      if(maxNum > 99) return type;   // 三位数以上，块演示不适用
      if(maxNum === 0) return type;  // 一个数都取不到 → 不要瞎画
      return 'baseTenBlocks';
    }
    if(k.indexOf('分数墙') >= 0 || k.indexOf('等值分数') >= 0) return 'fractionWall';
    if(k.indexOf('分数') >= 0 && (type === 'fractionCircle' || shape === 'fractionCircle')) return 'fractionCircleAnim';
    if(k.indexOf('Bar') >= 0 || k.indexOf('条形') >= 0 || type === 'barModel') return 'barModelTranslate';
    if(k.indexOf('分数') >= 0 && type === 'numberLine') return 'numberLineFraction';
    if(k.indexOf('小数') >= 0 && type === 'numberLine') return 'numberLineFraction';
    if(k.indexOf('平行四边形') >= 0 || k.indexOf('割补') >= 0 || shape === 'parallelogram') return 'cutPasteGeometry';
    if(k.indexOf('长方体') >= 0 || k.indexOf('展开图') >= 0 || shape === 'cylinder') return 'unrollNet';
    if(k.indexOf('两位数乘法') >= 0 || k.indexOf('多位数乘法') >= 0 || type === 'areaModel') return 'areaModelAnim';
    return type;
  },

  // ===== modelFamily 到分步渲染器的映射 =====
  _getStepRenderer(modelFamily){
    const map = {
      'baseTenBlocks': 'baseTenStep',
      'barModel': 'barModelStep',
      'areaModel': 'areaModelStep',
      'numberBond': 'numberBondStep',
      'fractionModel': 'fractionStripStep',
      'fractionStrip': 'fractionStripStep',
      'numberLine': 'numberLineStep',
      'geometryModel': 'geometryStep',
      'geometry': 'geometryStep',
    };
    return map[modelFamily] || null;
  },

  // 反向映射：从分步渲染器名获取模型家族名
  _getModelFamilyFromStep(stepRenderer){
    const map = {
      'baseTenStep': 'baseTenBlocks',
      'barModelStep': 'barModel',
      'areaModelStep': 'areaModel',
      'dotArray': 'areaModel',              // P0-2：点子图与点阵教具同族
      'numberBondStep': 'numberBond',
      'fractionStripStep': 'fractionModel',
      'numberLineStep': 'numberLine',
      'geometryStep': 'geometryModel',
    };
    return map[stepRenderer] || '';
  },

  // 统一获取模型家族名（供外部调用，处理 modelFamily 和知识点路由）
  _resolveModelFamily(problem){
    if(!problem) return '';
    if(problem.modelFamily) return problem.modelFamily;
    const resolved = this._resolveType(problem.visualType, problem.visualData, problem);
    const family = this._getModelFamilyFromStep(resolved);
    if(family) return family;
    return resolved;
  },

  // ===== 分步动态演示入口（用于教学中的分步动画播放）=====
  // modelFamily: 模型家族名称
  // data: 渲染数据
  // step: 当前步数（1-3）
  renderStep(modelFamily, data, step, problem){
    const renderer = this._getStepRenderer(modelFamily);
    if(!renderer || typeof this[renderer] !== 'function'){
      return `<div style="padding:20px;text-align:center;color:var(--text-2)">该模型暂不支持分步演示</div>`;
    }
    this._injectStepStyles();
    const s = step || 1;
    const html = this[renderer].call(this, data, s);
    // 答案零泄漏：第 1/2 步掩码，第 3/3 步为教学揭示步允许出现等式
    return s >= 3 ? html : this._scrubAnswer(html, problem);
  },

  // ===== 颜色工具 =====
  // SVG 数值防御（问题3·2026-09-11）：width/height/r 等属性不允许负值。
  // _nn：钳制为非负；_clampRect：高亮区间即使 a>b 也修正为「min(x), |w|」，避免负 width 报错。
  _nn(n){ const v = Number(n); return isFinite(v) ? Math.max(0, v) : 0; },
  _clampRect(x1, x2, y, h){
    const x = Math.min(x1, x2), w = Math.abs(x2 - x1);
    return { x, y, w, h: this._nn(h) };
  },
  _hex(c){
    const m = {teal:'#00A896', yellow:'#F5B800', coral:'#FB923C', pink:'#E8A0BF', navy:'#1E3A5F'};
    return m[c] || c || '#00A896';
  },
  _palette(i){ const p=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F']; return p[i%p.length]; },
  _escape(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); },
  // 修复：文字颜色对比度 —— 亮色背景用深色 #12263F，暗色背景用白色 #fff
  _textColor(hex){
    const c = String(hex || '#00A896').replace('#','');
    const r = parseInt(c.substr(0,2),16) || 0;
    const g = parseInt(c.substr(2,2),16) || 0;
    const b = parseInt(c.substr(4,2),16) || 0;
    const lum = 0.299*r + 0.587*g + 0.114*b;
    return lum > 150 ? '#12263F' : '#ffffff';
  },

  // ===== 修复：从 formula 自动检测主运算符（× ÷ - +），减法不被误判为加法 =====
  // 去掉括号内的内容（避免负数 -5 干扰），再按 × ÷ - + 顺序检测
  _detectOp(formula){
    const f = String(formula || '').replace(/\([^)]*\)/g, '').replace(/\s/g, '');
    if(f.indexOf('×') >= 0 || f.indexOf('*') >= 0) return '×';
    if(f.indexOf('÷') >= 0 || f.indexOf('/') >= 0) return '÷';
    if(f.indexOf('-') >= 0) return '-';
    if(f.indexOf('+') >= 0) return '+';
    return '=';
  },
  _opName(op){ return {'×':'乘法','÷':'除法','-':'减法','+':'加法','=':'计算'}[op] || '计算'; },

  // ============================================================
  // === 6 种基础渲染器（与原 MathVisual 保持一致，向下兼容） ===
  // ============================================================

  // 1. 条形模型 —— 加减法 / 部分整体关系
  // data: {total, parts:[{label,val,color}]}
  barModel(data, problem){
    // 兼容 bars 格式（{type:"bar", bars:[{label,value,color}], total}）
    if(data && data.bars && !data.parts){
      // P2-8：入口已把字段统一为 val；兼容直接调用本函数（未过归一化层）的旧数据
      data.parts = data.bars.map(b => ({label: b.label, val: (b.val != null ? b.val : b.value), color: b.color}));
      if(data.total == null) data.total = data.parts.reduce((s,p)=>s+(p.val||0),0);
    }
    const parts = (data && data.parts) || [];
    if(!parts.length) return '<div class="mv-empty">暂无条形数据</div>';
    let total = (data.total != null) ? data.total : parts.reduce((s,p)=>s+(p.val||0),0);
    // 鲁棒性：total 缺失/非法时回退为各段之和，避免条形被压成等宽 0/2px
    if(!(total > 0)) total = parts.reduce((s,p)=>s+(p.val||0),0) || 1;
    // 答案零泄漏：某段值恰为答案（如“求差/求部分”的待求段）时，标签显示为“?”，宽度仍按比例
    const ans = (problem && problem.answer != null) ? problem.answer : null;
    const W=560, H=170, padX=24, barY=66, barH=58;
    const usable = W - padX*2;
    let x = padX, delay = 0;
    const segs = parts.map((p,i)=>{
      const w = total>0 ? Math.max((p.val/total)*usable, 2) : 0;
      const color = this._hex(p.color) || this._palette(i);
      const valLabel = (ans != null && p.val === ans) ? '?' : p.val;   // 待求段不印答案
      // 数值字号随段宽自适应：窄段缩小字号，绝不溢出
      const vfs = Math.max(8, Math.min(15, Math.floor((w-4)/Math.max(1,String(valLabel).length)*1.6)));
      const lfs = Math.max(8, Math.min(12, Math.floor((w-4)/Math.max(1,String(p.label||'').length)*1.7)));
      const g = `<g transform="translate(${x},0)">
        <rect class="mv-bar-rect" x="0" y="${barY}" width="${w}" height="${barH}" fill="${color}" rx="5" style="animation-delay:${delay}s"/>
        <text class="mv-bar-text" x="${w/2}" y="${barY+barH/2+vfs*0.35}" text-anchor="middle" font-size="${vfs}" font-weight="700" fill="${this._textColor(color)}" style="animation-delay:${delay+0.45}s">${valLabel}</text>
        <text x="${w/2}" y="${barY-10}" text-anchor="middle" font-size="${lfs}" fill="#475569" font-weight="600">${p.label||''}</text>
      </g>`;
      x += w; delay += 0.18;
      return g;
    }).join('');
    return `<div class="mv-wrap mv-bar-model">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${segs}
      </svg>
    </div>`;
  },

  // 引擎·点子图（表内乘除专用，P0-2 新增）
  // data: {rows, cols, a, b}；缺参数时从 problem.formula 推导。
  // 只画结构、不印总数（总数常常就是答案，文字层还有 _scrubAnswer 兜底）
  dotArray(data, problem){
    const f = String((problem && problem.formula) || '');
    const nums = (f.match(/\d+/g) || []).map(Number);
    const isDiv = /÷/.test(f);
    let cols = Number(data && (data.cols != null ? data.cols : (data.a != null ? data.a : NaN)));
    let rows = Number(data && (data.rows != null ? data.rows : (data.b != null ? data.b : NaN)));
    if(!isFinite(cols) || !isFinite(rows) || cols <= 0 || rows <= 0){
      if(isDiv && nums.length >= 2 && nums[1] > 0){ rows = nums[1]; cols = nums[0] / nums[1]; }
      else { cols = nums[0] || 4; rows = nums[1] || 3; }
    }
    cols = Math.max(1, Math.min(12, Math.round(cols)));
    rows = Math.max(1, Math.min(12, Math.round(rows)));
    const cell = cols > 9 ? 26 : 32;
    const padX = 30, padY = 48;
    const W = Math.max(300, padX * 2 + cols * cell);
    const H = padY + rows * cell + 18;
    const dotR = Math.max(4, Math.min(10, cell * 0.28));
    let body = '';
    for(let r = 0; r < rows; r++){
      for(let c = 0; c < cols; c++){
        const cx = (padX + cell / 2 + c * cell).toFixed(1);
        const cy = (padY + cell / 2 + r * cell).toFixed(1);
        const col = r % 2 === 0 ? '#2570E8' : '#F5B800';
        body += `<circle class="mv-dot" cx="${cx}" cy="${cy}" r="${dotR}" fill="${col}" fill-opacity="0.9" style="animation:mvPop .3s ${((r * cols + c) * 0.02).toFixed(2)}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box;transform-origin:center"/>`;
      }
    }
    const head = `<text x="${W / 2}" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">每行 ${cols} 个，共 ${rows} 行</text>`;
    const marks = `<text x="${W - 8}" y="24" text-anchor="end" font-size="11" fill="#5A6B82">${rows} × ${cols}</text>`;
    return `<div class="mv-wrap mv-dot-array">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${head}${marks}${body}</svg>
    </div>`;
  },

  // 2. 面积模型 —— 两位数乘法
  // data: {a, b, parts:[4个部分值], result} 或 {parts:[{val},{val}]}
  // 兼容 rows/cols 网格格式（{rows,cols}）：自动换算 a/b；小数时画简化网格
  areaModel(data){
    let {a,b,parts,result} = data;
    // P2-8：兼容 parts 写成"纯数字数组"的历史数据（如 {a:312,b:3,parts:[900,30,6],result:936}）。
    // 旧写法下 p.val 恒为 undefined → 图上印出 "undefined"。
    if(Array.isArray(parts)){
      parts = parts.map((p,i) => (p && typeof p === 'object') ? p : {val: Number(p), label: ''});
    }
    // 兼容 rows/cols 格式（如 {rows:40,cols:38}）
    if((a == null || b == null) && data.rows != null && data.cols != null){
      a = data.rows; b = data.cols;
    }
    // 兼容 parts 格式：从 parts 数组提取 a, b
    if((a == null || b == null) && parts && parts.length >= 2){
      a = parts[0].val;
      b = parts[1].val;
    }
    if(a == null) a = 23;
    if(b == null) b = 15;
    // 小数乘法（如 4.5×3.2）：分解模型无意义，画简化示意图
    if(!Number.isInteger(a) || !Number.isInteger(b)){
      const W=560, H=190;
      const recW=W*0.5, recH=H*0.55, x0=(W-recW)/2, y0=30;
      return `<div class="mv-wrap mv-area-model">
        <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
          <rect x="${x0}" y="${y0}" width="${recW}" height="${recH}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5" rx="6"/>
          <rect x="${x0}" y="${y0+recH}" width="${recW/3}" height="26" fill="none" stroke="#F5B800" stroke-width="2"/>
          <rect x="${x0+recW*2/3}" y="${y0+recH}" width="${recW/3}" height="26" fill="none" stroke="#F5B800" stroke-width="2"/>
          <text x="${x0}" y="${y0-10}" font-size="14" font-weight="700" fill="#00A896">${a}</text>
          <text x="${x0+recW+12}" y="${y0+recH/2}" font-size="14" font-weight="700" fill="#F5B800">${b}</text>
          <text x="${W/2}" y="${y0+recH/2}" text-anchor="middle" font-size="16" font-weight="800" fill="#1E3A5F">${a} × ${b}</text>
          <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">长 ${a}、宽 ${b} 的面积</text>
        </svg>
      </div>`;
    }
    const aT=Math.floor(a/10)*10, aO=a%10;
    const bT=Math.floor(b/10)*10, bO=b%10;
    // P2-8：四象限渲染只适用于"两位×两位"的拆解（parts 恰好 4 段）。
    // 历史数据里有三分的写法，如 {a:312,b:3,parts:[900,30,6],result:936}
    // → 旧代码硬取 parts[3] 得到 undefined，图上直接印出 "undefined"。
    // 段数不是 4 时退化为"按 parts 逐条分段"的通用矩形，永远不印 undefined。
    const _ps = Array.isArray(parts) ? parts.filter(x => x && isFinite(Number(x.val))) : [];
    if(_ps.length !== 4){
      const rows = _ps.length ? _ps : [{val:a,label:''},{val:b,label:''}];
      const RW=520, RH=Math.max(80, rows.length*46), rpad=16;
      const stripH=(RH-rpad*2)/rows.length;
      const sum=rows.reduce((s,r)=>s+Number(r.val),0);
      let strips='';
      rows.forEach((r,i)=>{
        const col=this._palette(i);
        const wRatio = sum>0 ? Math.max(0.18, Number(r.val)/sum) : 1/rows.length;
        const w=(RW-rpad*2)*Math.min(1,wRatio);
        strips+=`<g class="mv-area-block" style="animation-delay:${i*0.3}s">
          <rect x="${rpad}" y="${rpad+i*stripH}" width="${w}" height="${stripH-6}" fill="${col}" opacity="0.85" rx="4"/>
          <text x="${rpad+w/2}" y="${rpad+i*stripH+stripH/2+1}" text-anchor="middle" font-size="14" font-weight="700" fill="${this._textColor(col)}">${r.val}</text>
        </g>`;
      });
      const last = (result != null && isFinite(Number(result))) ? result : (b != null ? a*b : sum);
      return `<div class="mv-wrap mv-area-model">
        <svg viewBox="0 0 ${RW} ${RH+34}" preserveAspectRatio="xMidYMid meet">
          ${strips}
          <text x="${RW/2}" y="${RH+18}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">${rows.map(r=>r.val).join(' + ')} = ${last}</text>
        </svg>
      </div>`;
    }
    const sc=13;
    const aTw=aT*sc, aOw=aO*sc, bTh=bT*sc, bOh=bO*sc;
    const totalW=aTw+aOw, totalH=bTh+bOh;
    const padX=36, padY=24;
    const W=totalW+padX*2, H=totalH+padY*2+56;
    const blocks=[
      {x:padX,     y:padY,         w:aTw, h:bTh, val:parts[0], color:'#00A896', lab:`${aT}×${bT}`},
      {x:padX+aTw, y:padY,         w:aOw, h:bTh, val:parts[2], color:'#F5B800', lab:`${aO}×${bT}`},
      {x:padX,     y:padY+bTh,     w:aTw, h:bOh, val:parts[1], color:'#E8A0BF', lab:`${aT}×${bO}`},
      {x:padX+aTw, y:padY+bTh,     w:aOw, h:bOh, val:parts[3], color:'#FB923C', lab:`${aO}×${bO}`},
    ];
    const blks=blocks.map((bk,i)=>`
      <g class="mv-area-block" style="animation-delay:${i*0.3}s">
        <rect x="${bk.x}" y="${bk.y}" width="${bk.w}" height="${bk.h}" fill="${bk.color}" opacity="0.85"/>
        <text x="${bk.x+bk.w/2}" y="${bk.y+bk.h/2-4}" text-anchor="middle" font-size="15" font-weight="700" fill="${this._textColor(bk.color)}">${bk.val}</text>
        <text x="${bk.x+bk.w/2}" y="${bk.y+bk.h/2+14}" text-anchor="middle" font-size="11" fill="${this._textColor(bk.color)}" opacity="0.88">${bk.lab}</text>
      </g>`).join('');
    return `<div class="mv-wrap mv-area-model">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${blks}
        <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">${parts.join(' + ')} = ${result}</text>
      </svg>
    </div>`;
  },

  // 3. 数字 Bond —— 数的分解 / 加减法关系
  // data: {total, parts:[{val,color}]}
  // 修复：圆半径与字号按文本长度自适应，七位数（如 3050000）也完整显示不裁剪
  numberBond(data){
    const parts=(data && data.parts) || [];
    const total=data.total;
    const n=parts.length;
    // 自适应：数字越长字号越小、圆越大，保证文本永远在圆内
    const fit=(t,baseR,baseF)=>{
      const s=String(t==null?'':t);
      const f=Math.max(9, baseF - Math.max(0, s.length-3)*2);
      const r=Math.max(baseR, Math.ceil(s.length*f*0.34)+7);
      return {r,f};
    };
    const tot=fit(total,30,20);
    const pFits=parts.map(p=>fit(p.val,26,18));
    const maxPartR=Math.max(26, ...pFits.map(x=>x.r));
    const maxR=Math.max(tot.r, maxPartR);
    const spread=Math.max(220, pFits.reduce((s,x)=>s+x.r*2,0) + Math.max(0,n-1)*16 + 24);
    const W=Math.max(340, spread + maxR*2 + 44);
    const H=Math.max(210, tot.r + maxPartR + 92);
    const topX=W/2, topY=tot.r+14, bottomY=H-maxPartR-14;
    const pos=(i)=> n<=1 ? W/2 : (W/2 - spread/2 + (spread/(n-1))*i);
    const lines=parts.map((p,i)=>{
      const bx=pos(i);
      const len=Math.hypot(bx-topX, bottomY-topY);
      return `<line class="mv-bond-line" x1="${topX}" y1="${topY}" x2="${bx}" y2="${bottomY}" stroke="${this._hex(p.color)||this._palette(i)}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${len}" stroke-dashoffset="${len}" style="animation-delay:${i*0.2}s"/>`;
    }).join('');
    const pCircles=parts.map((p,i)=>{
      const bx=pos(i);
      const color=this._hex(p.color)||this._palette(i);
      const ft=pFits[i];
      return `<g class="mv-bond-part" style="animation-delay:${0.55+i*0.2}s">
        <circle cx="${bx}" cy="${bottomY}" r="${ft.r}" fill="${color}"/>
        <text x="${bx}" y="${bottomY+ft.f*0.35}" text-anchor="middle" font-size="${ft.f}" font-weight="700" fill="${this._textColor(color)}">${p.val}</text>
      </g>`;
    }).join('');
    return `<div class="mv-wrap mv-number-bond">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${lines}
        <g class="mv-bond-total">
          <circle cx="${topX}" cy="${topY}" r="${tot.r}" fill="#1E3A5F"/>
          <text x="${topX}" y="${topY+tot.f*0.35}" text-anchor="middle" font-size="${tot.f}" font-weight="700" fill="#fff">${total}</text>
        </g>
        ${pCircles}
      </svg>
    </div>`;
  },

  // 4. 分数条 —— 分数认识 / 分数比较
  // data: {num, total, color}
  fractionStrip(data){
    const {num, total, color} = data;
    const W=560, H=130, padX=24, padY=34, stripW=W-padX*2, stripH=52;
    const segW=stripW/total;
    const fillHex=this._hex(color);
    const fillW=num*segW;
    const dividers=Array.from({length:total-1},(_,i)=>{
      const x=padX+(i+1)*segW;
      return `<line x1="${x}" y1="${padY}" x2="${x}" y2="${padY+stripH}" stroke="#fff" stroke-width="2"/>`;
    }).join('');
    const labels=Array.from({length:total},(_,i)=>{
      const x=padX+i*segW+segW/2;
      return `<text x="${x}" y="${padY+stripH+18}" text-anchor="middle" font-size="11" fill="#475569">${i+1}</text>`;
    }).join('');
    const equivs=[];
    for(let k=2;k<=3;k++){ equivs.push(`${num*k}/${total*k}`); }
    return `<div class="mv-wrap mv-frac-strip">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <text x="${padX}" y="${padY-12}" font-size="14" font-weight="700" fill="#1E3A5F">${num}/${total}</text>
        <rect x="${padX}" y="${padY}" width="${stripW}" height="${stripH}" fill="#fff" stroke="#1E3A5F" stroke-width="2" rx="5"/>
        <rect class="mv-frac-fill" x="${padX}" y="${padY}" width="${fillW}" height="${stripH}" fill="${fillHex}" rx="5"/>
        ${dividers}
        <rect x="${padX}" y="${padY}" width="${stripW}" height="${stripH}" fill="none" stroke="#1E3A5F" stroke-width="2" rx="5"/>
        ${labels}
      </svg>
      <div class="mv-frac-equiv">等值分数：${num}/${total} = ${equivs.join(' = ')}</div>
    </div>`;
  },

  // 5. 数轴 —— 整数 / 小数 / 负数 / 运算过程
  // data: {start, end, points:[{pos,label,color}], highlight:[a,b]}
  numberLine(data){
    const {points, highlight} = data;
    // 兼容 min/max 命名（如负数认识题）
    const start = data.start != null ? data.start : data.min;
    const end = data.end != null ? data.end : data.max;
    const W=560, H=150, padX=40, padY=78, lineW=W-padX*2-16;
    const range=end-start;
    const pos=(v)=> padX + ((v-start)/range)*lineW;
    const step=Math.max(1, Math.round(range/10));
    let ticks='';
    for(let v=start; v<=end; v+=step){
      const x=pos(v);
      ticks+=`<line x1="${x}" y1="${padY-6}" x2="${x}" y2="${padY+6}" stroke="#475569" stroke-width="1.5"/>`;
      ticks+=`<text x="${x}" y="${padY+24}" text-anchor="middle" font-size="11" fill="#475569">${v}</text>`;
    }
    let hl='';
    if(Array.isArray(highlight) && highlight.length===2){
      // 防御：highlight 端点顺序不定，用 _clampRect 保证 width 非负（问题3）
      const rc = this._clampRect(pos(highlight[0]), pos(highlight[1]), padY-22, 44);
      hl=`<rect x="${this._nn(rc.x)}" y="${this._nn(rc.y)}" width="${this._nn(rc.w)}" height="${this._nn(rc.h)}" fill="#F5B800" opacity="0.22" rx="4"/>`;
    }
    const pts=(points||[]).map((p,i)=>{
      // P2-8：兼容用 val 记位置的旧数据（{val:22,label:'苹果总数'}）——旧写法 p.pos 缺失 → cx="NaN"
      const raw = (p && p.pos != null) ? p.pos : (p && p.val != null ? p.val : null);
      const v = Number(raw);
      if(!isFinite(v)) return '';
      const x=pos(v);
      const color=this._hex(p.color)||this._palette(i);
      return `<g class="mv-nl-point" style="animation-delay:${0.4+i*0.2}s">
        <circle cx="${x}" cy="${padY}" r="10" fill="${color}" stroke="#fff" stroke-width="2.5"/>
        <text x="${x}" y="${padY-18}" text-anchor="middle" font-size="12" font-weight="700" fill="${color}">${p.label!=null?p.label:v}</text>
      </g>`;
    }).join('');
    return `<div class="mv-wrap mv-number-line">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${hl}
        <line x1="${padX}" y1="${padY}" x2="${W-padX+12}" y2="${padY}" stroke="#1E3A5F" stroke-width="2.5"/>
        <polygon points="${W-padX+12},${padY-5} ${W-padX+22},${padY} ${W-padX+12},${padY+5}" fill="#1E3A5F"/>
        ${ticks}
        ${pts}
      </svg>
    </div>`;
  },

  // 6. 几何图形 —— 图形认识 / 周长面积计算
  // data: {shape, params:{...}}
  geometry(data){
    const shape=(data && data.shape) || 'rectangle';
    const p=(data && data.params) || {};
    const W=420, H=240;
    let body='', formula='';
    if(shape==='rectangle'){
      const {length,width}=p;
      if(p.scale!=null && p.originalLength!=null){
        // 图形的放大与缩小：原长 originalLength，按 scale:1 放大
        const sc0=16, ol=p.originalLength*sc0, nl=p.originalLength*p.scale*sc0;
        const oh=Math.round(ol*0.6), nh=Math.round(nl*0.6);
        const yA=H/2-30, yB=H/2+8;
        body=`<rect x="${40}" y="${yA-oh}" width="${ol}" height="${oh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
          <text x="${40+ol/2}" y="${yA-oh-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">原：长${p.originalLength}cm</text>
          <rect x="${W-40-nl-60}" y="${yB-nh-30}" width="${nl}" height="${nh}" fill="rgba(245,184,0,0.12)" stroke="#F5B800" stroke-width="2.5"/>
          <text x="${W-40-nl/2-60}" y="${yB-nh-38}" text-anchor="middle" font-size="12" font-weight="700" fill="#AC7E00">放大后：长${p.originalLength*p.scale}cm</text>
          <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="13" font-weight="800" fill="#FB923C">按 ${p.scale}:1 放大——边长 ×${p.scale}，形状不变</text>`;
        formula=`放大后长 = ${p.originalLength}×${p.scale} = ${p.originalLength*p.scale} cm`;
      } else if(typeof length !== 'number' || typeof width !== 'number'){
        // 字母表示数（如 长=a 宽=b）：画示意矩形 + 符号公式，不算数字
        const rw=200, rh=120, x0=(W-rw)/2, y0=(H-56-rh)/2;
        body=`<rect x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5" rx="3"/>
          <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">长 = ${length}</text>
          <text x="${x0+rw+10}" y="${y0+rh/2+5}" font-size="14" font-weight="700" fill="#1E3A5F">宽 = ${width}</text>`;
        formula=`周长 = 2×(${length}+${width})　面积 = ${length}×${width}`;
      } else {
      const sc=15, rw=length*sc, rh=width*sc;
      const x0=(W-rw)/2, y0=(H-rh)/2;
      body=`<rect class="mv-geo-outline" x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5" rx="3"/>
        <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">长 ${length}</text>
        <text x="${x0+rw+8}" y="${y0+rh/2+5}" font-size="13" font-weight="700" fill="#1E3A5F">宽 ${width}</text>`;
      formula=`周长 = (${length}+${width})×2 = ${2*(length+width)}　面积 = ${length}×${width} = ${length*width}`;
      }
    } else if(shape==='triangle'){
      if(p.base==null || p.height==null){
        // 无尺寸参数：画通用三角形（认识三角形特征用），不编造面积
        const cx2=W/2, baseY=H-60, bw=150, hh=120;
        body=`<polygon points="${cx2-bw/2},${baseY} ${cx2+bw/2},${baseY} ${cx2},${baseY-hh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
          <circle cx="${cx2}" cy="${baseY-hh}" r="4" fill="#FB923C"/>
          <circle cx="${cx2-bw/2}" cy="${baseY}" r="4" fill="#FB923C"/>
          <circle cx="${cx2+bw/2}" cy="${baseY}" r="4" fill="#FB923C"/>
          <text x="${cx2}" y="${baseY+24}" text-anchor="middle" font-size="12" fill="#FB923C">3个顶点（橙点）</text>`;
        formula='三角形：3条边、3个角、3个顶点，内角和 = 180°';
      } else {
      const base=p.base, height=p.height;
      const sc=13, bw=base*sc, hh=height*sc;
      const cx=W/2, baseY=H-44;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx},${baseY-hh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY-hh}" x2="${cx}" y2="${baseY}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">底 ${base}</text>`;
      formula=`面积 = 底×高÷2 = ${base}×${height}÷2 = ${base*height/2}`;
      }
    } else if(shape==='parallelogram'){
      const {base,height,side}=p;
      const sc=12, bw=base*sc, hh=height*sc, sl=(side||height)*sc;
      const off=Math.sqrt(Math.max(sl*sl-hh*hh, 16));
      const x0=(W-bw)/2+24, baseY=H-50;
      body=`<polygon class="mv-geo-outline" points="${x0},${baseY} ${x0+bw},${baseY} ${x0+bw-off},${baseY-hh} ${x0-off},${baseY-hh}" fill="rgba(245,184,0,0.15)" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${x0}" y1="${baseY}" x2="${x0}" y2="${baseY-hh}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${x0-8}" y="${baseY-hh/2}" text-anchor="end" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${x0+bw/2}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">底 ${base}</text>`;
      formula=`面积 = 底×高 = ${base}×${height} = ${base*height}`;
    } else if(shape==='trapezoid'){
      const top=(p.top!=null?p.top:(p.a!=null?p.a:8)), bottom=(p.bottom!=null?p.bottom:(p.b!=null?p.b:12)), height=(p.height!=null?p.height:(p.h!=null?p.h:5));
      const sc=12, tw=top*sc, bw=bottom*sc, hh=height*sc;
      const cx=W/2, baseY=H-50;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx+tw/2},${baseY-hh} ${cx-tw/2},${baseY-hh}" fill="rgba(232,160,191,0.18)" stroke="#E8A0BF" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY}" x2="${cx}" y2="${baseY-hh}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY-hh-10}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">上底 ${top}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">下底 ${bottom}</text>`;
      formula=`面积 = (上底+下底)×高÷2 = (${top}+${bottom})×${height}÷2 = ${(top+bottom)*height/2}`;
    } else if(shape==='circle'){
      const radius=(p.radius!=null?p.radius:(p.diameter!=null?p.diameter/2:5));
      const dimLabel=(p.radius!=null)?('r='+radius):('d='+p.diameter);
      const sc=9, r=radius*sc, cx=W/2, cy=H/2;
      body=`<circle class="mv-geo-outline" cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        <line class="mv-circle-radius" x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="2.5"/>
        <text x="${cx+r/2}" y="${cy-8}" text-anchor="middle" font-size="13" font-weight="700" fill="#FB923C">r=${radius}</text>`;
      const C=(2*radius*3.14).toFixed(2), A=(radius*radius*3.14).toFixed(2);
      formula=`周长 = 2πr = 2×3.14×${radius} = ${C}　面积 = πr² = 3.14×${radius}² = ${A}`;
    } else if(shape==='cylinder'){
      const {radius,height}=p;
      const sc=8, r=radius*sc, hh=height*sc, cx=W/2, cy=(H-hh)/2+6;
      body=`<ellipse class="mv-geo-outline" cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.3}" fill="rgba(0,168,150,0.18)" stroke="#00A896" stroke-width="2.5"/>
        <path class="mv-geo-outline" d="M ${cx-r} ${cy} L ${cx-r} ${cy+hh} A ${r} ${r*0.3} 0 0 0 ${cx+r} ${cy+hh} L ${cx+r} ${cy}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
        <ellipse cx="${cx}" cy="${cy+hh}" rx="${r}" ry="${r*0.3}" fill="none" stroke="#00A896" stroke-width="1.8" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="${cx-r}" y1="${cy}" x2="${cx-r}" y2="${cy+hh}" stroke="#FB923C" stroke-width="2"/>
        <text x="${cx-r-8}" y="${cy+hh/2}" text-anchor="end" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <line class="mv-circle-radius" x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="2"/>
        <text x="${cx+r/2}" y="${cy-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">r=${radius}</text>`;
      formula=`体积 = πr²h = 3.14×${radius}²×${height} = ${(radius*radius*height*3.14).toFixed(2)}`;
    } else if(shape==='balance'){
      // 方程天平：params {left:'x', right:50, balanced:true} → 简易天平；否则路由到 balanceDecision
      if(p && (p.left != null || p.right != null) && !Array.isArray(p.left)){
        const beamY=110, cx2=W/2;
        const panL=String(p.left), panR=String(p.right);
        const balanced=p.balanced!==false;
        const tilt=balanced?0:(p.leftWeightRight?2:-3);
        body=`<polygon points="${cx2},${beamY} ${cx2-26},${beamY+34} ${cx2+26},${beamY+34}" fill="#FB923C"/>
          <rect x="${cx2-4}" y="${beamY-64}" width="8" height="64" fill="#1E3A5F"/>
          <line x1="${cx2-130}" y1="${beamY-64+tilt}" x2="${cx2+130}" y2="${beamY-64-tilt}" stroke="#1E3A5F" stroke-width="4" stroke-linecap="round"/>
          <line x1="${cx2-130}" y1="${beamY-64+tilt}" x2="${cx2-130}" y2="${beamY-34+tilt}" stroke="#1E3A5F" stroke-width="2"/>
          <line x1="${cx2+130}" y1="${beamY-64-tilt}" x2="${cx2+130}" y2="${beamY-34-tilt}" stroke="#1E3A5F" stroke-width="2"/>
          <path d="M ${cx2-172} ${beamY-30+tilt} A 42 26 0 0 0 ${cx2-88} ${beamY-30+tilt} Z" fill="rgba(0,168,150,0.20)" stroke="#00A896" stroke-width="2.5"/>
          <path d="M ${cx2+88} ${beamY-30-tilt} A 42 26 0 0 0 ${cx2+172} ${beamY-30-tilt} Z" fill="rgba(245,184,0,0.20)" stroke="#F5B800" stroke-width="2.5"/>
          <text x="${cx2-130}" y="${beamY-4+tilt}" text-anchor="middle" font-size="22" font-weight="800" fill="#006B5E">${panL}</text>
          <text x="${cx2+130}" y="${beamY-4-tilt}" text-anchor="middle" font-size="22" font-weight="800" fill="#AC7E00">${panR}</text>
          <text x="${cx2}" y="${beamY+62}" text-anchor="middle" font-size="14" font-weight="700" fill="${balanced?'#00A896':'#FB923C'}">${balanced?'天平平衡':'天平不平衡'}</text>`;
        formula=balanced?`天平平衡 → ${panL} = ${panR}`:`左 ${panL} 与 右 ${panR} 不相等`;
      } else {
        return this.balanceDecision(data);
      }
    } else if(shape==='quadrilateral'){
      const sides = p.sides || 4;
      const cx=W/2, cy=H/2, r=70;
      const pts=Array.from({length:sides},(_,i)=>{
        const a = -Math.PI/2 + i*2*Math.PI/sides;
        return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;
      }).join(' ');
      body=`<polygon class="mv-geo-outline" points="${pts}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>`;
      formula=`四边形有 ${sides} 条边、${sides} 个角`;
    } else if(shape==='fractionCircle'){
      const {numerator=1, denominator=2, color='#00A896'} = p;
      const r=80, cx=W/2, cy=H/2;
      const fillAngle = (numerator/denominator)*2*Math.PI;
      const startAngle = -Math.PI/2;
      const endAngle = startAngle + fillAngle;
      const x1=cx+r*Math.cos(startAngle), y1=cy+r*Math.sin(startAngle);
      const x2=cx+r*Math.cos(endAngle), y2=cy+r*Math.sin(endAngle);
      const largeArc = fillAngle > Math.PI ? 1 : 0;
      const sectorPath = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
      let divLines='';
      for(let i=0;i<denominator;i++){
        const a = startAngle + i*2*Math.PI/denominator;
        const ex=cx+r*Math.cos(a), ey=cy+r*Math.sin(a);
        divLines+=`<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#fff" stroke-width="1.5" opacity="0.8"/>`;
      }
      const colorFill=color||'#00A896';
      body=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,168,150,0.08)" stroke="#00A896" stroke-width="2"/>
        <path d="${sectorPath}" fill="${colorFill}" opacity="0.85" stroke="#fff" stroke-width="1.5"/>
        ${divLines}
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        <text x="${cx}" y="${cy+r+18}" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A5F">${numerator}/${denominator}</text>`;
      formula=`${numerator}/${denominator} = ${numerator}÷${denominator}`;
    } else if(shape==='sector'){
      const {radius=60, angle=90, color='#00A896'} = p;
      const sc=1.5, r=radius*sc, cx=W/2, cy=H/2;
      const startRad=-Math.PI/2, endRad=startRad+(angle/180)*Math.PI;
      const x1=cx+r*Math.cos(startRad), y1=cy+r*Math.sin(startRad);
      const x2=cx+r*Math.cos(endRad), y2=cy+r*Math.sin(endRad);
      const largeArc=angle>180?1:0;
      body=`<path class="mv-geo-outline" d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="rgba(245,184,0,0.2)" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}" stroke="#1E3A5F" stroke-width="1.5"/>
        <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#1E3A5F" stroke-width="1.5"/>
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        <text x="${cx+r/2+10}" y="${cy-r/2}" font-size="12" font-weight="700" fill="#1E3A5F">r=${radius}</text>
        <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="11" fill="#F5B800">θ=${angle}°</text>`;
      const L=(angle/360*2*Math.PI*radius).toFixed(2), A=(angle/360*Math.PI*radius*radius).toFixed(2);
      formula=`扇形弧长 = ${L}　扇形面积 = ${A}`;
    } else if(shape==='regularPolygon'){
      const {sides=5, radius=65, color='#00A896'} = p;
      const cx=W/2, cy=H/2;
      const pts=Array.from({length:sides},(_,i)=>{
        const a=-Math.PI/2+i*2*Math.PI/sides;
        return `${cx+radius*Math.cos(a)},${cy+radius*Math.sin(a)}`;
      }).join(' ');
      body=`<polygon class="mv-geo-outline" points="${pts}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>`;
      const interiorAngle=((sides-2)*180/sides).toFixed(0);
      formula=`正${sides}边形：内角=${interiorAngle}°，共有${sides}条边${sides}个角`;
    } else if(shape==='sphere'){
      const {radius=50} = p;
      const sc=1.5, r=radius*sc, cx=W/2, cy=H/2;
      body=`<circle class="mv-geo-outline" cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.3}" fill="none" stroke="#00A896" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="${cx}" y1="${cy-r*0.3}" x2="${cx}" y2="${cy+r*0.3}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        <text x="${cx+r+6}" y="${cy+4}" font-size="11" font-weight="700" fill="#FB923C">r=${radius}</text>`;
      const S=(4*Math.PI*radius*radius).toFixed(1), V=(4/3*Math.PI*radius*radius*radius).toFixed(1);
      formula=`表面积 = 4πr² = ${S}　体积 = 4/3πr³ = ${V}`;
    } else if(shape==='prism'){
      const {base=60,height=80,baseSides=6} = p;
      const cx=W/2, baseY=H-50, topY=50;
      const ptsTop=Array.from({length:baseSides},(_,i)=>{
        const a=-Math.PI/2+i*2*Math.PI/baseSides;
        return `${cx+base*Math.cos(a)},${topY+base*0.5*Math.sin(a)}`;
      }).join(' ');
      const ptsBot=Array.from({length:baseSides},(_,i)=>{
        const a=-Math.PI/2+i*2*Math.PI/baseSides;
        return `${cx+base*Math.cos(a)},${baseY+base*0.5*Math.sin(a)}`;
      }).join(' ');
      body=`<polygon class="mv-geo-outline" points="${ptsTop}" fill="rgba(0,168,150,0.15)" stroke="#00A896" stroke-width="2.5"/>
        <polygon class="mv-geo-outline" points="${ptsBot}" fill="rgba(0,168,150,0.08)" stroke="#00A896" stroke-width="2.5"/>`;
      for(let i=0;i<baseSides;i++){
        const a1=-Math.PI/2+i*2*Math.PI/baseSides;
        const a2=-Math.PI/2+((i+1)%baseSides)*2*Math.PI/baseSides;
        const x1=cx+base*Math.cos(a1), y1=topY+base*0.5*Math.sin(a1);
        const x2=cx+base*Math.cos(a2), y2=topY+base*0.5*Math.sin(a2);
        const x3=cx+base*Math.cos(a2), y3=baseY+base*0.5*Math.sin(a2);
        const x4=cx+base*Math.cos(a1), y4=baseY+base*0.5*Math.sin(a1);
        body+=`<line x1="${x1}" y1="${y1}" x2="${x4}" y2="${y4}" stroke="#00A896" stroke-width="1.8"/>`;
      }
      formula=`正${baseSides}棱柱：底面为正${baseSides}边形，高=${height}`;
    } else if(shape==='cone'){
      const {radius=50,height=70} = p;
      const cx=W/2, baseY=H-50, topY=40;
      const r=radius*1.2;
      body=`<ellipse cx="${cx}" cy="${baseY}" rx="${r}" ry="${r*0.35}" fill="rgba(245,184,0,0.15)" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${cx-r}" y1="${baseY}" x2="${cx}" y2="${topY}" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${cx+r}" y1="${baseY}" x2="${cx}" y2="${topY}" stroke="#F5B800" stroke-width="2.5"/>
        <line x1="${cx}" y1="${topY}" x2="${cx}" y2="${baseY}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="4,3"/>
        <circle cx="${cx}" cy="${baseY}" r="3" fill="#1E3A5F"/>
        <text x="${cx+8}" y="${(topY+baseY)/2}" font-size="11" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx+r+4}" y="${baseY+4}" font-size="11" font-weight="700" fill="#1E3A5F">r=${radius}</text>`;
      const L=Math.sqrt(radius*radius+height*height).toFixed(1);
      formula=`母线长 = √(r²+h²) = ${L}　体积 = 1/3πr²h = ${(1/3*Math.PI*radius*radius*height).toFixed(1)}`;
    } else if(shape==='compass'){
      // 方向罗盘：上北下南左西右东，高亮 front/up/between 等
      const p2=p||{};
      const cx2=W/2, cy2=H/2, r2=70;
      const dirPos={'北':[cx2,cy2-r2],'东':[cx2+r2,cy2],'南':[cx2,cy2+r2],'西':[cx2-r2,cy2]};
      const dirVec={'北':[0,-1],'东':[1,0],'南':[0,1],'西':[-1,0]};
      body=`<circle cx="${cx2}" cy="${cy2}" r="${r2+18}" fill="rgba(0,168,150,0.06)" stroke="#00A896" stroke-width="1.5"/>
        <line x1="${cx2}" y1="${cy2-r2}" x2="${cx2}" y2="${cy2+r2}" stroke="#9aa5b1" stroke-width="2"/>
        <line x1="${cx2-r2}" y1="${cy2}" x2="${cx2+r2}" y2="${cy2}" stroke="#9aa5b1" stroke-width="2"/>`;
      for(const d of ['北','东','南','西']){
        const [tx,ty]=dirPos[d];
        body+=`<text x="${tx}" y="${ty+5}" text-anchor="middle" font-size="16" font-weight="800" fill="${d==='北'?'#e74c3c':'#1E3A5F'}">${d}</text>`;
      }
      formula='地图通常按"上北、下南、左西、右东"绘制';
      if(p2.front){
        const fv=dirVec[p2.front]||[0,-1];
        const ax=cx2+fv[0]*r2*0.72, ay=cy2+fv[1]*r2*0.72;
        body+=`<line x1="${cx2}" y1="${cy2}" x2="${ax}" y2="${ay}" stroke="#FB923C" stroke-width="4" stroke-linecap="round"/>
          <polygon points="${ax+fv[0]*10},${ay+fv[1]*10} ${ax-fv[1]*6-fv[0]*4},${ay+fv[0]*6-fv[1]*4} ${ax+fv[1]*6-fv[0]*4},${ay-fv[0]*6-fv[1]*4}" fill="#FB923C"/>`;
        if(p2.back) formula=`面朝${p2.front}，背后是${p2.back}`;
        else if(p2.left) formula=`面朝${p2.front}时，左手边是${p2.left}`;
        else formula=`面朝${p2.front}`;
      } else if(p2.up){
        body+=`<circle cx="${cx2}" cy="${cy2-r2}" r="14" fill="none" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="4,3"/>`;
        formula=`地图上方是${p2.up}`;
      } else if(p2.between){
        body+=`<path d="M ${cx2+r2*0.75} ${cy2} A ${r2*0.75} ${r2*0.75} 0 0 1 ${cx2} ${cy2+r2*0.75}" fill="rgba(245,184,0,0.35)" stroke="#F5B800" stroke-width="2"/>`;
        formula=`${p2.between} 在 东 和 南 之间`;
      }
    } else if(shape==='cuboid'){
      if(p.view){
        const L=p.length||6, Wd=p.width||4, Ht=p.height||3;
        const dims={top:[L,Wd,'长','宽','从上面看'],front:[L,Ht,'长','高','从正面看'],side:[Wd,Ht,'宽','高','从侧面看']}[p.view]||[L,Ht,'长','高','从正面看'];
        const sc=Math.min(26/Math.max(dims[0],1), 34/Math.max(dims[1],1));
        const rw=dims[0]*sc, rh=dims[1]*sc, x0=(W-rw)/2, y0=(H-40-rh)/2;
        body=`<rect x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5" rx="2"/>
          <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">${dims[2]} ${dims[0]}</text>
          <text x="${x0+rw+10}" y="${y0+rh/2+5}" font-size="13" font-weight="700" fill="#1E3A5F">${dims[3]} ${dims[1]}</text>
          <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="13" font-weight="700" fill="#FB923C">${dims[4]}</text>`;
        formula=`看到的是一个长方形（${dims[2]}×${dims[3]}）`;
      } else {
        const L=p.length||6, Wd=p.width||4, Ht=p.height||3;
        const sc=Math.min(14, 120/Math.max(L,1), 60/Math.max(Ht,1));
        const rw=L*sc, rh=Ht*sc, dp=Math.min(Wd*sc*0.5, 46);
        const x0=(W-rw-dp)/2, y0=(H-30-rh)/2;
        body=`<path d="M ${x0} ${y0} L ${x0+dp} ${y0-dp} L ${x0+rw+dp} ${y0-dp} L ${x0+rw} ${y0} Z" fill="rgba(0,168,150,0.15)" stroke="#00A896" stroke-width="2"/>
          <rect x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.08)" stroke="#00A896" stroke-width="2.5"/>
          <line x1="${x0+rw}" y1="${y0}" x2="${x0+rw+dp}" y2="${y0-dp}" stroke="#00A896" stroke-width="2"/>
          <line x1="${x0+rw}" y1="${y0+rh}" x2="${x0+rw+dp}" y2="${y0+rh-dp}" stroke="#00A896" stroke-width="2"/>
          <line x1="${x0+rw+dp}" y1="${y0-dp}" x2="${x0+rw+dp}" y2="${y0+rh-dp}" stroke="#00A896" stroke-width="2"/>
          <text x="${x0+rw/2}" y="${y0+rh+18}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">长 ${L}</text>
          <text x="${x0-10}" y="${y0+rh/2}" text-anchor="end" font-size="13" font-weight="700" fill="#1E3A5F">高 ${Ht}</text>
          <text x="${x0+rw+dp/2+6}" y="${y0-dp/2}" font-size="12" font-weight="700" fill="#FB923C">宽 ${Wd}</text>`;
        formula=`长方体有 12 条棱、6 个面、8 个顶点`;
      }
    } else if(shape==='square'){
      const sd=p.side||5, unit=p.unit||'';
      const sc=Math.min(14, 170/Math.max(sd,1));
      const rw=Math.max(sd*sc, 60), x0=(W-rw)/2, y0=(H-46-rw)/2;
      body=`<rect x="${x0}" y="${y0}" width="${rw}" height="${rw}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5" rx="2"/>
        <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">${sd}${unit}</text>
        <text x="${x0+rw+10}" y="${y0+rw/2+5}" font-size="13" font-weight="700" fill="#1E3A5F">${sd}${unit}</text>
        <text x="${W/2}" y="${y0+rw+30}" text-anchor="middle" font-size="13" fill="#FB923C">${p.label||''}</text>`;
      formula=`正方形四边相等：周长 = ${sd}×4 = ${sd*4}${unit}　面积 = ${sd}×${sd} = ${sd*sd}${unit}²`;
    } else if(shape==='angle'){
      const deg=(p.degree!=null)?p.degree:(p.angle!=null?p.angle:90);
      const tname={'right':'直角','acute':'锐角','obtuse':'钝角','straight':'平角'}[p.type]||'角';
      const rad=deg*Math.PI/180, rArm=100;
      const vx=90, vy=H-56;
      const x3=vx+rArm*Math.cos(-rad), y3=vy+rArm*Math.sin(-rad);
      body=`<line x1="${vx}" y1="${vy}" x2="${vx+rArm}" y2="${vy}" stroke="#1E3A5F" stroke-width="3"/>
        <line x1="${vx}" y1="${vy}" x2="${x3}" y2="${y3}" stroke="#1E3A5F" stroke-width="3"/>
        <circle cx="${vx}" cy="${vy}" r="4" fill="#FB923C"/>`;
      if(deg===90){
        const s=18;
        body+=`<path d="M ${vx+s} ${vy} L ${vx+s} ${vy-s} L ${vx} ${vy-s}" fill="none" stroke="#FB923C" stroke-width="2.5"/>`;
      } else {
        const arcR=34;
        body+=`<path d="M ${vx+arcR} ${vy} A ${arcR} ${arcR} 0 0 0 ${vx+arcR*Math.cos(-rad)} ${vy+arcR*Math.sin(-rad)}" fill="none" stroke="#FB923C" stroke-width="2.5"/>`;
      }
      body+=`<text x="${vx+52}" y="${vy-16}" font-size="14" font-weight="800" fill="#FB923C">${deg}°</text>
        <text x="${W/2+40}" y="${H-16}" text-anchor="middle" font-size="14" font-weight="800" fill="#1E3A5F">${tname}（${deg}°）</text>`;
      if(p.complement!=null){
        body+=`<line x1="${vx+rArm}" y1="${vy}" x2="${vx+rArm+50}" y2="${vy}" stroke="#1E3A5F" stroke-width="3" opacity="0.5"/>
          <text x="${vx+90}" y="${vy-16}" font-size="12" font-weight="700" fill="#E8A0BF">∠2=${p.complement}°</text>`;
        formula=`∠1 = ${deg}°，∠2 = ${p.complement}°，${deg} + ${p.complement} = 180°（组成平角）`;
      } else { formula=`${tname}是 ${deg}°`; }
    } else if(shape==='grid'){
      if(p.point){
        const pt2=p.point, col=pt2[0], row=pt2[1], N=6, cell=Math.min(30, 180/N);
        const x0=(W-N*cell)/2, y0=(H-60-N*cell)/2;
        for(let gi=0; gi<=N; gi++){
          body+=`<line x1="${x0+gi*cell}" y1="${y0}" x2="${x0+gi*cell}" y2="${y0+N*cell}" stroke="#d5dbe3" stroke-width="1"/>
            <line x1="${x0}" y1="${y0+gi*cell}" x2="${x0+N*cell}" y2="${y0+gi*cell}" stroke="#d5dbe3" stroke-width="1"/>`;
        }
        for(let gi=1; gi<=N; gi++){
          body+=`<text x="${x0+gi*cell-cell/2}" y="${y0+N*cell+16}" text-anchor="middle" font-size="10" fill="#9aa5b1">${gi}</text>
            <text x="${x0-12}" y="${y0+N*cell-gi*cell+cell/2+4}" text-anchor="middle" font-size="10" fill="#9aa5b1">${N+1-gi}</text>`;
        }
        const px=x0+(col-0.5)*cell, py=y0+(N-row)*cell+cell/2;
        body+=`<circle cx="${px}" cy="${py}" r="8" fill="#FB923C"/>
          <text x="${px+14}" y="${py+5}" font-size="13" font-weight="800" fill="#FB923C">(${col},${row})</text>`;
        formula=`数对 (列,行) = (${col},${row})：先列后行`;
      } else if(p.fullCells!=null){
        const full=p.fullCells, half=p.halfCells||0, N=6, cell=Math.min(26, 170/N);
        const x0=(W-N*cell)/2, y0=(H-56-N*cell)/2;
        for(let gi=0; gi<=N; gi++){
          body+=`<line x1="${x0+gi*cell}" y1="${y0}" x2="${x0+gi*cell}" y2="${y0+N*cell}" stroke="#d5dbe3" stroke-width="1"/>
            <line x1="${x0}" y1="${y0+gi*cell}" x2="${x0+N*cell}" y2="${y0+gi*cell}" stroke="#d5dbe3" stroke-width="1"/>`;
        }
        let fi=0, hi=0;
        for(let rI=0; rI<N && (fi<full||hi<half); rI++){
          for(let cI=0; cI<N && (fi<full||hi<half); cI++){
            const gx=x0+cI*cell, gy=y0+rI*cell;
            if(fi<full){ body+=`<rect x="${gx}" y="${gy}" width="${cell}" height="${cell}" fill="rgba(0,168,150,0.45)"/>`; fi++; }
            else if(hi<half){ body+=`<path d="M ${gx} ${gy} L ${gx+cell} ${gy} L ${gx} ${gy+cell} Z" fill="rgba(245,184,0,0.5)"/>`; hi++; }
          }
        }
        formula=`整格 ${full} 个 + 半格 ${half} 个 ≈ ${full}+${half}/2 = ${full+half/2} 格`;
      }
    } else if(shape==='cube'){
      const sd=p.side||'', unit=p.unit||'';
      const s=64, x0=(W-s-30)/2, y0=(H-34-s)/2, dp=26;
      body=`<path d="M ${x0} ${y0} L ${x0+dp} ${y0-dp} L ${x0+s+dp} ${y0-dp} L ${x0+s} ${y0} Z" fill="rgba(0,168,150,0.15)" stroke="#00A896" stroke-width="2"/>
        <rect x="${x0}" y="${y0}" width="${s}" height="${s}" fill="rgba(0,168,150,0.08)" stroke="#00A896" stroke-width="2.5"/>
        <line x1="${x0+s}" y1="${y0}" x2="${x0+s+dp}" y2="${y0-dp}" stroke="#00A896" stroke-width="2"/>
        <line x1="${x0+s}" y1="${y0+s}" x2="${x0+s+dp}" y2="${y0+s-dp}" stroke="#00A896" stroke-width="2"/>
        <line x1="${x0+s+dp}" y1="${y0-dp}" x2="${x0+s+dp}" y2="${y0+s-dp}" stroke="#00A896" stroke-width="2"/>
        <text x="${x0+s/2}" y="${y0+s+20}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">棱长 ${sd||'a'} ${unit}</text>
        <text x="${W/2+70}" y="${H/2}" font-size="13" fill="#FB923C">${p.label||''}</text>`;
      formula=`正方体 12 条棱都相等${sd?`：棱长总和 = ${sd}×12 = ${sd*12}${unit}`:''}`;
    } else if(shape==='line'){
      const y=H/2;
      if(p.type==='segment'){
        body=`<line x1="80" y1="${y}" x2="${W-80}" y2="${y}" stroke="#00A896" stroke-width="3.5"/>
          <circle cx="80" cy="${y}" r="6" fill="#1E3A5F"/><circle cx="${W-80}" cy="${y}" r="6" fill="#1E3A5F"/>`;
        formula='线段：2 个端点，长度可以测量';
      } else if(p.type==='ray'){
        body=`<line x1="110" y1="${y}" x2="${W-60}" y2="${y}" stroke="#00A896" stroke-width="3.5"/>
          <polygon points="${W-40},${y} ${W-64},${y-9} ${W-64},${y+9}" fill="#00A896"/>
          <circle cx="110" cy="${y}" r="6" fill="#1E3A5F"/>`;
        formula='射线：1 个端点，向一端无限延伸';
      } else {
        body=`<line x1="50" y1="${y}" x2="${W-90}" y2="${y}" stroke="#00A896" stroke-width="3.5"/>
          <polygon points="${W-70},${y} ${W-94},${y-9} ${W-94},${y+9}" fill="#00A896"/>
          <polygon points="70,${y} 94,${y-9} 94,${y+9}" fill="#00A896"/>`;
        formula='直线：没有端点，向两端无限延伸';
      }
    } else if(shape==='lines'){
      const y1=H/2-26, y2=H/2+26;
      if(p.type==='intersect'){
        body=`<line x1="70" y1="${y1}" x2="${W-70}" y2="${y1}" stroke="#00A896" stroke-width="3"/>
          <line x1="120" y1="${y1-18}" x2="${W-130}" y2="${y2+18}" stroke="#F5B800" stroke-width="3"/>
          <circle cx="${(120+W-130)/2}" cy="${y1}" r="4" fill="#FB923C"/>`;
        formula='相交：两条直线有一个交点';
      } else {
        body=`<line x1="70" y1="${y1}" x2="${W-110}" y2="${y1}" stroke="#00A896" stroke-width="3"/>
          <line x1="70" y1="${y2}" x2="${W-110}" y2="${y2}" stroke="#00A896" stroke-width="3"/>
          <path d="M 100 ${y1-8} l 16 8 l -16 8" fill="none" stroke="#FB923C" stroke-width="2"/>
          <path d="M 100 ${y2-8} l 16 8 l -16 8" fill="none" stroke="#FB923C" stroke-width="2"/>
          <path d="M ${W-140} ${y1+8} l -16 -8 l 16 -8" fill="none" stroke="#FB923C" stroke-width="2"/>
          <path d="M ${W-140} ${y2+8} l -16 -8 l 16 -8" fill="none" stroke="#FB923C" stroke-width="2"/>`;
        formula='平行：同一平面内永不相交';
      }
    } else if(shape==='perpendicular'){
      const ly=H-70, px=W/2, py=70;
      body=`<line x1="60" y1="${ly}" x2="${W-60}" y2="${ly}" stroke="#00A896" stroke-width="3"/>
        <circle cx="${px}" cy="${py}" r="6" fill="#1E3A5F"/>
        <text x="${px+10}" y="${py-6}" font-size="13" font-weight="700" fill="#1E3A5F">点A</text>
        <line x1="${px}" y1="${py}" x2="${px}" y2="${ly}" stroke="#FB923C" stroke-width="3"/>
        <path d="M ${px} ${ly-16} L ${px+16} ${ly-16} L ${px+16} ${ly}" fill="none" stroke="#E8A0BF" stroke-width="2.5"/>
        <circle cx="${px}" cy="${ly}" r="5" fill="#FB923C"/>
        <text x="${px+24}" y="${ly-8}" font-size="13" font-weight="700" fill="#FB923C">垂足</text>
        <text x="${px+34}" y="${(py+ly)/2}" font-size="12" font-weight="700" fill="#E8A0BF">垂直线段</text>`;
      formula='从直线外一点到直线的所有线段中，垂直线段最短';
    } else if(shape==='symmetry'){
      const ax=W/2;
      body=`<line x1="${ax}" y1="40" x2="${ax}" y2="${H-46}" stroke="#FB923C" stroke-width="2.5" stroke-dasharray="7,5"/>
        <path d="M ${ax-20} ${H-46} L ${ax-95} ${H-70} L ${ax-78} 130 L ${ax-38} 96 L ${ax-20} 118 Z" fill="rgba(0,168,150,0.25)" stroke="#00A896" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M ${ax+20} ${H-46} L ${ax+95} ${H-70} L ${ax+78} 130 L ${ax+38} 96 L ${ax+20} 118 Z" fill="rgba(245,184,0,0.22)" stroke="#F5B800" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="6,4"/>
        <text x="${ax+8}" y="52" font-size="12" font-weight="700" fill="#FB923C">对称轴</text>
        <text x="${ax-60}" y="${H-28}" font-size="12" fill="#00A896">左 = 右（沿轴对折完全重合）</text>`;
      formula='轴对称图形：沿对称轴对折，两边完全重合';
    } else if(shape==='translation'){
      const d=p.direction||'right', dist=p.distance||3, cell=24;
      const tri=[[0,0],[52,26],[0,52]];
      const x0=80, y0=H/2-26;
      const mv={right:[dist*cell,0],left:[-dist*cell,0],up:[0,-dist*cell],down:[0,dist*cell]}[d]||[dist*cell,0];
      const pts1=tri.map(pt=>`${x0+pt[0]},${y0+pt[1]}`).join(' ');
      const pts2=tri.map(pt=>`${x0+pt[0]+mv[0]},${y0+pt[1]+mv[1]}`).join(' ');
      const dirName={right:'右',left:'左',up:'上',down:'下'}[d]||d;
      body=`<polygon points="${pts1}" fill="rgba(0,168,150,0.30)" stroke="#00A896" stroke-width="2.5"/>
        <polygon points="${pts2}" fill="none" stroke="#F5B800" stroke-width="2.5" stroke-dasharray="6,4"/>
        <line x1="${x0+56}" y1="${y0+26}" x2="${x0+mv[0]-6}" y2="${y0+26}" stroke="#FB923C" stroke-width="3" stroke-dasharray="5,4"/>
        <polygon points="${x0+mv[0]},${y0+26} ${x0+mv[0]-12},${y0+20} ${x0+mv[0]-12},${y0+32}" fill="#FB923C"/>
        <text x="${x0+56+(mv[0]-56)/2}" y="${y0+16}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">${dist} 格</text>
        <text x="${W/2}" y="${H-16}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">向${dirName}平移 ${dist} 格（形状、大小、方向都不变，只是位置变了）</text>`;
      formula=`平移三要素：方向（${dirName}）、距离（${dist} 格）、形状不变`;
    } else if(shape==='composite'){
      if(p.parts && p.parts.length){
        const parts=p.parts;
        const scale=Math.min(22/Math.max(...parts.map(q=>q.l||1)), 20/Math.max(...parts.map(q=>q.w||1)), 30);
        let yy=52, x0=W/2-40, areaSum=0;
        body='';
        parts.forEach((q,i2)=>{
          const rw=(q.l||1)*scale, rh=(q.w||1)*scale, gx=x0+(i2%2===0?0:30), gy=yy;
          const col=['#00A896','#F5B800','#FB923C','#E8A0BF'][i2%4];
          body+=`<rect x="${gx}" y="${gy}" width="${rw}" height="${rh}" fill="${col}22" stroke="${col}" stroke-width="2.5"/>
            <text x="${gx+rw/2}" y="${gy-6}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${q.l}×${q.w}</text>`;
          yy+=rh; areaSum+=(q.l||0)*(q.w||0);
        });
        formula=`组合图形面积 = ${parts.map(q=>`${q.l}×${q.w}`).join(' + ')} = ${areaSum}`;
      } else if(p.outer==='square'){
        const sd=p.side||4, sc=Math.min(24, 150/sd), rw=sd*sc, x0=(W-rw)/2-30, y0=(H-50-rw)/2;
        body=`<rect x="${x0}" y="${y0}" width="${rw}" height="${rw}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2.5"/>
          <circle cx="${x0+rw/2}" cy="${y0+rw/2}" r="${rw/2}" fill="rgba(245,184,0,0.25)" stroke="#F5B800" stroke-width="2.5"/>
          <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">边长 ${sd}</text>
          <text x="${x0+rw/2}" y="${y0+rw/2+4}" text-anchor="middle" font-size="12" font-weight="700" fill="#B8860B">r = ${sd/2}</text>`;
        formula=`正方形内最大的圆：直径 = 边长 = ${sd}，r = ${sd/2}`;
      } else { body=''; formula='组合图形'; }
    } else if(shape==='cubes'){
      const tv=p.topView||[1,1,1];
      const n=tv.length, cs=Math.min(46, (W-100)/(n+0.6));
      const x0=(W-n*cs)/2, y0=H/2-cs/2;
      body='';
      tv.forEach((hgt,i2)=>{
        const gx=x0+i2*cs, gy=y0-(hgt-1)*cs*0.4;
        for(let k2=0;k2<hgt;k2++){
          const by=gy;
          body+=`<rect x="${gx}" y="${by}" width="${cs}" height="${cs}" fill="rgba(0,168,150,${0.25+k2*0.18})" stroke="#00A896" stroke-width="2"/>
            <path d="M ${gx} ${by} L ${gx+cs*0.3} ${by-cs*0.3} L ${gx+cs+cs*0.3} ${by-cs*0.3} L ${gx+cs} ${by} Z" fill="rgba(0,168,150,0.35)" stroke="#00A896" stroke-width="1.5"/>
            <path d="M ${gx+cs} ${by} L ${gx+cs+cs*0.3} ${by-cs*0.3} L ${gx+cs+cs*0.3} ${by+cs-cs*0.3} L ${gx+cs} ${by+cs} Z" fill="rgba(0,120,110,0.35)" stroke="#00A896" stroke-width="1.5"/>`;
        }
      });
      const tot2=tv.reduce((a,b)=>a+b,0);
      formula=`从正面看 ${n} 列，各列 ${tv.join('、')} 个，共 ${tot2} 个小正方体`;
    } else if(shape==='rotation'){
      const ang=p.angle||90, cw=(p.direction||'clockwise')==='clockwise';
      const tri=[[0,-40],[36,26],[-36,26]];
      const cxr=W/2-60, cyr=H/2+6;
      const rad=ang*Math.PI/180*(cw?1:-1);
      const rot=tri.map(pt=>[pt[0]*Math.cos(rad)-pt[1]*Math.sin(rad), pt[0]*Math.sin(rad)+pt[1]*Math.cos(rad)]);
      const p1=tri.map(pt=>`${cxr+pt[0]},${cyr+pt[1]}`).join(' ');
      const p2r=rot.map(pt=>`${cxr+120+pt[0]},${cyr+pt[1]}`).join(' ');
      body=`<polygon points="${p1}" fill="rgba(0,168,150,0.30)" stroke="#00A896" stroke-width="2.5"/>
        <polygon points="${p2r}" fill="none" stroke="#F5B800" stroke-width="2.5" stroke-dasharray="6,4"/>
        <path d="M ${cxr+10} ${cyr-58} A 62 62 0 0 ${cw?1:0} ${cxr+110} ${cyr-20}" fill="none" stroke="#FB923C" stroke-width="2.5" stroke-dasharray="5,4"/>
        <polygon points="${cxr+118},${cyr-24} ${cxr+104},${cyr-26} ${cxr+110},${cyr-12}" fill="#FB923C"/>
        <text x="${cxr+60}" y="${cyr-64}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">${cw?'顺':'逆'}时针 ${ang}°</text>
        <text x="${W/2}" y="${H-14}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">绕中心点${cw?'顺':'逆'}时针旋转 ${ang}°（形状大小不变，方向变了）</text>`;
      formula=`旋转三要素：中心点、方向（${cw?'顺时针':'逆时针'}）、角度（${ang}°）`;
    } else if(shape==='pattern'){
      const items=[];
      for(let k2=0;k2<5;k2++){
        const rotA=(k2%4)*90, col=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F'][k2];
        const cxp=60+k2*80, cyp=H/2-8;
        if(k2===4){
          items.push(`<rect x="${cxp-26}" y="${cyp-26}" width="52" height="52" rx="6" fill="rgba(245,184,0,0.12)" stroke="#F5B800" stroke-width="2" stroke-dasharray="5,4"/>
            <text x="${cxp}" y="${cyp+9}" text-anchor="middle" font-size="26" font-weight="800" fill="#F5B800">?</text>`);
        } else {
          const rr=rotA*Math.PI/180;
          const tri=[[0,-20],[19,14],[-19,14]];
          const pts=tri.map(pt=>{ const x3=pt[0]*Math.cos(rr)-pt[1]*Math.sin(rr), y3=pt[0]*Math.sin(rr)+pt[1]*Math.cos(rr); return `${cxp+x3},${cyp+y3}`; }).join(' ');
          items.push(`<polygon points="${pts}" fill="${col}33" stroke="${col}" stroke-width="2.5"/>
            <text x="${cxp}" y="${cyp+42}" text-anchor="middle" font-size="11" fill="#9aa5b1">${k2+1}</text>`);
        }
      }
      body=items.join('');
      formula='观察：图形每次顺时针旋转 90°——下一个是？';
    } else if(shape==='direction'){
      // 位置与方向：东偏北30°、距离300米
      const ang=(p.angle||30)*Math.PI/180, dist=p.distance||0, dn=p.dir||'东偏北';
      const cx2=W/2-20, cy2=H/2+40, r2=100;
      const base={东:[1,0],南:[0,1],西:[-1,0],北:[0,-1]}[dn[0]]||[1,0];
      const toward={东:[1,0],南:[0,1],西:[-1,0],北:[0,-1]}[dn[dn.length-1]]||[0,-1];
      const sgn=(base[0]!==0)?-Math.sign(toward[1]||1):-Math.sign(toward[0]||1);
      const vx=base[0]*Math.cos(ang)+toward[0]*Math.sin(ang)*(base[0]!==0?1:-1);
      const vy=base[1]*Math.cos(ang)+toward[1]*Math.sin(ang)*(base[0]!==0?1:-1);
      const vl=Math.hypot(vx,vy)||1;
      const ux=vx/vl, uy=vy/vl;
      const ax=cx2+ux*r2, ay=cy2+uy*r2;
      const off={东:[0,-1],西:[0,-1],南:[1,0],北:[1,0]}[dn[0]]||[0,-1];
      body=`<circle cx="${cx2}" cy="${cy2}" r="5" fill="#1E3A5F"/>
        <text x="${cx2-14}" y="${cy2+18}" font-size="12" font-weight="700" fill="#1E3A5F">观测点</text>
        <line x1="${cx2}" y1="${cy2}" x2="${cx2+120}" y2="${cy2}" stroke="#9aa5b1" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="${cx2}" y1="${cy2}" x2="${cx2}" y2="${cy2-120}" stroke="#9aa5b1" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="${cx2+128}" y="${cy2+4}" font-size="12" font-weight="700" fill="#e74c3c">东</text>
        <text x="${cx2-4}" y="${cy2-126}" text-anchor="end" font-size="12" font-weight="700" fill="#e74c3c">北</text>
        <line x1="${cx2}" y1="${cy2}" x2="${ax}" y2="${ay}" stroke="#FB923C" stroke-width="4" stroke-linecap="round"/>
        <polygon points="${ax+ux*10},${ay+uy*10} ${ax-uy*6-ux*4},${ay+ux*6-uy*4} ${ax+uy*6-ux*4},${ay-ux*6-uy*4}" fill="#FB923C"/>
        <text x="${cx2+ux*r2/2+10}" y="${cy2+uy*r2/2-10}" font-size="13" font-weight="800" fill="#FB923C">${dn}${p.angle||30}°${dist?`，距离 ${dist} 米`:''}</text>`;
      formula=`方向：${dn}${p.angle||30}°${dist?`　距离：${dist} 米`:''}（先说偏向的基准方向，再说偏转角度）`;
    } else if(shape==='route'){
      // 路线图：segments [{dir:南,dist:200},...]
      const segs=p.segments||[];
      const dirV={南:[0,1],北:[0,-1],东:[1,0],西:[-1,0]};
      const maxDist=Math.max(...segs.map(s2=>s2.dist||1));
      const scale=Math.min(0.35, 150/maxDist);
      let px2=W/2-90, py2=H-56;
      body=`<circle cx="${px2}" cy="${py2}" r="6" fill="#1E3A5F"/><text x="${px2-8}" y="${py2+20}" font-size="12" font-weight="700" fill="#1E3A5F">出发点</text>`;
      let endName='终点';
      segs.forEach((s2,i2)=>{
        const v=dirV[s2.dir]||[1,0];
        const nx=px2+v[0]*(s2.dist||0)*scale, ny=py2+v[1]*(s2.dist||0)*scale;
        body+=`<line x1="${px2}" y1="${py2}" x2="${nx}" y2="${ny}" stroke="#FB923C" stroke-width="4" stroke-linecap="round"/>
          <text x="${(px2+nx)/2+v[1]*14}" y="${(py2+ny)/2-v[0]*14+4}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">${s2.dir} ${s2.dist}米</text>`;
        px2=nx; py2=ny;
        if(i2===segs.length-1){
          body+=`<circle cx="${px2}" cy="${py2}" r="6" fill="#00A896"/><text x="${px2+10}" y="${py2-8}" font-size="12" font-weight="700" fill="#006B5E">${p.endName||endName}</text>`;
        }
      });
      formula='按方向和距离逐段画出路线';
    } else if(shape==='ring' || shape==='annulus'){
      const rO=p.outerRadius||p.outerR||12, rI=p.innerRadius||p.innerR||10;
      const sc=Math.min(9, 88/Math.max(rO,1));
      body=`<circle cx="${W/2}" cy="${H/2-10}" r="${rO*sc}" fill="rgba(245,184,0,0.25)" stroke="#F5B800" stroke-width="2.5"/>
        <circle cx="${W/2}" cy="${H/2-10}" r="${rI*sc}" fill="#fff" stroke="#00A896" stroke-width="2.5"/>
        <line x1="${W/2}" y1="${H/2-10}" x2="${W/2+rI*sc}" y2="${H/2-10}" stroke="#00A896" stroke-width="2"/>
        <line x1="${W/2}" y1="${H/2-10}" x2="${W/2+rO*sc}" y2="${H/2-26}" stroke="#F5B800" stroke-width="2"/>
        <text x="${W/2+rI*sc/2}" y="${H/2-16}" font-size="12" font-weight="700" fill="#006B5E">r=${rI}</text>
        <text x="${W/2+rO*sc/2}" y="${H/2-38}" font-size="12" font-weight="700" fill="#AC7E00">R=${rO}</text>`;
      formula=`圆环面积 = πR² - πr² = 3.14×(${rO}² - ${rI}²) = ${(3.14*(rO*rO-rI*rI)).toFixed(2)}`;
    } else if(shape==='pie'){
      const cx2=W/2, cy2=H/2-8, r2=80;
      let segs=[];
      if(p.segments && p.segments.length){
        segs=p.segments.map(s2=>({label:s2.label, frac:(s2.percent!=null?s2.percent/100:(s2.angle||0)/360), color:s2.color}));
      } else if(p.angle!=null){
        segs=[{label:`${p.angle}°`, frac:p.angle/360, color:'#F5B800'},{label:'', frac:1-p.angle/360, color:'#00A896'}];
      }
      let startA=-Math.PI/2;
      segs.forEach(s2=>{
        const endA=startA+s2.frac*2*Math.PI;
        const x1=cx2+r2*Math.cos(startA), y1=cy2+r2*Math.sin(startA);
        const x2=cx2+r2*Math.cos(endA), y2=cy2+r2*Math.sin(endA);
        const large=s2.frac>0.5?1:0;
        body+=`<path d="M ${cx2} ${cy2} L ${x1} ${y1} A ${r2} ${r2} 0 ${large} 1 ${x2} ${y2} Z" fill="${s2.color}33" stroke="${s2.color}" stroke-width="2"/>
          <text x="${cx2+r2*0.6*Math.cos((startA+endA)/2)}" y="${cy2+r2*0.6*Math.sin((startA+endA)/2)+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${s2.label}${s2.frac<1?Math.round(s2.frac*360):''}</text>`;
        startA=endA;
      });
      formula=`整个圆 = 360° = 100%`;
    } else if(shape==='dotArray'){
      const layers=p.layers||4, n2=layers;
      const cs=Math.min(150/n2, 34), x0=W/2-n2*cs/2, y0=H/2-n2*cs/2-6;
      const cols=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F'];
      // 点阵按 L 形分层着色：第 k 层有 2k-1 个点
      body='';
      for(let rI=0;rI<n2;rI++){
        for(let cI=0;cI<n2;cI++){
          const layer=Math.max(rI,cI)+1;
          const col=cols[(layer-1)%5];
          body+=`<circle cx="${x0+cI*cs+cs/2}" cy="${y0+rI*cs+cs/2}" r="${Math.min(cs*0.32,9)}" fill="${col}77" stroke="${col}" stroke-width="1.5"/>`;
        }
      }
      let expr=[]; for(let k2=1;k2<=n2;k2++) expr.push(2*k2-1);
      formula=`每层是奇数：${expr.join('+')} = ${n2*n2} = ${n2}²（正方形点阵）`;
    } else if(shape==='pigeonhole'){
      const pigeons=p.pigeons||4, holes=p.holes||3;
      const bw=Math.min(90, (W-80)/holes), bh=54, x0=(W-holes*bw)/2, y0=H/2;
      body='';
      for(let k2=0;k2<holes;k2++){
        body+=`<rect x="${x0+k2*bw+6}" y="${y0}" width="${bw-12}" height="${bh}" fill="rgba(0,168,150,0.10)" stroke="#00A896" stroke-width="2" rx="6"/>
          <text x="${x0+k2*bw+bw/2}" y="${y0+bh+18}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">巢${k2+1}</text>`;
      }
      for(let k2=0;k2<pigeons;k2++){
        const gx=x0+(k2%holes)*bw+bw/2, gy=y0+14+Math.floor(k2/holes)*(-22);
        body+=`<text x="${gx}" y="${gy}" text-anchor="middle" font-size="16">🕊️</text>`;
      }
      const q=Math.floor(pigeons/holes), rem=pigeons%holes;
      formula=`${pigeons}÷${holes}=${q}……${rem}，至少数 = ${q}+1 = ${q+1} 只`;
    } else if(shape==='knowledgeTree'){
      const branches=p.branches||[];
      const cx2=W/2, cy2=H/2-20;
      body=`<rect x="${cx2-36}" y="${cy2-18}" width="72" height="36" rx="8" fill="#1E3A5F"/>
        <text x="${cx2}" y="${cy2+6}" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">数</text>`;
      const spread=Math.min(160, (branches.length-1)*44+40);
      branches.forEach((b2,i2)=>{
        const bx=cx2-spread/2+(spread/(Math.max(branches.length-1,1)))*i2;
        const by=cy2+58;
        body+=`<line x1="${cx2}" y1="${cy2+18}" x2="${bx}" y2="${by}" stroke="#9aa5b1" stroke-width="1.8"/>
          <rect x="${bx-30}" y="${by-2}" width="60" height="26" rx="6" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="1.8"/>
          <text x="${bx}" y="${by+16}" text-anchor="middle" font-size="11" font-weight="700" fill="#006B5E">${b2}</text>`;
      });
      formula=(p.type==='number_system')?'数系：整数、小数、分数、百分数、负数构成完整的数体系':'知识结构树';
    } else if(shape==='parallel'){
      const a1=p.angle1||65, a2=p.angle2||115;
      const y1=70, y2=H-64;
      body=`<line x1="50" y1="${y1}" x2="${W-50}" y2="${y1}" stroke="#00A896" stroke-width="3"/>
        <line x1="50" y1="${y2}" x2="${W-50}" y2="${y2}" stroke="#00A896" stroke-width="3"/>
        <line x1="100" y1="${y2+16}" x2="${W-130}" y2="${y1-16}" stroke="#F5B800" stroke-width="3"/>
        <path d="M 60 ${y1-8} l 14 0" fill="none" stroke="#00A896" stroke-width="2.5"/>
        <path d="M 60 ${y2-8} l 14 0" fill="none" stroke="#00A896" stroke-width="2.5"/>
        <text x="${W-190}" y="${y1-14}" font-size="13" font-weight="800" fill="#FB923C">∠1=${a1}°</text>
        <text x="${W-190}" y="${y2+24}" font-size="13" font-weight="800" fill="#E8A0BF">∠2=${a2}°</text>
        <text x="${W/2}" y="${H-12}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">两条平行线被第三条直线所截，同旁内角互补</text>`;
      formula=`${a1}° + ${a2}° = ${a1+a2}° = 180°`;
    } else if(shape==='polygon'){
      const sides=p.sides||8;
      const cx2=W/2, cy2=H/2-10, r2=78;
      const pts=Array.from({length:sides},(_,i2)=>{
        const a=-Math.PI/2+i2*2*Math.PI/sides;
        return `${cx2+r2*Math.cos(a)},${cy2+r2*Math.sin(a)}`;
      }).join(' ');
      body=`<polygon points="${pts}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
        <text x="${cx2}" y="${cy2+5}" text-anchor="middle" font-size="15" font-weight="800" fill="#1E3A5F">${sides}边形</text>`;
      formula=`内角和 = (${sides}-2)×180° = ${(sides-2)*180}°`;
    } else if(shape==='parabola'){
      const cx2=W/2, cy2=H/2, half=160;
      const sx=(x)=>cx2+x*12;
      const sy=(y)=>cy2-y*12;
      let curve='';
      const hasRoots=p.roots && p.roots.length===2;
      let vx2=p.vertex?p.vertex[0]:0, vy2=p.vertex?p.vertex[1]:0;
      let aCoef=1;
      if(hasRoots && vy2<0){ aCoef=1; }
      if(p.width){ aCoef=-(vy2)/Math.pow((p.width/2),2)*(p.width?1:1)*(-1); }
      const fx=(x)=>{
        if(hasRoots){ return aCoef*(x-p.roots[0])*(x-p.roots[1]); }
        if(p.width){ const halfW=p.width/2; return vy2*(1-Math.pow((x-vx2)/halfW,2)); }
        return (x-vx2)*(x-vx2)+vy2;
      };
      const xmin=p.width? (vx2-p.width/2-2) : (hasRoots? Math.min(p.roots[0],vx2)-2 : vx2-3);
      const xmax=p.width? (vx2+p.width/2+2) : (hasRoots? Math.max(p.roots[1],vx2)+2 : vx2+3);
      const flip=(vy2>0&&!p.width&&hasRoots)?-1:1;
      for(let xx=xmin; xx<=xmax; xx+=0.15){
        const yy=fx(xx)*(p.width?1:(vy2>0?-1:1));
        curve+=`${sx(xx)},${sy(yy*(p.width?1:1))} `;
      }
      body=`<line x1="${sx(vx2-6)}" y1="${cy2}" x2="${sx(vx2+6)}" y2="${cy2}" stroke="#475569" stroke-width="1.5"/>
        <line x1="${sx(vx2)}" y1="${sy(vy2+3*(p.width?1:1))}" x2="${sx(vx2)}" y2="${sy(vy2-3*(p.width?1:1))}" stroke="#475569" stroke-width="1.5"/>
        <polyline points="${curve}" fill="none" stroke="#00A896" stroke-width="3"/>`;
      if(hasRoots){
        body+=`<circle cx="${sx(p.roots[0])}" cy="${sy(0)}" r="5" fill="#FB923C"/>
          <circle cx="${sx(p.roots[1])}" cy="${sy(0)}" r="5" fill="#FB923C"/>
          <text x="${sx(p.roots[0])}" y="${sy(0)+20}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">(${p.roots[0]},0)</text>
          <text x="${sx(p.roots[1])}" y="${sy(0)+20}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">(${p.roots[1]},0)</text>`;
      }
      if(p.vertex){
        body+=`<circle cx="${sx(vx2)}" cy="${sy(vy2)}" r="5" fill="#E8A0BF"/>
          <text x="${sx(vx2)+10}" y="${sy(vy2)-6}" font-size="12" font-weight="700" fill="#E8A0BF">顶点(${vx2},${vy2})</text>`;
      }
      formula=hasRoots?`与 x 轴的交点：x = ${p.roots[0]} 和 x = ${p.roots[1]}（令 y=0）`:'抛物线：顶点式 y=a(x-h)²+k';
    } else if(shape==='coordinate'){
      const cx2=W/2, cy2=H/2, half=150;
      body=`<line x1="${cx2-half}" y1="${cy2}" x2="${cx2+half}" y2="${cy2}" stroke="#475569" stroke-width="2"/>
        <line x1="${cx2}" y1="${cy2-half*0.7}" x2="${cx2}" y2="${cy2+half*0.7}" stroke="#475569" stroke-width="2"/>
        <text x="${cx2+half-4}" y="${cy2+18}" font-size="12" fill="#475569">x</text>
        <text x="${cx2+10}" y="${cy2-half*0.7+8}" font-size="12" fill="#475569">y</text>`;
      const pts=p.points||[];
      pts.forEach((pt,i2)=>{
        const px2=cx2+pt[0]*16, py2=cy2-pt[1]*16;
        body+=`<circle cx="${px2}" cy="${py2}" r="6" fill="${i2===0?'#00A896':'#FB923C'}"/>
          <line x1="${cx2}" y1="${cy2}" x2="${px2}" y2="${py2}" stroke="${i2===0?'#00A896':'#FB923C'}" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="${px2+10}" y="${py2-6}" font-size="13" font-weight="800" fill="${i2===0?'#006B5E':'#FB923C'}">(${pt[0]},${pt[1]})</text>`;
      });
      formula=(pts.length===2 && pts[0][0]===-pts[1][0] && pts[0][1]===-pts[1][1])?'两点关于原点对称（横纵坐标都互为相反数）':'坐标系中的点';
    } else {
      return '<div class="mv-empty">未知图形类型</div>';
    }
    return `<div class="mv-wrap mv-geometry">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${body}
      </svg>
      <div class="mv-geo-formula">${formula}</div>
    </div>`;
  },

  // ============================================================
  // === 7 种优化渲染器（V5 新增） ===
  // ============================================================

  // 7. 毫米认识 —— 放大镜下的尺子（1mm 间距放大显示）
  // data: {start, end, points, highlight} （兼容 numberLine 数据）
  rulerMagnifier(data, problem){
    const W=560, H=200, padX=30, rulerY=70, rulerH=44;
    // 主尺：0~5cm，每 cm 一个长刻度，每 mm 一个短刻度
    const cmStart=0, cmEnd=5;
    const rulerW = W - padX*2;
    const xOf = (cm)=> padX + (cm - cmStart) / (cmEnd - cmStart) * rulerW;
    let ticks='';
    // 每毫米一个短刻度
    for(let mm=0; mm<=(cmEnd-cmStart)*10; mm++){
      const cm = cmStart + mm/10;
      const x = xOf(cm);
      const isCm = (mm % 10 === 0);
      const h = isCm ? 14 : 7;
      ticks += `<line x1="${x}" y1="${rulerY}" x2="${x}" y2="${rulerY+h}" stroke="${isCm?'#1E3A5F':'#94A3B8'}" stroke-width="${isCm?1.8:1}"/>`;
      if(isCm){
        ticks += `<text x="${x}" y="${rulerY+h+14}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${cm}cm</text>`;
      } else if(mm % 5 === 0){
        ticks += `<text x="${x}" y="${rulerY+h+12}" text-anchor="middle" font-size="9" fill="#64748B">${mm}mm</text>`;
      }
    }
    // 放大镜：聚焦 1cm 区域（圆圈 + 手柄），圈内放大显示 10 个 mm
    const focusX = xOf(1), focusR = 48;
    const lensCx = focusX + 60, lensCy = rulerY + rulerH/2 - 70;
    const mmLabels = Array.from({length:10},(_,i)=>{
      const ang = -Math.PI + i * Math.PI / 9;
      const tx = lensCx + Math.cos(ang) * 30;
      const ty = lensCy + Math.sin(ang) * 14 + 4;
      return `<text x="${tx}" y="${ty}" text-anchor="middle" font-size="9" fill="#fff" font-weight="700">${i+1}</text>`;
    }).join('');
    return `<div class="mv-wrap mv-ruler">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <!-- 主尺身 -->
        <rect x="${padX}" y="${rulerY}" width="${rulerW}" height="${rulerH}" fill="#FFF8E6" stroke="#1E3A5F" stroke-width="2" rx="4"/>
        ${ticks}
        <!-- 聚焦高亮 1cm -->
        <rect x="${xOf(0)}" y="${rulerY-6}" width="${xOf(1)-xOf(0)}" height="${rulerH+12}" fill="rgba(245,184,0,0.18)" rx="3"/>
        <text x="${xOf(0.5)}" y="${rulerY-12}" text-anchor="middle" font-size="11" font-weight="700" fill="#AC7E00">这 1cm 里有 10 小格</text>
        <!-- 放大镜 -->
        <g class="mv-lens" style="transform-box:fill-box;-webkit-transform-box:fill-box;transform-origin:center">
          <line x1="${focusX}" y1="${rulerY+rulerH/2}" x2="${lensCx}" y2="${lensCy}" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
          <circle cx="${lensCx}" cy="${lensCy}" r="${focusR}" fill="rgba(0,168,150,0.92)" stroke="#00A896" stroke-width="3"/>
          <text x="${lensCx}" y="${lensCy-22}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">1cm 放大看</text>
          ${mmLabels}
          <text x="${lensCx}" y="${lensCy+24}" text-anchor="middle" font-size="10" fill="#fff">= 10mm</text>
        </g>
        <!-- 结论 -->
        <g class="mv-ruler-conclusion">
          <rect x="${padX}" y="${H-36}" width="${rulerW}" height="26" fill="#00A896" rx="13"/>
          <text x="${W/2}" y="${H-18}" text-anchor="middle" font-size="13" font-weight="700" fill="${this._textColor('#00A896')}">1 厘米 = 10 毫米（mm） · mm 是比 cm 更小的单位</text>
        </g>
      </svg>
    </div>`;
  },

  // 8. 分米认识 —— 身体尺（手掌张开≈1dm 的示意图）
  // data: {total, parts} （兼容 barModel 数据）
  bodyRuler(data, problem){
    const W=560, H=210, padX=30;
    // 左侧：张开的手掌（简化几何），标注≈1dm
    const palmCx=140, palmCy=95;
    // 手掌：一个圆角矩形 + 5 个手指
    const fingers=[-50,-26,-6,14,36].map((fx,i)=>{
      const fh = i===0 ? 38 : (i===4 ? 30 : 48); // 大拇指短一些
      const fy = palmCy - 30 - fh;
      return `<rect class="mv-finger" x="${palmCx+fx}" y="${fy}" width="14" height="${fh}" fill="#FFD54D" stroke="#AC7E00" stroke-width="1.5" rx="7" style="animation-delay:${i*0.12}s"/>`;
    }).join('');
    // 下方对比尺：1dm = 10cm
    const rulerY=H-40, rulerW=300, rulerX=(W-rulerW)/2;
    const segW=rulerW/10;
    const cmMarks=Array.from({length:11},(_,i)=>{
      const x = rulerX + i*segW;
      return `<line x1="${x}" y1="${rulerY}" x2="${x}" y2="${rulerY+10}" stroke="#1E3A5F" stroke-width="1.5"/>
        <text x="${x}" y="${rulerY+24}" text-anchor="middle" font-size="10" fill="#475569">${i}</text>`;
    }).join('');
    return `<div class="mv-wrap mv-body-ruler">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <!-- 手掌主体 -->
        <rect x="${palmCx-58}" y="${palmCy-30}" width="116" height="64" fill="#FFE180" stroke="#AC7E00" stroke-width="2" rx="14"/>
        ${fingers}
        <!-- 1dm 标注 -->
        <line x1="${palmCx-58}" y1="${palmCy+34}" x2="${palmCx+58}" y2="${palmCy+34}" stroke="#FB923C" stroke-width="2.5" stroke-dasharray="4,3"/>
        <text x="${palmCx}" y="${palmCy+52}" text-anchor="middle" font-size="12" font-weight="700" fill="#FB923C">手掌张开 ≈ 1 分米</text>
        <!-- 提示 -->
        <text x="${palmCx}" y="${palmCy-90}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">🖐️ 伸出你的手，张开手掌量一量</text>
        <!-- 对比尺 -->
        <text x="${rulerX}" y="${rulerY-8}" font-size="12" font-weight="700" fill="#1E3A5F">1 分米 = 10 厘米</text>
        <rect x="${rulerX}" y="${rulerY}" width="${rulerW}" height="8" fill="#00A896" rx="2"/>
        <rect x="${rulerX}" y="${rulerY}" width="${segW}" height="8" fill="#F5B800" rx="2"/>
        ${cmMarks}
      </svg>
    </div>`;
  },

  // 9. 千米认识 —— 地图缩放动画（教室→操场→学校→1km 逐级缩放）
  // data: {start, end, points, highlight}
  mapZoom(data, problem){
    const W=560, H=240, cx=W/2, cy=H/2;
    // 4 级嵌套矩形，从内到外放大
    const levels=[
      {w:50,  h:36,  label:'教室',  dist:'约 8 米',  color:'#00A896'},
      {w:110, h:80,  label:'操场',  dist:'约 100 米', color:'#F5B800'},
      {w:180, h:130, label:'学校一圈', dist:'约 400 米', color:'#FB923C'},
      {w:260, h:185, label:'1 千米', dist:'1000 米',   color:'#E8A0BF'},
    ];
    const boxes=levels.map((lv,i)=>`
      <g class="mv-map-level" style="animation-delay:${i*0.35}s;transform-box:fill-box;-webkit-transform-box:fill-box;transform-origin:center">
        <rect x="${cx-lv.w/2}" y="${cy-lv.h/2}" width="${lv.w}" height="${lv.h}" fill="none" stroke="${lv.color}" stroke-width="2.5" stroke-dasharray="6,4" rx="8"/>
        <text x="${cx-lv.w/2+6}" y="${cy-lv.h/2+16}" font-size="11" font-weight="700" fill="${lv.color}">${lv.label}</text>
        <text x="${cx}" y="${cy-lv.h/2-6}" text-anchor="middle" font-size="10" fill="${lv.color}" opacity="0.85">${lv.dist}</text>
      </g>`).join('');
    return `<div class="mv-wrap mv-map-zoom">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${boxes}
        <!-- 中心点 -->
        <circle cx="${cx}" cy="${cy}" r="4" fill="#1E3A5F"/>
        <!-- 缩放箭头 -->
        <g opacity="0.6">
          <path d="M ${cx+150} ${cy-70} L ${cx+170} ${cy-70} M ${cx+165} ${cy-74} L ${cx+170} ${cy-70} L ${cx+165} ${cy-66}" stroke="#1E3A5F" stroke-width="1.5" fill="none"/>
          <text x="${cx+175}" y="${cy-66}" font-size="10" fill="#1E3A5F">逐级放大</text>
        </g>
        <!-- 结论 -->
        <rect x="20" y="${H-30}" width="${W-40}" height="22" fill="#1E3A5F" rx="11"/>
        <text x="${cx}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">1 千米 = 1000 米 · 走 1km 大约要 15 分钟</text>
      </svg>
    </div>`;
  },

  // 10. 吨的认识 —— 跷跷板/天平（1kg vs 1000 个的形象对比）
  // data: {total, parts} （兼容 barModel 数据）
  balanceScale(data, problem){
    const W=560, H=220, cx=W/2, baseY=H-30, pillarTop=70;
    // 天平支架
    const pillar = `<rect x="${cx-4}" y="${pillarTop}" width="8" height="${baseY-pillarTop}" fill="#1E3A5F"/>
      <polygon points="${cx-26},${baseY} ${cx+26},${baseY} ${cx},${baseY-18}" fill="#1E3A5F"/>`;
    // 横梁（水平，表示平衡）
    const beamY = pillarTop + 6, beamLen=180;
    const beam = `<g class="mv-beam" style="transform-box:fill-box;-webkit-transform-box:fill-box;transform-origin:center">
      <rect x="${cx-beamLen}" y="${beamY-3}" width="${beamLen*2}" height="6" fill="#475569" rx="3"/>
    </g>`;
    // 左盘：1 千克砝码
    const leftX = cx - beamLen + 30;
    const leftStrap = `<line x1="${leftX}" y1="${beamY}" x2="${leftX}" y2="${beamY+34}" stroke="#64748B" stroke-width="1.5"/>`;
    const leftPan = `<ellipse cx="${leftX}" cy="${beamY+38}" rx="38" ry="8" fill="#94A3B8"/>
      <rect x="${leftX-30}" y="${beamY+18}" width="60" height="22" fill="#00A896" rx="4"/>
      <text x="${leftX}" y="${beamY+33}" text-anchor="middle" font-size="12" font-weight="700" fill="${this._textColor('#00A896')}">1 千克</text>`;
    // 右盘：1000 个 1g 小方块（用堆叠小方块表示）
    const rightX = cx + beamLen - 30;
    const rightStrap = `<line x1="${rightX}" y1="${beamY}" x2="${rightX}" y2="${beamY+34}" stroke="#64748B" stroke-width="1.5"/>`;
    // 画 10×10 的小格子表示 1000 个
    const gridSize=4, gridCols=10, gridRows=10;
    const gridStartX = rightX - (gridCols*gridSize)/2, gridStartY = beamY+20;
    let grid='';
    for(let r=0;r<gridRows;r++){
      for(let c=0;c<gridCols;c++){
        const delay = (r*gridCols+c)*0.012;
        grid += `<rect class="mv-ton-cell" x="${gridStartX+c*gridSize}" y="${gridStartY+r*gridSize}" width="${gridSize-0.5}" height="${gridSize-0.5}" fill="#F5B800" style="animation-delay:${delay}s"/>`;
      }
    }
    const rightPan = `<ellipse cx="${rightX}" cy="${beamY+62}" rx="38" ry="8" fill="#94A3B8"/>${grid}`;
    return `<div class="mv-wrap mv-ton-balance">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${pillar}${beam}${leftStrap}${leftPan}${rightStrap}${rightPan}
        <!-- 标签 -->
        <text x="${leftX}" y="${beamY+58}" text-anchor="middle" font-size="10" fill="#1E3A5F">1 块 1kg 砝码</text>
        <text x="${rightX}" y="${beamY+82}" text-anchor="middle" font-size="10" fill="#1E3A5F">1000 块 1g 小方块</text>
        <!-- 平衡提示 -->
        <text x="${cx}" y="${beamY-12}" text-anchor="middle" font-size="11" font-weight="700" fill="#00A896">⚖️ 天平平衡 → 两边一样重</text>
        <!-- 结论 -->
        <rect x="20" y="${H-26}" width="${W-40}" height="20" fill="#FB923C" rx="10"/>
        <text x="${cx}" y="${H-12}" text-anchor="middle" font-size="12" font-weight="700" fill="${this._textColor('#FB923C')}">1 吨 = 1000 千克 · 大约等于 1 头大象的重量</text>
      </svg>
    </div>`;
  },

  // 11. 集合韦恩图 —— 拖拽交互（元素拖入圆圈，重叠区高亮）
  // data: {total, parts:[{label,val,color}]} parts[0]=只A, parts[1]=都参加, parts[2]=只B
  vennDiagram(data, problem){
    const parts=(data && data.parts) || [];
    const onlyA = parts[0] || {val:0,color:'#00A896'};
    const both  = parts[1] || {val:0,color:'#F5B800'};
    const onlyB = parts[2] || {val:0,color:'#FB923C'};
    const aColor=this._hex(onlyA.color), bColor=this._hex(onlyB.color), bothColor=this._hex(both.color);
    const total=(data && data.total) || (onlyA.val+both.val+onlyB.val);
    const W=560, H=300, cxA=215, cxB=345, cy=150, r=95, midX=(cxA+cxB)/2;
    // 主体：SVG 韦恩图（两个相交圆 + 三段计数）。
    // 旧版用 HTML+CSS 画圆（无 <svg>），被审计判定为「有图形数据却未渲染」(问题2·2026-09-11)。
    // 现统一输出 <svg>，保证「有 visualData 必有图可看」；总数写在 <tspan> 内，
    // 由 _scrubAnswer 中心化掩码，等于答案时显 ?，避免泄漏。
    const svg = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
      <text x="${W/2}" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">集合关系 · 韦恩图（重叠部分只算一次）</text>
      <circle cx="${cxA}" cy="${cy}" r="${r}" fill="${aColor}22" stroke="${aColor}" stroke-width="2.5"/>
      <circle cx="${cxB}" cy="${cy}" r="${r}" fill="${bColor}22" stroke="${bColor}" stroke-width="2.5"/>
      <text x="${cxA-12}" y="${cy-14}" text-anchor="middle" font-size="13" font-weight="800" fill="${aColor}">只参加 A</text>
      <text x="${cxA-12}" y="${cy+12}" text-anchor="middle" font-size="20" font-weight="900" fill="${aColor}">${this._nn(onlyA.val)}</text>
      <text x="${cxB+12}" y="${cy-14}" text-anchor="middle" font-size="13" font-weight="800" fill="${bColor}">只参加 B</text>
      <text x="${cxB+12}" y="${cy+12}" text-anchor="middle" font-size="20" font-weight="900" fill="${bColor}">${this._nn(onlyB.val)}</text>
      <text x="${midX}" y="${cy-12}" text-anchor="middle" font-size="12" font-weight="800" fill="${bothColor}">都参加</text>
      <text x="${midX}" y="${cy+14}" text-anchor="middle" font-size="20" font-weight="900" fill="${bothColor}">${this._nn(both.val)}</text>
      <text x="${W/2}" y="${H-16}" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">总数 = 只A + 只B + 都参加 = ${this._nn(onlyA.val)} + ${this._nn(onlyB.val)} + ${this._nn(both.val)} = <tspan class="mv-venn-total">${this._nn(total)}</tspan> 人</text>
    </svg>`;
    // 可拖拽元素池（保留「动手」体验，与静态韦恩图叠加；拖拽交互由 _vennDragStart/_vennDrop 承接）
    const makeTokens=(count,color,prefix)=>{
      const n=Math.min(count,8), realCount=count, tokens=[];
      for(let i=0;i<n;i++) tokens.push(`<span class="mv-venn-token" draggable="true" ondragstart="MathVisualV5._vennDragStart(event,'${prefix}',${i})" style="background:${color};color:${this._textColor(color)}">${prefix==='A'?'🍎':prefix==='B'?'🍌':'⭐'}${i+1}</span>`);
      if(realCount>n) tokens.push(`<span class="mv-venn-more">…共${realCount}个</span>`);
      return tokens.join('');
    };
    const pool = `<div class="mv-venn-pool" style="display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;align-items:center">
        <span style="font-size:12px;font-weight:700;color:${aColor}">A 组:</span>${makeTokens(onlyA.val,aColor,'A')}
        <span style="font-size:12px;font-weight:700;color:${bothColor}">交集:</span>${makeTokens(both.val,bothColor,'X')}
        <span style="font-size:12px;font-weight:700;color:${bColor}">B 组:</span>${makeTokens(onlyB.val,bColor,'B')}
      </div>`;
    return `<div class="mv-wrap mv-venn">${svg}${pool}
      <div style="font-size:12px;color:#475569;text-align:center;margin-top:6px">💡 中间重叠的部分会被算两次，所以要单独算一次。把元素拖到不同区域试试！</div>
    </div>`;
  },
  // 韦恩图拖拽辅助方法
  _vennDragStart(ev, prefix, idx){ ev.dataTransfer.setData('text/plain', prefix+'-'+idx); ev.dataTransfer.effectAllowed='move'; },
  _vennDragOver(ev){ ev.preventDefault(); ev.dataTransfer.dropEffect='move'; },
  _vennDrop(ev, zone){
    ev.preventDefault();
    const zoneEl = ev.currentTarget;
    // 高亮目标区域
    zoneEl.style.transform='scale(1.05)';
    zoneEl.style.transition='transform .25s';
    setTimeout(()=>{ zoneEl.style.transform='scale(1)'; }, 300);
    if(typeof toast==='function') toast('✅ 已把元素放入「'+(zone==='A'?'只参加 A':zone==='B'?'只参加 B':'都参加')+'」区域');
  },

  // 12. 找次品 —— 天平图 + 决策分支交互（选择→天平倾斜→下一分支）
  // data: {shape:'balance', params:{items}}
  balanceDecision(data, problem){
    const p=(data && data.params) || {};
    const items = p.items || 5;
    const W=560, H=240, cx=W/2, baseY=H-26, pillarTop=60;
    // 天平支架
    const pillar = `<rect x="${cx-4}" y="${pillarTop}" width="8" height="${baseY-pillarTop}" fill="#1E3A5F"/>
      <polygon points="${cx-26},${baseY} ${cx+26},${baseY} ${cx},${baseY-16}" fill="#1E3A5F"/>`;
    // 横梁默认水平，根据 data-action 状态倾斜（用 CSS class 控制）
    const beamLen=160, beamY=pillarTop+6;
    const beam = `<g class="mv-bd-beam" id="mvBdBeam" style="transform-box:fill-box;-webkit-transform-box:fill-box;transform-origin:${cx}px ${beamY}px">
      <rect x="${cx-beamLen}" y="${beamY-3}" width="${beamLen*2}" height="6" fill="#475569" rx="3"/>
      <!-- 左盘 -->
      <line x1="${cx-beamLen+20}" y1="${beamY}" x2="${cx-beamLen+20}" y2="${beamY+28}" stroke="#64748B" stroke-width="1.5"/>
      <ellipse cx="${cx-beamLen+20}" cy="${beamY+32}" rx="34" ry="7" fill="#94A3B8"/>
      <text x="${cx-beamLen+20}" y="${beamY+50}" text-anchor="middle" font-size="11" font-weight="700" fill="#00A896" id="mvBdLeftLabel">左盘</text>
      <!-- 右盘 -->
      <line x1="${cx+beamLen-20}" y1="${beamY}" x2="${cx+beamLen-20}" y2="${beamY+28}" stroke="#64748B" stroke-width="1.5"/>
      <ellipse cx="${cx+beamLen-20}" cy="${beamY+32}" rx="34" ry="7" fill="#94A3B8"/>
      <text x="${cx+beamLen-20}" y="${beamY+50}" text-anchor="middle" font-size="11" font-weight="700" fill="#F5B800" id="mvBdRightLabel">右盘</text>
    </g>`;
    // 决策按钮：3 种常见分组策略
    const btnStyle='padding:10px 14px;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid;transition:all .2s';
    return `<div class="mv-wrap mv-bd">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${pillar}${beam}
        <text x="${cx}" y="${beamY-14}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${items} 瓶里有 1 瓶较轻，怎么称最省？</text>
        <text x="${cx}" y="${H-8}" text-anchor="middle" font-size="11" fill="#64748B" id="mvBdTip">💡 先分成 3 组，把两组放上天平比较</text>
      </svg>
      <div class="mv-bd-choices" style="display:flex;gap:10px;justify-content:center;margin-top:8px;flex-wrap:wrap">
        <div onclick="MathVisualV5._bdChoose(2,2,1,${items})" style="${btnStyle};background:#00A89622;border-color:#00A896;color:#006B5E">分 (2, 2, 1)</div>
        <div onclick="MathVisualV5._bdChoose(1,1,3,${items})" style="${btnStyle};background:#F5B80022;border-color:#F5B800;color:#AC7E00">分 (1, 1, 3)</div>
        <div onclick="MathVisualV5._bdChoose(3,3,0,${items})" style="${btnStyle};background:#FB923C22;border-color:#FB923C;color:#F27C1A">分 (3, 3, 0)（${items}≥6 时）</div>
      </div>
    </div>`;
  },
  // 找次品决策交互：模拟天平倾斜
  _bdChoose(left, right, rest, total){
    const beam = document.getElementById('mvBdBeam');
    const tip = document.getElementById('mvBdTip');
    const leftLabel = document.getElementById('mvBdLeftLabel');
    const rightLabel = document.getElementById('mvBdRightLabel');
    if(!beam) return;
    if(left === right){
      // 天平平衡 → 次品在剩下的那一组
      beam.style.transform='rotate(0deg)';
      beam.style.transition='transform .6s ease';
      if(leftLabel) leftLabel.textContent=`左 ${left} 瓶`;
      if(rightLabel) rightLabel.textContent=`右 ${right} 瓶`;
      if(tip) tip.textContent='⚖️ 平衡！说明两边一样重，次品在没称的 '+rest+' 瓶里 → 再称 1 次就能找到';
      if(typeof toast==='function') toast('⚖️ 天平平衡，次品在剩下的 '+rest+' 瓶里');
    }else{
      // 不平衡 → 次品在轻的那边（这里假设左轻）
      beam.style.transform='rotate(-8deg)';
      beam.style.transition='transform .6s ease';
      if(leftLabel) leftLabel.textContent=`左 ${left} 瓶（轻↑）`;
      if(rightLabel) rightLabel.textContent=`右 ${right} 瓶`;
      if(tip) tip.textContent='⬆️ 左边轻！次品在左盘 '+left+' 瓶里 → 再分 3 组称一次';
      if(typeof toast==='function') toast('⬆️ 左边轻，次品在左盘里');
    }
  },

  // 13. 圆的面积 —— 16 份割补动画（拼成近似长方形）
  // data: {shape:'circle', params:{radius}}
  circleArea(data, problem){
    const p=(data && data.params) || {};
    const radius = p.radius || 3;
    const W=560, H=220, cx=120, cy=H/2, r=70;
    // 左：圆分成 16 个扇形（彩色交替）
    const N=16;
    let sectors='';
    for(let i=0;i<N;i++){
      const a1 = -Math.PI/2 + i*2*Math.PI/N;
      const a2 = -Math.PI/2 + (i+1)*2*Math.PI/N;
      const x1=cx+r*Math.cos(a1), y1=cy+r*Math.sin(a1);
      const x2=cx+r*Math.cos(a2), y2=cy+r*Math.sin(a2);
      const color = i%2===0 ? '#00A896' : '#F5B800';
      sectors += `<path class="mv-ca-sector" d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="${color}" stroke="#fff" stroke-width="1" opacity="0.9" style="animation-delay:${i*0.04}s;transform-box:fill-box;-webkit-transform-box:fill-box;transform-origin:${cx}px ${cy}px"/>`;
    }
    // 中：箭头
    const arrow = `<g opacity="0.7">
      <path d="M 230 ${cy-6} L 280 ${cy-6} M 274 ${cy-12} L 280 ${cy-6} L 274 ${cy}" stroke="#1E3A5F" stroke-width="2" fill="none"/>
      <text x="255" y="${cy-16}" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A5F">割补展开</text>
    </g>`;
    // 右：16 个扇形重排成近似长方形（上下交错拼合）
    // 长方形：长≈πr（半圆弧长），宽≈r
    const rectX=300, rectY=cy-r, rectW=Math.PI*r, rectH=r*2;
    // 上半 8 个三角形（尖朝下）+ 下半 8 个三角形（尖朝上），交错拼成近似长方形
    let rearranged='';
    const halfW = rectW/8;
    for(let i=0;i<8;i++){
      const color = i%2===0 ? '#00A896' : '#F5B800';
      // 上半（尖朝下）
      const tx = rectX + i*halfW;
      rearranged += `<path class="mv-ca-piece" d="M ${tx} ${rectY} L ${tx+halfW} ${rectY} L ${tx+halfW/2} ${rectY+r} Z" fill="${color}" stroke="#fff" stroke-width="0.8" opacity="0.9" style="animation-delay:${(i+N)*0.04}s"/>`;
      // 下半（尖朝上）
      rearranged += `<path class="mv-ca-piece" d="M ${tx} ${rectY+rectH} L ${tx+halfW} ${rectY+rectH} L ${tx+halfW/2} ${rectY+r} Z" fill="${color}" stroke="#fff" stroke-width="0.8" opacity="0.9" style="animation-delay:${(i+N+8)*0.04}s"/>`;
    }
    // 标注：长=πr，宽=r
    const labels = `
      <line x1="${rectX}" y1="${rectY-8}" x2="${rectX+rectW}" y2="${rectY-8}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="${rectX+rectW/2}" y="${rectY-14}" text-anchor="middle" font-size="11" font-weight="700" fill="#FB923C">长 ≈ 圆周的一半 = πr</text>
      <line x1="${rectX-8}" y1="${rectY}" x2="${rectX-8}" y2="${rectY+rectH}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="${rectX-22}" y="${rectY+rectH/2}" text-anchor="middle" font-size="11" font-weight="700" fill="#FB923C" transform="rotate(-90 ${rectX-22} ${rectY+rectH/2})">宽 = r</text>`;
    const area = (radius*radius*3.14).toFixed(2);
    return `<div class="mv-wrap mv-circle-area">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <text x="${cx}" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">把圆平均分成 16 份</text>
        ${sectors}
        <circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>
        ${arrow}
        <text x="${rectX+rectW/2}" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">拼成近似长方形</text>
        ${rearranged}
        ${labels}
        <rect x="20" y="${H-30}" width="${W-40}" height="22" fill="#00A896" rx="11"/>
        <text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="${this._textColor('#00A896')}">面积 = 长 × 宽 = πr × r = πr² · r=${radius} → S = 3.14×${radius}² = ${area}</text>
      </svg>
    </div>`;
  },

  // ============================================================
  // 迭代2新增：8个动画渲染器
  // ============================================================

  // 引擎7：数位条块进位动画（二下/三年级进位加减法）
  baseTenBlocks(data, problem){
    // 兼容 parts 格式（从题库传入的 {total, parts:[{val},{val}]} ）
    let a = data.a, b = data.b;
    if((a == null || b == null) && data.parts && data.parts.length >= 2){
      a = data.parts[0].val;
      b = data.parts[1].val;
    }
    // ⚠ 2026-09-10：补 bars 与公式两条数源，堵住"拿不到数就画 38/45"的老问题
    if((a == null || b == null) && data.bars && data.bars.length >= 2){
      a = data.bars[0].val;
      b = data.bars[1].val;
    }
    if((a == null || b == null) && problem){
      const nums = (String(problem.formula || '').match(/\d+/g) || []).map(Number);
      if(nums.length >= 2){ if(a == null) a = nums[0]; if(b == null) b = nums[1]; }
    }
    a = a || 38;
    b = b || 45;
    const total = data.total != null ? data.total : a + b;
    const op = data.op || '+';
    const aTens=Math.floor(a/10), aOnes=a%10, bTens=Math.floor(b/10), bOnes=b%10;
    const sumTens=Math.floor(total/10), sumOnes=total%10;
    const carry = aOnes + bOnes >= 10;
    const W=560, H=260;
    const tenH=70, tenW=30, unitW=22, unitH=22;
    const colorA='#00A896', colorB='#E8A0BF', colorC='#F5B800';
    let svg='';
    // 背景区域
    svg+=`<rect x="10" y="20" width="200" height="140" fill="rgba(0,168,150,.05)" rx="12"/>`;
    svg+=`<rect x="230" y="20" width="200" height="140" fill="rgba(232,160,191,.05)" rx="12"/>`;
    svg+=`<rect x="10" y="170" width="540" height="80" fill="rgba(245,184,0,.05)" rx="12"/>`;
    // 左侧：A
    const ax=30, ay=40;
    svg+=`<text x="${ax+80}" y="${ay-8}" text-anchor="middle" font-size="14" font-weight="800" fill="${colorA}">${a}</text>`;
    // A的十位条（动画逐个进入）
    for(let i=0;i<aTens;i++){
      const dx=ay+10+i*(tenW+6);
      svg+=`<rect x="${dx}" y="${ay+16}" width="${tenW}" height="${tenH}" fill="${colorA}" rx="4" class="mv-ten-bar" style="animation:mvSlideIn .4s ${0.1+i*0.1}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    // A的个位方块
    for(let i=0;i<aOnes;i++){
      const dx=ax+10+i*(unitW+3);
      svg+=`<rect x="${dx}" y="${ay+16+tenH+8}" width="${unitW}" height="${unitH}" fill="${colorA}" rx="3" class="mv-unit" style="animation:mvSlideIn .4s ${0.5+i*0.06}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    // 右侧：B
    const bx=250, by=40;
    svg+=`<text x="${bx+80}" y="${by-8}" text-anchor="middle" font-size="14" font-weight="800" fill="${colorB}">${b}</text>`;
    for(let i=0;i<bTens;i++){
      const dx=bx+10+i*(tenW+6);
      svg+=`<rect x="${dx}" y="${by+16}" width="${tenW}" height="${tenH}" fill="${colorB}" rx="4" class="mv-ten-bar" style="animation:mvSlideIn .4s ${0.3+i*0.1}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    for(let i=0;i<bOnes;i++){
      const dx=bx+10+i*(unitW+3);
      svg+=`<rect x="${dx}" y="${by+16+tenH+8}" width="${unitW}" height="${unitH}" fill="${colorB}" rx="3" class="mv-unit" style="animation:mvSlideIn .4s ${0.7+i*0.06}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    // 中间运算符号
    svg+=`<text x="225" y="90" text-anchor="middle" font-size="28" font-weight="900" fill="#1E3A5F">${op}</text>`;
    // 进位动画指示（如果有进位）
    if(carry){
      const srcX=ax+10+aOnes*(unitW+3)+unitW/2;
      const tgtX=bx+10+bTens*(tenW+6)+tenW/2;
      svg+=`<path d="M${srcX},${ay+16+tenH+8+unitH/2} Q260,${ay-10} ${tgtX},${by+16}" stroke="${colorC}" stroke-width="2" fill="none" stroke-dasharray="4,3" class="mv-carry-line" style="animation:mvFadeIn .3s 1.2s both"/>`;
      svg+=`<circle cx="260" cy="${(ay+16+tenH+8+unitH/2+by+16)/2}" r="12" fill="${colorC}" class="mv-carry-circle" style="animation:mvPop .3s 1.3s both;-webkit-transform-box:fill-box;transform-box:fill-box;transform-origin:center"/>`;
      svg+=`<text x="260" y="${(ay+16+tenH+8+unitH/2+by+16)/2+4}" text-anchor="middle" font-size="11" font-weight="900" fill="white">1</text>`;
    }
    // 底部结果区域
    svg+=`<text x="${W/2}" y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#FB923C" class="mv-hint" style="animation:mvFadeIn .5s ${carry?1.5:0.8}s both">个位 ${aOnes}+${bOnes}=${aOnes+bOnes}${carry?',满十进一':''}</text>`;
    // 结果方块（延迟显示）
    const rx=100;
    for(let i=0;i<sumTens;i++){
      const dx=rx+i*(tenW+6);
      const delay=carry?1.8:0.8;
      svg+=`<rect x="${dx}" y="210" width="${tenW}" height="${tenH}" fill="#00A896" rx="4" class="mv-ten-bar" style="animation:mvSlideIn .4s ${delay+i*0.08}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    for(let i=0;i<sumOnes;i++){
      const dx=rx+sumTens*(tenW+6)+6+i*(unitW+3);
      const delay=carry?2.2:1.0;
      svg+=`<rect x="${dx}" y="210" width="${unitW}" height="${unitH}" fill="#00A896" rx="3" class="mv-unit" style="animation:mvSlideIn .4s ${delay+i*0.06}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    svg+=`<text x="${W/2}" y="252" text-anchor="middle" font-size="16" font-weight="900" fill="#1E3A5F" class="mv-result" style="animation:mvPop .4s ${carry?2.5:1.3}s both;-webkit-transform-box:fill-box;transform-box:fill-box">${a} ${op} ${b} = ${total}</text>`;
    return `<div class="mv-wrap mv-base-ten">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 引擎8：分数墙（等值分数对比，支持点击高亮）
  fractionWall(data, problem){
    const W=500, H=340, rowH=28, rowW=360, startX=60;
    const colors=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F','#00A896','#F5B800','#E8A0BF'];
    const rows=[
      {den:1,  num:[1], colors:['#00A896'], label:'1'},
      {den:2,  num:[1], colors:['#E8A0BF'], label:'1/2'},
      {den:4,  num:[1,2], colors:['#F5B800','#FB923C'], label:'1/4+2/4'},
      {den:8,  num:[1,2,4,8], colors:['#E8A0BF','#00A896','#F5B800','#1E3A5F'], label:'1/8+...+8/8'},
      {den:3,  num:[1,2], colors:['#FB923C','#E8A0BF'], label:'1/3+2/3'},
      {den:6,  num:[1,2,3], colors:['#00A896','#F5B800','#E8A0BF'], label:'1/6+2/6+3/6'},
      {den:12, num:[1,2,3,4,6,12], colors:['#1E3A5F','#FB923C','#E8A0BF','#00A896','#F5B800','#E8A0BF'], label:'...+12/12'},
    ];
    const eqPairs=[
      {den:[2,4,8], labels:['1/2','2/4','4/8']},
      {den:[3,6],   labels:['1/3','2/6']},
      {den:[2,6],   labels:['1/2','3/6']},
    ];
    const targetFracs=(problem&&problem.russianQuestions)?problem.russianQuestions.map(q=>q.targetFrac):[];
    let svg=`<text x="${W/2}" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">分数墙 · 点击行高亮等值分数</text>`;
    rows.forEach((row,i)=>{
      const y=36+i*(rowH+6);
      const segW=rowW/row.den;
      svg+=`<rect x="${startX}" y="${y}" width="${rowW}" height="${rowH}" fill="#f8f9fa" rx="4" class="mv-fraction-row" data-row="${i}" data-den="${row.den}" style="cursor:pointer"/>`;
      row.colors.forEach((c,j)=>{
        svg+=`<rect x="${startX+j*segW}" y="${y}" width="${segW-1}" height="${rowH}" fill="${c}" rx="2" class="mv-fraction-seg" style="animation:mvFadeIn .3s ${i*0.08+j*0.03} ease both;-webkit-transform-box:fill-box;transform-box:fill-box;transition:opacity .3s,transform .3s"/>`;
      });
      svg+=`<text x="${startX+rowW+8}" y="${y+rowH/2+4}" font-size="11" font-weight="600" fill="#1E3A5F">${row.label}</text>`;
    });
    if(targetFracs.length>0){
      const last=targetFracs[targetFracs.length-1];
      if(last && last.label){
        svg+=`<text x="${W/2}" y="${H-8}" text-anchor="middle" font-size="11" fill="#00A896" font-weight="700">💡 在墙上找：${last.label}</text>`;
      }
    }
    const wrapId='fvWall_'+Date.now()+'_'+Math.random().toString(36).slice(2,6);
    const html=`<div class="mv-wrap mv-fraction-wall" id="${wrapId}">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" id="fvWallSvg">${svg}</svg>
    </div>`;
    setTimeout(()=>{
      const wrap=document.getElementById(wrapId);
      if(!wrap) return;
      const rows_el=wrap.querySelectorAll('.mv-fraction-row');
      let selectedDen=null;
      rows_el.forEach(el=>{
        el.addEventListener('click',()=>{
          const den=parseInt(el.dataset.den);
          if(selectedDen===den){
            // 再次点击同一行→取消高亮
            selectedDen=null;
            rows_el.forEach(r=>r.style.opacity='1');
            return;
          }
          selectedDen=den;
          // 找所有等值分数的den
          const matchDen=new Set([den]);
          eqPairs.forEach(p=>{
            if(p.den.includes(den)) p.den.forEach(d=>matchDen.add(d));
          });
          rows_el.forEach(r=>{
            r.style.opacity=matchDen.has(parseInt(r.dataset.den))?'1':'0.25';
          });
        });
      });
    },100);
    return html;
  },

  // 引擎9：分数圆增强版（动画切分）
  fractionCircleAnim(data){
    const num=data.num||1, den=data.den||4, color=data.color||'#E8A0BF';
    const W=300, H=200, cx=150, cy=95, r=65;
    const angle=360/den;
    let svg=`<text x="${cx}" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">分数：${num}/${den}</text>`;
    // 切分线（先画完整圆，再画切分线）
    svg+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1E3A5F" stroke-width="1.5"/>`;
    for(let i=0;i<den;i++){
      const rad=i*angle*Math.PI/180;
      const ex=cx+r*Math.cos(rad), ey=cy+r*Math.sin(rad);
      svg+=`<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#1E3A5F" stroke-width="1" class="mv-cut-line" style="animation:mvLineIn .4s ${i*0.1} ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    // 涂色扇形（逐个出现）
    for(let i=0;i<num;i++){
      const startRad=i*angle*Math.PI/180;
      const endRad=(i+1)*angle*Math.PI/180;
      const x1=cx+r*Math.cos(startRad), y1=cy+r*Math.sin(startRad);
      const x2=cx+r*Math.cos(endRad), y2=cy+r*Math.sin(endRad);
      const largeArc=angle>180?1:0;
      svg+=`<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z" fill="${color}" class="mv-sector" style="animation:mvFillIn .4s ${i*0.15+0.3} ease both;-webkit-transform-box:fill-box;transform-box:fill-box;opacity:0.8"/>`;
    }
    // 分数标注
    svg+=`<text x="${cx}" y="${cy+r+22}" text-anchor="middle" font-size="16" font-weight="800" fill="#1E3A5F">${num}/${den}</text>`;
    return `<div class="mv-wrap mv-fraction-circle">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 引擎10：Bar Model + 代数翻译行（四上起）
  barModelTranslate(data, problem){
    const result = this.barModel(data);
    // 添加翻译行
    const items = (problem && problem.barTranslateLine && problem.barTranslateLine.items) || [];
    if(items.length > 0){
      const translateRow = `<div class="mv-translate-row" style="margin-top:10px;padding:12px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-radius:10px;border-left:4px solid var(--teal);animation:mvFadeIn .5s ease both">
        <div style="font-size:12px;font-weight:700;color:var(--teal-700);margin-bottom:6px">📝 代数翻译行</div>
        ${items.map(it=>`<div style="font-size:14px;font-weight:700;color:var(--navy);padding:3px 0;font-family:monospace">${it}</div>`).join('')}
      </div>`;
      return result + translateRow;
    }
    return result;
  },

  // 引擎11：数轴支持分数/小数标注
  numberLineFraction(data){
    const points = data.points || [];
    // 判断是否包含分数
    const hasFraction = points.some(p => typeof p.label === 'string' && (p.label.includes('/') || p.label.includes('又')));
    if(!hasFraction && !data.decimal){
      return this.numberLine(data);
    }
    // 分数数轴
    const W=560, H=120;
    const left=40, right=W-40, axisY=60, tickH=12;
    const minVal=data.min||0, maxVal=data.max||1;
    const scale=(val)=>left+((val-minVal)/(maxVal-minVal))*(right-left);
    let svg=`<line x1="${left}" y1="${axisY}" x2="${right}" y2="${axisY}" stroke="#1E3A5F" stroke-width="2" stroke-linecap="round"/>`;
    // 刻度
    const step=data.step||0.5;
    for(let v=minVal; v<=maxVal+0.001; v+=step){
      const x=scale(v);
      svg+=`<line x1="${x}" y1="${axisY-6}" x2="${x}" y2="${axisY+6}" stroke="#1E3A5F" stroke-width="1.5"/>`;
      svg+=`<text x="${x}" y="${axisY+20}" text-anchor="middle" font-size="11" fill="#1E3A5F">${v===Math.floor(v)?String(v):this._formatFrac(v)}</text>`;
    }
    // 标注点
    points.forEach((p,i)=>{
      const x=scale(p.pos);
      const col=this._palette(i);
      svg+=`<circle cx="${x}" cy="${axisY}" r="6" fill="${col}" class="mv-point" style="animation:mvPointIn .3s ${i*0.1}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${x}" y="${axisY-14}" text-anchor="middle" font-size="12" font-weight="700" fill="${col}">${this._escape(p.label||String(p.pos))}</text>`;
      // 虚线到轴
      svg+=`<line x1="${x}" y1="${axisY+6}" x2="${x}" y2="${axisY+22}" stroke="${col}" stroke-width="1" stroke-dasharray="2,2"/>`;
    });
    // 高亮区间
    if(data.highlight){
      const h=data.highlight;
      const x1=scale(h[0]), x2=scale(h[1]);
      svg+=`<line x1="${x1}" y1="${axisY-4}" x2="${x2}" y2="${axisY-4}" stroke="#FB923C" stroke-width="4" stroke-linecap="round" class="mv-hl-frac"/>`;
    }
    return `<div class="mv-wrap mv-number-line-frac">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },
  _formatFrac(v){
    if(v===0) return '0';
    const whole=Math.floor(v), frac=v-whole;
    if(frac===0) return String(whole);
    if(frac===0.5) return whole>0?`${whole}又1/2`:'1/2';
    if(frac===0.25) return whole>0?`${whole}又1/4`:'1/4';
    if(frac===0.75) return whole>0?`${whole}又3/4`:'3/4';
    return v.toFixed(1);
  },

  // 引擎12：割补动画（平行四边形→矩形）
  cutPasteGeometry(data){
    const base=data.base||6, height=data.height||4;
    const W=400, H=240;
    const scale=25;
    const ox=50, oy=180;
    const b=base*scale, h=height*scale, offset=scale*1.5;
    // 平行四边形顶点
    const p1={x:ox,y:oy}, p2={x:ox+b,y:oy}, p3={x:ox+b+offset,y:oy-h}, p4={x:ox+offset,y:oy-h};
    let svg=`<text x="${W/2}" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">割补法：平行四边形 → 矩形</text>`;
    // 平行四边形（蓝色）
    svg+=`<polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}" fill="#00A896" fill-opacity="0.3" stroke="#00A896" stroke-width="2" class="mv-parallelogram" style="animation:mvFadeIn .5s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    // 高线（红色虚线）
    svg+=`<line x1="${p4.x}" y1="${p4.y}" x2="${p1.x}" y2="${p1.y}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,3" class="mv-height-line"/>`;
    svg+=`<text x="${p1.x-8}" y="${(p1.y+p4.y)/2+4}" text-anchor="end" font-size="11" font-weight="700" fill="#FB923C">h=${height}</text>`;
    // 标注底
    svg+=`<text x="${(p1.x+p2.x)/2}" y="${p1.y+18}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">底=${base}</text>`;
    // 右侧：矩形（动画后出现）
    const rx=ox+b+offset+30, ry=oy-h;
    svg+=`<rect x="${rx}" y="${ry}" width="${b}" height="${h}" fill="none" stroke="#1E3A5F" stroke-width="1.5" stroke-dasharray="4,3" class="mv-rect-outline" style="animation:mvFadeIn .5s 1s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    svg+=`<text x="${rx+b/2}" y="${ry-8}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">矩形</text>`;
    svg+=`<text x="${rx+b/2}" y="${ry+h+16}" text-anchor="middle" font-size="11" font-weight="700" fill="#00A896">长=${base}，宽=${height}</text>`;
    // 结论
    svg+=`<rect x="50" y="${H-30}" width="${W-100}" height="22" fill="#00A896" rx="11"/>`;
    svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">面积 = 底 × 高 = ${base} × ${height} = ${base*height}</text>`;
    return `<div class="mv-wrap mv-cut-paste">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 引擎13：长方体展开图动画
  unrollNet(data){
    const w=data.w||3, h=data.h||2, d=data.d||1;
    const s=40;
    const W=400, H=320;
    const cx=200, cy=155;
    let svg=`<text x="${cx}" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">长方体展开图 · ${w}×${h}×${d}</text>`;
    // 展开图十字形
    const colors=['#00A896','#F5B800','#FB923C','#E8A0BF','#1E3A5F','#00A896'];
    // 标准十字展开：前后左右上下的布局
    const faces=[
      {x:cx-d*s/2, y:cy-h*s/2, lw:w*s, lh:h*s, c:colors[0], label:`${w}×${h}`},   // 前
      {x:cx-d*s/2, y:cy+h*s/2, lw:w*s, lh:d*s,   c:colors[1], label:`${w}×${d}`},  // 下
      {x:cx-d*s/2, y:cy-h*s/2-h*s, lw:w*s, lh:d*s, c:colors[2], label:`${w}×${d}`}, // 上
      {x:cx-d*s/2-w*s, y:cy-h*s/2, lw:d*s, lh:h*s, c:colors[3], label:`${d}×${h}`}, // 左
      {x:cx+d*s/2, y:cy-h*s/2, lw:d*s, lh:h*s,   c:colors[4], label:`${d}×${h}`},  // 右
      {x:cx-d*s/2, y:cy+d*s,   lw:w*s, lh:h*s,   c:colors[5], label:`${w}×${h}`},  // 后
    ];
    faces.forEach((f,i)=>{
      svg+=`<rect x="${f.x}" y="${f.y}" width="${f.lw}" height="${f.lh}" fill="${f.c}" fill-opacity="0.25" stroke="${f.c}" stroke-width="1.5" rx="2" class="mv-face" style="animation:mvFaceIn .4s ${i*0.1}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${f.x+f.lw/2}" y="${f.y+f.lh/2+4}" text-anchor="middle" font-size="10" font-weight="700" fill="${this._textColor(f.c)}">${f.label}</text>`;
    });
    // 表面积公式
    const area=2*(w*h+w*d+h*d);
    svg+=`<rect x="50" y="${H-28}" width="${W-100}" height="22" fill="#1E3A5F" rx="11"/>`;
    svg+=`<text x="${cx}" y="${H-13}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">表面积 = 2(${w}×${h}+${w}×${d}+${h}×${d}) = ${area}</text>`;
    return `<div class="mv-wrap mv-unroll-net">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 引擎14：面积网格切分动画（两位数乘法）
  areaModelAnim(data){
    const a=data.a||23, b=data.b||15;
    const aTens=Math.floor(a/10), aOnes=a%10, bTens=Math.floor(b/10), bOnes=b%10;
    const total=a*b;
    const W=480, H=280;
    const ox=60, oy=40, cellW=25, cellH=20;
    const gW=a*cellW, gH=b*cellH;
    let svg=`<text x="${W/2}" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">${a} × ${b}</text>`;
    // 大矩形
    svg+=`<rect x="${ox}" y="${oy}" width="${gW}" height="${gH}" fill="rgba(0,168,150,.08)" stroke="#1E3A5F" stroke-width="1.5" rx="2"/>`;
    // 切分线
    const cutX=ox+aTens*cellW, cutY=oy+bTens*cellH;
    svg+=`<line x1="${cutX}" y1="${oy}" x2="${cutX}" y2="${oy+gH}" stroke="#E8A0BF" stroke-width="2" stroke-dasharray="6,3" class="mv-cut-v"/>`;
    svg+=`<line x1="${ox}" y1="${cutY}" x2="${ox+gW}" y2="${cutY}" stroke="#E8A0BF" stroke-width="2" stroke-dasharray="6,3" class="mv-cut-h"/>`;
    // 4个子矩形（逐个填充）
    const parts=[
      {x:ox, y:oy, w:aTens*cellW, h:bTens*cellH, v:aTens*bTens*100, c:'#00A896', label:`${aTens}0×${bTens}0=${aTens*bTens*100}`},
      {x:cutX, y:oy, w:aOnes*cellW, h:bTens*cellH, v:aOnes*bTens*10, c:'#F5B800', label:`${aOnes}0×${bTens}0=${aOnes*bTens*10}`},
      {x:ox, y:cutY, w:aTens*cellW, h:bOnes*cellH, v:aTens*bOnes*10, c:'#FB923C', label:`${aTens}×${bOnes}0=${aTens*bOnes*10}`},
      {x:cutX, y:cutY, w:aOnes*cellW, h:bOnes*cellH, v:aOnes*bOnes, c:'#E8A0BF', label:`${aOnes}×${bOnes}=${aOnes*bOnes}`},
    ];
    parts.forEach((p,i)=>{
      svg+=`<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="${p.c}" fill-opacity="0.35" class="mv-part" style="animation:mvFillIn .5s ${i*0.2}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${p.x+p.w/2}" y="${p.y+p.h/2+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${p.label}</text>`;
    });
    // 总和
    svg+=`<rect x="50" y="${H-30}" width="${W-100}" height="22" fill="#1E3A5F" rx="11"/>`;
    svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">总面积 = ${parts.map(p=>p.label).join(' + ')}</text>`;
    return `<div class="mv-wrap mv-area-anim">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // ===== 分步动态演示引擎：6大模型家族的分步动画 =====
  // step 从 1 开始（1=情境呈现, 2=动手操作, 3=发现规律, 4=形成概念, 5=灵活运用）

  // 分步1：条形模型 — 自适应缩放，支持任意位数
  barModelStep(data, step){
    // 兼容 parts 格式
    let a = data.a, b = data.b;
    if((a == null || b == null) && data.parts && data.parts.length >= 2){
      a = data.parts[0].val;
      b = data.parts[1].val;
    }
    a = a || 12; b = b || 8;
    const total = a + b;
    const W=500, H=180;
    const padL=30, padR=30, availW=W-padL-padR;
    const scale = total > 0 ? availW / total : 1;
    const barW_a = a * scale;
    const barW_b = b * scale;
    const barH = 26, barGap = 12, barY = 52;
    const diff = Math.abs(a - b);
    const diffW = diff * scale;
    const isLarge = total > 99;
    // 答案零泄漏：分步标题一律只标步序，等式（a + b = total）仅在第 3/3 步揭示区出现
    const title = `条形模型 · 第${step}/3步`;
    // 渐变定义必须放在最前面
    const defsSvg = `<defs><linearGradient id="mvGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00A896"/><stop offset="100%" stop-color="#F5B800"/></linearGradient></defs>`;
    let svg=defsSvg+`<text x="${W/2}" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">${title}</text>`;
    // 第1步：两条独立条形
    if(step >= 1){
      // 第一条 (a)
      svg+=`<rect x="${padL}" y="${barY}" width="${Math.max(barW_a,2)}" height="${barH}" rx="6" fill="#00A896" stroke="#00A896" stroke-width="2" class="mv-bar" style="animation:mvBarIn .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${padL+Math.max(barW_a/2,8)}" y="${barY+barH/2+5}" text-anchor="middle" font-size="${barW_a>30?12:10}" font-weight="800" fill="#fff">${a}</text>`;
    }
    // 第2步：第二条 + 合并视觉
    if(step >= 2){
      const bar2Y = barY + barH + barGap;
      svg+=`<rect x="${padL}" y="${bar2Y}" width="${Math.max(barW_b,2)}" height="${barH}" rx="6" fill="#F5B800" stroke="#F5B800" stroke-width="2" class="mv-bar" style="animation:mvBarIn .4s .3s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${padL+Math.max(barW_b/2,8)}" y="${bar2Y+barH/2+5}" text-anchor="middle" font-size="${barW_b>30?12:10}" font-weight="800" fill="#1E3A5F">${b}</text>`;
    }
    // 第3步：总和 + 差量标注
    if(step >= 3){
      const sumY = barY + barH*2 + barGap*2 + 14;
      // 合并后的总长
      svg+=`<rect x="${padL}" y="${sumY}" width="${Math.max(barW_a+barW_b,4)}" height="${barH}" rx="6" fill="url(#mvGrad)" fill-opacity="0.5" stroke="#1E3A5F" stroke-width="2" class="mv-bar-sum" style="animation:mvBarGrow .5s .6s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      // 渐变定义
      svg=`<defs><linearGradient id="mvGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00A896"/><stop offset="100%" stop-color="#F5B800"/></linearGradient></defs>`+svg;
      svg+=`<text x="${padL+Math.max((barW_a+barW_b)/2,10)}" y="${sumY+barH/2+5}" text-anchor="middle" font-size="${barW_a+barW_b>60?14:11}" font-weight="800" fill="#1E3A5F">${a} + ${b} = ${total}</text>`;
      // 差量指示（a > b 时高亮多出部分）
      if(diff > 0 && a > b){
        svg+=`<line x1="${padL+barW_b}" y1="${barY-6}" x2="${padL+barW_b}" y2="${barY+barH+barGap+barH+6}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="3,2" class="mv-diff-line" style="animation:mvFadeIn .4s .8s both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
        svg+=`<text x="${padL+barW_b+diffW/2}" y="${barY-10}" text-anchor="middle" font-size="10" font-weight="700" fill="#FB923C">多${diff}</text>`;
      }
    }
    return `<div class="mv-wrap mv-step-bar">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步2：面积模型 — 自适应格子大小，支持任意位数乘法
  areaModelStep(data, step){
    // 兼容格式：从 parts 数组或直接 a,b 参数获取
    let a = data.a, b = data.b;
    if((a == null || b == null) && data.parts && data.parts.length >= 2){
      a = data.parts[0].val;
      b = data.parts[1].val;
    }
    a = a || 23; b = b || 15;
    const aTens=Math.floor(a/10), aOnes=a%10;
    const bTens=Math.floor(b/10), bOnes=b%10;
    const total=a*b;
    const W=480, H=300;
    const ox=50, oy=40;
    // 自适应格子大小：根据位数计算
    const maxDim = Math.max(a, b);
    const baseCell = maxDim > 99 ? 8 : maxDim > 9 ? 16 : 22;
    const cellW = Math.max(baseCell, 6);
    const cellH = Math.max(baseCell - 2, 5);
    const gW=(aTens*10+aOnes)*cellW;
    const gH=(bTens*10+bOnes)*cellH;
    const cutX=ox+aTens*10*cellW;
    const cutY=oy+bTens*10*cellH;
    let svg=`<text x="${W/2}" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">面积模型 · 第${step}/3步</text>`;
    // 第1步：整体矩形
    if(step>=1){
      svg+=`<rect x="${ox}" y="${oy}" width="${gW}" height="${gH}" fill="rgba(30,58,95,.06)" stroke="#1E3A5F" stroke-width="2" rx="2" class="mv-total" style="animation:mvFadeIn .5s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${ox+gW/2}" y="${oy+gH+16}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">大矩形 = ${a}×${b}</text>`;
    }
    // 第2步：切分线
    if(step>=2){
      svg+=`<line x1="${cutX}" y1="${oy}" x2="${cutX}" y2="${oy+gH}" stroke="#E8A0BF" stroke-width="2.5" stroke-dasharray="8,4" class="mv-cut-v" style="animation:mvLineIn .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<line x1="${ox}" y1="${cutY}" x2="${ox+gW}" y2="${cutY}" stroke="#E8A0BF" stroke-width="2.5" stroke-dasharray="8,4" class="mv-cut-h" style="animation:mvLineIn .4s .3s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    }
    // 第3步：四部分亮起
    if(step>=3){
      const pTensTens = aTens*bTens*100;
      const pOnesTens = aOnes*bTens*10;
      const pTensOnes = aTens*bOnes*10;
      const pOnesOnes = aOnes*bOnes;
      const parts=[
        {x:ox,       y:oy,       w:aTens*10*cellW, h:bTens*10*cellH, v:pTensTens, c:'#00A896', label:aTens+'0×'+bTens+'0='+pTensTens},
        {x:cutX,     y:oy,       w:aOnes*cellW,    h:bTens*10*cellH, v:pOnesTens, c:'#F5B800', label:aOnes+'×'+bTens+'0='+pOnesTens},
        {x:ox,       y:cutY,     w:aTens*10*cellW, h:bOnes*cellH,    v:pTensOnes, c:'#FB923C', label:aTens+'0×'+bOnes+'='+pTensOnes},
        {x:cutX,     y:cutY,     w:aOnes*cellW,    h:bOnes*cellH,    v:pOnesOnes, c:'#E8A0BF', label:aOnes+'×'+bOnes+'='+pOnesOnes},
      ];
      parts.forEach((p,i)=>{
        svg+=`<rect x="${p.x}" y="${p.y}" width="${Math.max(p.w,2)}" height="${Math.max(p.h,2)}" fill="${p.c}" fill-opacity="0.4" class="mv-part" style="animation:mvPop .4s ${i*0.2}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
        const fontSize = Math.min(10, Math.max(7, p.w/10));
        svg+=`<text x="${p.x+p.w/2}" y="${p.y+p.h/2+4}" text-anchor="middle" font-size="${fontSize}" font-weight="700" fill="#1E3A5F">${p.v}</text>`;
      });
      // 汇总公式
      const formulaY = oy + gH + 38;
      svg+=`<rect x="30" y="${formulaY-12}" width="${W-60}" height="48" fill="#1E3A5F" rx="10"/>`;
      svg+=`<text x="${W/2}" y="${formulaY+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">${pTensTens} + ${pOnesTens} + ${pTensOnes} + ${pOnesOnes} = ${total}</text>`;
      svg+=`<text x="${W/2}" y="${formulaY+22}" text-anchor="middle" font-size="10" font-weight="600" fill="rgba(255,255,255,.7)">(${aTens}0×${bTens}0) + (${aOnes}×${bTens}0) + (${aTens}0×${bOnes}) + (${aOnes}×${bOnes})</text>`;
    }
    return `<div class="mv-wrap mv-step-area">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步3：数字分解 — 从"整体"到"拆分成两部分"到"组合回整体"
  numberBondStep(data, step){
    let total = data.total || 15;
    // 兼容两种格式：[8,7] 或 [{val:386},{val:247}]
    let parts = data.parts || [8, 7];
    if(parts.length > 0 && typeof parts[0] === 'object'){
      parts = parts.map(p => p.val);
    }
    if(total == null && parts.length >= 2) total = parts[0] + parts[1];
    // 根据数字大小自适应画布高度
    const maxNum = Math.max(total, parts[0], parts[1]);
    const H = maxNum >= 100 ? 300 : maxNum >= 20 ? 260 : 240;
    const W = 520;
    const numFontSize = maxNum >= 100 ? 26 : maxNum >= 20 ? 22 : 20;
    const partFontSize = maxNum >= 100 ? 20 : 18;
    let svg=`<text x="${W/2}" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">数字分解 · 第${step}/3步</text>`;
    // 中心节点
    const cx=W/2, cy=100;
    if(step>=1){
      // 整体数字
      svg+=`<circle cx="${cx}" cy="${cy}" r="40" fill="#00A896" fill-opacity="0.2" stroke="#00A896" stroke-width="2.5" class="mv-center" style="animation:mvPop .5s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${cx}" y="${cy+6}" text-anchor="middle" font-size="${numFontSize}" font-weight="800" fill="#00A896">${total}</text>`;
      svg+=`<text x="${cx}" y="${cy+58}" text-anchor="middle" font-size="11" fill="#1E3A5F">整体</text>`;
    }
    if(step>=2){
      // 连接线
      const lx=cx-140, ly=cy+50;
      const rx=cx+140, ry=cy+50;
      svg+=`<line x1="${cx}" y1="${cy+30}" x2="${lx}" y2="${ly}" stroke="#E8A0BF" stroke-width="2" class="mv-line" style="animation:mvLineIn .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<line x1="${cx}" y1="${cy+30}" x2="${rx}" y2="${ry}" stroke="#E8A0BF" stroke-width="2" class="mv-line" style="animation:mvLineIn .4s .2s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      // 左部分
      svg+=`<circle cx="${lx}" cy="${ly}" r="32" fill="#F5B800" fill-opacity="0.25" stroke="#F5B800" stroke-width="2" class="mv-part1" style="animation:mvPop .4s .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${lx}" y="${ly+6}" text-anchor="middle" font-size="${partFontSize}" font-weight="800" fill="#1E3A5F">${parts[0]}</text>`;
      // 右部分
      svg+=`<circle cx="${rx}" cy="${ry}" r="32" fill="#FB923C" fill-opacity="0.25" stroke="#FB923C" stroke-width="2" class="mv-part2" style="animation:mvPop .4s .6s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${rx}" y="${ry+6}" text-anchor="middle" font-size="${partFontSize}" font-weight="800" fill="#1E3A5F">${parts[1]}</text>`;
    }
    if(step>=3){
      // 汇总公式
      svg+=`<rect x="${cx-100}" y="${cy+110}" width="200" height="36" fill="#1E3A5F" rx="8" class="mv-formula" style="animation:mvFadeIn .4s .8s both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${cx}" y="${cy+134}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${parts[0]} + ${parts[1]} = ${total}</text>`;
    }
    return `<div class="mv-wrap mv-step-bond">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步4：分数模型 — 从"整体"到"等分成份"到"涂色表示分数"
  fractionStripStep(data, step){
    const num=data.num||3, den=data.den||4;
    const W=520, H=160;
    const barW=380, barH=50, ox=70, oy=60;
    const unitW=barW/den;
    let svg=`<text x="${W/2}" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">分数 ${num}/${den} · 第${step}/3步</text>`;
    if(step>=1){
      // 整体条
      svg+=`<rect x="${ox}" y="${oy}" width="${barW}" height="${barH}" rx="8" fill="rgba(0,168,150,.15)" stroke="#1E3A5F" stroke-width="2" class="mv-whole" style="animation:mvBarIn .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${ox+barW/2}" y="${oy+barH+18}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">1（整体）</text>`;
    }
    if(step>=2){
      // 分割线
      for(let i=1;i<den;i++){
        const x=ox+i*unitW;
        svg+=`<line x1="${x}" y1="${oy}" x2="${x}" y2="${oy+barH}" stroke="#1E3A5F" stroke-width="1.5" class="mv-divider" style="animation:mvLineIn .3s ${i*0.08}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      }
      // 份数标注
      for(let i=0;i<den;i++){
        const x=ox+i*unitW+unitW/2;
        svg+=`<text x="${x}" y="${oy+barH+18}" text-anchor="middle" font-size="10" fill="#1E3A5F">${i+1}/${den}</text>`;
      }
    }
    if(step>=3){
      // 涂色
      for(let i=0;i<num;i++){
        const x=ox+i*unitW;
        const color=i===0?'#00A896':i===1?'#F5B800':i===2?'#FB923C':'#E8A0BF';
        svg+=`<rect x="${x+2}" y="${oy+2}" width="${unitW-4}" height="${barH-4}" rx="6" fill="${color}" fill-opacity="0.6" class="mv-shaded" style="animation:mvBarGrow .4s ${i*0.15}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      }
      // 分数标注
      svg+=`<text x="${ox+barW/2}" y="${oy+barH+40}" text-anchor="middle" font-size="18" font-weight="800" fill="#00A896">涂色 = ${num}/${den}</text>`;
    }
    return `<div class="mv-wrap mv-step-frac">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步5：数轴 — 从"轴线"到"刻度"到"标注点"
  numberLineStep(data, step){
    const points=data.points||[{pos:0.75,label:'3/4'}];
    const minVal=data.min||0, maxVal=data.max||1;
    const W=560, H=140;
    const left=50, right=W-50, axisY=70;
    const scale=v=>left+((v-minVal)/(maxVal-minVal))*(right-left);
    let svg=`<text x="${W/2}" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">数轴 · 第${step}/3步</text>`;
    if(step>=1){
      // 轴线
      svg+=`<line x1="${left}" y1="${axisY}" x2="${right}" y2="${axisY}" stroke="#1E3A5F" stroke-width="2.5" stroke-linecap="round" class="mv-axis" style="animation:mvLineIn .5s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<polygon points="${right},${axisY} ${right-8},${axisY-5} ${right-8},${axisY+5}" fill="#1E3A5F"/>`;
      // 端点
      svg+=`<text x="${left}" y="${axisY+22}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${minVal}</text>`;
      svg+=`<text x="${right}" y="${axisY+22}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${maxVal}</text>`;
    }
    if(step>=2){
      // 刻度（按 step=0.25）
      const tickStep=data.step||0.25;
      for(let v=minVal;v<=maxVal+0.001;v+=tickStep){
        const x=scale(v);
        svg+=`<line x1="${x}" y1="${axisY-6}" x2="${x}" y2="${axisY+6}" stroke="#1E3A5F" stroke-width="1.5" class="mv-tick" style="animation:mvFadeIn .3s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
        svg+=`<text x="${x}" y="${axisY+20}" text-anchor="middle" font-size="10" fill="#1E3A5F">${v===Math.floor(v)?String(v):v.toFixed(2).replace(/\.?0+$/,'')}</text>`;
      }
    }
    if(step>=3){
      // 标注点（逐个飞入）
      points.forEach((p,i)=>{
        const x=scale(p.pos);
        const col=this._palette(i);
        svg+=`<circle cx="${x}" cy="${axisY}" r="8" fill="${col}" stroke="#fff" stroke-width="2" class="mv-dot" style="animation:mvPop .5s ${i*0.3}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
        svg+=`<text x="${x}" y="${axisY-18}" text-anchor="middle" font-size="13" font-weight="800" fill="${col}">${this._escape(p.label)}</text>`;
      });
    }
    return `<div class="mv-wrap mv-step-line">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步6：几何 — 从"图形"到"高/底标注"到"割补动画"
  geometryStep(data, step){
    const shape=data.shape||'parallelogram';
    const W=440, H=220;
    let svg=`<text x="${W/2}" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">几何 · 第${step}/3步</text>`;
    if(shape==='sphere'){
      const r=data.radius||50, cx=W/2, cy=H/2;
      if(step>=1){
        svg+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5" class="mv-shape" style="animation:mvFadeIn .5s ease both"/>`;
        svg+=`<circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>`;
      }
      if(step>=2){
        svg+=`<line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="4,3" class="mv-dim" style="animation:mvLineIn .4s .3s ease both"/>`;
        svg+=`<text x="${cx+r+6}" y="${cy+4}" font-size="11" font-weight="700" fill="#FB923C">r=${r}</text>`;
        svg+=`<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*0.3}" fill="none" stroke="#00A896" stroke-width="1.2" stroke-dasharray="3,2" class="mv-eq" style="animation:mvFadeIn .4s .5s ease both"/>`;
      }
      if(step>=3){
        const S=(4*Math.PI*r*r).toFixed(0), V=(4/3*Math.PI*r*r*r).toFixed(0);
        svg+=`<rect x="${40}" y="${H-30}" width="${W-80}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">表面积=${S}　体积=${V}</text>`;
      }
    } else if(shape==='cone'){
      const r=data.radius||50, h=data.height||70, cx=W/2, baseY=H-40, topY=40;
      const rr=r*1.3;
      if(step>=1){
        svg+=`<ellipse cx="${cx}" cy="${baseY}" rx="${rr}" ry="${rr*0.35}" fill="rgba(245,184,0,0.15)" stroke="#F5B800" stroke-width="2" class="mv-shape" style="animation:mvFadeIn .5s ease both"/>`;
        svg+=`<line x1="${cx-rr}" y1="${baseY}" x2="${cx}" y2="${topY}" stroke="#F5B800" stroke-width="2" class="mv-side" style="animation:mvLineIn .4s .2s ease both"/>`;
        svg+=`<line x1="${cx+rr}" y1="${baseY}" x2="${cx}" y2="${topY}" stroke="#F5B800" stroke-width="2" class="mv-side" style="animation:mvLineIn .4s .35s ease both"/>`;
      }
      if(step>=2){
        svg+=`<line x1="${cx}" y1="${topY}" x2="${cx}" y2="${baseY}" stroke="#FB923C" stroke-width="1.5" stroke-dasharray="4,3" class="mv-h" style="animation:mvLineIn .4s .5s ease both"/>`;
        svg+=`<text x="${cx+8}" y="${(topY+baseY)/2}" font-size="11" font-weight="700" fill="#FB923C">h=${h}</text>`;
        svg+=`<text x="${cx+rr+4}" y="${baseY+4}" font-size="11" font-weight="700" fill="#1E3A5F">r=${r}</text>`;
      }
      if(step>=3){
        const L=Math.sqrt(r*r+h*h).toFixed(0);
        const V=(1/3*Math.PI*r*r*h).toFixed(0);
        svg+=`<rect x="${40}" y="${H-30}" width="${W-80}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">母线=${L}　体积=${V}</text>`;
      }
    } else if(shape==='sector'){
      const r=data.radius||50, angle=data.angle||90, cx=W/2, cy=H/2;
      const sc=1.5, R=r*sc;
      const sa=-Math.PI/2, ea=sa+(angle/180)*Math.PI;
      const x1=cx+R*Math.cos(sa), y1=cy+R*Math.sin(sa);
      const x2=cx+R*Math.cos(ea), y2=cy+R*Math.sin(ea);
      const la=angle>180?1:0;
      if(step>=1){
        svg+=`<path d="M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${la} 1 ${x2} ${y2} Z" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2" class="mv-shape" style="animation:mvFadeIn .5s ease both"/>`;
      }
      if(step>=2){
        svg+=`<line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}" stroke="#1E3A5F" stroke-width="1.5" class="mv-r1"/>`;
        svg+=`<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#1E3A5F" stroke-width="1.5" class="mv-r2"/>`;
        svg+=`<text x="${cx+10}" y="${cy-10}" font-size="11" font-weight="700" fill="#F5B800">θ=${angle}°</text>`;
      }
      if(step>=3){
        const L=(angle/360*2*Math.PI*r).toFixed(1), A=(angle/360*Math.PI*r*r).toFixed(1);
        svg+=`<rect x="${40}" y="${H-30}" width="${W-80}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">弧长=${L}　面积=${A}</text>`;
      }
    } else if(shape==='regularPolygon'){
      const sides=data.sides||6, r=data.radius||60, cx=W/2, cy=H/2;
      const pts=Array.from({length:sides},(_,i)=>{
        const a=-Math.PI/2+i*2*Math.PI/sides;
        return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;
      }).join(' ');
      if(step>=1){
        svg+=`<polygon points="${pts}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2" class="mv-shape" style="animation:mvFadeIn .5s ease both"/>`;
      }
      if(step>=2){
        svg+=`<circle cx="${cx}" cy="${cy}" r="3" fill="#1E3A5F"/>`;
        svg+=`<text x="${cx+r+6}" y="${cy-6}" font-size="11" font-weight="700" fill="#1E3A5F">r=${r}</text>`;
      }
      if(step>=3){
        const IA=((sides-2)*180/sides).toFixed(0);
        svg+=`<rect x="${40}" y="${H-30}" width="${W-80}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">正${sides}边形　内角=${IA}°</text>`;
      }
    } else if(shape==='prism'){
      const base=data.base||60, h=data.height||80, bs=data.baseSides||6;
      const cx=W/2, baseY=H-40, topY=50;
      const ptsTop=Array.from({length:bs},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/bs;return`${cx+base*Math.cos(a)},${topY+base*0.4*Math.sin(a)}`}).join(' ');
      const ptsBot=Array.from({length:bs},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/bs;return`${cx+base*Math.cos(a)},${baseY+base*0.4*Math.sin(a)}`}).join(' ');
      if(step>=1){
        svg+=`<polygon points="${ptsTop}" fill="rgba(0,168,150,0.15)" stroke="#00A896" stroke-width="2" class="mv-top" style="animation:mvFadeIn .4s ease both"/>`;
        svg+=`<polygon points="${ptsBot}" fill="rgba(0,168,150,0.08)" stroke="#00A896" stroke-width="2" class="mv-bot" style="animation:mvFadeIn .4s .2s ease both"/>`;
      }
      if(step>=2){
        for(let i=0;i<bs;i++){
          const a1=-Math.PI/2+i*2*Math.PI/bs;
          const x1=cx+base*Math.cos(a1), y1=topY+base*0.4*Math.sin(a1);
          const x2=cx+base*Math.cos(a1), y2=baseY+base*0.4*Math.sin(a1);
          svg+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#00A896" stroke-width="1.5" class="mv-edge" style="animation:mvLineIn .3s ${0.3+i*0.05}s ease both"/>`;
        }
        svg+=`<text x="${cx+base+6}" y="${(topY+baseY)/2}" font-size="11" font-weight="700" fill="#FB923C">h=${h}</text>`;
      }
      if(step>=3){
        svg+=`<rect x="${40}" y="${H-30}" width="${W-80}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">正${bs}棱柱　底面正${bs}边形</text>`;
      }
    } else {
      // parallelogram（原有逻辑）
      const ox=80, oy=180, b=200, h=100, off=40;
      const p1={x:ox,y:oy}, p2={x:ox+b,y:oy}, p3={x:ox+b+off,y:oy-h}, p4={x:ox+off,y:oy-h};
      if(step>=1){
        svg+=`<polygon points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}" fill="#00A896" fill-opacity="0.25" stroke="#00A896" stroke-width="2" class="mv-shape" style="animation:mvFadeIn .5s ease both"/>`;
        svg+=`<text x="${ox+b/2}" y="${oy+18}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">底</text>`;
      }
      if(step>=2){
        svg+=`<line x1="${p4.x}" y1="${p4.y}" x2="${p1.x}" y2="${p1.y}" stroke="#FB923C" stroke-width="2.5" stroke-dasharray="6,3" class="mv-height" style="animation:mvLineIn .5s ease both"/>`;
        svg+=`<text x="${p1.x-10}" y="${(p1.y+p4.y)/2+4}" text-anchor="end" font-size="11" font-weight="700" fill="#FB923C">高</text>`;
        svg+=`<polygon points="${p1.x},${p1.y} ${p4.x},${p4.y} ${p4.x},${p1.y}" fill="#FB923C" fill-opacity="0.15" stroke="#FB923C" stroke-width="1" class="mv-tri-left" style="animation:mvFadeIn .4s .3s ease both"/>`;
      }
      if(step>=3){
        const rx=ox+b+off+20, ry=oy-h;
        svg+=`<rect x="${rx}" y="${ry}" width="${b}" height="${h}" fill="#00A896" fill-opacity="0.3" stroke="#00A896" stroke-width="2" class="mv-result" style="animation:mvPop .5s .6s ease both"/>`;
        svg+=`<text x="${rx+b/2}" y="${ry+h+18}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">等面积矩形</text>`;
        svg+=`<rect x="${60}" y="${H-30}" width="${W-120}" height="22" fill="#1E3A5F" rx="11"/>`;
        svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">平行四边形面积 = 底 × 高</text>`;
      }
    }
    return `<div class="mv-wrap mv-step-geo">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步7：数位条块 — 从"个位堆叠"到"聚拢成十"到"进位呈现"
  baseTenStep(data, step){
    // 兼容 parts 格式：提取个位数字进行进位演示
    let ones=data.ones, tens=data.tens;
    if(ones == null && data.parts && data.parts.length >= 2){
      const a = data.parts[0].val;
      const b = data.parts[1].val;
      const aOnes = a % 10;
      const bOnes = b % 10;
      ones = aOnes + bOnes;
      tens = Math.floor(ones / 10);
    }
    ones = ones || 13;
    tens = tens != null ? tens : 1;
    const W=560, H=200;
    let svg=`<text x="${W/2}" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">数位条块 · 第${step}/3步（${ones}→${tens||Math.floor(ones/10)}${ones%10}）</text>`;
    // 个位方块区
    const startX=80, startY=55, blockSize=28, gap=4;
    if(step>=1){
      // 全部个位方块
      for(let i=0;i<ones;i++){
        const col=i%10, row=Math.floor(i/10);
        const x=startX+col*(blockSize+gap);
        const y=startY+row*(blockSize+gap);
        const color=i>=10?'#FB923C':'#00A896';
        svg+=`<rect x="${x}" y="${y}" width="${blockSize}" height="${blockSize}" rx="4" fill="${color}" fill-opacity="0.5" stroke="${color}" stroke-width="1.5" class="mv-block" style="animation:mvPop .3s ${i*0.06}s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      }
      // 计数
      const totalOnes=ones;
      svg+=`<text x="${startX+(Math.min(ones,10)*(blockSize+gap))/2}" y="${startY+blockSize+18}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${totalOnes}个一</text>`;
    }
    if(step>=2){
      // 打包线（圈出10个）
      svg+=`<rect x="${startX-4}" y="${startY-4}" width="${10*(blockSize+gap)+4}" height="${blockSize+8}" rx="8" fill="none" stroke="#FB923C" stroke-width="2.5" stroke-dasharray="5,3" class="mv-pack" style="animation:mvFadeIn .5s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${startX+5*(blockSize+gap)}" y="${startY-10}" text-anchor="middle" font-size="10" font-weight="700" fill="#FB923C">10个一 = 1个十</text>`;
    }
    if(step>=3){
      // 十位条出现
      const tenBarX=startX, tenBarY=startY+50;
      svg+=`<rect x="${tenBarX}" y="${tenBarY}" width="${10*(blockSize+gap)}" height="${blockSize+4}" rx="6" fill="#FB923C" fill-opacity="0.4" stroke="#FB923C" stroke-width="2" class="mv-ten-bar" style="animation:mvBarGrow .5s .4s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
      svg+=`<text x="${tenBarX+5*(blockSize+gap)}" y="${tenBarY+blockSize/2+4}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">1个十</text>`;
      // 剩余个位
      const remOnes=ones%10;
      if(remOnes>0){
        const remStartX=startX;
        const remStartY=tenBarY+blockSize+16;
        for(let i=0;i<remOnes;i++){
          const x=remStartX+i*(blockSize+gap);
          svg+=`<rect x="${x}" y="${remStartY}" width="${blockSize}" height="${blockSize}" rx="4" fill="#00A896" fill-opacity="0.5" stroke="#00A896" stroke-width="1.5" class="mv-rem-block" style="animation:mvPop .3s .6s ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
        }
        svg+=`<text x="${remStartX+(remOnes*(blockSize+gap))/2}" y="${remStartY+blockSize+16}" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A5F">${remOnes}个一</text>`;
      }
      // 最终结果
      const resultStr=Math.floor(ones/10)+'个十'+(remOnes>0?' + '+remOnes+'个一':'');
      svg+=`<rect x="${W/2-80}" y="${H-32}" width="160" height="24" fill="#1E3A5F" rx="12"/>`;
      svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">结果：${ones} = ${resultStr}</text>`;
    }
    return `<div class="mv-wrap mv-step-base10">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  },

  // 分步动画CSS注入（确保所有动画类都有对应样式）
  _injectStepStyles(){
    if(document.getElementById('mvStepStyles')) return;
    const css = `<style id="mvStepStyles">
      /* 关键修复：用 transform:scaleX 做生长动画，绝不能用 width——CSS width 会覆盖 SVG rect 的 width 属性，导致所有条形被拉成满宽等宽（--w 未定义时回退 100%） */
      @keyframes mvBarIn{from{transform:scaleX(0);opacity:.3}to{transform:scaleX(1);opacity:1}}
      @keyframes mvBarGrow{from{transform:scaleX(0);transform-origin:left}to{transform:scaleX(1)}}
      @keyframes mvFadeIn{from{opacity:0}to{opacity:1}}
      @keyframes mvLineIn{from{stroke-dashoffset:1000}to{stroke-dashoffset:0}}
      @keyframes mvFillIn{from{opacity:0;transform:scale(.8)}to{opacity:.4;transform:scale(1)}}
      @keyframes mvPop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:scale(1);opacity:1}}
      @keyframes mvPointIn{from{r:0;opacity:0}to{r:6;opacity:1}}
      @keyframes mvSlideIn{from{transform:translateX(-20px);opacity:0}to{transform:translateX(0);opacity:1}}
      .mv-wrap{position:relative;overflow:hidden}
      .mv-wrap svg{display:block;width:100%;height:auto}
      @media (max-width:640px){.mv-wrap svg{max-height:200px}}
    </style>`;
    document.head.insertAdjacentHTML('beforeend', css);
  }
};
