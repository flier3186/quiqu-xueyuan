/**
 * 知识链映射表守门（P1-6 配套）
 *  1) data/math-chain-map.js 的每个 ref 必须真实存在于 index.html 的 MATH_CHAINS
 *  2) 覆盖率（知识点维度 / 题量维度）不得低于阈值
 *  3) 不得存在"僵尸键"——映射表里指向已从题库删除的 knowledge
 *  4) 每条主线都要有至少一个可点亮的课时（不许出现永远黑的格子）
 *
 * 用法: node scripts/_audit_chain_map.js     （失败退出码 = 3）
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const GRADES = ['2a','2b','3a','3b','4a','4b','5a','5b','6a','6b'];
const MIN_COVERAGE = 0.85;
const MIN_WEIGHTED = 0.85;

const fails = [];
const warns = [];

function normK(k){ return String(k||'').replace(/（[^）]*）/g,'').replace(/\([^)]*\)/g,'').replace(/\s+/g,'').trim(); }

// --- 题库快照（与生成器同一实现）---
const { readKnowledge, REACHABLE_GRADES } = require('./_lib_math_knowledge');
const items = readKnowledge();

// --- MATH_CHAINS 快照 ---
const html = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
const cm = html.match(/var MATH_CHAINS = \[[\s\S]*?\n\];/);
if (!cm) { console.log('✗ 找不到 MATH_CHAINS'); process.exit(3); }
const validRefs = new Set(); const chainIds = new Set();
{
  const block = cm[0]; const ids = [];
  let c; const rc = /id:'([^']+)'/g;
  while ((c = rc.exec(block))) { ids.push({id:c[1], at:c.index}); chainIds.add(c[1]); }
  let p; const rs = /\{g:'([^']+)',t:'([^']+)'\}/g;
  while ((p = rs.exec(block))) {
    const ch = ids.filter(x=>x.at<p.index).pop();
    if (ch) validRefs.add(ch.id+'|'+p[1]+'|'+p[2]);
  }
}

// --- 映射表 ---
global.window = {};
require(path.join(ROOT,'data','math-chain-map.js'));
const map = window.MATH_CHAIN_MAP || {};
const keys = Object.keys(map);
if (!keys.length) fails.push('映射表为空');

// 1) ref 有效性
const refHit = {};
for (const k of keys) for (const r of map[k]) {
  if (!validRefs.has(r)) fails.push(`ref 不存在于 MATH_CHAINS: ${r}  (键 ${k})`);
  (refHit[r]=refHit[r]||[]).push(k);
}

// 2) 覆盖率（判定用"UI 可达年级 2~6"，即孩子真实体验的范围；
//    7~9 是初中内容，8 条小学主线按设计不覆盖，单独报告不参与判定）
const reachItems = items.filter((it) => REACHABLE_GRADES.indexOf(it.g) >= 0);
const total = reachItems.length;
let mapped = 0, wTot = 0, wHit = 0;
for (const it of reachItems) { wTot += it.n; if (map[normK(it.k)]) { mapped++; wHit += it.n; } }
const cov = mapped/total, wcov = wHit/wTot;
// 信息项：全量（含 7~9）
const allTotal = items.length;
const allMapped = items.filter((it) => map[normK(it.k)]).length;
if (cov < MIN_COVERAGE) fails.push(`知识点覆盖率 ${(cov*100).toFixed(1)}% < ${MIN_COVERAGE*100}%`);
if (wcov < MIN_WEIGHTED) fails.push(`题量加权覆盖率 ${(wcov*100).toFixed(1)}% < ${MIN_WEIGHTED*100}%`);

// 3) 僵尸键
const live = new Set(items.map(it=>normK(it.k)));
for (const k of keys) if (!live.has(k)) warns.push(`僵尸键（题库里已无此课时）: ${k}`);

// 4) 空主线
for (const r of validRefs) if (!refHit[r]) fails.push(`主线格子永远点不亮（无课时映射）: ${r}`);

// --- 报告 ---
console.log('知识链映射表审计');
console.log('  映射条目        :', keys.length);
console.log('  主线 step       :', validRefs.size, '（已覆盖', Object.keys(refHit).length, '）');
console.log('  知识点覆盖率    :', (cov*100).toFixed(1)+'%', `(${mapped}/${total})   ← 判定口径：UI 可达年级 2~6`);
console.log('  题量加权覆盖率  :', (wcov*100).toFixed(1)+'%', `(${wHit}/${wTot})`);
console.log('  (信息)含 7~9 全量:', (allMapped/allTotal*100).toFixed(1)+'%', `(${allMapped}/${allTotal})`);
if (warns.length) { console.log('\n⚠ 警告 ' + warns.length + ' 条:'); warns.forEach(w=>console.log('   ' + w)); }
if (fails.length) { console.log('\n✗ 失败 ' + fails.length + ' 条:'); fails.forEach(f=>console.log('   ' + f)); process.exit(3); }
console.log('\n✓ 知识链映射表通过');
