// 扫描 visualData 与题面数字的语义一致性（错图检测）
// barModel/numberBond: total==sum(parts)；除法题 parts数==除数且各份==商
// areaModel: parts/a/b/result 自洽；fractionStrip num<=total；numberLine 点在范围内
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(DATA).filter(f => /^math-data-/.test(f));

function loadVisProblems(file) {
  const src = fs.readFileSync(path.join(DATA, file), 'utf8');
  const sandbox = { window: {}, console };
  try { vm.runInNewContext(src, sandbox); } catch (e) { return []; }
  const mbg = sandbox.window.MATH_BY_GRADE || {};
  const out = [];
  for (const bank of Object.values(mbg)) {
    for (const p of (bank.problems || [])) {
      if (p.visualType && p.visualData) out.push(p);
    }
  }
  return out;
}

function normParts(vd) {
  if (Array.isArray(vd.parts) && vd.parts.length) return vd.parts;
  if (Array.isArray(vd.bars) && vd.bars.length) return vd.bars.map(b => ({ val: (b.val != null ? b.val : b.value), label: b.label }));
  return [];
}

let issues = [], total = 0;
for (const f of files) {
  for (const p of loadVisProblems(f)) {
    total++;
    const id = p.id || '?';
    const vd = p.visualData, vt = p.visualType;
    const nums = (String(p.formula).match(/\d+/g) || []).map(Number);
    const check = (cond, msg) => { if (!cond) issues.push(`${f} ${id} [${vt}] ${msg} | formula=${p.formula}`); };
    if (vt === 'barModel' || vt === 'numberBond') {
      const parts = normParts(vd);
      const sum = parts.reduce((s, x) => s + (x.val || x.value || 0), 0);
      const m = String(p.formula).replace(/\s/g, '').match(/[+×*\-÷/]/);
      const opCh = m ? m[0] : '=';
      if (opCh === '+') {
        if (parts.length) check(vd.total === sum, `total=${vd.total} ≠ parts和=${sum}`);
      } else if (opCh === '÷') {
        if (parts.length) {
          check(sum === vd.total, `parts和=${sum} ≠ total=${vd.total}`);
          check(parts.every(x => (x.val || x.value) === (parts[0].val || parts[0].value)), `除法题各份不等: ${parts.map(x => x.val || x.value)}`);
        }
        if (nums.length >= 2 && Number.isInteger(vd.total / nums[1])) {
          if (parts.length) check(parts.length === nums[1], `份数=${parts.length} ≠ 除数=${nums[1]}`);
          const q = vd.total / nums[1];
          const v0 = parts[0] ? (parts[0].val || parts[0].value) : q;
          check(v0 === q, `每份=${v0} ≠ 商=${q}`);
        }
      } else if (opCh === '×' || opCh === '*') {
        if (parts.length && nums.length >= 2 && parts.length === nums[1] && parts.every(x => (x.val || x.value) === (parts[0].val || parts[0].value))) {
          check((parts[0].val || parts[0].value) === nums[0], `每份=${parts[0].val || parts[0].value} ≠ 被乘数=${nums[0]}`);
          check(vd.total === nums[0] * nums[1], `total=${vd.total} ≠ 积=${nums[0] * nums[1]}`);
        } else if (parts.length) {
          check(vd.total === sum, `total=${vd.total} ≠ parts和=${sum}`);
        }
      } else if (opCh === '-') {
        if (nums.length >= 2) check(vd.total === nums[0], `total=${vd.total} ≠ 被减数=${nums[0]}`);
        if (parts.length) check(sum === vd.total, `parts和=${sum} ≠ total=${vd.total}（减法应为 结果+减数）`);
      }
    } else if (vt === 'areaModel') {
      const { a, b, parts, result } = vd;
      if (a != null && b != null) {
        const aT = Math.floor(a / 10) * 10, aO = a % 10, bT = Math.floor(b / 10) * 10, bO = b % 10;
        const exp = [aT * bT, aT * bO, aO * bT, aO * bO];
        if (Array.isArray(parts) && parts.length === 4) {
          check(parts.join() === exp.join(), `parts=${parts} ≠ 拆分应为${exp} (a=${a},b=${b})`);
        }
        check(result === a * b, `result=${result} ≠ a*b=${a * b}`);
        if (nums.length >= 2) check(a === nums[0] && b === nums[1], `a,b=${a},${b} ≠ 算式数=${nums[0]},${nums[1]}`);
      }
    } else if (vt === 'fractionStrip') {
      check(vd.num >= 1 && vd.num <= vd.total, `num=${vd.num} 超出 1..total=${vd.total}`);
      if (nums.length >= 2) check(vd.num === nums[0] && vd.total === nums[1], `num/total=${vd.num}/${vd.total} ≠ 算式=${nums[0]}/${nums[1]}`);
    } else if (vt === 'numberLine') {
      const st = vd.start != null ? vd.start : vd.min, en = vd.end != null ? vd.end : vd.max;
      (vd.points || []).forEach(pt => check(pt.pos >= st && pt.pos <= en, `点 ${pt.pos} 超出数轴 [${st},${en}]`));
    } else if (vt === 'geometry') {
      Object.values(vd.params || {}).forEach(v => check(v > 0, `几何参数 ${v} 非正数`));
    }
  }
}
console.log(`visual 题总数: ${total}`);
console.log(`发现问题: ${issues.length}`);
issues.slice(0, 60).forEach(x => console.log('  ' + x));
