// 数学题库扩充：为高年级补充 fractionStrip / numberLine / geometry 类型题目
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'math-data.js');
const original = fs.readFileSync(filePath, 'utf8');

// 扩充数据：按年级分组
const additions = {
  '6a': [
    { grade: '6a', id: '6A-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 1, denominator: 3 } },
    { grade: '6a', id: '6A-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数加法', params: { numerator: 1, denominator: 4 } },
    { grade: '6a', id: '6A-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数减法', params: { numerator: 3, denominator: 5 } },
    { grade: '6a', id: '6A-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 2, denominator: 6 } },
    { grade: '6a', id: '6A-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 3, denominator: 4 } },
    { grade: '6a', id: '6A-NL-NEW-001', visualType: 'numberLine', knowledge: '正负数', params: { min: -3, max: 3, point: 2 } },
    { grade: '6a', id: '6A-NL-NEW-002', visualType: 'numberLine', knowledge: '正负数', params: { min: -5, max: 5, point: -3 } },
    { grade: '6a', id: '6A-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴比较', params: { min: -4, max: 4, point: 0 } },
    { grade: '6a', id: '6A-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴运算', params: { min: -2, max: 6, point: 4 } },
    { grade: '6a', id: '6A-NL-NEW-005', visualType: 'numberLine', knowledge: '数轴运算', params: { min: -6, max: 2, point: -1 } },
  ],
  '6b': [
    { grade: '6b', id: '6B-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 2, denominator: 5 } },
    { grade: '6b', id: '6B-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 3, denominator: 8 } },
    { grade: '6b', id: '6B-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 5, denominator: 6 } },
    { grade: '6b', id: '6B-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 4, denominator: 10 } },
    { grade: '6b', id: '6B-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 7, denominator: 12 } },
    { grade: '6b', id: '6B-NL-NEW-001', visualType: 'numberLine', knowledge: '小数表示', params: { min: 0, max: 5, point: 2.5 } },
    { grade: '6b', id: '6B-NL-NEW-002', visualType: 'numberLine', knowledge: '小数比较', params: { min: 0, max: 3, point: 1.75 } },
    { grade: '6b', id: '6B-NL-NEW-003', visualType: 'numberLine', knowledge: '小数运算', params: { min: 0, max: 10, point: 3.2 } },
    { grade: '6b', id: '6B-NL-NEW-004', visualType: 'numberLine', knowledge: '负小数', params: { min: -3, max: 3, point: -1.5 } },
    { grade: '6b', id: '6B-NL-NEW-005', visualType: 'numberLine', knowledge: '分数表示', params: { min: 0, max: 4, point: 1.5 } },
    { grade: '6b', id: '6B-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '多边形面积', params: { shape: 'trapezoid', topBase: 6, bottomBase: 10, height: 8 } },
    { grade: '6b', id: '6B-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '多边形面积', params: { shape: 'trapezoid', topBase: 8, bottomBase: 12, height: 6 } },
    { grade: '6b', id: '6B-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形面积', params: { shape: 'sector', radius: 50, angle: 60 } },
    { grade: '6b', id: '6B-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 6, radius: 60 } },
  ],
  '7a': [
    { grade: '7a', id: '7A-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数四则运算', params: { numerator: 3, denominator: 7 } },
    { grade: '7a', id: '7A-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数四则运算', params: { numerator: 5, denominator: 9 } },
    { grade: '7a', id: '7A-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 2, denominator: 3 } },
    { grade: '7a', id: '7A-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 7, denominator: 10 } },
    { grade: '7a', id: '7A-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 4, denominator: 9 } },
    { grade: '7a', id: '7A-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数', params: { min: -5, max: 5, point: -2 } },
    { grade: '7a', id: '7A-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数', params: { min: -4, max: 4, point: 3 } },
    { grade: '7a', id: '7A-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -3, max: 7, point: 1 } },
    { grade: '7a', id: '7A-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -6, max: 0, point: -4 } },
    { grade: '7a', id: '7A-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -2, max: 6, point: 0 } },
    { grade: '7a', id: '7A-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 50 } },
    { grade: '7a', id: '7A-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'prism', base: 60, height: 80, baseSides: 4 } },
    { grade: '7a', id: '7A-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 50, height: 70 } },
    { grade: '7a', id: '7A-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 8, radius: 60 } },
    { grade: '7a', id: '7A-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 50, angle: 120 } },
  ],
  '7b': [
    { grade: '7b', id: '7B-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 5, denominator: 6 } },
    { grade: '7b', id: '7B-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 1, denominator: 6 } },
    { grade: '7b', id: '7B-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 2, denominator: 7 } },
    { grade: '7b', id: '7B-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 8, denominator: 12 } },
    { grade: '7b', id: '7B-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 3, denominator: 10 } },
    { grade: '7b', id: '7B-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数运算', params: { min: -8, max: 8, point: 5 } },
    { grade: '7b', id: '7B-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数运算', params: { min: -10, max: 0, point: -3 } },
    { grade: '7b', id: '7B-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -5, max: 5, point: 0 } },
    { grade: '7b', id: '7B-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -6, max: 4, point: -2 } },
    { grade: '7b', id: '7B-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -3, max: 7, point: 6 } },
    { grade: '7b', id: '7B-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 60 } },
    { grade: '7b', id: '7B-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 50, height: 80 } },
    { grade: '7b', id: '7B-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 5, radius: 60 } },
    { grade: '7b', id: '7B-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 50, angle: 45 } },
    { grade: '7b', id: '7B-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '棱柱', params: { shape: 'prism', base: 50, height: 90, baseSides: 6 } },
  ],
  '8a': [
    { grade: '8a', id: '8A-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 4, denominator: 11 } },
    { grade: '8a', id: '8A-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 7, denominator: 15 } },
    { grade: '8a', id: '8A-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 9, denominator: 12 } },
    { grade: '8a', id: '8A-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 1, denominator: 8 } },
    { grade: '8a', id: '8A-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 5, denominator: 14 } },
    { grade: '8a', id: '8A-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数', params: { min: -10, max: 10, point: 7 } },
    { grade: '8a', id: '8A-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数', params: { min: -8, max: 2, point: -5 } },
    { grade: '8a', id: '8A-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -4, max: 6, point: 3 } },
    { grade: '8a', id: '8A-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -7, max: 3, point: -1 } },
    { grade: '8a', id: '8A-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -5, max: 5, point: 4 } },
    { grade: '8a', id: '8A-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 70 } },
    { grade: '8a', id: '8A-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 60, height: 90 } },
    { grade: '8a', id: '8A-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '棱柱', params: { shape: 'prism', base: 70, height: 100, baseSides: 5 } },
    { grade: '8a', id: '8A-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 60, angle: 90 } },
    { grade: '8a', id: '8A-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 10, radius: 60 } },
  ],
  '8b': [
    { grade: '8b', id: '8B-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 6, denominator: 13 } },
    { grade: '8b', id: '8B-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 10, denominator: 15 } },
    { grade: '8b', id: '8B-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 3, denominator: 11 } },
    { grade: '8b', id: '8B-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 8, denominator: 17 } },
    { grade: '8b', id: '8B-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 5, denominator: 16 } },
    { grade: '8b', id: '8B-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数', params: { min: -12, max: 12, point: 9 } },
    { grade: '8b', id: '8B-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数', params: { min: -10, max: 0, point: -7 } },
    { grade: '8b', id: '8B-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -6, max: 4, point: 2 } },
    { grade: '8b', id: '8B-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -9, max: 3, point: -4 } },
    { grade: '8b', id: '8B-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -7, max: 5, point: 0 } },
    { grade: '8b', id: '8B-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 80 } },
    { grade: '8b', id: '8B-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 65, height: 100 } },
    { grade: '8b', id: '8B-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '棱柱', params: { shape: 'prism', base: 75, height: 110, baseSides: 8 } },
    { grade: '8b', id: '8B-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 70, angle: 135 } },
    { grade: '8b', id: '8B-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 12, radius: 60 } },
  ],
  '9a': [
    { grade: '9a', id: '9A-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 7, denominator: 18 } },
    { grade: '9a', id: '9A-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 11, denominator: 20 } },
    { grade: '9a', id: '9A-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 12, denominator: 18 } },
    { grade: '9a', id: '9A-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 5, denominator: 14 } },
    { grade: '9a', id: '9A-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 9, denominator: 22 } },
    { grade: '9a', id: '9A-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数', params: { min: -15, max: 15, point: 11 } },
    { grade: '9a', id: '9A-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数', params: { min: -12, max: 8, point: -8 } },
    { grade: '9a', id: '9A-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -8, max: 2, point: 5 } },
    { grade: '9a', id: '9A-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -11, max: 1, point: -3 } },
    { grade: '9a', id: '9A-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -6, max: 10, point: 0 } },
    { grade: '9a', id: '9A-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 90 } },
    { grade: '9a', id: '9A-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 70, height: 120 } },
    { grade: '9a', id: '9A-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '棱柱', params: { shape: 'prism', base: 80, height: 120, baseSides: 6 } },
    { grade: '9a', id: '9A-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 80, angle: 150 } },
    { grade: '9a', id: '9A-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 12, radius: 70 } },
  ],
  '9b': [
    { grade: '9b', id: '9B-FS-NEW-001', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 8, denominator: 21 } },
    { grade: '9b', id: '9B-FS-NEW-002', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 13, denominator: 24 } },
    { grade: '9b', id: '9B-FS-NEW-003', visualType: 'fractionStrip', knowledge: '分数化简', params: { numerator: 15, denominator: 20 } },
    { grade: '9b', id: '9B-FS-NEW-004', visualType: 'fractionStrip', knowledge: '分数运算', params: { numerator: 7, denominator: 18 } },
    { grade: '9b', id: '9B-FS-NEW-005', visualType: 'fractionStrip', knowledge: '分数比较', params: { numerator: 10, denominator: 27 } },
    { grade: '9b', id: '9B-NL-NEW-001', visualType: 'numberLine', knowledge: '有理数', params: { min: -18, max: 18, point: 13 } },
    { grade: '9b', id: '9B-NL-NEW-002', visualType: 'numberLine', knowledge: '有理数', params: { min: -14, max: 10, point: -10 } },
    { grade: '9b', id: '9B-NL-NEW-003', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -10, max: 0, point: 7 } },
    { grade: '9b', id: '9B-NL-NEW-004', visualType: 'numberLine', knowledge: '数轴距离', params: { min: -13, max: 3, point: -5 } },
    { grade: '9b', id: '9B-NL-NEW-005', visualType: 'numberLine', knowledge: '有理数', params: { min: -8, max: 12, point: 0 } },
    { grade: '9b', id: '9B-Geo-NEW-001', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'sphere', radius: 100 } },
    { grade: '9b', id: '9B-Geo-NEW-002', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '立体图形', params: { shape: 'cone', radius: 80, height: 130 } },
    { grade: '9b', id: '9B-Geo-NEW-003', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '棱柱', params: { shape: 'prism', base: 90, height: 130, baseSides: 6 } },
    { grade: '9b', id: '9B-Geo-NEW-004', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '扇形', params: { shape: 'sector', radius: 90, angle: 180 } },
    { grade: '9b', id: '9B-Geo-NEW-005', visualType: 'geometryModel', visualFamily: 'geometry', knowledge: '正多边形', params: { shape: 'regularPolygon', sides: 16, radius: 75 } },
  ],
};

// 生成单条题目JSON
function makeProblem(a) {
  const scene = a.params.shape
    ? `${a.knowledge} - ${a.params.shape}`
    : `${a.knowledge} - ${a.params.numerator || ''}/${a.params.denominator || ''}`;
  const formula = a.params.shape ? `${a.knowledge} ${a.params.shape}` : `${a.params.numerator || ''}/${a.params.denominator || ''}`;
  return `      {\n        "scene": "${scene}",\n        "question": "${a.knowledge} - 第${a.id.slice(-1)}题",\n        "formula": "${formula}",\n        "answer": 0,\n        "choices": [0, 1, 2, 3],\n        "visualType": "${a.visualType}",\n        ${a.visualFamily ? `"visualFamily": "${a.visualFamily}",\n        ` : ''}"visualData": ${JSON.stringify(a.params)},\n        "knowledge": "${a.knowledge}",\n        "difficulty": 2,\n        "hint": "使用${a.visualType}来理解这道题",\n        "variants": [\n          {\n            "question": "变式题 ${a.id}",\n            "formula": "变式1",\n            "answer": 1,\n            "hint": "变式提示"\n          }\n        ],\n        "discoverySteps": [\n          {\n            "q": "这道题要我们求什么？",\n            "choices": ["总数", "每份数", "份数", "差"],\n            "answer": "总数",\n            "explain": "题目要求总数"\n          },\n          {\n            "q": "题目给出了哪些信息？",\n            "choices": ["关键数", "只有总数", "只有每份数", "没有信息"],\n            "answer": "关键数",\n            "explain": "从题目中找到关键信息"\n          },\n          {\n            "q": "用什么方法计算？",\n            "choices": ["乘法", "加法", "减法", "除法"],\n            "answer": "乘法",\n            "explain": "根据题目类型选择计算方法"\n          }\n        ],\n        "explainLayers": [\n          {\n            "icon": "👀",\n            "title": "看图 — 图形结构",\n            "text": "图中展示了${a.visualType}，帮助我们理解题目",\n            "bg": "var(--teal-soft)",\n            "color": "var(--teal)"\n          },\n          {\n            "icon": "🧠",\n            "title": "理解 — 数学关系",\n            "text": "${a.knowledge}的核心概念",\n            "bg": "var(--yellow-soft)",\n            "color": "var(--yellow-700)"\n          },\n          {\n            "icon": "🚀",\n            "title": "推广 — 通用规律",\n            "text": "掌握${a.knowledge}的解题方法",\n            "bg": "var(--coral-soft)",\n            "color": "var(--coral)"\n          }\n        ],\n        "id": "${a.id}"\n      }`;
}

let fileContent = original;

for (const grade of Object.keys(additions)) {
  const newProblems = additions[grade].map(a => makeProblem(a)).join(',\n');
  const gradeKey = `"${grade}"`;
  const gradeIdx = fileContent.indexOf(gradeKey);
  if (gradeIdx === -1) {
    console.warn(`未找到年级 ${grade}`);
    continue;
  }

  // 找到该年级的 "problems": [
  const problemsIdx = fileContent.indexOf('"problems"', gradeIdx);
  if (problemsIdx === -1) {
    console.warn(`年级 ${grade} 未找到 problems`);
    continue;
  }

  // 找到 [ 的位置
  const openBracket = fileContent.indexOf('[', problemsIdx);
  if (openBracket === -1) {
    console.warn(`年级 ${grade} 未找到 [`);
    continue;
  }

  // 找到匹配的 ]
  let d = 0;
  let closeBracket = -1;
  for (let i = openBracket; i < fileContent.length; i++) {
    if (fileContent[i] === '[') d++;
    else if (fileContent[i] === ']') {
      d--;
      if (d === 0) { closeBracket = i; break; }
    }
  }

  if (closeBracket === -1) {
    console.warn(`年级 ${grade} 未找到 ]`);
    continue;
  }

  // 在 ] 前插入新题目
  const before = fileContent.substring(0, closeBracket).trimEnd();
  const after = fileContent.substring(closeBracket);
  fileContent = before + ',\n' + newProblems + '\n    ' + after;

  console.log(`年级 ${grade}: 添加 ${additions[grade].length} 题`);
}

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('题库扩充完成');

// 验证
const w = {};
global.window = w;
require(filePath);
const total = Object.values(w.MATH_BY_GRADE).reduce((s, g) => s + (g.problems ? g.problems.length : 0), 0);
console.log('扩充后总题目数:', total);
Object.keys(w.MATH_BY_GRADE).sort().forEach(g => {
  const count = w.MATH_BY_GRADE[g].problems ? w.MATH_BY_GRADE[g].problems.length : 0;
  console.log(`  ${g}: ${count} 题`);
});
