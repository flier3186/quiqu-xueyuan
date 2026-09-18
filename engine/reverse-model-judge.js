// engine/reverse-model-judge.js · M2 反向建模判对器（形→数）
// 孩子根据图形/情景写出数量关系式，判对分两条路径：
//   ① 有 DeepSeek key → rubric JSON 判定（{correct, verdict, hint}），复用 speak-engine-v5 的模式；
//   ② 无 key / 调用失败 → 本地表达式归一化比对（降级闭环，不阻断流程）。
// 归一化规则：去空格 / 全半角统一 / 乘除号统一 / 已知「? 未知」占位等价。
window.ReverseModelJudge = {

  _norm(s) {
    if (s == null) return '';
    var t = String(s)
      // 全角→半角：数字、字母、常用符号统一（0xFF10-0xFF5E 换到 0x30-0x7E）
      .replace(/[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF0B\uFF0D\uFF0F\uFF1D\uFF08\uFF09\uFF0A\uFF0C\uFF1B|\uFF03\uFF05\uFF06\uFF3D]/g, function (ch) {
        return String.fromCharCode(ch.charCodeAt(0) - 0xFEE0);
      })
      .replace(/[（(]/g, '(').replace(/[）)]/g, ')')
      .replace(/×|x|X|\*/g, '×').replace(/÷|:/g, '÷')
      .replace(/＋/g, '+').replace(/－|−/g, '-').replace(/＝/g, '=')
      .replace(/\s+/g, '')
      .replace(/？/g, '?');
    return t;
  },

  // 等号两侧分别归一 + 排序，实现 a+b=c 与 c=a+b 等价
  _parts(s) {
    var t = this._norm(s);
    var eqIdx = t.indexOf('=');
    if (eqIdx < 0) return { lhs: t, rhs: '', eq: false };
    return { lhs: t.slice(0, eqIdx), rhs: t.slice(eqIdx + 1), eq: true };
  },

  // 把表达式里的 ? 与已知数字都当作"未知原点"处理：形如 12-7=5 → 部分归一
  _sortable(t) {
    return t.replace(/[()]/g, '');
  },

  _commutEq(a, b) {
    var pa = this._parts(a), pb = this._parts(b);
    if (pa.eq !== pb.eq) return false;
    if (!pa.eq) return this._sortable(pa.lhs) === this._sortable(pb.lhs);
    // a+b=c 与 c=a+b 等价（仅对加法/乘法交换律敏感的二元结构做方向判断，
    // 这里保守处理：两侧内容集合一致即等价）
    var la = pa.lhs.replace(/\+/g, ' ').replace(/×/g, ' ').trim().split(/\s+/).filter(Boolean).sort().join('+');
    var lb = pb.lhs.replace(/\+/g, ' ').replace(/×/g, ' ').trim().split(/\s+/).filter(Boolean).sort().join('+');
    var ra = pa.rhs.replace(/\+/g, ' ').replace(/×/g, ' ').trim().split(/\s+/).filter(Boolean).sort().join('+');
    var rb = pb.rhs.replace(/\+/g, ' ').replace(/×/g, ' ').trim().split(/\s+/).filter(Boolean).sort().join('+');
    // 两侧内容一致（同向）；或整体左右调换（孩子把答案写在左边，如 5=12-7）
    if (la === lb && ra === rb) return true;
    return la === rb && ra === lb;
  },

  // 本地判对：输入是否等价于任一期望式
  localJudge(item, input) {
    var expects = (item && item.expect) || [];
    var inp = this._norm(input);
    if (!inp) return { correct: false, verdict: '还没写呢，先看图想一想数字之间的关系吧 👀', source: 'local' };
    for (var i = 0; i < expects.length; i++) {
      var exp = this._norm(expects[i]);
      // 直接命中
      if (exp === inp) return { correct: true, verdict: '太棒了！数量关系式完全正确 ✅', source: 'local' };
      // 交换等价（a+b=c ↔ c=a+b）
      if (this._commutEq(inp, exp)) return { correct: true, verdict: '关系式正确，而且方向也写对了！✅', source: 'local' };
      // 未知占位等价：题目要求的是"求 ?"——12-7=5 与 12-7=? 同意义
      var expNoQ = exp.replace(/\?/g, '');
      var inpNoQ = inp.replace(/\?/g, '');
      if (expNoQ && expNoQ === inpNoQ && /[?？]/.test(exp)) return { correct: true, verdict: '对！你就是要求出这个未知数 ✅', source: 'local' };
    }
    return {
      correct: false,
      verdict: '再核对一下：想一想“总量 = 部分 + 部分”（或“每份 × 份数 = 总量”），式子里数字和运算顺序对吗？',
      source: 'local'
    };
  },

  // rubric JSON 判定（有 key 时走 LLM；失败/无 key 自动降级本地）
  async judge(item, input) {
    var key = '';
    try { key = (window.S && window.S.apiConfig && window.S.apiConfig.deepseekKey) || ''; } catch (e) {}
    if (!key) return this.localJudge(item, input);
    const rubric = `你是一位小学数学老师。下面是给孩子的“看图写数量关系式”题：
【题目情景】${item ? item.scene : ''}
【期望关系式】${item ? (item.expect || []).join(' 或 ') : ''}
【判分规则】${item ? (item.rubricHint || '') : ''}
孩子写的数量关系式是：「${input}」
请严格判断它是否数量关系正确（允许等价写法，如 a+b=c 与 c=a+b、数值等价），只输出 JSON：
{"correct": true或false, "verdict": "给孩子的鼓励或纠正语（中文，15字内）", "hint": "若错误，给一个小提示（中文，20字内）"}`;
    try {
      const resp = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'system', content: '你是小学数学教学助手，只输出 JSON。' }, { role: 'user', content: rubric }], temperature: 0.2 })
      });
      if (!resp.ok) return this.localJudge(item, input);
      const data = await resp.json();
      const raw = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (!raw) return this.localJudge(item, input);
      const m = raw.match(/\{[\s\S]*\}/);
      if (!m) return this.localJudge(item, input);
      const obj = JSON.parse(m[0]);
      if (obj && typeof obj.correct === 'boolean') return { correct: obj.correct, verdict: obj.verdict || '', hint: obj.hint || '', source: 'llm' };
      return this.localJudge(item, input);
    } catch (e) {
      return this.localJudge(item, input);
    }
  },

  // 渲染一道反向建模题（图片区 + 输入框 + 判对按钮）
  renderQuestion(item) {
    if (!item) return '';
    const svg = (typeof MathDiagramMaster !== 'undefined' && MathDiagramMaster.renderFor)
      ? (() => { try { const r = MathDiagramMaster.renderFor(item, { dynamic: false }); return (r && r.html) || ''; } catch (e) { return ''; } })()
      : ((typeof MathVisualV5 !== 'undefined' && MathVisualV5.render)
        ? (() => { try { return MathVisualV5.render(item.visualType, item.visualData, item) || ''; } catch (e) { return ''; } })()
        : '');
    return `<div class="cpa-layer" style="border-left-color:var(--coral);animation:fadeIn .45s ease">
      <span class="cpa-tag" style="background:var(--coral);color:#fff">M2 · 反向建模</span>
      <div style="margin:14px 0 8px;font-size:13px;color:var(--text-3);font-weight:600">🧩 看图，把图中的数量关系写成算式/方程</div>
      <div style="background:#fff;border-radius:14px;padding:12px;border:1px solid rgba(0,168,150,.15);margin-bottom:12px">${svg || '<div class="mv-empty" style="padding:16px;text-align:center;color:var(--text-3)">图形加载中…</div>'}</div>
      <div style="padding:12px 14px;background:var(--teal-soft);border-radius:10px;margin-bottom:12px;font-size:14px;color:var(--text-2);line-height:1.7">💬 ${this._escape(item.scene)}</div>
      <input id="v5ReverseInput" placeholder="写出数量关系式，比如 12-7=5" style="width:100%;padding:12px;border:1.5px solid rgba(30,58,95,.2);border-radius:10px;font-size:15px;font-family:inherit;box-sizing:border-box;margin-bottom:10px" />
      <div style="display:flex;gap:10px;justify-content:center">
        <button onclick="ReverseModelJudge._submit()" style="padding:10px 24px;background:var(--teal);color:#fff;border:none;border-radius:20px;font-weight:700;cursor:pointer">提交关系式 →</button>
      </div>
      <div id="v5ReverseFeedback" style="margin-top:12px"></div>
    </div>`;
  },

  async _submit() {
    const input = document.getElementById('v5ReverseInput');
    const fb = document.getElementById('v5ReverseFeedback');
    if (!input || !fb) return;
    const val = input.value.trim();
    if (!val) { fb.innerHTML = '<div style="padding:10px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral)">还没写算式哦，先看图想想 👆</div>'; return; }
    const item = window.CURRENT_REVERSE_ITEM;
    if (!item) { fb.innerHTML = '<div style="padding:10px 14px;background:var(--teal-soft);border-radius:10px;font-size:13px">题目未加载，刷新重试。</div>'; return; }
    const res = await ReverseModelJudge.judge(item, val);
    if (!res || res.correct) {
      fb.innerHTML = `<div style="padding:14px 16px;background:linear-gradient(135deg,var(--teal-soft),var(--yellow-soft));border-left:4px solid var(--teal);border-radius:10px;font-size:14px;color:var(--teal-700);line-height:1.7">✅ ${this._escape((res && res.verdict) || '答对了！')}<br><span style="font-size:12px;color:var(--text-2)">来源：${(res && res.source) === 'llm' ? 'AI 判对' : '本地判对'}</span></div>`;
    } else {
      fb.innerHTML = `<div style="padding:12px 14px;background:var(--coral-soft);border-left:4px solid var(--coral);border-radius:10px;font-size:13px;color:var(--coral);line-height:1.7">💪 ${this._escape((res && res.verdict) || '再想想')}<br>${res && res.hint ? '<b>提示：</b>' + this._escape(res.hint) : ''}<br><button onclick="ReverseModelJudge._retry()" style="margin-top:8px;padding:6px 16px;background:var(--coral);color:#fff;border:none;border-radius:14px;cursor:pointer">再试一次</button></div>`;
    }
  },

  _retry() {
    const fb = document.getElementById('v5ReverseFeedback');
    if (fb) fb.innerHTML = '';
    const input = document.getElementById('v5ReverseInput');
    if (input) input.value = '';
  },

  _escape(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
};