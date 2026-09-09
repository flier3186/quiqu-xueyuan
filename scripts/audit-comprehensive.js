// 全量质量审计：数学 + 英语闪卡 + 通用文本
// 目标：找出用户截图中暴露的 4 类问题，并扫描同类问题
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));

// ============================================================
// 1. 载入数据
// ============================================================
function balanced(text) {
  let depth = 0, inStr = false, esc = false, inCmt = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inCmt) { if (c === '\n') inCmt = false; continue; }
    if (inStr) { if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; } if (c === "'") inStr = false; continue; }
    if (c === '/' && n === '/') { inCmt = true; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) return text.slice(0, i + 1); }
  }
  return null;
}

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const a = html.indexOf('var MATH_BY_GRADE');
const M = eval('(' + balanced(html.slice(html.indexOf('{', a))) + ')');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'data', 'math-3-6-extend.js'), 'utf8'));
const E = global.window.MATH_EXTEND_3_6;
eval(fs.readFileSync(path.join(ROOT, 'data', 'math-2a-2b.js'), 'utf8'));
const G = global.window.MATH_GRADE_2;

// 提取英语相关映射
const photoMatch = html.match(/const ENG_PHOTO_MAP=\{([\s\S]*?)\n\};/);
const photoMapSrc = photoMatch ? photoMatch[1] : '';
const photoMap = {};
[...photoMapSrc.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)].forEach(m => photoMap[m[1]] = m[2]);
const abstractMatch = html.match(/const ENG_ABSTRACT_WORDS=new Set\(\[([^\]]*)\]\)/);
const abstractWords = abstractMatch ? [...abstractMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1]) : [];
const emojiMatch = html.match(/var emojiMap=\{([\s\S]*?)\n  \};/);
const emojiMap = {};
if (emojiMatch) {
  [...emojiMatch[1].matchAll(/([a-zA-Z]+):'([^']*)'/g)].forEach(m => emojiMap[m[1]] = m[2]);
}

// 提取 VOCAB_BY_GRADE
const vocabMatch = html.match(/const VOCAB_BY_GRADE = \{([\s\S]*?)\n\};/);
const VOCAB = vocabMatch ? eval('({' + vocabMatch[1] + '})') : {};

// 收集全部数学题目
const all = [];
function addBank(sourceObj, prefix) {
  for (const [g, d] of Object.entries(sourceObj)) {
    (d.problems || []).forEach((p, i) => all.push({ src: prefix + ':' + g + '#' + (i + 1), g, p }));
  }
}
addBank(M, '主库');
for (const [k, arr] of Object.entries(E)) arr.forEach((p, i) => all.push({ src: '扩展:' + k + '#' + (i + 1), g: k.replace('_e', ''), p }));
addBank(G, '二年级');

// ============================================================
// 2. 数学审计
// ============================================================
function evalExpr(f) {
  let e = String(f).replace(/\?/g, '').replace(/=/g, '').replace(/（[^）]*）/g, '').replace(/\([^0-9+\-*/.)]*\)/g, '');
  e = e.replace(/×/g, '*').replace(/÷/g, '/');
  e = e.replace(/(\d+(?:\.\d+)?)²/g, '($1*$1)');
  e = e.replace(/\/\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g, '/($1/$2)');
  e = e.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
  e = e.replace(/[^\d+\-*/().\s]/g, '').trim().replace(/[+\-*/.\s]+$/, '');
  if (!e || !/\d/.test(e)) return null;
  try { const v = Function('"use strict";return(' + e + ')')(); return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (err) { return null; }
}

function hasDuplicateChoices(choices) {
  if (!choices || choices.length < 2) return false;
  const s = new Set(choices.map(String));
  return s.size !== choices.length;
}

// 检测“算式是否直接把答案算完展示给孩子”
// 规则：如果 question/scene 中已经明确出现所有操作数数字，则 formula 不视为泄漏；
//       否则，formula 中未在题干出现的数字即视为泄漏（孩子不用读题就能算）。
function detectFormulaLeak(it, baseScene) {
  const f = String(it.f || '');
  const q = String(it.q || '');
  const scene = String(baseScene || '');
  if (!f || !f.includes('?')) return null;
  // 小数感知提取：3.14 是一个 token，不拆成 3 和 14；"0.?" 的 0 是结构提示，剥掉
  const fClean = f.replace(/0\s*\.\s*\?/g, '');
  const fNums = (fClean.match(/\d+(?:\.\d+)?/g) || []);
  const text = q + ' ' + scene;
  const textNums = new Set(text.match(/\d+(?:\.\d+)?/g) || []);
  // 常见结构常量：π、进率、周长/角度系数等
  const STRUCT_CONST = new Set(['2','3.14','4','10','12','24','60','90','100','180','360','1000','10000','100000','1000000','100000000']);
  const cnKnown = /八折|九折|七折|六折|五折|对折/.test(text);
  const leaked = fNums.filter(n => !STRUCT_CONST.has(n) && !textNums.has(n)
    && !(cnKnown && ['80','90','70','60','50'].includes(n) && /%|0\./.test(f)));
  if (leaked.length > 0) {
    return { leakedNums: leaked };
  }
  return null;
}

// 与运行时 _formulaLeaksPreAnswer 相同的门控逻辑（index.html）：
// 作答前算式被隐藏 → 泄漏已在运行时修复
function formulaGatedAtRuntime(it, baseScene) {
  const f = String(it.f || '').trim();
  if (!f) return false;
  const q = String(baseScene || '') + ' ' + String(it.q || '');
  if (/填分子|填分母|几分之几/.test(q) && /^\d+\s*\/\s*\d+$/.test(f)) return true;
  if (!/[+\-×÷x*]/.test(f)) return false;
  return !!detectFormulaLeak(it, baseScene);
}

// 检测 visualData 是否直接显示 total = answer
function detectVisualLeak(it) {
  const vd = it.visualData;
  if (!vd) return null;
  const ans = Number(it.a);
  if (Number.isFinite(ans)) {
    if (vd.total === ans) return { type: 'total-equals-answer', total: vd.total };
  }
  // 检测 parts 里是否直接写出答案
  if (Array.isArray(vd.parts)) {
    for (const part of vd.parts) {
      const val = part.val != null ? part.val : part.value;
      if (val === ans && part.label && /合计|答案|结果|总共|一共/.test(part.label)) {
        return { type: 'part-label-answer', val };
      }
    }
  }
  return null;
}

// 检测文本拼接异常（base.scene + variant.question 产生两段不同场景）
function detectConcatenation(base, variant) {
  const scene = String(base.scene || '');
  const vq = String(variant.question || '');
  // 如果 variant 没有自己的 scene，且 base.scene 和 variant.question 都含独立问题，可能拼接
  if (variant.scene) return null;
  const sceneQCount = (scene.match(/[？\?]/g) || []).length;
  const vqQCount = (vq.match(/[？\?]/g) || []).length;
  if (sceneQCount >= 1 && vqQCount >= 1) {
    return { sceneQuestions: sceneQCount, variantQuestions: vqQCount };
  }
  return null;
}

const mathIssues = [];
function logIssue(severity, src, type, detail) {
  mathIssues.push({ severity, src, type, detail });
}

for (const { src, g, p } of all) {
  const items = [{ q: p.question, f: p.formula, a: p.answer, c: p.choices, vd: p.visualData, tag: src, isBase: true }];
  (p.variants || []).forEach((v, i) => items.push({
    q: v.question, f: v.formula, a: v.answer, c: v.choices, vd: v.visualData,
    tag: src + ' 变式' + (i + 1), isVariant: true, baseScene: p.scene
  }));

  for (const it of items) {
    const tag = it.tag;
    const ans = it.a;
    const choices = it.c || [];

    // 必填字段
    if (!it.q) logIssue('高', tag, '缺少 question', null);
    if (it.a == null) logIssue('高', tag, '缺少 answer', null);
    if (!it.f) logIssue('中', tag, '缺少 formula', null);

    // 选项缺失/为空：变体未显式给 choices 时由 _safeChoices 生成，若生成器正确则不算高优缺陷；
    // 但母题 choices 为空则是真实问题。
    if (!choices.length) {
      const sev = it.isVariant ? '低' : '高';
      logIssue(sev, tag, '选项为空', { note: it.isVariant ? '由 _safeChoices 生成（模拟验证：无重复、含正确答案）' : null });
    }

    // 答案不在选项中
    if (choices.length && !choices.some(c => String(c) === String(ans))) {
      logIssue('高', tag, '答案不在选项中', { answer: ans, choices });
    }

    // 选项重复
    if (hasDuplicateChoices(choices)) {
      logIssue('高', tag, '选项重复', { choices });
    }

    // 算式与答案不一致（排除误报：分数显示/万·亿单位/图例/单位换算/约等）
    const fstr = String(it.f || '');
    const qstr = String(it.q || '');
    const isFractionDisplay = /^\d+\s*\/\s*\d+$/.test(fstr) && /填分子|填分母|几分之几/.test(qstr);
    const hasUnitWords = /[万亿]/.test(fstr);
    const isLegend = !/[+\-×÷]/.test(fstr.replace(/\d/g,'')) && fstr.includes('/');
    const hasUnitConvert = /cm.*km|km.*cm|毫米|厘米|分米|千米/.test(fstr) && /=/.test(fstr);
    const isApprox = fstr.includes('≈');
    // 分数加减（答案为最简分数的分子）：1/3+1/6=1/2 填分子 → 答案 1 正确
    const isFractionArith = /\d\s*\/\s*\d/.test(fstr) && /[+\-]/.test(fstr);
    // 比例尺换算（1cm 代表 1km）：×100000 得到厘米数，答案以 km 计
    const isScaleConv = /×\s*100000/.test(fstr) && /图上|实际|比例尺/.test(qstr);
    const isFractionAnswer = /^\d+\/\d+$/.test(String(ans));
    const ev = (isFractionDisplay || hasUnitWords || isLegend || hasUnitConvert || isFractionArith || isScaleConv || isFractionAnswer) ? null : evalExpr(it.f);
    if (ev != null && Number.isFinite(Number(ans))) {
      const diff = Math.abs(ev - Number(ans));
      const okApprox = isApprox && Math.abs(ev - Number(ans)) < 1;  // 约等题允许取整误差
      if (diff > 0.005 && !okApprox) {
        logIssue('高', tag, '算式结果≠答案', { formula: it.f, eval: ev, answer: ans });
      }
    }

    // 公式泄漏答案数字：运行时门控（_formulaLeaksPreAnswer）会在作答前隐藏此类算式
    const leak = detectFormulaLeak(it, it.baseScene || p.scene);
    if (leak) {
      const gated = formulaGatedAtRuntime(it, it.baseScene || p.scene);
      logIssue(gated ? '低' : '高', tag, gated ? '算式前置泄漏（运行时已门控隐藏）' : '算式前置泄漏（未门控，需修）', { leaked: leak.leakedNums, formula: it.f, text: it.q });
    }
    // 分数认读题：算式即答案（填分子/填分母）—— 运行时同样被门控隐藏
    if (!leak) {
      const fstr2 = String(it.f || '');
      if (/^\d+\s*\/\s*\d+$/.test(fstr2) && /填分子|填分母|几分之几/.test(String(it.q || ''))) {
        logIssue('低', tag, '分数认读算式即答案（运行时已门控隐藏）', { formula: it.f });
      }
    }

    // 可视化泄漏答案
    const vleak = detectVisualLeak(it);
    if (vleak) {
      logIssue('高', tag, '配图/图形直接显示答案', { type: vleak.type, value: vleak.total || vleak.val });
    }

    // 文本拼接（仅变体）：变体 question 与 base scene 出现各自独立的问题/场景
    // 运行时 _renderL3 规则：变体 question 含数字（自成完整题）时不再拼母题场景 → 已防护
    if (it.isVariant) {
      const concat = detectConcatenation(p, { question: it.q, scene: it.vd ? '' : '' });
      if (concat) {
        const selfContained = /\d/.test(String(it.q || ''));
        logIssue(selfContained ? '低' : '中', tag, selfContained ? '文本拼接（运行时已防：变式自成一体）' : '题目文本疑似拼接', { sceneQ: concat.sceneQuestions, variantQ: concat.variantQuestions, text: p.scene + ' ' + it.q });
      }
    }

    // 低级文本质量
    const qtext = String(it.q || '');
    if (/[。？！]{2,}/.test(qtext)) logIssue('中', tag, '标点重复', { q: qtext });
    if (/\s{2,}/.test(qtext)) logIssue('低', tag, '多余空格', { q: qtext });

    // 模拟当前 _safeChoices 生成器：变体无 choices 时会产出重复项吗？
    if (!choices.length && simulateSafeChoicesBug(ans)) {
      logIssue('高', tag, '选项生成器会产生重复选项', { answer: ans });
    }
  }
}

// 模拟修复后的 _safeChoices：是否仍会产生重复选项
function simulateSafeChoicesBug(answer) {
  const a = Number(answer);
  if (isNaN(a)) return false;
  const step = Math.max(1, Math.pow(10, Math.max(0, String(Math.floor(Math.abs(a))).length - 2)));
  const seen = new Set([String(a)]);
  const pool = [
    a + step, a - step, a + step * 2, a - step * 2,
    Math.round(a * 1.1), Math.round(a * 0.9), a + 50, a - 50
  ].filter(x => {
    if (x === a || x < 0) return false;
    const k = String(x);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  pool.sort((x, y) => Math.abs(x - a) - Math.abs(y - a));
  const distractors = pool.slice(0, 3);
  // 兜底补齐
  let guard = 1;
  while (distractors.length < 3 && guard < 100) {
    const cand = a + guard;
    const k = String(cand);
    if (!seen.has(k) && cand >= 0) { seen.add(k); distractors.push(cand); }
    guard++;
  }
  const merged = [a, ...distractors];
  return new Set(merged.map(String)).size !== merged.length;
}

// ============================================================
// 3. 英语闪卡审计
// ============================================================
const allWords = [];
for (const [grade, list] of Object.entries(VOCAB)) {
  (list || []).forEach(w => allWords.push({ grade, word: w.w, pos: w.pos, def: w.def, circle: w.circle }));
}

const photoSet = new Set(Object.keys(photoMap));
const abstractSet = new Set(abstractWords);
const emojiSet = new Set(Object.keys(emojiMap));

// 具体名词黑名单：这些词的照片极易命中无关图片，应强制 emoji
const UNRELIABLE_PHOTO = new Set([
  'ruler', 'pencil', 'eraser', 'crayon', 'pencil case', 'pencil box', 'bag', 'pen', 'book',
  'notebook', 'storybook', 'schoolbag', 'candy', 'key', 'lunchbox', 'snack', 'toy'
]);

const englishIssues = [];
for (const w of allWords) {
  const word = w.word.toLowerCase().trim();
  // 运行时优先级：abstract/UNRELIABLE → emoji；photoMap 仅对剩余词生效
  if (abstractSet.has(word) || UNRELIABLE_PHOTO.has(word)) {
    // 该词应走 emoji —— 若 photoMap 仍残留死条目则报出（数据已清理应为 0）
    if (photoSet.has(word)) {
      englishIssues.push({ word, issue: 'photoMap 残留死条目（运行时已走 emoji，建议删除）', current: 'photo(残留)' });
    } else if (!emojiSet.has(word)) {
      englishIssues.push({ word, issue: '强制 emoji 词缺少 emoji 映射', current: 'abstract' });
    }
  }
}

// ============================================================
// 4. 输出报告
// ============================================================
function severityOrder(s) { return { '高': 0, '中': 1, '低': 2 }[s] || 3; }
mathIssues.sort((a, b) => severityOrder(a.severity) - severityOrder(b.severity));

const high = mathIssues.filter(i => i.severity === '高');
const mid = mathIssues.filter(i => i.severity === '中');
const low = mathIssues.filter(i => i.severity === '低');

console.log('========== 奇趣学园全量质量审计报告 ==========');
console.log('数学题目总数:', all.length, '（含变式展开后更多）');
console.log('高风险问题:', high.length);
console.log('中风险问题:', mid.length);
console.log('低风险问题:', low.length);
console.log('英语闪卡建议:', englishIssues.length);
console.log('');

if (high.length) {
  console.log('---------- 高风险问题（必须修） ----------');
  for (const i of high.slice(0, 80)) {
    console.log(`[${i.severity}] ${i.src} · ${i.type}`);
    if (i.detail) console.log('  ', JSON.stringify(i.detail));
  }
  if (high.length > 80) console.log(`... 还有 ${high.length - 80} 条高风险未显示，见完整报告文件`);
}
if (mid.length) {
  console.log('\n---------- 中风险问题 ----------');
  for (const i of mid.slice(0, 40)) {
    console.log(`[${i.severity}] ${i.src} · ${i.type}`);
    if (i.detail) console.log('  ', JSON.stringify(i.detail));
  }
}
if (englishIssues.length) {
  console.log('\n---------- 英语闪卡建议 ----------');
  for (const i of englishIssues.slice(0, 60)) {
    console.log(`${i.word}: ${i.issue} (当前:${i.current})`);
  }
}

// 写入文件
const reportPath = path.join(ROOT, 'scripts', 'audit-comprehensive-report.json');
fs.writeFileSync(reportPath, JSON.stringify({
  summary: { mathTotal: all.length, high: high.length, mid: mid.length, low: low.length, english: englishIssues.length },
  mathIssues,
  englishIssues
}, null, 2));
console.log('\n完整 JSON 报告:', reportPath);
