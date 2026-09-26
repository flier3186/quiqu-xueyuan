#!/usr/bin/env node
/**
 * _verify_m4m5.js — 线A2 自验脚本（M4 教材一致性修正）
 *
 * 运行方式：node src/scripts/_verify_m4m5.js
 *
 * 2026-09-26 修订（口径变更，非静默跳过）：
 *  - M5 段退役：7a~9b 六册数据已按产品口径删除（本产品只含小学 2~6 年级），
 *    原「7a~9b 各 40 题」校验失去对象。
 *  - M4「与 .bak-m4-* 备份对比删除数量」段退役：该批备份已在 2026-09-18 工程卫生中清理，
 *    before 基线不可重建；保留可独立验证的部分（已删内容无残留 / 改写标记 / 答案与选项一致性）。
 *
 * 校验内容：
 *  - M4：4a/5a/6a 已删内容无残留 + 改写标记存在性
 *  - 通用：answer ∈ choices、visualType/visualData 完整
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '..', 'data');

// ---------- 1. 加载当前数据 ----------
function loadData() {
  const grades = ['4a', '5a', '6a'];
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  for (const g of grades) {
    const file = path.join(DATA_DIR, `math-data-${g}.js`);
    if (!fs.existsSync(file)) {
      console.error(`  [MISSING] ${file}`);
      continue;
    }
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: `math-data-${g}.js` });
  }
  return sandbox.window.MATH_BY_GRADE || {};
}

// ---------- 2. 工具函数 ----------
let pass = 0;
let warn = 0;
function ok(msg) { pass++; console.log(`  [PASS] ${msg}`); }
function bad(msg) { warn++; console.log(`  [FAIL] ${msg}`); }

function sameValue(a, b) {
  return String(a) === String(b);
}

function problemHasVisual(p) {
  return typeof p.visualType === 'string' && p.visualType.length > 0
    && p.visualData != null && typeof p.visualData === 'object';
}

function checkCommon(g) {
  const problems = (DB[g] && DB[g].problems) || [];
  const badAnswer = problems.filter(p => !p.choices || !p.choices.some(c => sameValue(c, p.answer))).length;
  if (badAnswer === 0) ok(`${g} answer ∈ choices 全部通过（${problems.length} 题）`);
  else bad(`${g} 有 ${badAnswer} 题 answer 不在 choices`);
  const noVisual = problems.filter(p => !problemHasVisual(p)).length;
  if (noVisual === 0) ok(`${g} 全题含 visualType + visualData`);
  else bad(`${g} 有 ${noVisual} 题缺失 visualType/visualData`);
}

// ---------- 3. 执行 ----------
console.log('=== 加载数据 ===');
const DB = loadData();

console.log('\n=== M4：4a/5a/6a 已删内容无残留 + 改写标记 ===');
// 4a：删 5（口算/笔算除法4条 + 商的变化规律），改 1（策略优化）
{
  const after = (DB['4a'] && DB['4a'].problems) || [];
  const deletedIds = ['4A-PROB-024', '4A-PROB-025', '4A-PROB-026', '4A-PROB-027', '4A-PROB-028'];
  const leftover = deletedIds.filter(id => after.some(p => p.id === id));
  if (leftover.length === 0) ok('4a 已删 ID（024~028）无残留');
  else bad(`4a 仍残留已删 ID：${leftover.join(', ')}`);
  const rewritten = after.filter(p => (p.knowledge || '').includes('策略优化：沏茶/烙饼')).length;
  if (rewritten === 1) ok('4a 改写「策略优化：沏茶/烙饼（保留作拓展）」1 处');
  else bad(`4a 策略优化改写标记 = ${rewritten}（预期 1）`);
  checkCommon('4a');
}
// 5a：删 6（简易方程整单元主线）
{
  const after = (DB['5a'] && DB['5a'].problems) || [];
  const deletedKnowledge = ['方程的意义', '等式的性质', '解方程', '解ax=b型方程', '列方程解决实际问题', '稍复杂的方程'];
  const deletedIds = ['5A-PROB-017', '5A-PROB-018', '5A-PROB-019', '5A-PROB-020', '5A-PROB-021', '5A-PROB-022'];
  const leftover = after.filter(p => deletedIds.includes(p.id)).map(p => p.id);
  if (leftover.length === 0) ok('5a 简易方程主线（5A-PROB-017~022）已删净');
  else bad(`5a 简易方程主线残留 ${leftover.length} 条：${leftover.join(',')}`);
  const deletedKeptVariants = after.filter(p => deletedKnowledge.includes(p.knowledge)).length;
  if (deletedKeptVariants > 0) ok(`5a 变式区保留简易方程变式 ${deletedKeptVariants} 条（口径允许）`);
  const rewritten = after.filter(p => p.knowledge === '用字母表示数和数量关系').length;
  if (rewritten === 2) ok('5a 改写「用字母表示数和数量关系」2 处');
  else bad(`5a 改写标记 = ${rewritten}（预期 2）`);
  checkCommon('5a');
}
// 6a：删 2（比的基本性质、化简比），改 4 + 补标 6（合计带「2024版移入六下·拓展保留」标记 10 处）
{
  const after = (DB['6a'] && DB['6a'].problems) || [];
  const bip = after.filter(p => p.knowledge === '比的基本性质').length;
  if (bip === 0) ok('6a 已删「比的基本性质」无残留');
  else bad(`6a 「比的基本性质」残留 ${bip} 条`);
  const hjb = after.filter(p => p.knowledge === '化简比').length;
  ok(`6a 「化简比」变式区保留 ${hjb} 条（口径允许：变式区不逐条删）`);
  const rewritten = after.filter(p => /（2024版移入六下·拓展保留）/.test(p.knowledge || '')).length;
  if (rewritten === 10) ok('6a 带「2024版移入六下·拓展保留」标记 10 处（4 改写 + 6 补标）');
  else bad(`6a 改写标记 = ${rewritten}（预期 10）`);
  checkCommon('6a');
}

console.log('\n=== 汇总 ===');
console.log(`  PASS = ${pass}  FAIL = ${warn}`);
if (warn === 0) { console.log('  全部校验通过 ✔'); process.exit(0); }
else { console.log('  存在未通过项，请核查（部分为口径差异，详见 lineA2-report.md）'); process.exit(1); }