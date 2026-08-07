// 修复新增题目中的 visualData 格式不匹配问题
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. fractionStrip 题目：numerator/denominator → num/den
const fsReplacements = [
  { id: '6A-FS-NEW', num: 1, den: 3 },
  { id: '6A-FS-NEW-002', num: 1, den: 4 },
  { id: '6A-FS-NEW-003', num: 3, den: 5 },
  { id: '6A-FS-NEW-004', num: 2, den: 6 },
  { id: '6A-FS-NEW-005', num: 3, den: 4 },
  { id: '6B-FS-NEW', num: 2, den: 5 },
  { id: '6B-FS-NEW-002', num: 3, den: 8 },
  { id: '6B-FS-NEW-003', num: 5, den: 6 },
  { id: '6B-FS-NEW-004', num: 4, den: 10 },
  { id: '6B-FS-NEW-005', num: 7, den: 12 },
  { id: '7A-FS-NEW', num: 3, den: 7 },
  { id: '7A-FS-NEW-002', num: 5, den: 9 },
  { id: '7A-FS-NEW-003', num: 2, den: 3 },
  { id: '7A-FS-NEW-004', num: 7, den: 10 },
  { id: '7A-FS-NEW-005', num: 4, den: 9 },
  { id: '7B-FS-NEW', num: 5, den: 6 },
  { id: '7B-FS-NEW-002', num: 1, den: 6 },
  { id: '7B-FS-NEW-003', num: 2, den: 7 },
  { id: '7B-FS-NEW-004', num: 8, den: 12 },
  { id: '7B-FS-NEW-005', num: 3, den: 10 },
  { id: '8A-FS-NEW', num: 4, den: 11 },
  { id: '8A-FS-NEW-002', num: 7, den: 15 },
  { id: '8A-FS-NEW-003', num: 9, den: 12 },
  { id: '8A-FS-NEW-004', num: 1, den: 8 },
  { id: '8A-FS-NEW-005', num: 5, den: 14 },
  { id: '8B-FS-NEW', num: 6, den: 13 },
  { id: '8B-FS-NEW-002', num: 10, den: 15 },
  { id: '8B-FS-NEW-003', num: 3, den: 11 },
  { id: '8B-FS-NEW-004', num: 8, den: 17 },
  { id: '8B-FS-NEW-005', num: 5, den: 16 },
  { id: '9A-FS-NEW', num: 7, den: 18 },
  { id: '9A-FS-NEW-002', num: 11, den: 20 },
  { id: '9A-FS-NEW-003', num: 12, den: 18 },
  { id: '9A-FS-NEW-004', num: 5, den: 14 },
  { id: '9A-FS-NEW-005', num: 9, den: 22 },
  { id: '9B-FS-NEW', num: 8, den: 21 },
  { id: '9B-FS-NEW-002', num: 13, den: 24 },
  { id: '9B-FS-NEW-003', num: 15, den: 20 },
  { id: '9B-FS-NEW-004', num: 7, den: 18 },
  { id: '9B-FS-NEW-005', num: 10, den: 27 },
];

for (const item of fsReplacements) {
  // 找到该题的 visualData，替换 numerator→num, denominator→den
  const pattern = `"id": "${item.id}"`;
  const idx = content.indexOf(pattern);
  if (idx === -1) {
    console.warn(`未找到题目 ${item.id}`);
    continue;
  }
  // 找前面的 visualData
  const vdIdx = content.lastIndexOf('"visualData"', idx);
  if (vdIdx === -1) continue;
  const vdEnd = content.indexOf('}', vdIdx);
  const vdBefore = content.substring(vdIdx, vdEnd + 1);
  // 替换
  let newVd = vdBefore
    .replace(/"numerator":\s*(\d+)/, '"num":$1')
    .replace(/"denominator":\s*(\d+)/, '"den":$1');
  content = content.substring(0, vdIdx) + newVd + content.substring(vdEnd + 1);
  console.log(`  修复 ${item.id}: numerator/denominator → num/den`);
}

// 2. numberLine 题目：point → points:[{pos, label}]
const nlReplacements = [
  // 6a
  { id: '6A-NL-NEW-001', min: -3, max: 3, point: 2 },
  { id: '6A-NL-NEW-002', min: -5, max: 5, point: -3 },
  { id: '6A-NL-NEW-003', min: -4, max: 4, point: 0 },
  { id: '6A-NL-NEW-004', min: -2, max: 6, point: 4 },
  { id: '6A-NL-NEW-005', min: -6, max: 2, point: -1 },
  // 6b
  { id: '6B-NL-NEW-001', min: 0, max: 5, point: 2.5 },
  { id: '6B-NL-NEW-002', min: 0, max: 3, point: 1.75 },
  { id: '6B-NL-NEW-003', min: 0, max: 10, point: 3.2 },
  { id: '6B-NL-NEW-004', min: -3, max: 3, point: -1.5 },
  { id: '6B-NL-NEW-005', min: 0, max: 4, point: 1.5 },
  // 7a
  { id: '7A-NL-NEW-001', min: -5, max: 5, point: -2 },
  { id: '7A-NL-NEW-002', min: -4, max: 4, point: 3 },
  { id: '7A-NL-NEW-003', min: -3, max: 7, point: 1 },
  { id: '7A-NL-NEW-004', min: -6, max: 0, point: -4 },
  { id: '7A-NL-NEW-005', min: -2, max: 6, point: 0 },
  // 7b
  { id: '7B-NL-NEW-001', min: -8, max: 8, point: 5 },
  { id: '7B-NL-NEW-002', min: -10, max: 0, point: -3 },
  { id: '7B-NL-NEW-003', min: -5, max: 5, point: 0 },
  { id: '7B-NL-NEW-004', min: -6, max: 4, point: -2 },
  { id: '7B-NL-NEW-005', min: -3, max: 7, point: 6 },
  // 8a
  { id: '8A-NL-NEW-001', min: -10, max: 10, point: 7 },
  { id: '8A-NL-NEW-002', min: -8, max: 2, point: -5 },
  { id: '8A-NL-NEW-003', min: -4, max: 6, point: 3 },
  { id: '8A-NL-NEW-004', min: -7, max: 3, point: -1 },
  { id: '8A-NL-NEW-005', min: -5, max: 5, point: 4 },
  // 8b
  { id: '8B-NL-NEW-001', min: -12, max: 12, point: 9 },
  { id: '8B-NL-NEW-002', min: -10, max: 0, point: -7 },
  { id: '8B-NL-NEW-003', min: -6, max: 4, point: 2 },
  { id: '8B-NL-NEW-004', min: -9, max: 3, point: -4 },
  { id: '8B-NL-NEW-005', min: -7, max: 5, point: 0 },
  // 9a
  { id: '9A-NL-NEW-001', min: -15, max: 15, point: 11 },
  { id: '9A-NL-NEW-002', min: -12, max: 8, point: -8 },
  { id: '9A-NL-NEW-003', min: -8, max: 2, point: 5 },
  { id: '9A-NL-NEW-004', min: -11, max: 1, point: -3 },
  { id: '9A-NL-NEW-005', min: -6, max: 10, point: 0 },
  // 9b
  { id: '9B-NL-NEW-001', min: -18, max: 18, point: 13 },
  { id: '9B-NL-NEW-002', min: -14, max: 10, point: -10 },
  { id: '9B-NL-NEW-003', min: -10, max: 0, point: 7 },
  { id: '9B-NL-NEW-004', min: -13, max: 3, point: -5 },
  { id: '9B-NL-NEW-005', min: -8, max: 12, point: 0 },
];

for (const item of nlReplacements) {
  const pattern = `"id": "${item.id}"`;
  const idx = content.indexOf(pattern);
  if (idx === -1) {
    console.warn(`未找到题目 ${item.id}`);
    continue;
  }
  const vdIdx = content.lastIndexOf('"visualData"', idx);
  if (vdIdx === -1) continue;
  const vdEnd = content.indexOf('}', vdIdx);
  const vdBefore = content.substring(vdIdx, vdEnd + 1);
  const newVd = vdBefore.replace(/"point":\s*([0-9.-]+)/, '"points":[{"pos":$1,"label":"$1"}]');
  content = content.substring(0, vdIdx) + newVd + content.substring(vdEnd + 1);
  console.log(`  修复 ${item.id}: point → points`);
}

// 3. 修复 formula 字段（numberLine 题目 formula 显示为 "/"）
for (const item of nlReplacements) {
  const pattern = `"id": "${item.id}"`;
  const idx = content.indexOf(pattern);
  if (idx === -1) continue;
  // 找前面最近的 formula 字段
  const fmtIdx = content.lastIndexOf('"formula"', idx);
  if (fmtIdx === -1) continue;
  const fmtEnd = content.indexOf(',', fmtIdx);
  const fmtBefore = content.substring(fmtIdx, fmtEnd);
  if (fmtBefore.includes('"/"')) {
    const newFmt = `"formula": "${item.min} ~ ${item.max}, 点=${item.point}"`;
    content = content.substring(0, fmtIdx) + newFmt + content.substring(fmtEnd);
    console.log(`  修复 ${item.id}: formula 显示内容`);
  }
}

// 4. 修复 fractionStrip 题目的 formula 字段
for (const item of fsReplacements) {
  const pattern = `"id": "${item.id}"`;
  const idx = content.indexOf(pattern);
  if (idx === -1) continue;
  const fmtIdx = content.lastIndexOf('"formula"', idx);
  if (fmtIdx === -1) continue;
  const fmtEnd = content.indexOf(',', fmtIdx);
  const fmtBefore = content.substring(fmtIdx, fmtEnd);
  if (fmtBefore.includes('"/"')) {
    const newFmt = `"formula": "${item.num}/${item.den}"`;
    content = content.substring(0, fmtIdx) + newFmt + content.substring(fmtEnd);
    console.log(`  修复 ${item.id}: formula 显示 ${item.num}/${item.den}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n数据格式修复完成');

// 验证
const w = {};
global.window = w;
require(filePath);
const total = Object.values(w.MATH_BY_GRADE).reduce((s, g) => s + (g.problems ? g.problems.length : 0), 0);
console.log('总题目数:', total);

// 抽查几道题目验证格式
const checkProblems = [
  '6B-FS-NEW-001',
  '6B-NL-NEW-001',
  '8A-Geo-NEW-001',
];
for (const id of checkProblems) {
  const p = Object.values(w.MATH_BY_GRADE).flat().find(g => g.problems && g.problems.find(x => x.id === id));
  if (p) {
    console.log(`  ${id}: visualData=${JSON.stringify(p.visualData)}, formula="${p.formula}"`);
  } else {
    console.warn(`  ${id}: 未找到`);
  }
}
