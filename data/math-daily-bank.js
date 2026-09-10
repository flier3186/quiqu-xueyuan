/* 数学日练题库净化层（运行时，只读原始 MATH_BY_GRADE，不修改数据文件）
 *
 * 解决用户反馈的两个问题：
 *   1. 每日练习题出现重复（每个年级都有）
 *   2. 部分题目自相矛盾（同题干不同答案，如"直角等于多少度"答 130）
 *
 * 做法：
 *   - 同一题干只保留「首次出现」的一条（教材原型在前，模板生成的变体在后），
 *     被收敛掉的同题干变体不丢弃，另存为 reviewPool 供"再练一遍/错题巩固"使用。
 *   - 常量事实校验（直角/平角/周角/进率/单位换算…）二次兜底。
 *   - 输出 segments：按知识点连续段切分，供单卡页显示"当前小节 / 下一小节"。
 */
(function (global) {
  'use strict';

  // 常量事实表：题干命中即要求答案等于固定值
  var CONST_FACTS = [
    { re: /直角等于多少度|直角是多少度|直角=/, v: 90 },
    { re: /平角等于多少度|平角是多少度/, v: 180 },
    { re: /周角等于多少度|周角是多少度/, v: 360 },
    { re: /三角形.{0,4}内角和/, v: 180 },
    { re: /1\s*(平方千米|km²).{0,6}(等于|是).{0,4}(多少)?公顷/, v: 100 },
    { re: /1\s*公顷.{0,6}(等于|是).{0,4}(多少)?平方米/, v: 10000 },
    { re: /1\s*(千米|公里).{0,6}(等于|是).{0,4}(多少)?米/, v: 1000 },
    { re: /^1\s*米\s*(等于|是).{0,4}(多少)?厘米/, v: 100 },
    { re: /^1\s*米\s*(等于|是).{0,4}(多少)?分米/, v: 10 },
    { re: /1\s*(日|天).{0,6}(等于|是|有).{0,4}(多少)?(小时|时)/, v: 24 },
    { re: /1\s*年.{0,6}(有|等于|是).{0,4}(多少)?个月/, v: 12 },
    { re: /1\s*(时|小时).{0,6}(等于|是|有).{0,4}(多少)?分/, v: 60 }
  ];

  function norm(s) {
    return String(s == null ? '' : s).replace(/[\s、，,。？?！!：:·—\-_"'（）()]/g, '');
  }

  function constViolation(p) {
    var q = String(p.question || '');
    for (var i = 0; i < CONST_FACTS.length; i++) {
      var f = CONST_FACTS[i];
      if (f.re.test(q)) {
        var a = parseFloat(p.answer);
        if (isFinite(a) && Math.abs(a - f.v) > 1e-9) return f;
        return null; // 命中常量且答案正确 → 直接放行，不再查别的规则
      }
    }
    return null;
  }

  // 池缓存：必须带上"源数据长度"作为失效键。
  // 教训（2026-09-10）：年级数据是懒加载的，首次调用若数据还没到会缓存空结果，
  // 之后数据到了也永远拿不到题。所以只在数据就绪时才缓存，且长度变化自动重建。
  var _cache = {};

  function build(semKey) {
    var G = global.MATH_BY_GRADE || {};
    var data = G[semKey];
    var cacheable = !!(data && Array.isArray(data.problems) && data.problems.length);
    if (cacheable && _cache[semKey] && _cache[semKey].len === data.problems.length) return _cache[semKey].res;
    if (!cacheable) {
      // 数据未就绪：返回空结果但不缓存（避免把"没数据"永久固化）
      return { list: [], reviewPool: [], segments: [], dropped: { dup: 0, constViolation: 0, empty: 0 }, total: 0, kept: 0 };
    }
    var problems = data.problems;
    var seen = {};                 // norm(question) -> 已收录的原下标
    var list = [], reviewPool = [], dropped = { dup: 0, constViolation: 0, empty: 0 };

    for (var i = 0; i < problems.length; i++) {
      var p = problems[i];
      if (!p || !p.question || !String(p.question).trim()) { dropped.empty++; continue; }
      var key = norm(p.question);

      if (Object.prototype.hasOwnProperty.call(seen, key)) {
        // 同题干：不进日练主线，进复习池
        p.__dailyIdx = i;
        reviewPool.push(p);
        dropped.dup++;
        continue;
      }
      var bad = constViolation(p);
      if (bad) {
        // 首次出现即与常量事实矛盾 → 整组题都不要（避免后续变体再进来）
        seen[key] = -1;
        dropped.constViolation++;
        continue;
      }
      seen[key] = list.length;
      p.__dailyIdx = i;
      list.push(p);
    }

    // 按知识点连续段切分
    var segments = [], cur = null;
    for (var j = 0; j < list.length; j++) {
      var k = list[j].knowledge || '(未标注)';
      if (!cur || cur.kp !== k) { cur = { kp: k, from: j, to: j, n: 1 }; segments.push(cur); }
      else { cur.to = j; cur.n++; }
    }

    var res = {
      list: list, reviewPool: reviewPool, segments: segments,
      dropped: dropped, total: problems.length, kept: list.length
    };
    _cache[semKey] = { len: problems.length, res: res };
    return res;
  }

  global.MathDailyBank = {
    build: build,
    CONST_FACTS: CONST_FACTS,
    _norm: norm,
    clearCache: function () { _cache = {}; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
