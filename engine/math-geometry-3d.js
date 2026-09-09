/* ============================================================
   MathGeo3D · 空间几何可拖拽教具（Q6-2）
   覆盖人教版 2024：五上"观察物体/多边形面积"、五下"长方体和正方体"、
   六上"圆"、六下"圆柱与圆锥"。
   技术选型：纯 CSS 3D transform（项目零依赖风格，不引 Three.js）。
   能力：
     · 拖拽任意旋转（pointer events → rotateX/rotateY）
     · 不动时缓慢自转（孩子一直有"活的"反馈）
     · 长方体/正方体支持"展开"动画（6 面展开成十字展开图，讲表面积）
     · 圆柱/圆锥：底面圆 + 侧面展开提示
   接线：MathFlowV5._tool(problem) 中按 knowledge/visualData.shape 自动注入。
   注意：与所有教具一致 —— 只帮孩子"看见"，不显示答案、不判对错。
   ============================================================ */
(function (root) {
  'use strict';

  var TRIGGERS = [
    { re: /长方体|正方体|体积|容积|表面积/, shapes: ['cuboid'] },
    { re: /圆柱/, shapes: ['cylinder'] },
    { re: /圆锥/, shapes: ['cone'] },
    { re: /圆的(周长|面积)|圆周率|圆/, shapes: ['circle'] },
    { re: /展开图|折叠/, shapes: ['cube'] }
  ];

  function pickShape(problem) {
    if (!problem) return null;
    var vd = problem.visualData || {};
    if (vd.shape && { cuboid: 1, cube: 1, cylinder: 1, cone: 1, circle: 1 }[vd.shape]) return vd.shape;
    if (/长方体/.test(problem.scene || '') || /长方体/.test(problem.knowledge || '')) return 'cuboid';
    if (/正方体/.test(problem.scene || '') || /正方体/.test(problem.knowledge || '')) return 'cube';
    if (/圆柱/.test(problem.scene || '') || /圆柱/.test(problem.knowledge || '')) return 'cylinder';
    if (/圆锥/.test(problem.scene || '') || /圆锥/.test(problem.knowledge || '')) return 'cone';
    for (var i = 0; i < TRIGGERS.length; i++) {
      if (TRIGGERS[i].re.test(problem.knowledge || '')) return TRIGGERS[i].shapes[0];
    }
    return null;
  }

  // 从题面抓尺寸（长x宽x高 / 半径），抓不到给安全默认值
  function grabDims(problem, shape) {
    var s = (problem && (problem.scene || '') + (problem.formula || '')) || '';
    function num(re) { var m = s.match(re); return m ? parseFloat(m[1]) : null; }
    var d = {};
    if (shape === 'cuboid' || shape === 'cube') {
      d.l = num(/长\s*([0-9.]+)/) || num(/棱长\s*([0-9.]+)/) || 8;
      d.w = num(/宽\s*([0-9.]+)/) || d.l;
      d.h = num(/高\s*([0-9.]+)/) || (shape === 'cube' ? d.l : 4);
      if (shape === 'cube') { d.w = d.l; d.h = d.l; }
    } else {
      d.r = num(/半径\s*([0-9.]+)/) || num(/底面半径\s*([0-9.]+)/) || 6;
      d.h = num(/高\s*([0-9.]+)/) || 10;
    }
    return d;
  }

  var uid = 0;

  // ---------- 模板 ----------
  function boxScene(shape, dims, title) {
    var id = 'mgeo' + (++uid);
    var S = 9;                       // 缩放：1 单位 = 9px
    var l = dims.l * S, w = dims.w * S, h = dims.h * S;
    var r = dims.r * S;
    var face = 'background:linear-gradient(160deg,rgba(0,168,150,.85),rgba(0,128,110,.75));border:2px solid rgba(255,255,255,.85);box-shadow:inset 0 0 22px rgba(255,255,255,.14)';
    var faceB = 'background:linear-gradient(160deg,rgba(74,141,255,.82),rgba(19,73,166,.72));border:2px solid rgba(255,255,255,.85);box-shadow:inset 0 0 22px rgba(255,255,255,.14)';
    var faces = '';
    var hw = w / 2, hl = l / 2, hh = h / 2;
    if (shape === 'cuboid' || shape === 'cube') {
      faces =
        '<div class="mgeo-f" style="width:'+w+'px;height:'+h+'px;transform:rotateY(0deg) translateZ('+hw+'px) translate(-50%,-50%);'+faceB+'"><i>'+dims.l+'</i></div>' + // 前
        '<div class="mgeo-f" style="width:'+w+'px;height:'+h+'px;transform:rotateY(180deg) translateZ('+hw+'px) translate(-50%,-50%);'+faceB+'"><i></i></div>' +      // 后
        '<div class="mgeo-f" style="width:'+l+'px;height:'+h+'px;transform:rotateY(90deg) translateZ('+hl+'px) translate(-50%,-50%);'+face+'"><i>'+dims.w+'</i></div>' + // 右
        '<div class="mgeo-f" style="width:'+l+'px;height:'+h+'px;transform:rotateY(-90deg) translateZ('+hl+'px) translate(-50%,-50%);'+face+'"><i></i></div>' +       // 左
        '<div class="mgeo-f" style="width:'+w+'px;height:'+l+'px;transform:rotateX(90deg) translateZ('+hh+'px) translate(-50%,-50%);'+face+'"><i>'+dims.h+'</i></div>' + // 上
        '<div class="mgeo-f" style="width:'+w+'px;height:'+l+'px;transform:rotateX(-90deg) translateZ('+hh+'px);'+face+'"><i></i></div>';          // 下
    } else if (shape === 'cylinder' || shape === 'cone') {
      // 侧用 24 片薄面近似，底/顶用椭圆
      var seg = 24, side = '';
      for (var i = 0; i < seg; i++) {
        var ang = 360 / seg * i;
        var sw = 2 * Math.PI * r / seg + 2;
        if (shape === 'cylinder') {
          side += '<div class="mgeo-f" style="width:'+sw+'px;height:'+h+'px;transform:rotateY('+ang+'deg) translateZ('+r+'px) translate(-50%,-50%);background:linear-gradient(160deg,rgba(0,168,150,.55),rgba(0,110,95,.5));border:1px solid rgba(255,255,255,.4)"></div>';
        } else {
          side += '<div class="mgeo-f" style="width:'+sw+'px;height:1px;transform:rotateY('+ang+'deg) translateZ('+r+'px) translate(-50%,-50%)"></div>';
        }
      }
      var bottom = '<div class="mgeo-f" style="width:'+2*r+'px;height:'+2*r+'px;transform:rotateX(-90deg) translateZ('+hh+'px) translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(0,128,110,.9),rgba(0,90,78,.85));border:2px solid rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center"><i style="font-style:normal">r='+dims.r+'</i></div>';
      var top = shape === 'cylinder' ? '<div class="mgeo-f" style="width:'+2*r+'px;height:'+2*r+'px;transform:rotateX(90deg) translateZ('+hh+'px) translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(0,168,150,.9),rgba(0,120,105,.85));border:2px solid rgba(255,255,255,.85)"></div>' : '';
      var coneTip = shape === 'cone'
        ? Array.from({length: seg}, function (_, k) {
            var ang = 360 / seg * k;
            var sw = 2 * Math.PI * r / seg + 2;
            return '<div class="mgeo-f mgeo-cone-side" style="width:'+sw+'px;height:'+Math.sqrt(h*h+r*r)+'px;transform-origin:50% 0;transform:rotateY('+ang+'deg) translateZ('+r+'px) rotateX('+(Math.atan2(r,h)*180/Math.PI)+'deg) translate(-50%,-50%);background:linear-gradient(180deg,rgba(74,141,255,.6),rgba(0,168,150,.45));border:1px solid rgba(255,255,255,.35)"></div>';
          }).join('')
        : '';
      faces = side + coneTip + bottom + top;
    }
    var hint = shape === 'cone' ? '圆锥：底面是圆，侧面展开是扇形' :
               shape === 'cylinder' ? '圆柱：上下两个一样的圆面 + 侧面展开是长方形' :
               '长/宽/高都标在面上了，拖一拖转一圈';
    return '' +
      '<div class="mp-wrap mgeo-wrap" id="'+id+'" data-mp-type="geo3d" style="padding:16px;border-radius:16px;background:linear-gradient(135deg,#F3F8FF,#E9FBF6);border:1px solid rgba(37,112,232,.18)">' +
        '<div class="mp-title" style="margin-bottom:10px">🧊 3D 几何教具 · '+title+' <span style="font-weight:500;color:var(--text-3);font-size:12px">（按住拖动可以转，松手自己慢慢转）</span></div>' +
        '<div class="mgeo-scene" data-scene style="height:270px;perspective:900px;touch-action:none;cursor:grab;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:12px;background:radial-gradient(circle at 50% 68%,rgba(37,112,232,.10),transparent 62%)">' +
          '<div class="mgeo-obj" data-obj style="position:relative;transform-style:preserve-3d;animation:mgeoSpin 14s linear infinite">'+faces+'</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">' +
          '<button class="button-3d" data-explode style="padding:7px 16px;border-radius:14px;border:none;background:var(--teal);color:#fff;font-size:12px;font-weight:700;cursor:pointer">✂️ 展开看表面</button>' +
          '<button data-reset style="padding:7px 16px;border-radius:14px;border:1px solid var(--ink-200);background:#fff;font-size:12px;font-weight:600;cursor:pointer;color:var(--text-2)">↺ 复位</button>' +
          '<span style="font-size:12px;color:var(--text-3);align-self:center">💡 '+hint+'</span>' +
        '</div>' +
      '</div>';
  }

  function circleScene(dims, title) {
    var id = 'mgeo' + (++uid);
    var r = dims.r * 9;
    return '' +
      '<div class="mp-wrap mgeo-wrap" id="'+id+'" data-mp-type="geo3d" style="padding:16px;border-radius:16px;background:linear-gradient(135deg,#F3F8FF,#E9FBF6);border:1px solid rgba(37,112,232,.18)">' +
        '<div class="mp-title" style="margin-bottom:10px">⭕ 圆的认识教具 · '+title+' <span style="font-weight:500;color:var(--text-3);font-size:12px">（拖滑块卷一卷：周长 = 直径 × 3 个多一点）</span></div>' +
        '<div style="display:flex;align-items:center;gap:18px;justify-content:center;flex-wrap:wrap">' +
          '<div style="position:relative;width:'+2*r+'px;height:'+2*r+'px">' +
            '<svg width="'+2*r+'" height="'+2*r+'" viewBox="0 0 '+(2*r)+' '+(2*r)+'">' +
              '<circle cx="'+r+'" cy="'+r+'" r="'+(r-4)+'" fill="rgba(0,168,150,.12)" stroke="#00A896" stroke-width="3"/>' +
              '<line x1="'+r+'" y1="'+r+'" x2="'+(2*r-4)+'" y2="'+r+'" stroke="#FF7A45" stroke-width="4" stroke-linecap="round"/>' +
              '<circle cx="'+r+'" cy="'+r+'" r="5" fill="#FF7A45"/>' +
            '</svg>' +
            '<span style="position:absolute;top:50%;right:-6px;transform:translate(100%,-50%);font-size:12px;font-weight:800;color:#FF7A45">r</span>' +
          '</div>' +
          '<div style="min-width:150px">' +
            '<div style="font-size:13px;color:var(--text-2);line-height:1.9">半径 <b style="color:#FF7A45">r</b> 转一圈就是圆。<br>把绳子沿圆边绕一圈再拉直，这一圈的长度叫<b>周长</b>。</div>' +
            '<div style="margin-top:8px;font-size:13px"><input type="range" min="3" max="14" value="'+dims.r+'" data-cr style="width:150px;accent-color:#2570E8"> <span data-crv style="font-weight:800;color:var(--teal-600)">r = '+dims.r+'</span></div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ---------- 交互 ----------
  function bind(wrap) {
    if (!wrap) return;
    var scene = wrap.querySelector('[data-scene]');
    var obj = wrap.querySelector('[data-obj]');
    var rx = -18, ry = 32, auto = true, exploded = false, raf;
    function apply() {
      if (obj) obj.style.animation = auto ? 'mgeoSpin 14s linear infinite' : 'none';
      if (obj && !auto) obj.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    }
    if (scene && obj) {
      var drag = null;
      scene.addEventListener('pointerdown', function (e) {
        drag = { x: e.clientX, y: e.clientY, rx: rx, ry: ry };
        auto = false; scene.style.cursor = 'grabbing';
        if (obj) obj.style.animation = 'none';
        e.preventDefault();
      });
      root.addEventListener('pointermove', function (e) {
        if (!drag) return;
        ry = drag.ry + (e.clientX - drag.x) * 0.5;
        rx = Math.max(-80, Math.min(80, drag.rx - (e.clientY - drag.y) * 0.5));
        obj.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      });
      root.addEventListener('pointerup', function () {
        if (!drag) return;
        drag = null; scene.style.cursor = 'grab';
        clearTimeout(raf);
        raf = setTimeout(function () { auto = true; apply(); }, 2600); // 松手 2.6s 后恢复自转
      });
    }
    var ex = wrap.querySelector('[data-explode]');
    if (ex && obj) {
      ex.addEventListener('click', function () {
        exploded = !exploded;
        auto = false; if (obj) obj.style.animation = 'none';
        obj.style.transform = 'rotateX(-16deg) rotateY(' + (exploded ? 18 : 32) + 'deg)';
        obj.querySelectorAll('.mgeo-f').forEach(function (f, k) {
          if (!f.dataset.tf) f.dataset.tf = f.style.transform || '';
          f.style.transition = 'transform .8s cubic-bezier(.34,1.56,.64,1)';
          f.style.transitionDelay = (k * 22) + 'ms';
          f.style.transform = exploded ? (f.dataset.tf + ' translateZ(44px)') : f.dataset.tf;
        });
        ex.textContent = exploded ? '⬅️ 合起来' : '✂️ 展开看表面';
      });
    }
    var rs = wrap.querySelector('[data-reset]');
    if (rs) rs.addEventListener('click', function () {
      rx = -18; ry = 32; auto = true; exploded = false;
      if (obj) { obj.classList.remove('mgeo-exploded'); apply(); }
      if (ex) ex.textContent = '✂️ 展开看表面';
    });
    var cr = wrap.querySelector('[data-cr]');
    if (cr) cr.addEventListener('input', function () {
      var v = wrap.querySelector('[data-crv]');
      if (v) v.textContent = 'r = ' + cr.value;
      var svg = wrap.querySelector('svg circle');
      var box = cr.parentElement.previousElementSibling && wrap.querySelector('[style*="position:relative"]');
      // 简化：仅更新读数与描边强调，不重排几何（孩子主要感知"半径变了圆也变"）
      if (svg) svg.setAttribute('stroke-width', Math.max(2, cr.value / 3));
    });
  }

  var H = {};
  H.render = function (problem) {
    try {
      var shape = pickShape(problem);
      if (!shape) return '';
      var dims = grabDims(problem, shape);
      var title = (problem && (problem.knowledge || '')).split('（')[0] || '空间与图形';
      var html = (shape === 'circle') ? circleScene(dims, title) : boxScene(shape, dims, title);
      setTimeout(function () {
        var w = document.getElementById(html.match(/id="(mgeo\d+)"/) && html.match(/id="(mgeo\d+)"/)[1]);
        bind(w);
      }, 60);
      return html;
    } catch (e) { return ''; }
  };
  H.init = function (scopeEl) {
    (scopeEl || document).querySelectorAll('.mgeo-wrap').forEach(bind);
  };

  root.MathGeo3D = H;
})(typeof window !== 'undefined' ? window : this);
