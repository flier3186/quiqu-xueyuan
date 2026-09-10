// math-data-core.js · 数学题库核心（空壳）
window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_LOADED_GRADES = window.MATH_LOADED_GRADES || {};

// 年级加载状态
window.GRADE_ORDER = ['2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b'];

// 年级文件名映射
window.GRADE_FILES = {
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
