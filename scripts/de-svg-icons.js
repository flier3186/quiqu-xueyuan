// UI 图标去 SVG 化：界面图标 → emoji；教学内容 SVG（数学图形/苹果/声波/成绩环）保留
const fs = require('fs');
const F = 'index.html';
let s = fs.readFileSync(F, 'utf8');
const report = [];

function rep(name, from, to, expect) {
  let n = 0;
  while (s.includes(from)) { s = s.replace(from, to); n++; }
  report.push(`${name}: ${n}处${expect && n !== expect ? '  ⚠️预期' + expect : ' ✓'}`);
  return n;
}

// 1) 喇叭图标（全局高频）
rep('喇叭→🔊',
  '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>',
  '<span class="em em-spk">🔊</span>', 12);

// 2) 对勾（toast + 签到）
rep('对勾→✅',
  '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  '<span class="em">✅</span>', 2);

// 3) 星星（星星计数 + 成就墙）
rep('实心星→⭐',
  '<svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/></svg>',
  '<span class="em">⭐</span>', 2);

// 4) logo
rep('logo→🎓',
  '<div class="logo-mark"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>',
  '<div class="logo-mark"><span class="em">🎓</span></div>', 1);

// 5) 导航标签（按行定位，path 有跨用复用，故整行替换）
const navs = [
  ['总览', 'M3 12l9-9 9 9v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z', '🏠'],
  ['数学星球', 'M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z', '🪐'],
  ['英语世界', 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.66 0 3 2.69 3 6h-6c0-3.31 1.34-6 3-6zm-3 8h6c0 3.31-1.34 6-3 6s-3-2.69-3-6zm-7-2c0-3.31 1.34-6 3-6 .69 0 1.35.27 1.93.74C8.32 7.45 8 9.65 8 12s.32 4.55.93 6.26C8.35 18.73 7.69 19 7 19c-1.66 0-3-2.69-3-6zm16 6c-.69 0-1.35-.27-1.93-.74.61-1.71.93-3.91.93-6.26s-.32-4.55-.93-6.26C16.65 4.27 17.31 4 18 4c1.66 0 3 2.69 3 6s-1.34 6-3 6z', '🌍'],
  ['口语伙伴', 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z', '🎤'],
  ['闯关游戏', 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z', '🎮'],
  ['元宇宙宠物', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c0 .83-.67 1.5-1.5 1.5S7 11.33 7 10.5 7.67 9 8.5 9s1.5.67 1.5 1.5zm7 0c0 .83-.67 1.5-1.5 1.5S14 11.33 14 10.5 14.67 9 15.5 9s1.5.67 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z', '🐾'],
];
for (const [label, d, emo] of navs) {
  rep('导航·' + label,
    `<svg class="icon" viewBox="0 0 24 24"><path d="${d}"/></svg><span>${label}</span>`,
    `<span class="em nav-ico">${emo}</span><span>${label}</span>`, 1);
}

// 6) 顶部按钮：麦克风 + 家长面板
rep('麦克风→🎙️',
  '<button class="icon-btn mic" id="micToggle" title="语音开关"><svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button>',
  '<button class="icon-btn mic" id="micToggle" title="语音开关"><span class="em">🎙️</span></button>', 1);
rep('家长按钮→👪',
  '<button class="parent-btn" id="parentBtn"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg><span>家长面板</span></button>',
  '<button class="parent-btn" id="parentBtn"><span class="em">👪</span><span>家长面板</span></button>', 1);

// 7) 总览任务卡缩略图
rep('任务·训练营→🧮',
  '<div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg></div>',
  '<div class="task-thumb"><span class="em">🧮</span></div>', 1);
rep('任务·英语→🌍',
  '<div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg></div>',
  '<div class="task-thumb"><span class="em">🌍</span></div>', 1);
rep('任务·口语→🎤',
  '<div class="task-thumb"><svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg></div>',
  '<div class="task-thumb"><span class="em">🎤</span></div>', 1);

// 8) 快捷入口
rep('快捷·训练营→🏋️',
  '<div class="quick-item" onclick="switchView(\'math\')"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg><span>训练营</span></div>',
  '<div class="quick-item" onclick="switchView(\'math\')"><span class="em">🏋️</span><span>训练营</span></div>', 1);
rep('快捷·几何→📐',
  '<div class="quick-item" onclick="switchView(\'math\')"><svg viewBox="0 0 24 24"><path d="M3 3v18h18v-2H5V3H3zm14 12V8h-2v7h-2v-4h-2v4H9V6H7v9h10z"/></svg><span>几何</span></div>',
  '<div class="quick-item" onclick="switchView(\'math\')"><span class="em">📐</span><span>几何</span></div>', 1);
rep('快捷·错题→📕',
  '<div class="quick-item" onclick="toast(\'错题本：\'+S.math.wrongProblems.length+\' 道\')"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg><span>错题</span></div>',
  '<div class="quick-item" onclick="toast(\'错题本：\'+S.math.wrongProblems.length+\' 道\')"><span class="em">📕</span><span>错题</span></div>', 1);
rep('快捷·进阶→🚀',
  '<div class="quick-item" onclick="switchView(\'english\')"><svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11z"/></svg><span>进阶</span></div>',
  '<div class="quick-item" onclick="switchView(\'english\')"><span class="em">🚀</span><span>进阶</span></div>', 1);
rep('快捷·宠物→🐾',
  '<div class="quick-item" onclick="switchView(\'pet\')"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg><span>宠物</span></div>',
  '<div class="quick-item" onclick="switchView(\'pet\')"><span class="em">🐾</span><span>宠物</span></div>', 1);

// 9) 收藏星标（fill 变色改 filter 方案）
rep('收藏星→⭐(filter)',
  `<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:\${isFav?'var(--yellow)':'var(--ink-300)'}"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  `<span class="em" style="font-size:15px;filter:\${isFav?'none':'grayscale(1) opacity(.45)'}">⭐</span>`, 1);

// 10) 计时器时钟
rep('计时→⏱️',
  '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>',
  '<span class="em">⏱️</span>', 1);

// 11) toggleFav：svg.fill → em.filter
rep('toggleFav 收藏',
  "  const svg=el.querySelector('svg');\n  if(added){\n    el.style.background='var(--yellow-100)';\n    svg.style.fill='var(--yellow)';",
  "  const ico=el.querySelector('.em');\n  if(added){\n    el.style.background='var(--yellow-100)';\n    if(ico) ico.style.filter='none';", 1);
rep('toggleFav 取消',
  "    el.style.background='var(--ink-50)';\n    svg.style.fill='var(--ink-300)';",
  "    el.style.background='var(--ink-50)';\n    if(ico) ico.style.filter='grayscale(1) opacity(.45)';", 1);

// 12) emoji 尺寸 CSS（插在第一个 </style> 前）
const css = `
/* ---- emoji icon system（替代 SVG 界面图标） ---- */
.em{display:inline-block;line-height:1;font-style:normal;vertical-align:middle}
.logo-mark .em{font-size:22px}
.icon-btn .em{font-size:15px}
.parent-btn .em{font-size:20px}
.nav-tab .nav-ico{font-size:19px}
.star-count .em{font-size:22px}
.task-thumb .em{font-size:19px}
.quick-item .em{font-size:19px}
.vocab-speak .em,.mp-speak .em{font-size:13px}
.letter-speak .em,.flash-speak .em{font-size:12px}
.scene-word-item button .em{font-size:10px}
.achv-item .em{font-size:18px}
.timer-display .em{font-size:18px}
.se-replay .em{font-size:12px}
#toast .em{font-size:15px;margin-right:4px;vertical-align:-3px}
.wt-actions .em{font-size:13px}
</style>`;
s = s.replace('</style>', css);

// 残留检查：剩下的 <svg> 应全部是教学内容
const remain = (s.match(/<svg/g) || []).length;
fs.writeFileSync(F, s);
console.log(report.join('\n'));
console.log('剩余 <svg>（应全为教学内容）:', remain);
