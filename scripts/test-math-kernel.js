// scripts/test-math-kernel.js · 数学内核 P1 自动化压测（Nova）
// 用法：node scripts/test-math-kernel.js
// 每题型 5000 次生成，断言：0 越界 / 0 非放松态重复指纹 / L1L2 不含答案 / 公式可算答案
'use strict';

const path = require('path');
const GL = require(path.join(__dirname, '..', 'data', 'grade-limits.js'));
global.GRADE_NUMBER_LIMITS = GL.GRADE_NUMBER_LIMITS;
global.GradeLimits = GL;
const MathKernel = require(path.join(__dirname, '..', 'engine', 'math-kernel.js'));

// ---------- 安全算术求值（仅 + - × ÷ ( )，整数） ----------
function evalArith(expr) {
  try {
    const e = String(expr).replace(/×/g, '*').replace(/x/g, '*').replace(/÷/g, '/');
    const toks = e.match(/\d+|[+\-*/()]/g);
    if (!toks) return null;
    let pos = 0;
    const peek = () => toks[pos];
    function factor() {
      const t = toks[pos++];
      if (t === '(') { const v = expr0(); if (toks[pos++] !== ')') return NaN; return v; }
      if (/^\d+$/.test(t)) return parseInt(t, 10);
      return NaN;
    }
    function term() {
      let v = factor();
      while (peek() === '*' || peek() === '/') {
        const op = toks[pos++];
        const r = factor();
        if (op === '/') { if (r === 0) return NaN; v = v / r; if (!Number.isInteger(v)) return NaN; }
        else v = v * r;
      }
      return v;
    }
    function expr0() {
      let v = term();
      while (peek() === '+' || peek() === '-') {
        const op = toks[pos++];
        const r = term();
        v = op === '+' ? v + r : v - r;
      }
      return v;
    }
    const val = expr0();
    if (pos !== toks.length || !Number.isFinite(val) || Number.isNaN(val)) return null;
    return val;
  } catch (e) { return null; }
}

// 校验“公式可计算出 answer”：直接求值（= ?）或代入求未知（expr + ? = c）
function formulaYieldsAnswer(out) {
  if (out._instance._skipEval) return true; // 分数/有余数：跳过通用求值
  const f = String(out.formula);
  const eq = f.indexOf('=');
  if (eq < 0) return false;
  const left = f.slice(0, eq).trim();
  const right = f.slice(eq + 1).trim();
  if (left.indexOf('?') >= 0 && right.indexOf('?') < 0) {
    // 形如 a × b + ? = c → 代入 ?=answer 看是否等于右侧常数
    const val = Number(right);
    if (!Number.isFinite(val)) return false;
    return evalArith(left.replace(/\?/g, String(out.answer))) === val;
  }
  if (left.indexOf('?') < 0) {
    return evalArith(left) === out.answer;
  }
  return false;
}

// 边界校验（独立于内核，依据 GRADE_NUMBER_LIMITS）
function checkBounds(topic, out) {
  const g = global.GRADE_NUMBER_LIMITS['3a'];
  const L = global.GradeLimits.getLimits('3a', topic, out._instance._op) || {};
  const inst = out._instance;
  if (inst._operands) {
    const omax = (L.operandMax != null) ? L.operandMax : Infinity;
    const omin = (L.operandMin != null) ? L.operandMin : -Infinity;
    for (const v of inst._operands) { if (v > omax || v < omin) return false; }
  }
  if (inst._result != null) {
    if (!L.allowNegative && inst._result < 0) return false;
    if (L.resultMin != null && inst._result < L.resultMin) return false;
    if (L.resultMax != null && inst._result > L.resultMax) return false;
  }
  if (inst._wordVals) {
    const wm = g.wordProblemMax;
    for (const v of inst._wordVals) { if (v > wm || v < 0) return false; }
  }
  return true;
}

// ---------- 主压测 ----------
const PER = 5000;
const MAX_WINDOW = 30;
let totalFail = 0;
const report = [];

for (const topic of MathKernel.topics()) {
  MathKernel.reset();
  let failBounds = 0, failDup = 0, failHint = 0, failFormula = 0, failShape = 0;
  const window = []; // 近 30 题指纹（仅统计非放松态的唯一性）

  for (let i = 0; i < PER; i++) {
    let out;
    try { out = MathKernel.generate(topic); }
    catch (e) { failShape++; continue; }
    if (!out || !out.formula || out.answer == null || !Array.isArray(out.hints) || out.hints.length !== 3) { failShape++; continue; }

    // 1) 越界
    if (!checkBounds(topic, out)) failBounds++;

    // 2) 近30题去重：非放松态必须不在窗口内
    const fp = topic + '|' + (out._instance._fp || []).join(',');
    if (!out.relaxed) {
      if (window.indexOf(fp) >= 0) failDup++;
    }
    window.push(fp);
    if (window.length > MAX_WINDOW) window.shift();

    // 3) L1/L2 不含答案数字
    const ansStr = String(out.answer);
    if (out.hints[0].indexOf(ansStr) >= 0 || out.hints[1].indexOf(ansStr) >= 0) failHint++;

    // 4) 公式可计算出 answer
    if (!formulaYieldsAnswer(out)) failFormula++;
  }

  const fails = failBounds + failDup + failHint + failFormula + failShape;
  totalFail += fails;
  report.push({
    topic, PER,
    failBounds, failDup, failHint, failFormula, failShape,
    ok: fails === 0
  });
}

// ---------- 打印 ----------
console.log('=== 数学内核 P1 压测（每题型 ' + PER + ' 次） ===');
let allOk = true;
for (const r of report) {
  if (!r.ok) allOk = false;
  console.log(
    (r.ok ? 'PASS' : 'FAIL') + '  ' + r.topic.padEnd(14) +
    ' 越界=' + r.failBounds +
    ' 重复=' + r.failDup +
    ' 提示含答案=' + r.failHint +
    ' 公式不等=' + r.failFormula +
    ' 结构异常=' + r.failShape
  );
}
console.log('-------------------------------------------');
console.log(allOk ? 'ALL PASS ✅ 总失败=' + totalFail : 'SOME FAIL ❌ 总失败=' + totalFail);
process.exit(allOk ? 0 : 1);
