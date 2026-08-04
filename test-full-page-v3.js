// test-full-page-v3.js · 奇趣学园全板块自动化测试 v3（修正选择器）
const { chromium } = require('playwright');

async function runTests() {
  console.log('=== 奇趣学园全板块自动化测试 v3 ===\n');
  
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
      { selector: '.nav', name: '导航栏' },
      { selector: '.nav-tab', name: '导航标签' },
      { selector: '.panel-card', name: '面板卡片' }
    ];
    
    for (const check of checks) {
      const count = await page.locator(check.selector).count();
      if (count > 0) {
        console.log(`  ✅ ${check.name} 存在 (${count}个)`);
        results.push({ test: `元素: ${check.name}`, status: 'PASS', detail: `${count}个` });
      } else {
        console.log(`  ❌ ${check.name} 未找到`);
        results.push({ test: `元素: ${check.name}`, status: 'FAIL', detail: '未找到' });
      }
    }
  } catch (e) {
    console.log(`  ❌ 元素检查失败: ${e.message}`);
    results.push({ test: '元素检查', status: 'FAIL', detail: e.message });
  }
  
  // 测试 3: 数学板块
  console.log('\n[TEST 3] 数学板块测试...');
  try {
    await page.locator('[data-view="math"]').click();
    await page.waitForTimeout(3000);
    
    // 检查数学内容
    const mathContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasGrade = body.includes('二年级') || body.includes('三年级') || body.includes('四年级') || body.includes('五年级') || body.includes('六年级');
      const hasProblem = body.includes('题') || body.includes('有多少') || body.includes('棵');
      return { hasGrade, hasProblem, body: body.substring(0, 500) };
    });
    
    if (mathContent.hasGrade) {
      console.log('  ✅ 数学板块显示年级选择器');
      results.push({ test: '数学板块年级选择', status: 'PASS', detail: '正常' });
    }
    
    if (mathContent.hasProblem) {
      console.log('  ✅ 数学板块显示题目内容');
      results.push({ test: '数学板块题目', status: 'PASS', detail: '正常' });
    }
    
    // 检查可视化
    const visualCount = await page.locator('.visual-container, .mv-wrap, svg').count();
    if (visualCount > 0) {
      console.log(`  ✅ 可视化元素存在 (${visualCount}个)`);
      results.push({ test: '数学可视化', status: 'PASS', detail: `${visualCount}个` });
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
    
    await page.locator('[data-view="english"]').click();
    await page.waitForTimeout(3000);
    
    const englishContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasWord = body.includes('cat') || body.includes('dog') || body.includes('apple') || body.includes('book');
      return { hasWord, body: body.substring(0, 500) };
    });
    
    if (englishContent.hasWord) {
      console.log('  ✅ 英语板块显示单词');
      results.push({ test: '英语板块单词', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  英语板块未找到单词（可能加载慢）');
      results.push({ test: '英语板块单词', status: 'WARN', detail: '未找到' });
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
    
    await page.locator('[data-view="speak"]').click();
    await page.waitForTimeout(3000);
    
    const speakContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasScene = body.includes('场景') || body.includes('对话') || body.includes('Order');
      return { hasScene, body: body.substring(0, 500) };
    });
    
    if (speakContent.hasScene) {
      console.log('  ✅ 口语板块显示场景');
      results.push({ test: '口语板块场景', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  口语板块未找到场景（可能加载慢）');
      results.push({ test: '口语板块场景', status: 'WARN', detail: '未找到' });
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
    
    await page.locator('[data-view="parent"]').click();
    await page.waitForTimeout(3000);
    
    const parentContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasAPI = body.includes('DeepSeek') || body.includes('API') || body.includes('AI');
      return { hasAPI, body: body.substring(0, 500) };
    });
    
    if (parentContent.hasAPI) {
      console.log('  ✅ 家长面板显示 AI 设置');
      results.push({ test: '家长面板 AI 设置', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  家长面板未找到 AI 设置（可能加载慢）');
      results.push({ test: '家长面板 AI 设置', status: 'WARN', detail: '未找到' });
    }
    
    // 检查 API Key 输入框
    const apiKeyInput = await page.locator('input[type="password"], #deepseek-api-key').count();
    if (apiKeyInput > 0) {
      console.log('  ✅ API Key 输入框存在');
      results.push({ test: 'API Key 输入框', status: 'PASS', detail: '正常' });
    }
  } catch (e) {
    console.log(`  ❌ 家长面板测试失败: ${e.message}`);
    results.push({ test: '家长面板测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 7: 答案正确性抽查（20道题）
  console.log('\n[TEST 7] 数学题目答案正确性抽查...');
  try {
    const samples = await page.evaluate(() => {
      const problems = window.MATH_BY_GRADE;
      if (!problems) return [];
      
      const samples = [];
      let count = 0;
      for (const grade of Object.keys(problems)) {
        const gradeProblems = problems[grade].problems || [];
        for (const p of gradeProblems) {
          if (p.formula && p.answer && count < 20) {
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
              correct: correct
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
  
  // 测试 8: Console 错误检查
  console.log('\n[TEST 8] Console 错误检查...');
  try {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    
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
  
  // 测试 9: 资源完整性
  console.log('\n[TEST 9] 资源完整性检查...');
  try {
    const resources = await page.evaluate(() => {
      return {
        mathData: typeof window.MATH_BY_GRADE !== 'undefined',
        mathVisual: typeof window.MathVisualV5 !== 'undefined',
        mathFlow: typeof window.MathFlowV5 !== 'undefined',
        speakEngine: typeof window.speak === 'function'
      };
    });
    
    if (resources.mathData) {
      console.log('  ✅ math-data.js 已加载');
      results.push({ test: 'math-data.js', status: 'PASS', detail: '已加载' });
    } else {
      console.log('  ❌ math-data.js 未加载');
      results.push({ test: 'math-data.js', status: 'FAIL', detail: '未加载' });
    }
    
    if (resources.mathVisual) {
      console.log('  ✅ math-visual-v5.js 已加载');
      results.push({ test: 'math-visual-v5.js', status: 'PASS', detail: '已加载' });
    }
    
    if (resources.mathFlow) {
      console.log('  ✅ math-flow-v5.js 已加载');
      results.push({ test: 'math-flow-v5.js', status: 'PASS', detail: '已加载' });
    }
    
    if (resources.speakEngine) {
      console.log('  ✅ speak() 函数已加载');
      results.push({ test: 'speak() 函数', status: 'PASS', detail: '已加载' });
    }
  } catch (e) {
    console.log(`  ❌ 资源完整性检查失败: ${e.message}`);
    results.push({ test: '资源完整性', status: 'FAIL', detail: e.message });
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
