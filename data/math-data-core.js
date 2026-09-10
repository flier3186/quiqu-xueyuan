// math-data-core.js · 数学题库核心（空壳）
window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_LOADED_GRADES = window.MATH_LOADED_GRADES || {};

// 年级加载状态
// P0-1 修复：GRADE_ORDER 补上 '2a'。此前它从 '2b' 开始，且全项目无人引用（死配置），
// 导致任何"按 GRADE_ORDER 遍历"的实现都会漏掉二年级上册。
window.GRADE_ORDER = ['2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b'];

// 年级文件名映射
// P0-1 修复：补 '2a'。此前 2a 不在表内 → loadGrade('2a') 直接 resolve(false)，
// 二年级上册只能吃 math-2a-2b.js 里的 12 道兜底题，且永不会被更全的文件替换。
window.GRADE_FILES = {
  '2a': 'math-data-2a.js',
  '2b': 'math-data-2b.js',
  '3a': 'math-data-3a.js',
  '3b': 'math-data-3b.js',
  '4a': 'math-data-4a.js',
  '4b': 'math-data-4b.js',
  '5a': 'math-data-5a.js',
  '5b': 'math-data-5b.js',
  '6a': 'math-data-6a.js',
  '6b': 'math-data-6b.js',
  '7a': 'math-data-7a.js',
  '7b': 'math-data-7b.js',
  '8a': 'math-data-8a.js',
  '8b': 'math-data-8b.js',
  '9a': 'math-data-9a.js',
  '9b': 'math-data-9b.js'
};

// 懒加载函数
// 2026-09-10 修复（P0）：旧版用「MATH_BY_GRADE[grade] 键是否存在」判断是否已加载，
// 而 index.html 内联了一份每册仅 6 题的占位题库，键天然存在 →
// loadGrade() 直接 return，真实教材题库（3a~6b 共 898 题）**从未被加载过**。
// 孩子的实际体验就是：每册只有 6 道题，做着做着重复、还没做几题就回到第 1 题。
// 改为以 MATH_LOADED_GRADES 为准，只有脚本真正 onload 过才算已加载。
window.MATH_LOADING = window.MATH_LOADING || {};
window.MATH_LOAD_FAILED = window.MATH_LOAD_FAILED || {};

// ===== visualData 字段归一化（P2-8）=====
// 题库历史遗留两套同义字段，都表示"这一段的数量"：
//   val   —— 3b~6b 主流写法（约 757 处）
//   value —— 2a/2b/3a 写法（约 369 处）
// 实测这两个键**只出现在 parts / bars / points 三种数组项**上（已逐文件按数组键归类核对）。
// 读取方此前各自写 `p.val != null ? p.val : p.value`，散落 20+ 处，新代码极易漏一处 → 上屏 "undefined"。
// 现在统一在**入口**把输入格式收敛成唯一输出格式 val，下游只认 val。
window.MATH_VD_CANON_KEYS = ['parts', 'bars', 'points'];

window.normVisualData = function (data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return data;
  var out = null;
  for (var ki = 0; ki < window.MATH_VD_CANON_KEYS.length; ki++) {
    var k = window.MATH_VD_CANON_KEYS[ki];
    var arr = data[k];
    if (!Array.isArray(arr) || !arr.length) continue;
    var any = false;
    var mapped = arr.map(function (it) {
      if (!it || typeof it !== 'object' || Array.isArray(it)) return it;
      var hasVal = it.val != null, hasValue = it.value != null;
      if (!hasVal && hasValue) {
        any = true;
        var o = Object.assign({}, it); o.val = o.value; delete o.value; return o;
      }
      if (hasVal && hasValue) {
        any = true;
        var o2 = Object.assign({}, it); delete o2.value; return o2;
      }
      return it;
    });
    if (any) {
      if (!out) out = Object.assign({}, data);
      out[k] = mapped;
    }
  }
  return out || data;
};

// 年级数据补丁（P2-7 修复）
// 背景：index.html 原先把 data/math-3-6-extend.js 的 41 道扩展题 concat 进"内联占位对象"，
// 但 loadGrade() 注入的 math-data-<册>.js 会执行 `window.MATH_BY_GRADE["3a"] = {...}`
// ——整体覆盖，扩展题当场被冲掉（实测 hasProbe=false）。这 41 题从来没进过孩子的视野。
// 现改为"登记补丁 + 在册文件加载完成后合并"，并按题干去重。
window.MATH_GRADE_PATCH = window.MATH_GRADE_PATCH || {};
window.applyGradePatch = function(grade) {
  const patches = window.MATH_GRADE_PATCH[grade];
  if (!patches || !patches.length) return 0;
  const d = window.MATH_BY_GRADE && window.MATH_BY_GRADE[grade];
  if (!d) return 0;
  if (!Array.isArray(d.problems)) d.problems = [];
  const seen = new Set(d.problems.map((p) => String(p.question || '').trim()));
  let added = 0;
  for (const p of patches) {
    const q = String(p.question || '').trim();
    if (!q || seen.has(q)) continue;
    seen.add(q);
    d.problems.push(p);
    added++;
  }
  return added;
};

window.loadGrade = function(grade) {
  if (!grade || !window.GRADE_FILES[grade]) return Promise.resolve(false);
  if (window.MATH_LOADED_GRADES[grade]) return Promise.resolve(true);
  if (window.MATH_LOAD_FAILED[grade]) return Promise.resolve(false);
  if (window.MATH_LOADING[grade]) return window.MATH_LOADING[grade];   // 去重：并发调用共用同一个请求

  return (window.MATH_LOADING[grade] = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'data/' + window.GRADE_FILES[grade];
    script.onload = () => {
      window.MATH_LOADED_GRADES[grade] = true;
      // 同步到本地变量（如果存在同名局部变量遮蔽了 window）
      if (typeof MATH_BY_GRADE !== 'undefined' && window.MATH_BY_GRADE && window.MATH_BY_GRADE[grade]) {
        MATH_BY_GRADE[grade] = window.MATH_BY_GRADE[grade];
      }
      // 合并扩展题（必须在 clearCache 之前，否则净化池拿不到新题）
      try { window.applyGradePatch(grade); } catch (e) {}
      delete window.MATH_LOADING[grade];
      // 数据换了 → 净化池缓存必须失效
      try { if (window.MathDailyBank && MathDailyBank.clearCache) MathDailyBank.clearCache(); } catch (e) {}
      resolve(true);
    };
    script.onerror = () => {
      window.MATH_LOAD_FAILED[grade] = true;
      delete window.MATH_LOADING[grade];
      resolve(false);   // 不 reject，避免调用方产生未捕获的 promise 异常
    };
    document.head.appendChild(script);
  }));
};

// 预加载函数（后台预加载）
window.preloadGrade = function(grade) {
  loadGrade(grade).catch(() => {});
};

// 获取已加载的年级
window.getLoadedGrades = function() {
  return window.MATH_LOADED_GRADES || {};
};
