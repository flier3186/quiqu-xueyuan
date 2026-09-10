// scripts/_audit_diagram_coverage.js · 课程图母版覆盖普查（真实浏览器）
// 目标：把"哪些图是参数化母版、哪些只是静态插图、两条路由有没有打架"变成一张可引用的表。
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
const PORT = process.env.PORT || 8161;
const GRADES = (process.env.GRADES || '2a,2b,3a,3b,4a,4b,5a,5b,6a,6b').split(',');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 200)));
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const out = await page.evaluate(async (grades) => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    for (const g of grades) { try { if (typeof loadGrade === 'function') await loadGrade(g); } catch (e) {} }
    // 2a 不在 GRADE_FILES 里（由 index.html 末尾从 MATH_GRADE_2 合并进来），
    // 所以这里以"MATH_BY_GRADE 是否真的有题"为准，而不是 MATH_LOADED_GRADES。
    for (let i = 0; i < 60; i++) {
      const ready = grades.every(g => window.MATH_BY_GRADE && window.MATH_BY_GRADE[g] && (window.MATH_BY_GRADE[g].problems || []).length);
      if (ready) break;
      await sleep(200);
    }
    const loaded = grades.filter(g => window.MATH_BY_GRADE && window.MATH_BY_GRADE[g] && (window.MATH_BY_GRADE[g].problems || []).length);
    const au = window.MathDiagramMaster.audit(loaded);

    // ---- 知识链覆盖率：题目知识点能否落在 MATH_CHAINS 的某一步上 ----
    const steps = [];
    (window.MATH_CHAINS || []).forEach(ch => (ch.steps || []).forEach(s => steps.push({ g: s.g, t: String(s.t) })));
    const norm = s => String(s || '').replace(/[\s（）()、，,。·\-—]/g, '');
    let kpTotal = 0, kpHit = 0;
    const miss = {};
    loaded.forEach(g => {
      (window.MATH_BY_GRADE[g].problems || []).forEach(p => {
        const kp = String(p.knowledge || '');
        if (!kp) return;
        kpTotal++;
        const nk = norm(kp);
        const hit = steps.some(s => s.g === g && (norm(s.t) === nk || norm(s.t).indexOf(nk) >= 0 || nk.indexOf(norm(s.t)) >= 0));
        if (hit) kpHit++; else miss[kp] = (miss[kp] || 0) + 1;
      });
    });
    const missTop = Object.keys(miss).sort((a, b) => miss[b] - miss[a]).slice(0, 15).map(k => k + '×' + miss[k]);

    return {
      loaded: loaded,
      totals: au.totals,
      byMaster: au.byMaster,
      byStage: au.byStage,
      perSem: au.perSem,
      conflicts: au.conflicts.slice(0, 20),
      conflictN: au.conflicts.length,
      nonParametric: au.nonParametric.slice(0, 25),
      nonParametricN: au.nonParametric.length,
      masters: window.MathDiagramMaster.list().map(m => m.id + ':' + m.stage),
      chain: { steps: steps.length, kpTotal: kpTotal, kpHit: kpHit, missTop: missTop }
    };
  }, GRADES);

  console.log('已加载册：', out.loaded.join(','));
  console.log('母版（id:阶段）：', out.masters.join('  '));
  console.log('\n总题数：', out.totals.problems);
  console.log('可参数化判定的图：', out.totals.tested, ' 其中参数化：', out.totals.parametric,
    ' 参数化率：', out.totals.tested ? Math.round(100 * out.totals.parametric / out.totals.tested) + '%' : 'n/a');
  console.log('\n按母版分布：', JSON.stringify(out.byMaster));
  console.log('按能力档分布：', JSON.stringify(out.byStage));
  console.log('\n每册：');
  Object.keys(out.perSem).forEach(k => {
    const s = out.perSem[k];
    console.log(`  ${k}: 共${s.total}  可操作${s.byStage.operable || 0} 动效${s.byStage.animated || 0} 静态${s.byStage.static || 0}  参数化 ${s.parametric}/${s.tested}`);
  });
  console.log('\n两条旧路由分歧数：', out.conflictN);
  out.conflicts.slice(0, 10).forEach(c => console.log('  ·', c.sem, c.kp, '| 静态图:', c.v5, '| 教具:', c.manip));
  console.log('\n非参数化（图不随数字变）样例：', out.nonParametricN);
  out.nonParametric.slice(0, 12).forEach(c => console.log('  ·', c.sem, c.master, c.kp, '|', c.question, '|', c.reason));
  console.log('\n知识链：MATH_CHAINS 共', out.chain.steps, '步；题目知识点', out.chain.kpTotal,
    '条记录，其中', out.chain.kpHit, '条命中链条（覆盖率',
    out.chain.kpTotal ? Math.round(100 * out.chain.kpHit / out.chain.kpTotal) + '%' : 'n/a', '）');
  console.log('  未命中 TOP：', out.chain.missTop.join(' | '));
  console.log('\nJS 错误：', errs.length ? errs.join(' | ') : '无');
  await browser.close();
})();
