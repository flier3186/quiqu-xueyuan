// engine/pet-companion.js
// 奇趣学园 · 3D 陪伴宠物引擎（Bolt 负责）
// 纯 ES 模块 + 全局 API，零依赖。挂载到现有 .pet-display 容器。
// —— 设计要点 ——
//  · 立体感：CSS perspective + transform 实现真 3D 视差倾斜；落地阴影随跳跃缩放分离；
//    待机呼吸起伏（scaleY 微动）；入场弹性 bounce；状态切换交叉淡入 + 弹性缩放，禁止硬切。
//  · 养成：成长值经验 + 等级（幼龙→少年→成年），升级触发庆祝 + 体型放大 + 星级徽章。
//  · 情绪自动化：答对 celebrate 2s→idle；答错 comfort 3s→idle；30s 无操作 sleep；被喂 eat 2s→idle。
//  · 持久化：localStorage 键名 quiqu_pet_v1（成长值/等级/当前情绪）。
//  · 防呆：图片 onerror 降级为占位圆形 + 呼吸动画，绝不白屏。
//
// 集成方式（不修改 index.html）：见 docs/pet-integration.md

const PetCompanion = (() => {
  'use strict';

  const STORAGE_KEY = 'quiqu_pet_v1';
  const DEFAULT_ASSET_ROOT = 'assets/pet3d';
  // 五只 3D 伙伴注册表：每只 5 个情绪状态
  const PET_REGISTRY = {
    dragon: { name: '小星', idle: 'dragon-idle.png', celebrate: 'dragon-celebrate.png', comfort: 'dragon-comfort.png', eat: 'dragon-eat.png', sleep: 'dragon-sleep.png' },
    cat:    { name: '小黑', idle: 'cat-idle.png',    celebrate: 'cat-celebrate.png',    comfort: 'cat-comfort.png',    eat: 'cat-eat.png',    sleep: 'cat-sleep.png', rigTail: 'cat-tail.png', rigPivot: '65.2% 83%' },
    bunny:  { name: '量子', idle: 'bunny-idle.png',  celebrate: 'bunny-celebrate.png',  comfort: 'bunny-comfort.png',  eat: 'bunny-eat.png',  sleep: 'bunny-sleep.png' },
    fox:    { name: '银宝', idle: 'fox-idle.png',    celebrate: 'fox-celebrate.png',    comfort: 'fox-comfort.png',    eat: 'fox-eat.png',    sleep: 'fox-sleep.png' },
    whale:  { name: '深海', idle: 'whale-idle.png',  celebrate: 'whale-celebrate.png',  comfort: 'whale-comfort.png',  eat: 'whale-eat.png',  sleep: 'whale-sleep.png' }
  };
  const DEFAULT_PET = 'dragon';
  const MOODS = ['idle', 'celebrate', 'comfort', 'eat', 'sleep'];
  const STAGE_NAMES = { 1: '幼年', 2: '少年', 3: '成年' };
  const GROWTH_PER_LEVEL = 100;   // 每 100 成长值升 1 级
  const MAX_LEVEL = 3;            // 幼龙 / 少年 / 成年
  const SLEEP_AFTER_MS = 30000;   // 30s 无操作进入睡眠
  // 瞬时情绪的自动回落时间（毫秒）
  const MOOD_RETURN_MS = { celebrate: 2000, comfort: 3000, eat: 2000 };
  const FEED_GROWTH = 5;          // 喂食给予的成长值

  // ---- 内部状态 ----
  let state = { growth: 0, level: 1, mood: 'idle', petId: DEFAULT_PET };
  let cfg = {
    target: null,
    assetsRoot: DEFAULT_ASSET_ROOT,
    assets: null,         // { mood: url } 覆盖默认资源
    feedCost: 0,          // 喂食所需金币（仅作契约默认值）
    onConsume: null,      // (cost) => boolean  真正扣费由外部实现
    onLevelUp: null,      // (newLevel, fromLevel) => void
    onMoodChange: null,   // (mood) => void
    sleepAfterMs: SLEEP_AFTER_MS,
    autoSleep: true
  };
  let dom = {};
  let reduced = false;
  let idleTimer = null;
  let moodTimer = null;
  let styleInjected = false;

  // ================= 持久化 =================
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const o = JSON.parse(raw);
        if (typeof o.growth === 'number' && o.growth >= 0) state.growth = o.growth;
        if (typeof o.level === 'number') state.level = clampLevel(o.level);
        if (MOODS.includes(o.mood)) state.mood = o.mood;
        if (typeof o.petId === 'string' && PET_REGISTRY[o.petId]) state.petId = o.petId;
      }
    } catch (e) { /* 忽略损坏数据 */ }
    // 瞬时情绪不应跨刷新保留
    if (state.mood !== 'idle' && state.mood !== 'sleep') state.mood = 'idle';
  }
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        growth: state.growth, level: state.level, mood: state.mood
      }));
    } catch (e) { /* 隐私模式等忽略 */ }
  }
  function clampLevel(l) { return Math.min(MAX_LEVEL, Math.max(1, Math.floor(l) || 1)); }
  function levelScale(l) { return [0.85, 1.0, 1.12][clampLevel(l) - 1] || 1; }

  // ================= 样式注入 =================
  function injectStyles() {
    if (styleInjected) return;
    const css = `
.pc-host{position:relative;width:100%;height:100%;min-height:280px;}
.pc-stage-3d{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;perspective:720px;}
.pc-parallax{position:relative;width:80%;height:80%;transform-style:preserve-3d;transition:transform .25s ease-out;will-change:transform;}
.pc-pet-wrap{position:relative;width:100%;height:100%;transform:translateX(var(--pc-stroll-x,0px)) scale(var(--pc-scale,1));transform-origin:50% 92%;transition:transform .55s cubic-bezier(.34,1.4,.64,1);}
.pc-pet-wrap.pc-enter{animation:pc-enter .9s cubic-bezier(.34,1.56,.64,1) both;}
.pc-breath{position:relative;width:100%;height:100%;transform-origin:50% 100%;}
.pc-imgbox{position:relative;width:100%;height:100%;}
.pc-sprite{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 10px 16px rgba(0,0,0,.28));transition:opacity .34s ease;user-select:none;-webkit-user-drag:none;pointer-events:none;}
.pc-fallback{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
.pc-fallback-circle{width:60%;height:60%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#8df0b8,#1f9e6e 70%,#127a52);box-shadow:0 12px 22px rgba(0,0,0,.28);animation:pc-breathe 3s ease-in-out infinite;}
.pc-shadow{position:absolute;bottom:5%;left:50%;width:48%;height:11%;transform:translateX(-50%);background:radial-gradient(ellipse at center,rgba(0,0,0,.45),rgba(0,0,0,0) 70%);border-radius:50%;filter:blur(2px);transition:transform .3s ease,opacity .3s ease;}
.pc-badge{position:absolute;top:6px;left:6px;display:flex;align-items:center;gap:6px;padding:4px 10px;border-radius:14px;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);color:#fff;font-size:12px;font-weight:800;box-shadow:0 2px 8px rgba(0,0,0,.18);z-index:3;}
.pc-badge-stage{color:#FFE9A8;}
.pc-badge-stars{color:#FFD24A;letter-spacing:1px;}
.pc-zzz{position:absolute;top:8%;right:14%;font-size:22px;color:#fff;opacity:.9;animation:pc-zzz 2.4s ease-in-out infinite;z-index:3;}
.pc-tip{position:absolute;top:34%;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:18px;background:rgba(0,168,150,.92);color:#fff;font-size:13px;font-weight:800;white-space:nowrap;opacity:0;transition:opacity .25s,transform .25s;z-index:4;pointer-events:none;}
.pc-tip.pc-show{opacity:1;transform:translateX(-50%) translateY(-6px);}

/* 情绪驱动的动画（位于不同的嵌套层，互不冲突） */
.pc-stage-3d[data-mood="idle"] .pc-breath{animation:pc-breathe 3.2s ease-in-out infinite;}
.pc-stage-3d[data-mood="sleep"] .pc-breath{animation:pc-breathe-slow 4.6s ease-in-out infinite;}
.pc-stage-3d[data-mood="celebrate"] .pc-breath{animation:pc-jump .9s ease-in-out 2;}
.pc-stage-3d[data-mood="celebrate"] .pc-shadow{animation:pc-shadow-jump .9s ease-in-out 2;}
.pc-stage-3d[data-mood="eat"] .pc-breath{animation:pc-nod .5s ease-in-out 3;}
.pc-stage-3d[data-mood="comfort"] .pc-breath{animation:pc-sway 2.6s ease-in-out infinite;}

@keyframes pc-enter{0%{transform:scale(0) translateY(42px);opacity:0;}60%{transform:scale(1.1) translateY(0);opacity:1;}100%{transform:scale(var(--pc-scale,1)) translateY(0);}}
@keyframes pc-breathe{0%,100%{transform:scaleY(1) translateY(0);}50%{transform:scaleY(1.045) translateY(-2%);}}
@keyframes pc-breathe-slow{0%,100%{transform:scaleY(.97) translateY(2%);}50%{transform:scaleY(1) translateY(0);}}
@keyframes pc-jump{0%,100%{transform:translateY(0) scale(1,1);}30%{transform:translateY(-26%) scale(.92,1.08);}55%{transform:translateY(0) scale(1.06,.94);}70%{transform:translateY(-10%) scale(.97,1.03);}}
@keyframes pc-shadow-jump{0%,100%{transform:translateX(-50%) scale(1);opacity:.45;}30%{transform:translateX(-50%) scale(.58);opacity:.2;}55%{transform:translateX(-50%) scale(1.12);opacity:.5;}70%{transform:translateX(-50%) scale(.84);opacity:.32;}}
@keyframes pc-nod{0%,100%{transform:translateY(0) rotate(0);}40%{transform:translateY(6%) rotate(-3deg);}70%{transform:translateY(2%) rotate(2deg);}}
@keyframes pc-sway{0%,100%{transform:rotate(-4deg) translateY(3%);}50%{transform:rotate(4deg) translateY(3%);}}
@keyframes pc-zzz{0%{transform:translateY(0) scale(.8);opacity:0;}30%{opacity:.95;}100%{transform:translateY(-22px) scale(1.1);opacity:0;}}

/* 骨骼动画：尾巴关节旋转层（仅 idle 挂载，情绪图自带尾巴时隐藏） */
.pc-rig-tail{z-index:2;will-change:transform;}
.pc-stage-3d[data-mood="idle"] .pc-rig-tail{animation:pc-tail-sway 3.6s ease-in-out infinite;}
@keyframes pc-tail-sway{0%,100%{transform:rotate(-5deg);}50%{transform:rotate(5deg);}}
/* 散步动作：步行摆动（叠加在 .pc-breath 上，须晚于 mood 规则以覆盖） */
.pc-breath.pc-walking{animation:pc-walk-bob .62s ease-in-out infinite!important;}
@keyframes pc-walk-bob{0%,100%{transform:translateY(0) rotate(-2deg);}25%{transform:translateY(-4.5%) rotate(0deg);}50%{transform:translateY(0) rotate(2deg);}75%{transform:translateY(-4.5%) rotate(0deg);}}

/* 无障碍：尊重「减少动态效果」 */
.pc-reduced .pc-breath,.pc-reduced .pc-shadow,.pc-reduced .pc-zzz,.pc-reduced .pc-fallback-circle{animation:none!important;}
.pc-reduced .pc-parallax{transition:none!important;}
.pc-reduced .pc-rig-tail{animation:none!important;}
`;
    const style = document.createElement('style');
    style.id = 'pc-styles';
    style.textContent = css;
    document.head.appendChild(style);
    styleInjected = true;
  }

  // ================= DOM 构建 =================
  function buildDOM(target) {
    target.innerHTML = '';
    target.classList.add('pc-host');

    const stage = document.createElement('div');
    stage.className = 'pc-stage-3d';

    const parallax = document.createElement('div');
    parallax.className = 'pc-parallax';

    const wrap = document.createElement('div');   // 等级体型缩放 + 入场弹性
    wrap.className = 'pc-pet-wrap';

    const breath = document.createElement('div');  // 呼吸 / 跳跃 / 点头 / 摇晃
    breath.className = 'pc-breath';

    const imgBox = document.createElement('div');
    imgBox.className = 'pc-imgbox';

    const fallback = document.createElement('div');
    fallback.className = 'pc-fallback';
    fallback.innerHTML = '<div class="pc-fallback-circle"></div>';
    fallback.style.display = 'none';

    imgBox.appendChild(fallback);
    breath.appendChild(imgBox);
    wrap.appendChild(breath);
    parallax.appendChild(wrap);
    stage.appendChild(parallax);

    const shadow = document.createElement('div');
    shadow.className = 'pc-shadow';
    stage.appendChild(shadow);

    const badge = document.createElement('div');
    badge.className = 'pc-badge';
    stage.appendChild(badge);

    const zzz = document.createElement('div');
    zzz.className = 'pc-zzz';
    zzz.textContent = '💤';
    zzz.style.display = 'none';
    stage.appendChild(zzz);

    const tip = document.createElement('div');
    tip.className = 'pc-tip';
    stage.appendChild(tip);

    target.appendChild(stage);

    dom = { target, stage, parallax, wrap, breath, imgBox, fallback, shadow, badge, zzz, tip, currentImg: null, rigTail: null };
  }

  // ================= 精灵切换（交叉淡入，无硬切） =================
  function spriteUrl(mood) {
    if (cfg.assets && cfg.assets[mood]) return cfg.assets[mood];
    const pet = PET_REGISTRY[state.petId] || PET_REGISTRY[DEFAULT_PET];
    const root = cfg.assetsRoot || DEFAULT_ASSET_ROOT;
    return root + '/' + (pet[mood] || pet.idle);
  }

  // 切换伙伴形象（保持成长值/等级/当前情绪）
  function setPet(petId) {
    if (!PET_REGISTRY[petId]) petId = DEFAULT_PET;
    const changed = state.petId !== petId;
    state.petId = petId;
    save();
    if (changed && dom.imgBox) {
      swapSprite(state.mood);           // 交叉淡入新形象
      dom.wrap.classList.add('pc-enter'); // 弹性入场
      setTimeout(() => dom.wrap.classList.remove('pc-enter'), 950);
    }
    return state.petId;
  }
  function getPet() { return state.petId; }
  function petName() { return (PET_REGISTRY[state.petId] || {}).name || '伙伴'; }

  function showFallback(badImg) {
    if (badImg && badImg.parentNode) badImg.style.display = 'none';
    dom.fallback.style.display = 'flex';
  }

  function swapSprite(mood) {
    const url = spriteUrl(mood);
    const next = document.createElement('img');
    next.className = 'pc-sprite';
    next.alt = '宠物伙伴';
    next.setAttribute('role', 'img');
    next.style.opacity = '0';
    let ok = false;
    next.onerror = () => { if (!ok) showFallback(next); };
    next.onload = () => {
      ok = true;
      if (dom.currentImg && dom.currentImg !== next) {
        const old = dom.currentImg;
        old.style.opacity = '0';
        setTimeout(() => { if (old.parentNode) old.parentNode.removeChild(old); }, 360);
      }
      next.style.opacity = '1';
      dom.currentImg = next;
      dom.fallback.style.display = 'none';
      syncRigTail(mood);
    };
    next.src = url;
    dom.imgBox.appendChild(next);
    // 兜底：若 5s 内既未加载成功也未触发 error（如被拦截），显示占位
    setTimeout(() => {
      if (!ok && next.parentNode && next.naturalWidth === 0) showFallback(next);
    }, 5000);
  }

  // ================= 骨骼动画层：尾巴（仅 idle；情绪图自带尾巴时淡出） =================
  function syncRigTail(mood) {
    if (!dom.imgBox) return;
    const pet = PET_REGISTRY[state.petId];
    if (pet && pet.rigTail && mood === 'idle') {
      if (dom.rigTail && dom.rigTail._mood === 'idle') return;
      if (dom.rigTail && dom.rigTail.parentNode) dom.rigTail.parentNode.removeChild(dom.rigTail);
      const t = document.createElement('img');
      t.className = 'pc-sprite pc-rig-tail';
      t.alt = '';
      t.draggable = false;
      t.style.transformOrigin = pet.rigPivot || '65% 83%';
      t.style.opacity = '0';
      t.onload = () => { t.style.opacity = '1'; };
      t.onerror = () => { if (t.parentNode) t.parentNode.removeChild(t); };
      t._mood = 'idle';
      t.src = (cfg.assetsRoot || DEFAULT_ASSET_ROOT) + '/' + pet.rigTail;
      dom.imgBox.appendChild(t);
      dom.rigTail = t;
    } else if (dom.rigTail) {
      const t = dom.rigTail;
      dom.rigTail = null;
      t.style.opacity = '0';
      setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 360);
    }
  }

  // ================= 散步动作（随机溜达，方向翻转 + 步行摆动） =================
  let walkTimer = null;
  let strolling = false;
  function scheduleStroll() {
    if (walkTimer) clearTimeout(walkTimer);
    if (reduced) return;
    walkTimer = setTimeout(stroll, 15000 + Math.random() * 18000);
  }
  function stroll() {
    walkTimer = null;
    if (document.hidden || state.mood !== 'idle' || !dom.stage || !dom.imgBox) { scheduleStroll(); return; }
    const dir = Math.random() < 0.5 ? -1 : 1;
    const dist = 34 + Math.random() * 42;
    strolling = true;
    dom.imgBox.style.transition = 'transform .3s ease';
    dom.imgBox.style.transform = dir < 0 ? 'scaleX(-1)' : 'scaleX(1)';
    dom.wrap.style.transition = 'transform 2.4s ease-in-out';
    dom.wrap.style.setProperty('--pc-stroll-x', (dir * dist) + 'px');
    dom.breath.classList.add('pc-walking');
    setTimeout(endStroll, 2600 + Math.random() * 1800);
  }
  function endStroll() {
    if (!strolling) return;
    strolling = false;
    if (dom.imgBox) dom.imgBox.style.transform = 'scaleX(1)';
    if (dom.wrap) { dom.wrap.style.transition = ''; dom.wrap.style.setProperty('--pc-stroll-x', '0px'); }
    if (dom.breath) dom.breath.classList.remove('pc-walking');
    scheduleStroll();
  }

  // ================= 徽章 / 体型 =================
  function updateBadge() {
    const lvl = clampLevel(state.level);
    const stars = '★'.repeat(lvl);
    dom.badge.innerHTML =
      `<span class="pc-badge-stage">${STAGE_NAMES[lvl] || '幼年'}</span>` +
      `<span class="pc-badge-stars">${stars}</span>`;
  }
  function updateScale() {
    dom.wrap.style.setProperty('--pc-scale', String(levelScale(state.level)));
  }
  function updateZzz() {
    dom.zzz.style.display = state.mood === 'sleep' ? 'block' : 'none';
  }
  function restartMood() {
    // 通过重设 data-mood 强制动画重启（含同情绪重复触发）
    dom.stage.setAttribute('data-mood', 'reset');
    void dom.stage.offsetWidth;
    dom.stage.setAttribute('data-mood', state.mood);
  }

  // ================= 情绪应用 =================
  function applyMood(mood, opts) {
    opts = opts || {};
    if (!MOODS.includes(mood)) mood = 'idle';
    if (moodTimer) { clearTimeout(moodTimer); moodTimer = null; }
    state.mood = mood;
    save();
    // 未挂载时（如页面首屏答题先于 mount）仅记录状态，挂载后会自动渲染
    if (!dom.stage || !dom.imgBox) {
      if (!opts.silent && typeof cfg.onMoodChange === 'function') cfg.onMoodChange(mood);
      return;
    }
    endStroll();
    swapSprite(mood);
    updateZzz();
    restartMood();
    if (!opts.silent && typeof cfg.onMoodChange === 'function') cfg.onMoodChange(mood);
    const back = MOOD_RETURN_MS[mood];
    if (back) {
      moodTimer = setTimeout(() => {
        if (state.mood === mood) setMood('idle');
      }, back);
    }
  }

  // ================= 闲置监测（30s → sleep） =================
  function resetIdle() {
    if (idleTimer) clearTimeout(idleTimer);
    if (!cfg.autoSleep || !dom.stage) return;
    idleTimer = setTimeout(() => {
      if (state.mood !== 'sleep') setMood('sleep');
    }, cfg.sleepAfterMs);
  }

  // ================= 交互事件 =================
  function bindEvents() {
    const stage = dom.stage;
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      const max = 13;
      dom.parallax.style.transform = `rotateY(${cx * max}deg) rotateX(${-cy * max}deg)`;
    };
    const onLeave = () => { dom.parallax.style.transform = 'rotateY(0deg) rotateX(0deg)'; };
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    // 点击/触摸唤醒（不计入 parallax 鼠标移动，避免 hover 阻止睡眠）
    stage.addEventListener('pointerdown', () => {
      resetIdle();
      if (state.mood === 'sleep') setMood('idle');
    });
  }

  function tip(text) {
    if (!dom.tip) return;
    dom.tip.textContent = text;
    dom.tip.classList.add('pc-show');
    clearTimeout(dom.tip._t);
    dom.tip._t = setTimeout(() => dom.tip.classList.remove('pc-show'), 1200);
  }

  // ================= 公开 API =================
  function mount(options) {
    options = options || {};
    if (typeof options === 'string') options = { target: options };
    const target = typeof options.target === 'string'
      ? document.querySelector(options.target)
      : (options.target || null);
    if (!target) {
      console.warn('[PetCompanion] 未找到挂载目标，请检查 target 配置。');
      return api;
    }
    cfg.target = target;
    cfg.assetsRoot = options.assetsRoot || DEFAULT_ASSET_ROOT;
    cfg.assets = options.assets || null;
    cfg.feedCost = options.feedCost || 0;
    cfg.onConsume = typeof options.onConsume === 'function' ? options.onConsume : null;
    cfg.onLevelUp = typeof options.onLevelUp === 'function' ? options.onLevelUp : null;
    cfg.onMoodChange = typeof options.onMoodChange === 'function' ? options.onMoodChange : null;
    cfg.sleepAfterMs = typeof options.sleepAfterMs === 'number' ? options.sleepAfterMs : SLEEP_AFTER_MS;
    cfg.autoSleep = options.autoSleep !== false;

    reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    injectStyles();
    load();
    buildDOM(target);
    if (reduced) dom.stage.classList.add('pc-reduced');
    updateBadge();
    updateScale();
    // 入场弹性 bounce
    dom.wrap.classList.add('pc-enter');
    setTimeout(() => dom.wrap.classList.remove('pc-enter'), 950);
    applyMood(state.mood, { silent: true });
    bindEvents();
    resetIdle();
    scheduleStroll();
    return api;
  }

  function setMood(mood) {
    resetIdle();
    applyMood(mood);
    return state.mood;
  }

  // 喂食：feed(cost, onConsume) 或 feed({cost, onConsume})
  // 契约：onConsume(cost) 返回 true 表示扣费成功；返回 false/抛错则不消耗并提示。
  function feed(cost, onConsume) {
    if (cost && typeof cost === 'object') {
      onConsume = cost.onConsume;
      cost = cost.cost || 0;
    }
    cost = (typeof cost === 'number') ? cost : (cfg.feedCost || 0);
    onConsume = (typeof onConsume === 'function') ? onConsume : cfg.onConsume;
    let allowed = true;
    if (typeof onConsume === 'function') {
      try { allowed = onConsume(cost) !== false; } catch (e) { allowed = false; }
    }
    if (!allowed) {
      tip('金币不足 💰');
      return false;
    }
    resetIdle();
    applyMood('eat');
    addGrowth(FEED_GROWTH);   // 喂食也滋养成长
    return true;
  }

  // 成长值：由外部（答题正确等）调用
  function addGrowth(n) {
    n = Number(n) || 0;
    const from = state.level;
    state.growth += n;
    const newLevel = clampLevel(Math.floor(state.growth / GROWTH_PER_LEVEL) + 1);
    if (newLevel > from) {
      state.level = newLevel;
      if (dom.badge) updateBadge();
      if (dom.wrap) updateScale();   // 体型放大（带过渡）
      applyMood('celebrate');        // 升级庆祝
      if (typeof cfg.onLevelUp === 'function') cfg.onLevelUp(state.level, from);
    }
    save();
    resetIdle();
    return state.level;
  }

  function getGrowth() { return state.growth; }
  function getLevel() { return state.level; }
  function getMood() { return state.mood; }

  function reset() {
    state = { growth: 0, level: 1, mood: 'idle', petId: state.petId || DEFAULT_PET };
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    updateBadge();
    updateScale();
    applyMood('idle', { silent: true });
    return api;
  }

  const api = {
    mount, setMood, feed, addGrowth,
    getGrowth, getLevel, getMood, reset,
    setPet, getPet, petName,
    version: '1.1.0'
  };
  return api;
})();

// 同时兼容 ESM 导入与全局 <script> 引入
if (typeof window !== 'undefined') window.PetCompanion = PetCompanion;
if (typeof module !== 'undefined' && module.exports) module.exports = PetCompanion;

export default PetCompanion;
export { PetCompanion };
