/* M1: MathDiagramMaster.audit() 全库实跑
   Node 沙箱模式（沿用 audit-comprehensive.js 已验证范式）：
   逐文件 eval 进同一 global 沙箱，再调 audit() 输出全库指标。
   运行：node scripts/run-master-audit.js
   输出：console JSON + 覆盖写 scripts/visual-scan-report.txt
   依赖：仅 Node 内置 fs/path（项目为纯静态前端，无 node_modules）
*/
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..'); // F:\trae\work\20260916-quiqu-xueyuan\src
function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  eval(code); // global.window 已预置，eval 在 Node 里挂到 globalThis 等价物
}

// 预置全局：引擎 IIFE 尾部 root = (typeof window!=='undefined'?window:globalThis)
global.window = global; // 让 root.MATH_BY_GRADE / root.MathDiagramMaster 等挂在 global
// 浏览器占位（引擎对 DOM 渲染有 try/catch 兜底，Node 下不渲染）
global.document = { createElement: () => ({ style: {}, appendChild: () => {} }), body: { appendChild: () => {} } };
try { global.navigator = { userAgent: 'node-audit' }; } catch (e) {}

// 加载顺序（对齐 index.html）：数据先（挂 MATH_BY_GRADE），再引擎
const dataFiles = [
  'data/math-data-core.js',
  'data/math-data-2a.js', 'data/math-data-2b.js',
  'data/math-data-3a.js', 'data/math-data-3b.js',
  'data/math-data-4a.js', 'data/math-data-4b.js',
  'data/math-data-5a.js', 'data/math-data-5b.js',
  'data/math-data-6a.js', 'data/math-data-6b.js',
  'data/math-data-7a.js', 'data/math-data-7b.js',
  'data/math-data-8a.js', 'data/math-data-8b.js',
  'data/math-data-9a.js', 'data/math-data-9b.js',
  'data/math-2a-2b.js',
  'data/math-3-6-extend.js',
];
dataFiles.forEach(f => { try { load(f); } catch (e) { console.error('LOAD FAIL', f, e.message); } });

// 引擎（纯 IIFE，缺省依赖有兜底）
['engine/math-visual-v5.js', 'engine/math-manipulative.js', 'engine/math-kernel.js',
 'engine/math-flow-v5.js', 'engine/math-diagram-master.js'].forEach(f => {
  try { load(f); } catch (e) { console.error('ENGINE LOAD FAIL', f, e.message); }
});

if (typeof MathDiagramMaster === 'undefined' || !MathDiagramMaster.audit) {
  console.error('ABORT: MathDiagramMaster.audit 不可用，加载失败');
  process.exit(2);
}

const out = MathDiagramMaster.audit();
console.log(JSON.stringify(out, null, 2));

const report =
  '# MathDiagramMaster.audit() 全库实跑（M1）\n' +
  '生成：' + new Date().toISOString() + '\n\n' +
  '## totals\n' + JSON.stringify(out.totals, null, 2) + '\n\n' +
  '## byStage\n' + JSON.stringify(out.byStage, null, 2) + '\n\n' +
  '## byMaster\n' + JSON.stringify(out.byMaster, null, 2) + '\n\n' +
  '## conflicts（' + out.conflicts.length + '）\n' + JSON.stringify(out.conflicts, null, 2) + '\n\n' +
  '## legacyConflicts（' + out.legacyConflicts.length + '）\n' + JSON.stringify(out.legacyConflicts, null, 2) + '\n\n' +
  '## nonParametric（' + out.nonParametric.length + '）\n' + JSON.stringify(out.nonParametric, null, 2) + '\n\n' +
  '## hardcoded（' + out.hardcoded.length + '）\n' + JSON.stringify(out.hardcoded, null, 2) + '\n\n' +
  '## missing（' + out.missing.length + '）\n' + JSON.stringify(out.missing, null, 2) + '\n';
fs.writeFileSync(path.join(ROOT, 'scripts', 'visual-scan-report.txt'), report, 'utf8');
console.log('REPORT WRITTEN -> scripts/visual-scan-report.txt');
