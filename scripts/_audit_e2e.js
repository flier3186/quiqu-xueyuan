// 全板块端到端自查（2026-09-09 更新后回归）
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 1050 } });
  const errs = [];
  p.on('pageerror', e => errs.push('PAGE ' + String(e).slice(0, 160)));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text().slice(0, 140)); });
  const R = {};

  await p.goto('http://127.0.0.1:8147/index.html', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(3500);

  // ---- 1. 全板块渲染 ----
  R.views = await p.evaluate(() => {
    const out = {};
    const area = document.getElementById('contentArea');
    const fns = [['math', 'renderMath'], ['english', 'renderEnglish'], ['talk', 'renderTalk'], ['pet', 'renderPet'], ['parent', 'renderParent']];
    fns.forEach(([k, fn]) => {
      try { if (typeof window[fn] === 'function') { area.innerHTML = window[fn](k === 'math' ? '3' : undefined); out[k] = 'ok(' + area.innerHTML.length + ')'; } else out[k] = 'no-fn'; }
      catch (e) { out[k] = 'ERR:' + String(e).slice(0, 80); }
    });
    return out;
  });

  // ---- 2. 数学主链路：答题答错路径（Bug #1 验证）----
  await p.evaluate(() => {
    localStorage.removeItem('quiqu_math_progress_v1');
    S.math = S.math || {};
    S.math.wrongProblems = [];
    S.math.today = null;
    document.getElementById('contentArea').innerHTML = renderMath('3');
  });
  await p.waitForTimeout(300);
  await p.evaluate(() => { MathFlowV5._chooseStudyMode('beginner'); });
  await p.waitForTimeout(400);
  await p.evaluate(() => { MathFlowV5.advance('solve'); if (typeof updateMathStageV5 === 'function') updateMathStageV5(); });
  await p.waitForTimeout(500);
  // 故意点一个错误选项（如果正好点对了就再试下一题，简化：直接调用答错分支的记录逻辑模拟）
  const wrongSim = await p.evaluate(() => {
    const prob = (MathFlowV5._sess || {}).problem || {};
    const choices = prob.choices || [];
    const correctIdx = choices.indexOf(prob.answer);
    const wrongIdx = choices.findIndex((c, i) => i !== correctIdx);
    // 精确泄漏检查：去掉选项按钮本身（选项必然含正确答案），再看题面/提示是否含答案
    const clone = document.getElementById('mathStage').cloneNode(true);
    clone.querySelectorAll('.wp-choice, .challenge-opt').forEach(e => e.remove());
    const text = clone.textContent || '';
    const ansStr = String(prob.answer ?? '');
    let leak = false;
    if (ansStr && ansStr.length <= 4 && /^[\d./%]+$/.test(ansStr)) {
      // 数字/分数类答案：整词匹配（前后都不是数字）
      const re = new RegExp('(?<![0-9./])' + ansStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![0-9./])');
      leak = re.test(text);
    } else if (ansStr) {
      leak = text.includes(ansStr);
    }
    return { choices: choices.length, correctIdx, wrongIdx, leakInSceneHintText: leak };
  });
  R.solveLeak = wrongSim.leakInSceneHintText;
  // 真实点击错误选项
  if (wrongSim.wrongIdx >= 0) {
    await p.evaluate((idx) => {
      const el = [...document.querySelectorAll('#v5SolveChoices .wp-choice, .wp-choice')][idx];
      if (el) el.click(); else { console.log('no-choice-el'); }
    }, wrongSim.wrongIdx);
    await p.waitForTimeout(400);
  }
  R.afterWrong = await p.evaluate(() => {
    const w = (S.math.wrongProblems || [])[0] || null;
    return {
      wrongRecorded: !!w,
      wrongHasK: w ? ('k' in w) : null,
      wrongK: w ? w.k : null,
      todayLogged: !!(S.math.today && S.math.today.bad > 0),
      today: S.math.today ? { count: S.math.today.count, ok: S.math.today.ok, bad: S.math.today.bad } : null
    };
  });

  // ---- 3. 答对路径：bump + today.ok ----
  await p.evaluate(() => {
    const prob = (MathFlowV5._sess || {}).problem || {};
    const choices = prob.choices || [];
    const correctIdx = choices.indexOf(prob.answer);
    const el = [...document.querySelectorAll('.wp-choice')][correctIdx];
    if (el) el.click();
  });
  await p.waitForTimeout(500);
  R.afterCorrect = await p.evaluate(() => ({
    today: S.math.today ? { count: S.math.today.count, ok: S.math.today.ok, bad: S.math.today.bad } : null,
    progressTouched: Object.keys((JSON.parse(localStorage.getItem('quiqu_math_progress_v1') || '{}').touched) || {}).length
  }));

  // ---- 4. 闯关 10 题 + 每题答案在选项中 ----
  R.challenge = await p.evaluate(() => {
    try { startMathChallenge(); } catch (e) { return 'ERR:' + String(e).slice(0, 80); }
    let bad = 0;
    for (const q of challengeQuestions) {
      const { choices, correctIdx } = _safeMathChoices(q);
      if (!choices.length || choices[correctIdx] !== q.answer) bad++;
    }
    return { total: challengeQuestions.length, badAnswerNotInChoices: bad };
  });

  // ---- 5. 听算 + SW + installBtn + 配色抽查 ----
  R.misc = await p.evaluate(async () => {
    const out = {};
    out.swRegistered = !!(navigator.serviceWorker && navigator.serviceWorker.controller) || 'pending(first-load-ok)';
    out.installBtnHidden = (document.getElementById('installBtn') || {}).style?.display !== 'flex';
    out.mathScopeTeal = getComputedStyle(document.querySelector('.math-scope') || document.body).getPropertyValue('--teal').trim();
    const cs = getComputedStyle(document.body);
    out.brandBlueVar = cs.getPropertyValue('--primary') || cs.getPropertyValue('--teal');
    // 重做本册按钮
    out.resetBtnExists = typeof window._resetSemIdx === 'function';
    return out;
  });

  // ---- 6. 键盘可达性（教具）----
  await p.evaluate(() => { document.getElementById('contentArea').innerHTML = renderMath('3'); });
  await p.evaluate(() => { MathFlowV5._chooseStudyMode('beginner'); });
  await p.waitForTimeout(300);
  await p.evaluate(() => { MathFlowV5.advance('solve'); if (typeof updateMathStageV5 === 'function') updateMathStageV5(); });
  await p.waitForTimeout(400);
  R.keyboard = await p.evaluate(() => {
    const drags = [...document.querySelectorAll('.mp-wrap [data-mp-drag]')];
    return { dragTotal: drags.length, withTabindex: drags.filter(e => e.getAttribute('tabindex') === '0').length };
  });

  // ---- 7. 截图 ----
  await p.screenshot({ path: 'scripts/_audit_final.png' });

  console.log(JSON.stringify(R, null, 1));
  console.log('=== JS 错误 ===');
  console.log([...new Set(errs)].slice(0, 8).join('\n') || '(无)');
  await b.close();
})();
