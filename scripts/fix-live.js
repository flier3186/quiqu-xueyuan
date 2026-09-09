#!/usr/bin/env node
// fix-live.js —— 仅修复真实数据源（按年级文件）中经审计确认的真问题，不做任何误报类改动。
// 修复类别：
//   1) 探索步骤 answer === "计算" → 由公式/解释推断运算（乘/加/减/除）
//   2) 主题目 choices 重复 → 去重（保留首个，重复值替换为邻近唯一值）
//   3) 变式 choices 重复（变式自带 choices 时）→ 去重
//   4) 完全重复题目（scene+question+answer+choices+formula 全同）→ 删除后者
// 不改动：公式与答案不符（多为带余除法/时分/单位换算误报）、公式/题面/场景泄漏（多为数字巧合+运行时已门控）。
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const GRADES = ['2b','3a','3b','4a','4b','5a','5b','6a','6b','7a','7b','8a','8b','9a','9b'];

// ---- 加载 ----
const win = {};
for (const g of GRADES) {
  const f = path.join(DATA, `math-data-${g}.js`);
  if (!fs.existsSync(f)) continue;
  const fn = new Function('window', fs.readFileSync(f,'utf8') + '\n;return window.MATH_BY_GRADE;');
  fn(win);
}
const M = win.MATH_BY_GRADE || {};

const changes = [];
const replacer = (k,v) => (v === undefined ? null : (typeof v === 'number' && !Number.isFinite(v)) ? null : v);

function inferOp(step, parent){
  // 优先：公式里的算术符号（step/formula 优先，其次 parent.formula）
  const fm = [step.formula, parent.formula].filter(Boolean).map(String).join(' ');
  if (/×|\*/.test(fm)) return '乘法';
  if (/÷|\//.test(fm)) return '除法';
  if (/\+/.test(fm)) return '加法';
  if (/-/.test(fm)) return '减法';
  // 其次：hint / explain / question 里的中文运算词 + 符号（覆盖“10×10”“下午加12”等）
  const t = [parent.hint, step.explain, step.q, parent.question, parent.scene].filter(Boolean).map(String).join(' ');
  if (/乘|×|\*/.test(t)) return '乘法';
  if (/除|÷|\//.test(t)) return '除法';
  if (/加|\+/.test(t)) return '加法';
  if (/减|-/.test(t)) return '减法';
  return null;
}

function dedupe(choices, answer){
  if (!choices.some(c => typeof c !== 'number')) {
    // 含非数字选项：直接去重（删重复，避免乱造值）
    const seen = new Set(); const out = [];
    for (const c of choices){ if(!seen.has(String(c))){ out.push(c); seen.add(String(c)); } }
    // 若删后不足 2 个，无法安全处理，返回原样
    return out.length >= 2 ? out : choices.slice();
  }
  const out = []; const used = new Set(); let fallback = false;
  for (const c of choices){
    const key = String(c);
    if (!used.has(key)) { out.push(c); used.add(key); }
    else {
      let d = c, off = 1, dir = 1, guard = 0;
      while (used.has(String(d)) && guard < 500) {
        d = c + dir * off;
        if (dir === 1) { dir = -1; } else { dir = 1; off++; }
        guard++;
      }
      if (guard >= 500) { fallback = true; out.push(c); used.add(key); }
      else { out.push(d); used.add(String(d)); }
    }
  }
  return out;
}

let totalFixed = 0;
for (const g of GRADES) {
  const grade = M[g];
  if (!grade || !Array.isArray(grade.problems)) continue;
  const before = grade.problems.length;
  const kept = [];
  const seenKeys = {};

  grade.problems.forEach((p, i) => {
    const id = p.id || `${g}#${i}`;
    const ans = p.answer;

    // ---- 4) 完全重复题删除 ----
    const dkey = JSON.stringify({s:p.scene,q:p.question,a:ans,c:p.choices,f:p.formula});
    if (seenKeys[dkey]) {
      changes.push({ grade:g, id, type:'删除完全重复题', detail:{ dupWith: seenKeys[dkey] } });
      totalFixed++;
      return; // 丢弃
    }
    seenKeys[dkey] = id;

    // ---- 2) 主题目选项去重 ----
    if (Array.isArray(p.choices) && p.choices.length && new Set(p.choices.map(String)).size !== p.choices.length) {
      const fixed = dedupe(p.choices, ans);
      if (fixed !== p.choices && JSON.stringify(fixed) !== JSON.stringify(p.choices)) {
        changes.push({ grade:g, id, type:'选项去重', detail:{ before:p.choices, after:fixed } });
        p.choices = fixed; totalFixed++;
      }
    }

    // ---- 1) 探索步骤 "计算" 修复 ----
    if (Array.isArray(p.discoverySteps)) {
      p.discoverySteps.forEach((ds, di) => {
        const dchoices = Array.isArray(ds.choices) ? ds.choices : [];
        const op = inferOp(ds, p);
        const answerable = dchoices.length && dchoices.some(c => String(c) === String(ds.answer));
        if (ds.answer === '计算' || !answerable) {
          if (op && dchoices.includes(op)) {
            changes.push({ grade:g, id:`${id}.disc${di}`, type:'探索步骤答案修正', detail:{ before:ds.answer, after:op } });
            ds.answer = op; totalFixed++;
          } else if (ds.answer === '计算') {
            // 纯记忆/换算类：把“计算”纳入选项，保证步骤可作答（即原作者 answer:"计算" 的本意）
            if (!dchoices.includes('计算')) {
              const fixed = dchoices.slice();
              fixed[fixed.length - 1] = '计算';
              changes.push({ grade:g, id:`${id}.disc${di}`, type:'探索步骤答案置为计算并补选项', detail:{ before:ds.answer, choicesBefore:dchoices, choicesAfter:fixed } });
              ds.choices = fixed;
            }
            ds.answer = '计算'; totalFixed++;
          } else {
            changes.push({ grade:g, id:`${id}.disc${di}`, type:'探索步骤待人工', detail:{ answer:ds.answer, inferred:op, choices:dchoices } });
          }
        }
      });
    }

    // ---- 3) 变式选项去重（仅变式自带 choices） ----
    if (Array.isArray(p.variants)) {
      p.variants.forEach((v, vi) => {
        if (Array.isArray(v.choices) && v.choices.length && new Set(v.choices.map(String)).size !== v.choices.length) {
          const vans = v.answer != null ? v.answer : ans;
          const fixed = dedupe(v.choices, vans);
          if (JSON.stringify(fixed) !== JSON.stringify(v.choices)) {
            changes.push({ grade:g, id:`${id}.v${vi}`, type:'变式选项去重', detail:{ before:v.choices, after:fixed } });
            v.choices = fixed; totalFixed++;
          }
        }
      });
    }

    kept.push(p);
  });

  grade.problems = kept;
  const after = grade.problems.length;
  if (after !== before) changes.push({ grade:g, type:'题目数变化', detail:{ before, after } });
}

// ---- 写回（临时文件 -> 校验 -> 覆盖） ----
let writeOk = 0;
for (const g of GRADES) {
  const grade = M[g];
  if (!grade || !Array.isArray(grade.problems)) continue;
  const f = path.join(DATA, `math-data-${g}.js`);
  const tmp = f + '.fix.tmp';
  const content = `window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};\nwindow.MATH_BY_GRADE["${g}"] = ` +
    JSON.stringify(grade, replacer, 4) + ';\n';
  fs.writeFileSync(tmp, content, 'utf8');
  // 校验：重新加载临时文件
  try {
    const w2 = {};
    new Function('window', fs.readFileSync(tmp,'utf8') + '\n;return window.MATH_BY_GRADE;')(w2);
    const reloaded = w2.MATH_BY_GRADE[g];
    if (!reloaded || !Array.isArray(reloaded.problems) || reloaded.problems.length !== grade.problems.length) {
      throw new Error(`校验失败: 题数 ${reloaded && reloaded.problems ? reloaded.problems.length : 'NA'} != ${grade.problems.length}`);
    }
    fs.renameSync(tmp, f);
    writeOk++;
  } catch (e) {
    fs.unlinkSync(tmp);
    console.error(`[ERROR] ${g} 写回失败: ${e.message}（已回滚）`);
  }
}

fs.writeFileSync(path.join(__dirname, 'fix-live-log.json'), JSON.stringify(changes, null, 2), 'utf8');
console.log('=== 修复完成 ===');
console.log('写回成功文件数:', writeOk, '/', GRADES.length);
console.log('总修复/改动条目:', totalFixed, '（含', changes.length, '条记录）');
const byType = {};
changes.forEach(c => byType[c.type] = (byType[c.type]||0)+1);
Object.entries(byType).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log('  ', String(v).padStart(4), k));
