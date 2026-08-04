// test-full-page.js · 奇趣学园全板块自动化测试
const { chromium } = require('playwright');

async function runTests() {
  console.log('=== 奇趣学园全板块自动化测试 ===\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  const results = [];
  
  // 测试 1: 页面加载
  console.log('[TEST 1] 页面加载测试...');
  try {
    const startTime = Date.now();
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 60000 });
    const loadTime = Date.now() - startTime;
    
    const title = await page.title();
    const htmlLength = await page.evaluate(() => document.documentElement.outerHTML.length);
    
    console.log(`  ✅ 页面加载成功: ${loadTime}ms`);
    console.log(`  ✅ 页面标题: ${title}`);
    console.log(`  ✅ HTML 大小: ${(htmlLength / 1024).toFixed(1)} KB`);
    
    results.push({ test: '页面加载', status: 'PASS', detail: `${loadTime}ms, ${title}` });
  } catch (e) {
    console.log(`  ❌ 页面加载失败: ${e.message}`);
    results.push({ test: '页面加载', status: 'FAIL', detail: e.message });
    await browser.close();
    return results;
  }
  
  // 测试 2: 检查关键元素
  console.log('\n[TEST 2] 关键元素检查...');
  try {
    const checks = [
      { selector: '#app', name: '应用容器' },
      { selector: '.nav', name: '导航栏' },
      { selector: '[data-section="math"]', name: '数学板块入口' },
      { selector: '[data-section="english"]', name: '英语板块入口' },
      { selector: '[data-section="speak"]', name: '口语板块入口' },
      { selector: '[data-section="parent"]', name: '家长面板入口' }
    ];
    
    for (const check of checks) {
      const exists = await page.locator(check.selector).count() > 0;
      if (exists) {
        console.log(`  ✅ ${check.name} 存在`);
        results.push({ test: `元素: ${check.name}`, status: 'PASS', detail: '已找到' });
      } else {
        console.log(`  ⚠️  ${check.name} 未找到`);
        results.push({ test: `元素: ${check.name}`, status: 'WARN', detail: '未找到' });
      }
    }
  } catch (e) {
    console.log(`  ❌ 元素检查失败: ${e.message}`);
    results.push({ test: '元素检查', status: 'FAIL', detail: e.message });
  }
  
  // 测试 3: 数学板块
  console.log('\n[TEST 3] 数学板块测试...');
  try {
    await page.locator('[data-section="math"]').click();
    await page.waitForTimeout(1000);
    
    const mathSection = await page.locator('#math-section').count();
    if (mathSection > 0) {
      console.log('  ✅ 数学板块显示正常');
      results.push({ test: '数学板块显示', status: 'PASS', detail: '正常' });
      
      // 检查年级选择器
      const gradeSelector = await page.locator('.grade-selector').count();
      if (gradeSelector > 0) {
        console.log('  ✅ 年级选择器存在');
        results.push({ test: '年级选择器', status: 'PASS', detail: '正常' });
      }
      
      // 获取第一道题
      const firstProblem = await page.locator('.problem-item').first();
      if (await firstProblem.count() > 0) {
        const problemText = await firstProblem.textContent();
        console.log(`  ℹ️  第一道题: ${problemText.substring(0, 50)}...`);
        
        await firstProblem.click();
        await page.waitForTimeout(1000);
        
        // 检查题目详情
        const questionEl = await page.locator('.question-text').first();
        if (await questionEl.count() > 0) {
          const question = await questionEl.textContent();
          console.log(`  ✅ 题目显示: ${question.substring(0, 50)}...`);
          results.push({ test: '题目详情', status: 'PASS', detail: question.substring(0, 50) });
        }
        
        // 检查可视化
        const visualContainer = await page.locator('.visual-container').count();
        if (visualContainer > 0) {
          console.log('  ✅ 可视化容器存在');
          results.push({ test: '可视化容器', status: 'PASS', detail: '正常' });
        } else {
          console.log('  ⚠️  可视化容器未找到');
          results.push({ test: '可视化容器', status: 'WARN', detail: '未找到' });
        }
      }
    } else {
      console.log('  ⚠️  数学板块未显示');
      results.push({ test: '数学板块显示', status: 'WARN', detail: '未找到' });
    }
  } catch (e) {
    console.log(`  ❌ 数学板块测试失败: ${e.message}`);
    results.push({ test: '数学板块测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 4: 英语板块
  console.log('\n[TEST 4] 英语板块测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    await page.locator('[data-section="english"]').click();
    await page.waitForTimeout(1000);
    
    const englishSection = await page.locator('#english-section').count();
    if (englishSection > 0) {
      console.log('  ✅ 英语板块显示正常');
      results.push({ test: '英语板块显示', status: 'PASS', detail: '正常' });
      
      const wordCards = await page.locator('.word-card').count();
      if (wordCards > 0) {
        console.log(`  ✅ 单词卡存在 (${wordCards}张)`);
        results.push({ test: '单词卡', status: 'PASS', detail: `${wordCards}张` });
      }
      
      const speakBtn = await page.locator('.speak-btn').count();
      if (speakBtn > 0) {
        console.log('  ✅ 发音按钮存在');
        results.push({ test: '发音按钮', status: 'PASS', detail: '正常' });
      }
    } else {
      console.log('  ⚠️  英语板块未显示');
      results.push({ test: '英语板块显示', status: 'WARN', detail: '未找到' });
    }
  } catch (e) {
    console.log(`  ❌ 英语板块测试失败: ${e.message}`);
    results.push({ test: '英语板块测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 5: 口语板块
  console.log('\n[TEST 5] 口语板块测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    await page.locator('[data-section="speak"]').click();
    await page.waitForTimeout(1000);
    
    const speakSection = await page.locator('#speak-section').count();
    if (speakSection > 0) {
      console.log('  ✅ 口语板块显示正常');
      results.push({ test: '口语板块显示', status: 'PASS', detail: '正常' });
      
      const scenarioList = await page.locator('.scenario-list').count();
      if (scenarioList > 0) {
        console.log('  ✅ 场景列表存在');
        results.push({ test: '场景列表', status: 'PASS', detail: '正常' });
      }
    } else {
      console.log('  ⚠️  口语板块未显示');
      results.push({ test: '口语板块显示', status: 'WARN', detail: '未找到' });
    }
  } catch (e) {
    console.log(`  ❌ 口语板块测试失败: ${e.message}`);
    results.push({ test: '口语板块测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 6: 家长面板
  console.log('\n[TEST 6] 家长面板测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    await page.locator('[data-section="parent"]').click();
    await page.waitForTimeout(1000);
    
    const parentSection = await page.locator('#parent-section').count();
    if (parentSection > 0) {
      console.log('  ✅ 家长面板显示正常');
      results.push({ test: '家长面板显示', status: 'PASS', detail: '正常' });
      
      const apiKeyInput = await page.locator('#deepseek-api-key').count();
      if (apiKeyInput > 0) {
        console.log('  ✅ API Key 输入框存在');
        results.push({ test: 'API Key 输入框', status: 'PASS', detail: '正常' });
      }
      
      const testBtn = await page.locator('#test-deepseek-btn').count();
      if (testBtn > 0) {
        console.log('  ✅ 测试按钮存在');
        results.push({ test: '测试按钮', status: 'PASS', detail: '正常' });
      }
    } else {
      console.log('  ⚠️  家长面板未显示');
      results.push({ test: '家长面板显示', status: 'WARN', detail: '未找到' });
    }
  } catch (e) {
    console.log(`  ❌ 家长面板测试失败: ${e.message}`);
    results.push({ test: '家长面板测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 7: 答案正确性抽查
  console.log('\n[TEST 7] 数学题目答案正确性抽查...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    const samples = await page.evaluate(() => {
      const problems = window.MATH_BY_GRADE;
      if (!problems) return [];
      
      const samples = [];
      let count = 0;
      for (const grade of Object.keys(problems)) {
        const gradeProblems = problems[grade].problems || [];
        for (const p of gradeProblems) {
          if (p.formula && p.answer && count < 10) {
            let correct = false;
            const formula = p.formula.replace(/[\s?]/g, '');
            
            if (formula.includes('×') || formula.includes('*')) {
              const match = formula.match(/([\d.]+)×([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) * parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('÷') || formula.includes('/')) {
              const match = formula.match(/([\d.]+)÷([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) / parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('+')) {
              const match = formula.match(/([\d.]+)\+([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) + parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('-')) {
              const match = formula.match(/([\d.]+)-([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) - parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            }
            
            samples.push({
              grade: grade,
              formula: p.formula,
              answer: p.answer,
              correct: correct,
              choices: p.choices
            });
            count++;
          }
        }
      }
      return samples;
    });
    
    console.log(`  ✅ 抽查 ${samples.length} 道题`);
    let correct = 0;
    for (const sample of samples) {
      if (sample.correct) {
        console.log(`  ✅ ${sample.grade}: ${sample.formula} = ${sample.answer}`);
        correct++;
      } else {
        console.log(`  ❌ ${sample.grade}: ${sample.formula} = ${sample.answer} (答案错误)`);
      }
    }
    
    results.push({ test: '答案正确性', status: correct === samples.length ? 'PASS' : 'FAIL', detail: `${correct}/${samples.length}` });
  } catch (e) {
    console.log(`  ❌ 答案正确性测试失败: ${e.message}`);
    results.push({ test: '答案正确性', status: 'FAIL', detail: e.message });
  }
  
  // 测试 8: 检查 console 错误
  console.log('\n[TEST 8] Console 错误检查...');
  try {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    if (consoleErrors.length > 0) {
      console.log(`  ⚠️  发现 ${consoleErrors.length} 个 console 错误:`);
      for (const err of consoleErrors.slice(0, 5)) {
        console.log(`    - ${err.substring(0, 100)}`);
      }
      results.push({ test: 'Console 错误', status: 'WARN', detail: `${consoleErrors.length} 个错误` });
    } else {
      console.log('  ✅ 无 console 错误');
      results.push({ test: 'Console 错误', status: 'PASS', detail: '无错误' });
    }
  } catch (e) {
    console.log(`  ❌ Console 错误检查失败: ${e.message}`);
    results.push({ test: 'Console 错误', status: 'FAIL', detail: e.message });
  }
  
  // 汇总
  console.log('\n=== 测试汇总 ===');
  const pass = results.filter(r => r.status === 'PASS').length;
  const fail = results.filter(r => r.status === 'FAIL').length;
  const warn = results.filter(r => r.status === 'WARN').length;
  
  console.log(`  ✅ 通过: ${pass}`);
  console.log(`  ❌ 失败: ${fail}`);
  console.log(`  ⚠️  警告: ${warn}`);
  
  if (fail > 0) {
    console.log('\n失败项:');
    results.filter(r => r.status === 'FAIL').forEach(r => {
      console.log(`  - ${r.test}: ${r.detail}`);
    });
  }
  
  await browser.close();
  
  console.log('\n=== JSON 结果 ===');
  console.log(JSON.stringify(results, null, 2));
  
  return results;
}

runTests().catch(e => {
  console.error('测试执行失败:', e);
  process.exit(1);
});
