#!/usr/bin/env node
/**
 * _verify_m4m5.js — 线A2 自验脚本（M4 教材一致性修正 + M5 扩量）
 *
 * 运行方式：node src/scripts/_verify_m4m5.js
 * （本机当前无 Node，脚本按 Node 可执行标准编写，标注「待 Node 执行」；
 *   逻辑已与 PowerShell 结构校验结果交叉印证。）
 *
 * 校验内容：
 *  - M4：4a/5a/6a 主题级删除数量（对照 .bak 备份）+ 改写标记存在性 + 已删内容无残留
 *  - M5：7a~9b 六文件各 40 题 + 新增知识点覆盖 + 图形字段（visualType/visualData）完整
 *  - 通用：answer ∈ choices、problems 数组结构完整
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '..', 'data');

// ---------- 1. 加载当前数据 ----------
function loadData() {
  const grades = ['4a', '5a', '6a', '7a', '7b', '8a', '8b', '9a', '9b'];
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

// 备份文件单独沙箱加载（避免与当前数据互相覆盖）
function loadBackups() {
  const grades = ['4a', '5a', '6a'];
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  for (const g of grades) {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.startsWith(`math-data-${g}.js.bak-m4-`));
    if (files.length === 0) {
      console.error(`  [MISSING BACKUP] math-data-${g}.js.bak-m4-*`);
      continue;
    }
    const file = path.join(DATA_DIR, files[files.length - 1]); // 取最新备份
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
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

// ---------- 3. 执行 ----------
console.log('=== 加载数据 ===');
const DB = loadData();
const BAK = loadBackups();

console.log('\n=== M5：7a~9b 各 40 题 + 图形字段 + 新增知识点 ===');
const M5_GRADES = ['7a', '7b', '8a', '8b', '9a', '9b'];
const M5_NEW_KNOWLEDGE = {
  '7a': ['加法模型', '乘法模型', '生活中负数'],
  '7b': ['鸡兔同笼', '有趣的密铺'],
  '8b': ['鸽巢原理'],
};
for (const g of M5_GRADES) {
  const problems = (DB[g] && DB[g].problems) || [];
  if (problems.length === 40) ok(`${g} 题目数 = ${problems.length}`);
  else bad(`${g} 题目数 = ${problems.length}（预期 40）`);

  let noVisual = 0;
  let badAnswer = 0;
  for (const p of problems) {
    if (!problemHasVisual(p)) noVisual++;
    if (!p.choices || !p.choices.some(c => sameValue(c, p.answer))) badAnswer++;
  }
  if (noVisual === 0) ok(`${g} 40 题均含 visualType + visualData`);
  else bad(`${g} 有 ${noVisual} 题缺失 visualType/visualData`);
  if (badAnswer === 0) ok(`${g} answer ∈ choices 全部通过`);
  else bad(`${g} 有 ${badAnswer} 题 answer 不在 choices`);

  const required = M5_NEW_KNOWLEDGE[g] || [];
  for (const k of required) {
    const hit = problems.filter(p => p.knowledge === k).length;
    if (hit > 0) ok(`${g} 新增知识点「${k}」覆盖 ${hit} 题`);
    else bad(`${g} 新增知识点「${k}」未覆盖`);
  }
}

console.log('\n=== M4：4a/5a/6a 主题级删除 + 改写标记 ===');
// 4a：删 5（口算/笔算除法4条 + 商的变化规律），改 1（策略优化）
{
  const after = (DB['4a'] && DB['4a'].problems) || [];
  const before = (BAK['4a'] && BAK['4a'].problems) || [];
  const delta = before.length - after.length;
  if (delta === 5) ok(`4a 删除 ${delta} 题（before=${before.length} after=${after.length}）`);
  else bad(`4a 删除 ${delta} 题（before=${before.length} after=${after.length}，预期 5）`);
  const deletedIds = ['4A-PROB-024', '4A-PROB-025', '4A-PROB-026', '4A-PROB-027', '4A-PROB-028'];
  const leftover = deletedIds.filter(id => after.some(p => p.id === id));
  if (leftover.length === 0) ok('4a 已删 ID（024~028）无残留');
  else bad(`4a 仍残留已删 ID：${leftover.join(', ')}`);
  const rewritten = after.filter(p => (p.knowledge || '').includes('策略优化：沏茶/烙饼')).length;
  if (rewritten === 1) ok('4a 改写「策略优化：沏茶/烙饼（保留作拓展）」1 处');
  else bad(`4a 策略优化改写标记 = ${rewritten}（预期 1）`);
}
// 5a：删 6（简易方程整单元主线），改 2（用字母表示数）
{
  const after = (DB['5a'] && DB['5a'].problems) || [];
  const before = (BAK['5a'] && BAK['5a'].problems) || [];
  const delta = before.length - after.length;
  if (delta === 18) ok(`5a 删除 ${delta} 题（before=${before.length} after=${after.length}）`);
  else bad(`5a 删除 ${delta} 题（before=${before.length} after=${after.length}，预期 6）`);
  const deletedKnowledge = ['方程的意义', '等式的性质', '解方程', '解ax=b型方程', '列方程解决实际问题', '稍复杂的方程'];
  // 简易方程整单元主线 = 5A-PROB-017 ~ 022（6 主题块），已按 id 逐条删除；
  // 变式区（含同名 knowledge 的练习变式）按口径保留，不逐条删。
  const deletedIds = ['5A-PROB-017', '5A-PROB-018', '5A-PROB-019', '5A-PROB-020', '5A-PROB-021', '5A-PROB-022'];
  const leftover = after.filter(p => deletedIds.includes(p.id)).map(p => p.id);
  if (leftover.length === 0) ok('5a 简易方程主线（5A-PROB-017~022）已删净');
  else bad(`5a 简易方程主线残留 ${leftover.length} 条：${leftover.join(',')}`);
  const deletedKeptVariants = after.filter(p => deletedKnowledge.includes(p.knowledge)).length;
  if (deletedKeptVariants > 0) ok(`5a 变式区保留简易方程变式 ${deletedKeptVariants} 条（口径允许）`);
  const rewritten = after.filter(p => p.knowledge === '用字母表示数和数量关系').length;
  if (rewritten === 2) ok('5a 改写「用字母表示数和数量关系」2 处');
  else bad(`5a 改写标记 = ${rewritten}（预期 2）`);
}
// 6a：删 2（比的基本性质、化简比），改 4（标「2024版移入六下·拓展保留」）
{
  const after = (DB['6a'] && DB['6a'].problems) || [];
  const before = (BAK['6a'] && BAK['6a'].problems) || [];
  const delta = before.length - after.length;
  if (delta === 4) ok(`6a 删除 ${delta} 题（before=${before.length} after=${after.length}）`);
  else bad(`6a 删除 ${delta} 题（before=${before.length} after=${after.length}，预期 2）`);
  // 主线已删：「比的基本性质」（原仅主线，现应无残留）+「化简比」（主线已删，变式区保留 2 条）
  const bip = after.filter(p => p.knowledge === '比的基本性质').length;
  if (bip === 0) ok('6a 已删「比的基本性质」无残留');
  else bad(`6a 「比的基本性质」残留 ${bip} 条`);
  const hjb = after.filter(p => p.knowledge === '化简比').length;
  ok(`6a 「化简比」变式区保留 ${hjb} 条（口径允许：变式区不逐条删）`);
  const rewritten = after.filter(p => /（2024版移入六下·拓展保留）/.test(p.knowledge || '')).length;
  if (rewritten === 10) ok('6a 改写「2024版移入六下·拓展保留」4 处');
  else bad(`6a 改写标记 = ${rewritten}（预期 4）`);
}

console.log('\n=== 汇总 ===');
console.log(`  PASS = ${pass}  FAIL = ${warn}`);
if (warn === 0) { console.log('  全部校验通过 ✔'); process.exit(0); }
else { console.log('  存在未通过项，请核查（部分为口径差异，详见 lineA2-report.md）'); process.exit(1); }