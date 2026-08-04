// data-quality-audit.js · 奇趣学园数据文件全面质量审计
// 用法: node data/data-quality-audit.js
// 检查项: 数学题答案错误、数据格式错误、缺失字段、知识点重复/遗漏
const fs = require('fs');
const path = require('path');

console.log('========================================');
console.log('  奇趣学园 data/ 目录全面质量审计');
console.log('========================================\n');

let allIssues = [];
let statistics = {};

// ==================== 颜色规范 ====================
const VALID_COLORS = ['#00A896', '#F5B800', '#FB923C', '#E8A0BF', '#1E3A5F'];
const VALID_VISUAL_TYPES = ['barModel', 'areaModel', 'numberBond', 'numberLine', 'fractionStrip', 'geometry'];

// ==================== 审计 math-data.js ====================
function auditMathData() {
  console.log('【审计 1/5】math-data.js（3-6年级数学题库）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'math-data.js'), 'utf-8');
    eval(code);
    const data = window.MATH_BY_GRADE;

    if (!data) {
      issues.push('❌ window.MATH_BY_GRADE 未定义');
      return { issues, stats: {} };
    }

    const gradeKeys = Object.keys(data);
    console.log(`  年级数: ${gradeKeys.length} (${gradeKeys.join(', ')})`);

    let totalProblems = 0;
    let totalKnowledge = 0;
    const knowledgeMap = {};

    gradeKeys.forEach(gradeKey => {
      const grade = data[gradeKey];
      const gradeLabel = `年级${gradeKey}`;

      // 1. 年级结构检查
      if (!grade.title) issues.push(`${gradeLabel} 缺少 title 字段`);
      if (!grade.problems) issues.push(`${gradeLabel} 缺少 problems 字段`);
      if (!grade.knowledgeMap) issues.push(`${gradeLabel} 缺少 knowledgeMap 字段`);

      if (!grade.problems) return;

      // 统计知识点
      if (grade.knowledgeMap) {
        totalKnowledge += grade.knowledgeMap.length;
        grade.knowledgeMap.forEach(km => {
          const key = `${gradeKey}_${km.id || km.name}`;
          if (knowledgeMap[key]) {
            issues.push(`${gradeLabel} 知识点重复: ${km.id || km.name}`);
          } else {
            knowledgeMap[key] = true;
          }
        });
      }

      // 2. 题目检查
      grade.problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `${gradeLabel} #${idx + 1}`;

        // 必填字段检查
        const requiredFields = ['scene', 'question', 'formula', 'answer', 'choices', 'visualType', 'visualData', 'knowledge', 'difficulty', 'hint', 'variants'];
        requiredFields.forEach(field => {
          if (p[field] === undefined || p[field] === null) {
            issues.push(`${probLabel} 缺少字段: ${field}`);
          }
        });

        // answer 必须在 choices 中
        if (p.choices && p.answer !== undefined) {
          if (!p.choices.includes(p.answer)) {
            issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中 - 题目: ${p.question?.substring(0, 30)}`);
          }
        }

        // difficulty 范围检查
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) {
          issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
        }

        // variants 至少2个
        if (p.variants && p.variants.length < 2) {
          issues.push(`${probLabel} variants少于2个 - 题目: ${p.question?.substring(0, 30)}`);
        }

        // visualType 有效性
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) {
          issues.push(`${probLabel} visualType无效: ${p.visualType}`);
        }

        // barModel: parts 之和应等于 total
        if (p.visualType === 'barModel' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
          // 检查颜色
          if (vd.parts) {
            vd.parts.forEach((part, pi) => {
              if (part.color && !VALID_COLORS.includes(part.color)) {
                issues.push(`${probLabel} barModel parts[${pi}]颜色非规范: ${part.color}`);
              }
            });
          }
        }

        // numberBond: parts 之和应等于 total
        if (p.visualType === 'numberBond' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} numberBond parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
        }

        // numberLine: points 应在 start-end 范围内
        if (p.visualType === 'numberLine' && p.visualData) {
          const vd = p.visualData;
          if (vd.start !== undefined && vd.end !== undefined && vd.points) {
            vd.points.forEach((pt, pi) => {
              if (pt.pos !== undefined && (pt.pos < vd.start || pt.pos > vd.end)) {
                issues.push(`${probLabel} numberLine points[${pi}].pos(${pt.pos})超出范围[${vd.start},${vd.end}]`);
              }
            });
          }
        }

        // 检查 variants 结构
        if (p.variants) {
          p.variants.forEach((v, vi) => {
            if (!v.question) issues.push(`${probLabel} variant#${vi + 1} 缺少 question`);
            if (!v.formula) issues.push(`${probLabel} variant#${vi + 1} 缺少 formula`);
            if (v.answer === undefined) issues.push(`${probLabel} variant#${vi + 1} 缺少 answer`);
            if (!v.hint) issues.push(`${probLabel} variant#${vi + 1} 缺少 hint`);
          });
        }
      });
    });

    statistics.math_data = { totalProblems, totalKnowledge, grades: gradeKeys.length };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  知识点总数: ${totalKnowledge}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_data };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 math-2a-2b.js ====================
function auditMath2a2b() {
  console.log('【审计 2/5】math-2a-2b.js（二年级数学题）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'math-2a-2b.js'), 'utf-8');
    eval(code);
    const data = window.MATH_GRADE_2;

    if (!data) {
      issues.push('❌ window.MATH_GRADE_2 未定义');
      return { issues, stats: {} };
    }

    const gradeKeys = Object.keys(data);
    console.log(`  年级数: ${gradeKeys.length} (${gradeKeys.join(', ')})`);

    let totalProblems = 0;
    let totalKnowledge = 0;
    const knowledgeMap = {};

    gradeKeys.forEach(gradeKey => {
      const grade = data[gradeKey];
      const gradeLabel = `年级${gradeKey}`;

      if (!grade.title) issues.push(`${gradeLabel} 缺少 title 字段`);
      if (!grade.problems) issues.push(`${gradeLabel} 缺少 problems 字段`);

      if (!grade.problems) return;

      grade.problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `${gradeLabel} #${idx + 1}`;

        // 必填字段检查
        const requiredFields = ['scene', 'question', 'formula', 'answer', 'choices', 'visualType', 'visualData', 'knowledge', 'difficulty', 'hint', 'variants'];
        requiredFields.forEach(field => {
          if (p[field] === undefined || p[field] === null) {
            issues.push(`${probLabel} 缺少字段: ${field}`);
          }
        });

        // answer 必须在 choices 中
        if (p.choices && p.answer !== undefined) {
          if (!p.choices.includes(p.answer)) {
            issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中 - 题目: ${p.question?.substring(0, 30)}`);
          }
        }

        // difficulty 范围
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) {
          issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
        }

        // variants 至少2个
        if (p.variants && p.variants.length < 2) {
          issues.push(`${probLabel} variants少于2个 - 题目: ${p.question?.substring(0, 30)}`);
        }

        // visualType 有效性
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) {
          issues.push(`${probLabel} visualType无效: ${p.visualType}`);
        }

        // barModel 一致性
        if (p.visualType === 'barModel' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
        }

        // numberBond 一致性
        if (p.visualType === 'numberBond' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} numberBond parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
        }

        // 知识点重复检测
        if (p.knowledge) {
          const key = `${gradeKey}_${p.knowledge}`;
          if (knowledgeMap[key]) {
            issues.push(`${probLabel} 知识点重复: ${p.knowledge}`);
          } else {
            knowledgeMap[key] = true;
          }
          totalKnowledge++;
        }
      });
    });

    statistics.math_2a_2b = { totalProblems, totalKnowledge, grades: gradeKeys.length };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  知识点总数: ${totalKnowledge}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_2a_2b };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 math-3-6-extend.js ====================
function auditMath3_6Extend() {
  console.log('【审计 3/5】math-3-6-extend.js（3-6年级扩展数学题）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'math-3-6-extend.js'), 'utf-8');
    eval(code);
    const data = window.MATH_EXTEND_3_6;

    if (!data) {
      issues.push('❌ window.MATH_EXTEND_3_6 未定义');
      return { issues, stats: {} };
    }

    console.log(`  年级分组数: ${Object.keys(data).length}`);

    let totalProblems = 0;
    const knowledgeMap = {};

    Object.keys(data).forEach(gradeKey => {
      const problems = data[gradeKey];
      const gradeLabel = `年级分组${gradeKey}`;

      if (!Array.isArray(problems)) {
        issues.push(`${gradeLabel} 不是数组`);
        return;
      }

      problems.forEach((p, idx) => {
        totalProblems++;
        const probLabel = `${gradeLabel} #${idx + 1}`;

        // 必填字段检查
        const requiredFields = ['scene', 'question', 'formula', 'answer', 'choices', 'visualType', 'visualData', 'knowledge', 'difficulty', 'hint', 'variants'];
        requiredFields.forEach(field => {
          if (p[field] === undefined || p[field] === null) {
            issues.push(`${probLabel} 缺少字段: ${field}`);
          }
        });

        // answer 必须在 choices 中
        if (p.choices && p.answer !== undefined) {
          if (!p.choices.includes(p.answer)) {
            issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中 - 题目: ${p.question?.substring(0, 30)}`);
          }
        }

        // difficulty 范围
        if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) {
          issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
        }

        // variants 至少2个
        if (p.variants && p.variants.length < 2) {
          issues.push(`${probLabel} variants少于2个 - 题目: ${p.question?.substring(0, 30)}`);
        }

        // visualType 有效性
        if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) {
          issues.push(`${probLabel} visualType无效: ${p.visualType}`);
        }

        // barModel 一致性
        if (p.visualType === 'barModel' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
        }

        // numberBond 一致性
        if (p.visualType === 'numberBond' && p.visualData) {
          const vd = p.visualData;
          if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
            const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
            if (Math.abs(sum - vd.total) > 0.01) {
              issues.push(`${probLabel} numberBond parts之和(${sum})≠total(${vd.total}) - 题目: ${p.question?.substring(0, 30)}`);
            }
          }
        }

        // 知识点重复检测
        if (p.knowledge) {
          const key = `${gradeKey}_${p.knowledge}_${p.question?.substring(0, 20)}`;
          if (knowledgeMap[key]) {
            issues.push(`${probLabel} 题目重复（知识点+问题相似）: ${p.knowledge}`);
          } else {
            knowledgeMap[key] = true;
          }
        }
      });
    });

    statistics.math_3_6_extend = { totalProblems };
    console.log(`  题目总数: ${totalProblems}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.math_3_6_extend };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 english-vocab.js ====================
function auditEnglishVocab() {
  console.log('【审计 4/5】english-vocab.js（英语词汇库）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'english-vocab.js'), 'utf-8');
    eval(code);
    const data = window.VOCAB_BY_GRADE;

    if (!data) {
      issues.push('❌ window.VOCAB_BY_GRADE 未定义');
      return { issues, stats: {} };
    }

    const gradeKeys = Object.keys(data);
    console.log(`  年级数: ${gradeKeys.length} (${gradeKeys.join(', ')})`);

    let totalWords = 0;
    const wordMap = {};

    gradeKeys.forEach(gradeKey => {
      const words = data[gradeKey];
      const gradeLabel = `年级${gradeKey}`;

      if (!Array.isArray(words)) {
        issues.push(`${gradeLabel} 不是数组`);
        return;
      }

      words.forEach((w, idx) => {
        totalWords++;
        const wordLabel = `${gradeLabel} #${idx + 1}`;

        // 必填字段检查
        const requiredFields = ['w', 'pos', 'def', 'ex', 'coll', 'syn', 'ant', 'unit', 'circle'];
        requiredFields.forEach(field => {
          if (w[field] === undefined || w[field] === null) {
            issues.push(`${wordLabel} 缺少字段: ${field}`);
          }
        });

        // 单词重复检测
        if (w.w) {
          const key = `${gradeKey}_${w.w.toLowerCase()}`;
          if (wordMap[key]) {
            issues.push(`${wordLabel} 单词重复: ${w.w}`);
          } else {
            wordMap[key] = true;
          }
        }

        // circle 值检查
        if (w.circle && !['core', 'expand', 'challenge'].includes(w.circle)) {
          issues.push(`${wordLabel} circle值无效: ${w.circle}`);
        }
      });
    });

    statistics.english_vocab = { totalWords, grades: gradeKeys.length };
    console.log(`  词汇总数: ${totalWords}`);
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_vocab };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 english-phonics.js ====================
function auditEnglishPhonics() {
  console.log('【审计 5/5】english-phonics.js（英语自然拼读）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'english-phonics.js'), 'utf-8');
    eval(code);
    const letters = window.PHONICS_LETTERS;
    const stages = window.PHONICS_STAGES;

    if (!letters) {
      issues.push('❌ window.PHONICS_LETTERS 未定义');
      return { issues, stats: {} };
    }

    console.log(`  字母/组合总数: ${letters.length}`);
    console.log(`  阶段数: ${stages ? stages.length : 0}`);

    letters.forEach((item, idx) => {
      const label = `PHONICS_LETTERS #${idx + 1}`;

      const requiredFields = ['l', 'sound', 'mouth', 'mouthIdx', 'type', 'stage', 'phoneme', 'tip', 'words'];
      requiredFields.forEach(field => {
        if (item[field] === undefined || item[field] === null) {
          issues.push(`${label} 缺少字段: ${field}`);
        }
      });

      if (item.mouthIdx !== undefined && (item.mouthIdx < 0 || item.mouthIdx > 13)) {
        issues.push(`${label} mouthIdx超出范围: ${item.mouthIdx} (应为0-13)`);
      }

      if (item.stage !== undefined && (item.stage < 1 || item.stage > 4)) {
        issues.push(`${label} stage超出范围: ${item.stage} (应为1-4)`);
      }

      if (item.words && !Array.isArray(item.words)) {
        issues.push(`${label} words不是数组`);
      }
    });

    if (stages) {
      stages.forEach((stage, idx) => {
        const label = `PHONICS_STAGES #${idx + 1}`;
        if (!stage.id) issues.push(`${label} 缺少 id`);
        if (!stage.name) issues.push(`${label} 缺少 name`);
        if (stage.id !== idx + 1) issues.push(`${label} id应为${idx + 1}`);
      });
    }

    statistics.english_phonics = { totalLetters: letters.length, totalStages: stages ? stages.length : 0 };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_phonics };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 english-scenarios.js ====================
function auditEnglishScenarios() {
  console.log('【审计 6/7】english-scenarios.js（英语口语场景）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'english-scenarios.js'), 'utf-8');
    eval(code);
    const data = window.SPEAK_SCENARIOS;

    if (!data) {
      issues.push('❌ window.SPEAK_SCENARIOS 未定义');
      return { issues, stats: {} };
    }

    console.log(`  场景总数: ${data.length}`);

    const scenarioMap = {};

    data.forEach((s, idx) => {
      const label = `SCENARIO #${idx + 1}`;

      const requiredFields = ['id', 'title', 'icon', 'level', 'desc', 'teacherLines', 'studentExpected', 'vocabulary', 'tips'];
      requiredFields.forEach(field => {
        if (s[field] === undefined || s[field] === null) {
          issues.push(`${label} 缺少字段: ${field}`);
        }
      });

      if (s.id) {
        if (scenarioMap[s.id]) {
          issues.push(`${label} 场景id重复: ${s.id}`);
        } else {
          scenarioMap[s.id] = true;
        }
      }

      if (s.level !== undefined && (s.level < 1 || s.level > 4)) {
        issues.push(`${label} level超出范围: ${s.level}`);
      }

      if (Array.isArray(s.teacherLines)) {
        s.teacherLines.forEach((line, li) => {
          if (!line.id) issues.push(`${label} teacherLines[${li}] 缺少 id`);
          if (!line.text) issues.push(`${label} teacherLines[${li}] 缺少 text`);
          if (!line.cn) issues.push(`${label} teacherLines[${li}] 缺少 cn`);
        });
      }

      if (Array.isArray(s.studentExpected)) {
        s.studentExpected.forEach((exp, ei) => {
          if (!exp.teacherLineId) issues.push(`${label} studentExpected[${ei}] 缺少 teacherLineId`);
          if (!Array.isArray(exp.keywords)) issues.push(`${label} studentExpected[${ei}] keywords不是数组`);
          if (!Array.isArray(exp.suggestions)) issues.push(`${label} studentExpected[${ei}] suggestions不是数组`);
        });
      }

      if (!Array.isArray(s.vocabulary)) {
        issues.push(`${label} vocabulary不是数组`);
      }
    });

    statistics.english_scenarios = { totalScenarios: data.length };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.english_scenarios };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 审计 storybooks.js ====================
function auditStorybooks() {
  console.log('【审计 7/7】storybooks.js（场景绘本）');
  const issues = [];

  try {
    const window = {};
    const code = fs.readFileSync(path.join(__dirname, 'storybooks.js'), 'utf-8');
    eval(code);
    const data = window.STORYBOOKS;

    if (!data) {
      issues.push('❌ window.STORYBOOKS 未定义');
      return { issues, stats: {} };
    }

    const themeKeys = Object.keys(data);
    console.log(`  绘本主题数: ${themeKeys.length}`);

    themeKeys.forEach(theme => {
      const books = data[theme];
      const label = `STORYBOOKS[${theme}]`;

      if (!Array.isArray(books)) {
        issues.push(`${label} 不是数组`);
        return;
      }

      books.forEach((book, idx) => {
        const bookLabel = `${label}[${idx}]`;
        if (!book.en) issues.push(`${bookLabel} 缺少 en（英文）`);
        if (!book.cn) issues.push(`${bookLabel} 缺少 cn（中文）`);
      });
    });

    statistics.storybooks = { totalThemes: themeKeys.length };
    console.log(`  发现问题: ${issues.length} 个\n`);
    return { issues, stats: statistics.storybooks };
  } catch (e) {
    issues.push(`❌ 加载或解析失败: ${e.message}`);
    console.log(`  加载失败: ${e.message}\n`);
    return { issues, stats: {} };
  }
}

// ==================== 主程序 ====================
console.log('开始全面审计...\n');

const results = [];
results.push({ name: 'math-data.js', ...auditMathData() });
results.push({ name: 'math-2a-2b.js', ...auditMath2a2b() });
results.push({ name: 'math-3-6-extend.js', ...auditMath3_6Extend() });
results.push({ name: 'english-vocab.js', ...auditEnglishVocab() });
results.push({ name: 'english-phonics.js', ...auditEnglishPhonics() });
results.push({ name: 'english-scenarios.js', ...auditEnglishScenarios() });
results.push({ name: 'storybooks.js', ...auditStorybooks() });

// ==================== 汇总报告 ====================
console.log('========================================');
console.log('  审计汇总报告');
console.log('========================================');

let totalIssues = 0;
results.forEach(r => {
  totalIssues += r.issues.length;
});

console.log(`\n文件统计:`);
console.log(`  math-data.js: ${statistics.math_data?.totalProblems || 0} 题, ${statistics.math_data?.totalKnowledge || 0} 知识点`);
console.log(`  math-2a-2b.js: ${statistics.math_2a_2b?.totalProblems || 0} 题, ${statistics.math_2a_2b?.totalKnowledge || 0} 知识点`);
console.log(`  math-3-6-extend.js: ${statistics.math_3_6_extend?.totalProblems || 0} 题`);
console.log(`  english-vocab.js: ${statistics.english_vocab?.totalWords || 0} 词`);
console.log(`  english-phonics.js: ${statistics.english_phonics?.totalLetters || 0} 字母/组合, ${statistics.english_phonics?.totalStages || 0} 阶段`);
console.log(`  english-scenarios.js: ${statistics.english_scenarios?.totalScenarios || 0} 场景`);
console.log(`  storybooks.js: ${statistics.storybooks?.totalThemes || 0} 主题`);

console.log(`\n问题汇总:`);
console.log(`  总问题数: ${totalIssues}`);

// 按类型分类
const answerErrors = results.flatMap(r => r.issues.filter(i => i.includes('answer') && i.includes('不在')));
const formatErrors = results.flatMap(r => r.issues.filter(i => i.includes('缺少字段') || i.includes('不是数组') || i.includes('不是数字')));
const missingFields = results.flatMap(r => r.issues.filter(i => i.includes('缺少字段')));
const duplicateIssues = results.flatMap(r => r.issues.filter(i => i.includes('重复')));
const rangeErrors = results.flatMap(r => r.issues.filter(i => i.includes('超出范围') || i.includes('无效')));

console.log(`\n问题类型分布:`);
console.log(`  答案错误（answer不在choices中）: ${answerErrors.length} 个`);
console.log(`  数据格式错误: ${formatErrors.length} 个`);
console.log(`  缺失字段: ${missingFields.length} 个`);
console.log(`  知识点/题目重复: ${duplicateIssues.length} 个`);
console.log(`  值范围错误: ${rangeErrors.length} 个`);

console.log('\n========================================');
if (totalIssues > 0) {
  console.log(`  ⚠️ 审计发现 ${totalIssues} 个问题，需修复`);
} else {
  console.log('  ✅ 所有数据文件质量检查通过');
}
console.log('========================================');

if (totalIssues > 0) {
  console.log('\n详细问题列表:\n');
  results.forEach(r => {
    if (r.issues.length > 0) {
      console.log(`【${r.name}】`);
      r.issues.forEach((issue, i) => {
        console.log(`  ${i + 1}. ${issue}`);
      });
      console.log('');
    }
  });
}

process.exit(totalIssues > 0 ? 1 : 0);
