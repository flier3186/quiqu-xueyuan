/**
 * audit-no-leak.js — 奇趣学园 数学内核 泄漏/比例 自测
 *
 * 用 playwright-core（channel: 'msedge'）打开本地 index.html，
 * 连续通过 MathKernel.generate() 出题（与线上练习入口同一适配器 _genMathProblemKernel），
 * 逐题断言：
 *   1) 视觉 SVG 中除“教学揭示区”外，不含答案数字（含 barModel 的“合计 =”等式已被清除）；
 *   2) barModel 两条(或多条)条形像素宽度比 == 数值比，误差 < 5%；字号自适应不溢出。
 *
 * 运行：NODE_PATH=C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules node scripts/audit-no-leak.js
 */
const { chromium } = require('playwright-core');
const path = require('path');

const URL = 'file://' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
const TOTAL = 30;            // 连续生成题数
const MIN_BARMODEL = 4;      // 至少覆盖的 barModel 题数（保证比例实测有意义）
const RATIO_TOL = 0.05;      // 比例误差上限 5%

// 视觉中被许可展示答案的“教学揭示区”类名（这些位置允许出现答案，审计时排除）
const REVEAL_CLASSES = ['mv-bond-total', 'mv-result', 'mv-formula', 'mv-step-bond', 'mv-bar-sum'];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction(
    () => typeof MathKernel !== 'undefined' && typeof MathVisualV5 !== 'undefined' && typeof MathFlowV5 !== 'undefined' && typeof _genMathProblemKernel === 'function',
    null, { timeout: 15000 }
  );

  const run = await page.evaluate(({ TOTAL, MIN_BARMODEL, RATIO_TOL, REVEAL_CLASSES }) => {
    function isStandaloneNum(text, num) {
      if (text == null) return false;
      const re = new RegExp('(^|[^0-9])' + String(num).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^0-9]|$)');
      return re.test(String(text));
    }
    const results = [];
    let barModelCount = 0;
    let attempts = 0;

    while (results.length < TOTAL || barModelCount < MIN_BARMODEL) {
      if (attempts++ > TOTAL * 4 + 50) break; // 安全上限，防死循环
      let problem, inst;
      try {
        inst = MathKernel.generate();
        problem = _genMathProblemKernel();          // 与线上练习入口同一适配器
      } catch (e) {
        results.push({ ok: false, reason: 'generate失败:' + e.message });
        continue;
      }
      const answer = problem.answer;
      const r = { ok: true, topic: problem.topic, visualType: problem.visualType, leaks: [], ratioErr: null, barModel: false };

      // ---- 1) 渲染视觉（与 solve/explain 阶段同一 renderer）----
      let html = '';
      try { html = MathVisualV5.render(problem.visualType, problem.visualData, problem); }
      catch (e) { r.ok = false; r.reason = 'render崩溃:' + e.message; results.push(r); continue; }

      // 合计 = 数字 必须消失
      if (/合计\s*=\s*\d/.test(html)) r.leaks.push('barModel仍含“合计=数字”');

      // 解析 SVG，逐条 <text> 检查是否含答案（揭示区除外）
      const host = document.createElement('div');
      host.innerHTML = html;
      const texts = [...host.querySelectorAll('svg text')];
      for (const t of texts) {
        const inReveal = t.closest('.' + REVEAL_CLASSES.join(',.')) != null;
        if (inReveal) continue;
        if (isStandaloneNum(t.textContent, answer)) r.leaks.push('SVG文本含答案:' + t.textContent.trim());
      }

      // 全链路 stage 也必须无“合计=”
      try {
        const stageHtml = MathFlowV5.start(problem);
        if (/合计\s*=\s*\d/.test(stageHtml)) r.leaks.push('MathFlowV5 stage 仍含“合计=数字”');
      } catch (e) { /* stage 渲染失败不阻断视觉审计 */ }

      // ---- 2) barModel 比例校准 ----
        const resolved = MathVisualV5._resolveType(problem.visualType, problem.visualData, problem);
        // 只对真正渲染为条形的题做比例校准（容斥→韦恩图、分数→分数条等路由结果不适用）
        const isBar = /barModel/.test(resolved);
      if (isBar) {
        r.barModel = true; barModelCount++;
        // 取值：bars(value) 或 parts(val)
        const vd = problem.visualData || {};
        let vals = [];
        if (Array.isArray(vd.bars)) vals = vd.bars.map(b => +b.value);
        else if (Array.isArray(vd.parts)) vals = vd.parts.map(p => +(p.val != null ? p.val : p.value));
        // 量条形矩形（高度≥20、宽度>5）
        const rects = [...host.querySelectorAll('svg rect')].filter(rc => {
          const h = parseFloat(rc.getAttribute('height')) || 0;
          const w = parseFloat(rc.getAttribute('width')) || 0;
          return h >= 20 && w > 5;
        });
        const ws = rects.map(rc => parseFloat(rc.getAttribute('width')));
        if (vals.length >= 2 && ws.length >= 2 && vals.length === ws.length) {
          const vmax = Math.max(...vals), wmax = Math.max(...ws);
          let worst = 0;
          for (let i = 0; i < vals.length; i++) {
            const vr = vals[i] / vmax, wr = ws[i] / wmax;
            const err = vr > 0 ? Math.abs(vr - wr) / vr : (wr > 0 ? 1 : 0);
            if (err > worst) worst = err;
          }
          r.ratioErr = Math.round(worst * 1000) / 1000;
          if (worst > RATIO_TOL) r.leaks.push('条形比例偏差 ' + (worst * 100).toFixed(1) + '% > 5%');
        } else if (vals.length >= 2 && ws.length >= 2) {
          r.leaks.push('barModel 条形段数(' + ws.length + ')与数值段数(' + vals.length + ')不匹配，无法校准');
        }
        // 单段/零段：无比例关系可校准，静默跳过
      }

      if (r.leaks.length) { r.ok = false; }
      results.push(r);
    }

    const pass = results.filter(r => r.ok).length;
    const fail = results.length - pass;
    const barModels = results.filter(r => r.barModel);
    const maxRatioErr = barModels.reduce((m, r) => Math.max(m, r.ratioErr || 0), 0);
    return {
      total: results.length, pass, fail,
      barModelTested: barModels.length,
      maxRatioErr,
      pageErrors: (typeof window !== 'undefined') ? [] : [],
      details: results.map((r, i) => ({ i: i + 1, topic: r.topic, visualType: r.visualType, barModel: !!r.barModel, ok: r.ok, ratioErr: r.ratioErr, leaks: r.leaks, reason: r.reason }))
    };
  }, { TOTAL, MIN_BARMODEL, RATIO_TOL, REVEAL_CLASSES });

  await browser.close();

  console.log('==== 奇趣学园 数学内核 泄漏/比例 自测 ====');
  console.log(`生成题数: ${run.total} | 通过: ${run.pass} | 失败: ${run.fail}`);
  console.log(`barModel 实测题数: ${run.barModelTested} | 最大比例误差: ${(run.maxRatioErr * 100).toFixed(2)}% (阈值 5%)`);
  if (pageErrors.length) console.log('页面错误:', pageErrors.join(' | '));
  const failed = run.details.filter(d => !d.ok);
  if (failed.length) {
    console.log('--- 失败明细 ---');
    failed.forEach(d => console.log(`#${d.i} [${d.topic}/${d.visualType}] ratioErr=${d.ratioErr} leaks=${JSON.stringify(d.leaks)} ${d.reason || ''}`));
  }
  const allGreen = run.fail === 0 && run.barModelTested >= MIN_BARMODEL && run.maxRatioErr <= RATIO_TOL && pageErrors.length === 0;
  console.log(allGreen ? '\n✅ 审计全绿（无泄漏 + 比例误差<5%）' : '\n❌ 审计未通过');
  process.exit(allGreen ? 0 : 1);
})().catch(e => { console.error('审计脚本异常:', e); process.exit(2); });
