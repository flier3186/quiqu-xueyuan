// expand-math.js · 数学题库扩充（类型安全版 + numberLine 跳过）
// 用法: node data/expand-math.js
const fs = require('fs');
const path = require('path');

const mathDataPath = path.join(__dirname, 'math-data.js');
let code = fs.readFileSync(mathDataPath, 'utf-8');

// 加载数据
const mockWindow = {};
const oldWindow = global.window;
global.window = mockWindow;
try { eval(code); } finally { global.window = oldWindow; }
const data = mockWindow.MATH_BY_GRADE;

const TOTAL_BEFORE = Object.values(data).reduce((s, g) => s + g.problems.length, 0);
const gradesToExpand = ['3b', '4a', '4b', '5a', '5b', '6a', '6b'];

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function extractNums(str) {
  if (!str) return [];
  const matches = str.match(/\d+/g);
  return matches ? [...new Set(matches.map(Number).filter(n => n >= 2))] : [];
}

function replaceNums(str, map) {
  if (!str || !map || Object.keys(map).length === 0) return str;
  return Object.keys(map).sort((a, b) => b - a).reduce((s, k) => {
    return s.split(k).join(map[k]);
  }, str);
}

// 智能替换：保持原始类型
function smartReplace(val, map) {
  if (typeof val === 'number') {
    for (const [k, v] of Object.entries(map)) {
      if (val === Number(k)) return v;
    }
    return val;
  }
  if (typeof val === 'string') {
    return replaceNums(val, map);
  }
  return val;
}

function modVisualData(vd, type, map) {
  if (!vd || !map || Object.keys(map).length === 0) return vd;
  const clone = JSON.parse(JSON.stringify(vd));

  if (type === 'barModel' && clone.total !== undefined) {
    const numTotal = smartReplace(clone.total, map);
    if (typeof numTotal === 'number' && numTotal >= 1) {
      clone.total = numTotal;
      let remaining = numTotal;
      clone.parts = (vd.parts || []).map((p, i) => {
        if (i === (vd.parts || []).length - 1) return { ...p, val: remaining };
        const ratio = (p.val || 0) / (vd.total || 1);
        const v = Math.round(numTotal * ratio);
        remaining -= v;
        return { ...p, val: v };
      });
    }
  } else if (type === 'numberBond' && clone.total !== undefined) {
    const numTotal = smartReplace(clone.total, map);
    if (typeof numTotal === 'number' && numTotal >= 1) {
      clone.total = numTotal;
      const p0 = Math.round(numTotal * 0.6);
      clone.parts = [
        { ...vd.parts[0], val: p0 },
        { ...vd.parts[1], val: numTotal - p0 }
      ];
    }
  } else if (type === 'areaModel') {
    if (clone.rows !== undefined) {
      const v = smartReplace(clone.rows, map);
      if (typeof v === 'number') clone.rows = v;
    }
    if (clone.cols !== undefined) {
      const v = smartReplace(clone.cols, map);
      if (typeof v === 'number') clone.cols = v;
    }
  }
  return clone;
}

// 检查是否适合生成变式（numberLine 和复杂 text-based 跳过）
function isSuitableForVariant(orig) {
  // numberLine: 改数字后 points 难保持范围一致，跳过
  if (orig.visualType === 'numberLine') return false;
  // 题目中包含多个数字且有复杂关系（如比例、分数运算）的，跳过
  const numCount = extractNums(orig.question + ' ' + (orig.formula || '')).length;
  if (numCount >= 5) return false;
  return true;
}

let totalAdded = 0;
let skipped = 0;

for (const gradeKey of gradesToExpand) {
  const grade = data[gradeKey];
  if (!grade || !grade.problems) continue;

  const kpGroups = {};
  grade.problems.forEach((p, idx) => {
    const kp = p.knowledge;
    if (!kpGroups[kp]) kpGroups[kp] = [];
    kpGroups[kp].push({ orig: p, origIdx: idx });
  });

  for (const kp of Object.keys(kpGroups)) {
    const items = kpGroups[kp];
    for (const { orig, origIdx } of items) {
      if (!isSuitableForVariant(orig)) {
        skipped++;
        continue;
      }
      for (let vIdx = 0; vIdx < 2; vIdx++) {
        const rng = seededRandom(gradeKey.charCodeAt(0) * 10000 + origIdx * 100 + vIdx * 10 + 7);
        const baseNums = extractNums(orig.question + ' ' + (orig.formula || '') + ' ' + (orig.scene || ''));

        const numMap = {};
        for (const n of baseNums) {
          const f = Math.round(80 + rng() * 70);
          const newVal = Math.round(n * f / 100);
          if (newVal >= 2 && newVal !== n) {
            numMap[n] = newVal;
          }
        }
        if (Object.keys(numMap).length === 0 && baseNums.length > 0) {
          const base = baseNums[0];
          numMap[base] = Math.max(2, base + Math.round(rng() * 10));
          if (numMap[base] === base) numMap[base] = base + 1;
        }

        const variant = JSON.parse(JSON.stringify(orig));

        // 文本替换（字符串）
        variant.scene = replaceNums(variant.scene || '', numMap);
        variant.question = replaceNums(variant.question || '', numMap);
        variant.formula = replaceNums(variant.formula || '', numMap);
        variant.hint = replaceNums(variant.hint || '', numMap);

        // choices：保持原始类型
        if (Array.isArray(variant.choices)) {
          const wasNumber = typeof variant.choices[0] === 'number';
          variant.choices = variant.choices.map(c => {
            if (wasNumber) return smartReplace(c, numMap);
            return replaceNums(String(c), numMap);
          });
        }

        // answer：保持原始类型
        if (typeof variant.answer === 'number') {
          variant.answer = smartReplace(variant.answer, numMap);
        } else if (typeof variant.answer === 'string') {
          variant.answer = replaceNums(variant.answer, numMap);
        }

        // visualData
        if (variant.visualData && variant.visualType) {
          variant.visualData = modVisualData(variant.visualData, variant.visualType, numMap);
        }

        // variants
        if (Array.isArray(variant.variants)) {
          variant.variants = variant.variants.map(v => {
            const nv = JSON.parse(JSON.stringify(v));
            nv.question = replaceNums(nv.question || '', numMap);
            nv.formula = replaceNums(nv.formula || '', numMap);
            nv.hint = replaceNums(nv.hint || '', numMap);
            if (typeof nv.answer === 'number') {
              nv.answer = smartReplace(nv.answer, numMap);
            } else if (typeof nv.answer === 'string') {
              nv.answer = replaceNums(nv.answer, numMap);
            }
            return nv;
          });
        }

        variant.knowledge = kp;
        grade.problems.push(variant);
        totalAdded++;
      }
    }
  }
  console.log(gradeKey + ': ' + grade.problems.length + ' 题');
}

const TOTAL_AFTER = Object.values(data).reduce((s, g) => s + g.problems.length, 0);
console.log('\n总计: ' + TOTAL_BEFORE + ' → ' + TOTAL_AFTER + ' 题 (新增 ' + (TOTAL_AFTER - TOTAL_BEFORE) + ')');
console.log('跳过 numberLine/复杂题目: ' + skipped + ' 道');

// 写回文件
const startMarker = 'window.MATH_BY_GRADE = ';
const startIdx = code.indexOf(startMarker);
const prefix = code.substring(0, startIdx + startMarker.length);
const suffix = code.substring(code.lastIndexOf('};') + 2);
const jsonStr = JSON.stringify(data);
const newCode = prefix + jsonStr + '\n' + suffix;
fs.writeFileSync(mathDataPath, newCode, 'utf-8');
console.log('math-data.js 已更新');
