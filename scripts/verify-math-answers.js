// 检查所有数学题库：answer 是否在 choices 中，variants 的 answer 是否在 variants.choices（或原题choices）中
const fs = require('fs');
const path = require('path');

const files = [
  'data/math-data.js',
  'data/math-3-6-extend.js',
  'data/math-2a-2b.js'
];

let totalProblems = 0;
let totalVariants = 0;
let problemErrors = [];
let variantErrors = [];

files.forEach(file => {
  const absPath = path.join(__dirname, '..', file);
  if(!fs.existsSync(absPath)) { console.log('跳过不存在：', file); return; }
  let code = fs.readFileSync(absPath, 'utf8');
  
  // 用 Function 执行，拿到所有题目对象
  const sandbox = { window: {}, console };
  try {
    const fn = new Function('window', 'console', code);
    fn(sandbox.window, sandbox.console);
  } catch(e) {
    console.log('执行失败：', file, e.message);
    return;
  }
  
  // 收集所有题目数组
  const banks = [];
  Object.keys(sandbox.window).forEach(k => {
    const v = sandbox.window[k];
    if(Array.isArray(v)){
      // 可能是直接题目数组
      if(v.length && v[0] && ('question' in v[0] || 'scene' in v[0])) banks.push({name: k, arr: v});
    } else if(v && typeof v === 'object'){
      Object.keys(v).forEach(kk => {
        if(Array.isArray(v[kk]) && v[kk].length && v[kk][0] && ('question' in v[kk][0] || 'scene' in v[kk][0])){
          banks.push({name: k+'.'+kk, arr: v[kk]});
        }
      });
    }
  });
  
  console.log('\n=== 文件：', file, '，找到题库：', banks.map(b=>b.name).join(','));
  
  banks.forEach(bank => {
    bank.arr.forEach((p, i) => {
      totalProblems++;
      // 1. 检查原题 answer 在不在 choices 里
      if(p.choices && p.choices.length){
        if(!p.choices.includes(p.answer)){
          problemErrors.push({
            file, bank: bank.name, idx: i,
            q: p.question, formula: p.formula,
            answer: p.answer, choices: JSON.stringify(p.choices),
            calc: computeFromFormula(p.formula)
          });
        }
      }
      // 2. 检查 variants
      if(p.variants && p.variants.length){
        p.variants.forEach((v, vi) => {
          totalVariants++;
          const useChoices = (v.choices && v.choices.length) ? v.choices : p.choices;
          if(v.answer != null && useChoices && useChoices.length){
            if(!useChoices.includes(v.answer)){
              variantErrors.push({
                file, bank: bank.name, idx: i+'.'+vi,
                q: v.question, formula: v.formula,
                answer: v.answer, choices: JSON.stringify(useChoices),
                hasOwn: !!(v.choices && v.choices.length),
                calc: computeFromFormula(v.formula)
              });
            }
          }
        });
      }
    });
  });
});

// 尝试从公式计算期望值（仅支持简单加减乘除、÷）
function computeFromFormula(formula){
  if(!formula) return 'N/A';
  try {
    let f = formula.replace(/÷/g,'/').replace(/×/g,'*').replace(/= ?\?$/,'').trim();
    // 只允许数字和运算符和空格
    if(!/^[\d+\-*/().\s]+$/.test(f)) return 'skip';
    const val = Function('"use strict";return (' + f + ')')();
    if(typeof val === 'number' && !isNaN(val) && isFinite(val)){
      return Number.isInteger(val) ? val : val.toFixed(2);
    }
    return 'NaN';
  } catch(e){ return 'err'; }
}

console.log('\n========== 统计 ==========');
console.log('题目总数：', totalProblems);
console.log('变式总数：', totalVariants);
console.log('原题答案错误：', problemErrors.length);
console.log('变式答案错误：', variantErrors.length);

if(problemErrors.length){
  console.log('\n===== 原题答案不在choices中 =====');
  problemErrors.forEach(e => {
    console.log(`[${e.file}] ${e.bank} #${e.idx}`);
    console.log('  题目：', e.q);
    console.log('  算式：', e.formula);
    console.log('  期望答案：', e.answer, ' | 算式计算值：', e.calc);
    console.log('  选项：', e.choices);
  });
}

if(variantErrors.length){
  console.log('\n===== 变式题答案不在choices中 =====');
  variantErrors.forEach(e => {
    console.log(`[${e.file}] ${e.bank} #${e.idx}${e.hasOwn?'(自带选项)':'(用原题选项)'}`);
    console.log('  题目：', e.q);
    console.log('  算式：', e.formula);
    console.log('  期望答案：', e.answer, ' | 算式计算值：', e.calc);
    console.log('  可见选项：', e.choices);
    console.log('  ❌ 正确答案不在选项中！');
  });
}

if(!problemErrors.length && !variantErrors.length){
  console.log('\n✅ 所有题目答案与选项匹配正常！');
} else {
  console.log('\n❌ 发现错误！总计：', problemErrors.length + variantErrors.length, '处');
  process.exit(1);
}
