// 数学题库合理性扫描：单位/取值范围/选项质量/场景-算式一致性/除法取舍法/重复题
// 用法: node scan-question-quality.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');

const files = fs.readdirSync(DATA).filter(f => /^math-data-/.test(f) && f.endsWith('.js')).sort();
const issues = { rounding: [], range: [], choices: [], sceneMismatch: [], dup: [], negative: [], unit: [] };
const allQ = [];

for (const f of files) {
  const grade = f.replace('math-data-', '').replace('.js', '');
  let code = fs.readFileSync(path.join(DATA, f), 'utf8');
  // 提取 JSON 式数据：把文件当脚本跑，抓 window.* 或全局变量
  const sandbox = { window: {}, console };
  try { vm.runInNewContext(code, sandbox); } catch (e) { /* 数据文件多为赋值语句 */ }
  let banks = [];
  for (const k of Object.keys(sandbox.window)) {
    const v = sandbox.window[k];
    if (v && typeof v === 'object') banks.push(...(Array.isArray(v) ? v : [v]));
  }
  // 兜底：找全局 const/ var 数组
  if (!banks.length) {
    const m = code.match(/(?:const|var|let)\s+(\w+)\s*=\s*\[/);
    if (m) { try { banks = vm.runInNewContext(code + ';typeof ' + m[1] + '!=="undefined"?' + m[1] + ':[]', {}); } catch (e) {} }
  }
  const walk = (node, out) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(n => walk(n, out)); return; }
    if (node.formula && (node.answer !== undefined || node.answerText)) out.push(node);
    Object.values(node).forEach(v => walk(v, out));
  };
  const qs = [];
  walk(banks, qs);
  const seen = new Set();
  for (const q of qs) {
    const id = grade + '#' + (q.id || q.qid || '?');
    const formula = String(q.formula || '');
    const ans = Number(q.answer);
    const qall = JSON.stringify(q);
    // 1. 除法取舍法：需要箱子/车/船/瓶 (进一法) 但答案向下取整
    if (/÷/.test(formula) && /箱|车|船|瓶|桶|袋|锅/.test(qall)) {
      const nums = formula.match(/\d+/g);
      if (nums && nums.length >= 2) {
        let exact = parseInt(nums[0]);
        for (let i = 1; i < nums.length; i++) exact = exact / parseInt(nums[i]);
        if (Number.isFinite(exact) && !Number.isInteger(exact) && ans === Math.floor(exact)) {
          issues.rounding.push(`${grade} ${id} "${formula}"=${exact.toFixed(2)} 答案${ans} — 容器类问题应进一法=${Math.ceil(exact)}`);
        }
      }
    }
    // 2. 负数/不合理范围：钱、年龄、长度
    if (/元/.test(qall) && Number.isFinite(ans) && ans < 0) issues.negative.push(`${grade} ${id} 钱=${ans}`);
    if (/岁/.test(qall) && Number.isFinite(ans) && (ans > 120 || ans <= 0)) issues.unit.push(`${grade} ${id} 年龄=${ans}`);
    if (/时/.test(formula) && Number.isFinite(ans) && (ans > 24 || ans < 0)) issues.unit.push(`${grade} ${id} 时间=${ans}时`);
    // 3. 选项质量：重复/超远干扰项/不足4个
    if (Array.isArray(q.choices)) {
      const cs = q.choices.map(Number);
      if (new Set(cs).size !== cs.length) issues.choices.push(`${grade} ${id} 选项重复: ${cs}`);
      if (Number.isFinite(ans)) {
        const far = cs.filter(c => Math.abs(c - ans) > Math.max(50, ans));
        if (far.length >= 2 && ans > 0) issues.choices.push(`${grade} ${id} 干扰项过远: 答案${ans} 选项${cs}`);
      }
    }
    // 4. 场景数字 vs 算式数字：scene 里有具体数量但 formula 里一个都对不上
    if (q.scene && formula) {
      const sNums = (q.scene.match(/\d+/g) || []).map(Number).filter(n => n > 3);
      const fNums = (formula.match(/\d+/g) || []).map(Number);
      if (sNums.length >= 2 && fNums.length >= 2) {
        const overlap = sNums.filter(n => fNums.includes(n)).length;
        if (overlap === 0) issues.sceneMismatch.push(`${grade} ${id} 场景数字[${sNums}] 与算式[${fNums}]完全对不上`);
      }
    }
    // 5. 重复题（同 formula + 同 answer）
    const key = formula.replace(/\s/g, '') + '=' + ans;
    if (seen.has(key)) issues.dup.push(`${grade} ${id} 重复: ${formula}=${ans}`);
    seen.add(key);
    allQ.push({ grade, id, formula, ans });
  }
}
const report = [];
for (const [k, v] of Object.entries(issues)) {
  report.push(`\n===== ${k} (${v.length}) =====`);
  report.push(...v.slice(0, 25));
  if (v.length > 25) report.push(`  ...另有 ${v.length - 25} 条`);
}
report.push(`\n总题量: ${allQ.length}`);
fs.writeFileSync(path.join(__dirname, 'scan-report.txt'), report.join('\n'), 'utf8');
console.log(report.join('\n'));
