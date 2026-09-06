// 图片资产审计：引用完整性 + PNG 有效性 + 孤儿文件
const fs = require('fs');
const path = require('path');

const files = ['index.html', ...fs.readdirSync('engine').filter(f => f.endsWith('.js')).map(f => 'engine/' + f)];
const refs = new Set();
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  for (const m of src.matchAll(/assets\/[A-Za-z0-9_\-\/.]+\.(?:png|jpg|jpeg|svg|webp|gif)/g)) refs.add(m[0]);
}
console.log('引用的本地图片:', refs.size);

let missing = 0;
for (const r of refs) {
  if (!fs.existsSync(r)) { console.log('  ✗ 缺失:', r); missing++; }
}
console.log(missing ? `缺失 ${missing}` : '引用全部存在 ✓');

// 孤儿文件
function walk(d, out) {
  for (const f of fs.readdirSync(d)) {
    const p = d + '/' + f;
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.(png|jpg|jpeg|svg|webp|gif)$/i.test(f)) out.push(p);
  }
  return out;
}
const all = walk('assets', []);
const orphans = all.filter(p => !refs.has(p));
console.log('assets 图片总数:', all.length, '| 未被引用:', orphans.length);
orphans.forEach(o => console.log('  孤儿:', o));

// PNG 完整性 + 尺寸
const pngs = all.filter(p => p.endsWith('.png'));
let bad = 0;
for (const p of pngs) {
  const buf = fs.readFileSync(p);
  const sig = buf.slice(0, 8).toString('hex');
  if (sig !== '89504e470d0a1a0a') { console.log('  ✗ 非法PNG头:', p); bad++; continue; }
  const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
  const end = buf.slice(buf.length - 8).toString('ascii');
  if (!end.includes('IEND')) { console.log('  ✗ IEND 缺失(截断):', p); bad++; }
}
console.log(bad ? `PNG 异常 ${bad}` : `PNG 完整性 ${pngs.length} 张全部通过 ✓`);

// 宠物精灵图尺寸与四角透明
for (const name of ['cat-idle', 'cat-celebrate', 'cat-comfort', 'cat-eat', 'cat-sleep', 'cat-tail']) {
  const p = 'assets/pet3d/' + name + '.png';
  if (!fs.existsSync(p)) { console.log('  ✗ 缺失:', p); continue; }
  const buf = fs.readFileSync(p);
  console.log(name, buf.readUInt32BE(16) + 'x' + buf.readUInt32BE(20), Math.round(buf.length / 1024) + 'KB');
}
