#!/usr/bin/env node
// audit-live.js —— 审计 APP 真实加载的按年级题目文件 (math-data-2b.js … math-data-9b.js)
// 与别的模型审计的 data/math-data.js（未被 index.html 加载）区分开，确保审计的是线上真正在跑的数据。
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const GRADES = ['2b','3a','3b','4a','4b','5a','5b','6a','6b','7a','7b','8a','8b','9a','9b'];

// ---- 加载真实数据源 ----
const win = {};
for (const g of GRADES) {
  const f = path.join(DATA, `math-data-${g}.js`);
  if (!fs.existsSync(f)) { console.error('[warn] missing', f); continue; }
  const code = fs.readFileSync(f, 'utf8');
  // 每个文件用同一个 window 累加 MATH_BY_GRADE
  const fn = new Function('window', code + '\n;return window.MATH_BY_GRADE;');
  fn(win);
}
const M = win.MATH_BY_GRADE || {};

// ---- 工具 ----
function esc(s){ return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function tokenIn(text, val){
  if (val == null) return false;
  const s = String(val);
  if (!/^[\d.]+(?:[a-zA-Z%℃°分秒元个]*)$/.test(s)) {
    // 非数字答案：直接子串匹配
    return String(text).includes(s);
  }
  const re = new RegExp('(^|[^0-9.])' + esc(s) + '(?![0-9.]\\d)', 'g');
  return re.test(String(text));
}
function evalExpr(f){
  let e = String(f).replace(/\?/g,'').replace(/=/g,'').replace(/（[^）]*）/g,'').replace(/\([^0-9+\-*/.)]*\)/g,'');
  e = e.replace(/×/g,'*').replace(/÷/g,'/');
  e = e.replace(/(\d+(?:\.\d+)?)²/g,'($1*$1)');
  e = e.replace(/\/([\d.]+(?:\.\d+)?)\/([\d.]+(?:\.\d+)?)/g,'/($1/$2)');
  e = e.replace(/(\d+(?:\.\d+)?)%/g,'($1/100)');
  e = e.replace(/[^0-9+\-*/().\s]/g,'').trim().replace(/[+\-*/.\s]+$/,'');
  if(!e || !/\d/.test(e)) return null;
  try{ const v=Function('"use strict";return ('+e+');')(); return Number.isFinite(v)?v:null; }catch(e){ return null; }
}

const issues = [];
const dups = {}; // grade -> map of key -> count
function log(sev, type, grade, id, detail){
  issues.push({ severity: sev, type, grade, id, detail });
}

let totalProblems = 0;
for (const g of GRADES) {
  const grade = M[g];
  if (!grade || !Array.isArray(grade.problems)) continue;
  const seen = {};
  grade.problems.forEach((p, i) => {
    const id = p.id || `${g}#${i}`;
    totalProblems++;
    const ans = p.answer;
    const choices = Array.isArray(p.choices) ? p.choices : [];

    // 题目重复
    const dkey = `${p.scene}|${p.question}|${ans}`;
    if (seen[dkey]) log('中','题目重复', g, id, { dupWith: seen[dkey] });
    else seen[dkey] = id;

    // 选项/答案检查（仅当存在 choices）
    if (choices.length) {
      // 答案不在选项中
      const inChoices = choices.some(c => String(c) === String(ans));
      if (!inChoices) log('高','答案不在选项中', g, id, { answer: ans, choices });
      // 选项重复
      const uniq = new Set(choices.map(c => String(c)));
      if (uniq.size !== choices.length) log('高','选项重复', g, id, { choices });
    }

    // 公式泄漏答案
    if (p.formula && tokenIn(p.formula, ans)) log('严重','公式泄漏答案', g, id, { formula: p.formula, answer: ans });
    // 题目泄漏答案
    if (p.question && tokenIn(p.question, ans)) log('高','题目泄漏答案', g, id, { question: p.question, answer: ans });
    // 场景泄漏答案
    if (p.scene && tokenIn(p.scene, ans)) log('中','场景泄漏答案', g, id, { scene: p.scene, answer: ans });

    // 公式与答案不符（跳过含 / 的分数语境，避免误报）
    if (p.formula && !/\//.test(p.formula)) {
      const ev = evalExpr(p.formula);
      if (ev != null && Number.isFinite(Number(ans)) && Math.abs(ev - Number(ans)) > 0.005) {
        log('严重','公式与答案不符', g, id, { formula: p.formula, eval: ev, answer: ans });
      }
    }

    // 探索步骤答案不在选项
    if (Array.isArray(p.discoverySteps)) {
      p.discoverySteps.forEach((ds, di) => {
        const dchoices = Array.isArray(ds.choices) ? ds.choices : [];
        if (dchoices.length && !dchoices.some(c => String(c) === String(ds.answer))) {
          log('严重','探索步骤答案不在选项中', g, `${id}.disc${di}`, { answer: ds.answer, choices: dchoices });
        }
        // 探索选项重复
        const du = new Set(dchoices.map(c => String(c)));
        if (du.size !== dchoices.length) log('高','探索步骤选项重复', g, `${id}.disc${di}`, { choices: dchoices });
      });
    }

    // 变式检查
    if (Array.isArray(p.variants)) {
      p.variants.forEach((v, vi) => {
        const vid = `${id}.v${vi}`;
        const vans = v.answer != null ? v.answer : ans;
        const vch = Array.isArray(v.choices) && v.choices.length ? v.choices : choices;
        if (vch.length) {
          if (!vch.some(c => String(c) === String(vans))) log('高','变式答案不在选项中', g, vid, { answer: vans, choices: vch });
          const vu = new Set(vch.map(c => String(c)));
          if (vu.size !== vch.length) log('高','变式选项重复', g, vid, { choices: vch });
        }
        if (v.formula && tokenIn(v.formula, vans)) log('严重','变式公式泄漏答案', g, vid, { formula: v.formula, answer: vans });
      });
    }
  });
}

// ---- 汇总 ----
const byType = {};
const bySev = {};
for (const it of issues){
  byType[it.type] = (byType[it.type]||0)+1;
  bySev[it.severity] = (bySev[it.severity]||0)+1;
}
const report = {
  source: 'LIVE per-grade files (math-data-<grade>.js)',
  NOT_auditedFile: 'data/math-data.js (未被 index.html 加载，是死文件)',
  totalProblems,
  issues,
  byType, bySev
};
fs.writeFileSync(path.join(__dirname, 'audit-live-report.json'), JSON.stringify(report, null, 2), 'utf8');

console.log('=== 真实数据源审计（按年级文件）===');
console.log('题目总数:', totalProblems);
console.log('问题总数:', issues.length);
console.log('按严重度:', JSON.stringify(bySev));
console.log('按类型:');
Object.entries(byType).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log('  ', String(v).padStart(4), k));
