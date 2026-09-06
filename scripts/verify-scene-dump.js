// 场景词表 + 闪卡映射一致性审计
const fs = require('fs');
const sm = fs.readFileSync('engine/scene-manager.js', 'utf8');

// 场景结构探测
console.log('== scene-manager.js 结构采样 ==');
console.log(sm.slice(0, 1200));
