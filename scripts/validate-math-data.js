const fs = require('fs');
const path = require('path');

const root = 'F:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master';

function stripComments(code) {
  return code.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

// 用 eval 方式提取年级数据（与 validate-all.js 相同的策略）
function evalExtractGrade(rawCode, gradeKey) {
  try {
    const fakeWindow = {};
    // 执行代码，将结果存到 fakeWindow
    new Function('window', rawCode + 'return window.MATH_BY_GRADE["' + gradeKey + '"];')(fakeWindow);
    return fakeWindow.MATH_BY_GRADE && fakeWindow.MATH_BY_GRADE[gradeKey] || null;
  } catch(e) {
    // 可能单引号格式
    try {
      const fakeWindow = {};
      new Function('window', rawCode + 'return window.MATH_BY_GRADE["' + gradeKey + '"];')(fakeWindow);
      return fakeWindow.MATH_BY_GRADE && fakeWindow.MATH_BY_GRADE[gradeKey] || null;
    } catch(e2) {
      return null;
    }
  }
}

function evalExtractGrade2(rawCode, gradeKey) {
  try {
    const fakeWindow = {};
    new Function('window', rawCode + 'return window.MATH_GRADE_2["' + gradeKey + '"];')(fakeWindow);
    return fakeWindow.MATH_GRADE_2 && fakeWindow.MATH_GRADE_2[gradeKey] || null;
  } catch(e) {
    return null;
  }
}

let totalProblems = 0, errorCount = 0, issues = [];

const gradeFiles = {
  '2a': { file: 'math-2a-2b.js', gradeKey: '2a', source: 'MATH_GRADE_2' },
  '2b': { file: 'math-data-2b.js', gradeKey: '2b', source: 'MATH_BY_GRADE' },
  '3a': { file: 'math-data-3a.js', gradeKey: '3a', source: 'MATH_BY_GRADE' },
  '3b': { file: 'math-data-3b.js', gradeKey: '3b', source: 'MATH_BY_GRADE' },
  '4a': { file: 'math-data-4a.js', gradeKey: '4a', source: 'MATH_BY_GRADE' },
  '4b': { file: 'math-data-4b.js', gradeKey: '4b', source: 'MATH_BY_GRADE' },
  '5a': { file: 'math-data-5a.js', gradeKey: '5a', source: 'MATH_BY_GRADE' },
  '5b': { file: 'math-data-5b.js', gradeKey: '5b', source: 'MATH_BY_GRADE' },
  '6a': { file: 'math-data-6a.js', gradeKey: '6a', source: 'MATH_BY_GRADE' },
  '6b': { file: 'math-data-6b.js', gradeKey: '6b', source: 'MATH_BY_GRADE' },
  '7a': { file: 'math-data-7a.js', gradeKey: '7a', source: 'MATH_BY_GRADE' },
  '7b': { file: 'math-data-7b.js', gradeKey: '7b', source: 'MATH_BY_GRADE' },
  '8a': { file: 'math-data-8a.js', gradeKey: '8a', source: 'MATH_BY_GRADE' },
  '8b': { file: 'math-data-8b.js', gradeKey: '8b', source: 'MATH_BY_GRADE' },
  '9a': { file: 'math-data-9a.js', gradeKey: '9a', source: 'MATH_BY_GRADE' },
  '9b': { file: 'math-data-9b.js', gradeKey: '9b', source: 'MATH_BY_GRADE' },
};

console.log('=== 逐年级题目验证（eval 方式）===\n');

Object.keys(gradeFiles).forEach(grade => {
  const g = gradeFiles[grade];
  const filePath = path.join(root, 'data', g.file);
  if (!fs.existsSync(filePath)) { console.log('MISSING: ' + g.file); return; }
  const raw = fs.readFileSync(filePath, 'utf8');
  const clean = stripComments(raw);
  const data = g.source === 'MATH_GRADE_2' ? evalExtractGrade2(clean, g.gradeKey) : evalExtractGrade(clean, g.gradeKey);
  if (!data) { console.log('PARSE FAIL: ' + g.file + ' (' + g.gradeKey + ')'); return; }
  const problems = data.problems || [];
  const km = data.knowledgeMap || [];
  problems.forEach((p, i) => {
    totalProblems++;
    const lid = grade + '-P' + i;
    if (p.answer === undefined || p.answer === null) { issues.push(lid + ' answer为空'); errorCount++; }
    if (p.choices && p.answer !== undefined) {
      const found = p.choices.some(c => String(c) === String(p.answer));
      if (!found) { issues.push(lid + ' 答案' + p.answer + '不在choices中'); errorCount++; }
    }
    if (!p.visualType) { issues.push(lid + ' 缺少visualType'); errorCount++; }
    if (!p.knowledge) { issues.push(lid + ' 缺少knowledge'); errorCount++; }
  });
  console.log(grade + ': ' + problems.length + '题, knowledgeMap:' + km.length + '项' + (km.length === 0 ? ' [无knowledgeMap]' : ''));
});

console.log('\n=== 验证结果 ===');
console.log('总题目: ' + totalProblems);
console.log('错误数: ' + errorCount);
if (issues.length > 0) {
  console.log('\n问题明细:');
  issues.forEach(i => console.log('  ' + i));
} else {
  console.log('\n全部题目验证通过！');
}
