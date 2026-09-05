// data/grade-limits.js · 奇趣学园 年级数值边界表
// 借鉴 plasmicshree/math-quiz-website 的「按年级数字边界」思路：
//   每个年级显式声明“允许的数值范围”，不靠感觉。
// 结构可扩展到任意年级（key 为年级代号，如 "3a" / "2b" / "4a"）。
// 兼容浏览器(window) 与 node(require)。
(function (root) {
  'use strict';

  // 单个运算的边界声明（所有字段均可被题型级覆盖）
  //   operandMin/Max : 操作数（参与运算的每一个数）允许范围
  //   resultMin/Max  : 最终结果允许范围
  //   allowNegative  : 结果是否允许为负
  //   allowRemainder : 除法是否允许有余数（true 时除法可非整除）
  //   decimals       : 是否允许小数（本期三年级全为整数，统一 false）
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

  var GRADE_NUMBER_LIMITS = {
    // ===================== 三年级上册 =====================
    '3a': {
      label: '三年级上册',
      // 通用运算边界（题库缺省值，可被 topics 覆盖）
      operations: {
        add: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 10000 }),
        sub: op({ operandMin: 0, operandMax: 9999, resultMin: 0, resultMax: 10000 }),
        // 多位数 × 一位数（3A 重点）：被乘数可到 9999，乘数 2~9
        mul: op({ operandMin: 2, operandMax: 9999, resultMin: 0, resultMax: 89991 }),
        // 表内除法：被除数 ≤ 81，除数 2~9，强制整除
        div: op({ operandMin: 2, operandMax: 81, resultMin: 1, resultMax: 81 })
      },
      // 应用题数值上限（情境题里出现的任何“真实数量”不得超过此值）
      wordProblemMax: 120,
      // 时间类专属边界（时/分/秒）
      time: {
        hourMax: 12,        // 12 小时制
        minuteMax: 59,
        secondMax: 59,
        carryToHour: true   // 允许 8时50分+20分 跨小时
      },
      // 分数（同分母初步认识）
      fraction: {
        denominators: [2, 4, 8],
        numeratorMaxByDen: { 2: 1, 4: 3, 8: 7 }
      },
      // 几何（长方形/正方形周长）
      geometry: {
        sideMin: 1,
        sideMax: 99
      },
      // ---------- 题型级覆盖（可精确控制每类题的数值边界） ----------
      topics: {
        'add-basic':   { operandMin: 2, operandMax: 100, resultMax: 200 },
        'add-carry':   { operandMin: 10, operandMax: 999, resultMax: 1998 },
        'sub-basic':   { operandMin: 5, operandMax: 100, resultMin: 1, resultMax: 95, allowNegative: false },
        'sub-borrow':  { operandMin: 20, operandMax: 999, resultMin: 1, resultMax: 979 },
        'mul-basic':   { operandMin: 2, operandMax: 99, mulByMax: 9, resultMax: 891 },     // 两位数×一位数
        'mul-3digit':  { operandMin: 100, operandMax: 999, mulByMax: 9, resultMax: 8991 }, // 三位数×一位数
        'div-basic':   { operandMin: 2, operandMax: 81, divByMax: 9, resultMin: 1, resultMax: 81 }, // 表内整除
        'div-remainder': { operandMin: 2, operandMax: 99, divByMax: 9, allowRemainder: true, resultMax: 99 },
        'fill-missing':{ operandMin: 2, operandMax: 99, mulByMax: 9, sumMax: 200 },        // a×b+?=c
        'compare-more':{ countMin: 3, countMax: 60, deltaMin: 2, deltaMax: 40 },
        'compare-less':{ countMin: 3, countMax: 60, deltaMin: 2, deltaMax: 40 },
        'time-add':    { baseHourMin: 1, baseHourMax: 11, baseMinMin: 0, baseMinMax: 55, addMinMin: 5, addMinMax: 55 },
        'time-sec':    { secMin: 5, secMax: 58 },
        'inclusion':   { setMin: 5, setMax: 40, overlapMin: 1, overlapMax: 15 },
        'perimeter':   { sideMin: 1, sideMax: 99 },
        'fraction-same': { den: [2, 4], numMax: 3 }
      }
    }
  };

  // 取某年级某题型的“有效边界”（题型级覆盖 → 运算级 → 缺省）
  // grade: '3a' | topic: 'add-basic' | opKey: 'add'（可选，用于回退到运算缺省）
  function getLimits(grade, topic, opKey) {
    var g = GRADE_NUMBER_LIMITS[grade];
    if (!g) return null;
    var t = (g.topics && g.topics[topic]) || null;
    if (t) return t;
    if (opKey && g.operations && g.operations[opKey]) return g.operations[opKey];
    return null;
  }

  var api = {
    GRADE_NUMBER_LIMITS: GRADE_NUMBER_LIMITS,
    getLimits: getLimits
  };

  root.GRADE_NUMBER_LIMITS = GRADE_NUMBER_LIMITS;
  root.GradeLimits = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
