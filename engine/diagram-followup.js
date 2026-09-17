/* M3 图解追问层（非自由聊天）
 * 图形揭示后追加 1–2 个追问，全部由 MathDiagramMaster.varsOf 派生，
 * 与当前母版变量绑定；无 key 也能生成（走启发式三步法），不调 DeepSeek。
 * 输出：{ p, master, vars, followUps:[{q, type, prompt, threeStep:[q,choices,answer,explain]}] }
 */
(function (root) {
  'use strict';
  var N = function (x) { return typeof x === 'number' && isFinite(x) ? x : null; };
  var toNum = function (x) { return N(x) != null ? N(x) : null; };

  function masterOf(p) {
    try {
      var M = root.MathDiagramMaster;
      if (M && M.pick) return M.pick(p);
      if (M && M.byId && p && p.visualType) return M.byId(p.visualType);
    } catch (e) {}
    return null;
  }

  function varsOf(p) {
    try {
      var M = root.MathDiagramMaster;
      if (M && M.varsOf) return M.varsOf(p);
    } catch (e) {}
    var vd = (p && p.visualData) || {};
    var parts = (vd.parts || []).map(function (x) {
      return { label: x.label, value: N(x.value), unknown: x.unknown === true };
    });
    var total = N(vd.total != null ? vd.total : vd.value);
    var f = String((p && p.formula) || '');
    var nums = (f.match(/\d+(?:\.\d+)?/g) || []).map(Number);
    return {
      total: total, parts: parts,
      unknownSlot: parts.findIndex(function (x) { return x.unknown; }),
      operands: nums, rows: N(vd.rows), cols: N(vd.cols),
      shape: vd.shape || null, unit: vd.unit || null, answer: p ? p.answer : null
    };
  }

  // 追问模板：每个按母版 family + vars 派生；type: 'change' / 'relate' / 'reverse' / 'generic'
  function buildFollowUps(p) {
    var v = varsOf(p);
    var m = masterOf(p);
    var out = [];
    var unit = v.unit ? v.unit : '';
    var total = toNum(v.total);

    // ① 改变法：把某已知部分 +2，问总量如何变
    if (total != null && v.parts.length) {
      var base = v.parts[0].value != null ? v.parts[0].value : (total / Math.max(v.parts.length, 1));
      if (base != null && isFinite(base)) {
        var newTotal = total + 2;
        out.push({
          type: 'change',
          q: '如果把其中一个数增加 2，结果会变成多少？',
          prompt: '改变法追问：把总量 ' + total + ' 中某部分 +2，重新计算。',
          threeStep: {
            q: '🧪 改变法 — 如果其中一份变成 ' + (base + 2) + '，总数会怎样？',
            choices: [
              '总数增加 2，变成 ' + newTotal,
              '总数减少 2',
              '总数不变',
              '无法确定'
            ],
            answer: '总数增加 2，变成 ' + newTotal,
            explain: '总量 = 各部分之和。某部分 +2 且其余不变，总量必然 +2。这是「量随部分线性变化」的通用规律。'
          }
        });
      }
    }

    // ② 关联法：比较两个部分
    if (v.parts.length >= 2) {
      var a = v.parts[0].value, b = v.parts[1].value;
      var relText;
      if (a != null && b != null && isFinite(a) && isFinite(b)) {
        if (a === b) relText = '相等';
        else if (a > b) relText = '第 1 部分比第 2 部分大 ' + (a - b) + unit;
        else relText = '第 2 部分比第 1 部分大 ' + (b - a) + unit;
        out.push({
          type: 'relate',
          q: '比较两个部分的关系，它们谁大谁小？',
          prompt: '关联法追问：比较两个部分的大小关系。',
          threeStep: {
            q: '🔗 关联法 — ' + (v.parts[0].label || '第 1 部分') + ' 和 ' + (v.parts[1].label || '第 2 部分') + ' 谁更大？',
            choices: ['第 1 部分更大', '第 2 部分更大', '两者相等', '无法比较'],
            answer: v.parts[0].value > v.parts[1].value ? '第 1 部分更大' : (v.parts[0].value < v.parts[1].value ? '第 2 部分更大' : '两者相等'),
            explain: '直接比较两部分的数值：' + (v.parts[0].label || '第 1 部分') + '=' + a + '，' + (v.parts[1].label || '第 2 部分') + '=' + b + '。' + relText + '。'
          }
        });
      }
    }

    // ③ 反向求法（短板 B 闭环）：已知总量 + 其余部分，求未知部分
    if (total != null && v.unknownSlot >= 0 && v.parts.length >= 2) {
      var slot = v.parts[v.unknownSlot];
      var known = v.parts.filter(function (x) { return x.value != null && x !== slot; }).reduce(function (s, x) { return s + x.value; }, 0);
      var unknownVal = total - known;
      out.push({
        type: 'reverse',
        q: '图中 ' + (slot.label || '未知部分') + ' 是多少？',
        prompt: '反向建模追问：由总量与已知部分倒推未知部分。',
        threeStep: {
          q: '🔁 反向建模 — 总量是 ' + total + '，已知部分合计，倒推 ' + (slot.label || '未知部分') + ' = ?',
          choices: [
            '总量 − 已知部分之和 = ' + unknownVal,
            '总量 × 已知部分数',
            '未知部分就是 0',
            '无法计算'
          ],
          answer: '总量 − 已知部分之和 = ' + unknownVal,
          explain: '部分之和 = 总量。已知其余部分 = ' + known + '，未知 = ' + total + ' − ' + known + ' = ' + unknownVal + '。这是「形→数」建模的核心：由图形反推方程。'
        }
      });
    }

    // 退化：纯几何/无变量母版
    if (!out.length) {
      out.push({
        type: 'generic',
        q: '这张图还隐含哪些可以计算的数量关系？',
        prompt: '通用追问：提示孩子从图中读出 2 个可计算关系。',
        threeStep: {
          q: '🔍 通用 — 这张图里能读出哪些数学关系？',
          choices: ['找出 2 个量之间的关系', '只看形状不数数', '直接抄答案', '放弃'],
          answer: '找出 2 个量之间的关系',
          explain: '每张几何/统计图都隐含数量关系：边长↔面积、角度↔占比、份数↔总数。读图的目标是把视觉信号转成数量关系式。'
        }
      });
    }
    return out.slice(0, 2); // 最多 2 条
  }

  function generate(p) {
    var m = masterOf(p);
    var v = varsOf(p);
    return {
      p: p,
      master: m ? m.id : null,
      family: m ? m.family : null,
      vars: v,
      followUps: buildFollowUps(p)
    };
  }

  root.DiagramFollowup = {
    generate: generate,
    varsOf: varsOf,
    masterOf: masterOf,
    _buildFollowUps: buildFollowUps,
    _version: '20260917c'
  };
})(typeof window !== 'undefined' ? window : globalThis);
