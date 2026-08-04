// data-quality-audit.js · 奇趣学园数据文件全面质量审计
const fs = require('fs');
const path = require('path');

console.log('========================================');
console.log('  奇趣学园 data/ 目录全面质量审计');
console.log('========================================\n');

let statistics = {};
const VALID_COLORS = ['#00A896', '#F5B800', '#FB923C', '#E8A0BF', '#1E3A5F'];
const VALID_VISUAL_TYPES = ['barModel', 'areaModel', 'numberBond', 'numberLine', 'fractionStrip', 'geometry'];

function auditMathData() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'math-data.js'), 'utf-8'));
    const data = w.MATH_BY_GRADE;
    if (!data) { issues.push('window.MATH_BY_GRADE 未定义'); return { issues, stats: {} }; }
    const gradeKeys = Object.keys(data);
    console.log(`  年级数: ${gradeKeys.length} (${gradeKeys.join(', ')})`);
    let totalProblems = 0, totalKnowledge = 0, knowledgeMap = {};
    gradeKeys.forEach(gk => {
      const g = data[gk]; const label = `年级${gk}`;
      if (!g.problems) return;
      if (g.knowledgeMap) g.knowledgeMap.forEach(km => { const key = `${gk}_${km.id || km.name}`; if (knowledgeMap[key]) issues.push(`${label} 知识点重复: ${km.id || km.name}`); else knowledgeMap[key] = true; totalKnowledge++; });
      g.problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `${label} #${idx + 1}`;
        ['scene','question','formula','answer','choices','visualType','visualData','knowledge','difficulty','hint','variants'].forEach(f => { if (p[f] === undefined || p[f] === null) issues.push(`${probLabel} 缺少字段: ${f}`); });
        if (p.choices && p.answer !== undefined && !p.choices.includes(p.answer)) issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中 - ${p.question?.substring(0,30)}`);
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
        if (p.variants && p.variants.length < 2) issues.push(`${probLabel} variants少于2个`);
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) issues.push(`${probLabel} visualType无效: ${p.visualType}`);
        if (p.visualType === 'barModel' && p.visualData) { const vd = p.visualData; if (vd.total !== undefined && vd.parts) { const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0); if (Math.abs(sum - vd.total) > 0.01) issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total})`); } }
        if (p.visualType === 'numberBond' && p.visualData) { const vd = p.visualData; if (vd.total !== undefined && vd.parts) { const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0); if (Math.abs(sum - vd.total) > 0.01) issues.push(`${probLabel} numberBond parts之和(${sum})≠total(${vd.total})`); } }
      });
    });
    statistics.math_data = { totalProblems, totalKnowledge };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  知识点总数: ${totalKnowledge}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_data };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditMath2a2b() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'math-2a-2b.js'), 'utf-8'));
    const data = w.MATH_GRADE_2;
    if (!data) { issues.push('window.MATH_GRADE_2 未定义'); return { issues, stats: {} }; }
    const gradeKeys = Object.keys(data);
    console.log(`  年级数: ${gradeKeys.length} (${gradeKeys.join(', ')})`);
    let totalProblems = 0, totalKnowledge = 0;
    gradeKeys.forEach(gk => {
      const g = data[gk]; const label = `年级${gk}`;
      if (!g.problems) return;
      g.problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `${label} #${idx + 1}`;
        ['scene','question','formula','answer','choices','visualType','visualData','knowledge','difficulty','hint','variants'].forEach(f => { if (p[f] === undefined || p[f] === null) issues.push(`${probLabel} 缺少字段: ${f}`); });
        if (p.choices && p.answer !== undefined && !p.choices.includes(p.answer)) issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中`);
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
        if (p.variants && p.variants.length < 2) issues.push(`${probLabel} variants少于2个`);
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) issues.push(`${probLabel} visualType无效: ${p.visualType}`);
        if (p.visualType === 'barModel' && p.visualData) { const vd = p.visualData; if (vd.total !== undefined && vd.parts) { const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0); if (Math.abs(sum - vd.total) > 0.01) issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total})`); } }
        if (p.knowledge) totalKnowledge++;
      });
    });
    statistics.math_2a_2b = { totalProblems, totalKnowledge };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  知识点总数: ${totalKnowledge}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_2a_2b };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditMath3_6Extend() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'math-3-6-extend.js'), 'utf-8'));
    const data = w.MATH_EXTEND_3_6;
    if (!data) { issues.push('window.MATH_EXTEND_3_6 未定义'); return { issues, stats: {} }; }
    console.log(`  年级分组数: ${Object.keys(data).length}`);
    let totalProblems = 0;
    Object.keys(data).forEach(gk => {
      const problems = data[gk];
      if (!Array.isArray(problems)) { issues.push(`${gk} 不是数组`); return; }
      problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `分组${gk} #${idx + 1}`;
        ['scene','question','formula','answer','choices','visualType','visualData','knowledge','difficulty','hint','variants'].forEach(f => { if (p[f] === undefined || p[f] === null) issues.push(`${probLabel} 缺少字段: ${f}`); });
        if (p.choices && p.answer !== undefined && !p.choices.includes(p.answer)) issues.push(`${probLabel} answer不在choices中`);
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) issues.push(`${probLabel} difficulty超出范围`);
        if (p.variants && p.variants.length < 2) issues.push(`${probLabel} variants少于2个`);
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) issues.push(`${probLabel} visualType无效`);
      });
    });
    statistics.math_3_6_extend = { totalProblems };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_3_6_extend };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditEnglishVocab() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'english-vocab.js'), 'utf-8'));
    const data = w.VOCAB_BY_GRADE;
    if (!data) { issues.push('window.VOCAB_BY_GRADE 未定义'); return { issues, stats: {} }; }
    console.log(`  年级数: ${Object.keys(data).length}`);
    let totalWords = 0;
    Object.keys(data).forEach(gk => {
      const words = data[gk];
      if (!Array.isArray(words)) { issues.push(`${gk} 不是数组`); return; }
      words.forEach((w, idx) => {
        totalWords++;
        const label = `年级${gk} #${idx + 1}`;
        ['w','pos','def','ex','coll','syn','ant','unit','circle'].forEach(f => { if (w[f] === undefined || w[f] === null) issues.push(`${label} 缺少字段: ${f}`); });
      });
    });
    statistics.english_vocab = { totalWords };
    console.log(`  词汇总数: ${totalWords}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_vocab };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditEnglishPhonics() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'english-phonics.js'), 'utf-8'));
    const letters = w.PHONICS_LETTERS;
    const stages = w.PHONICS_STAGES;
    if (!letters) { issues.push('window.PHONICS_LETTERS 未定义'); return { issues, stats: {} }; }
    console.log(`  字母/组合总数: ${letters.length}`);
    console.log(`  阶段数: ${stages ? stages.length : 0}`);
    letters.forEach((item, idx) => {
      const label = `PHONICS_LETTERS #${idx + 1}`;
      ['l','sound','mouth','mouthIdx','type','stage','phoneme','tip','words'].forEach(f => { if (item[f] === undefined || item[f] === null) issues.push(`${label} 缺少字段: ${f}`); });
      if (item.mouthIdx !== undefined && (item.mouthIdx < 0 || item.mouthIdx > 13)) issues.push(`${label} mouthIdx超出范围`);
      if (item.stage !== undefined && (item.stage < 1 || item.stage > 4)) issues.push(`${label} stage超出范围`);
    });
    statistics.english_phonics = { totalLetters: letters.length, totalStages: stages ? stages.length : 0 };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_phonics };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditEnglishScenarios() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'english-scenarios.js'), 'utf-8'));
    const data = w.SPEAK_SCENARIOS;
    if (!data) { issues.push('window.SPEAK_SCENARIOS 未定义'); return { issues, stats: {} }; }
    console.log(`  场景总数: ${data.length}`);
    const scenarioMap = {};
    data.forEach((s, idx) => {
      const label = `SCENARIO #${idx + 1}`;
      ['id','title','icon','level','desc','teacherLines','studentExpected','vocabulary','tips'].forEach(f => { if (s[f] === undefined || s[f] === null) issues.push(`${label} 缺少字段: ${f}`); });
      if (s.id) { if (scenarioMap[s.id]) issues.push(`${label} 场景id重复: ${s.id}`); else scenarioMap[s.id] = true; }
      if (s.level !== undefined && (s.level < 1 || s.level > 4)) issues.push(`${label} level超出范围`);
      if (Array.isArray(s.teacherLines)) s.teacherLines.forEach((line, li) => { if (!line.id) issues.push(`${label} teacherLines[${li}] 缺少 id`); if (!line.text) issues.push(`${label} teacherLines[${li}] 缺少 text`); if (!line.cn) issues.push(`${label} teacherLines[${li}] 缺少 cn`); });
      if (Array.isArray(s.studentExpected)) s.studentExpected.forEach((exp, ei) => { if (!exp.teacherLineId) issues.push(`${label} studentExpected[${ei}] 缺少 teacherLineId`); });
    });
    statistics.english_scenarios = { totalScenarios: data.length };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_scenarios };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

function auditStorybooks() {
  const issues = [];
  try {
    const w = {};
    eval(fs.readFileSync(path.join(__dirname, 'storybooks.js'), 'utf-8'));
    const data = w.STORYBOOKS;
    if (!data) { issues.push('window.STORYBOOKS 未定义'); return { issues, stats: {} }; }
    const themeKeys = Object.keys(data);
    console.log(`  绘本主题数: ${themeKeys.length}`);
    themeKeys.forEach(theme => {
      const books = data[theme];
      if (!Array.isArray(books)) { issues.push(`STORYBOOKS[${theme}] 不是数组`); return; }
      books.forEach((book, idx) => { if (!book.en) issues.push(`STORYBOOKS[${theme}][${idx}] 缺少 en`); if (!book.cn) issues.push(`STORYBOOKS[${theme}][${idx}] 缺少 cn`); });
    });
    statistics.storybooks = { totalThemes: themeKeys.length };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.storybooks };
  } catch (e) { issues.push(`加载失败: ${e.message}`); console.log(`  加载失败: ${e.message}\n`); return { issues, stats: {} }; }
}

console.log('开始全面审计...\n');
const results = [];
results.push({ name: 'math-data.js', ...auditMathData() });
results.push({ name: 'math-2a-2b.js', ...auditMath2a2b() });
results.push({ name: 'math-3-6-extend.js', ...auditMath3_6Extend() });
results.push({ name: 'english-vocab.js', ...auditEnglishVocab() });
results.push({ name: 'english-phonics.js', ...auditEnglishPhonics() });
results.push({ name: 'english-scenarios.js', ...auditEnglishScenarios() });
results.push({ name: 'storybooks.js', ...auditStorybooks() });

console.log('========================================');
console.log('  审计汇总报告');
console.log('========================================');
let totalIssues = 0;
results.forEach(r => { totalIssues += r.issues.length; });
console.log(`\n文件统计:`);
console.log(`  math-data.js: ${statistics.math_data?.totalProblems || 0} 题, ${statistics.math_data?.totalKnowledge || 0} 知识点`);
console.log(`  math-2a-2b.js: ${statistics.math_2a_2b?.totalProblems || 0} 题, ${statistics.math_2a_2b?.totalKnowledge || 0} 知识点`);
console.log(`  math-3-6-extend.js: ${statistics.math_3_6_extend?.totalProblems || 0} 题`);
console.log(`  english-vocab.js: ${statistics.english_vocab?.totalWords || 0} 词`);
console.log(`  english-phonics.js: ${statistics.english_phonics?.totalLetters || 0} 字母/组合, ${statistics.english_phonics?.totalStages || 0} 阶段`);
console.log(`  english-scenarios.js: ${statistics.english_scenarios?.totalScenarios || 0} 场景`);
console.log(`  storybooks.js: ${statistics.storybooks?.totalThemes || 0} 主题`);
console.log(`\n问题汇总: 总问题数 ${totalIssues}`);
const answerErrors = results.flatMap(r => r.issues.filter(i => i.includes('answer') && i.includes('不在')));
const missingFields = results.flatMap(r => r.issues.filter(i => i.includes('缺少字段')));
const duplicateIssues = results.flatMap(r => r.issues.filter(i => i.includes('重复')));
const rangeErrors = results.flatMap(r => r.issues.filter(i => i.includes('超出范围') || i.includes('无效')));
console.log(`  答案错误: ${answerErrors.length} 个`);
console.log(`  缺失字段: ${missingFields.length} 个`);
console.log(`  重复: ${duplicateIssues.length} 个`);
console.log(`  值范围错误: ${rangeErrors.length} 个`);
console.log('\n========================================');
if (totalIssues > 0) { console.log(`  ⚠️ 审计发现 ${totalIssues} 个问题，需修复`); } else { console.log('  ✅ 所有数据文件质量检查通过'); }
console.log('========================================');
if (totalIssues > 0) {
  console.log('\n详细问题列表:\n');
  results.forEach(r => { if (r.issues.length > 0) { console.log(`【${r.name}】`); r.issues.forEach((issue, i) => { console.log(`  ${i + 1}. ${issue}`); }); console.log(''); } });
}
process.exit(totalIssues > 0 ? 1 : 0);