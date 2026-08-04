// engine/parent-panel.js · 家长入口面板
// 功能：起点年级 / 学习状态 / 分数降级开关 / 动画速度 / 总时长
// 数据存储：S.settings.math

window.ParentPanel = {
  _settingsKey: 'ququxv4_state_v1',

  render(){
    const s = this.getSettings();
    const grades = ['二下','三上','三下','四上','四下','五上','五下','六上','七上','七下','八上','八下','九上','九下'];
    const stateLabels = { new:'刚学', stuck:'学过但卡住', proficient:'已经熟练' };
    const speedLabels = { slow:'慢速', normal:'正常', fast:'快速' };
    return `<div class="cpa-layer" style="border-left-color:var(--teal);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--teal);color:#fff">家长入口 · 数学设置</span>
      <div style="margin:16px 0">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">📚 起点年级</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${grades.map(g=>`<div onclick="ParentPanel._setGrade(this,'${g}')" data-grade="${g}" style="padding:8px 16px;background:${s.startGrade===g?'var(--teal)':'#fff'};color:${s.startGrade===g?'#fff':'var(--teal-700)'};border:1.5px solid ${s.startGrade===g?'var(--teal)':'var(--teal)'};border-radius:18px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s">${g}</div>`).join('')}
        </div>
      </div>
      <div style="margin:16px 0">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">🎯 学习状态</div>
        <div style="display:flex;gap:10px">
          ${['new','stuck','proficient'].map(st=>`<div onclick="ParentPanel._setState(this,'${st}')" data-state="${st}" style="padding:8px 16px;background:${s.learningState===st?'var(--yellow)':'#fff'};color:${s.learningState===st?'var(--navy)':'var(--text-2)'};border:1.5px solid ${s.learningState===st?'var(--yellow)':'var(--ink-100)'};border-radius:18px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s">${stateLabels[st]}</div>`).join('')}
        </div>
      </div>
      <div style="margin:16px 0">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">📐 分数模型</div>
        <div style="display:flex;gap:10px;align-items:center">
          <div onclick="ParentPanel._setFraction('all')" data-fraction="all" style="padding:8px 16px;background:${s.fractionMode==='all'?'var(--teal)':'#fff'};color:${s.fractionMode==='all'?'#fff':'var(--teal-700)'};border:1.5px solid var(--teal);border-radius:18px;font-size:13px;font-weight:700;cursor:pointer">全部模型</div>
          <div onclick="ParentPanel._setFraction('circle-only')" data-fraction="circle-only" style="padding:8px 16px;background:${s.fractionMode==='circle-only'?'var(--coral)':'#fff'};color:${s.fractionMode==='circle-only'?'#fff':'var(--coral)'};border:1.5px solid var(--coral);border-radius:18px;font-size:13px;font-weight:700;cursor:pointer">只展示圆形</div>
        </div>
        <div style="font-size:12px;color:var(--text-3);margin-top:6px">只展示圆形模型，隐藏分数条/墙/轴（适合初学阶段）</div>
      </div>
      <div style="margin:16px 0">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">🎬 动画速度</div>
        <div style="display:flex;gap:10px">
          ${['slow','normal','fast'].map(sp=>`<div onclick="ParentPanel._setSpeed(this,'${sp}')" data-speed="${sp}" style="padding:8px 16px;background:${s.animSpeed===sp?'var(--pink)':'#fff'};color:${s.animSpeed===sp?'#fff':'var(--text-2)'};border:1.5px solid ${s.animSpeed===sp?'var(--pink)':'var(--ink-100)'};border-radius:18px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s">${speedLabels[sp]}</div>`).join('')}
        </div>
      </div>
      <div style="margin:16px 0">
        <div style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">⏱️ 单次学习时长</div>
        <div style="display:flex;align-items:center;gap:12px">
          <input type="range" id="v5DurationSlider" min="10" max="20" step="5" value="${s.sessionDuration||15}" onchange="ParentPanel._setDuration(this.value)" style="flex:1;height:6px;-webkit-appearance:none;background:linear-gradient(90deg,var(--teal),var(--yellow));border-radius:3px;outline:none">
          <span id="v5DurationLabel" style="font-size:16px;font-weight:800;color:var(--teal);min-width:50px;text-align:center">${s.sessionDuration||15}分钟</span>
        </div>
      </div>
      <div style="text-align:center;margin-top:18px">
        <button onclick="ParentPanel._save()" style="padding:12px 32px;background:linear-gradient(135deg,var(--teal),#14C3B2);color:#fff;border:none;border-radius:22px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 6px 18px rgba(0,168,150,.3)">保存设置</button>
      </div>
    </div>`;
  },

  getSettings(){
    try{
      if(typeof S!=='undefined' && S.settings && S.settings.math) return S.settings.math;
    }catch(e){}
    return { startGrade:'三上', learningState:'new', fractionMode:'all', animSpeed:'normal', sessionDuration:15 };
  },

  saveSettings(settings){
    try{
      if(typeof S!=='undefined'){
        S.settings = S.settings || {};
        S.settings.math = settings;
        if(typeof saveState==='function') saveState();
      }
    }catch(e){}
  },

  _setGrade(el, grade){
    const s = this.getSettings();
    s.startGrade = grade;
    this.saveSettings(s);
    // 重新渲染
    const container = el.closest('.cpa-layer');
    if(container) container.innerHTML = this.render();
  },

  _setState(el, state){
    const s = this.getSettings();
    s.learningState = state;
    this.saveSettings(s);
    const container = el.closest('.cpa-layer');
    if(container) container.innerHTML = this.render();
  },

  _setFraction(mode){
    const s = this.getSettings();
    s.fractionMode = mode;
    this.saveSettings(s);
    const container = document.querySelector('.cpa-layer');
    if(container) container.innerHTML = this.render();
  },

  _setSpeed(el, speed){
    const s = this.getSettings();
    s.animSpeed = speed;
    this.saveSettings(s);
    const container = el.closest('.cpa-layer');
    if(container) container.innerHTML = this.render();
  },

  _setDuration(val){
    document.getElementById('v5DurationLabel').textContent = val + '分钟';
    const s = this.getSettings();
    s.sessionDuration = parseInt(val);
    this.saveSettings(s);
  },

  _save(){
    if(typeof toast==='function') toast('✅ 设置已保存');
    // 如果有 MathFlowV5 正在运行，重启会话
    if(typeof MathFlowV5!=='undefined' && MathFlowV5._sess && typeof renderMath==='function'){
      // 不自动重启，让用户自己点"返回年级选择"
    }
  }
};
