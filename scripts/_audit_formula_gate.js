// 算式防泄漏门控专项验证：
// 1) 泄漏题（因数和/质数和/植树+1/填分子）作答前算式必须隐藏
// 2) 普通题（数字都在题干里）算式照常显示
// 3) 答对/答错反馈里揭示完整算式
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
  const errs = [];
  p.on('pageerror', e => errs.push('PAGE ' + String(e).slice(0, 160)));
  const R = {};
  await p.goto('http://127.0.0.1:8147/index.html', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(2000);
  // P2-7 之后 index.html 不再内联占位题库 —— 必须先显式懒加载各册，否则 MATH_BY_GRADE[g] 为 undefined
  await p.evaluate(async () => {
    for (const g of ['2a','2b','3a','3b','4a','4b','5a','5b','6a','6b']) {
      try { if (typeof loadGrade === 'function') await loadGrade(g); } catch (e) {}
    }
  });
  await p.waitForTimeout(500);

  R.gateUnit = await p.evaluate(() => {
    const out = [];
    const t = (name, prob, expectLeak) => {
      let leak;
      try { leak = _formulaLeaksPreAnswer(prob); } catch (e) { leak = 'ERR:' + e.message; }
      out.push({ name, leak, expect: expectLeak, pass: leak === expectLeak });
    };
    t('因数和(1+2+3+4+6+12)', { formula: '1+2+3+4+6+12 = ?', question: '12的所有因数的和是多少？', scene: '' }, true);
    t('质数和(2+3+5+7)', { formula: '2 + 3 + 5 + 7 = ?', question: '10以内所有质数的和是多少？', scene: '' }, true);
    t('植树+1', { formula: '20 ÷ 5 + 1 = ?', question: '一共要栽多少棵树？', scene: '小路长20米，每5米栽一棵，两端都栽。' }, true);
    t('填分子(3/8)', { formula: '3 / 8', question: '吃了这块蛋糕的几分之几？（填分子）', scene: '蛋糕切8块吃3块' }, true);
    t('八折→80%(脚手架非泄题)', { formula: '200 × 80% = ?', question: '打折后现价多少元？', scene: '原价200元，打八折' }, false);
    t('季度(12÷3)', { formula: '12 ÷ 3 = ?', question: '一年有几个季度？', scene: '' }, true);
    t('普通乘法(数字在题干)', { formula: '4 × 15 = ?', question: '每排15株，种了4排，一共多少株？', scene: '花圃种花' }, false);
    t('周长公式(3.14常量)', { formula: '2 × 3.14 × 5 = ?', question: '花坛的周长是多少米？', scene: '圆形花坛半径5米' }, false);
    t('普通加减(数字在题干)', { formula: '12 - 10 = ?', question: '足球12人，篮球10人，足球比篮球多几人？', scene: '' }, false);
    return out;
  });

  // 渲染层实测：泄漏题 solve 阶段不含算式原文，含"自己列"提示
  R.renderLeak = await p.evaluate(() => {
    window.MATH_SESSION = window.MATH_SESSION || { hintUsed: false, startTs: Date.now() };
    const prob = MATH_BY_GRADE['5b'].problems[0];
    const html = renderMathSolve(prob);
    return {
      formulaHidden: !html.includes(String(prob.formula)),
      hasSelfPrompt: html.includes('自己列'),
      gate: _formulaLeaksPreAnswer(prob),
      formula: prob.formula
    };
  });

  // 普通题：算式照常显示
  R.renderNormal = await p.evaluate(() => {
    window.MATH_SESSION = window.MATH_SESSION || { hintUsed: false, startTs: Date.now() };
    const probs = Object.values(MATH_BY_GRADE).flatMap(g => g.problems || []);
    const prob = probs.find(x => !_formulaLeaksPreAnswer(x) && x.formula && String(x.formula).includes('='));
    const html = renderMathSolve(prob);
    return { formulaShown: html.includes(String(prob.formula)), formula: prob.formula };
  });

  // 答错反馈揭示算式（走真实交互：渲染 solve 后点一个错误选项）
  R.wrongReveal = await p.evaluate(() => {
    const prob = MATH_BY_GRADE['5b'].problems[0];
    window.CURRENT_MATH_PROBLEM = prob;
    window.MATH_SESSION = window.MATH_SESSION || {};
    window.MATH_SESSION.startTs = Date.now();
    const area = document.createElement('div');
    area.innerHTML = renderMathSolve(prob);
    document.body.appendChild(area);
    const choices = area.querySelectorAll('.wp-choice');
    const correctIdx = Array.from(choices).findIndex(c => String(c.dataset.val) === String(prob.answer));
    const wrongIdx = correctIdx === 0 ? 1 : 0;
    mathAnswer(choices[wrongIdx], wrongIdx, correctIdx, 'solve', 0);
    const fb = document.getElementById('mathSolveFeedback');
    return { revealed: fb && fb.innerHTML.includes('完整算式'), correctIdx, wrongIdx };
  });

  R.jsErrors = errs;
  console.log(JSON.stringify(R, null, 2));
  await b.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
