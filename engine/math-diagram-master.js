/* engine/math-diagram-master.js · 课程图母版库（参数化图示母版）
 *
 * 为什么要有这一层（2026-09-10 阶段 2）：
 *   项目里"一道题配一张图"的做法有两个结构性隐患：
 *     ① 路由分叉：静态图路由在 MathVisualV5._resolveType，动态教具路由在
 *        MathManipulative.classify，两条独立 if 链。它们可能给出不同模型家族，
 *        于是孩子先看到条形图、动手时却变成圆饼图（同一道题两套模型，认知断裂）。
 *     ② 图是字面数据：visualData 里写死了本题的数字（甚至写死了答案），
 *        所以换一道变式题，图还是旧图 —— 这就是"静态插图"而非"参数化母版"。
 *
 * 本模块只做三件事，不重复造轮子（底层 SVG 仍由 MathVisualV5 渲染，
 * 可操作教具仍由 MathManipulative 提供）：
 *   1. 统一母版注册表 + 仲裁路由 route()：给出唯一判定，并显式报告两条旧路由的分歧。
 *   2. 参数派生 varsOf()：把一道题归一成 {total, parts[{label,value,unknown}], op, ...}，
 *      图形几何由这些变量派生；未知槽显式标注（结构性防泄漏，不再依赖事后字符串掩码）。
 *   3. 覆盖 + 参数化审计 audit()：用"交换两个部分值后几何是否变化"判定一张图
 *      到底是参数化母版还是静态插图 —— 这是可测的判据，不是感觉。
 *
 * 依赖：window.MathVisualV5 / window.MathManipulative / window.MathDailyBank（均可缺省）
 */
(function (root) {
  'use strict';

  // ================= 基础工具 =================
  function N(x) { var v = Number(x); return isFinite(v) ? v : null; }

  function normParts(vd) {
    if (!vd) return [];
    var arr = (vd.parts && vd.parts.length) ? vd.parts : (vd.bars || []);
    return (arr || []).map(function (p) {
      var v = N(p && (p.val != null ? p.val : p.value));
      return { label: String((p && p.label) || ''), value: v, color: (p && p.color) || null };
    });
  }

  // 显式图形类型（题库里 visualData.type 与 visualType 混用 val/value 两套字段）
  function typeOf(p) {
    var vd = (p && p.visualData) || {};
    return String(vd.type || (p && p.visualType) || '');
  }
  function partsOf(p) { return normParts((p && p.visualData) || null); }

  function opOf(p) {
    var f = String((p && p.formula) || '');
    if (/[×x*]/.test(f)) return '×';
    if (/÷/.test(f)) return '÷';
    if (/-/.test(f)) return '-';
    if (/\+/.test(f)) return '+';
    return '=';
  }

  function answerOf(p) {
    if (!p) return null;
    var a = N(p.answer);
    return a;
  }

  // 未知槽推断：哪个部分的值等于答案，它就是"被问的那个"（显式标 unknown）
  function markUnknown(parts, ans) {
    if (ans == null) return parts;
    var hit = -1;
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].value != null && Math.abs(parts[i].value - ans) < 1e-9) { hit = i; break; }
    }
    parts.forEach(function (p, i) { p.unknown = (i === hit); });
    return parts;
  }

  // ================= 母版注册表 =================
  // stage 取值：
  //   operable 可动手操作（MathManipulative 提供拖拽/点选）
  //   animated 有动效的分步图（MathVisualV5 的 *Step 渲染器）
  //   static   静态 SVG 图
  //   missing  无对应渲染（会退回条形母版兜底）
  // family 是跨渲染器的统一模型家族名，用于两条旧路由的"分歧检测"。
  var MASTERS = [
    {
      id: 'barModel', name: '条形模型（新加坡建模）', icon: '▭', family: 'barModel', cpa: 'P',
      stage: 'operable', source: 'manip', manipMode: 'barDrop', v5Type: 'barModel',
      gradeMin: '1b',
      supports: function (p) {
        var t = typeOf(p);
        // 明确属于别的母版的图形类型，条形母版不抢（否则 numberBond 会被误判成条形）
        if (t && t !== 'bar' && t !== 'barModel') return false;
        var k = String(p.knowledge || '') + ' ' + String(p.question || '');
        if (/条形|Bar|线段图|倍数|平均分|每份|一共|相差/.test(k)) return true;
        var parts = partsOf(p);
        return parts.length >= 2 && parts.length <= 5 && parts.every(function (x) { return x.label && x.value != null; });
      },
      note: '数量关系的通用语言：整体=部分+部分、每份×份数=总数。本项目壁垒。'
    },
    {
      id: 'numberBond', name: '数的分与合', icon: '⑃', family: 'numberBond', cpa: 'P',
      stage: 'animated', source: 'visual', v5Type: 'numberBond', gradeMin: '1a',
      supports: function (p) {
        var vd = p.visualData || {};
        return vd.type === 'numberBond' || p.visualType === 'numberBond';
      },
      note: '把整体拆成部分、把部分合成整体，加减法算理的可视化。'
    },
    {
      id: 'areaModel', name: '点阵 / 面积模型', icon: '⊞', family: 'areaModel', cpa: 'P',
      stage: 'operable', source: 'manip', manipMode: 'array', v5Type: 'areaModel', gradeMin: '2a',
      supports: function (p) {
        var vd = p.visualData || {};
        if (vd.type === 'areaModel' || p.visualType === 'areaModel') return true;
        var f = String(p.formula || '');
        if (!/[×x*]/.test(f)) return false;
        var nums = (f.match(/\d+/g) || []).map(Number);
        return nums.length >= 2 && nums[0] >= 2 && nums[0] <= 10 && nums[1] >= 2 && nums[1] <= 10;
      },
      note: '"几个几"的口算算理：行×列，看得见乘法的意义。'
    },
    {
      id: 'baseTen', name: '十进制位值板', icon: '🧱', family: 'baseTenBlocks', cpa: 'C',
      stage: 'operable', source: 'manip', manipMode: 'placeValue', v5Type: 'baseTenStep', gradeMin: '1a',
      supports: function (p) {
        var k = String(p.knowledge || '') + ' ' + String(p.question || '');
        if (/进位|退位|位值|数位|万以内|千以内|笔算/.test(k)) return true;
        var f = String(p.formula || '');
        if (!/[+\-]/.test(f)) return false;
        var nums = (f.match(/\d+/g) || []).map(Number);
        return nums.some(function (x) { return x >= 100; });
      },
      note: '低位满十要进一、退一当十，动手摆才看得懂。'
    },
    {
      id: 'fractionBar', name: '分数条', icon: '🍫', family: 'fractionModel', cpa: 'P',
      stage: 'operable', source: 'manip', manipMode: 'fraction', v5Type: 'fractionStripStep', gradeMin: '3a',
      supports: function (p) {
        var vd = p.visualData || {};
        if (p.visualType === 'fractionStrip' || vd.type === 'fractionStrip') return true;
        if (vd.den && vd.filled != null) return true;
        return /分数|几分之/.test(String(p.knowledge || '') + String(p.question || ''));
      },
      note: '分母=平均分成几份，分子=取了几份，同一整体才可比。'
    },
    {
      id: 'numberLine', name: '数线', icon: '⊸', family: 'numberLine', cpa: 'P',
      stage: 'static', source: 'visual', v5Type: 'numberLineStep', gradeMin: '1a',
      supports: function (p) {
        var vd = p.visualData || {};
        return vd.type === 'numberLine' || p.visualType === 'numberLine';
      },
      note: '数轴上"越往右越大"，认识数的大小与近似。'
    },
    {
      id: 'geometry', name: '图形与测量', icon: '📐', family: 'geometryModel', cpa: 'P',
      stage: 'static', source: 'visual', v5Type: 'geometryStep', gradeMin: '2a',
      supports: function (p) {
        var vd = p.visualData || {};
        if (vd.shape) return true;
        return /周长|面积|图形|三角形|长方形|正方形|平行四边形|梯形|圆|体积|表面积|展开图|割补/.test(String(p.knowledge || ''));
      },
      note: '图形的边、角、周长、面积，数形结合的核心。'
    },
    {
      id: 'venn', name: '集合（韦恩图）', icon: '◎', family: 'vennDiagram', cpa: 'P',
      stage: 'operable', source: 'visual', v5Type: 'vennDiagram', gradeMin: '3a',
      supports: function (p) {
        return /集合|韦恩|重叠|既.*又/.test(String(p.knowledge || '') + String(p.question || ''));
      },
      note: '重叠部分只能数一次，集合思想的启蒙。'
    },
    {
      id: 'balance', name: '天平（找次品 / 等量）', icon: '⚖', family: 'balanceDecision', cpa: 'C',
      stage: 'animated', source: 'visual', v5Type: 'balanceDecision', gradeMin: '3b',
      supports: function (p) {
        var vd = p.visualData || {};
        return vd.shape === 'balance' || /找次品|天平|等量|吨/.test(String(p.knowledge || ''));
      },
      note: '平衡 = 两边相等；三分法找次品的最优策略。'
    },
    {
      id: 'ruler', name: '尺子与长度', icon: '📏', family: 'measure', cpa: 'C',
      stage: 'animated', source: 'visual', v5Type: 'rulerMagnifier', gradeMin: '1a',
      supports: function (p) {
        return /毫米|分米|千米|厘米|米的认识|长度单位/.test(String(p.knowledge || ''));
      },
      note: '长度单位与测量的直观参照。'
    },
    {
      id: 'circleArea', name: '圆的面积（割补）', icon: '◕', family: 'geometryModel', cpa: 'P',
      stage: 'animated', source: 'visual', v5Type: 'circleArea', gradeMin: '6a',
      supports: function (p) { return /圆的面积|圆面积/.test(String(p.knowledge || '')); },
      note: '16 等分拼成近似长方形，推导 S=πr²。'
    }
  ];

  var BY_ID = {};
  MASTERS.forEach(function (m, i) { m.order = i; BY_ID[m.id] = m; });

  // ================= 变量派生（参数化核心） =================
  // 把一个 problem 归一成母版可直接消费的变量；图形几何只依赖这些变量。
  function varsOf(p) {
    var vd = (p && p.visualData) || {};
    var ans = answerOf(p);
    var parts = markUnknown(normParts(vd), ans);
    var total = N(vd.total != null ? vd.total : vd.value);
    if (total == null && parts.length) {
      var s = 0, ok = true;
      parts.forEach(function (x) { if (x.value == null) ok = false; else s += x.value; });
      if (ok) total = s;
    }
    var f = String((p && p.formula) || '');
    var nums = (f.match(/\d+(?:\.\d+)?/g) || []).map(Number);
    return {
      total: total,
      parts: parts,
      unknownSlot: parts.findIndex(function (x) { return x.unknown; }),
      op: opOf(p),
      operands: nums,
      rows: N(vd.rows), cols: N(vd.cols),
      den: N(vd.den), filled: N(vd.filled),
      shape: vd.shape || null,
      unit: vd.unit || null,
      answer: ans
    };
  }

  // ================= 路由（统一仲裁 + 分歧报告） =================
  function v5RendererOf(p) {
    try {
      if (root.MathVisualV5 && root.MathVisualV5._resolveType) {
        return root.MathVisualV5._resolveType(p.visualType, p.visualData, p);
      }
    } catch (e) {}
    return null;
  }
  function manipModeOf(p) {
    try {
      if (root.MathManipulative && root.MathManipulative.classify) return root.MathManipulative.classify(p);
    } catch (e) {}
    return null;
  }

  // 把两条旧路由的输出折算成统一 family，用于分歧检测
  function familyFromV5(renderer) {
    if (!renderer) return null;
    if (root.MathVisualV5 && root.MathVisualV5._getModelFamilyFromStep) {
      var f = root.MathVisualV5._getModelFamilyFromStep(renderer);
      if (f) return f;
    }
    if (/bar/i.test(renderer)) return 'barModel';
    if (/fraction/i.test(renderer)) return 'fractionModel';
    if (/area/i.test(renderer)) return 'areaModel';
    if (/baseTen/i.test(renderer)) return 'baseTenBlocks';
    if (/numberLine/i.test(renderer)) return 'numberLine';
    if (/numberBond|bond/i.test(renderer)) return 'numberBond';
    if (/geometry|circle|cutPaste|unroll/i.test(renderer)) return 'geometryModel';
    if (/venn/i.test(renderer)) return 'vennDiagram';
    if (/balance/i.test(renderer)) return 'balanceDecision';
    if (/ruler|mapZoom|bodyRuler/i.test(renderer)) return 'measure';
    return null;
  }
  function familyFromManip(mode) {
    return ({
      barDrop: 'barModel', share: 'barModel', fraction: 'fractionModel',
      array: 'areaModel', placeValue: 'baseTenBlocks', scene: 'barModel'
    })[mode] || null;
  }

  function route(p) {
    if (!p) return { master: null, stage: 'missing', source: 'none', reason: 'no-problem' };
    var hit = null;
    for (var i = 0; i < MASTERS.length; i++) {
      var m = MASTERS[i];
      try { if (m.supports(p)) { hit = m; break; } } catch (e) {}
    }
    var v5 = v5RendererOf(p);
    var mp = manipModeOf(p);
    var famV5 = familyFromV5(v5);
    var famMp = familyFromManip(mp);

    if (!hit) {
      // 没有任何母版命中 → 退回条形母版兜底（绝不让孩子看到空白图）
      hit = BY_ID.barModel;
      return {
        master: hit, stage: 'static', source: 'generic-fallback', fallback: true,
        v5Renderer: v5, manipMode: mp,
        conflict: !!(famV5 && famMp && famV5 !== famMp),
        reason: 'no-master-matched→barModel-fallback'
      };
    }
    return {
      master: hit, stage: hit.stage, source: hit.source, fallback: false,
      v5Renderer: v5, manipMode: mp,
      conflict: !!(famV5 && famMp && famV5 !== famMp),
      reason: 'matched:' + hit.id
    };
  }

  // ================= 渲染入口 =================
  // opts: { dynamic:true 允许可操作教具 | false 只要静态图 }
  function renderFor(p, opts) {
    opts = opts || {};
    var r = route(p);
    if (!p) return { html: '', master: r.master, stage: 'missing', source: 'none' };
    var dynamic = opts.dynamic !== false;
    var html = '';

    // 1) 可操作教具优先（但只在做题后/允许动态时；作答前由调用方自己控制 renderSafe）
    if (dynamic && r.master && r.master.source === 'manip' && r.master.stage === 'operable' && root.MathManipulative) {
      try {
        html = (opts.safe && root.MathManipulative.renderSafe)
          ? root.MathManipulative.renderSafe(p)
          : root.MathManipulative.render(p);
      } catch (e) { html = ''; }
    }
    // 2) 静态/动效 SVG
    if (!html && root.MathVisualV5 && root.MathVisualV5.render) {
      try { html = root.MathVisualV5.render(p.visualType, p.visualData, p) || ''; } catch (e) { html = ''; }
    }
    // 3) 仍为空 → 万能兜底：用参数派生的条形母版自己画（保证不漏空白）
    var usedFallback = false;
    if (!html) { html = renderGenericBar(varsOf(p), p); usedFallback = true; }

    return {
      html: html, master: r.master, stage: r.stage, source: r.source,
      conflict: r.conflict, fallback: usedFallback, vars: varsOf(p)
    };
  }

  // 万能兜底母版：不依赖 visualData 是否规范，直接用变量画一条整体 + 若干部分
  function renderGenericBar(v, p) {
    var parts = (v.parts && v.parts.length) ? v.parts : [];
    if (!parts.length || v.total == null) return '';
    var W = 460, H = 74, pad = 10;
    var segs = '';
    var x = pad;
    var inner = W - pad * 2;
    var knownSum = parts.reduce(function (s, pp) { return s + (pp.unknown ? 0 : (pp.value || 0)); }, 0);
    var useTotal = (v.total && v.total >= knownSum) ? v.total : (knownSum || 1);
    parts.forEach(function (pp, i) {
      var ratio = (pp.unknown ? 0 : (pp.value || 0)) / (useTotal || 1);
      var w = Math.max(24, Math.round(inner * ratio));
      if (i === parts.length - 1) w = Math.max(w, W - pad - x);
      var fill = pp.color || ['#2570E8', '#F5B800', '#FB923C', '#E8A0BF'][i % 4];
      segs += '<rect x="' + x + '" y="' + pad + '" width="' + w + '" height="' + (H - pad * 2) + '" rx="8" fill="' + fill + '" opacity="' + (pp.unknown ? 0.22 : 0.92) + '"/>' +
        '<text x="' + (x + w / 2) + '" y="' + (H / 2 + 6) + '" text-anchor="middle" font-size="16" font-weight="800" fill="' + (pp.unknown ? '#5A6B82' : '#ffffff') + '">' +
        (pp.unknown ? '?' : (pp.value != null ? pp.value : '')) + '</text>' +
        (pp.label ? '<text x="' + (x + w / 2) + '" y="' + (H - 6) + '" text-anchor="middle" font-size="11" fill="#12263F">' + pp.label + '</text>' : '');
      x += w;
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="max-width:' + W + 'px" role="img" aria-label="条形模型">' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="12" fill="#F4F8FD"/>' + segs + '</svg>';
  }

  // ================= 参数化判定（可测判据） =================
  // 判据：把两个"已知部分"的值互换后，若几何签名不变 → 这张图不随数字变 = 静态插图。
  // （交换而非缩放：避免触碰 _resolveType 里的数值阈值判断，得到干净结论。）
  function geoSignature(html) {
    return String(html || '')
      .replace(/<text[\s\S]*?<\/text>/g, '<text/>')   // 去掉文字内容
      .replace(/\d+(?:\.\d+)?/g, '#');                // 去掉坐标/数值
  }

  function mutateSwapParts(p) {
    var vd = p.visualData;
    if (!vd) return null;
    var key = (vd.parts && vd.parts.length) ? 'parts' : ((vd.bars && vd.bars.length) ? 'bars' : null);
    if (!key) return null;
    var arr = vd[key];
    // 题库混用两种字段名：value（28 处）/ val（82 处）。读写都必须认同一套，
    // 否则"参数化判定"会把 val 型数据全判成不可测（2026-09-10 踩过）。
    function fieldOf(x) { return (x && x.val != null) ? 'val' : ((x && x.value != null) ? 'value' : null); }
    var idx = [];
    arr.forEach(function (x, i) { if (fieldOf(x) && N(x[fieldOf(x)]) != null) idx.push(i); });
    if (idx.length < 2) return null;
    var clone = JSON.parse(JSON.stringify(p));
    var a = idx[0], b = idx[idx.length - 1];
    var fa = fieldOf(clone.visualData[key][a]);
    var fb = fieldOf(clone.visualData[key][b]);
    var tmp = clone.visualData[key][a][fa];
    clone.visualData[key][a][fa] = clone.visualData[key][b][fb];
    clone.visualData[key][b][fb] = tmp;
    return clone;
  }

  function checkParametric(p) {
    var mut = mutateSwapParts(p);
    if (!mut) return { tested: false, parametric: null, reason: 'no-swappable-parts' };
    var a, b;
    try { a = renderFor(p, { dynamic: false }).html; } catch (e) { return { tested: false, parametric: null, reason: 'render-error' }; }
    try { b = renderFor(mut, { dynamic: false }).html; } catch (e) { return { tested: false, parametric: null, reason: 'render-error' }; }
    if (!a || !b) return { tested: false, parametric: null, reason: 'empty-render' };
    var same = geoSignature(a) === geoSignature(b);
    return { tested: true, parametric: !same, reason: same ? 'geometry-invariant-to-values' : 'geometry-follows-values' };
  }

  // ================= 覆盖审计 =================
  // semKeys 省略时审计所有已加载的册。
  function audit(semKeys) {
    var G = root.MATH_BY_GRADE || {};
    var keys = semKeys && semKeys.length ? semKeys.slice() : Object.keys(G);
    var bank = root.MathDailyBank;
    var out = {
      perSem: {}, totals: { problems: 0, tested: 0, parametric: 0 },
      byMaster: {}, byStage: {}, missing: [], nonParametric: [], conflicts: [], fallback: []
    };
    keys.forEach(function (sem) {
      var list = null;
      try { list = bank && bank.build ? (bank.build(sem).list || []) : ((G[sem] && G[sem].problems) || []); } catch (e) { list = (G[sem] && G[sem].problems) || []; }
      if (!list || !list.length) return;
      var stat = { total: list.length, tested: 0, parametric: 0, byMaster: {}, byStage: {} };
      list.forEach(function (p) {
        out.totals.problems++;
        var r = route(p);
        var mid = r.master ? r.master.id : '(none)';
        out.byMaster[mid] = (out.byMaster[mid] || 0) + 1;
        stat.byMaster[mid] = (stat.byMaster[mid] || 0) + 1;
        out.byStage[r.stage] = (out.byStage[r.stage] || 0) + 1;
        stat.byStage[r.stage] = (stat.byStage[r.stage] || 0) + 1;
        if (r.conflict) out.conflicts.push({ sem: sem, kp: p.knowledge, v5: r.v5Renderer, manip: r.manipMode });
        // 只对"非可操作"的图做参数化判定（可操作教具的参数化由拖拽行为本身保证）
        if (r.stage !== 'operable' && r.stage !== 'missing') {
          var cp = checkParametric(p);
          if (cp.tested) {
            out.totals.tested++; stat.tested++;
            if (cp.parametric) { out.totals.parametric++; stat.parametric++; }
            else out.nonParametric.push({ sem: sem, kp: p.knowledge, master: mid, question: String(p.question || '').slice(0, 40), reason: cp.reason });
          }
        }
      });
      out.perSem[sem] = stat;
    });
    return out;
  }

  // ================= 对外 API =================
  root.MathDiagramMaster = {
    MASTERS: MASTERS,
    byId: function (id) { return BY_ID[id] || null; },
    list: function () {
      return MASTERS.map(function (m) {
        return { id: m.id, name: m.name, icon: m.icon, family: m.family, cpa: m.cpa, stage: m.stage, gradeMin: m.gradeMin, note: m.note };
      });
    },
    varsOf: varsOf,
    route: route,
    renderFor: renderFor,
    renderGeneric: renderGenericBar,
    checkParametric: checkParametric,
    geoSignature: geoSignature,
    audit: audit
  };
})(typeof window !== 'undefined' ? window : globalThis);
