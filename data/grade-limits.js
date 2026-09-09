// data/grade-limits.js · 奇趣学园 年级数值边界表
// 借鉴 plasmicshree/math-quiz-website 的「按年级数字边界」思路：
//   每个年级显式声明“允许的数值范围”，不靠感觉。
// 结构可扩展到任意年级（key 为年级代号，如 "3a" / "2b" / "4a"）。
// 兼容浏览器(window) 与 node(require)。
//
// 2026-09 修订：原表只有 3a，导致 2–6 年级共用三年级边界（内核硬编码 '3a'）。
//   现补全 2a–6b 全 10 册，依据人教版（2024 版）各册知识点给出数值上限。
(function (root) {
  'use strict';

  // 单个运算的边界声明（所有字段均可被题型级覆盖）
  //   operandMin/Max : 操作数（参与运算的每一个数）允许范围
  //   resultMin/Max  : 最终结果允许范围
  //   allowNegative  : 结果是否允许为负
  //   allowRemainder : 除法是否允许有余数（true 时除法可非整除）
  //   decimals       : 是否允许小数
  //   levelScale     : 难度档位对 operandMax 的放大系数 [L1,L2,L3]，仅作参考提示
  function op(o) {
    return Object.assign({
      operandMin: 0,
      operandMax: 100,
      resultMin: 0,
      resultMax: 10000,
      allowNegative: false,
      allowRemainder: false,
      decimals: false,
      levelScale: [1, 1.4, 1.8]
    }, o);
  }

  // ================= 2a / 2b（二年级，2025 秋启用 2024 版） =================
  // 二上：1~6 表内乘除法、厘米和米、分类与整理、校园小导游、身体上的尺子
  // 二下：7~9 表内乘除法、万以内数的认识、万以内加减法、时间在哪里、数量间的乘除关系
  var G2A = {
    label: '二年级上册',
    operations: {
      add: op({ operandMin: 2, operandMax: 99, resultMax: 100 }),
      sub: op({ operandMin: 2, operandMax: 99, resultMin: 0, resultMax: 99 }),
      mul: op({ operandMin: 2, operandMax: 6, resultMax: 36 }),      // 1~6 表内乘法
      div: op({ operandMin: 2, operandMax: 36, resultMin: 1, resultMax: 6 })
    },
    wordProblemMax: 60,
    time: { hourMax: 12, minuteMax: 59, secondMax: 59 },
    length: { unit: 'cm', max: 100 },
    topics: {
      'add-basic':   { operandMin: 2, operandMax: 99, resultMax: 100 },
      'sub-basic':   { operandMin: 2, operandMax: 99, resultMin: 0, resultMax: 99 },
      'mul-basic':   { operandMin: 2, operandMax: 6, mulByMax: 6, resultMax: 36 },
      'div-basic':   { operandMin: 2, operandMax: 36, divByMax: 6, resultMin: 1, resultMax: 6 },
      'compare-more':{ countMin: 3, countMax: 40, deltaMin: 2, deltaMax: 20 },
      'compare-less':{ countMin: 3, countMax: 40, deltaMin: 2, deltaMax: 20 }
    }
  };

  var G2B = {
    label: '二年级下册',
    operations: {
      add: op({ operandMin: 10, operandMax: 9999, resultMax: 10000 }),
      sub: op({ operandMin: 10, operandMax: 9999, resultMin: 0, resultMax: 9999 }),
      mul: op({ operandMin: 2, operandMax: 9, resultMax: 81 }),        // 7~9 表内乘法补齐
      div: op({ operandMin: 2, operandMax: 81, resultMin: 1, resultMax: 9 }),
      rem: op({ operandMin: 2, operandMax: 89, resultMin: 1, resultMax: 9, allowRemainder: true })
    },
    wordProblemMax: 200,
    time: { hourMax: 24, minuteMax: 59, secondMax: 59, carryToHour: true },
    topics: {
      'add-basic':   { operandMin: 10, operandMax: 999, resultMax: 1998 },
      'add-carry':   { operandMin: 10, operandMax: 999, resultMax: 1998 },
      'sub-basic':   { operandMin: 10, operandMax: 999, resultMin: 1, resultMax: 989 },
      'sub-borrow':  { operandMin: 20, operandMax: 999, resultMin: 1, resultMax: 979 },
      'mul-basic':   { operandMin: 2, operandMax: 9, mulByMax: 9, resultMax: 81 },
      'div-basic':   { operandMin: 2, operandMax: 81, divByMax: 9, resultMin: 1, resultMax: 9 },
      'div-remainder': { operandMin: 2, operandMax: 89, divByMax: 9, allowRemainder: true, resultMax: 9 },
      'time-sec':    { secMin: 5, secMax: 58 },
      'compare-more':{ countMin: 5, countMax: 60, deltaMin: 2, deltaMax: 30 },
      'compare-less':{ countMin: 5, countMax: 60, deltaMin: 2, deltaMax: 30 }
    }
  };

  // ================= 3a / 3b（三年级，2025 秋启用 2024 版） =================
  var G3A = {
    label: '三年级上册',
    operations: {
      add: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 10000 }),
      sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 10000 }),
      // 多位数 × 一位数（3A 重点）：被乘数可到 9999，乘数 2~9
      mul: op({ operandMin: 2, operandMax: 9999, resultMin: 0, resultMax: 89991 }),
      // 表内除法：被除数 ≤ 81，除数 2~9，强制整除
      div: op({ operandMin: 2, operandMax: 81, resultMin: 1, resultMax: 81 })
    },
    wordProblemMax: 120,
    time: { hourMax: 12, minuteMax: 59, secondMax: 59, carryToHour: true },
    fraction: { denominators: [2, 4, 8], numeratorMaxByDen: { 2: 1, 4: 3, 8: 7 } },
    geometry: { sideMin: 1, sideMax: 99 },
    topics: {
      'add-basic':   { operandMin: 2, operandMax: 100, resultMax: 200 },
      'add-carry':   { operandMin: 10, operandMax: 999, resultMax: 1998 },
      'sub-basic':   { operandMin: 5, operandMax: 100, resultMin: 1, resultMax: 95, allowNegative: false },
      'sub-borrow':  { operandMin: 20, operandMax: 999, resultMin: 1, resultMax: 979 },
      'mul-basic':   { operandMin: 2, operandMax: 99, mulByMax: 9, resultMax: 891 },
      'mul-3digit':  { operandMin: 100, operandMax: 999, mulByMax: 9, resultMax: 8991 },
      'div-basic':   { operandMin: 2, operandMax: 81, divByMax: 9, resultMin: 1, resultMax: 81 },
      'div-remainder': { operandMin: 2, operandMax: 99, divByMax: 9, allowRemainder: true, resultMax: 99 },
      // 修复：sumMax 必须显著大于 operandMax × mulByMax 的上界（99×9=891），
      // 否则 c 只能取 prod+1，答案恒为 1（旧值 200 导致 100% 答案是 1）。
      'fill-missing':{ operandMin: 2, operandMax: 99, mulByMax: 9, sumMax: 1200 },
      'compare-more':{ countMin: 3, countMax: 60, deltaMin: 2, deltaMax: 40 },
      'compare-less':{ countMin: 3, countMax: 60, deltaMin: 2, deltaMax: 40 },
      'time-add':    { baseHourMin: 1, baseHourMax: 11, baseMinMin: 0, baseMinMax: 55, addMinMin: 5, addMinMax: 55 },
      'time-sec':    { secMin: 5, secMax: 58 },
      'inclusion':   { setMin: 5, setMax: 40, overlapMin: 1, overlapMax: 15 },
      'perimeter':   { sideMin: 1, sideMax: 99 },
      'fraction-same': { den: [2, 4], numMax: 3 }
    }
  };

  var G3B = {
    label: '三年级下册',
    // 三下：除数是一位数的除法、面积（长方形/正方形周长与面积）、年月日、小数的初步认识
    operations: {
      add: op({ operandMin: 0, operandMax: 9999, resultMax: 10000, decimals: true }),
      sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 10000, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 99, resultMax: 9801 }),   // 新版删两位数×两位数，只到整十数口算
      div: op({ operandMin: 2, operandMax: 999, resultMin: 1, resultMax: 999, allowRemainder: true })
    },
    wordProblemMax: 500,
    geometry: { sideMin: 1, sideMax: 99 },
    decimal: { max: 99.9, places: 1 },
    topics: {
      'add-basic':   { operandMin: 10, operandMax: 999, resultMax: 1998 },
      'sub-basic':   { operandMin: 10, operandMax: 999, resultMin: 1, resultMax: 989 },
      'mul-basic':   { operandMin: 2, operandMax: 99, mulByMax: 9, resultMax: 891 },
      'div-basic':   { operandMin: 2, operandMax: 999, divByMax: 9, resultMin: 1, resultMax: 111 },
      'div-remainder': { operandMin: 2, operandMax: 999, divByMax: 9, allowRemainder: true, resultMax: 111 },
      'perimeter':   { sideMin: 1, sideMax: 99 },
      'fill-missing':{ operandMin: 2, operandMax: 99, mulByMax: 9, sumMax: 1200 },
      'compare-more':{ countMin: 5, countMax: 99, deltaMin: 2, deltaMax: 60 },
      'compare-less':{ countMin: 5, countMax: 99, deltaMin: 2, deltaMax: 60 }
    }
  };

  // ================= 4a / 4b（四年级，2026 秋启用 2024 版） =================
  var G4A = {
    label: '四年级上册',
    // 四上：万以上数的认识、多位数乘两位数（106×63）、加法模型和乘法模型、条形统计图
    operations: {
      add: op({ operandMin: 100, operandMax: 99999, resultMax: 199998 }),
      sub: op({ operandMin: 100, operandMax: 99999, resultMin: 0, resultMax: 99999 }),
      mul: op({ operandMin: 10, operandMax: 999, resultMax: 998001 }),   // 三位数×两位数
      div: op({ operandMin: 2, operandMax: 999, resultMin: 1, resultMax: 999 })
    },
    wordProblemMax: 100000,
    geometry: { sideMin: 1, sideMax: 999 },
    topics: {
      'add-basic':   { operandMin: 100, operandMax: 9999, resultMax: 19998 },
      'sub-basic':   { operandMin: 100, operandMax: 9999, resultMin: 1, resultMax: 9899 },
      'mul-basic':   { operandMin: 10, operandMax: 999, mulByMax: 99, resultMax: 98901 },
      'mul-3digit':  { operandMin: 100, operandMax: 999, mulByMax: 99, resultMax: 98901 },
      'div-basic':   { operandMin: 2, operandMax: 999, divByMax: 99, resultMin: 1, resultMax: 999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'inclusion':   { setMin: 10, setMax: 200, overlapMin: 2, overlapMax: 60 },
      'perimeter':   { sideMin: 1, sideMax: 999 }
    }
  };

  var G4B = {
    label: '四年级下册',
    // 四下：除数是两位数的除法、运算律、小数的意义和性质、小数加减法、三角形、平均数
    operations: {
      add: op({ operandMin: 0, operandMax: 9999, resultMax: 19998, decimals: true }),
      sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 9999, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 999, resultMax: 998001 }),
      div: op({ operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 999, allowRemainder: true })
    },
    wordProblemMax: 10000,
    decimal: { max: 999.99, places: 2 },
    geometry: { sideMin: 1, sideMax: 999 },
    topics: {
      'add-basic':   { operandMin: 10, operandMax: 9999, resultMax: 19998 },
      'sub-basic':   { operandMin: 10, operandMax: 9999, resultMin: 1, resultMax: 9899 },
      'mul-basic':   { operandMin: 10, operandMax: 999, mulByMax: 99, resultMax: 98901 },
      'div-basic':   { operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 999 },
      'div-remainder': { operandMin: 2, operandMax: 9999, divByMax: 99, allowRemainder: true, resultMax: 999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 }
    }
  };

  // ================= 5a / 5b（五年级，2026 秋启用 2024 版） =================
  var G5A = {
    label: '五年级上册',
    // 五上：小数乘法、小数除法、用字母表示数和数量关系、多边形的面积、位置（数对）、可能性
    operations: {
      add: op({ operandMin: 0, operandMax: 9999, resultMax: 19998, decimals: true }),
      sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 9999, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 999, resultMax: 998001, decimals: true }),
      div: op({ operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 999, decimals: true, allowRemainder: false })
    },
    wordProblemMax: 10000,
    decimal: { max: 999.99, places: 2 },
    geometry: { sideMin: 1, sideMax: 999 },
    topics: {
      'mul-basic':   { operandMin: 2, operandMax: 999, mulByMax: 99, resultMax: 98901 },
      'div-basic':   { operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'perimeter':   { sideMin: 1, sideMax: 999 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'inclusion':   { setMin: 10, setMax: 300, overlapMin: 2, overlapMax: 80 }
    }
  };

  var G5B = {
    label: '五年级下册',
    // 五下：因数与倍数、长方体和正方体、分数的意义和性质、分数加减法、图形的运动、折线统计图
    operations: {
      add: op({ operandMin: 0, operandMax: 9999, resultMax: 19998, decimals: true }),
      sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 9999, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 9999, resultMax: 99980001 }),
      div: op({ operandMin: 2, operandMax: 9999, divByMax: 999, resultMin: 1, resultMax: 9999 })
    },
    wordProblemMax: 10000,
    fraction: { denominators: [2, 3, 4, 5, 6, 8, 10, 12], numeratorMaxByDen: { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 7, 10: 9, 12: 11 } },
    geometry: { sideMin: 1, sideMax: 999 },
    topics: {
      'mul-basic':   { operandMin: 10, operandMax: 9999, mulByMax: 99, resultMax: 989901 },
      'div-basic':   { operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 9999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'fraction-same': { den: [2, 3, 4, 5, 6, 8], numMax: 7 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 }
    }
  };

  // ================= 6a / 6b（六年级，2026 秋启用 2024 版） =================
  var G6A = {
    label: '六年级上册',
    // 六上：分数乘法、分数除法、百分数、圆、确定位置、生活中的负数、鸽巢问题
    operations: {
      add: op({ operandMin: -100, operandMax: 9999, resultMin: -1000, resultMax: 19998, allowNegative: true, decimals: true }),
      sub: op({ operandMin: -100, operandMax: 9999, resultMin: -1000, resultMax: 9999, allowNegative: true, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 999, resultMax: 998001, decimals: true }),
      div: op({ operandMin: 2, operandMax: 9999, divByMax: 999, resultMin: 1, resultMax: 9999, decimals: true })
    },
    wordProblemMax: 10000,
    fraction: { denominators: [2, 3, 4, 5, 6, 8, 10, 12, 20, 25], numeratorMaxByDen: { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 7, 10: 9, 12: 11, 20: 19, 25: 24 } },
    percent: { max: 300 },
    geometry: { sideMin: 1, sideMax: 999, radiusMax: 100 },
    topics: {
      'mul-basic':   { operandMin: 10, operandMax: 999, mulByMax: 99, resultMax: 98901 },
      'div-basic':   { operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 9999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'fraction-same': { den: [2, 3, 4, 5, 6, 8, 10, 12], numMax: 11 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'perimeter':   { sideMin: 1, sideMax: 999 }
    }
  };

  var G6B = {
    label: '六年级下册',
    // 六下：比和比例关系、扇形统计图、圆柱与圆锥、整理与复习、有趣的平衡、校园平面图
    operations: {
      add: op({ operandMin: -100, operandMax: 99999, resultMin: -10000, resultMax: 199998, allowNegative: true, decimals: true }),
      sub: op({ operandMin: -100, operandMax: 99999, resultMin: -10000, resultMax: 99999, allowNegative: true, decimals: true }),
      mul: op({ operandMin: 2, operandMax: 9999, resultMax: 99980001, decimals: true }),
      div: op({ operandMin: 2, operandMax: 99999, divByMax: 999, resultMin: 1, resultMax: 9999, decimals: true })
    },
    wordProblemMax: 100000,
    fraction: { denominators: [2, 3, 4, 5, 6, 8, 10, 12, 20, 25], numeratorMaxByDen: { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 7, 10: 9, 12: 11, 20: 19, 25: 24 } },
    percent: { max: 300 },
    geometry: { sideMin: 1, sideMax: 999, radiusMax: 100 },
    topics: {
      'mul-basic':   { operandMin: 10, operandMax: 9999, mulByMax: 99, resultMax: 989901 },
      'div-basic':   { operandMin: 2, operandMax: 9999, divByMax: 99, resultMin: 1, resultMax: 9999 },
      'fill-missing':{ operandMin: 10, operandMax: 999, mulByMax: 99, sumMax: 100000 },
      'compare-more':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 },
      'compare-less':{ countMin: 10, countMax: 9999, deltaMin: 5, deltaMax: 999 }
    }
  };

  var GRADE_NUMBER_LIMITS = {
    '2a': G2A, '2b': G2B,
    '3a': G3A, '3b': G3B,
    '4a': G4A, '4b': G4B,
    '5a': G5A, '5b': G5B,
    '6a': G6A, '6b': G6B
  };

  // 年级代号归一化：'3'/'3a'/'3A'/'G3' → '3a'；无法识别时回退 '3a'
  function normGrade(g) {
    if (!g) return '3a';
    var s = String(g).trim().toLowerCase().replace(/[^0-9a-z]/g, '');
    var m = s.match(/^([2-6])([ab])?$/);
    if (!m) {
      var m2 = s.match(/^([2-6])$/);
      if (m2) return m2[1] + 'a';
      return '3a';
    }
    return m[1] + (m[2] || 'a');
  }

  // 取某年级某题型的“有效边界”（题型级覆盖 → 运算级 → 缺省）
  // grade: '3a' | topic: 'add-basic' | opKey: 'add'（可选，用于回退到运算缺省）
  function getLimits(grade, topic, opKey) {
    var g = GRADE_NUMBER_LIMITS[normGrade(grade)];
    if (!g) return null;
    var t = (g.topics && g.topics[topic]) || null;
    if (t) return t;
    if (opKey && g.operations && g.operations[opKey]) return g.operations[opKey];
    return null;
  }

  // 取年级整体配置（wordProblemMax / geometry / fraction 等）
  function getGrade(grade) {
    return GRADE_NUMBER_LIMITS[normGrade(grade)] || null;
  }

  // 该年级支持哪些内核题型（年级未声明的题型不出，避免六年级做一年级题）
  function topicsFor(grade) {
    var g = GRADE_NUMBER_LIMITS[normGrade(grade)];
    return (g && g.topics) ? Object.keys(g.topics) : [];
  }

  var api = {
    GRADE_NUMBER_LIMITS: GRADE_NUMBER_LIMITS,
    getLimits: getLimits,
    getGrade: getGrade,
    topicsFor: topicsFor,
    normGrade: normGrade,
    labels: Object.keys(GRADE_NUMBER_LIMITS).reduce(function (a, k) {
      a[k] = GRADE_NUMBER_LIMITS[k].label; return a;
    }, {})
  };

  root.GRADE_NUMBER_LIMITS = GRADE_NUMBER_LIMITS;
  root.GradeLimits = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
