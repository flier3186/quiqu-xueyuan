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
  // ---- 旧路由读取（仅用于"教材对齐的静态语义"与历史分歧取证，不做最终判定）----
  // 必须显式调用 *Legacy 版本：v5/manip 的委托版会回调本模块，直接调会递归。
  function legacyV5RendererOf(p) {
    var M = root.MathDiagramMaster;
    try {
      if (M) M.__resolving = true;
      var mv = root.MathVisualV5;
      if (mv && mv._resolveTypeLegacy) return mv._resolveTypeLegacy(p.visualType, p.visualData, p);
      if (mv && mv._resolveType) return mv._resolveType(p.visualType, p.visualData, p);
    } catch (e) {} finally { if (M) M.__resolving = false; }
    return null;
  }
  function legacyManipModeOf(p) {
    try {
      var mm = root.MathManipulative;
      if (mm && mm.classifyLegacy) return mm.classifyLegacy(p);
      if (mm && mm.classify) return mm.classify(p);
    } catch (e) {}
    return null;
  }

  // 把静态渲染器 / 教具模式折算成统一 family
  function familyFromV5(renderer) {
    if (!renderer) return null;
    if (root.MathVisualV5 && root.MathVisualV5._getModelFamilyFromStep) {
      var f = root.MathVisualV5._getModelFamilyFromStep(renderer);
      if (f) return f;
    }
    if (/dotArray|array/i.test(renderer)) return 'areaModel';
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
  // share（平均分到盘子）属于「每份×份数」家族；barDrop 属于「整体=部分+部分」家族
  function familyFromManip(mode) {
    return ({
      barDrop: 'barModel', share: 'areaModel', fraction: 'fractionModel',
      array: 'areaModel', placeValue: 'baseTenBlocks', scene: 'barModel'
    })[mode] || null;
  }

  // 家族 → 母版。优先精确命中渲染器（circleArea / geometry 同族时才不会串号）
  function masterForRenderer(fam, renderer) {
    var byFam = null;
    for (var i = 0; i < MASTERS.length; i++) {
      var m = MASTERS[i];
      if (renderer && m.v5Type === renderer) return m;
      if (fam && m.family === fam && !byFam) byFam = m;
    }
    return byFam;
  }
  // 家族 → 教具模式；家族已知但没有可操作实现时返回 'none'（而不是 null，null 表示无法判定）
  function manipModeForFamily(fam) {
    if (!fam) return null;
    for (var i = 0; i < MASTERS.length; i++) {
      var m = MASTERS[i];
      if (m.family === fam) return (m.source === 'manip' && m.manipMode) ? m.manipMode : 'none';
    }
    return null;
  }

  // ================= 唯一仲裁（P0-2）=================
  // 判定顺序：
  //   ① 以"教材对齐的静态图语义"定家族 —— 保证人工校准过的图形不被改写；
  //   ② 家族 → 母版；家族没有对应母版时才退回 supports() 关键词匹配。
  // 静态渲染器与动手教具都从同一家族派生，两条旧路由因此不可能再给出两套模型。
  function pick(p) {
    if (!p) return null;
    var legacy = legacyV5RendererOf(p);
    var m = masterForRenderer(familyFromV5(legacy), legacy);
    if (m) return m;
    for (var i = 0; i < MASTERS.length; i++) {
      try { if (MASTERS[i].supports(p)) return MASTERS[i]; } catch (e) {}
    }
    return null;
  }

  function familyOf(p) { var m = pick(p); return m ? m.family : null; }
  function v5RendererFor(p) { return p ? legacyV5RendererOf(p) : null; }

  function manipModeFor(p) {
    if (!p) return null;
    var hit = pick(p);
    if (!hit) return null;
    var fam = hit.family;
    // 除法的动手工具是"平均分到盘子"，与点阵同属「每份×份数」家族，语义一致
    if (fam === 'areaModel' && /÷/.test(String(p.formula || ''))) return 'share';
    return manipModeForFamily(fam);
  }

  // 历史取证：两条旧路由原本是否分歧（改造前全册 170 处）
  function legacyConflictOf(p) {
    var fv = familyFromV5(legacyV5RendererOf(p));
    var fm = familyFromManip(legacyManipModeOf(p));
    return !!(fv && fm && fv !== fm);
  }

  function route(p) {
    if (!p) return {
      master: null, family: null, stage: 'missing', source: 'none',
      v5Renderer: null, manipMode: 'none', fallback: false, conflict: false,
      legacyConflict: false, reason: 'no-problem'
    };
    var hit = pick(p);
    var v5 = legacyV5RendererOf(p);
    var mode = manipModeFor(p) || 'none';
    var fm = familyFromManip(mode);
    // 单一仲裁后 conflict 恒为 false；保留该字段是为了让审计脚本能断言"分歧为 0"
    var base = {
      v5Renderer: v5, manipMode: mode,
      conflict: !!(hit && fm && fm !== hit.family),
      legacyConflict: legacyConflictOf(p)
    };
    if (!hit) {
      var fb = BY_ID.barModel;
      return Object.assign(base, {
        master: fb, family: fb.family, stage: 'static', source: 'generic-fallback',
        fallback: true, reason: 'no-master-matched→barModel-fallback'
      });
    }
    return Object.assign(base, {
      master: hit, family: hit.family, stage: hit.stage, source: hit.source,
      fallback: false, reason: 'matched:' + hit.id
    });
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
  // 几何签名：用于判断"图是否随数值变化"。
  // ⚠ 2026-09-10 修正：旧版把**所有数字都替换成 '#'**，导致坐标/宽度/半径全被抹平，
  // 于是任何图形都被判成"几何不随数值变"——之前报告的"参数化率 0%"有一部分是这个 bug 造成的。
  // 现在只去掉 <text> 的文字内容，保留数字（量化到 1 位小数以吸收浮点误差）。
  function geoSignature(html) {
    return String(html || '')
      .replace(/(<text\b[^>]*>)[\s\S]*?(<\/text>)/g, '$1$2')   // 文字内容不是几何
      .replace(/-?\d+(?:\.\d+)?/g, function (n) { return (Math.round(Number(n) * 10) / 10).toFixed(1); })
      .replace(/\s+/g, ' ')
      .trim();
  }

  function mutateSwapParts(p) {
    var vd = p.visualData;
    if (!vd) return null;
    var key = (vd.parts && vd.parts.length) ? 'parts' : ((vd.bars && vd.bars.length) ? 'bars' : null);
    if (!key) {
      // 没有 parts/bars 的图（点阵 / 面积 / 几何）：交换行列参数也能改变几何。
      // 注意要把 a/b 与 rows/cols 两对**都**换掉——不同渲染器读的是不同的一对，
      // 只换一对会出现"数据换了、图没变"的假阴性（2026-09-10 实测踩到）。
      var pairs = [['a', 'b'], ['rows', 'cols']];
      var clone = JSON.parse(JSON.stringify(p));
      var swapped = false;
      pairs.forEach(function (pr) {
        if (N(clone.visualData[pr[0]]) != null && N(clone.visualData[pr[1]]) != null) {
          var t = clone.visualData[pr[0]];
          clone.visualData[pr[0]] = clone.visualData[pr[1]];
          clone.visualData[pr[1]] = t;
          swapped = true;
        }
      });
      return swapped ? clone : null;
    }
    var arr = vd[key];
    // 题库混用两种字段名：value（28 处）/ val（82 处）。读写都必须认同一套，
    // 否则"参数化判定"会把 val 型数据全判成不可测（2026-09-10 踩过）。
    function fieldOf(x) { return (x && x.val != null) ? 'val' : ((x && x.value != null) ? 'value' : null); }
    var idx = [];
    arr.forEach(function (x, i) { if (fieldOf(x) && N(x[fieldOf(x)]) != null) idx.push(i); });
    if (idx.length < 2) return null;
    var clone = JSON.parse(JSON.stringify(p));
    var a = idx[0], b = idx[idx.length - 1];
    var fa2 = fieldOf(clone.visualData[key][a]);
    var fb2 = fieldOf(clone.visualData[key][b]);
    var tmp = clone.visualData[key][a][fa2];
    clone.visualData[key][a][fa2] = clone.visualData[key][b][fb2];
    clone.visualData[key][b][fb2] = tmp;
    return clone;
  }

  // 参数化判定：
  //   valueBound  —— 把数值换掉后，整张图（含文字）是否变化。false = 图完全无视数据（硬编码插图）
  //   parametric  —— 更严格：连**几何**都随数值变（坐标/宽度/半径变化）
  // 两个都测：多数"分与合"类母版布局是规范化的（几何天然对称），但数值必须真的来自题目。
  function checkParametric(p) {
    var mut = mutateSwapParts(p);
    if (!mut) return { tested: false, parametric: null, valueBound: null, reason: 'no-swappable-parts' };
    // 两个待交换的值相等（如 5×5、8×8）时，交换是空操作 → 无法判定，不能算作"硬编码"
    try {
      if (JSON.stringify(p.visualData) === JSON.stringify(mut.visualData)) {
        return { tested: false, parametric: null, valueBound: null, reason: 'mutation-noop-values-equal' };
      }
    } catch (e) {}
    var a, b;
    try { a = renderFor(p, { dynamic: false }).html; } catch (e) { return { tested: false, parametric: null, valueBound: null, reason: 'render-error' }; }
    try { b = renderFor(mut, { dynamic: false }).html; } catch (e) { return { tested: false, parametric: null, valueBound: null, reason: 'render-error' }; }
    if (!a || !b) return { tested: false, parametric: null, valueBound: null, reason: 'empty-render' };
    var valueBound = (a !== b);
    var sameGeo = geoSignature(a) === geoSignature(b);
    return {
      tested: true,
      parametric: !sameGeo,
      valueBound: valueBound,
      reason: sameGeo ? 'geometry-invariant-to-values' : 'geometry-follows-values'
    };
  }

  // ================= 覆盖审计 =================
  // semKeys 省略时审计所有已加载的册。
  function audit(semKeys) {
    var G = root.MATH_BY_GRADE || {};
    var keys = semKeys && semKeys.length ? semKeys.slice() : Object.keys(G);
    var bank = root.MathDailyBank;
    var out = {
      perSem: {}, totals: { problems: 0, tested: 0, parametric: 0, valueBound: 0, legacyConflicts: 0 },
      byMaster: {}, byStage: {}, byMasterParametric: {},
      missing: [], nonParametric: [], hardcoded: [], conflicts: [], legacyConflicts: [], fallback: []
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
        if (r.conflict) out.conflicts.push({ sem: sem, kp: p.knowledge, master: mid, v5: r.v5Renderer, manip: r.manipMode });
        // 历史取证：改造前两条旧路由的分歧（改造后应只剩这个计数，conflicts 必须为 0）
        if (r.legacyConflict) {
          out.totals.legacyConflicts++;
          out.legacyConflicts.push({ sem: sem, kp: p.knowledge, master: mid, v5: r.v5Renderer, manip: legacyManipModeOf(p) });
        }
        // 参数化判定：对**所有**图都做。静态图才是作答前孩子真正看到的东西，
        // 所以"图是否随数值变"对每一题都有意义（可操作教具作答后才出现）。
        if (r.stage !== 'missing') {
          var cp = checkParametric(p);
          if (cp.tested) {
            out.totals.tested++; stat.tested++;
            if (cp.parametric) { out.totals.parametric++; stat.parametric++; }
            if (cp.valueBound) { out.totals.valueBound++; }
            else out.hardcoded.push({ sem: sem, kp: p.knowledge, master: mid, question: String(p.question || '').slice(0, 40) });
            var mp = out.byMasterParametric[mid] = out.byMasterParametric[mid] || { tested: 0, parametric: 0, valueBound: 0 };
            mp.tested++; if (cp.parametric) mp.parametric++; if (cp.valueBound) mp.valueBound++;
            if (!cp.parametric) out.nonParametric.push({ sem: sem, kp: p.knowledge, master: mid, question: String(p.question || '').slice(0, 40), reason: cp.reason });
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
    // 唯一仲裁（P0-2）：所有渲染/教具调用方都应经由此处取判定
    pick: pick,
    familyOf: familyOf,
    v5RendererFor: v5RendererFor,
    manipModeFor: manipModeFor,
    legacyConflictOf: legacyConflictOf,
    // 兼容：旧名保留，语义已改为"旧路由读取"（仅取证用）
    v5RendererOf: legacyV5RendererOf,
    manipModeOf: legacyManipModeOf,
    route: route,
    renderFor: renderFor,
    renderGeneric: renderGenericBar,
    checkParametric: checkParametric,
    geoSignature: geoSignature,
    audit: audit
  };
})(typeof window !== 'undefined' ? window : globalThis);
