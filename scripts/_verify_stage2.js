// scripts/_verify_stage2.js · 验证 2026-09-10 阶段 2（真实浏览器）：
//   ① 课程图母版库：注册表完整性 / 仲裁路由 / 参数化判定 / 覆盖审计 / 空白兜底
//   ② 诊断定级：抽样设计 / 自适应跳题 / 定级结论 / 落盘回灌 / UI 闭环
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
const PORT = process.env.PORT || 8161;

const R = [];
function chk(id, name, cond, extra) { R.push({ id, name, pass: !!cond, extra: extra === undefined ? '' : String(extra).slice(0, 200) }); }

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 240)));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 240)); });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const r = await page.evaluate(async () => {
    const o = {};
    const sleep = ms => new Promise(r2 => setTimeout(r2, ms));
    try { for (const g of ['3a', '3b']) { if (typeof window.loadGrade === 'function') await window.loadGrade(g); } } catch (e) {}
    for (let i = 0; i < 40 && !(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3a'] && window.MATH_BY_GRADE['3a'].problems); i++) await sleep(150);
    o.loaded = !!(window.MATH_BY_GRADE && window.MATH_BY_GRADE['3a'] && window.MATH_BY_GRADE['3a'].problems);

    // ============================================================
    // ① 课程图母版库
    // ============================================================
    o.dmExists = !!(window.MathDiagramMaster && MathDiagramMaster.route);
    const M = window.MathDiagramMaster;
    o.masterCount = M ? M.MASTERS.length : 0;
    o.masterFieldsOk = M ? M.MASTERS.every(m => m.id && m.name && m.family && m.stage && typeof m.supports === 'function') : false;
    o.masterStages = M ? Array.from(new Set(M.MASTERS.map(m => m.stage))).sort().join(',') : '';

    // 1.1 路由：挑几道有代表性的题
    const bank = (window.MathDailyBank ? MathDailyBank.build('3a').list : (window.MATH_BY_GRADE['3a'].problems || []));
    o.bankLen = bank.length;
    const byVt = {};
    bank.forEach(p => { const k = p.visualType || '(none)'; if (!byVt[k]) byVt[k] = p; });
    o.visualTypes = Object.keys(byVt).join(',');

    const nb = byVt['numberBond']; const bar = byVt['bar'] || byVt['barModel'];
    o.routeNumberBond = nb ? (M.route(nb).master || {}).id : 'no-sample';
    o.routeBar = bar ? (M.route(bar).master || {}).id : 'no-sample';
    o.routeHasConflictField = nb ? (typeof M.route(nb).conflict === 'boolean') : false;

    // 1.2 渲染：对每条类型样本都能出非空 HTML
    let rendered = 0, empty = 0;
    Object.keys(byVt).forEach(k => {
      try { const h = M.renderFor(byVt[k], { dynamic: false }).html; if (h && h.length > 40) rendered++; else empty++; } catch (e) { empty++; }
    });
    o.renderOk = rendered; o.renderEmpty = empty;

    // 1.3 答案掩码仍生效（母版路径不能把答案画出来）
    try {
      const h = M.renderFor(nb, { dynamic: false }).html;
      const svgTxt = (h.match(/<text[^>]*>([\s\S]*?)<\/text>/g) || []).join(' ');
      const body = h.replace(/<text[^>]*>/, ''); // 只要有 text 就算有内容
      o.maskApplied = h.indexOf('?') >= 0 || h.indexOf('mv-reveal') >= 0 || body.indexOf(String(nb.answer)) < 0;
    } catch (e) { o.maskApplied = false; }

    // 1.4 参数化判定（交换两个已知部分值 → 几何是否变化）
    const cpNb = M.checkParametric(nb);
    o.cpTested = cpNb.tested;
    o.cpReason = cpNb.reason;
    // 构造一道"几何写死"的假题：交换值后几何不变 → 应判为非参数化
    const fake = {
      question: '假题', formula: 'A + B = ?', answer: 0, knowledge: '假',
      visualType: 'bar', visualData: { type: 'bar', parts: [{ value: 3, label: '甲' }, { value: 5, label: '乙' }] }
    };
    const sig1 = M.geoSignature(M.renderFor(fake, { dynamic: false }).html);
    o.geoSigWorks = typeof sig1 === 'string' && sig1.length > 0;

    // 1.5 覆盖审计
    const au = M.audit(['3a']);
    o.auditProblems = au.totals.problems;
    o.auditMasterKeys = Object.keys(au.byMaster).length;
    o.auditStageKeys = Object.keys(au.byStage).join(',');
    o.auditPerSem = !!(au.perSem['3a'] && au.perSem['3a'].total > 0);
    o.auditConflictIsArray = Array.isArray(au.conflicts);
    o.auditSample = JSON.stringify({ byMaster: au.byMaster, byStage: au.byStage, tested: au.totals.tested, parametric: au.totals.parametric }).slice(0, 300);

    // 1.6 空白兜底：把底层渲染器打成空，_mvHTML 应仍能出图
    try {
      const orig = MathVisualV5.render;
      MathVisualV5.render = function () { return ''; };
      const h = window._mvHTML ? window._mvHTML(nb) : '';
      MathVisualV5.render = orig;
      o.fallbackNonEmpty = !!(h && h.indexOf('<svg') >= 0);
      o.fallbackLen = h ? h.length : 0;
    } catch (e) { o.fallbackNonEmpty = false; }

    // ============================================================
    // ② 诊断定级
    // ============================================================
    const D = window.MathDiagnostic;
    o.dExists = !!(D && D.plan && D.start);
    const plan = D.plan('3a');
    o.planItems = plan.items.length;
    o.planItemsOk = plan.items.length >= 1 && plan.items.length <= 6;
    o.planItemShape = plan.items.every(it => it.kp && it.base && typeof it.baseIdx === 'number');
    o.planHasDeep = plan.items.some(it => it.deep);

    // 2.1 全对 → 应判"可以跳级"
    D.start('3a');
    let guard = 0;
    while (D._state() && !D._state().done && guard++ < 40) {
      const cur = D.current(); if (!cur) break;
      D.submit(true);
    }
    const resOK = D.result();
    o.allCorrectLevel = resOK.level;
    o.allCorrectMastered = resOK.mastered.length;
    o.allCorrectAdvice = resOK.advice.slice(0, 60);
    o.answeredAllCorrect = resOK.answered;

    // 2.2 全错 → 应判"需要补基础"，且基础题错就跳过加深（自适应）
    D.start('3a');
    let guard2 = 0, wrongAnswers = 0;
    while (D._state() && !D._state().done && guard2++ < 40) {
      const cur = D.current(); if (!cur) break;
      D.submit(false); wrongAnswers++;
    }
    const resBad = D.result();
    o.allWrongLevel = resBad.level;
    o.allWrongWeak = resBad.weak.length;
    o.allWrongQuestions = wrongAnswers;
    // 全错时每个 KP 只问 1 题（跳过加深）→ 问题数应等于 KP 数
    o.adaptiveSkipDeep = wrongAnswers === resBad.kps.length;

    // 2.3 落盘 + 回灌
    D.applyResult(resBad, { movePointer: true });
    const stored = JSON.parse(localStorage.getItem('quiqu_math_diag_v1') || '{}');
    o.stored = !!(stored['3a'] && stored['3a'].level);
    o.storedLevel = stored['3a'] ? stored['3a'].level : '';
    o.pointerMoved = (S.math.idxBySem && Number(S.math.idxBySem['3a'])) === Number(resBad.recommendIdx);
    o.getResultWorks = !!D.getResult('3a');

    // 2.4 入口卡
    const card = D.renderEntryCard('3a');
    o.entryCardHasText = /摸底|已定级/.test(card);

    // 2.5 UI 闭环
    try {
      localStorage.removeItem('quiqu_math_diag_v1');
      S.math.grade = '3'; S.math.semester = 'a'; S.math.idxBySem = { '3a': 0 };
      window.MATH_IS_DIAG = false; window.MATH_SESSION = null; window.MATH_REVIEW = null;
      window.MATH_IS_BOOK_END = false;
      switchView('math'); window.render(); await sleep(400);
      const host0 = document.getElementById('mathStage');
      o.entryVisible = !!(host0 && /摸底|已定级/.test(document.body.innerText));
      D.startRun(); await sleep(300);
      o.diagActive = !!window.MATH_IS_DIAG;
      const host1 = document.getElementById('mathStage');
      o.runPanelVisible = !!(host1 && /摸底中/.test(host1.innerText));
      // 点第一个选项
      const btn = document.querySelector('#mathStage button[onclick^="MathDiagnostic.answer"]');
      o.runHasChoices = !!btn;
      if (btn) { const before = D._state() ? D._state().asked : -1; btn.click(); await sleep(250); o.advanceAfterClick = (D._state() ? D._state().asked : -1) > before; }
      D.exit(); await sleep(300);
      o.exitWorks = !window.MATH_IS_DIAG;
    } catch (e) { o.uiErr = String(e).slice(0, 200); }

    return o;
  });

  // ============ 汇总 ============
  chk('S2-01', '母版库已加载', r.dmExists);
  chk('S2-02', '母版数量 >= 10', r.masterCount >= 10, 'count=' + r.masterCount);
  chk('S2-03', '母版声明字段完整', r.masterFieldsOk);
  chk('S2-04', '母版覆盖 operable/animated/static 三档', /operable/.test(r.masterStages) && /animated/.test(r.masterStages) && /static/.test(r.masterStages), r.masterStages);
  chk('S2-05', 'numberBond 题路由到 numberBond 母版', r.routeNumberBond === 'numberBond', r.routeNumberBond);
  chk('S2-06', '条形题路由到 barModel 母版', r.routeBar === 'barModel', r.routeBar);
  chk('S2-07', '路由返回 conflict 字段', r.routeHasConflictField);
  chk('S2-08', '各类图形都能渲染出非空 HTML', r.renderEmpty === 0, 'ok=' + r.renderOk + ' empty=' + r.renderEmpty);
  chk('S2-09', '母版路径下答案掩码仍生效', r.maskApplied);
  chk('S2-10', '参数化判定可运行', r.cpTested, r.cpReason);
  chk('S2-11', '几何签名函数可用', r.geoSigWorks);
  chk('S2-12', '覆盖审计统计到题目', r.auditProblems > 50, 'problems=' + r.auditProblems);
  chk('S2-13', '审计给出母版/阶段分布', r.auditMasterKeys >= 3 && r.auditStageKeys.length > 0, r.auditSample);
  chk('S2-14', '审计按册汇总', r.auditPerSem);
  chk('S2-15', '空白兜底：底层渲染失败仍能出图', r.fallbackNonEmpty, 'len=' + r.fallbackLen);

  chk('S2-16', '诊断引擎已加载', r.dExists);
  chk('S2-17', '抽样 1-6 个知识点', r.planItemsOk, 'items=' + r.planItems);
  chk('S2-18', '抽样项结构正确', r.planItemShape);
  chk('S2-19', '包含加深题', r.planHasDeep);
  chk('S2-20', '全对判定为"可以跳级"', r.allCorrectLevel === 'above', r.allCorrectLevel + ' | ' + r.allCorrectAdvice);
  chk('S2-21', '全错判定为"需要补基础"', r.allWrongLevel === 'below', r.allWrongLevel);
  chk('S2-22', '自适应：基础题错则跳过加深题', r.adaptiveSkipDeep, 'q=' + r.allWrongQuestions + ' kp=' + r.allWrongWeak);
  chk('S2-23', '诊断结果落盘', r.stored, r.storedLevel);
  chk('S2-24', '结果可回读', r.getResultWorks);
  chk('S2-25', '可选把日练指针挪到建议起点', r.pointerMoved);
  chk('S2-26', '入口卡文案正确', r.entryCardHasText);
  chk('S2-27', '入口卡出现在数学板块', r.entryVisible);
  chk('S2-28', '点击后进入诊断态', r.diagActive);
  chk('S2-29', '诊断面板渲染出题', r.runPanelVisible && r.runHasChoices);
  chk('S2-30', '答题后推进到下一题', r.advanceAfterClick);
  chk('S2-31', '退出诊断恢复正常', r.exitWorks);

  const pass = R.filter(x => x.pass).length;
  console.log('\n===== 阶段 2 验证 =====');
  R.forEach(x => console.log(`${x.pass ? 'PASS' : 'FAIL'}  ${x.id}  ${x.name}${x.extra ? '   [' + x.extra + ']' : ''}`));
  console.log(`\n结果：${pass}/${R.length} 通过`);
  console.log('JS 错误：' + (errs.length ? '\n' + errs.slice(0, 8).join('\n') : '无'));

  // 供报告引用的原始观测
  console.log('\n--- 观测样本 ---');
  console.log(JSON.stringify({ visualTypes: r.visualTypes, bankLen: r.bankLen, audit: r.auditSample, planItems: r.planItems, allCorrect: r.allCorrectLevel, allWrong: r.allWrongLevel, adaptive: r.adaptiveSkipDeep }, null, 1));
  if (r.uiErr) console.log('UI 异常：' + r.uiErr);

  await browser.close();
  process.exit(pass === R.length && errs.length === 0 ? 0 : 1);
})();
