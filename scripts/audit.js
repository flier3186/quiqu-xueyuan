const fs = require('fs');
const path = require('path');

const root = 'F:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master';

let totalIssues = 0;
let issues = [];
const gradeStats = {};

function issue(file, msg) {
  totalIssues++;
  issues.push(`[${file}] ${msg}`);
  console.log(`  ⚠ ${msg}`);
}

// 移除 JS 注释，保留代码逻辑
function stripComments(code) {
  return code.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

// 用 eval 方式安全提取变量（与 validate-all.js 相同策略）
// 先注入 window 全局变量，让数据文件能在 Node.js 中运行
function extractVar(rawCode, varName) {
  try {
    // 将 window 注入为全局变量
    global.window = {};
    eval(rawCode);
    const result = global.window[varName] || null;
    delete global.window;
    return result;
  } catch (e) {
    delete global.window;
    console.log(`  ${varName} 提取失败: ${e.message.substring(0, 80)}`);
    return null;
  }
}

// ============================================================
// 1. 数学题库审查
// ============================================================
console.log('\n=== 数学题库审查 ===\n');

const mainMath = fs.readFileSync(path.join(root, 'data', 'math-data.js'), 'utf8');
const mathData = extractVar(mainMath, 'MATH_BY_GRADE');

if (mathData && Object.keys(mathData).length > 0) {
  let totalProblems = 0, totalKP = 0, problemsWithVisual = 0, problemsMissingAnswer = 0;

  Object.keys(mathData).forEach(grade => {
    const g = mathData[grade];
    const problems = g.problems || [];
    const kps = g.knowledgeMap || [];
    gradeStats[grade] = { problems: problems.length, kp: kps.length };
    totalProblems += problems.length;
    totalKP += kps.length;

    problems.forEach((p, i) => {
      const lid = `${grade}-problem-${i}`;

      if (!p.id) { issue(lid, '缺少 id 字段'); totalIssues++; }
      if (!p.scene) { issue(lid, '缺少 scene 字段'); totalIssues++; }
      if (!p.question) { issue(lid, '缺少 question 字段'); totalIssues++; }
      if (p.answer === undefined || p.answer === null) {
        issue(lid, 'answer 为空');
        problemsMissingAnswer++;
      }
      if (!p.choices || !Array.isArray(p.choices)) { issue(lid, 'choices 缺失或不是数组'); totalIssues++; }
      if (!p.visualType) { issue(lid, '缺少 visualType'); totalIssues++; }
      if (!p.knowledge) { issue(lid, '缺少 knowledge 字段'); totalIssues++; }
      if (p.difficulty === undefined) { issue(lid, '缺少 difficulty 字段'); totalIssues++; }

      if (p.choices && p.answer !== undefined) {
        const correctFound = p.choices.some(c => String(c) === String(p.answer));
        if (!correctFound) issue(lid, `正确答案 ${p.answer} 不在 choices 中 [${JSON.stringify(p.choices)}]`);
      }

      if (p.visualData) problemsWithVisual++;

      if (p.discoverySteps) {
        p.discoverySteps.forEach((step, si) => {
          if (!step.q) { issue(lid, `discoverySteps[${si}].q 缺失`); totalIssues++; }
          if (!step.answer) { issue(lid, `discoverySteps[${si}].answer 缺失`); totalIssues++; }
          if (!step.choices || !Array.isArray(step.choices)) { issue(lid, `discoverySteps[${si}].choices 缺失`); totalIssues++; }
        });
      }

      if (p.explainLayers) {
        p.explainLayers.forEach((layer, li) => {
          if (!layer.title) { issue(lid, `explainLayers[${li}].title 缺失`); totalIssues++; }
          if (!layer.text) { issue(lid, `explainLayers[${li}].text 缺失`); totalIssues++; }
        });
      }
    });
  });

  console.log(`  年级数: ${Object.keys(gradeStats).length}`);
  console.log(`  总题目: ${totalProblems}`);
  console.log(`  总知识点: ${totalKP}`);
  console.log(`  有可视化: ${problemsWithVisual}`);
  console.log(`  answer 为空: ${problemsMissingAnswer}`);
  Object.keys(gradeStats).sort().forEach(g => {
    console.log(`    ${g}: ${gradeStats[g].problems}题, ${gradeStats[g].kp}知识点`);
  });
}

// ============================================================
// 2. 英语词库审查
// ============================================================
console.log('\n=== 英语词库审查 ===\n');

const engRaw = fs.readFileSync(path.join(root, 'data', 'english-vocab.js'), 'utf8');
const engClean = stripComments(engRaw);
const engData = extractVar(engClean, 'VOCAB_BY_GRADE');
let engIssues = 0, totalEngWords = 0;
if (engData) {
  Object.keys(engData).forEach(grade => {
    const words = engData[grade];
    if (!Array.isArray(words)) return;
    totalEngWords += words.length;
    words.forEach((w, i) => {
      const lid = `english-vocab.js:${grade}-word-${i}`;
      if (!w.w) { issue(lid, '缺少 w'); engIssues++; }
      if (!w.pos) { issue(lid, '缺少 pos'); engIssues++; }
      if (!w.def) { issue(lid, '缺少 def'); engIssues++; }
      if (!w.ex) { issue(lid, '缺少 ex'); engIssues++; }
      if (!w.coll || !Array.isArray(w.coll)) { issue(lid, 'coll 缺失'); engIssues++; }
      if (w.syn === undefined) { issue(lid, '缺少 syn'); engIssues++; }
      if (w.ant === undefined) { issue(lid, '缺少 ant'); engIssues++; }
      if (!w.unit) { issue(lid, '缺少 unit'); engIssues++; }
      if (!w.circle) { issue(lid, '缺少 circle'); engIssues++; }
    });
  });
  console.log(`  总词汇: ${totalEngWords}`);
  Object.keys(engData).forEach(g => console.log(`    ${g}: ${engData[g].length}词`));
} else {
  console.log('  无法提取 VOCAB_BY_GRADE');
}

// ============================================================
// 3. 口语场景审查
// ============================================================
console.log('\n=== 口语场景审查 ===\n');

const speakRaw = fs.readFileSync(path.join(root, 'data', 'english-scenarios.js'), 'utf8');
const speakClean = stripComments(speakRaw);
const speakData = extractVar(speakClean, 'SPEAK_SCENARIOS');
let speakIssues = 0;
if (speakData) {
  console.log(`  场景数: ${speakData.length}`);
  speakData.forEach((s, i) => {
    const lid = `english-scenarios.js:scenario-${i}`;
    if (!s.id) { issue(lid, '缺少 id'); speakIssues++; }
    if (!s.title) { issue(lid, '缺少 title'); speakIssues++; }
    if (!s.teacherLines || !Array.isArray(s.teacherLines)) { issue(lid, 'teacherLines 缺失'); speakIssues++; }
    if (!s.studentExpected || !Array.isArray(s.studentExpected)) { issue(lid, 'studentExpected 缺失'); speakIssues++; }
    if (!s.vocabulary || !Array.isArray(s.vocabulary)) { issue(lid, 'vocabulary 缺失'); speakIssues++; }
    if (s.teacherLines && s.studentExpected) {
      const tIds = s.teacherLines.map(t => t.id);
      s.studentExpected.forEach(se => {
        if (!tIds.includes(se.teacherLineId)) {
          issue(lid, `studentExpected.teacherLineId=${se.teacherLineId} 不在 teacherLines 中`);
          speakIssues++;
        }
      });
    }
  });
} else {
  console.log('  无法提取 SPEAK_SCENARIOS');
}

// ============================================================
// 4. 引擎代码审查
// ============================================================
console.log('\n=== 引擎代码审查 ===\n');

const engineFiles = [
  'engine/math-visual-v5.js',
  'engine/math-flow-v5.js',
  'engine/speak-engine-v5.js',
  'engine/english-flow-v5.js',
  'engine/weakness-detector-v5.js',
  'engine/progress-tracker-v5.js',
];

engineFiles.forEach(file => {
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  const lines = code.split('\n');
  lines.forEach((line, i) => {
    const ln = i + 1;
    const trimmed = line.trim();
    if (trimmed.startsWith('//')) return;
    if (trimmed.includes('console.log(') && !trimmed.includes('//')) {
      console.log(`  ⚠ [${file}:${ln}] console.log: ${trimmed.substring(0, 70)}`);
    }
    if (trimmed.includes('TODO') || trimmed.includes('FIXME') || trimmed.includes('HACK')) {
      console.log(`  ⚠ [${file}:${ln}] ${trimmed.substring(0, 80)}`);
    }
  });
});

// ============================================================
// 5. 异常检查
// ============================================================
console.log('\n=== 异常检查 ===\n');

if (mathData && Object.keys(mathData).length > 0) {
  Object.keys(gradeStats).forEach(g => {
    if (gradeStats[g].problems < 10 && ['7a','7b','8a','8b','9a','9b'].includes(g)) {
      console.log(`  ⚠ ${g}: 仅有 ${gradeStats[g].problems} 题（来自 math-3-6-extend.js 扩展题库）`);
    }
  });

  Object.keys(mathData).forEach(g => {
    const gData = mathData[g];
    if (!gData.knowledgeMap || gData.knowledgeMap.length === 0) {
      console.log(`  ⚠ ${g}: knowledgeMap 为空，影响弱项检测`);
    }
  });
}

// ============================================================
// 汇总
// ============================================================
console.log('\n========================================');
console.log(`审查完成。发现问题: ${totalIssues} 个`);
if (totalIssues > 0 && issues.length > 0) {
  console.log('\n问题明细:');
  issues.slice(0, 100).forEach(i => console.log(`  ${i}`));
  if (issues.length > 100) console.log(`  ... 还有 ${issues.length - 100} 条`);
} else {
  console.log('\n✅ 未发现数据格式问题！');
}
