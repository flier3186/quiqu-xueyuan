/**
 * scripts/_lib_math_knowledge.js
 * 题库 knowledge 快照的**唯一**读取实现（生成器与门禁共用，避免两处口径漂移）。
 *
 * 覆盖三个来源（孩子实际会遇到的题都在内）：
 *   · data/math-data-<册>.js   主题库
 *   · data/math-3-6-extend.js  3-6 年级扩展题（P2-7 修复后才真正进题库）
 *   · data/math-2a-2b.js       二年级兜底（Bar Model 入门等专有知识点）
 *
 * 返回 [{ g, k, n }]：g=册（如 '3a'），k=原始 knowledge 文本，n=出现次数（题量权重）
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GRADES = ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b',
                '7a', '7b', '8a', '8b', '9a', '9b'];

const RE_KNOWLEDGE = /"knowledge"\s*:\s*"([^"]+)"/g;

function ownerGradeOf(blocks, at) {
  let g = null;
  for (const b of blocks) { if (b.index < at) g = b.g; else break; }
  return g;
}

function readKnowledge() {
  const pairs = new Map();   // "g|k" -> {g,k,n}
  const bump = (g, k, n) => {
    if (!g || !k) return;
    const key = g + '|' + k;
    const cur = pairs.get(key);
    if (cur) cur.n += n; else pairs.set(key, { g, k, n });
  };

  for (const g of GRADES) {
    const f = path.join(ROOT, 'data', `math-data-${g}.js`);
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, 'utf8');
    const m = new Map();
    let x;
    RE_KNOWLEDGE.lastIndex = 0;
    while ((x = RE_KNOWLEDGE.exec(src))) m.set(x[1], (m.get(x[1]) || 0) + 1);
    for (const [k, n] of m) bump(g, k, n);
  }

  const scanBlocked = (file, blockRe, gExtract) => {
    const f = path.join(ROOT, 'data', file);
    if (!fs.existsSync(f)) return;
    const src = fs.readFileSync(f, 'utf8');
    const blocks = [];
    let b;
    const br = new RegExp(blockRe.source, 'g');
    while ((b = br.exec(src))) blocks.push({ g: gExtract(b[1]), index: b.index });
    let x;
    RE_KNOWLEDGE.lastIndex = 0;
    while ((x = RE_KNOWLEDGE.exec(src))) bump(ownerGradeOf(blocks, x.index), x[1], 1);
  };
  scanBlocked('math-3-6-extend.js', /"(\d[ab])_e"\s*:/, (s) => s);
  scanBlocked('math-2a-2b.js', /"(\d[ab])"\s*:\s*\{/, (s) => s);

  return [...pairs.values()];
}

// UI 可达年级：年级选择器只提供 2~6 年级（见 index.html 的年级栏）。
// 7a~9b 的文件存在且有题，但属于初中内容，8 条知识链（小学主线）按设计不覆盖，
// 且孩子从界面进不去 —— 所以"知识链覆盖率"这个体验指标只统计可达年级，
// 7~9 的覆盖情况单独作为信息项报告，避免用不可达内容稀释真实体验指标。
const REACHABLE_GRADES = ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b'];

module.exports = { readKnowledge, GRADES, REACHABLE_GRADES, ROOT };
