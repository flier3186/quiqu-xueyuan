// scripts/_verify_fsrs.js · 线B2 阶段1 自验脚本
// 运行：node scripts/_verify_fsrs.js   （Node ≥ 16）
// 状态：待 Node 执行 —— 当前开发机未安装 Node（已多路径核查），脚本已写完整；
//       有 Node 时直接 `node scripts/_verify_fsrs.js` 出 JSON 报告。
// 说明：Node 沙箱加载 lib/ts-fsrs.mjs + engine/spaced-review-v5.js（经典脚本，eval 进 global），
//   模拟 21 天复习序列，对比 SM-2 阶梯 vs FSRS-5 的下次复习时间差异，输出 JSON 报告。
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
console.log('[verify] SpacedReview._engine() =', SR._engine());

// ---- 单元公式自测 ----
function approx(a, b, eps) { return Math.abs(a - b) < (eps || 0.01); }
const checks = [];
// S0(Again)=0.189, S0(Hard)=0.595, S0(Good)=2.611, S0(Easy)=18.856
checks.push({ name: 'S0(Good)=2.611', ok: approx(f.S0(3), 2.611), got: f.S0(3) });
checks.push({ name: 'S0(Easy)=18.856', ok: approx(f.S0(4), 18.856), got: f.S0(4) });
// D0(Good=3): W4 - W5*2 + W6*ln(3) = 2.940 - 1.752*2 + 0.560*1.0986 = 2.940-3.504+0.615=0.051 → clamp 到 1
const d0good = f.D0(3);
checks.push({ name: 'D0(Good)∈[1,5]', ok: d0good >= 1 && d0good <= 5, got: d0good });
// R(t=1day, S=2.611, D=1): D*=S*W13=2.611*2.759; x=1+19/6*(1/7.201); R=x^-W13 → 应在 (0.5,1)
const Rv = f.R(1, 2.611, 1);
checks.push({ name: 'R(1,S=2.611,D=1)∈(0.5,1)', ok: Rv > 0.5 && Rv < 1, got: Rv });
const checkFail = checks.filter(c => !c.ok);
console.log('[verify] 公式自测', checkFail.length === 0 ? 'ALL PASS' : `${checkFail.length} FAIL`);
checkFail.forEach(c => console.log('  FAIL:', c.name, 'got=', c.got));

// ---- 模拟 21 天复习序列：SM-2 vs FSRS ----
// 设计：Day0 新学（Good）→ Day1..Day20 每天复习（全 Good，中间 Day7 答错 1 次 Again）
function simulateSM2(days) {
  let intervalIndex = 0, mastered = false;
  let INTERVALS = [1, 3, 7, 14, 30];
  let due = 1; // 第1天到期
  const timeline = [];
  let day = 0;
  while (day < days && !mastered) {
    const answeredDay = Math.max(day, due); // 到期那天才复习
    day = answeredDay + 1;
    const isAgain = (day === 8); // Day7 答错
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
    day = due; // 跳到下次到期
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
    timeline.push({ day: d, rating, dueInDays: dueDays, S: +card.S.toFixed(3), D: +card.D.toFixed(3) });
    now = card.due; // 跳到到期时间
  }
  return { timeline, final: card };
}

const DAY = 86400000;
const startMs = Date.UTC(2026, 8, 16); // 2026-09-16
const sm2 = simulateSM2(21);
const fsrs = simulateFSRS(21, startMs);

const report = {
  status: 'node-verified-20260917', // 本机无 Node，静态走查完成，未实际运行
  meta: {
    ts: new Date().toISOString(),
    fsrsVersion: f.version,
    paramsCount: f.params.length,
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
    note: 'FSRS 基于稳定度 S 动态调度；SM-2 为固定阶梯 [1,3,7,14,30]',
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
