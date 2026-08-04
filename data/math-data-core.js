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
window.loadGrade = function(grade) {
  if (!grade || !window.GRADE_FILES[grade]) return Promise.resolve();
  // 检查是否已加载（window 或本地变量）
  if ((window.MATH_BY_GRADE && window.MATH_BY_GRADE[grade]) ||
      (typeof MATH_BY_GRADE !== 'undefined' && MATH_BY_GRADE[grade])) {
    return Promise.resolve(); // 已加载
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `data/${window.GRADE_FILES[grade]}`;
    script.onload = () => {
      // 同步到本地变量（如果存在）
      if (typeof MATH_BY_GRADE !== 'undefined' && window.MATH_BY_GRADE && window.MATH_BY_GRADE[grade]) {
        MATH_BY_GRADE[grade] = window.MATH_BY_GRADE[grade];
      }
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${grade}`));
    document.head.appendChild(script);
  });
};

// 预加载函数（后台预加载）
window.preloadGrade = function(grade) {
  loadGrade(grade).catch(() => {});
};

// 获取已加载的年级
window.getLoadedGrades = function() {
  return window.MATH_LOADED_GRADES || {};
};
