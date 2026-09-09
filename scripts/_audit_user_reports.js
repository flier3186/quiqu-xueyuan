// 针对用户 4 张截图的回归验证
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

  // ---- 1. 数学选项去重：强制生成 3a#1 变式 0 的选项，检查无重复 ----
  await p.evaluate(() => {
    localStorage.removeItem('quiqu_math_progress_v1');
    S.math = S.math || {}; S.math.wrongProblems = []; S.math.today = null;
    document.getElementById('contentArea').innerHTML = renderMath('3');
  });
  await p.waitForTimeout(300);
  await p.evaluate(() => { MathFlowV5._chooseStudyMode('beginner'); });
  await p.waitForTimeout(400);

  // 获取当前题并强制进入 L1/L2/L3/L4 练习，检查选项唯一性
  R.choiceUniqueness = await p.evaluate(() => {
    const prob = (MathFlowV5._sess || {}).problem || {};
    const results = [];
    // 测试每个 variant 作为 L1 输入时的选项
    (prob.variants || []).forEach((v, i) => {
      const { choices } = MathFlowV5._safeChoices(v, prob);
      const unique = new Set(choices.map(String)).size === choices.length;
      results.push({ idx: i, unique, choices });
    });
    // 同时测试 _safeMathChoices
    const prob2 = { answer: 13, choices: [18, 22, 24, 26] };
    const c2 = _safeMathChoices(prob2);
    const unique2 = new Set(c2.choices.map(String)).size === c2.choices.length;
    results.push({ idx: 'safeMathChoices-13', unique: unique2, choices: c2.choices });
    return results;
  });

  // ---- 2. L3 拼接检查：3a#1 变式 2 不应同时出现“钢笔/笔记本”和“面包”两个场景 ----
  await p.evaluate(() => {
    const area = document.getElementById('contentArea');
    area.innerHTML = renderMath('3');
    MathFlowV5._chooseStudyMode('beginner');
    MathFlowV5._sess.practiceIndex = 2; // 跳到 L3（practiceLevels[2]=3）
    MathFlowV5._sess.practiceLevel = 3;
    MathFlowV5.advance('practice');
    if (typeof updateMathStageV5 === 'function') updateMathStageV5();
  });
  await p.waitForTimeout(600);
  R.l3Concat = await p.evaluate(() => {
    const host = document.getElementById('mathStage');
    const text = host ? host.textContent : '';
    // 旧 bug：同时出现“钢笔/笔记本”和“面包/售货员”
    const hasStationery = /钢笔|笔记本/.test(text);
    const hasBread = /面包|售货员/.test(text);
    return { hasStationery, hasBread, both: hasStationery && hasBread, snippet: text.slice(0, 200) };
  });

  // ---- 3. 闪卡配图：文具词必须走 emoji，不请求 loremflickr ----
  await p.evaluate(() => { switchView('english'); });
  await p.waitForTimeout(500);
  R.flashcardImages = await p.evaluate(() => {
    const words = ['ruler', 'pencil', 'eraser', 'crayon', 'bag', 'pen', 'book'];
    return words.map(w => {
      const url = engPhotoUrl(w);
      const isEmoji = url.startsWith('data:image/svg+xml');
      return { word: w, isEmoji, url: url.slice(0, 60) };
    });
  });

  // ---- 4. 数学可视化答案泄漏：3a#1 进入 solve 后，移除选项后的文本不应含答案 22 ----
  await p.evaluate(() => { switchView('math'); });
  await p.waitForTimeout(300);
  await p.evaluate(() => {
    document.getElementById('contentArea').innerHTML = renderMath('3');
    MathFlowV5._chooseStudyMode('beginner');
    MathFlowV5.advance('solve');
    if (typeof updateMathStageV5 === 'function') updateMathStageV5();
  });
  await p.waitForTimeout(600);
  R.visualLeak = await p.evaluate(() => {
    const host = document.getElementById('mathStage');
    const clone = host.cloneNode(true);
    clone.querySelectorAll('.wp-choice').forEach(e => e.remove());
    const text = clone.textContent || '';
    // 答案 22 不应在题干/图形/提示中出现
    const leak22 = /\b22\b/.test(text);
    // 合计=22 不应出现
    const leakTotal = /合计\s*=\s*22/.test(text);
    return { leak22, leakTotal, snippet: text.slice(0, 300) };
  });

  // ---- 截图 ----
  await p.screenshot({ path: 'scripts/_audit_user_reports.png' });

  console.log(JSON.stringify(R, null, 2));
  console.log('=== JS 错误 ===');
  console.log([...new Set(errs)].slice(0, 8).join('\n') || '(无)');
  await b.close();
})();
