// engine/math-manipulative.js · 奇趣学园 可拖曳交互教具 + CPA 动态具象
// 2026-09 新增。解决两个长期问题：
//   ① 数形结合全是静态 SVG —— 孩子只能"看"，不能"动手"；
//   ② CPA 具象阶段（Concrete）是一个 emoji + 一段文字，缺少可操作的实物与动态过程。
//
// 设计原则：
//   · 教具是"探索工具"，不显示答案、不判断对错（避免答案泄漏，也符合 CPA 具象阶段定位）
//   · 同时支持鼠标拖拽与触屏（Pointer Events），并支持"点一下就飞过去"的兜底交互
//   · 零依赖，返回 HTML 字符串；事件用全局委托，插入 DOM 后无需手动绑定
(function (root) {
  'use strict';

  var UID = 0;
  var COL = ['#00A896', '#F5B800', '#FB923C', '#E8A0BF', '#7AA5FF', '#9CCC65'];
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  // ================= 一次性注入样式 =================
  function style() {
    if (root.__mpStyled) return '';
    root.__mpStyled = true;
    return '<style>' +
      '.mp-wrap{background:#fff;border:1.5px solid rgba(0,168,150,.18);border-radius:14px;padding:12px 12px 10px;margin:10px 0;font-family:inherit;user-select:none;-webkit-user-select:none;touch-action:none}' +
      '.mp-title{font-size:12.5px;font-weight:800;color:#006B5E;margin-bottom:10px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}' +
      '.mp-hint{font-size:11px;color:#8A9BB0;font-weight:600}' +
      '.mp-src{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;padding:8px;background:#F4F8F9;border-radius:10px}' +
      '.mp-block{display:flex;align-items:center;gap:4px;padding:7px 11px;border-radius:9px;font-size:13px;font-weight:800;color:#fff;cursor:grab;box-shadow:0 2px 6px rgba(30,58,95,.14);transition:transform .12s}' +
      '.mp-block:active{cursor:grabbing;transform:scale(.94)}' +
      '.mp-b1000{background:#1E3A5F}.mp-b100{background:#00A896}.mp-b10{background:#F5B800;color:#4A3800}.mp-b1{background:#E8A0BF;color:#7A3350}' +
      '.mp-places{display:flex;gap:6px;margin-bottom:10px}' +
      '.mp-place{flex:1;min-width:0;border:2px dashed #C9D6DE;border-radius:10px;padding:6px 4px;text-align:center;background:#FBFDFF;transition:all .15s}' +
      '.mp-place.over{border-color:#00A896;background:#E6F7F4;transform:translateY(-2px)}' +
      '.mp-place-name{font-size:11px;font-weight:800;color:#5A6B7D;margin-bottom:4px}' +
      '.mp-place-box{min-height:26px;display:flex;flex-wrap:wrap;gap:2px;justify-content:center;align-items:center}' +
      '.mp-chip{width:9px;height:9px;border-radius:2px;animation:mpPop .28s ease both}' +
      '.mp-c1000{background:#1E3A5F}.mp-c100{background:#00A896}.mp-c10{background:#F5B800}.mp-c1{background:#E8A0BF}' +
      '.mp-place-num{font-size:17px;font-weight:900;color:#1E3A5F;margin-top:3px}' +
      '.mp-readout{font-size:13px;color:#1E3A5F;display:flex;align-items:center;gap:8px;flex-wrap:wrap}' +
      '.mp-readout b{font-size:19px;color:#00A896;font-family:Inter,sans-serif}' +
      '.mp-btn{padding:5px 11px;border:1px solid #C9D6DE;background:#fff;border-radius:14px;font-size:11.5px;font-weight:700;color:#5A6B7D;cursor:pointer}' +
      '.mp-btn:hover{background:#F4F8F9}' +
      '.mp-strip{display:flex;gap:3px;margin:6px 0 10px;flex-wrap:wrap}' +
      '.mp-cell{flex:1;min-width:26px;height:40px;border:2px solid #C9D6DE;border-radius:6px;background:#FBFDFF;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;transition:all .15s}' +
      '.mp-cell.over{border-color:#FB923C;background:#FFF2E6;transform:scale(1.06)}' +
      '.mp-cell.on{background:#FB923C;border-color:#FB923C;color:#fff}' +
      '.mp-tray{display:flex;gap:6px;flex-wrap:wrap;padding:8px;background:#F4F8F9;border-radius:10px;margin-bottom:8px}' +
      '.mp-piece{width:26px;height:26px;border-radius:5px;background:#FB923C;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;cursor:grab;box-shadow:0 2px 5px rgba(30,58,95,.14)}' +
      '.mp-bowls{display:flex;gap:8px;flex-wrap:wrap}' +
      '.mp-bowl{flex:1;min-width:74px;border:2px dashed #C9D6DE;border-radius:12px;padding:8px 4px;text-align:center;background:#FBFDFF;transition:all .15s}' +
      '.mp-bowl.over{border-color:#00A896;background:#E6F7F4;transform:translateY(-2px)}' +
      '.mp-bowl-name{font-size:11px;font-weight:800;color:#5A6B7D}' +
      '.mp-bowl-items{min-height:30px;display:flex;flex-wrap:wrap;gap:2px;justify-content:center;align-items:center;margin:4px 0}' +
      '.mp-bowl-num{font-size:15px;font-weight:900;color:#1E3A5F}' +
      '.mp-ghost{position:fixed;z-index:99999;pointer-events:none;opacity:.9;transform:translate(-50%,-50%) scale(1.1)}' +
      /* ===== CPA 动态具象 ===== */
      '.mp-scene{display:flex;flex-direction:column;gap:10px;align-items:center;padding:6px 0}' +
      '.mp-group{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;padding:8px 12px;border-radius:12px;animation:mpFadeUp .5s ease both}' +
      '.mp-group-label{font-size:12px;font-weight:800;color:#5A6B7D;background:#F4F8F9;padding:3px 9px;border-radius:10px}' +
      '.mp-item{font-size:24px;animation:mpDrop .5s cubic-bezier(.34,1.56,.64,1) both}' +
      '.mp-more{font-size:12px;font-weight:800;color:#8A9BB0}' +
      '.mp-arrow{font-size:20px;color:#00A896;font-weight:900}' +
      '@keyframes mpPop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}' +
      '@keyframes mpFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
      '@keyframes mpDrop{from{opacity:0;transform:translateY(-18px) scale(.5)}to{opacity:1;transform:none}}' +
      '@media (prefers-reduced-motion:reduce){.mp-item,.mp-group,.mp-chip{animation:none!important}}' +
      '</style>';
  }

  // ================= 全局拖拽（事件委托，支持动态插入的 DOM） =================
  var drag = null;
  function install() {
    if (root.__mpInstalled) return;
    root.__mpInstalled = true;
    document.addEventListener('pointerdown', function (e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-mp-drag]') : null;
      if (!el) return;
      var wrap = el.closest('.mp-wrap');
      if (!wrap) return;
      e.preventDefault();
      var ghost = el.cloneNode(true);
      ghost.className = 'mp-ghost ' + (el.className || '');
      ghost.style.left = e.clientX + 'px';
      ghost.style.top = e.clientY + 'px';
      document.body.appendChild(ghost);
      drag = { el: el, ghost: ghost, wrap: wrap, x0: e.clientX, y0: e.clientY, moved: false };
      var move = function (ev) {
        if (!drag) return;
        if (Math.abs(ev.clientX - drag.x0) > 4 || Math.abs(ev.clientY - drag.y0) > 4) drag.moved = true;
        drag.ghost.style.left = ev.clientX + 'px';
        drag.ghost.style.top = ev.clientY + 'px';
        var z = zoneAt(ev.clientX, ev.clientY, drag.wrap);
        drag.wrap.querySelectorAll('[data-mp-drop]').forEach(function (n) { n.classList.remove('over'); });
        if (z) z.classList.add('over');
      };
      var up = function (ev) {
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', up);
        if (!drag) return;
        var d = drag; drag = null;
        if (d.ghost && d.ghost.parentNode) d.ghost.parentNode.removeChild(d.ghost);
        var z = zoneAt(ev.clientX, ev.clientY, d.wrap);
        d.wrap.querySelectorAll('[data-mp-drop]').forEach(function (n) { n.classList.remove('over'); });
        if (!d.moved) z = z || matchZone(d.wrap, d.el) || firstZone(d.wrap);   // 没拖动 = 点击，落到同类区
        if (z) drop(d.wrap, z, d.el);
      };
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
    });
  }
  function zoneAt(x, y, wrap) {
    var zones = wrap.querySelectorAll('[data-mp-drop]');
    for (var i = 0; i < zones.length; i++) {
      var r = zones[i].getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return zones[i];
    }
    return null;
  }
  // 点击兜底：落到与拖拽物"同类"的目标区（如个位方块 → 个位盘），避免全部塞进第一个区
  function matchZone(wrap, el) {
    var key = el.getAttribute('data-v');
    var attr = 'data-v';
    if (key == null) { key = el.getAttribute('data-i'); attr = 'data-i'; }
    if (key == null) return null;
    return wrap.querySelector('[data-mp-drop][' + attr + '="' + key + '"]');
  }
  function firstZone(wrap) {
    var zs = wrap.querySelectorAll('[data-mp-drop]');
    return zs.length ? zs[0] : null;
  }
  function drop(wrap, zone, el) {
    var t = wrap.getAttribute('data-mp-type');
    var fn = H[t] && H[t].drop;
    if (fn) fn(wrap, zone, el);
  }
  function wrapOf(node) { return node && node.closest ? node.closest('.mp-wrap') : null; }

  // ================= 教具 1：十进制位值板 =================
  var H = {};
  H.baseTen = {
    drop: function (wrap, zone, el) {
      var v = Number(zone.getAttribute('data-v'));
      var st = wrap.__mp || (wrap.__mp = { 1: 0, 10: 0, 100: 0, 1000: 0, undo: [] });
      st[v] = (st[v] || 0) + 1;
      st.undo.push(v);
      carry(wrap, st);
      paintBT(wrap, st);
    },
    act: function (wrap, act) {
      var st = wrap.__mp || (wrap.__mp = { 1: 0, 10: 0, 100: 0, 1000: 0, undo: [] });
      if (act === 'clear') { st[1] = st[10] = st[100] = st[1000] = 0; st.undo = []; }
      if (act === 'undo') { var v = st.undo.pop(); if (v) st[v] = Math.max(0, (st[v] || 0) - 1); }
      paintBT(wrap, st);
    }
  };
  function carry(wrap, st) {
    [1, 10, 100].forEach(function (p) {
      if (st[p] >= 10) { st[p] -= 10; st[p * 10] = (st[p * 10] || 0) + 1; }
    });
  }
  function paintBT(wrap, st) {
    [1000, 100, 10, 1].forEach(function (p) {
      var box = wrap.querySelector('[data-box="' + p + '"]');
      var num = wrap.querySelector('[data-num="' + p + '"]');
      if (!box || !num) return;
      var n = Math.min(st[p] || 0, 10);
      var h = '';
      for (var i = 0; i < n; i++) h += '<i class="mp-chip mp-c' + p + '" style="animation-delay:' + (i * 25) + 'ms"></i>';
      box.innerHTML = h;
      num.textContent = st[p] || 0;
    });
    var tot = (st[1000] || 0) * 1000 + (st[100] || 0) * 100 + (st[10] || 0) * 10 + (st[1] || 0);
    var t = wrap.querySelector('[data-total]');
    if (t) t.textContent = tot;
  }
  function baseTen() {
    var id = 'mp-bt-' + (++UID);
    return '<div class="mp-wrap" id="' + id + '" data-mp-type="baseTen">' +
      '<div class="mp-title">🧱 十进制方块 · 拖方块摆数，满 10 个会自动进位' +
      '<span class="mp-hint">（点一下也能放进去）</span></div>' +
      '<div class="mp-src">' +
      [1000, 100, 10, 1].map(function (v) {
        return '<div class="mp-block mp-b' + v + '" data-mp-drag data-v="' + v + '">' +
          (v === 1000 ? '🧊' : v === 100 ? '🔲' : v === 10 ? '▬' : '•') + '<span>' + v + '</span></div>';
      }).join('') +
      '</div>' +
      '<div class="mp-places">' +
      [['千', 1000], ['百', 100], ['十', 10], ['个', 1]].map(function (p) {
        return '<div class="mp-place" data-mp-drop data-v="' + p[1] + '">' +
          '<div class="mp-place-name">' + p[0] + '位</div>' +
          '<div class="mp-place-box" data-box="' + p[1] + '"></div>' +
          '<div class="mp-place-num" data-num="' + p[1] + '">0</div></div>';
      }).join('') +
      '</div>' +
      '<div class="mp-readout">我摆出的数：<b data-total>0</b>' +
      '<button class="mp-btn" onclick="MathManipulative.act(this,\'undo\')">↩️ 退一个</button>' +
      '<button class="mp-btn" onclick="MathManipulative.act(this,\'clear\')">🔄 清空</button></div>' +
      '</div>';
  }

  // ================= 教具 2：分数条 =================
  H.frac = {
    drop: function (wrap, zone, el) {
      var st = wrap.__mp || (wrap.__mp = { den: Number(wrap.getAttribute('data-den')) || 4, on: {} });
      if (!st.den) st.den = Number(wrap.getAttribute('data-den')) || 4;
      var i = Number(zone.getAttribute('data-i'));
      var k = (el && el.getAttribute('data-i') != null && !zone.classList.contains('mp-cell')) ? Number(el.getAttribute('data-i')) : i;
      st.on[k] = !st.on[k];
      paintFrac(wrap, st);
    }
  };
  function paintFrac(wrap, st) {
    var cells = wrap.querySelectorAll('.mp-cell');
    var n = 0;
    cells.forEach(function (c, i) {
      var on = !!st.on[i];
      c.classList.toggle('on', on);
      c.textContent = on ? '◼' : '';
      if (on) n++;
    });
    var r = wrap.querySelector('[data-frac]');
    if (r) r.textContent = n + ' / ' + st.den + (n === st.den ? '（正好一整条！）' : '');
  }
  function frac(den) {
    den = Math.max(2, Math.min(12, den || 4));
    var id = 'mp-fr-' + (++UID);
    var cells = '';
    for (var i = 0; i < den; i++) {
      cells += '<div class="mp-cell" data-mp-drop data-i="' + i + '" style="animation-delay:' + (i * 40) + 'ms"></div>';
    }
    return '<div class="mp-wrap" id="' + id + '" data-mp-type="frac" data-den="' + den + '">' +
      '<div class="mp-title">🍰 分数条 · 拖色块（或点格子）填一填，看看填了几分之几</div>' +
      '<div class="mp-tray">' +
      Array.apply(null, Array(Math.min(den, 12))).map(function (_, k) {
        return '<div class="mp-piece" data-mp-drag data-i="' + k + '">▮</div>';
      }).join('') +
      '</div>' +
      '<div class="mp-strip">' + cells + '</div>' +
      '<div class="mp-readout">已经填了：<b data-frac>0 / ' + den + '</b>' +
      '<button class="mp-btn" onclick="MathManipulative.act(this,\'clear\')">🔄 清空</button></div>' +
      '</div>';
  }

  // ================= 教具 3：分一分（平均分 / 余数） =================
  H.share = {
    drop: function (wrap, zone, el) {
      var st = wrap.__mp || (wrap.__mp = { bowls: [], pool: 0 });
      var bi = Number(zone.getAttribute('data-i'));
      if (st.pool <= 0) return;
      st.bowls[bi] = (st.bowls[bi] || 0) + 1;
      st.pool--;
      paintShare(wrap, st);
    }
  };
  function paintShare(wrap, st) {
    var bowls = wrap.querySelectorAll('.mp-bowl');
    bowls.forEach(function (b, i) {
      var n = st.bowls[i] || 0;
      var box = b.querySelector('.mp-bowl-items');
      var h = '';
      for (var k = 0; k < Math.min(n, 12); k++) h += '<span class="mp-item" style="animation-delay:' + (k * 30) + 'ms">' + st.emoji + '</span>';
      if (n > 12) h += '<span class="mp-more">+' + (n - 12) + '</span>';
      box.innerHTML = h;
      b.querySelector('.mp-bowl-num').textContent = n;
    });
    var p = wrap.querySelector('[data-pool]');
    if (p) p.textContent = st.pool;
    var pb = wrap.querySelector('.mp-src-pool');
    if (pb) {
      var h2 = '';
      for (var j = 0; j < Math.min(st.pool, 16); j++) h2 += '<span class="mp-item">' + st.emoji + '</span>';
      if (st.pool > 16) h2 += '<span class="mp-more">+' + (st.pool - 16) + '</span>';
      pb.innerHTML = h2 || '<span class="mp-hint">分完啦 🎉</span>';
    }
    var s = wrap.querySelector('[data-summary]');
    if (s) {
      var parts = st.bowls.map(function (x) { return x || 0; });
      var same = parts.every(function (x) { return x === parts[0]; });
      s.innerHTML = st.pool === 0
        ? (same ? '每盘一样多，正好平均分完！每盘 <b>' + (parts[0] || 0) + '</b> 个' : '分完了，但每盘不一样多：' + parts.join(' / '))
        : '还剩 <b>' + st.pool + '</b> 个没分';
    }
  }
  function share(total, bowls, emoji) {
    total = Math.max(2, Math.min(40, total || 12));
    bowls = Math.max(2, Math.min(6, bowls || 3));
    emoji = emoji || '🍎';
    var id = 'mp-sh-' + (++UID);
    var st = { bowls: new Array(bowls).fill(0), pool: total, emoji: emoji };
    var h = '<div class="mp-wrap" id="' + id + '" data-mp-type="share">' +
      '<div class="mp-title">🍎 分一分 · 把托盘里的 ' + total + ' 个分进盘子，试着每盘一样多' +
      '<span class="mp-hint">（拖 ➕ 到任意盘子；点一下 ➕ 放到第 1 盘）</span></div>' +
      '<div class="mp-tray"><div class="mp-piece" data-mp-drag title="拖我到盘子里">➕</div>' +
      '<span class="mp-hint">每次拿 1 个：拖 ➕ 到任意盘子，点一下 ➕ 就放进第 1 盘</span></div>' +
      '<div class="mp-tray mp-src-pool">';
    for (var j = 0; j < Math.min(total, 16); j++) h += '<span class="mp-item" style="animation-delay:' + (j * 25) + 'ms">' + emoji + '</span>';
    if (total > 16) h += '<span class="mp-more">+' + (total - 16) + '</span>';
    h += '</div><div class="mp-bowls">';
    for (var i = 0; i < bowls; i++) {
      h += '<div class="mp-bowl" data-mp-drop data-i="' + i + '">' +
        '<div class="mp-bowl-name">第 ' + (i + 1) + ' 盘</div>' +
        '<div class="mp-bowl-items"></div>' +
        '<div class="mp-bowl-num">0</div></div>';
    }
    h += '</div><div class="mp-readout">还没分的：<b data-pool>' + total + '</b>　<span data-summary></span>' +
      '<button class="mp-btn" onclick="MathManipulative.act(this,\'clear\')">🔄 重新分</button></div></div>';
    // 初始 state 在插入后由 init 写入
    root.__mpPending = root.__mpPending || {};
    root.__mpPending[id] = st;
    return h;
  }

  // ================= CPA 动态具象：让场景"动起来" =================
  // 旧版场景阶段 = 一个静态 emoji + 一段文字；这里把题里的数量变成逐个入场的实物，
  // 并按"组"呈现（几个几 / 两部分合起来），孩子能亲眼看到数量关系形成的过程。
  function scene(problem) {
    if (!problem) return '';
    var vd = problem.visualData || {};
    var groups = [];
    var items = vd.bars || vd.parts || [];
    var emoji = (typeof MathFlowV5 !== 'undefined' && MathFlowV5._sceneEmoji) ? MathFlowV5._sceneEmoji(problem) : '🧮';
    if (/🍰|🍓|🍏|🕐|🥛|🗺️|🏟️|🐰/.test(emoji)) { /* 保留语义 emoji */ } else { emoji = pickEmoji(problem); }

    if (items.length) {
      items.forEach(function (b, i) {
        var v = Number(b.value != null ? b.value : b.val) || 0;
        groups.push({ label: b.label || ('第' + (i + 1) + '组'), v: v, color: b.color || COL[i % COL.length] });
      });
    } else {
      var nums = String(problem.scene || '').match(/\d+(\.\d+)?/g) || [];
      var uniq = [];
      nums.forEach(function (n) { if (uniq.indexOf(n) < 0) uniq.push(n); });
      uniq.slice(0, 3).forEach(function (n, i) { groups.push({ label: '数量' + (i + 1), v: Number(n) || 0, color: COL[i % COL.length] }); });
    }
    if (!groups.length) return '';

    var html = '<div class="mp-wrap" data-mp-type="scene" style="text-align:center">' +
      '<div class="mp-title" style="justify-content:center">🎬 看得见的数学 · 数一数，它们是怎么合起来的</div><div class="mp-scene">';
    var delay = 0;
    groups.forEach(function (g, gi) {
      if (gi > 0) html += '<div class="mp-arrow">＋</div>';
      html += '<div class="mp-group" style="animation-delay:' + (gi * 220) + 'ms;background:' + g.color + '12">' +
        '<span class="mp-group-label">' + esc(g.label) + '　' + g.v + '</span>';
      var show = Math.min(g.v, 12);
      for (var k = 0; k < show; k++) {
        html += '<span class="mp-item" style="animation-delay:' + (delay += 45) + 'ms">' + emoji + '</span>';
      }
      if (g.v > 12) html += '<span class="mp-more">… 共 ' + g.v + ' 个</span>';
      html += '</div>';
    });
    html += '</div><div style="margin-top:8px"><button class="mp-btn" onclick="MathManipulative.replayScene(this)">▶ 再看一次</button></div></div>';
    return html;
  }
  function pickEmoji(problem) {
    var s = (problem.scene || '') + ' ' + (problem.question || '');
    if (/钢笔|铅笔|笔/.test(s)) return '✏️';
    if (/苹果|梨|桃|水果/.test(s)) return '🍎';
    if (/糖|饼干|蛋糕|面包/.test(s)) return '🍬';
    if (/书|本/.test(s)) return '📚';
    if (/人|同学|小朋友|游客/.test(s)) return '🙋';
    if (/花|树|草/.test(s)) return '🌱';
    if (/车|火车/.test(s)) return '🚗';
    if (/球|篮|足/.test(s)) return '⚽';
    if (/鱼|鸟|鸡|兔|猫|狗/.test(s)) return '🐟';
    if (/水|牛奶|果汁/.test(s)) return '🥛';
    if (/圆|半|径|周/.test(s)) return '⭕';
    return '🔵';
  }

  // ================= 对外 API =================
  var MathManipulative = {
    install: install,

    // 依据题目挑一个最合适的教具（不显示答案，纯探索）
    render: function (problem) {
      if (!problem) return '';
      install();
      var vt = problem.visualType || '';
      var vd = problem.visualData || {};
      try {
        if (vt === 'fractionStrip' || (vd.den && vd.filled != null)) return style() + frac(vd.den || 4);
        // 除法 / 平均分 / 有余数：分一分
        var f = String(problem.formula || '');
        if (/÷/.test(f) || (vd.parts && vd.parts.length >= 2 && vd.total && /每份|平均|分/.test((problem.question || '') + (problem.scene || '')))) {
          var parts = vd.parts || [];
          var k = parts.length ? parts.length : 3;
          var tot = Number(vd.total) || parts.reduce(function (a, b) { return a + (Number(b.val != null ? b.val : b.value) || 0); }, 0);
          if (tot >= 2 && tot <= 40) return style() + share(tot, Math.min(k, 6), pickEmoji(problem));
        }
        // 整数运算：十进制位值板
        var ans = Number(problem.answer);
        if (isFinite(ans) && /^[+\-×÷\d\s()?=．.]+$/.test(f) && ans >= 0 && ans <= 99999) return style() + baseTen();
      } catch (e) { /* 教具失败不影响主流程 */ }
      return '';
    },

    // CPA 具象阶段：动态版场景
    scene: function (problem) {
      if (!problem) return '';
      install();
      try { return style() + scene(problem); } catch (e) { return ''; }
    },

    // 按钮回调
    act: function (node, act) {
      var wrap = wrapOf(node); if (!wrap) return;
      var t = wrap.getAttribute('data-mp-type');
      if (t === 'baseTen') { H.baseTen.act(wrap, act); return; }
      if (t === 'frac') { wrap.__mp = { den: Number(wrap.getAttribute('data-den')) || 4, on: {} }; paintFrac(wrap, wrap.__mp); return; }
      if (t === 'share') {
        var st = wrap.__mp; if (st) { st.bowls = st.bowls.map(function () { return 0; }); st.pool = st.total; paintShare(wrap, st); }
        return;
      }
    },
    tapCell: function (node) {
      var wrap = wrapOf(node); if (!wrap) return;
      var st = wrap.__mp || (wrap.__mp = { den: Number(wrap.getAttribute('data-den')) || 4, on: {} });
      var i = Number(node.getAttribute('data-i'));
      st.on[i] = !st.on[i];
      paintFrac(wrap, st);
    },
    tapBowl: function (node) {
      var wrap = wrapOf(node); if (!wrap) return;
      var st = wrap.__mp; if (!st || st.pool <= 0) return;
      var i = Number(node.getAttribute('data-i'));
      st.bowls[i] = (st.bowls[i] || 0) + 1; st.pool--;
      paintShare(wrap, st);
    },
    replayScene: function (node) {
      var wrap = wrapOf(node); if (!wrap) return;
      wrap.querySelectorAll('.mp-item,.mp-group').forEach(function (el) {
        var c = el.cloneNode(true); el.parentNode.replaceChild(c, el);
      });
    },

    // 插入 DOM 后调用：写入初始状态（目前仅"分一分"需要）
    init: function (scopeEl) {
      var scope = scopeEl || document;
      // 键盘可达性（Q6-10）：Tab 聚焦 + Enter/Space 触发，精细动作受限的孩子也能用
      scope.querySelectorAll('.mp-wrap [data-mp-drag], .mp-wrap [data-mp-drop]').forEach(function (el) {
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'button');
        if (!el.__mpKb) {
          el.__mpKb = true;
          el.addEventListener('keydown', function (ev) {
            if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') { ev.preventDefault(); el.click(); }
          });
        }
      });
      scope.querySelectorAll('.mp-wrap').forEach(function (w) {
        var id = w.id;
        if (root.__mpPending && root.__mpPending[id]) {
          var st = root.__mpPending[id];
          st.total = st.pool;
          w.__mp = st;
          delete root.__mpPending[id];
          paintShare(w, st);
        }
      });
    }
  };

  root.MathManipulative = MathManipulative;
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
    else install();
  }
})(typeof window !== 'undefined' ? window : this);
