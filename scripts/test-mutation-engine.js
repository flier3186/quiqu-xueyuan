// 数字变异引擎压力测试：用真实题库跑 N 次变异，验证约束
const fs = require('fs');
const vm = require('vm');
const path = require('path');

// —— 加载引擎（浏览器环境垫片）——
const sandbox = {
  window: {}, console, document: undefined, navigator: { userAgent: 'test' },
  speechSynthesis: undefined, localStorage: { getItem: () => null, setItem: () => {} },
  S: { speakV5: {}, eng: {}, math: {} }, toast: () => {}, setStar: () => {},
  updateMathStageV5: () => {},
};
sandbox.window = sandbox;
sandbox.fetch = () => Promise.reject(new Error('no net'));
sandbox.WebSocket = function () { throw new Error('no ws'); };
vm.createContext(sandbox);

// 引擎按顺序加载
for (const f of ['engine/math-visual-v5.js', 'engine/math-flow-v5.js']) {
  try { vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), sandbox); }
  catch (e) { console.log('ENGINE LOAD FAIL', f, e.message.slice(0, 150)); }
}
const MF = sandbox.window.MathFlowV5;
if (!MF) { console.log('MathFlowV5 not found'); process.exit(1); }

// —— 收集全部题目 ——
const DATA = path.join(__dirname, '..', 'data');
let problems = [];
for (const f of fs.readdirSync(DATA).filter(x => /^math-data-/.test(x))) {
  const sb = { window: { MATH_BY_GRADE: {} }, console };
  try { vm.runInNewContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sb); } catch (e) { continue; }
  for (const bank of Object.values(sb.window.MATH_BY_GRADE)) {
    for (const p of (bank.problems || [])) problems.push(p);
  }
}
console.log('题库题目总数:', problems.length);

// —— 压测 ——
let tried = 0, mutated = 0, fails = [];
const check = (cond, id, msg) => { if (!cond) fails.push(id + ': ' + msg); };
const samples = [];
for (const p of problems) {
  for (const level of [1, 2, 3, 4]) {
    for (let round = 0; round < 2; round++) {
      tried++;
      sandbox.window.MathFlowV5._sess = { practiceLevels: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2], practiceIndex: 0 };
      const v = MF._freshProblem(p, level);
      const baseAns = v.answer;
      const isMutated = v !== p;
      if (isMutated) {
        mutated++;
        // 约束1：答案与算式一致
        const pureF = String(v.formula).replace(/\s/g, '').replace(/=\?$/, '');
        const evalAns = MF._evalArith(pureF);
        check(evalAns === v.answer, p.id, `L${level} 答案不符 formula=${v.formula} ans=${v.answer} eval=${evalAns}`);
        // 约束2：与原题不同（数字变了）
        check(String(v.formula) !== String(p.formula) || v.answer !== p.answer, p.id, `L${level} 未变异却标记变异`);
        // 约束3：位数不膨胀（同难度）——以实际基准（变体）为准
        const hasVariants = p.variants && p.variants.length;
        const isL2 = level === 2 && p.visualType && p.visualData;
        const baseF = isL2 ? p.formula : ((hasVariants ? (p.variants[(level === 1 || level === 4) ? 0 : 1] || p.variants[0]) : p).formula);
        const oNums = String(baseF).match(/\d+/g);
        const nNums = String(v.formula).match(/\d+/g);
        if (oNums && nNums) {
          const od = oNums.map(x => x.length).join(',');
          const nd = nNums.map(x => x.length).join(',');
          check(od === nd, p.id, `位数结构变化 ${od}→${nd} (L${level})`);
        }
        // 约束4：L2 图文一致
        if (level === 2 && v.visualData) {
          const nums = (String(v.formula).match(/\d+/g) || []).map(Number);
          if (v.visualType === 'barModel' || v.visualType === 'numberBond') {
            const parts = v.visualData.parts || (v.visualData.bars || []).map(b => ({ val: (b.val != null ? b.val : b.value) }));
            if (parts.length && /÷/.test(v.formula)) {
              const sum = parts.reduce((s, x) => s + (x.val || 0), 0);
              check(sum === v.visualData.total, p.id, `L2 除法图 parts和=${sum}≠total=${v.visualData.total}`);
              check(parts.every(x => x.val === v.answer), p.id, `L2 除法图 每份≠商 ${parts.map(x => x.val)}`);
            }
            if (parts.length) {
              const bare = String(v.formula).replace(/\([^)]*\)/g, '');   // 去括号内内容再判主运算符
              const isAddQ = /\+/.test(bare) && !/[-÷×*]/.test(bare.replace(/=/g, ''));
              const isSubQ = /-/.test(bare);
              if (isSubQ) {
                check(v.visualData.total === nums[0], p.id, `L2 减法图 total≠被减数`);
                const sum = parts.reduce((s, x) => s + (x.val || 0), 0);
                check(sum === v.visualData.total, p.id, `L2 减法图 parts和≠total`);
              } else if (isAddQ) {
                const sum = parts.reduce((s, x) => s + (x.val || 0), 0);
                check(sum === v.visualData.total && sum === v.answer, p.id, `L2 加法图 不一致`);
              }
            }
          }
          if (v.visualType === 'areaModel' && nums.length >= 2) {
            check(v.visualData.a === nums[0] && v.visualData.b === nums[1], p.id, `L2 areaModel a,b 不一致`);
            check(v.visualData.result === nums[0] * nums[1], p.id, `L2 areaModel result 不一致`);
          }
        }
        if (samples.length < 8) samples.push(`L${level} ${p.id}: ${p.formula}(ans=${p.answer}) → ${v.formula}(ans=${v.answer})`);
      }
    }
  }
}
console.log(`尝试 ${tried} 次，成功变异 ${mutated} 次（${(mutated / tried * 100).toFixed(1)}%），其余安全回退原题`);
console.log(`约束违反: ${fails.length}`);
fails.slice(0, 20).forEach(x => console.log('  VIOLATION', x));
console.log('--- 样例 ---');
samples.forEach(x => console.log('  ' + x));
