// scan-math.js · 奇趣学园数学题库验证脚本
// 用法: node data/scan-math.js
// 检查项: 语法校验 + 字段完整性 + 公式运算符与visualData一致性 + barModel/numberBond parts之和
const fs = require('fs');
const path = require('path');

// 加载 math-data.js（模拟浏览器 window 环境）
const window = {};
const mathDataPath = path.join(__dirname, 'math-data.js');
const code = fs.readFileSync(mathDataPath, 'utf-8');
try {
  eval(code);
} catch (e) {
  console.error('❌ 语法错误:', e.message);
  process.exit(1);
}

const data = window.MATH_BY_GRADE;
if (!data) {
  console.error('❌ window.MATH_BY_GRADE 未定义');
  process.exit(1);
}

let issues = [];
let totalProblems = 0;
let totalKnowledge = 0;

// 颜色规范
const VALID_COLORS = ['#00A896', '#F5B800', '#FB923C', '#E8A0BF', '#1E3A5F'];

// 可视化类型
const VALID_VISUAL_TYPES = ['barModel', 'areaModel', 'numberBond', 'numberLine', 'fractionStrip', 'geometry'];

// 必填字段
const REQUIRED_FIELDS = ['scene', 'question', 'formula', 'answer', 'choices', 'visualType', 'visualData', 'knowledge', 'difficulty', 'hint', 'variants'];

// 遍历所有年级
for (const gradeKey of Object.keys(data)) {
  const grade = data[gradeKey];
  const gradeLabel = `年级${gradeKey}`;

  // 检查年级结构
  if (!grade.title || !grade.problems || !grade.knowledgeMap) {
    issues.push(`[${gradeLabel}] 缺少必要字段(title/problems/knowledgeMap)`);
    continue;
  }

  totalKnowledge += grade.knowledgeMap.length;

  // 检查每个知识点
  grade.knowledgeMap.forEach(km => {
    if (!km.id || !km.name || !km.concept) {
      issues.push(`[${gradeLabel}] 知识点缺少id/name/concept: ${JSON.stringify(km).substring(0, 80)}`);
    }
    if (km.visualType && !VALID_VISUAL_TYPES.includes(km.visualType)) {
      issues.push(`[${gradeLabel}] 知识点${km.id} visualType无效: ${km.visualType}`);
    }
  });

  // 检查每个题目
  grade.problems.forEach((p, idx) => {
    totalProblems++;
    const probLabel = `[${gradeLabel} #${idx + 1}]`;

    // 1. 必填字段检查
    REQUIRED_FIELDS.forEach(field => {
      if (p[field] === undefined || p[field] === null) {
        issues.push(`${probLabel} 缺少字段: ${field}`);
      }
    });

    // 2. visualType 有效性
    if (p.visualType && !VALID_VISUAL_TYPES.includes(p.visualType)) {
      issues.push(`${probLabel} visualType无效: ${p.visualType} (题: ${p.question?.substring(0, 30)})`);
    }

    // 3. answer 必须在 choices 中
    if (p.choices && p.answer !== undefined) {
      if (!p.choices.includes(p.answer)) {
        issues.push(`${probLabel} answer(${p.answer})不在choices[${p.choices}]中 (题: ${p.question?.substring(0, 30)})`);
      }
    }

    // 4. difficulty 范围 1-3
    if (p.difficulty !== undefined && (p.difficulty < 1 || p.difficulty > 3)) {
      issues.push(`${probLabel} difficulty超出范围: ${p.difficulty}`);
    }

    // 5. variants 至少2个
    if (p.variants && p.variants.length < 2) {
      issues.push(`${probLabel} variants少于2个 (题: ${p.question?.substring(0, 30)})`);
    }

    // 6. barModel: parts 之和应等于 total
    if (p.visualType === 'barModel' && p.visualData) {
      const vd = p.visualData;
      if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
        const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
        const tolerance = 0.01; // 浮点容差
        if (Math.abs(sum - vd.total) > tolerance) {
          issues.push(`${probLabel} barModel parts之和(${sum})≠total(${vd.total}) (题: ${p.question?.substring(0, 30)})`);
        }
      }
      // 检查颜色
      if (vd.parts) {
        vd.parts.forEach(part => {
          if (part.color && !VALID_COLORS.includes(part.color)) {
            issues.push(`${probLabel} barModel 颜色非规范值: ${part.color} (题: ${p.question?.substring(0, 30)})`);
          }
        });
      }
    }

    // 7. numberBond: 减法时 parts 之和应等于 total
    if (p.visualType === 'numberBond' && p.visualData) {
      const vd = p.visualData;
      if (vd.total !== undefined && vd.parts && Array.isArray(vd.parts)) {
        const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
        const tolerance = 0.01;
        if (Math.abs(sum - vd.total) > tolerance) {
          issues.push(`${probLabel} numberBond parts之和(${sum})≠total(${vd.total}) (题: ${p.question?.substring(0, 30)})`);
        }
      }
    }

    // 8. numberLine: points 应在 start-end 范围内
    if (p.visualType === 'numberLine' && p.visualData) {
      const vd = p.visualData;
      if (vd.start !== undefined && vd.end !== undefined && vd.points) {
        vd.points.forEach(pt => {
          if (pt.pos !== undefined && (pt.pos < vd.start || pt.pos > vd.end)) {
            issues.push(`${probLabel} numberLine point(${pt.pos})超出范围[${vd.start},${vd.end}] (题: ${p.question?.substring(0, 30)})`);
          }
        });
      }
    }

    // 9. fractionStrip: num 和 total 一致性
    if (p.visualType === 'fractionStrip' && p.visualData) {
      const vd = p.visualData;
      if (vd.num !== undefined && vd.total !== undefined) {
        // num 可以大于 total（假分数），不报错
        // 但检查 num 和 total 是否为有效数字
        if (typeof vd.num !== 'number' || typeof vd.total !== 'number') {
          issues.push(`${probLabel} fractionStrip num/total非数字 (题: ${p.question?.substring(0, 30)})`);
        }
      }
    }

    // 10. 公式运算符与可视化类型一致性检查
    if (p.formula && p.visualType) {
      const f = p.formula;
      // 检测公式中的运算符（排除×和÷，因为它们不涉及parts求和）
      const hasPlus = f.includes('+') && !f.includes('×') && !f.includes('÷') && !f.includes('/8') && !f.includes('/4') && !f.includes('/5') && !f.includes('/6') && !f.includes('/7') && !f.includes('/12') && !f.includes('/16');
      const hasMinus = f.includes('-') && !f.includes('×') && !f.includes('÷') && !f.includes('/8') && !f.includes('/4') && !f.includes('/5');

      // 加法公式应该用 barModel 且 parts 之和=total
      if (hasPlus && p.visualType === 'barModel' && p.visualData) {
        const vd = p.visualData;
        if (vd.total !== undefined && vd.parts) {
          const sum = vd.parts.reduce((s, part) => s + (part.val || 0), 0);
          if (Math.abs(sum - vd.total) > 0.01) {
            issues.push(`${probLabel} 加法公式barModel parts之和(${sum})≠total(${vd.total}) (公式: ${f.substring(0, 40)})`);
          }
        }
      }
    }

    // 11. 检查 variants 结构
    if (p.variants) {
      p.variants.forEach((v, vi) => {
        if (v.question === undefined || v.formula === undefined || v.answer === undefined || v.hint === undefined) {
          issues.push(`${probLabel} variant#${vi + 1} 缺少字段(question/formula/answer/hint)`);
        }
      });
    }
  });
}

// 输出结果
console.log('========================================');
console.log('  奇趣学园数学题库验证报告');
console.log('========================================');
console.log(`年级数: ${Object.keys(data).length} (${Object.keys(data).join(', ')})`);
console.log(`知识点总数: ${totalKnowledge}`);
console.log(`题目总数: ${totalProblems}`);
console.log(`发现问题: ${issues.length} 个`);
console.log('----------------------------------------');

if (issues.length > 0) {
  console.log('\n问题列表:');
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
  console.log('\n❌ 验证未通过，请修复上述问题。');
  process.exit(1);
} else {
  console.log('\n✅ 验证通过！所有题目数据一致性校验无误。');
  process.exit(0);
}
