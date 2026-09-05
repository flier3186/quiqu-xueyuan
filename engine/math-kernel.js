// engine/math-kernel.js · 奇趣学园 P1 数学出题内核（Nova）
// 架构级替换 math-flow-v5 的"数字变异"补丁，根治两大顽疾：
//   ① 题面直接显示答案  →  答案永不写入题面/提示前两级，仅 L3 完整解析出现
//   ② 翻来覆去就两道题  →  模板+变量随机化 + 近30题指纹去重 + 难度自适应升降档
// 纯 ES + 全局 API，零依赖；兼容浏览器(window) 与 node(require)。
(function (root) {
  'use strict';

  // ============ 基础工具 ============
  function rint(a, b) { a = Math.ceil(a); b = Math.floor(b); if (b < a) return a; return a + Math.floor(Math.random() * (b - a + 1)); }
  function shuffle(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = rint(0, i); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  // 带难度偏移的随机范围：level 越高，采样下限越靠 max（向边界上限偏移）
  function srange(min, max, bias) {
    bias = bias || 0; min = Math.ceil(min); max = Math.floor(max);
    var lo = Math.round(min + (max - min) * bias * 0.6);
    if (lo > max) lo = max; if (lo < min) lo = min;
    return rint(lo, max);
  }
  var COL = ['#00A896', '#F5B800', '#FB923C', '#E8A0BF', '#7AA5FF', '#9CCC65'];

  // 取年级边界（运行期读取，避免加载顺序问题）
  function GL(topic, opKey) {
    var g = root.GradeLimits;
    if (g && g.getLimits) return g.getLimits('3a', topic, opKey) || {};
    return {};
  }
  function WP_MAX() {
    var t = root.GRADE_NUMBER_LIMITS;
    return (t && t['3a'] && t['3a'].wordProblemMax) ? t['3a'].wordProblemMax : 1000;
  }

  // 近邻干扰项（整数题型用），保证答案在选项中且互不重复
  function makeChoices(answer) {
    var out = [answer];
    var span = Math.max(2, Math.round(Math.abs(answer) * 0.2) + 2);
    var pool = [];
    for (var k = 1; k <= span * 2; k++) { pool.push(answer + k); pool.push(answer - k); }
    shuffle(pool);
    for (var i = 0; i < pool.length && out.length < 4; i++) {
      if (pool[i] !== answer && out.indexOf(pool[i]) < 0 && pool[i] >= 0) out.push(pool[i]);
    }
    while (out.length < 4) out.push(answer + out.length);
    return shuffle(out).slice(0, 4);
  }

  // ============ 模板注册表 ============
  // 每个模板：{ op, build(level,bias), hints(inst)->[L1,L2,L3] }
  // build 返回实例对象；非法则返回 null（交由拒绝采样重试）。
  // 实例字段：formula/answer/question/scene/knowledge/_operands/_result/_op/_wordVals/_fp/visualType/visualData/choices
  var TEMPLATES = {};

  // ---------- 加法（基础） ----------
  TEMPLATES['add-basic'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('add-basic', 'add');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(L.operandMin, L.operandMax, bias);
      var ans = a + b;
      if (ans < (L.resultMin || 0) || ans > (L.resultMax || 1e9)) return null;
      return {
        formula: a + ' + ' + b + ' = ?',
        answer: ans,
        knowledge: '加法（把两个数合起来）',
        question: '算一算：' + a + ' + ' + b + ' = ?',
        visualType: 'numberBond',
        visualData: { type: 'numberBond', total: ans, parts: [
          { value: a, label: '加数', color: COL[0] }, { value: b, label: '加数', color: COL[1] }
        ] },
        _operands: [a, b], _result: ans, _op: 'add', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：加法是把两个数“合起来”求总数，结果会比原来每个数都大。',
        '策略：相同数位对齐，从个位加起，满十就向前一位进一。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。先把个位相加、十位相加，哪一位满十就向前一位进一，最后得到 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 加法（进位） ----------
  TEMPLATES['add-carry'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('add-carry', 'add');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(L.operandMin, L.operandMax, bias);
      if ((a % 10) + (b % 10) < 10) return null; // 必须有进位
      var ans = a + b;
      if (ans > (L.resultMax || 1e9)) return null;
      return {
        formula: a + ' + ' + b + ' = ?',
        answer: ans,
        knowledge: '加法进位',
        question: '算一算（注意进位）：' + a + ' + ' + b + ' = ?',
        visualType: 'numberBond',
        visualData: { type: 'numberBond', total: ans, parts: [
          { value: a, label: '加数', color: COL[0] }, { value: b, label: '加数', color: COL[1] }
        ] },
        _operands: [a, b], _result: ans, _op: 'add', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：个位相加满十要向十位进一，这是进位加法。',
        '策略：先加个位，满十就在十位记一个进位，再算十位时把这个进位加上。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。个位相加满十进一，十位再加上进位的 1，结果是 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 减法（基础，非负） ----------
  TEMPLATES['sub-basic'] = {
    op: 'sub',
    build: function (lv, bias) {
      var L = GL('sub-basic', 'sub');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(L.operandMin, Math.min(a, L.operandMax), bias);
      if (b > a) return null;
      var ans = a - b;
      if (ans < (L.resultMin || 0)) return null;
      return {
        formula: a + ' - ' + b + ' = ?',
        answer: ans,
        knowledge: '减法（去掉一部分）',
        question: '算一算：' + a + ' - ' + b + ' = ?',
        visualType: 'numberBond',
        visualData: { type: 'numberBond', total: a, parts: [
          { value: b, label: '减去', color: COL[1] }, { value: ans, label: '剩余', color: COL[0] }
        ] },
        _operands: [a, b], _result: ans, _op: 'sub', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：减法是从总数里“去掉”一部分，求还剩多少，结果不会比总数大。',
        '策略：相同数位对齐，从个位减起；不够减时向前一位借一当十。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。从总数里去掉减数，剩下的就是 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 减法（退位） ----------
  TEMPLATES['sub-borrow'] = {
    op: 'sub',
    build: function (lv, bias) {
      var L = GL('sub-borrow', 'sub');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(L.operandMin, Math.min(a, L.operandMax), bias);
      if (b > a) return null;
      if ((a % 10) >= (b % 10)) return null; // 必须个位不够减（退位）
      var ans = a - b;
      return {
        formula: a + ' - ' + b + ' = ?',
        answer: ans,
        knowledge: '减法退位',
        question: '算一算（注意退位）：' + a + ' - ' + b + ' = ?',
        visualType: 'numberBond',
        visualData: { type: 'numberBond', total: a, parts: [
          { value: b, label: '减去', color: COL[1] }, { value: ans, label: '剩余', color: COL[0] }
        ] },
        _operands: [a, b], _result: ans, _op: 'sub', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：个位不够减时要向十位“借一当十”，这是退位减法。',
        '策略：个位不够减，从十位借一个十加到个位上，十位减掉一后再继续减。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。个位向十位借一后相减，十位再减，结果是 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 乘法（两位数 × 一位数） ----------
  TEMPLATES['mul-basic'] = {
    op: 'mul',
    build: function (lv, bias) {
      var L = GL('mul-basic', 'mul');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(2, L.mulByMax || 9, bias);
      var ans = a * b;
      if (ans > (L.resultMax || 1e9)) return null;
      var bars = []; for (var k = 0; k < b; k++) bars.push({ label: '每组' + a, value: a, color: COL[k % COL.length] });
      return {
        formula: a + ' × ' + b + ' = ?',
        answer: ans,
        knowledge: '多位数乘一位数',
        question: '算一算：' + a + ' × ' + b + ' = ?',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: bars, total: ans },
        _operands: [a, b], _result: ans, _op: 'mul', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：乘法是“几个相同加数相加”，多位数乘一位数要数位对齐去乘。',
        '策略：从个位乘起，用一位数分别去乘多位数的每一位，满几十就向前一位进几。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。先算个位乘积、再算高位乘积并加上进位，最后得到 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 乘法（三位数 × 一位数） ----------
  TEMPLATES['mul-3digit'] = {
    op: 'mul',
    build: function (lv, bias) {
      var L = GL('mul-3digit', 'mul');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(2, L.mulByMax || 9, bias);
      var ans = a * b;
      if (ans > (L.resultMax || 1e9)) return null;
      var bars = []; for (var k = 0; k < b; k++) bars.push({ label: '每组' + a, value: a, color: COL[k % COL.length] });
      return {
        formula: a + ' × ' + b + ' = ?',
        answer: ans,
        knowledge: '三位数乘一位数',
        question: '算一算：' + a + ' × ' + b + ' = ?',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: bars, total: ans },
        _operands: [a], _result: ans, _op: 'mul', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：三位数乘一位数，仍是从个位起逐位相乘、处理好进位。',
        '策略：个位、十位、百位分别去乘，每次乘积加上前一位的进位，满几十进几。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。逐位相乘并累加进位，结果是 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 除法（表内整除） ----------
  TEMPLATES['div-basic'] = {
    op: 'div',
    build: function (lv, bias) {
      var L = GL('div-basic', 'div');
      var b = srange(2, L.divByMax || 9, bias);
      var q = srange(1, 9, bias);
      var a = b * q;
      if (a > (L.operandMax || 1e9)) return null;
      if (q < (L.resultMin || 1)) return null;
      var parts = []; for (var k = 0; k < b; k++) parts.push({ label: '每份', val: q, color: COL[k % COL.length] });
      return {
        formula: a + ' ÷ ' + b + ' = ?',
        answer: q,
        knowledge: '表内除法（整除）',
        question: '算一算：' + a + ' ÷ ' + b + ' = ?',
        visualType: 'barModel',
        visualData: { type: 'bar', total: a, parts: parts },
        _operands: [a, b], _result: q, _op: 'div', _fp: [a, b],
        choices: makeChoices(q)
      };
    },
    hints: function (i) {
      return [
        '考点：除法是把总数“平均分”，想乘法口诀求每份是多少。',
        '策略：想“除数乘几等于被除数”，对应的乘法口诀就是商。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。想 ' + i.formula.split('÷')[1].replace('= ?', '') + ' × ? = ' + i.formula.split('÷')[0] + '，得到商 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 除法（有余数） ----------
  TEMPLATES['div-remainder'] = {
    op: 'div',
    build: function (lv, bias) {
      var L = GL('div-remainder', 'div');
      var b = srange(2, L.divByMax || 9, bias);
      var q = srange(1, 9, bias);
      var r = srange(1, b - 1, bias); // 余数必须比除数小且不为0
      var a = b * q + r;
      if (a > (L.operandMax || 1e9)) return null;
      var parts = []; for (var k = 0; k < b; k++) parts.push({ label: '每份', val: q, color: COL[k % COL.length] });
      parts.push({ label: '余下', val: r, color: COL[5] });
      return {
        formula: a + ' ÷ ' + b + ' = ? … 余 ?',
        answer: q,
        remainder: r,
        knowledge: '有余数的除法',
        question: '算一算（写出商和余数）：' + a + ' ÷ ' + b,
        visualType: 'barModel',
        visualData: { type: 'bar', total: a, parts: parts },
        _operands: [a, b], _result: q, _op: 'div', _fp: [a, b, r], _skipEval: true
      };
    },
    hints: function (i) {
      return [
        '考点：有余数除法里，余数一定要比除数小。',
        '策略：先想除数乘几最接近被除数且不超过它，剩下的不够再分就是余数。',
        '完整解析：' + i.formula + '。' + i._operands[0] + ' ÷ ' + i._operands[1] + ' = ' + i.answer + ' 余 ' + i.remainder + '（因为 ' + i._operands[1] + ' × ' + i.answer + ' + ' + i.remainder + ' = ' + i._operands[0] + '）。'
      ];
    }
  };

  // ---------- 填空：a×b + ? = c ----------
  TEMPLATES['fill-missing'] = {
    op: 'mul',
    build: function (lv, bias) {
      var L = GL('fill-missing', 'mul');
      var a = srange(L.operandMin, L.operandMax, bias);
      var b = srange(2, L.mulByMax || 9, bias);
      var prod = a * b;
      var c = srange(prod + 1, L.sumMax || 200, bias); // 总和大于已知积
      var x = c - prod;
      if (x < 1) return null;
      return {
        formula: a + ' × ' + b + ' + ? = ' + c,
        answer: x,
        knowledge: '逆向填空（先算已知部分）',
        question: '想一想问号是多少：' + a + ' × ' + b + ' + ? = ' + c,
        visualType: 'numberBond',
        visualData: { type: 'numberBond', total: c, parts: [
          { value: prod, label: '已知部分', color: COL[0] }, { value: x, label: '问号', color: COL[2] }
        ] },
        _operands: [a, b], _result: x, _op: 'mul', _fp: [a, b, c], choices: makeChoices(x)
      };
    },
    hints: function (i) {
      return [
        '考点：这是逆向填空，要反过来想——先算出已知的那一步，再求缺少的部分。',
        '策略：先算已知的乘法得到“已知部分”，再用总和减去它，差就是问号。',
        '完整解析：' + i.formula + '。先算已知乘法，再用总和 ' + i._fp[2] + ' 减去它，问号 = ' + i.answer + '。'
      ];
    }
  };

  // ---------- 比多（应用题） ----------
  TEMPLATES['compare-more'] = {
    op: null,
    build: function (lv, bias) {
      var L = GL('compare-more');
      var a = srange(L.countMin, L.countMax, bias);
      var d = srange(L.deltaMin, L.deltaMax, bias);
      var ans = a + d;
      if (ans > WP_MAX()) return null;
      var names = [['小红', '小明'], ['苹果', '梨'], ['一班', '二班'], ['铅笔', '橡皮']];
      var nm = names[rint(0, names.length - 1)];
      return {
        formula: a + ' + ' + d + ' = ?',
        answer: ans,
        knowledge: '比多比少（加法）',
        scene: nm[0] + '有 ' + a + ' 个' + nm[1].slice(-1) + '，' + nm[1] + '比' + nm[0] + '多 ' + d + ' 个。',
        question: nm[1] + '有多少个' + nm[1].slice(-1) + '？',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: [
          { label: nm[0], value: a, color: COL[0] },
          { label: nm[1] + '（多' + d + '）', value: ans, color: COL[1] }
        ], total: ans },
        _operands: [a, d], _result: ans, _op: null, _wordVals: [a, d, ans], _fp: [a, d], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '关键词“比…多”，说明要求的数比已知的更大，要用加法。',
        '策略：把已知的数量和“多的那部分”合起来，就是要求的数量。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。已知数量加上多的部分，得到 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 比少（应用题） ----------
  TEMPLATES['compare-less'] = {
    op: null,
    build: function (lv, bias) {
      var L = GL('compare-less');
      var a = srange(L.countMin, L.countMax, bias);
      var d = srange(L.deltaMin, Math.min(L.deltaMax, a - 1), bias);
      if (d < 1) return null;
      var ans = a - d;
      if (ans < 1) return null;
      if (ans > WP_MAX()) return null;
      var names = [['小红', '小明'], ['苹果', '梨'], ['一班', '二班']];
      var nm = names[rint(0, names.length - 1)];
      return {
        formula: a + ' - ' + d + ' = ?',
        answer: ans,
        knowledge: '比多比少（减法）',
        scene: nm[0] + '有 ' + a + ' 个' + nm[1].slice(-1) + '，' + nm[1] + '比' + nm[0] + '少 ' + d + ' 个。',
        question: nm[1] + '有多少个' + nm[1].slice(-1) + '？',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: [
          { label: nm[0], value: a, color: COL[0] },
          { label: nm[1] + '（少' + d + '）', value: ans, color: COL[1] }
        ], total: a },
        _operands: [a, d], _result: ans, _op: null, _wordVals: [a, d, ans], _fp: [a, d], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '关键词“比…少”，说明要求的数比已知的更小，要用减法。',
        '策略：从已知数量里去掉“少的那部分”，剩下的就是要求的数量。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。已知数量减去少的部分，得到 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 时间：分秒换算 ----------
  TEMPLATES['time-sec'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('time-sec');
      var m = srange(1, 11, bias);     // 几分
      var s = srange(L.secMin, L.secMax, bias); // 几秒
      var ans = m * 60 + s;
      return {
        formula: m + ' × 60 + ' + s + ' = ?',
        answer: ans,
        knowledge: '时间换算（1分=60秒）',
        scene: '钟面上走了 ' + m + ' 分 ' + s + ' 秒。',
        question: m + ' 分 ' + s + ' 秒 = ? 秒',
        visualType: 'numberLine',
        visualData: { start: 0, end: ans, points: [
          { pos: 0, label: '开始', color: COL[0] },
          { pos: m * 60, label: m + '分', color: COL[1] },
          { pos: ans, label: '共', color: COL[2] }
        ], highlight: [0, ans] },
        _operands: [m, s], _result: ans, _op: 'add', _fp: [m, s], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：时间单位换算，记住 1 分 = 60 秒。',
        '策略：先把“分”都化成秒（几分就乘 60），再加上剩下的秒。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。几分乘 60 化成秒，再加零头秒，共 ' + i.answer + ' 秒。'
      ];
    }
  };

  // ---------- 时间：经过多少分钟 ----------
  TEMPLATES['time-add'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('time-add');
      var H = srange(L.baseHourMin, L.baseHourMax, bias);
      var M = srange(L.baseMinMin, L.baseMinMax, bias);
      var N = srange(L.addMinMin, L.addMinMax, bias);
      var ans = H * 60 + M + N;
      return {
        formula: H + ' × 60 + ' + M + ' + ' + N + ' = ?',
        answer: ans,
        knowledge: '经过时间（化成分计算）',
        scene: '现在是 ' + H + ' 时 ' + M + ' 分，再过 ' + N + ' 分钟。',
        question: H + ' 时 ' + M + ' 分再过 ' + N + ' 分钟，一共经过了多少分钟？',
        visualType: 'numberLine',
        visualData: { start: H * 60 + M, end: ans, points: [
          { pos: H * 60 + M, label: '现在', color: COL[0] },
          { pos: ans, label: '之后', color: COL[2] }
        ], highlight: [H * 60 + M, ans] },
        _operands: [H, M, N], _result: ans, _op: 'add', _fp: [H, M, N], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：求经过时间，把“时和分”统一化成分来算最稳妥。',
        '策略：时×60 化成分，加上原有的分，再加上又过的分，就是总分钟数。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。统一化成分相加，一共经过 ' + i.answer + ' 分钟。'
      ];
    }
  };

  // ---------- 容斥（集合） ----------
  TEMPLATES['inclusion'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('inclusion');
      var a = srange(L.setMin, L.setMax, bias);
      var b = srange(L.setMin, L.setMax, bias);
      var c = srange(1, Math.min(a, b, L.overlapMax), bias);
      if (c < 1) return null;
      var ans = a + b - c;
      if (a > WP_MAX() || b > WP_MAX() || ans > WP_MAX()) return null;
      return {
        formula: a + ' + ' + b + ' - ' + c + ' = ?',
        answer: ans,
        knowledge: '集合（容斥原理）',
        scene: '参加跳绳的有 ' + a + ' 人，参加跑步的有 ' + b + ' 人，两项都参加的有 ' + c + ' 人。',
        question: '一共有多少人参加了至少一项？',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: [
          { label: '只跳绳', value: a - c, color: COL[0] },
          { label: '只跑步', value: b - c, color: COL[1] },
          { label: '两项都参加', value: c, color: COL[2] }
        ], total: ans },
        _operands: [a, b, c], _result: ans, _op: 'add', _wordVals: [a, b, c, ans], _fp: [a, b, c], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：两类有重叠时，直接相加会把重叠部分算两次，要用容斥。',
        '策略：先算两部分之和，再减去被重复计算的重叠人数。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。两部分相加后再去掉一次重叠，共 ' + i.answer + ' 人。'
      ];
    }
  };

  // ---------- 长方形周长 ----------
  TEMPLATES['perimeter'] = {
    op: 'mul',
    build: function (lv, bias) {
      var L = GL('perimeter');
      var a = srange(L.sideMin, L.sideMax, bias); // 长
      var b = srange(L.sideMin, L.sideMax, bias); // 宽
      var ans = (a + b) * 2;
      return {
        formula: '(' + a + ' + ' + b + ') × 2 = ?',
        answer: ans,
        knowledge: '长方形周长',
        scene: '一个长方形，长是 ' + a + '，宽是 ' + b + '。',
        question: '它的周长是多少？',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: [
          { label: '长', value: a, color: COL[0] },
          { label: '宽', value: b, color: COL[1] },
          { label: '长', value: a, color: COL[0] },
          { label: '宽', value: b, color: COL[1] }
        ], total: ans },
        _operands: [a, b], _result: ans, _op: 'mul', _fp: [a, b], choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：长方形有两条长、两条宽，周长要把四条边的长度都加起来。',
        '策略：用公式（长 + 宽）× 2，先算括号里的长加宽，再乘 2。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。先算长加宽，再乘 2，周长是 ' + i.answer + '。'
      ];
    }
  };

  // ---------- 同分母分数加法 ----------
  TEMPLATES['fraction-same'] = {
    op: 'add',
    build: function (lv, bias) {
      var L = GL('fraction-same');
      var den = L.den[rint(0, L.den.length - 1)];
      var n1 = srange(1, Math.min(L.numMax, den - 1), bias);
      var n2 = srange(1, Math.min(L.numMax, den - 1), bias);
      var ans = n1 + n2; // 分子答案（分母不变）
      return {
        formula: n1 + '/' + den + ' + ' + n2 + '/' + den + ' = ?/' + den,
        answer: ans,
        denominator: den,
        knowledge: '同分母分数加法',
        scene: '一个披萨平均分成 ' + den + ' 份。',
        question: '吃了 ' + n1 + '/' + den + ' 个披萨，又吃了 ' + n2 + '/' + den + ' 个，一共吃了几分之几？',
        visualType: 'barModel',
        visualData: { type: 'bar', bars: [
          { label: '已吃', value: ans, color: COL[0] },
          { label: '未吃', value: den - ans, color: COL[4] }
        ], total: den },
        _operands: [n1, n2], _result: ans, _op: 'add', _fp: [n1, n2, den], _skipEval: true, choices: makeChoices(ans)
      };
    },
    hints: function (i) {
      return [
        '考点：同分母分数相加，分母不变，只把分子相加。',
        '策略：分母不动，把两个分子加起来，得到的结果就是新分子。',
        '完整解析：' + i.formula.replace('?', String(i.answer)) + '。分母不变，分子 ' + i._operands[0] + ' + ' + i._operands[1] + ' = ' + i.answer + '，即 ' + i.answer + '/' + i.denominator + '。'
      ];
    }
  };

  var TOPIC_LIST = Object.keys(TEMPLATES);

  // ============ 边界校验（拒绝采样） ============
  function validate(topic, inst) {
    var g = root.GRADE_NUMBER_LIMITS && root.GRADE_NUMBER_LIMITS['3a'];
    var L = root.GradeLimits ? root.GradeLimits.getLimits('3a', topic, inst._op) : null;
    L = L || {};
    if (inst._operands) {
      var omax = (L.operandMax != null) ? L.operandMax : 1e12;
      var omin = (L.operandMin != null) ? L.operandMin : -1e12;
      for (var k = 0; k < inst._operands.length; k++) {
        if (inst._operands[k] > omax || inst._operands[k] < omin) return false;
      }
    }
    if (inst._result != null) {
      if (!L.allowNegative && inst._result < 0) return false;
      if (L.resultMin != null && inst._result < L.resultMin) return false;
      if (L.resultMax != null && inst._result > L.resultMax) return false;
    }
    if (inst._wordVals) {
      var wm = (g && g.wordProblemMax) ? g.wordProblemMax : 1000;
      for (var j = 0; j < inst._wordVals.length; j++) {
        if (inst._wordVals[j] > wm || inst._wordVals[j] < 0) return false;
      }
    }
    return true;
  }

  // ============ 近 N 题指纹去重 ============
  var MAX_RECENT = 30;
  var RECENT = [];
  function isDup(fp) { return RECENT.indexOf(fp) >= 0; }
  function pushFp(fp) { RECENT.push(fp); if (RECENT.length > MAX_RECENT) RECENT.shift(); }

  function biasForLevel(level) { return [0, 0.35, 0.6][level - 1] || 0; }
  function fingerprint(topic, inst) { return topic + '|' + (inst._fp || []).join(','); }

  // ============ 难度自适应状态 ============
  var STATE = { level: 1, correctStreak: 0, wrongStreak: 0, maxLevel: 3 };

  function finalize(topic, inst, relaxed) {
    var hints = TEMPLATES[topic].hints(inst);
    var out = {
      topic: topic,
      formula: inst.formula,
      answer: inst.answer,
      question: inst.question || inst.formula,
      scene: inst.scene || '',
      knowledge: inst.knowledge || topic,
      visualType: inst.visualType || null,
      visualData: inst.visualData || null,
      visual: inst.visualType ? { type: inst.visualType, data: inst.visualData } : null,
      hints: hints,
      level: STATE.level,
      relaxed: !!relaxed
    };
    if (inst.choices) out.choices = inst.choices;
    if (inst.remainder != null) out.remainder = inst.remainder;
    if (inst.denominator != null) out.denominator = inst.denominator;
    // 内部回传实例，供 submit 精确判定（不暴露答案到题面，仅作回调凭据）
    out._instance = inst;
    return out;
  }

  // ============ 公开 API ============
  var MathKernel = {
    topics: function () { return TOPIC_LIST.slice(); },

    // MathKernel.generate(topic, level) -> {formula, answer, visual, hints[3], ...}
    generate: function (topic, level) {
      if (topic && TEMPLATES[topic] == null) throw new Error('MathKernel: 未知题型 ' + topic);
      if (!topic) topic = TOPIC_LIST[rint(0, TOPIC_LIST.length - 1)];
      if (level && level >= 1 && level <= STATE.maxLevel) STATE.level = level; // 外部可播种初始档位
      var tpl = TEMPLATES[topic];
      var bias = biasForLevel(STATE.level);

      // 主拒绝采样：最多 50 次
      for (var attempt = 0; attempt < 50; attempt++) {
        var inst = tpl.build(STATE.level, bias);
        if (!inst) continue;
        var fp = fingerprint(topic, inst);
        if (!validate(topic, inst)) continue;
        if (isDup(fp)) continue;
        pushFp(fp);
        return finalize(topic, inst);
      }
      // 放宽回退：允许重复指纹或边界略松，但仍须可求值
      for (var r = 0; r < 30; r++) {
        var inst2 = tpl.build(STATE.level, bias);
        if (!inst2) continue;
        if (validate(topic, inst2)) { pushFp(fingerprint(topic, inst2)); return finalize(topic, inst2, true); }
      }
      // 终极兜底：确定性合法实例
      var fb = tpl.build(1, 0);
      return finalize(topic, fb, true);
    },

    // MathKernel.submit(instance, userAnswer) -> {correct, feedback, level}
    submit: function (instance, userAnswer) {
      var ans = instance.answer;
      var correct;
      if (typeof ans === 'number' && typeof userAnswer === 'number') correct = (userAnswer === ans);
      else correct = (String(userAnswer).trim() === String(ans).trim());

      // 自适应升降档
      if (correct) {
        STATE.correctStreak++; STATE.wrongStreak = 0;
        if (STATE.correctStreak >= 3) { STATE.correctStreak = 0; if (STATE.level < STATE.maxLevel) STATE.level++; }
      } else {
        STATE.wrongStreak++; STATE.correctStreak = 0;
        if (STATE.wrongStreak >= 2) { STATE.wrongStreak = 0; if (STATE.level > 1) STATE.level--; }
      }

      var feedback;
      if (correct) {
        feedback = '答对啦！你算得很稳，继续保持～';
      } else {
        var sol = instance.hints && instance.hints[2] ? instance.hints[2] : '';
        feedback = '再想想也没关系，我们一起看：正确结果是 ' + ans + '。' + sol;
      }
      return { correct: correct, feedback: feedback, level: STATE.level };
    },

    // 重置自适应状态与去重窗口（新会话/新用户调用）
    reset: function () {
      STATE.level = 1; STATE.correctStreak = 0; STATE.wrongStreak = 0; RECENT.length = 0;
    },
    state: function () { return { level: STATE.level, correctStreak: STATE.correctStreak, wrongStreak: STATE.wrongStreak, recent: RECENT.length }; },
    _internal: { STATE: STATE, RECENT: RECENT, TEMPLATES: TEMPLATES } // 仅供测试/调试
  };

  root.MathKernel = MathKernel;
  if (typeof module !== 'undefined' && module.exports) module.exports = MathKernel;
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
