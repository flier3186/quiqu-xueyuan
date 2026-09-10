// math-data-2a.js · 二年级上册（人教版 2024 版新教材）
// P0-1 修复：此前 2a 只存在于 math-2a-2b.js 的兜底分支（仅 12 题），且不在 GRADE_FILES 中，
// 因此二年级上册「一整个学期」做题量不足一天（MATH_DAILY_COUNT=14），且永不会被更全的文件替换。
// 本文件为 2a 的正式题库，字段与 math-data-3a.js 完全同构（含 discoverySteps / explainLayers），
// 由 loadGrade('2a') 懒加载后覆盖 MATH_BY_GRADE['2a']。
//
// 字段约定（与全库一致，勿混用）：
//   - parts/bars 内的数值统一用 value（MathVisualV5.render 会归一成 val）
//   - visualData.type 必须显式给出，否则会被 barModel 母版的关键词误抢
window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["2a"] = {
  "title": "二年级上册·表内乘法与长度单位",
  "sub": "数与代数 · 图形与几何 · 综合实践",
  "progress": 0,
  "units": [
    { "name": "长度单位", "level": "current", "children": [
      { "name": "认识厘米", "level": "current" },
      { "name": "认识米", "level": "locked" },
      { "name": "线段", "level": "locked" },
      { "name": "长度单位换算", "level": "locked" } ] },
    { "name": "100以内的加法和减法（二）", "level": "locked", "children": [
      { "name": "不进位加", "level": "locked" },
      { "name": "进位加", "level": "locked" },
      { "name": "不退位减", "level": "locked" },
      { "name": "退位减", "level": "locked" },
      { "name": "连加连减", "level": "locked" },
      { "name": "解决问题", "level": "locked" } ] },
    { "name": "角的初步认识", "level": "locked", "children": [
      { "name": "认识角", "level": "locked" },
      { "name": "直角", "level": "locked" },
      { "name": "锐角钝角", "level": "locked" } ] },
    { "name": "表内乘法（一）", "level": "locked", "children": [
      { "name": "乘法的初步认识", "level": "locked" },
      { "name": "2~6的乘法口诀", "level": "locked" },
      { "name": "用乘法解决问题", "level": "locked" } ] },
    { "name": "观察物体（一）", "level": "locked", "children": [
      { "name": "从不同位置观察", "level": "locked" } ] },
    { "name": "表内乘法（二）", "level": "locked", "children": [
      { "name": "7的乘法口诀", "level": "locked" },
      { "name": "8的乘法口诀", "level": "locked" },
      { "name": "9的乘法口诀", "level": "locked" },
      { "name": "用乘法解决问题（二）", "level": "locked" } ] },
    { "name": "认识时间", "level": "locked", "children": [
      { "name": "认识几时几分", "level": "locked" },
      { "name": "1时=60分", "level": "locked" },
      { "name": "时间的计算", "level": "locked" } ] },
    { "name": "数学广角——搭配（一）", "level": "locked", "children": [
      { "name": "简单的排列", "level": "locked" },
      { "name": "简单的组合", "level": "locked" } ] }
  ],
  "problems": [
    // ================= 第一单元 · 长度单位 =================
    { "id": "2A-LEN-01", "knowledge": "认识厘米", "difficulty": 1,
      "scene": "数学课上，小明用尺子量一支铅笔。他把铅笔的左端对着尺子的 0 刻度，右端正好对着 8 刻度。",
      "question": "这支铅笔长多少厘米？",
      "formula": "8 - 0 = ?", "answer": 8, "choices": [8, 6, 9, 10],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 10, "points": [ { "pos": 0, "label": "0", "color": "#2570E8" }, { "pos": 8, "label": "8", "color": "#FB923C" } ], "highlight": [0, 8] },
      "hint": "物体左端对着 0 刻度，右端对着几，就是几厘米",
      "variants": [
        { "question": "铅笔从 0 刻度量到 6 刻度，长几厘米？", "formula": "6 - 0 = ?", "answer": 6, "hint": "数一数从 0 到 6 有几个大格" },
        { "question": "铅笔从 0 刻度量到 12 刻度，长几厘米？", "formula": "12 - 0 = ?", "answer": 12, "hint": "数到第 12 个刻度" } ],
      "discoverySteps": [
        { "q": "📏 铅笔的左端对着尺子的哪个刻度？", "choices": ["0 刻度", "8 刻度", "1 刻度", "不知道"], "answer": "0 刻度", "explain": "左端对着 0 刻度，读数才准" },
        { "q": "📏 铅笔的右端对着哪个刻度？", "choices": ["8 刻度", "0 刻度", "6 刻度", "不知道"], "answer": "8 刻度", "explain": "右端正好对着 8 刻度" },
        { "q": "🧩 这支铅笔长几厘米？", "choices": ["8 厘米", "6 厘米", "9 厘米", "10 厘米"], "answer": "8 厘米", "explain": "从 0 读到 8，就是 8 厘米" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "把铅笔放在数线上，左端对 0、右端对 8", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 测量方法", "text": "左端对齐 0 刻度，右端对着几就是几厘米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 通用规律", "text": "量长度三步：对齐 0 → 看右端 → 读数", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-LEN-02", "knowledge": "认识厘米", "difficulty": 1,
      "scene": "小华量了一块橡皮的长度：左端对 0 刻度，右端对 4 刻度。",
      "question": "这块橡皮长多少厘米？",
      "formula": "4 - 0 = ?", "answer": 4, "choices": [4, 3, 5, 6],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 6, "points": [ { "pos": 0, "label": "0", "color": "#2570E8" }, { "pos": 4, "label": "4", "color": "#FB923C" } ], "highlight": [0, 4] },
      "hint": "右端对着 4 刻度，就是 4 厘米",
      "variants": [
        { "question": "橡皮从 0 量到 5 刻度，长几厘米？", "formula": "5 - 0 = ?", "answer": 5, "hint": "看右端刻度" },
        { "question": "回形针从 0 量到 2 刻度，长几厘米？", "formula": "2 - 0 = ?", "answer": 2, "hint": "看右端刻度" } ],
      "discoverySteps": [
        { "q": "📏 橡皮的左端对着几刻度？", "choices": ["0 刻度", "4 刻度", "6 刻度", "不知道"], "answer": "0 刻度", "explain": "左端对着 0" },
        { "q": "📏 橡皮的右端对着几刻度？", "choices": ["4 刻度", "0 刻度", "5 刻度", "不知道"], "answer": "4 刻度", "explain": "右端对着 4" },
        { "q": "🧩 橡皮长几厘米？", "choices": ["4 厘米", "3 厘米", "5 厘米", "6 厘米"], "answer": "4 厘米", "explain": "从 0 读到 4 是 4 厘米" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "数线上 0 到 4 这一段的长度就是橡皮的长度", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 起点要在 0", "text": "只有左端对着 0，右端的刻度才是长度", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 估一估", "text": "文具盒约 20 厘米、课桌约 70 厘米，心里要有参照物", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-LEN-03", "knowledge": "认识米", "difficulty": 1,
      "scene": "教室的门高 1 米多一点。老师说：1 米还可以用更小的单位「厘米」来表示。",
      "question": "1 米等于多少厘米？",
      "formula": "1 米 = ? 厘米", "answer": 100, "choices": [100, 10, 60, 1000],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 100, "bars": [ { "label": "1 米", "value": 100, "color": "#2570E8" } ] },
      "hint": "1 米 = 100 厘米，这是长度单位的进率",
      "variants": [
        { "question": "2 米等于多少厘米？", "formula": "100 × 2 = ?", "answer": 200, "hint": "1 米 100 厘米，2 米就是 2 个 100" },
        { "question": "5 米等于多少厘米？", "formula": "100 × 5 = ?", "answer": 500, "hint": "5 个 100 厘米" } ],
      "discoverySteps": [
        { "q": "📖 1 米等于多少厘米？", "choices": ["100 厘米", "10 厘米", "60 厘米", "1000 厘米"], "answer": "100 厘米", "explain": "米和厘米的进率是 100" },
        { "q": "🔢 1 米用厘米表示，是几个 100？", "choices": ["1 个 100", "2 个 100", "10 个 100", "不知道"], "answer": "1 个 100", "explain": "1 米 = 100 厘米" },
        { "q": "🧩 2 米等于多少厘米？", "choices": ["200 厘米", "102 厘米", "20 厘米", "2000 厘米"], "answer": "200 厘米", "explain": "2 个 100 是 200" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "换单位时，数的多少变了，但实际长度不变", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 进率 100", "text": "1 米 = 100 厘米，米换成厘米要乘 100", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 先想进率再换算", "text": "米↔厘米乘除 100，米↔千米乘除 1000", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-LEN-04", "knowledge": "认识米", "difficulty": 2,
      "scene": "爸爸量客厅的墙，量出 3 米；妈妈量门，量出 200 厘米。他们想知道墙比门高多少厘米。",
      "question": "墙比门高多少厘米？",
      "formula": "300 - 200 = ?", "answer": 100, "choices": [100, 1, 10, 500],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 300, "bars": [ { "label": "墙 3 米=300 厘米", "value": 300, "color": "#2570E8" }, { "label": "门 200 厘米", "value": 200, "color": "#F5B800" } ] },
      "hint": "先把单位统一成厘米：3 米 = 300 厘米，再相减",
      "variants": [
        { "question": "4 米比 150 厘米多多少厘米？", "formula": "400 - 150 = ?", "answer": 250, "hint": "4 米 = 400 厘米" },
        { "question": "5 米比 250 厘米多多少厘米？", "formula": "500 - 250 = ?", "answer": 250, "hint": "5 米 = 500 厘米" } ],
      "discoverySteps": [
        { "q": "📖 3 米等于多少厘米？", "choices": ["300 厘米", "30 厘米", "3 厘米", "3000 厘米"], "answer": "300 厘米", "explain": "3 个 100 是 300" },
        { "q": "🔢 现在两根彩条分别是多少厘米？", "choices": ["300 和 200", "3 和 200", "300 和 20", "不知道"], "answer": "300 和 200", "explain": "单位统一后比较才正确" },
        { "q": "🧩 求相差多少用什么方法？", "choices": ["减法", "加法", "乘法", "除法"], "answer": "减法", "explain": "相差 = 多的一根 - 少的一根" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "两根彩条一长一短，长度差就是答案", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 单位要统一", "text": "不同单位的数不能直接加减，先换成同一单位", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 比长短三步", "text": "统一单位 → 比较 → 求差", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-LEN-05", "knowledge": "线段", "difficulty": 1,
      "scene": "老师在黑板上画了一条线段 AB，A 和 B 是两个端头。",
      "question": "一条线段有几个端点？",
      "formula": "端点个数 = ?", "answer": 2, "choices": [2, 1, 3, 0],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 8, "points": [ { "pos": 0, "label": "端点 A", "color": "#FB923C" }, { "pos": 8, "label": "端点 B", "color": "#FB923C" } ], "highlight": [0, 8] },
      "hint": "线段有两个端头，可以量出长度",
      "variants": [
        { "question": "一条线段可以把两端继续延长吗？", "formula": "线段能无限延长吗？", "answer": "不能", "hint": "两头都有端点，延长不了" },
        { "question": "两点之间画线段，能画出几条？", "formula": "过两点的线段 = ?", "answer": 1, "hint": "两点之间只有一条线段" } ],
      "discoverySteps": [
        { "q": "👀 图中线段的两头有什么？", "choices": ["两个端点", "一个端点", "没有端点", "虚线"], "answer": "两个端点", "explain": "线段两头都有端点" },
        { "q": "🔢 数一数，一共有几个端点？", "choices": ["2 个", "1 个", "3 个", "0 个"], "answer": "2 个", "explain": "A、B 两个" },
        { "q": "🧩 线段和直线最大的区别是什么？", "choices": ["线段有两个端点，长度有限", "线段没有端点", "线段是弯的", "线段可以无限长"], "answer": "线段有两个端点，长度有限", "explain": "有端点、能测量，这就是线段" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "一条直直的线，两头各有一个端点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 线段特征", "text": "直、有两个端点、可以量出长度", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 生活中的线段", "text": "铅笔、直尺、桌边都可以看成线段", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-LEN-06", "knowledge": "长度单位换算", "difficulty": 2,
      "scene": "体育课上量跳绳。老师说这根跳绳长 1 米 20 厘米，小明想把它全部换成厘米来记录。",
      "question": "1 米 20 厘米等于多少厘米？",
      "formula": "100 + 20 = ?", "answer": 120, "choices": [120, 102, 21, 1200],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 120, "parts": [ { "value": 100, "label": "1 米", "color": "#2570E8" }, { "value": 20, "label": "20 厘米", "color": "#FB923C" } ] },
      "hint": "1 米 = 100 厘米，再加 20 厘米",
      "variants": [
        { "question": "1 米 5 厘米等于多少厘米？", "formula": "100 + 5 = ?", "answer": 105, "hint": "100 加 5" },
        { "question": "2 米 30 厘米等于多少厘米？", "formula": "200 + 30 = ?", "answer": 230, "hint": "2 米 = 200 厘米" } ],
      "discoverySteps": [
        { "q": "📖 1 米等于多少厘米？", "choices": ["100 厘米", "10 厘米", "12 厘米", "不知道"], "answer": "100 厘米", "explain": "1 米 = 100 厘米" },
        { "q": "🔢 20 厘米是多余出来的部分吗？", "choices": ["是，要加上去", "不用管", "要减掉", "不知道"], "answer": "是，要加上去", "explain": "1 米 20 厘米 = 100 + 20" },
        { "q": "🧩 一共多少厘米？", "choices": ["120 厘米", "102 厘米", "21 厘米", "1200 厘米"], "answer": "120 厘米", "explain": "100 + 20 = 120" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 120 厘米分成「1 米」和「20 厘米」两部分", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 复名数换算", "text": "几米几厘米 = 几百厘米 + 几厘米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 先拆再合", "text": "把大单位拆成小单位，再相加", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },
    // ================= 第二单元 · 100 以内的加法和减法（二） =================
    { "id": "2A-ADD-01", "knowledge": "不进位加", "difficulty": 1,
      "scene": "图书角原来有 23 本书，同学们又捐来 45 本。",
      "question": "现在图书角一共有多少本书？",
      "formula": "23 + 45 = ?", "answer": 68, "choices": [68, 58, 67, 78],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 68, "parts": [ { "value": 23, "label": "原有", "color": "#2570E8" }, { "value": 45, "label": "新捐", "color": "#F5B800" } ] },
      "hint": "个位 3+5=8，十位 2+4=6",
      "variants": [
        { "question": "34 + 25 = ?", "formula": "34 + 25 = ?", "answer": 59, "hint": "个位 4+5=9，十位 3+2=5" },
        { "question": "42 + 36 = ?", "formula": "42 + 36 = ?", "answer": 78, "hint": "个位 2+6=8，十位 4+3=7" } ],
      "discoverySteps": [
        { "q": "🔢 图书角原来有多少本？", "choices": ["23 本", "45 本", "68 本", "不知道"], "answer": "23 本", "explain": "原来有 23 本" },
        { "q": "🔢 又捐来多少本？", "choices": ["45 本", "23 本", "68 本", "不知道"], "answer": "45 本", "explain": "新捐 45 本" },
        { "q": "🧩 求一共用什么方法？", "choices": ["加法", "减法", "乘法", "除法"], "answer": "加法", "explain": "把两部分合起来用加法：23+45=68" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 68 分成「原有 23」和「新捐 45」两部分", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 相同数位相加", "text": "个位加个位，十位加十位", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 合并用加法", "text": "把几部分合起来 → 加法", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ADD-02", "knowledge": "进位加", "difficulty": 2,
      "scene": "二年级（1）班有 36 人，二年级（2）班有 27 人，两个班一起去看电影。",
      "question": "两个班一共有多少人？",
      "formula": "36 + 27 = ?", "answer": 63, "choices": [63, 53, 62, 64],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 63, "parts": [ { "value": 36, "label": "一班", "color": "#2570E8" }, { "value": 27, "label": "二班", "color": "#F5B800" } ] },
      "hint": "个位 6+7=13，满十要向十位进 1",
      "variants": [
        { "question": "48 + 35 = ?", "formula": "48 + 35 = ?", "answer": 83, "hint": "个位 8+5=13，进 1" },
        { "question": "29 + 46 = ?", "formula": "29 + 46 = ?", "answer": 75, "hint": "个位 9+6=15，进 1" } ],
      "discoverySteps": [
        { "q": "🔢 两个班各有多少人？", "choices": ["36 人和 27 人", "36 人和 17 人", "63 人和 27 人", "不知道"], "answer": "36 人和 27 人", "explain": "一班 36 人，二班 27 人" },
        { "q": "🧮 个位上 6 + 7 等于多少？", "choices": ["13", "12", "3", "不知道"], "answer": "13", "explain": "6+7=13，满十了" },
        { "q": "🧩 满十要怎么办？", "choices": ["向十位进 1", "直接写 13", "丢掉 1", "不知道"], "answer": "向十位进 1", "explain": "满十进一：写 3 进 1，十位 3+2+1=6，得 63" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 63 分成 36 和 27，两部分合起来", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 满十进一", "text": "个位相加满十，要向十位进 1", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 从个位算起", "text": "笔算加法永远从个位开始，满十进一", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ADD-03", "knowledge": "不退位减", "difficulty": 1,
      "scene": "停车场原来停了 76 辆车，开走了 23 辆。",
      "question": "停车场还剩多少辆车？",
      "formula": "76 - 23 = ?", "answer": 53, "choices": [53, 43, 54, 99],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 76, "parts": [ { "value": 23, "label": "开走", "color": "#FB923C" }, { "value": 53, "label": "还剩", "color": "#2570E8" } ] },
      "hint": "个位 6-3=3，十位 7-2=5",
      "variants": [
        { "question": "89 - 46 = ?", "formula": "89 - 46 = ?", "answer": 43, "hint": "个位 9-6=3，十位 8-4=4" },
        { "question": "68 - 35 = ?", "formula": "68 - 35 = ?", "answer": 33, "hint": "个位 8-5=3，十位 6-3=3" } ],
      "discoverySteps": [
        { "q": "🔢 原来有多少辆车？", "choices": ["76 辆", "23 辆", "53 辆", "不知道"], "answer": "76 辆", "explain": "原来有 76 辆" },
        { "q": "🔢 开走了多少辆？", "choices": ["23 辆", "76 辆", "53 辆", "不知道"], "answer": "23 辆", "explain": "开走 23 辆" },
        { "q": "🧩 求还剩用什么方法？", "choices": ["减法", "加法", "乘法", "除法"], "answer": "减法", "explain": "求剩余用减法：76-23=53" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 76 分成「开走 23」和「还剩 ?」", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 相同数位相减", "text": "个位减个位，十位减十位", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 求剩余用减法", "text": "整体 - 去掉的 = 剩下的", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ADD-04", "knowledge": "退位减", "difficulty": 2,
      "scene": "仓库里有 52 箱苹果，运走了 38 箱。",
      "question": "仓库里还剩多少箱苹果？",
      "formula": "52 - 38 = ?", "answer": 14, "choices": [14, 24, 16, 90],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 52, "parts": [ { "value": 38, "label": "运走", "color": "#FB923C" }, { "value": 14, "label": "还剩", "color": "#2570E8" } ] },
      "hint": "个位 2 不够减 8，要从十位借 1 当 10",
      "variants": [
        { "question": "63 - 27 = ?", "formula": "63 - 27 = ?", "answer": 36, "hint": "个位 3 不够减 7，借 1 当 10" },
        { "question": "41 - 25 = ?", "formula": "41 - 25 = ?", "answer": 16, "hint": "个位 1 不够减 5，借 1 当 10" } ],
      "discoverySteps": [
        { "q": "🔢 一共有多少箱？运走多少箱？", "choices": ["52 箱、38 箱", "38 箱、52 箱", "52 箱、14 箱", "不知道"], "answer": "52 箱、38 箱", "explain": "共 52 箱，运走 38 箱" },
        { "q": "🧮 个位上 2 减 8 够减吗？", "choices": ["不够，要借位", "够减", "得 6", "不知道"], "answer": "不够，要借位", "explain": "2 比 8 小，不够减" },
        { "q": "🧩 不够减时怎么办？", "choices": ["从十位借 1 当 10", "直接写 0", "交换位置", "不知道"], "answer": "从十位借 1 当 10", "explain": "退一当十：12-8=4，十位 4-3=1，得 14" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 52 分成「运走 38」和「还剩 ?」", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 退一当十", "text": "个位不够减，就从十位借 1 个十变成 10 个一", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 笔算减法口诀", "text": "数位对齐，从个位减起，不够就借", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ADD-05", "knowledge": "连加连减", "difficulty": 2,
      "scene": "妈妈买水果：苹果 18 个，橘子 24 个，香蕉 16 个，要装进一个果篮。",
      "question": "一个果篮一共装多少个水果？",
      "formula": "18 + 24 + 16 = ?", "answer": 58, "choices": [58, 48, 56, 68],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 58, "parts": [ { "value": 18, "label": "苹果", "color": "#2570E8" }, { "value": 24, "label": "橘子", "color": "#F5B800" }, { "value": 16, "label": "香蕉", "color": "#FB923C" } ] },
      "hint": "先算 18+24=42，再算 42+16",
      "variants": [
        { "question": "12 + 23 + 25 = ?", "formula": "12 + 23 + 25 = ?", "answer": 60, "hint": "先算 12+23=35，再加 25" },
        { "question": "20 + 35 + 18 = ?", "formula": "20 + 35 + 18 = ?", "answer": 73, "hint": "先算 20+35=55，再加 18" } ],
      "discoverySteps": [
        { "q": "🔢 三种水果各有多少个？", "choices": ["18、24、16", "18、24、26", "8、24、16", "不知道"], "answer": "18、24、16", "explain": "苹果 18、橘子 24、香蕉 16" },
        { "q": "🧮 先算哪两个？", "choices": ["18+24", "24+16", "18+16", "都可以，但要算完再加第三个"], "answer": "都可以，但要算完再加第三个", "explain": "连加按从左往右算" },
        { "q": "🧩 18 + 24 等于多少？", "choices": ["42", "32", "44", "不知道"], "answer": "42", "explain": "18+24=42，42+16=58" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 58 分成三部分：18、24、16", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 连加从左往右", "text": "先加前两个，再加第三个", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 换着加也一样", "text": "交换加数位置，和不变（可以凑整）", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ADD-06", "knowledge": "解决问题", "difficulty": 2,
      "scene": "小明收集了 25 张贴纸，小红比小明多 8 张。",
      "question": "小红有多少张贴纸？",
      "formula": "25 + 8 = ?", "answer": 33, "choices": [33, 17, 32, 35],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 33, "bars": [ { "label": "小明", "value": 25, "color": "#2570E8" }, { "label": "小红多 8 张", "value": 8, "color": "#F5B800" } ] },
      "hint": "小红比小明多，就在小明的基础上再加 8",
      "variants": [
        { "question": "小明 30 张，小红比他多 12 张，小红多少张？", "formula": "30 + 12 = ?", "answer": 42, "hint": "多几就加几" },
        { "question": "小明 18 张，小红比他多 15 张，小红多少张？", "formula": "18 + 15 = ?", "answer": 33, "hint": "多几就加几" } ],
      "discoverySteps": [
        { "q": "🔢 小明有多少张贴纸？", "choices": ["25 张", "8 张", "33 张", "不知道"], "answer": "25 张", "explain": "小明有 25 张" },
        { "q": "🔢 小红比小明多几张？", "choices": ["8 张", "25 张", "17 张", "不知道"], "answer": "8 张", "explain": "小红多 8 张" },
        { "q": "🧩 求「比一个数多几」的数，用什么方法？", "choices": ["加法", "减法", "乘法", "除法"], "answer": "加法", "explain": "多几就加几：25+8=33" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "两条彩条：小红那条比小明的长 8", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 比多关系", "text": "小红的 = 小明的 + 多出来的部分", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 看清谁多谁少", "text": "求多的那个用加法；求少的那个用减法", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    // ================= 第三单元 · 角的初步认识 =================
    { "id": "2A-ANG-01", "knowledge": "认识角", "difficulty": 1,
      "scene": "老师在黑板上画了一个角：两条边从同一个点出发。",
      "question": "一个角有几个顶点？",
      "formula": "顶点个数 = ?", "answer": 1, "choices": [1, 2, 3, 4],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "angle", "params": { "type": "acute", "degree": 50 } },
      "hint": "两条边相交的那个点就是顶点",
      "variants": [
        { "question": "角的两条边是从哪里出发的？", "formula": "角的边起点", "answer": "顶点", "hint": "同一个顶点" },
        { "question": "一个角有几条边？", "formula": "边的条数 = ?", "answer": 2, "hint": "两条边" } ],
      "discoverySteps": [
        { "q": "👀 图中两条边是从几个点出发的？", "choices": ["1 个点", "2 个点", "3 个点", "不知道"], "answer": "1 个点", "explain": "两条边从同一个点出发" },
        { "q": "🔢 这个共同出发的点叫什么？", "choices": ["顶点", "边", "端点", "不知道"], "answer": "顶点", "explain": "共同的出发点叫顶点" },
        { "q": "🧩 所以一个角有几个顶点？", "choices": ["1 个", "2 个", "3 个", "4 个"], "answer": "1 个", "explain": "一个角只有 1 个顶点" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "一个顶点 + 两条边，就是角", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 角的组成", "text": "角由 1 个顶点和 2 条边组成", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 生活中的角", "text": "剪刀、时钟的指针都能看到角", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ANG-02", "knowledge": "认识角", "difficulty": 1,
      "scene": "小明画了一个角，他想数一数这个角由几条边围成。",
      "question": "一个角有几条边？",
      "formula": "边的条数 = ?", "answer": 2, "choices": [2, 1, 3, 4],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "angle", "params": { "type": "obtuse", "degree": 120 } },
      "hint": "从顶点出发，伸出去两条边",
      "variants": [
        { "question": "三角形有几个角？", "formula": "角的个数 = ?", "answer": 3, "hint": "数三个顶点" },
        { "question": "长方形有几个角？", "formula": "角的个数 = ?", "answer": 4, "hint": "四个顶点各一个角" } ],
      "discoverySteps": [
        { "q": "👀 从顶点伸出几条边？", "choices": ["2 条", "1 条", "3 条", "不知道"], "answer": "2 条", "explain": "从顶点出发有两条边" },
        { "q": "🔢 这两条边都是直的吗？", "choices": ["都是直的", "一条弯", "都弯", "不知道"], "answer": "都是直的", "explain": "角的边是直的" },
        { "q": "🧩 一个角有几条边？", "choices": ["2 条", "1 条", "3 条", "4 条"], "answer": "2 条", "explain": "角有 1 个顶点、2 条边" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "顶点伸出的两条直直的边", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 边是直的", "text": "角的边必须是直的线段", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 张开越大角越大", "text": "角的大小看两条边张开的程度，与边的长短无关", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ANG-03", "knowledge": "直角", "difficulty": 1,
      "scene": "数学书的四个角都是直角。老师用三角尺的直角去比一比，正好完全重合。",
      "question": "一个直角是多少度？",
      "formula": "直角 = ? 度", "answer": 90, "choices": [90, 60, 100, 180],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "angle", "params": { "type": "right" } },
      "hint": "三角尺上那个最方的角就是直角，是 90 度",
      "variants": [
        { "question": "数学书封面的角是什么角？", "formula": "角的类型", "answer": "直角", "hint": "四个角都是直角" },
        { "question": "两个直角合起来是多少度？", "formula": "90 + 90 = ?", "answer": 180, "hint": "90 加 90" } ],
      "discoverySteps": [
        { "q": "👀 图中标出的小方框表示什么？", "choices": ["这是一个直角", "这是一个锐角", "这是一个钝角", "不知道"], "answer": "这是一个直角", "explain": "直角用小方框标记" },
        { "q": "🧮 用三角尺的直角去比，会怎样？", "choices": ["完全重合", "比它大", "比它小", "不知道"], "answer": "完全重合", "explain": "直角和三角尺的直角一样大" },
        { "q": "🧩 一个直角是多少度？", "choices": ["90 度", "60 度", "100 度", "180 度"], "answer": "90 度", "explain": "直角 = 90°" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "角上画一个小方框，就是这个角为直角", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 直角判断法", "text": "用三角尺的直角去比，重合就是直角", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 直角处处在", "text": "书本、门窗、地砖的角大多是直角", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ANG-04", "knowledge": "锐角钝角", "difficulty": 1,
      "scene": "小红画了一个角，用三角尺比一比，发现它比直角小。",
      "question": "比直角小的角叫什么角？",
      "formula": "比直角小的角 = ?", "answer": "锐角", "choices": ["锐角", "钝角", "直角", "平角"],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "angle", "params": { "type": "acute", "degree": 40 } },
      "hint": "比直角小的叫锐角，比直角大的叫钝角",
      "variants": [
        { "question": "比直角大的角叫什么角？", "formula": "比直角大的角 = ?", "answer": "钝角", "hint": "比直角大" },
        { "question": "三角尺上除了直角，另两个角是什么角？", "formula": "角的类型", "answer": "锐角", "hint": "都比直角小" } ],
      "discoverySteps": [
        { "q": "👀 图中的角比直角大还是小？", "choices": ["比直角小", "比直角大", "一样大", "不知道"], "answer": "比直角小", "explain": "它张得比直角小" },
        { "q": "🔢 比直角小的角叫什么？", "choices": ["锐角", "钝角", "直角", "不知道"], "answer": "锐角", "explain": "比直角小的角是锐角" },
        { "q": "🧩 比直角大的角叫什么？", "choices": ["钝角", "锐角", "直角", "不知道"], "answer": "钝角", "explain": "比直角大的角是钝角" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "以直角为标尺，一比较就分出锐角、钝角", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 三类角的判据", "text": "小于 90° 是锐角，等于 90° 是直角，大于 90° 是钝角", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 直角是标尺", "text": "判断角的类型，先找直角当参照", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-ANG-05", "knowledge": "直角", "difficulty": 2,
      "scene": "教室的黑板面是一个长方形。小明拿着三角尺，想去数一数黑板面有几个直角。",
      "question": "一个长方形有几个直角？",
      "formula": "直角的个数 = ?", "answer": 4, "choices": [4, 2, 3, 1],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "rectangle", "params": { "length": 6, "width": 4 } },
      "hint": "长方形有四个角，每个角都是直角",
      "variants": [
        { "question": "正方形有几个直角？", "formula": "直角的个数 = ?", "answer": 4, "hint": "正方形也是四个直角" },
        { "question": "长方形和正方形都有几个直角？", "formula": "直角的个数 = ?", "answer": 4, "hint": "都是四个" } ],
      "discoverySteps": [
        { "q": "👀 长方形一共有几个角？", "choices": ["4 个", "2 个", "3 个", "不知道"], "answer": "4 个", "explain": "长方形有四个顶点" },
        { "q": "🧮 每个角用三角尺比一比，是什么角？", "choices": ["都是直角", "有的是锐角", "有的是钝角", "不知道"], "answer": "都是直角", "explain": "长方形四个角都是直角" },
        { "q": "🧩 所以长方形有几个直角？", "choices": ["4 个", "2 个", "3 个", "1 个"], "answer": "4 个", "explain": "四个角全是直角" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "长方形的四个角，各画一个小方框", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 长方形特征", "text": "对边相等、四个角都是直角", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 正方形也一样", "text": "正方形是特殊的长方形，四个角也是直角", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    // ================= 第四单元 · 表内乘法（一） =================
    { "id": "2A-MUL1-01", "knowledge": "乘法的初步认识", "difficulty": 1,
      "scene": "游乐园里，每辆小火车有 4 个座位，一共有 3 辆小火车。",
      "question": "3 辆小火车一共有多少个座位？",
      "formula": "4 × 3 = ?", "answer": 12, "choices": [12, 7, 9, 34],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 4, "b": 3, "rows": 3, "cols": 4, "result": 12 },
      "hint": "求几个相同加数的和，用乘法：4+4+4 = 4×3",
      "variants": [
        { "question": "每辆 5 个座位，4 辆一共多少个座位？", "formula": "5 × 4 = ?", "answer": 20, "hint": "5+5+5+5=20" },
        { "question": "每辆 3 个座位，6 辆一共多少个座位？", "formula": "3 × 6 = ?", "answer": 18, "hint": "3+3+3+3+3+3=18" } ],
      "discoverySteps": [
        { "q": "🔢 每辆小火车有几个座位？", "choices": ["4 个", "3 个", "12 个", "不知道"], "answer": "4 个", "explain": "每辆 4 个座位" },
        { "q": "🔢 一共有几辆？", "choices": ["3 辆", "4 辆", "12 辆", "不知道"], "answer": "3 辆", "explain": "一共 3 辆" },
        { "q": "🧩 3 个 4 相加，可以写成什么算式？", "choices": ["4 × 3", "4 + 3", "4 - 3", "不知道"], "answer": "4 × 3", "explain": "求几个相同加数的和用乘法" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图排成 3 行 4 列，每行 4 个", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 乘法是加法的简便", "text": "4+4+4 写成 4×3，读作 4 乘 3", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 几个几", "text": "每份数 × 份数 = 总数", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL1-02", "knowledge": "2~6的乘法口诀", "difficulty": 1,
      "scene": "小朋友排队做操，队伍排成 5 行，每行 5 人。",
      "question": "队伍一共有多少人？",
      "formula": "5 × 5 = ?", "answer": 25, "choices": [25, 10, 20, 55],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 5, "b": 5, "rows": 5, "cols": 5, "result": 25 },
      "hint": "口诀：五五二十五",
      "variants": [
        { "question": "4 × 4 = ?", "formula": "4 × 4 = ?", "answer": 16, "hint": "口诀：四四十六" },
        { "question": "6 × 6 = ?", "formula": "6 × 6 = ?", "answer": 36, "hint": "口诀：六六三十六" } ],
      "discoverySteps": [
        { "q": "🔢 队伍排成几行？每行几人？", "choices": ["5 行、每行 5 人", "5 行、每行 3 人", "3 行、每行 5 人", "不知道"], "answer": "5 行、每行 5 人", "explain": "5 行 5 人，是 5 个 5" },
        { "q": "🧮 用哪句口诀？", "choices": ["五五二十五", "四五二十", "五六三十", "不知道"], "answer": "五五二十五", "explain": "两个乘数都是 5" },
        { "q": "🧩 一共有多少人？", "choices": ["25 人", "10 人", "20 人", "55 人"], "answer": "25 人", "explain": "5×5=25" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 5 行 5 列，正好排成一个正方形", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 口诀的来历", "text": "口诀是把两个乘数和积编成一句话，好记好用", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 一句口诀两道算式", "text": "五五二十五只能写一道乘法（两个乘数相同）", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL1-03", "knowledge": "乘法的初步认识", "difficulty": 1,
      "scene": "小猴摘桃子，每只小猴摘 6 个，一共摘了 6 次。",
      "question": "一共摘了多少个桃子？",
      "formula": "6 × 6 = ?", "answer": 36, "choices": [36, 12, 30, 66],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 6, "b": 6, "rows": 6, "cols": 6, "result": 36 },
      "hint": "6 个 6 相加，用口诀六六三十六",
      "variants": [
        { "question": "每只摘 6 个，摘 3 次，一共几个？", "formula": "6 × 3 = ?", "answer": 18, "hint": "三六十八" },
        { "question": "每只摘 6 个，摘 4 次，一共几个？", "formula": "6 × 4 = ?", "answer": 24, "hint": "四六二十四" } ],
      "discoverySteps": [
        { "q": "🔢 每次摘几个桃子？摘了几次？", "choices": ["6 个、6 次", "6 个、3 次", "3 个、6 次", "不知道"], "answer": "6 个、6 次", "explain": "每次 6 个，共 6 次" },
        { "q": "🧮 6 个 6 相加，写成乘法是？", "choices": ["6 × 6", "6 + 6", "6 × 2", "不知道"], "answer": "6 × 6", "explain": "6 个 6 就是 6×6" },
        { "q": "🧩 用哪句口诀算？", "choices": ["六六三十六", "五六三十", "六七四十二", "不知道"], "answer": "六六三十六", "explain": "6×6=36" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "6 行 6 列的点子图，一共 36 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 相同加数", "text": "6+6+6+6+6+6 写成 6×6 更简洁", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 乘法口诀表", "text": "把 1~6 的口诀连起来，就是乘法口诀表的前半张", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL1-04", "knowledge": "2~6的乘法口诀", "difficulty": 1,
      "scene": "妈妈买了 4 盒果汁，每盒装了 5 瓶。",
      "question": "4 盒果汁一共有多少瓶？",
      "formula": "5 × 4 = ?", "answer": 20, "choices": [20, 9, 16, 45],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 5, "b": 4, "rows": 4, "cols": 5, "result": 20 },
      "hint": "口诀：四五二十",
      "variants": [
        { "question": "5 × 6 = ?", "formula": "5 × 6 = ?", "answer": 30, "hint": "五六三十" },
        { "question": "3 × 6 = ?", "formula": "3 × 6 = ?", "answer": 18, "hint": "三六十八" } ],
      "discoverySteps": [
        { "q": "🔢 每盒几瓶？一共几盒？", "choices": ["5 瓶、4 盒", "4 瓶、5 盒", "5 瓶、5 盒", "不知道"], "answer": "5 瓶、4 盒", "explain": "每盒 5 瓶，共 4 盒" },
        { "q": "🧮 求一共是多少，用哪句口诀？", "choices": ["四五二十", "五五二十五", "四四十六", "不知道"], "answer": "四五二十", "explain": "5 和 4 相乘" },
        { "q": "🧩 一共多少瓶？", "choices": ["20 瓶", "9 瓶", "16 瓶", "45 瓶"], "answer": "20 瓶", "explain": "5×4=20" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 4 行 5 列，共 20 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 交换位置积不变", "text": "5×4 和 4×5 结果一样，都等于 20", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 横看竖看都是 20", "text": "点子图横着数是 4 个 5，竖着数是 5 个 4", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL1-05", "knowledge": "用乘法解决问题", "difficulty": 2,
      "scene": "烘焙课上，每个烤盘能放 6 个小蛋糕，一共装了 4 盘。",
      "question": "一共做了多少个小蛋糕？",
      "formula": "6 × 4 = ?", "answer": 24, "choices": [24, 10, 20, 46],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 6, "b": 4, "rows": 4, "cols": 6, "result": 24 },
      "hint": "求 4 个 6 是多少，用乘法",
      "variants": [
        { "question": "每盘 6 个，装 5 盘，一共几个？", "formula": "6 × 5 = ?", "answer": 30, "hint": "五六三十" },
        { "question": "每盘 4 个，装 6 盘，一共几个？", "formula": "4 × 6 = ?", "answer": 24, "hint": "四六二十四" } ],
      "discoverySteps": [
        { "q": "🔢 每盘放几个？一共几盘？", "choices": ["6 个、4 盘", "4 个、6 盘", "6 个、6 盘", "不知道"], "answer": "6 个、4 盘", "explain": "每盘 6 个，共 4 盘" },
        { "q": "🧩 求一共多少个，是求几个几？", "choices": ["4 个 6", "6 个 6", "4 个 4", "不知道"], "answer": "4 个 6", "explain": "4 盘，每盘 6 个 → 4 个 6" },
        { "q": "🧮 列式计算", "choices": ["6 × 4 = 24", "6 + 4 = 10", "6 × 6 = 36", "不知道"], "answer": "6 × 4 = 24", "explain": "每份数 × 份数 = 总数" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 4 行 6 列，一共 24 个", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 每份数 × 份数", "text": "每盘 6 个是「每份数」，4 盘是「份数」", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 求几个几用乘法", "text": "看到「每……共……」就用乘法", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL1-06", "knowledge": "2~6的乘法口诀", "difficulty": 2,
      "scene": "口诀卡片上写着「三六十八」。小明想知道它表示哪道乘法算式。",
      "question": "「三六十八」表示 3 × 6 等于多少？",
      "formula": "3 × 6 = ?", "answer": 18, "choices": [18, 9, 24, 36],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 3, "b": 6, "rows": 6, "cols": 3, "result": 18 },
      "hint": "口诀的前两个数是乘数，最后是积",
      "variants": [
        { "question": "「二六十二」表示 2 × 6 = ?", "formula": "2 × 6 = ?", "answer": 12, "hint": "口诀最后是积" },
        { "question": "「四六二十四」表示 4 × 6 = ?", "formula": "4 × 6 = ?", "answer": 24, "hint": "口诀最后是积" } ],
      "discoverySteps": [
        { "q": "📖 口诀里的两个乘数是哪两个数？", "choices": ["3 和 6", "3 和 18", "6 和 18", "不知道"], "answer": "3 和 6", "explain": "口诀前两个字代表两个乘数" },
        { "q": "🔢 口诀里的「十八」表示什么？", "choices": ["积", "乘数", "差", "不知道"], "answer": "积", "explain": "最后一个数是积" },
        { "q": "🧩 3 × 6 等于多少？", "choices": ["18", "9", "24", "36"], "answer": "18", "explain": "三六十八" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 6 行 3 列，可以数出 18 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 口诀的结构", "text": "口诀 = 乘数 + 乘数 + 积，如三六十八", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 一句口诀两个算式", "text": "三六十八 → 3×6=18，6×3=18", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    // ================= 第五单元 · 观察物体（一） =================
    { "id": "2A-OBS-01", "knowledge": "从不同位置观察", "difficulty": 1,
      "scene": "讲台上放着一个正方体纸箱，小明站在纸箱正前方看它。",
      "question": "小明从正面看到的是什么形状？",
      "formula": "正面看到的形状 = ?", "answer": "正方形", "choices": ["正方形", "长方形", "三角形", "圆"],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "rectangle", "params": { "length": 6, "width": 6 } },
      "hint": "正方体每个面都是一样的正方形",
      "variants": [
        { "question": "正方体从上面看是什么形状？", "formula": "上面看到的形状 = ?", "answer": "正方形", "hint": "每个面都是正方形" },
        { "question": "正方体从侧面看是什么形状？", "formula": "侧面看到的形状 = ?", "answer": "正方形", "hint": "每个面都是正方形" } ],
      "discoverySteps": [
        { "q": "👀 正方体的每个面是什么形状？", "choices": ["正方形", "长方形", "三角形", "不知道"], "answer": "正方形", "explain": "正方体六个面都是正方形" },
        { "q": "🔢 站在正面看到的是几个面？", "choices": ["1 个面", "2 个面", "3 个面", "不知道"], "answer": "1 个面", "explain": "正对着只能看到 1 个面" },
        { "q": "🧩 所以从正面看到的是？", "choices": ["正方形", "长方形", "三角形", "圆"], "answer": "正方形", "explain": "看到的是一个正方形" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "从正面看正方体，只能看到正对的那一个面", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 位置决定形状", "text": "同一个物体，站在不同位置看到的形状可能不同", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 要学会换位观察", "text": "观察物体时，试着从前面、上面、侧面都看一看", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-OBS-02", "knowledge": "从不同位置观察", "difficulty": 1,
      "scene": "桌上放着一个圆柱形水杯，小红从正上方往下看。",
      "question": "从上面往下看，看到的形状是什么？",
      "formula": "上面看到的形状 = ?", "answer": "圆", "choices": ["圆", "长方形", "正方形", "三角形"],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "circle", "params": { "radius": 4 } },
      "hint": "从上往下看，看到的是圆柱的底面",
      "variants": [
        { "question": "圆柱形水杯从正面看是什么形状？", "formula": "正面看到的形状 = ?", "answer": "长方形", "hint": "侧面看是长方形" },
        { "question": "球从任何位置看是什么形状？", "formula": "看到的形状 = ?", "answer": "圆", "hint": "球从哪看都是圆" } ],
      "discoverySteps": [
        { "q": "👀 圆柱的上面是什么形状的面？", "choices": ["圆面", "长方形的面", "三角形的面", "不知道"], "answer": "圆面", "explain": "圆柱上下两个底面都是圆" },
        { "q": "🔢 从上往下看会看到几个面？", "choices": ["1 个面", "2 个面", "3 个面", "不知道"], "answer": "1 个面", "explain": "只能看到最上面的那个圆面" },
        { "q": "🧩 所以从上面看到的是？", "choices": ["圆", "长方形", "正方形", "三角形"], "answer": "圆", "explain": "看到的是一个圆" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "俯视圆柱，看到一个圆形", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 面决定形状", "text": "看到什么形状，取决于对着你的那个面是什么形状", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 圆柱的两个视图", "text": "正面看是长方形，上面看是圆", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-OBS-03", "knowledge": "从不同位置观察", "difficulty": 1,
      "scene": "桌上放着一个长方体纸巾盒，小明从它的侧面看过去。",
      "question": "从侧面看长方体，看到的形状是什么？",
      "formula": "侧面看到的形状 = ?", "answer": "长方形", "choices": ["长方形", "正方形", "三角形", "圆"],
      "visualType": "geometry",
      "visualData": { "type": "geometry", "shape": "rectangle", "params": { "length": 8, "width": 4 } },
      "hint": "长方体每个面都是长方形（也可能有正方形的面）",
      "variants": [
        { "question": "长方体从上面看是什么形状？", "formula": "上面看到的形状 = ?", "answer": "长方形", "hint": "也是长方形的面" },
        { "question": "长方体从正面看是什么形状？", "formula": "正面看到的形状 = ?", "answer": "长方形", "hint": "正对着的面是长方形" } ],
      "discoverySteps": [
        { "q": "👀 长方体每个面是什么形状？", "choices": ["长方形", "三角形", "圆", "不知道"], "answer": "长方形", "explain": "长方体六个面都是长方形（特殊时有正方形）" },
        { "q": "🔢 从侧面看到的是几个面？", "choices": ["1 个面", "2 个面", "3 个面", "不知道"], "answer": "1 个面", "explain": "正对着只能看到 1 个面" },
        { "q": "🧩 所以从侧面看到的是？", "choices": ["长方形", "正方形", "三角形", "圆"], "answer": "长方形", "explain": "看到的是一个长方形" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "从侧面看长方体，看到一个长方形", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 长宽可能不同", "text": "不同的面大小可能不一样，但都是长方形", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 长方体与正方体", "text": "正方体是六个面都相同的特殊长方体", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-OBS-04", "knowledge": "从不同位置观察", "difficulty": 2,
      "scene": "四个小朋友围着一只玩具小熊，分别从前、后、左、右四个方向看它，然后画下自己看到的画面。",
      "question": "同一个物体，从不同位置观察，看到的形状会怎样？",
      "formula": "不同位置看到的形状 = ?", "answer": "可能不同", "choices": ["可能不同", "一定相同", "一定相反", "都一样大"],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 4, "parts": [ { "value": 1, "label": "正面", "color": "#2570E8" }, { "value": 1, "label": "后面", "color": "#F5B800" }, { "value": 1, "label": "左面", "color": "#FB923C" }, { "value": 1, "label": "右面", "color": "#E8A0BF" } ] },
      "hint": "换个位置看，看到的画面可能就不一样",
      "variants": [
        { "question": "站在小熊后面看到的是它的（ ）", "formula": "后面看到的部位", "answer": "背面", "hint": "站在后面只能看到背" },
        { "question": "站在小熊前面看到的是它的（ ）", "formula": "正面看到的部位", "answer": "正面", "hint": "站在前面看到脸" } ],
      "discoverySteps": [
        { "q": "👀 四个小朋友站的位置一样吗？", "choices": ["不一样，站在四个方向", "完全一样", "只有两个方向", "不知道"], "answer": "不一样，站在四个方向", "explain": "前、后、左、右四个位置" },
        { "q": "🧮 站在小熊后面，能看到它的脸吗？", "choices": ["看不到，只能看到背面", "能看到脸", "能看到侧面", "不知道"], "answer": "看不到，只能看到背面", "explain": "位置不同，看到的部位不同" },
        { "q": "🧩 所以不同位置看到的形状？", "choices": ["可能不同", "一定相同", "一定相反", "都一样大"], "answer": "可能不同", "explain": "观察位置变了，看到的画面可能就变了" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "四个方向围绕同一物体，各看到一面", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 观察要有序", "text": "从前、后、左、右依次观察，才能看全面", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 盲人摸象的道理", "text": "只看一个角度容易片面，多角度观察才完整", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },
    // ================= 第六单元 · 表内乘法（二） =================
    { "id": "2A-MUL2-01", "knowledge": "7的乘法口诀", "difficulty": 1,
      "scene": "一星期有 7 天，小朋友们正在数 8 个星期一共有多少天。",
      "question": "8 个星期一共有多少天？",
      "formula": "7 × 8 = ?", "answer": 56, "choices": [56, 15, 48, 64],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 7, "b": 8, "rows": 8, "cols": 7, "result": 56 },
      "hint": "口诀：七八五十六",
      "variants": [
        { "question": "6 个星期一共多少天？", "formula": "7 × 6 = ?", "answer": 42, "hint": "六七四十二" },
        { "question": "9 个星期一共多少天？", "formula": "7 × 9 = ?", "answer": 63, "hint": "七九六十三" } ],
      "discoverySteps": [
        { "q": "🔢 一星期有几天？数了几个星期？", "choices": ["7 天、8 个", "8 天、7 个", "7 天、7 个", "不知道"], "answer": "7 天、8 个", "explain": "一星期 7 天，共 8 个星期" },
        { "q": "🧮 是求几个几？", "choices": ["8 个 7", "7 个 7", "8 个 8", "不知道"], "answer": "8 个 7", "explain": "8 个星期，每个星期 7 天" },
        { "q": "🧩 用哪句口诀？", "choices": ["七八五十六", "六七四十二", "八八六十四", "不知道"], "answer": "七八五十六", "explain": "7×8=56" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 8 行 7 列，共 56 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 7 的口诀", "text": "一七得七、二七十四……七八五十六", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 乘法口诀表", "text": "7 的口诀有 7 句，越往后积越大", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL2-02", "knowledge": "8的乘法口诀", "difficulty": 1,
      "scene": "文具店每盒彩笔有 8 支，妈妈买了 6 盒。",
      "question": "6 盒彩笔一共有多少支？",
      "formula": "8 × 6 = ?", "answer": 48, "choices": [48, 14, 42, 54],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 8, "b": 6, "rows": 6, "cols": 8, "result": 48 },
      "hint": "口诀：六八四十八",
      "variants": [
        { "question": "8 × 8 = ?", "formula": "8 × 8 = ?", "answer": 64, "hint": "八八六十四" },
        { "question": "8 × 9 = ?", "formula": "8 × 9 = ?", "answer": 72, "hint": "八九七十二" } ],
      "discoverySteps": [
        { "q": "🔢 每盒几支？买了几盒？", "choices": ["8 支、6 盒", "6 支、8 盒", "8 支、8 盒", "不知道"], "answer": "8 支、6 盒", "explain": "每盒 8 支，共 6 盒" },
        { "q": "🧮 求一共多少支，是几个几？", "choices": ["6 个 8", "8 个 8", "6 个 6", "不知道"], "answer": "6 个 8", "explain": "6 盒，每盒 8 支" },
        { "q": "🧩 用哪句口诀？", "choices": ["六八四十八", "七八五十六", "六六三十六", "不知道"], "answer": "六八四十八", "explain": "8×6=48" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 6 行 8 列，共 48 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 8 的口诀", "text": "一八得八……六八四十八……八九七十二", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 用口诀快速算", "text": "熟记口诀，看到算式就能直接报出积", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL2-03", "knowledge": "9的乘法口诀", "difficulty": 2,
      "scene": "棋盘上每行能放 9 颗棋子，小刚把 9 行都摆满了。",
      "question": "棋盘上一共摆了多少颗棋子？",
      "formula": "9 × 9 = ?", "answer": 81, "choices": [81, 18, 72, 99],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 9, "b": 9, "rows": 9, "cols": 9, "result": 81 },
      "hint": "口诀：九九八十一",
      "variants": [
        { "question": "8 × 9 = ?", "formula": "8 × 9 = ?", "answer": 72, "hint": "八九七十二" },
        { "question": "9 × 7 = ?", "formula": "9 × 7 = ?", "answer": 63, "hint": "七九六十三" } ],
      "discoverySteps": [
        { "q": "🔢 每行放几颗？放了几行？", "choices": ["9 颗、9 行", "9 颗、8 行", "8 颗、9 行", "不知道"], "answer": "9 颗、9 行", "explain": "每行 9 颗，共 9 行" },
        { "q": "🧮 求一共多少颗，是几个几？", "choices": ["9 个 9", "8 个 9", "9 个 8", "不知道"], "answer": "9 个 9", "explain": "9 行，每行 9 颗" },
        { "q": "🧩 9 × 9 等于多少？", "choices": ["81", "18", "72", "99"], "answer": "81", "explain": "九九八十一" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "9 行 9 列的点子图，正好是一个正方形", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 9 的口诀规律", "text": "9 的口诀：积的十位和个位加起来都是 9（如 81 → 8+1=9）", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 用手指记 9 的口诀", "text": "弯下第几个手指头，左边是十位、右边是个位", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL2-04", "knowledge": "9的乘法口诀", "difficulty": 2,
      "scene": "校园里种了一排树，每行 9 棵，一共种了 7 行。",
      "question": "校园里一共种了多少棵树？",
      "formula": "9 × 7 = ?", "answer": 63, "choices": [63, 16, 56, 72],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 9, "b": 7, "rows": 7, "cols": 9, "result": 63 },
      "hint": "口诀：七九六十三",
      "variants": [
        { "question": "6 × 9 = ?", "formula": "6 × 9 = ?", "answer": 54, "hint": "六九五十四" },
        { "question": "5 × 9 = ?", "formula": "5 × 9 = ?", "answer": 45, "hint": "五九四十五" } ],
      "discoverySteps": [
        { "q": "🔢 每行几棵？一共几行？", "choices": ["9 棵、7 行", "7 棵、9 行", "9 棵、9 行", "不知道"], "answer": "9 棵、7 行", "explain": "每行 9 棵，共 7 行" },
        { "q": "🧮 求一共多少棵，是几个几？", "choices": ["7 个 9", "9 个 7", "7 个 7", "不知道"], "answer": "7 个 9", "explain": "7 行，每行 9 棵" },
        { "q": "🧩 用哪句口诀？", "choices": ["七九六十三", "八九七十二", "六七四十二", "不知道"], "answer": "七九六十三", "explain": "9×7=63" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 7 行 9 列，共 63 个点", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 交换后口诀不同", "text": "7×9 用「七九六十三」，9×7 用「九七六十三」，但积一样", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 大数计算前先估", "text": "9×7 比 9×6 多 9，比 9×8 少 9，可以估出范围", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL2-05", "knowledge": "用乘法解决问题（二）", "difficulty": 2,
      "scene": "做广播操时，同学们排成 6 排，每排 9 人。",
      "question": "做广播操的一共有多少人？",
      "formula": "9 × 6 = ?", "answer": 54, "choices": [54, 15, 45, 63],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 9, "b": 6, "rows": 6, "cols": 9, "result": 54 },
      "hint": "6 排、每排 9 人 → 6 个 9",
      "variants": [
        { "question": "排成 4 排，每排 9 人，一共多少人？", "formula": "9 × 4 = ?", "answer": 36, "hint": "四九三十六" },
        { "question": "排成 8 排，每排 7 人，一共多少人？", "formula": "7 × 8 = ?", "answer": 56, "hint": "七八五十六" } ],
      "discoverySteps": [
        { "q": "🔢 排了几排？每排几人？", "choices": ["6 排、9 人", "9 排、6 人", "6 排、6 人", "不知道"], "answer": "6 排、9 人", "explain": "6 排，每排 9 人" },
        { "q": "🧩 是求几个几？", "choices": ["6 个 9", "9 个 6", "6 个 6", "不知道"], "answer": "6 个 9", "explain": "6 排，每排 9 人" },
        { "q": "🧮 列式计算", "choices": ["9 × 6 = 54", "9 + 6 = 15", "9 × 9 = 81", "不知道"], "answer": "9 × 6 = 54", "explain": "每排人数 × 排数 = 总人数" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "点子图 6 行 9 列，横看竖看都是 54", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 队伍里的乘法", "text": "排队问题是「几个几」的典型场景", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 找每份数和份数", "text": "每排人数是每份数，排数是份数", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MUL2-06", "knowledge": "8的乘法口诀", "difficulty": 1,
      "scene": "教室的座位排成 8 排，每排 8 个座位。",
      "question": "教室一共有多少个座位？",
      "formula": "8 × 8 = ?", "answer": 64, "choices": [64, 16, 56, 88],
      "visualType": "areaModel",
      "visualData": { "type": "areaModel", "a": 8, "b": 8, "rows": 8, "cols": 8, "result": 64 },
      "hint": "口诀：八八六十四",
      "variants": [
        { "question": "7 × 8 = ?", "formula": "7 × 8 = ?", "answer": 56, "hint": "七八五十六" },
        { "question": "9 × 8 = ?", "formula": "9 × 8 = ?", "answer": 72, "hint": "八九七十二" } ],
      "discoverySteps": [
        { "q": "🔢 座位排了几排？每排几个？", "choices": ["8 排、8 个", "8 排、6 个", "6 排、8 个", "不知道"], "answer": "8 排、8 个", "explain": "8 排 8 个座位" },
        { "q": "🧮 求一共多少个座位，是几个几？", "choices": ["8 个 8", "8 个 7", "7 个 8", "不知道"], "answer": "8 个 8", "explain": "8 排，每排 8 个" },
        { "q": "🧩 8 × 8 等于多少？", "choices": ["64", "16", "56", "88"], "answer": "64", "explain": "八八六十四" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "8 行 8 列的点子图，是一个正方形点阵", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 相同乘数", "text": "8×8 只能写出一道乘法算式", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 平方数的雏形", "text": "两个相同数相乘，点子图正好是正方形", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    // ================= 第七单元 · 认识时间 =================
    { "id": "2A-TIME-01", "knowledge": "1时=60分", "difficulty": 1,
      "scene": "上课铃响了，老师指着钟面说：分针走一圈，时针正好走一大格，也就是 1 小时。",
      "question": "1 时等于多少分？",
      "formula": "1 时 = ? 分", "answer": 60, "choices": [60, 30, 100, 12],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 60, "points": [ { "pos": 0, "label": "0 分", "color": "#2570E8" }, { "pos": 60, "label": "1 时", "color": "#FB923C" } ], "highlight": [0, 60] },
      "hint": "分针走一圈是 60 分，也就是 1 时",
      "variants": [
        { "question": "2 时等于多少分？", "formula": "60 × 2 = ?", "answer": 120, "hint": "2 个 60" },
        { "question": "半时等于多少分？", "formula": "60 ÷ 2 = ?", "answer": 30, "hint": "60 的一半" } ],
      "discoverySteps": [
        { "q": "🕐 分针走一圈要走多少分？", "choices": ["60 分", "30 分", "12 分", "不知道"], "answer": "60 分", "explain": "分针走一圈是 60 分" },
        { "q": "🔢 这时候时针走了多少？", "choices": ["1 大格，也就是 1 时", "1 小格", "12 大格", "不知道"], "answer": "1 大格，也就是 1 时", "explain": "分针一圈，时针一大格" },
        { "q": "🧩 所以 1 时等于多少分？", "choices": ["60 分", "30 分", "100 分", "12 分"], "answer": "60 分", "explain": "1 时 = 60 分" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "时间线上 0 到 60 分，就是 1 时", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 时与分的进率", "text": "1 时 = 60 分，这是时间单位的进率", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 时间换算", "text": "几时就是几个 60 分；几分就是 60 分之几时", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-TIME-02", "knowledge": "认识几时几分", "difficulty": 1,
      "scene": "小明盯着钟面看，发现分针从一个数字走到下一个数字，正好走了 1 个大格。",
      "question": "分针走 1 个大格是多少分？",
      "formula": "1 大格 = ? 分", "answer": 5, "choices": [5, 1, 10, 12],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 60, "points": [ { "pos": 0, "label": "0", "color": "#2570E8" }, { "pos": 5, "label": "5", "color": "#FB923C" }, { "pos": 10, "label": "10", "color": "#2570E8" }, { "pos": 15, "label": "15", "color": "#2570E8" }, { "pos": 20, "label": "20", "color": "#2570E8" }, { "pos": 30, "label": "30", "color": "#2570E8" }, { "pos": 40, "label": "40", "color": "#2570E8" }, { "pos": 50, "label": "50", "color": "#2570E8" }, { "pos": 60, "label": "60", "color": "#2570E8" } ], "highlight": [0, 5] },
      "hint": "钟面上一共 12 个大格，60 ÷ 12 = 5",
      "variants": [
        { "question": "分针走 2 个大格是多少分？", "formula": "5 × 2 = ?", "answer": 10, "hint": "2 个 5" },
        { "question": "分针走 3 个大格是多少分？", "formula": "5 × 3 = ?", "answer": 15, "hint": "3 个 5" } ],
      "discoverySteps": [
        { "q": "🕐 钟面一圈分成几个大格？", "choices": ["12 个大格", "10 个大格", "60 个大格", "不知道"], "answer": "12 个大格", "explain": "钟面上有 12 个大格" },
        { "q": "🧮 分针走一圈 60 分，平均分给 12 个大格，每个大格多少分？", "choices": ["5 分", "6 分", "10 分", "不知道"], "answer": "5 分", "explain": "60÷12=5" },
        { "q": "🧩 分针走 1 个大格是几分？", "choices": ["5 分", "1 分", "10 分", "12 分"], "answer": "5 分", "explain": "每个大格是 5 分" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "把钟面一圈展开成时间线，每 5 分一个刻度", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 5 分读一格", "text": "看分钟数可以 5 个 5 个地数", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 数分钟的口诀", "text": "5、10、15、20……一边数边加 5", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-TIME-03", "knowledge": "时间的计算", "difficulty": 2,
      "scene": "小明 8:15 开始做作业，8:40 写完。他想知道自己做了多长时间。",
      "question": "小明做作业用了多少分？",
      "formula": "40 - 15 = ?", "answer": 25, "choices": [25, 35, 15, 55],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 60, "points": [ { "pos": 15, "label": "开始 8:15", "color": "#2570E8" }, { "pos": 40, "label": "结束 8:40", "color": "#FB923C" } ], "highlight": [15, 40] },
      "hint": "经过时间 = 结束时刻 - 开始时刻（同一小时内直接减分钟）",
      "variants": [
        { "question": "9:10 到 9:35 经过多少分？", "formula": "35 - 10 = ?", "answer": 25, "hint": "同一小时直接减" },
        { "question": "7:20 到 7:55 经过多少分？", "formula": "55 - 20 = ?", "answer": 35, "hint": "同一小时直接减" } ],
      "discoverySteps": [
        { "q": "🕐 开始时刻是几时几分？", "choices": ["8:15", "8:40", "8:00", "不知道"], "answer": "8:15", "explain": "8 时 15 分开始" },
        { "q": "🔢 结束时刻是几时几分？", "choices": ["8:40", "8:15", "9:40", "不知道"], "answer": "8:40", "explain": "8 时 40 分结束" },
        { "q": "🧩 求经过时间用什么方法？", "choices": ["结束分 - 开始分", "开始分 - 结束分", "两个数相加", "不知道"], "answer": "结束分 - 开始分", "explain": "同一小时内：40-15=25 分" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "时间线上两个点之间的那段就是经过时间", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 经过时间 = 结束 - 开始", "text": "同一小时内，分钟数直接相减", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 跨小时要分段", "text": "如果跨过整点，要先算到整点，再加上后面的分钟", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-TIME-04", "knowledge": "1时=60分", "difficulty": 1,
      "scene": "动画片播完了，妈妈说：你看了半小时电视了，该休息啦。",
      "question": "半小时等于多少分？",
      "formula": "60 ÷ 2 = ?", "answer": 30, "choices": [30, 60, 50, 15],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 60, "points": [ { "pos": 0, "label": "0 分", "color": "#2570E8" }, { "pos": 30, "label": "半小时", "color": "#FB923C" }, { "pos": 60, "label": "1 时", "color": "#2570E8" } ], "highlight": [0, 30] },
      "hint": "1 时 = 60 分，一半就是 30 分",
      "variants": [
        { "question": "1 时 30 分等于多少分？", "formula": "60 + 30 = ?", "answer": 90, "hint": "60 加 30" },
        { "question": "40 分加 20 分等于多少分？", "formula": "40 + 20 = ?", "answer": 60, "hint": "正好 1 时" } ],
      "discoverySteps": [
        { "q": "📖 1 时等于多少分？", "choices": ["60 分", "30 分", "100 分", "不知道"], "answer": "60 分", "explain": "1 时 = 60 分" },
        { "q": "🧮 「半小时」是 1 时的几分之几？", "choices": ["一半", "三分之一", "两倍", "不知道"], "answer": "一半", "explain": "半小时就是一小时的一半" },
        { "q": "🧩 60 的一半是多少？", "choices": ["30", "20", "40", "不知道"], "answer": "30", "explain": "60÷2=30" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "时间线上 0 到 30 就是半小时", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 半时 = 30 分", "text": "1 时的中点就是 30 分", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 生活中的时间", "text": "一节课 40 分、课间 10 分，加起来正好 50 分", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-TIME-05", "knowledge": "时间的计算", "difficulty": 2,
      "scene": "早上 7:50，妈妈叫小明准备出门，10 分钟后就要出发。",
      "question": "10 分钟后是几时几分？",
      "formula": "7:50 + 10 分 = ?", "answer": "8:00", "choices": ["8:00", "7:60", "8:10", "7:55"],
      "visualType": "numberLine",
      "visualData": { "type": "numberLine", "start": 0, "end": 60, "points": [ { "pos": 50, "label": "7:50", "color": "#2570E8" }, { "pos": 60, "label": "?", "color": "#FB923C" } ], "highlight": [50, 60] },
      "hint": "50 分再过 10 分就是 60 分，60 分 = 1 时，所以是 8:00",
      "variants": [
        { "question": "9:45 再过 15 分是几时几分？", "formula": "9:45 + 15 分 = ?", "answer": "10:00", "hint": "45+15=60，整点" },
        { "question": "6:55 再过 5 分是几时几分？", "formula": "6:55 + 5 分 = ?", "answer": "7:00", "hint": "55+5=60，整点" } ],
      "discoverySteps": [
        { "q": "🕐 现在是几时几分？", "choices": ["7:50", "8:00", "7:10", "不知道"], "answer": "7:50", "explain": "现在是 7 时 50 分" },
        { "q": "🧮 50 分再过 10 分是多少分？", "choices": ["60 分", "50 分", "40 分", "不知道"], "answer": "60 分", "explain": "50+10=60 分" },
        { "q": "🧩 60 分是多少？所以几时几分？", "choices": ["1 时，8:00", "2 时，9:00", "还是 7:60", "不知道"], "answer": "1 时，8:00", "explain": "满 60 分就是 1 时，要向前进 1 小时" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "时间线上 50 分之后 10 分，正好到 60 分整", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 满六十要进一", "text": "分钟数满 60 就要进位成 1 小时", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 时间加法口诀", "text": "分加分，满 60 就向时进 1", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-TIME-06", "knowledge": "时间的计算", "difficulty": 1,
      "scene": "学校的作息是：一节课 40 分，课间休息 10 分。",
      "question": "一节课加课间休息一共多少分？",
      "formula": "40 + 10 = ?", "answer": 50, "choices": [50, 30, 60, 45],
      "visualType": "numberBond",
      "visualData": { "type": "numberBond", "total": 50, "parts": [ { "value": 40, "label": "一节课", "color": "#2570E8" }, { "value": 10, "label": "课间", "color": "#F5B800" } ] },
      "hint": "把两段时间合起来，用加法",
      "variants": [
        { "question": "两节课一共多少分？", "formula": "40 + 40 = ?", "answer": 80, "hint": "两个 40" },
        { "question": "一节课加两次课间一共多少分？", "formula": "40 + 10 + 10 = ?", "answer": 60, "hint": "先 40+10=50，再加 10" } ],
      "discoverySteps": [
        { "q": "🕐 一节课多少分？课间多少分？", "choices": ["40 分、10 分", "10 分、40 分", "40 分、40 分", "不知道"], "answer": "40 分、10 分", "explain": "一节课 40 分，课间 10 分" },
        { "q": "🧩 求一共多少分，用什么方法？", "choices": ["加法", "减法", "乘法", "不知道"], "answer": "加法", "explain": "把两段时间合起来用加法" },
        { "q": "🧮 40 + 10 等于多少？", "choices": ["50", "30", "60", "不知道"], "answer": "50", "explain": "40+10=50 分" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "整体 50 分分成「一节课 40」和「课间 10」", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 时间也能相加", "text": "同一单位的时间可以直接相加", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 安排自己的时间", "text": "会算时间，就能自己制定学习计划", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    // ================= 第八单元 · 数学广角——搭配（一） =================
    { "id": "2A-MATCH-01", "knowledge": "简单的排列", "difficulty": 2,
      "scene": "数字卡片上有 1、2、3 三张牌，小明要用其中两张摆出两位数，十位和个位不能一样。",
      "question": "用 1、2、3 能摆出多少个不同的两位数？",
      "formula": "3 × 2 = ?", "answer": 6, "choices": [6, 3, 4, 9],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 5, "bars": [ { "label": "十位有 3 种选法", "value": 3, "color": "#2570E8" }, { "label": "个位剩 2 种选法", "value": 2, "color": "#F5B800" } ] },
      "hint": "十位先选（3 种），个位再从剩下的数里选（2 种），3×2=6",
      "variants": [
        { "question": "用 2、5、8 能摆出多少个不同的两位数？", "formula": "3 × 2 = ?", "answer": 6, "hint": "十位 3 种，个位 2 种" },
        { "question": "用 1、2 能摆出多少个不同的两位数？", "formula": "2 × 1 = ?", "answer": 2, "hint": "12 和 21" } ],
      "discoverySteps": [
        { "q": "🔢 十位上的数字有几种选法？", "choices": ["3 种", "2 种", "1 种", "不知道"], "answer": "3 种", "explain": "1、2、3 都可以放在十位" },
        { "q": "🧮 十位定好后，个位还剩几种选法？", "choices": ["2 种", "3 种", "1 种", "不知道"], "answer": "2 种", "explain": "个位不能和十位相同，只剩 2 个数" },
        { "q": "🧩 一共有多少种？", "choices": ["6 种", "3 种", "4 种", "不知道"], "answer": "6 种", "explain": "3×2=6（12、13、21、23、31、32）" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "先定十位 3 种，再定个位 2 种", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 有序思考", "text": "按顺序一个一个摆，不重复不遗漏", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 排列与顺序有关", "text": "12 和 21 是两个不同的数，顺序变了结果就变", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MATCH-02", "knowledge": "简单的组合", "difficulty": 2,
      "scene": "小丽的衣柜里有 3 件不同的上衣和 2 条不同的裤子，她想配成一套穿。",
      "question": "一共有多少种不同的搭配方法？",
      "formula": "3 × 2 = ?", "answer": 6, "choices": [6, 5, 4, 8],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 5, "bars": [ { "label": "上衣 3 件", "value": 3, "color": "#2570E8" }, { "label": "裤子 2 条", "value": 2, "color": "#F5B800" } ] },
      "hint": "每件上衣都能配 2 条裤子：3×2=6",
      "variants": [
        { "question": "4 件上衣配 2 条裤子，有几种搭配？", "formula": "4 × 2 = ?", "answer": 8, "hint": "每件配 2 条" },
        { "question": "3 件上衣配 3 条裤子，有几种搭配？", "formula": "3 × 3 = ?", "answer": 9, "hint": "每件配 3 条" } ],
      "discoverySteps": [
        { "q": "🔢 衣柜里有几件上衣？几条裤子？", "choices": ["3 件、2 条", "2 件、3 条", "3 件、3 条", "不知道"], "answer": "3 件、2 条", "explain": "3 件上衣、2 条裤子" },
        { "q": "🧮 拿第 1 件上衣，能配出几种？", "choices": ["2 种", "3 种", "1 种", "不知道"], "answer": "2 种", "explain": "1 件上衣可以配 2 条裤子" },
        { "q": "🧩 3 件上衣一共能配出多少种？", "choices": ["6 种", "5 种", "4 种", "不知道"], "answer": "6 种", "explain": "3 个 2 是 6：3×2=6" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "每一件上衣都「连」出 2 条裤子", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 连线法", "text": "把上衣和裤子一一连线，线有多少条就有多少种搭配", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 分步乘法", "text": "第一步有几种，第二步有几种，乘起来就是总数", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MATCH-03", "knowledge": "简单的组合", "difficulty": 2,
      "scene": "水果店有苹果、香蕉、橘子、西瓜、葡萄 5 种水果，妈妈想挑 2 种带回家。",
      "question": "从 5 种水果中选 2 种，一共有多少种选法？",
      "formula": "从 5 种里选 2 种 = ?", "answer": 10, "choices": [10, 5, 20, 7],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 5, "bars": [ { "label": "水果共 5 种", "value": 5, "color": "#2570E8" } ] },
      "hint": "按顺序数：第 1 种能和后面 4 种配，固定第一种后一个一个数",
      "variants": [
        { "question": "从 4 种水果中选 2 种，有多少种选法？", "formula": "从 4 种里选 2 种 = ?", "answer": 6, "hint": "3+2+1=6" },
        { "question": "从 3 种水果中选 2 种，有多少种选法？", "formula": "从 3 种里选 2 种 = ?", "answer": 3, "hint": "2+1=3" } ],
      "discoverySteps": [
        { "q": "🔢 一共有几种水果？要选几种？", "choices": ["5 种、选 2 种", "2 种、选 5 种", "5 种、选 5 种", "不知道"], "answer": "5 种、选 2 种", "explain": "5 种里选 2 种" },
        { "q": "🧮 固定第 1 种，它还能和几种配？", "choices": ["4 种", "5 种", "2 种", "不知道"], "answer": "4 种", "explain": "剩下 4 种" },
        { "q": "🧩 照这样一直数下去，一共多少种？", "choices": ["10 种", "5 种", "20 种", "不知道"], "answer": "10 种", "explain": "4+3+2+1=10 种" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "5 种水果，每两种之间连一条线", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 组合与顺序无关", "text": "苹果+香蕉和香蕉+苹果是同一种选法，不能重复数", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 有序枚举法", "text": "固定第一个，依次往后配，数完再换下一个", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MATCH-04", "knowledge": "简单的组合", "difficulty": 2,
      "scene": "4 个小朋友见面了，每两个人握一次手，互相问好。",
      "question": "他们一共要握多少次手？",
      "formula": "3 + 2 + 1 = ?", "answer": 6, "choices": [6, 4, 8, 12],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 4, "bars": [ { "label": "小朋友共 4 人", "value": 4, "color": "#2570E8" } ] },
      "hint": "第 1 个人要和 3 个人握，第 2 个人和 2 个人握……3+2+1=6",
      "variants": [
        { "question": "3 个小朋友每两人握一次手，共握几次？", "formula": "2 + 1 = ?", "answer": 3, "hint": "2+1=3" },
        { "question": "5 个小朋友每两人握一次手，共握几次？", "formula": "4 + 3 + 2 + 1 = ?", "answer": 10, "hint": "4+3+2+1=10" } ],
      "discoverySteps": [
        { "q": "🔢 一共有几个小朋友？", "choices": ["4 个", "2 个", "6 个", "不知道"], "answer": "4 个", "explain": "4 个小朋友" },
        { "q": "🧮 第 1 个小朋友要和几个小朋友握手？", "choices": ["3 个", "4 个", "2 个", "不知道"], "answer": "3 个", "explain": "除了自己，还剩 3 个" },
        { "q": "🧩 一共握多少次？", "choices": ["6 次", "4 次", "8 次", "不知道"], "answer": "6 次", "explain": "3+2+1=6 次，握手不能重复数" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "4 个点两两连线，数一数有几条线", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 不重不漏", "text": "甲和乙握过，乙就不用再和甲握一次", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 递减相加", "text": "3+2+1、4+3+2+1……人数越多，前一项越大", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MATCH-05", "knowledge": "简单的组合", "difficulty": 3,
      "scene": "书架上有 6 本不同的故事书，小明想借 2 本回家看。",
      "question": "从 6 本书中借 2 本，一共有多少种借法？",
      "formula": "5 + 4 + 3 + 2 + 1 = ?", "answer": 15, "choices": [15, 6, 30, 12],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 6, "bars": [ { "label": "故事书共 6 本", "value": 6, "color": "#2570E8" } ] },
      "hint": "固定第 1 本，能配 5 本；再固定第 2 本，能配 4 本……5+4+3+2+1",
      "variants": [
        { "question": "从 5 本书中借 2 本，有多少种借法？", "formula": "4 + 3 + 2 + 1 = ?", "answer": 10, "hint": "4+3+2+1=10" },
        { "question": "从 4 本书中借 2 本，有多少种借法？", "formula": "3 + 2 + 1 = ?", "answer": 6, "hint": "3+2+1=6" } ],
      "discoverySteps": [
        { "q": "🔢 一共有几本书？要借几本？", "choices": ["6 本、借 2 本", "2 本、借 6 本", "6 本、借 6 本", "不知道"], "answer": "6 本、借 2 本", "explain": "6 本里选 2 本" },
        { "q": "🧮 固定第 1 本，后面还有几本可以配？", "choices": ["5 本", "6 本", "2 本", "不知道"], "answer": "5 本", "explain": "剩下 5 本" },
        { "q": "🧩 一共多少种借法？", "choices": ["15 种", "6 种", "30 种", "不知道"], "answer": "15 种", "explain": "5+4+3+2+1=15 种" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "6 本书两两配对，配出的对数就是答案", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 递减相加", "text": "每固定一本，可选的本数少 1", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 从简单情况找规律", "text": "先算 2 本、3 本，再推出一般规律", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },

    { "id": "2A-MATCH-06", "knowledge": "简单的排列", "difficulty": 3,
      "scene": "小明有 2、5、8、9 四张数字卡片，他想用其中两张摆出两位数，十位和个位不能一样。",
      "question": "一共能摆出多少个不同的两位数？",
      "formula": "4 × 3 = ?", "answer": 12, "choices": [12, 8, 16, 6],
      "visualType": "barModel",
      "visualData": { "type": "bar", "total": 7, "bars": [ { "label": "十位有 4 种选法", "value": 4, "color": "#2570E8" }, { "label": "个位剩 3 种选法", "value": 3, "color": "#F5B800" } ] },
      "hint": "十位 4 种，个位剩下 3 种，4×3=12",
      "variants": [
        { "question": "用 3 张数字卡片摆两位数，能摆多少个？", "formula": "3 × 2 = ?", "answer": 6, "hint": "3×2=6" },
        { "question": "用 5 张数字卡片摆两位数，能摆多少个？", "formula": "5 × 4 = ?", "answer": 20, "hint": "5×4=20" } ],
      "discoverySteps": [
        { "q": "🔢 一共有几张数字卡片？", "choices": ["4 张", "2 张", "12 张", "不知道"], "answer": "4 张", "explain": "2、5、8、9 共 4 张" },
        { "q": "🧮 十位有几种选法？", "choices": ["4 种", "3 种", "1 种", "不知道"], "answer": "4 种", "explain": "4 张卡片都能放十位" },
        { "q": "🧩 个位还剩几种选法？总共多少种？", "choices": ["3 种、12 种", "4 种、16 种", "3 种、7 种", "不知道"], "answer": "3 种、12 种", "explain": "个位剩 3 种，4×3=12" } ],
      "explainLayers": [
        { "icon": "👀", "title": "看图 — 图形结构", "text": "分两步：先定十位，再定个位", "bg": "var(--teal-soft)", "color": "var(--teal)" },
        { "icon": "🧠", "title": "理解 — 分步计数", "text": "第一步 4 种，第二步 3 种，4×3=12 种", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)" },
        { "icon": "🚀", "title": "推广 — 数字越多，摆法越多", "text": "n 张卡片能摆 n×(n-1) 个两位数", "bg": "var(--coral-soft)", "color": "var(--coral)" } ] },
  ],
  "knowledgeMap": [
    { "id": "2A-01", "name": "认识厘米", "concept": "厘米是较小的长度单位；量长度时物体左端要对齐 0 刻度", "prerequisite": "一上·比长短", "extends": "2A-02 认识米", "visualStrategy": "尺子刻度", "visualType": "numberLine", "coreLiteracy": "量感", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-02", "name": "认识米", "concept": "1 米 = 100 厘米，米与厘米的进率是 100", "prerequisite": "认识厘米", "extends": "2A-04 长度单位换算", "visualStrategy": "米尺对比", "visualType": "barModel", "coreLiteracy": "量感", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-03", "name": "线段", "concept": "线段是直的、有两个端点、可以量出长度", "prerequisite": "认识厘米", "extends": "2A-04 长度单位换算", "visualStrategy": "端点标注", "visualType": "numberLine", "coreLiteracy": "空间观念", "difficulty": 1, "isKeyTopic": false },
    { "id": "2A-04", "name": "长度单位换算", "concept": "单位不同的量要先统一单位再计算；米换厘米乘 100", "prerequisite": "认识米", "extends": "3A-11 毫米与分米", "visualStrategy": "单位换算", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-05", "name": "不进位加", "concept": "个位加个位、十位加十位，不需要进位", "prerequisite": "一下·100 以内加减", "extends": "2A-06 进位加", "visualStrategy": "数位对齐", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 1, "isKeyTopic": false },
    { "id": "2A-06", "name": "进位加", "concept": "个位相加满十，要向十位进 1", "prerequisite": "不进位加", "extends": "3A-10 万以内加法笔算", "visualStrategy": "满十进一", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-07", "name": "不退位减", "concept": "个位减个位、十位减十位，够减就不需要借位", "prerequisite": "2A-05 不进位加", "extends": "2A-08 退位减", "visualStrategy": "数位对齐", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 1, "isKeyTopic": false },
    { "id": "2A-08", "name": "退位减", "concept": "个位不够减时，从十位借 1 当 10 再减", "prerequisite": "不退位减", "extends": "3A-11 万以内减法笔算", "visualStrategy": "退一当十", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-09", "name": "连加连减", "concept": "连加连减按从左往右的顺序依次计算", "prerequisite": "2A-06 进位加", "extends": "2B-16 混合运算", "visualStrategy": "分步计算", "visualType": "numberBond", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": false },
    { "id": "2A-10", "name": "解决问题", "concept": "求比一个数多几的数用加法，求少几的数用减法", "prerequisite": "2A-06 进位加", "extends": "3A-13 两步解决问题", "visualStrategy": "条形图比多比少", "visualType": "barModel", "coreLiteracy": "模型意识", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-11", "name": "认识角", "concept": "角由 1 个顶点和 2 条边组成", "prerequisite": "一上·认识图形", "extends": "2A-12 直角", "visualStrategy": "角的组成", "visualType": "geometry", "coreLiteracy": "空间观念", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-12", "name": "直角", "concept": "直角是 90°；用三角尺的直角去比，重合即为直角", "prerequisite": "认识角", "extends": "2A-13 锐角钝角", "visualStrategy": "三角尺比对", "visualType": "geometry", "coreLiteracy": "空间观念", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-13", "name": "锐角钝角", "concept": "比直角小的是锐角，比直角大的是钝角", "prerequisite": "直角", "extends": "4A-20 角的度量", "visualStrategy": "与直角比", "visualType": "geometry", "coreLiteracy": "空间观念", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-14", "name": "乘法的初步认识", "concept": "求几个相同加数的和，用乘法更简便", "prerequisite": "2A-06 进位加", "extends": "2A-15 2~6 的乘法口诀", "visualStrategy": "点子图", "visualType": "areaModel", "coreLiteracy": "运算能力", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-15", "name": "2~6的乘法口诀", "concept": "一句口诀对应两道乘法算式（两个乘数相同时只有一道）", "prerequisite": "乘法的初步认识", "extends": "2A-18 7 的乘法口诀", "visualStrategy": "点子图", "visualType": "areaModel", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-16", "name": "用乘法解决问题", "concept": "每份数 × 份数 = 总数", "prerequisite": "2A-15 2~6 的乘法口诀", "extends": "2B-14 表内除法", "visualStrategy": "条形建模", "visualType": "barModel", "coreLiteracy": "模型意识", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-17", "name": "从不同位置观察", "concept": "同一物体从不同位置观察，看到的形状可能不同", "prerequisite": "一上·认识立体图形", "extends": "4A-22 观察物体（二）", "visualStrategy": "多角度观察", "visualType": "geometry", "coreLiteracy": "空间观念", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-18", "name": "7的乘法口诀", "concept": "一七得七 …… 七八五十六 …… 七九六十三", "prerequisite": "2A-15 2~6 的乘法口诀", "extends": "2A-19 8 的乘法口诀", "visualStrategy": "点子图", "visualType": "areaModel", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-19", "name": "8的乘法口诀", "concept": "一八得八 …… 八八六十四 …… 八九七十二", "prerequisite": "7 的乘法口诀", "extends": "2A-20 9 的乘法口诀", "visualStrategy": "点子图", "visualType": "areaModel", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-20", "name": "9的乘法口诀", "concept": "九九八十一；9 的口诀积的各位数字之和是 9", "prerequisite": "8 的乘法口诀", "extends": "2B-14 表内除法", "visualStrategy": "点子图", "visualType": "areaModel", "coreLiteracy": "运算能力", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-21", "name": "用乘法解决问题（二）", "concept": "排队、装盒、摆盘等问题都可用「每份数 × 份数」", "prerequisite": "9 的乘法口诀", "extends": "2B-14 表内除法", "visualStrategy": "条形建模", "visualType": "barModel", "coreLiteracy": "模型意识", "difficulty": 2, "isKeyTopic": false },
    { "id": "2A-22", "name": "认识几时几分", "concept": "分针走 1 大格是 5 分，走一圈是 60 分", "prerequisite": "一下·认识钟表", "extends": "2A-23 1 时 = 60 分", "visualStrategy": "时间线", "visualType": "numberLine", "coreLiteracy": "量感", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-23", "name": "1时=60分", "concept": "1 时 = 60 分，半时 = 30 分", "prerequisite": "认识几时几分", "extends": "2A-24 时间的计算", "visualStrategy": "时间线", "visualType": "numberLine", "coreLiteracy": "量感", "difficulty": 1, "isKeyTopic": true },
    { "id": "2A-24", "name": "时间的计算", "concept": "经过时间 = 结束时刻 - 开始时刻；分满 60 要向时进 1", "prerequisite": "1 时 = 60 分", "extends": "3A-02 时间计算", "visualStrategy": "时间线", "visualType": "numberLine", "coreLiteracy": "推理意识", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-25", "name": "简单的排列", "concept": "与顺序有关：先定第一位，再定第二位", "prerequisite": "2A-15 2~6 的乘法口诀", "extends": "3B-25 搭配（二）", "visualStrategy": "有序枚举", "visualType": "barModel", "coreLiteracy": "推理意识", "difficulty": 2, "isKeyTopic": true },
    { "id": "2A-26", "name": "简单的组合", "concept": "与顺序无关：递减相加，做到不重复不遗漏", "prerequisite": "简单的排列", "extends": "3B-25 搭配（二）", "visualStrategy": "连线法", "visualType": "barModel", "coreLiteracy": "推理意识", "difficulty": 2, "isKeyTopic": true }
  ]
};
