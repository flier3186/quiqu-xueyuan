// engine/math-visual-v5.js · 奇趣学园 V5 数学引擎
// 数形结合可视化引擎 V5：6 种基础渲染器（与原 MathVisual 一致）+ 7 种优化渲染器
// 优化点：毫米/分米/千米/吨认识、集合韦恩图拖拽、找次品天平决策、圆面积 16 份割补
// 关键修复：① 运算类型从 formula 自动检测（× ÷ - +，减法不被误判为加法）
//          ② 文字颜色对比度（亮色背景用 #12263F，暗色背景用 #fff）
// 依赖：无（纯函数返回 HTML 字符串，由调用方插入 DOM）
window.MathVisualV5 = {

  // ===== 总入口：根据 type 调用对应渲染器；problem 可选，用于智能路由 =====
  render(type, data, problem){
    const resolved = this._resolveType(type, data, problem);
    const fn = this[resolved];
    if(typeof fn === 'function'){
      // 优化渲染器需要 problem 参数；基础渲染器只取 data
      return resolved === type ? fn.call(this, data) : fn.call(this, data, problem);
    }
    return this.barModel.call(this, data);
  },

  // ===== 智能路由：根据知识点/图形形状选择优化渲染器 =====
  _resolveType(type, data, problem){
    const k = (problem && problem.knowledge) || '';
    const shape = (data && data.shape) || '';
    if(k.indexOf('毫米') >= 0) return 'rulerMagnifier';
    if(k.indexOf('分米') >= 0) return 'bodyRuler';
    if(k.indexOf('千米') >= 0) return 'mapZoom';
    if(k.indexOf('吨') >= 0) return 'balanceScale';
    if(k.indexOf('集合') >= 0 || k.indexOf('韦恩') >= 0) return 'vennDiagram';
    if(k.indexOf('找次品') >= 0 || shape === 'balance') return 'balanceDecision';
    if(k.indexOf('圆的面积') >= 0 || k.indexOf('圆面积') >= 0) return 'circleArea';
    // 迭代2新增：课标打破点路由
    // 两位数乘法优先于进位，避免"两位数乘两位数不进位"误匹配到baseTenBlocks
    if(k.indexOf('两位数乘法') >= 0 || k.indexOf('多位数乘法') >= 0 || type === 'areaModel') return 'areaModelAnim';
    if(k.indexOf('进位') >= 0 || k.indexOf('退位') >= 0 || k.indexOf('万以内') >= 0) return 'baseTenBlocks';
    if(k.indexOf('分数墙') >= 0 || k.indexOf('等值分数') >= 0) return 'fractionWall';
    if(k.indexOf('分数') >= 0 && (type === 'fractionCircle' || shape === 'fractionCircle')) return 'fractionCircleAnim';
    if(k.indexOf('Bar') >= 0 || k.indexOf('条形') >= 0 || type === 'barModel') return 'barModelTranslate';
    if(k.indexOf('分数') >= 0 && type === 'numberLine') return 'numberLineFraction';
    if(k.indexOf('小数') >= 0 && type === 'numberLine') return 'numberLineFraction';
    if(k.indexOf('平行四边形') >= 0 || k.indexOf('割补') >= 0 || shape === 'parallelogram') return 'cutPasteGeometry';
    if(k.indexOf('长方体') >= 0 || k.indexOf('展开图') >= 0 || shape === 'cylinder') return 'unrollNet';
    return type;
  },

  // ===== 颜色工具 =====
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
  barModel(data){
    // 兼容 bars 格式（{type:"bar", bars:[{label,value,color}], total}）
    if(data && data.bars && !data.parts){
      data.parts = data.bars.map(b => ({label: b.label, val: b.value, color: b.color}));
      if(data.total == null) data.total = data.parts.reduce((s,p)=>s+(p.val||0),0);
    }
    const parts = (data && data.parts) || [];
    if(!parts.length) return '<div class="mv-empty">暂无条形数据</div>';
    const total = (data.total != null) ? data.total : parts.reduce((s,p)=>s+(p.val||0),0);
    const W=560, H=170, padX=24, barY=66, barH=58;
    const usable = W - padX*2;
    let x = padX, delay = 0;
    const segs = parts.map((p,i)=>{
      const w = total>0 ? Math.max((p.val/total)*usable, 2) : 0;
      const color = this._hex(p.color) || this._palette(i);
      const g = `<g transform="translate(${x},0)">
        <rect class="mv-bar-rect" x="0" y="${barY}" width="${w}" height="${barH}" fill="${color}" rx="5" style="animation-delay:${delay}s"/>
        <text class="mv-bar-text" x="${w/2}" y="${barY+barH/2+5}" text-anchor="middle" font-size="15" font-weight="700" fill="${this._textColor(color)}" style="animation-delay:${delay+0.45}s">${p.val}</text>
        <text x="${w/2}" y="${barY-10}" text-anchor="middle" font-size="12" fill="#475569" font-weight="600">${p.label||''}</text>
      </g>`;
      x += w; delay += 0.18;
      return g;
    }).join('');
    return `<div class="mv-wrap mv-bar-model">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${segs}
        <text x="${W-padX}" y="${barY+barH+30}" text-anchor="end" font-size="14" font-weight="700" fill="#1E3A5F">（合计 = ${total}）</text>
      </svg>
    </div>`;
  },

  // 2. 面积模型 —— 两位数乘法
  // data: {a, b, parts:[4个部分值], result}
  areaModel(data){
    const {a,b,parts,result} = data;
    const aT=Math.floor(a/10)*10, aO=a%10;
    const bT=Math.floor(b/10)*10, bO=b%10;
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
  numberBond(data){
    const parts=(data && data.parts) || [];
    const total=data.total;
    const n=parts.length;
    const W=340, H=210, topX=W/2, topY=44, bottomY=158, spread=220;
    const pos=(i)=> n<=1 ? W/2 : (W/2 - spread/2 + (spread/(n-1))*i);
    const lines=parts.map((p,i)=>{
      const bx=pos(i);
      const len=Math.hypot(bx-topX, bottomY-topY);
      return `<line class="mv-bond-line" x1="${topX}" y1="${topY}" x2="${bx}" y2="${bottomY}" stroke="${this._hex(p.color)||this._palette(i)}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${len}" stroke-dashoffset="${len}" style="animation-delay:${i*0.2}s"/>`;
    }).join('');
    const pCircles=parts.map((p,i)=>{
      const bx=pos(i);
      const color=this._hex(p.color)||this._palette(i);
      return `<g class="mv-bond-part" style="animation-delay:${0.55+i*0.2}s">
        <circle cx="${bx}" cy="${bottomY}" r="26" fill="${color}"/>
        <text x="${bx}" y="${bottomY+6}" text-anchor="middle" font-size="18" font-weight="700" fill="${this._textColor(color)}">${p.val}</text>
      </g>`;
    }).join('');
    return `<div class="mv-wrap mv-number-bond">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        ${lines}
        <g class="mv-bond-total">
          <circle cx="${topX}" cy="${topY}" r="30" fill="#1E3A5F"/>
          <text x="${topX}" y="${topY+7}" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">${total}</text>
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
    const {start, end, points, highlight} = data;
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
      const x1=pos(highlight[0]), x2=pos(highlight[1]);
      hl=`<rect x="${x1}" y="${padY-22}" width="${x2-x1}" height="44" fill="#F5B800" opacity="0.22" rx="4"/>`;
    }
    const pts=(points||[]).map((p,i)=>{
      const x=pos(p.pos);
      const color=this._hex(p.color)||this._palette(i);
      return `<g class="mv-nl-point" style="animation-delay:${0.4+i*0.2}s">
        <circle cx="${x}" cy="${padY}" r="10" fill="${color}" stroke="#fff" stroke-width="2.5"/>
        <text x="${x}" y="${padY-18}" text-anchor="middle" font-size="12" font-weight="700" fill="${color}">${p.label!=null?p.label:p.pos}</text>
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
      const sc=15, rw=length*sc, rh=width*sc;
      const x0=(W-rw)/2, y0=(H-rh)/2;
      body=`<rect class="mv-geo-outline" x="${x0}" y="${y0}" width="${rw}" height="${rh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5" rx="3"/>
        <text x="${x0+rw/2}" y="${y0-10}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">长 ${length}</text>
        <text x="${x0+rw+8}" y="${y0+rh/2+5}" font-size="13" font-weight="700" fill="#1E3A5F">宽 ${width}</text>`;
      formula=`周长 = (${length}+${width})×2 = ${2*(length+width)}　面积 = ${length}×${width} = ${length*width}`;
    } else if(shape==='triangle'){
      const {base,height}=p;
      const sc=13, bw=base*sc, hh=height*sc;
      const cx=W/2, baseY=H-44;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx},${baseY-hh}" fill="rgba(0,168,150,0.12)" stroke="#00A896" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY-hh}" x2="${cx}" y2="${baseY}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">底 ${base}</text>`;
      formula=`面积 = 底×高÷2 = ${base}×${height}÷2 = ${base*height/2}`;
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
      const {top,bottom,height}=p;
      const sc=12, tw=top*sc, bw=bottom*sc, hh=height*sc;
      const cx=W/2, baseY=H-50;
      body=`<polygon class="mv-geo-outline" points="${cx-bw/2},${baseY} ${cx+bw/2},${baseY} ${cx+tw/2},${baseY-hh} ${cx-tw/2},${baseY-hh}" fill="rgba(232,160,191,0.18)" stroke="#E8A0BF" stroke-width="2.5"/>
        <line x1="${cx}" y1="${baseY}" x2="${cx}" y2="${baseY-hh}" stroke="#FB923C" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="${cx+8}" y="${baseY-hh/2}" font-size="12" font-weight="700" fill="#FB923C">高 ${height}</text>
        <text x="${cx}" y="${baseY-hh-10}" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F">上底 ${top}</text>
        <text x="${cx}" y="${baseY+22}" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">下底 ${bottom}</text>`;
      formula=`面积 = (上底+下底)×高÷2 = (${top}+${bottom})×${height}÷2 = ${(top+bottom)*height/2}`;
    } else if(shape==='circle'){
      const {radius}=p;
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
      // 兼容旧题库 shape='balance'，路由到 balanceDecision
      return this.balanceDecision(data);
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
    // 用 HTML+CSS 画两个相交的圆，比 SVG 更易支持拖拽 drop 事件
    // 元素用 span draggable，圆圈用 div（ondrop/ondragover）
    // 生成可拖拽元素：把 onlyA/both/onlyB 的数值拆成小圆点
    const makeTokens=(count,color,prefix)=>{
      const n=Math.min(count,8); // 最多显示 8 个，避免过多
      const realCount = count;
      const tokens=[];
      for(let i=0;i<n;i++){
        tokens.push(`<span class="mv-venn-token" draggable="true" ondragstart="MathVisualV5._vennDragStart(event,'${prefix}',${i})" style="background:${color};color:${this._textColor(color)}">${prefix==='A'?'🍎':prefix==='B'?'🍌':'⭐'}${i+1}</span>`);
      }
      if(realCount>n) tokens.push(`<span class="mv-venn-more">…共${realCount}个</span>`);
      return tokens.join('');
    };
    const aTokens = makeTokens(onlyA.val, aColor, 'A');
    const bTokens = makeTokens(onlyB.val, bColor, 'B');
    const bothTokens = makeTokens(both.val, bothColor, 'X');
    return `<div class="mv-wrap mv-venn">
      <div class="mv-venn-stage">
        <div class="mv-venn-circle mv-venn-a" style="border-color:${aColor};background:${aColor}22"
             ondrop="MathVisualV5._vennDrop(event,'A')" ondragover="MathVisualV5._vennDragOver(event)">
          <div class="mv-venn-label" style="color:${aColor}">只参加 A</div>
          <div class="mv-venn-count" style="color:${aColor}">${onlyA.val} 人</div>
          <div class="mv-venn-tokens">${aTokens}</div>
        </div>
        <div class="mv-venn-circle mv-venn-b" style="border-color:${bColor};background:${bColor}22"
             ondrop="MathVisualV5._vennDrop(event,'B')" ondragover="MathVisualV5._vennDragOver(event)">
          <div class="mv-venn-label" style="color:${bColor}">只参加 B</div>
          <div class="mv-venn-count" style="color:${bColor}">${onlyB.val} 人</div>
          <div class="mv-venn-tokens">${bTokens}</div>
        </div>
        <div class="mv-venn-overlap" style="background:${bothColor}44;border-color:${bothColor}"
             ondrop="MathVisualV5._vennDrop(event,'X')" ondragover="MathVisualV5._vennDragOver(event)">
          <div class="mv-venn-label" style="color:${bothColor}">都参加</div>
          <div class="mv-venn-count" style="color:${bothColor}">${both.val} 人</div>
          <div class="mv-venn-tokens">${bothTokens}</div>
        </div>
      </div>
      <div class="mv-venn-formula">
        总数 = 只A + 只B + 都参加 = ${onlyA.val} + ${onlyB.val} + ${both.val} = <b style="color:${aColor}">${total}</b> 人<br>
        <span style="font-size:12px;color:#475569">💡 中间重叠的部分会被算两次，所以要单独算一次。试试把元素拖到不同区域！</span>
      </div>
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
  baseTenBlocks(data){
    const a = data.a || 38, b = data.b || 45, total = data.total || 83;
    const op = data.op || '+';
    const W=520, H=220, blockW=28, blockH=22;
    const tenH=blockW*1.8;
    const tenW=blockW;
    const colorA='#00A896', colorB='#E8A0BF';
    // 十位条
    const makeTenBar=(x,y,c)=>`<rect x="${x}" y="${y}" width="${tenW}" height="${tenH}" fill="${c}" rx="3" class="mv-ten-bar" style="animation:mvSlideIn .5s ${.1} ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    // 个位方块
    const makeUnit=(x,y,c,delay)=>`<rect x="${x}" y="${y}" width="${blockW}" height="${blockH}" fill="${c}" rx="2" class="mv-unit" style="animation:mvGather .6s ${delay} ease both;-webkit-transform-box:fill-box;transform-box:fill-box"/>`;
    // 计算十位和个位数
    const aTens=Math.floor(a/10), aOnes=a%10, bTens=Math.floor(b/10), bOnes=b%10;
    const sumTens=Math.floor(total/10), sumOnes=total%10;
    let svg='';
    // 左侧：A的方块
    const leftX=30;
    for(let i=0;i<aTens;i++) svg+=makeTenBar(leftX+i*(tenW+4),60,colorA);
    for(let i=0;i<aOnes;i++) svg+=makeUnit(leftX+i*blockW,100,colorA,i*0.05);
    // 右侧：B的方块
    const rightX=280;
    for(let i=0;i<bTens;i++) svg+=makeTenBar(rightX+i*(tenW+4),60,colorB);
    for(let i=0;i<bOnes;i++) svg+=makeUnit(rightX+i*blockW,100,colorB,i*0.05+0.2);
    // 中间等号
    svg+=`<text x="258" y="90" text-anchor="middle" font-size="22" font-weight="800" fill="#1E3A5F">${op}</text>`;
    // 结果区域（进位动画后显示）
    const resX=400;
    for(let i=0;i<sumTens;i++) svg+=makeTenBar(resX+i*(tenW+4),60,'#00A896');
    for(let i=0;i<sumOnes;i++) svg+=makeUnit(resX+i*blockW,100,'#00A896',i*0.05+0.4);
    // 进位动画提示
    svg+=`<text x="260" y="160" text-anchor="middle" font-size="11" fill="#FB923C" class="mv-hint" style="animation:mvFadeIn .8s 0.5s both">个位 ${aOnes}+${bOnes}=${aOnes+bOnes}，满十进一</text>`;
    svg+=`<text x="260" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A5F" class="mv-result" style="animation:mvFadeIn .5s 1.2s both">= ${a} ${op} ${b} = ${total}</text>`;
    return `<div class="mv-wrap mv-base-ten">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
        <rect x="10" y="40" width="220" height="80" fill="rgba(0,168,150,.06)" rx="8"/>
        <rect x="250" y="40" width="60" height="80" fill="rgba(245,184,0,.06)" rx="8"/>
        <rect x="340" y="40" width="170" height="80" fill="rgba(0,168,150,.06)" rx="8"/>
        ${svg}
      </svg>
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
      {a:1,b:2,c:4,d:8,labels:['1/2','2/4','4/8']},
      {a:1,b:3,c:2,d:6,labels:['1/3','2/6']},
      {a:1,b:2,c:3,d:6,labels:['1/2','3/6']},
    ];
    const targetFracs=(problem&&problem.russianQuestions)?problem.russianQuestions.map(q=>q.targetFrac):[];
    let svg=`<text x="${W/2}" y="18" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">分数墙 · 点击行高亮等值分数</text>`;
    rows.forEach((row,i)=>{
      const y=36+i*(rowH+6);
      const segW=rowW/row.den;
      svg+=`<rect x="${startX}" y="${y}" width="${rowW}" height="${rowH}" fill="#f8f9fa" rx="4" class="mv-fraction-row" data-row="${i}" style="cursor:pointer"/>`;
      row.colors.forEach((c,j)=>{
        svg+=`<rect x="${startX+j*segW}" y="${y}" width="${segW-1}" height="${rowH}" fill="${c}" rx="2" class="mv-fraction-seg" style="animation:mvFadeIn .3s ${i*0.08+j*0.03} ease both;-webkit-transform-box:fill-box;transform-box:fill-box;transition:opacity .3s"/>`;
      });
      svg+=`<text x="${startX+rowW+8}" y="${y+rowH/2+4}" font-size="11" font-weight="600" fill="#1E3A5F">${row.label}</text>`;
    });
    if(targetFracs.length>0){
      const last=targetFracs[targetFracs.length-1];
      if(last && last.label){
        svg+=`<text x="${W/2}" y="${H-8}" text-anchor="middle" font-size="11" fill="#00A896" font-weight="700">💡 在墙上找：${last.label}</text>`;
      }
    }
    return `<div class="mv-wrap mv-fraction-wall">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" id="fvWallSvg">${svg}</svg>
    </div>`;
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
    let svg=`<text x="${W/2}" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A5F">${a} × ${b} = ${total}</text>`;
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
    svg+=`<text x="${W/2}" y="${H-15}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">总面积 = ${parts.map(p=>p.label).join(' + ')} = ${total}</text>`;
    return `<div class="mv-wrap mv-area-anim">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>
    </div>`;
  }
};
