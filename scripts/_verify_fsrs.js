// scripts/_verify_fsrs.js · 线B2 阶段1 自验脚本（2026-09-18 B-1 修复后更新）
// 运行：node scripts/_verify_fsrs.js   （Node ≥ 16）
// 说明：Node 沙箱加载 lib/ts-fsrs.mjs + engine/spaced-review-v5.js（经典脚本，eval 进 global），
//   模拟 21 天复习序列，对比 SM-2 阶梯 vs FSRS 的下次复习时间差异，输出 JSON 报告。
// 2026-09-18 更新：断言对齐官方 algorithm.ts（FSRS-6 语义）：S0(Good)=2.3065/S0(Easy)=8.2956、
//   D0(Good)≈2.118、R(S,S)=0.9 恒等、R(0,S)=1。
// 依赖：仅 Node 内置 fs/path（纯静态项目，无 node_modules）
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  global.window = global; // 经典脚本挂 window
  global.self = global;
  global.document = { createElement: () => ({ style: {}, appendChild: () => {} }), body: { appendChild: () => {} } };
  try { global.navigator = { userAgent: 'node-fsrs-verify' }; } catch (e) {}
  // 模拟全局 S / saveState
  global.S = { reviewQueue: [], currentProfileId: 'default' };
  global.saveState = function () { /* noop */ };
  if (rel.endsWith('.mjs')) (0, eval)(code); else eval(code); // 挂到 globalThis（IIFE 内 root=self→global）
}

// ---- 加载两个模块 ----
load('lib/ts-fsrs.mjs');
load('engine/spaced-review-v5.js');

const f = global.QuQFSRS;
if (!f) { console.error('ABORT: QuQFSRS 未加载'); process.exit(2); }
const SR = global.SpacedReview;
if (!SR) { console.error('ABORT: SpacedReview 未加载'); process.exit(2); }

console.log('[verify] QuQFSRS.version =', f.version);
console.log('[verify] QuQFSRS.params.length =', f.params.length);
console.log('[verify] decay/factor =', f.decay, f.factor);
console.log('[verify] SpacedReview._engine() =', SR._engine());

// ---- 单元公式自测（官方算法断言）----
function approx(a, b, eps) { return Math.abs(a - b) < (eps || 0.01); }
const checks = [];
// S0(G) = max(W[G-1], 0.1)
checks.push({ name: 'S0(Good)=2.3065', ok: approx(f.S0(3), 2.3065, 1e-4), got: f.S0(3) });
checks.push({ name: 'S0(Easy)=8.2956', ok: approx(f.S0(4), 8.2956, 1e-4), got: f.S0(4) });
// D0(G) = W4 - e^((G-1)·W5) + 1 → D0(3) = 6.4133 - e^1.6668 + 1 ≈ 2.118
const d0good = f.D0(3);
checks.push({ name: 'D0(Good)≈2.118 且∈[1,10]', ok: Math.abs(d0good - 2.118) < 0.01 && d0good >= 1 && d0good <= 10, got: d0good });
// R(S,S) = 0.9 恒等（官方 stability 语义）
const rSS = f.R(1, 1, 1);
checks.push({ name: 'R(S,S)=0.9 恒等', ok: approx(rSS, 0.9, 1e-6), got: rSS });
const r0 = f.R(0, 1, 1);
checks.push({ name: 'R(0,S)=1', ok: approx(r0, 1, 1e-9), got: r0 });
const checkFail = checks.filter(c => !c.ok);
console.log('[verify] 公式自测', checkFail.length === 0 ? 'ALL PASS' : `${checkFail.length} FAIL`);
checkFail.forEach(c => console.log('  FAIL:', c.name, 'got=', c.got));

// ---- 模拟 21 天复习序列：SM-2 vs FSRS ----
function simulateSM2(days) {
  let intervalIndex = 0, mastered = false;
  let INTERVALS = [1, 3, 7, 14, 30];
  let due = 1;
  const timeline = [];
  let day = 0;
  while (day < days && !mastered) {
    const answeredDay = Math.max(day, due);
    day = answeredDay + 1;
    const isAgain = (day === 8);
    const correct = !isAgain;
    if (correct) {
      intervalIndex = Math.min(intervalIndex + 1, INTERVALS.length - 1);
      if (intervalIndex >= INTERVALS.length - 1) { mastered = true; break; }
      due = day + INTERVALS[intervalIndex];
    } else {
      intervalIndex = 0;
      due = day + INTERVALS[0];
    }
    timeline.push({ day: day - 1, correct, nextDue: due });
    day = due;
  }
  return { timeline, mastered, intervalIndex };
}

function simulateFSRS(days, startMs) {
  let now = startMs;
  let card = f.createCard(now);
  const timeline = [];
  for (let d = 0; d < days; d++) {
    const isAgain = (d === 7);
    const rating = isAgain ? f.RATINGS.Again : f.RATINGS.Good;
    card = f.next(card, rating, now);
    const dueDays = Math.round((card.due - now) / f.DAY_MS);
    timeline.push({ day: d, rating, dueInDays: dueDays, S: +card.S.toFixed(3), D: +card.D.toFixed(3), R: +card.R.toFixed(3) });
    now = card.due;
  }
  return { timeline, final: card };
}

const DAY = 86400000;
const startMs = Date.UTC(2026, 8, 16);
const sm2 = simulateSM2(21);
const fsrs = simulateFSRS(21, startMs);

const report = {
  status: 'node-verified-20260918',
  meta: {
    ts: new Date().toISOString(),
    fsrsVersion: f.version,
    paramsCount: f.params.length,
    decay: f.decay,
    factor: f.factor,
    days: 21,
  },
  formulaChecks: checks,
  sm2: sm2,
  fsrs: {
    timeline: fsrs.timeline,
    finalS: +fsrs.final.S.toFixed(3),
    finalD: +fsrs.final.D.toFixed(3),
    finalDue: new Date(fsrs.final.due).toISOString(),
  },
  diff: {
    note: 'FSRS 基于稳定度 S 动态调度（S=保留率90%的间隔）；SM-2 为固定阶梯 [1,3,7,14,30]',
    sm2FinalDueDay: sm2.timeline.length ? sm2.timeline[sm2.timeline.length - 1].nextDue : null,
    fsrsFinalDueInDays: fsrs.timeline.length ? fsrs.timeline[fsrs.timeline.length - 1].dueInDays : null,
  },
};
console.log('\n[verify] 21 天模拟对比：');
console.log(JSON.stringify(report, null, 2));

const out = path.join(ROOT, 'scripts', 'test-results', 'fsrs-verify-report.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(report, null, 2));
console.log('\n[verify] REPORT ->', out);
process.exit(checkFail.length === 0 ? 0 : 1);
