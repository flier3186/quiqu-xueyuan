/**
 * 奇趣学园 · 内容校验（CI 门禁 + 本地共用）
 *
 * 用法：node scripts/validate-all.js
 * 退出码：0 = 通过，1 = 存在必须修复的错误
 *
 * 校验范围：
 *   1. index.html 内联脚本语法
 *   2. 运行时实际加载的数据 / 引擎文件语法
 *   3. 分年级题库（懒加载那批，即页面真正用的数据）：
 *      - 必填字段、答案在选项中、答案与算式一致（R1 铁律）、可视化类型自洽
 *   4. data/math-data.js（历史全集，页面不加载）仅统计，不作门禁
 */
const fs = require('fs');
const path = require('path');

// 仓库根目录：由脚本自身位置推导，不依赖任何本机绝对路径
const root = path.resolve(__dirname, '..');

const errors = [];
const warns = [];
const fail = (m) => { errors.push(m); };
const warn = (m) => { warns.push(m); };

// 页面运行时真正加载的数据 / 引擎文件
const RUNTIME_FILES = [
  'data/math-data-core.js',
  'data/math-2a-2b.js',
  'data/math-3-6-extend.js',
  'data/english-vocab.js',
  'data/english-phonics.js',
  'data/english-listening.js',
  'data/english-grammar.js',
  'data/english-scenarios.js',
  'data/storybooks.js',
  'data/word-dict.js',
  'data/vocab-themes.js',
  'data/listening-radio.js',
  'data/speak-8-new.js',
  'data/tpr-action-house.js',
  'engine/speak-engine-v5.js',
  'engine/math-flow-v5.js',
  'engine/math-visual-v5.js',
  'engine/english-flow-v5.js',
  'engine/spaced-review-v5.js',
  'engine/progress-tracker-v5.js',
  'engine/weakness-detector-v5.js',
  'engine/parent-panel.js'
];

// 合法的可视化类型：直接从引擎里提取渲染器方法名，
// 不硬编码清单 —— 否则引擎新增渲染器后这份清单会悄悄过期、产生假警报。
const visualSrc = fs.readFileSync(path.join(root, 'engine/math-visual-v5.js'), 'utf8');
const RENDERERS = new Set();
for (const m of visualSrc.matchAll(/^ {2}([a-zA-Z][a-zA-Z0-9_]*)\s*\(/gm)) RENDERERS.add(m[1]);

/** 只做四则运算的安全求值：先白名单字符，再用 Function 计算 */
function safeEvalArithmetic(expr) {
  if (!/^[\d\s+\-*/().]+$/.test(expr)) return null;
  try {
    const v = Function('"use strict";return (' + expr + ')')();
    return (typeof v === 'number' && isFinite(v)) ? v : null;
  } catch (e) { return null; }
}

/** 在沙箱里执行数据文件，返回 window 存根（数据文件用 window.XXX = ... 挂全局） */
function evalWithWindow(src, file) {
  const win = {};
  try {
    new Function('window', src)(win);
  } catch (e) {
    fail(`${file}: 语法错误 - ${e.message.substring(0, 140)}`);
    return null;
  }
  return win;
}

// ---------------------------------------------------------------- 1. index.html
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const blocks = html.match(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g) || [];
console.log(`[1/4] index.html 内联脚本块：${blocks.length}`);
blocks.forEach((s, i) => {
  const js = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  try { new Function(js); }
  catch (e) { fail(`index.html 内联块 #${i + 1}: ${e.message.substring(0, 140)}`); }
});

// ---------------------------------------------------------------- 2. 运行时文件语法
console.log(`[2/4] 运行时文件语法校验：${RUNTIME_FILES.length} 个`);
RUNTIME_FILES.forEach(f => {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { fail(`缺失文件: ${f}`); return; }
  try { new Function('window', fs.readFileSync(p, 'utf8'))({}); }
  catch (e) { fail(`${f}: 语法错误 - ${e.message.substring(0, 140)}`); }
});

// ---------------------------------------------------------------- 3. 分年级题库
const coreSrc = fs.readFileSync(path.join(root, 'data/math-data-core.js'), 'utf8');
const gradeMap = {};
coreSrc.replace(/'([2-9][ab])':\s*'([^']+)'/g, (_, g, f) => { gradeMap[g] = f; return _; });
const grades = Object.keys(gradeMap);
console.log(`[3/4] 分年级题库校验：${grades.length} 个年级（页面懒加载这批）`);

let totalProblems = 0, totalKP = 0, checkedFormulas = 0;
const problemsByGrade = {};

grades.forEach(g => {
  const f = 'data/' + gradeMap[g];
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { fail(`年级 ${g}: 数据文件缺失 ${f}`); return; }
  const win = evalWithWindow(fs.readFileSync(p, 'utf8'), f);
  if (!win) return;

  const data = (win.MATH_BY_GRADE || {})[g];
  if (!data) { fail(`${f}: 未挂载 window.MATH_BY_GRADE['${g}']`); return; }

  const problems = data.problems || [];
  const kps = (data.knowledgeMap || []).length;
  problemsByGrade[g] = problems.length;
  totalProblems += problems.length;
  totalKP += kps;

  problems.forEach((pr, idx) => {
    const tag = `[${g} #${idx + 1}]`;
    const q = pr.question || pr.q || '';

    // 必填字段
    if (!q) fail(`${tag} 缺少 question`);
    if (pr.answer === undefined || pr.answer === null || pr.answer === '')
      fail(`${tag} 缺少 answer — "${String(q).slice(0, 40)}"`);
    if (!pr.knowledge) warn(`${tag} 缺少 knowledge 标注 — "${String(q).slice(0, 40)}"`);

    // 答案必须出现在选项里（有选项时）
    if (Array.isArray(pr.choices) && pr.choices.length) {
      const hit = pr.choices.some(c => String(c) === String(pr.answer));
      if (!hit) fail(`${tag} 答案 ${JSON.stringify(pr.answer)} 不在选项中 choices=${JSON.stringify(pr.choices)} — "${String(q).slice(0, 40)}"`);
    }

    // ★ R1 铁律：答案必须与算式一致（杜绝"减法写成加法"这类低级错误）
    // 只检查"左边是纯四则、右边是单个 ?"的题型，避免误伤：
    //   - 有余数除法（23÷4=？...3，answer 是商）
    //   - 填分子（1/5+2/5=?/5，answer 是分子）
    if (pr.formula) {
      const parts = String(pr.formula).split('=');
      if (parts.length === 2 && /^[?？]+\s*$/.test(parts[1].trim())) {
        const lhs = parts[0]
          .replace(/[−–—]/g, '-').replace(/×/g, '*')
          // 先处理"除以一个分数"：6 ÷ 1/3 = 18，不是 (6÷1)÷3 = 2。
          // 必须在 ÷→/ 之前做，否则连除 60 ÷ 5 ÷ 4 = 3 会被误判成 60 ÷ (5/4) = 48。
          .replace(/÷\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g, '÷($1/$2)')
          .replace(/÷/g, '/');
        const expected = safeEvalArithmetic(lhs);
        if (expected !== null && typeof pr.answer === 'number') {
          checkedFormulas++;
          const diff = Math.abs(expected - pr.answer);
          if (diff > 1e-6) {
            // 对不上，但答案等于向下/向上取整 —— 可能合法使用了去尾法/进一法，人工确认
            const isRoundOff = Math.abs(Math.floor(expected) - pr.answer) < 1e-6
                            || Math.abs(Math.ceil(expected) - pr.answer) < 1e-6;
            if (isRoundOff) {
              warn(`${tag} 非整除，请人工确认（去尾法/进一法是否得当）— formula="${pr.formula}" 算式结果=${expected} answer=${pr.answer} — "${String(q).slice(0, 40)}"`);
            } else {
              fail(`${tag} R1 违规：答案与算式不符 — question="${String(q).slice(0, 40)}" formula="${pr.formula}" 算式结果=${expected} 但 answer=${pr.answer}`);
            }
          }
        }
      }
    }

    // 可视化类型：引擎用 _resolveType 智能路由，不看 visualData.type，
    // 所以这里只检查 visualType 有没有对应渲染器 —— 没有就会静默回退成 barModel，图会画错。
    if (pr.visualType && !RENDERERS.has(pr.visualType))
      fail(`${tag} visualType="${pr.visualType}" 在引擎中无对应渲染器，会静默回退为 barModel（图画错） — "${String(q).slice(0, 40)}"`);
  });
});

// ---------------------------------------------------------------- 4. 历史全集（仅统计）
console.log('[4/4] data/math-data.js（历史全集，页面不加载）仅统计，不作门禁');
let legacyTotal = null;
try {
  const legacySrc = fs.readFileSync(path.join(root, 'data/math-data.js'), 'utf8');
  const win = evalWithWindow(legacySrc, 'data/math-data.js');
  const byGrade = win.MATH_BY_GRADE || {};
  legacyTotal = Object.keys(byGrade).reduce((s, k) => s + ((byGrade[k].problems || []).length), 0);
} catch (e) { /* 仅统计，失败不阻断 */ }

// ---------------------------------------------------------------- 汇总
console.log('');
console.log('  题库统计（页面实际使用的分年级数据）：');
console.log(`    年级数 ${grades.length}，题目 ${totalProblems}，知识点 ${totalKP}`);
console.log(`    逐年级：${grades.map(g => `${g}=${problemsByGrade[g] || 0}`).join('  ')}`);
console.log(`    已核对算式与答案一致的题目：${checkedFormulas}`);
if (legacyTotal !== null) console.log(`    data/math-data.js（未加载的历史全集）：${legacyTotal} 题`);

if (warns.length) {
  console.log(`\n⚠️  警告 ${warns.length} 条（不影响通过）：`);
  warns.slice(0, 20).forEach(w => console.log('   - ' + w));
  if (warns.length > 20) console.log(`   ... 另有 ${warns.length - 20} 条`);
}

if (errors.length) {
  console.log(`\n❌ 校验失败，共 ${errors.length} 个必须修复的问题：`);
  errors.slice(0, 40).forEach(e => console.log('   - ' + e));
  if (errors.length > 40) console.log(`   ... 另有 ${errors.length - 40} 条`);
  process.exit(1);
}

console.log(`\n✅ 全部通过：${blocks.length} 个内联块 / ${RUNTIME_FILES.length} 个运行时文件 / ${grades.length} 个年级 / ${totalProblems} 题`);
process.exit(0);
