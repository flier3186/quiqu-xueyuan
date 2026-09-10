/**
 * scripts/ci-gate.js · 项目质量门禁（P2-9）
 *
 * 一次浏览器会话内跑完全部硬性不变量，任一不达标 → 退出码 1。
 * 设计原则：只拦"会让孩子的体验变坏"的事，不拦风格问题。
 *
 * 不变量：
 *   ① 两条图形路由零分歧（P0-2 成果不被回退）
 *   ② checkParametric：图形"随数值变"的比例达标（不是硬编码插图）
 *   ③ visualData 字段统一：归一化 0 异常、渲染 0 undefined/NaN（P2-8）
 *   ④ 知识链映射：覆盖率达标、每条主线都有课时可点亮（P1-6）
 *   ⑤ 各册题库真实加载且题量 > 占位阈值（内联占位题库不得回归，P2-7）
 *   ⑥ 3-6 年级扩展题全部入库
 *   ⑦ 全程无 JS 运行时错误
 *
 * 用法：
 *   node scripts/ci-gate.js                 # 自动探测本地预览端口
 *   PORT=8161 node scripts/ci-gate.js
 *   node scripts/ci-gate.js --report        # 只报告不拦截（退出码恒 0）
 */
const path = require('path');
const http = require('http');
const { chromium } = require(path.join(
  'C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

const GRADES = (process.env.GRADES || '2a,2b,3a,3b,4a,4b,5a,5b,6a,6b').split(',');
const REPORT_ONLY = process.argv.includes('--report');

// ---- 阈值（不达标即失败）----
const TH = {
  maxRouteConflicts: 0,          // ① 两条旧路由分歧
  minValueBoundRate: 0.85,       // ② 图形随数值变的比例
  maxRenderBad: 0,               // ③ 渲染出现 undefined/NaN
  minChainCoverage: 0.85,        // ④ 知识链知识点覆盖率
  minGradeProblems: 7,           // ⑤ 每册最少题量（占位库是 6 题/册）
  minExtendHit: 1.0,             // ⑥ 扩展题入库比例
  maxJsErrors: 0,                // ⑦
};

function probe(port) {
  return new Promise((res) => {
    const req = http.get({ host: '127.0.0.1', port, path: '/index.html', timeout: 1500 }, (r) => {
      r.resume(); res(r.statusCode === 200);
    });
    req.on('error', () => res(false));
    req.on('timeout', () => { req.destroy(); res(false); });
  });
}
async function pickPort() {
  if (process.env.PORT) return Number(process.env.PORT);
  for (const p of [8161, 8147, 8080, 8000]) if (await probe(p)) return p;
  return null;
}

(async () => {
  const PORT = await pickPort();
  if (!PORT) {
    console.error('✗ 找不到本地预览服务。先启动：python -m http.server 8161 --bind 127.0.0.1');
    process.exit(1);
  }
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const jsErrors = [];
  page.on('pageerror', (e) => jsErrors.push(String(e.message || e).slice(0, 200)));
  page.on('console', (m) => { if (m.type() === 'error') jsErrors.push('console: ' + m.text().slice(0, 200)); });

  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(async (grades) => {
    const R = { grades: {}, route: null, param: null, vd: null, chain: null, extend: {} };
    for (const g of grades) {
      try { await window.loadGrade(g); } catch (e) {}
    }
    // ---- 逐册统计 ----
    for (const g of grades) {
      const d = window.MATH_BY_GRADE[g];
      const probs = (d && d.problems) || [];
      R.grades[g] = { n: probs.length };
    }
    // ---- ① 路由分歧 + ② 参数化 ----
    const au = window.MathDiagramMaster.audit(grades.filter((g) => R.grades[g].n > 0));
    R.route = { conflicts: au.conflicts.length, legacyConflicts: au.legacyConflicts ? au.legacyConflicts.length : 0 };
    const t = au.totals || {};
    R.param = { tested: t.tested || 0, parametric: t.parametric || 0, valueBound: t.valueBound || 0,
      nonParametric: (au.nonParametric || []).slice(0, 15) };
    // ---- ③ 字段统一 + 渲染 ----
    const KEYS = window.MATH_VD_CANON_KEYS || ['parts', 'bars', 'points'];
    let badNorm = 0, rendered = 0, renderBad = [];
    for (const g of grades) {
      const d = window.MATH_BY_GRADE[g]; if (!d || !d.problems) continue;
      for (const p of d.problems) {
        const vd = p.visualData;
        if (vd && typeof vd === 'object') {
          const nv = window.normVisualData(vd);
          KEYS.forEach((k) => {
            const arr = nv[k]; if (!Array.isArray(arr)) return;
            arr.forEach((it) => {
              if (!it || typeof it !== 'object') return;
              if (!(it.val != null || it.value != null || ('value' in it))) return;
              if (it.val == null || !isFinite(Number(it.val)) || ('value' in it)) badNorm++;
            });
          });
        }
        try {
          const type = (p.visualData && p.visualData.type) || p.visualType || 'barModel';
          const html = window.MathVisualV5.render(type, p.visualData, p);
          rendered++;
          if (/undefined|NaN/.test(String(html))) renderBad.push(`${g}:${String(p.question).slice(0, 22)}`);
          const mk = window.MathManipulative && window.MathManipulative.render ? window.MathManipulative.render(p) : '';
          if (/undefined|NaN/.test(String(mk))) renderBad.push(`${g}:(manip)${String(p.question).slice(0, 22)}`);
        } catch (e) { renderBad.push(`${g}:THROW ${String(e.message).slice(0, 40)}`); }
      }
    }
    R.vd = { badNorm, rendered, renderBad: renderBad.slice(0, 15), renderBadN: renderBad.length };
    // ---- ④ 知识链 ----
    const M = window.MATH_CHAIN_MAP || {};
    const steps = [];
    (window.MATH_CHAINS || []).forEach((ch) => (ch.steps || []).forEach((s) => steps.push(ch.id + '|' + s.g + '|' + s.t)));
    const norm = (s) => String(s || '').replace(/（[^）]*）/g, '').replace(/\([^)]*\)/g, '').replace(/\s+/g, '').trim();
    let kpTotal = 0, kpHit = 0;
    const seen = new Set();
    for (const g of grades) {
      const d = window.MATH_BY_GRADE[g]; if (!d || !d.problems) continue;
      for (const p of d.problems) {
        const k = String(p.knowledge || ''); if (!k) continue;
        const key = g + '|' + k; if (seen.has(key)) continue; seen.add(key);
        kpTotal++;
        if (M[norm(k)]) kpHit++;
      }
    }
    const refHit = {};
    Object.keys(M).forEach((k) => (M[k] || []).forEach((r) => { refHit[r] = (refHit[r] || 0) + 1; }));
    const emptyRefs = steps.filter((r) => !refHit[r]);
    R.chain = { kpTotal, kpHit, coverage: kpTotal ? kpHit / kpTotal : 0, stepTotal: steps.length, emptyRefs };
    // ---- ⑥ 扩展题 ----
    const E = window.MATH_EXTEND_3_6 || {};
    let extAll = 0, extHit = 0;
    Object.keys(E).forEach((ek) => {
      const g = ek.replace(/_e$/, '');
      const probs = (window.MATH_BY_GRADE[g] || {}).problems || [];
      (E[ek] || []).forEach((x) => {
        extAll++;
        if (probs.some((p) => String(p.question).trim() === String(x.question).trim())) extHit++;
      });
    });
    R.extend = { all: extAll, hit: extHit };
    return R;
  }, GRADES);

  await browser.close();

  // ================= 判定 =================
  const fails = [];
  const lines = [];
  const ok = (b) => (b ? '✓' : '✗');

  const rc = data.route.conflicts;
  lines.push(`${ok(rc <= TH.maxRouteConflicts)} ① 图形路由分歧            : ${rc}（历史遗留 ${data.route.legacyConflicts}，阈值 ${TH.maxRouteConflicts}）`);
  if (rc > TH.maxRouteConflicts) fails.push(`图形路由仍有 ${rc} 处分歧`);

  const vbRate = data.param.tested ? data.param.valueBound / data.param.tested : 0;
  const pRate = data.param.tested ? data.param.parametric / data.param.tested : 0;
  lines.push(`${ok(vbRate >= TH.minValueBoundRate)} ② 图形随数值变(valueBound) : ${(vbRate * 100).toFixed(1)}%（${data.param.valueBound}/${data.param.tested}，阈值 ${TH.minValueBoundRate * 100}%）  几何参数化 ${(pRate * 100).toFixed(1)}%`);
  if (vbRate < TH.minValueBoundRate) fails.push(`valueBound ${(vbRate * 100).toFixed(1)}% < ${TH.minValueBoundRate * 100}%`);
  if (data.param.nonParametric.length) {
    lines.push('   非参数化样例: ' + data.param.nonParametric.slice(0, 5).map((x) => `${x.g || ''}:${String(x.q || x.question || '').slice(0, 18)}`).join(' | '));
  }

  lines.push(`${ok(data.vd.badNorm <= 0)} ③a visualData 归一化异常    : ${data.vd.badNorm}`);
  if (data.vd.badNorm > 0) fails.push(`字段归一化异常 ${data.vd.badNorm} 处`);
  lines.push(`${ok(data.vd.renderBadN <= TH.maxRenderBad)} ③b 渲染 undefined/NaN      : ${data.vd.renderBadN} / ${data.vd.rendered} 次渲染`);
  if (data.vd.renderBadN > TH.maxRenderBad) fails.push(`渲染异常 ${data.vd.renderBadN} 处: ${data.vd.renderBad.slice(0, 4).join(' , ')}`);

  const cov = data.chain.coverage;
  lines.push(`${ok(cov >= TH.minChainCoverage && !data.chain.emptyRefs.length)} ④ 知识链覆盖率             : ${(cov * 100).toFixed(1)}%（${data.chain.kpHit}/${data.chain.kpTotal}）  空主线 ${data.chain.emptyRefs.length}/${data.chain.stepTotal}`);
  if (cov < TH.minChainCoverage) fails.push(`知识链覆盖率 ${(cov * 100).toFixed(1)}% < ${TH.minChainCoverage * 100}%`);
  if (data.chain.emptyRefs.length) fails.push(`有 ${data.chain.emptyRefs.length} 条主线格子永远点不亮`);

  const thin = Object.keys(data.grades).filter((g) => data.grades[g].n < TH.minGradeProblems);
  lines.push(`${ok(!thin.length)} ⑤ 各册题量                 : ${Object.keys(data.grades).map((g) => g + ':' + data.grades[g].n).join(' ')}`);
  if (thin.length) fails.push(`题量过少的册（疑占位库回归）: ${thin.map((g) => g + '=' + data.grades[g].n).join(',')}`);

  const extRate = data.extend.all ? data.extend.hit / data.extend.all : 0;
  lines.push(`${ok(extRate >= TH.minExtendHit)} ⑥ 3-6 年级扩展题入库       : ${data.extend.hit}/${data.extend.all}`);
  if (extRate < TH.minExtendHit) fails.push(`扩展题入库 ${data.extend.hit}/${data.extend.all}`);

  lines.push(`${ok(jsErrors.length <= TH.maxJsErrors)} ⑦ JS 运行时错误            : ${jsErrors.length}`);
  if (jsErrors.length > TH.maxJsErrors) fails.push(`JS 错误: ${jsErrors.slice(0, 3).join(' | ')}`);

  console.log('奇趣学园 · 质量门禁（port ' + PORT + '）');
  console.log('─'.repeat(72));
  lines.forEach((l) => console.log('  ' + l));
  console.log('─'.repeat(72));

  if (!fails.length) { console.log('✓ 全部不变量通过'); process.exit(0); }
  console.log('✗ 未通过 ' + fails.length + ' 项:');
  fails.forEach((f) => console.log('   · ' + f));
  process.exit(REPORT_ONLY ? 0 : 1);
})().catch((e) => { console.error('GATE ERROR', e); process.exit(1); });
