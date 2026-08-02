// 二年级数学题数据 · 奇趣学园 V5 内容扩充
// 全局变量：window.MATH_GRADE_2 = { '2a': {...}, '2b': {...} }
// 覆盖二年级上册(2a)6单元、下册(2b)6单元，每单元2道主题目，每题配2个变式
// 所有 formula 去除 ' = ?' 后均为可 eval 的算式（×→* ÷→/）
window.MATH_GRADE_2 = {
  '2a': {
    title: '二年级上册·100以内加减与表内乘法',
    sub: '数与代数 · 图形与几何 · 综合实践',
    progress: 0,
    units: [
      { name: '长度单位', level: 'current', children: [{ name: '厘米和米', level: 'done' }, { name: '线段', level: 'current' }] },
      { name: '100以内的加减法', level: 'locked', children: [{ name: '不进位加法', level: 'locked' }, { name: '进位加法', level: 'locked' }, { name: '退位减法', level: 'locked' }] },
      { name: '表内乘法（一）', level: 'locked', children: [{ name: '2-4的乘法口诀', level: 'locked' }, { name: '5-6的乘法口诀', level: 'locked' }] },
      { name: '角的初步认识', level: 'locked', children: [{ name: '直角锐角钝角', level: 'locked' }] },
      { name: '观察物体（一）', level: 'locked', children: [{ name: '前侧后观察', level: 'locked' }] },
      { name: '认识时间', level: 'locked', children: [{ name: '几时几分', level: 'locked' }] }
    ],
    problems: [
      // 单元1 长度单位（1米=100厘米）
      {
        scene: '美工课上小红要把两段彩带接成一根正好1米长的拉花。第一段60厘米，第二段40厘米。她想知道1米到底等于多少厘米。',
        question: '两段彩带接起来正好1米，1米等于多少厘米？',
        formula: '60 + 40 = ?',
        answer: 100,
        choices: [100, 60, 106, 24],
        visualType: 'barModel',
        visualData: { total: 100, parts: [{ label: '第一段', val: 60, color: '#00A896' }, { label: '第二段', val: 40, color: '#F5B800' }] },
        knowledge: '长度单位·厘米和米',
        difficulty: 1,
        hint: '1米=100厘米，把两段加起来',
        variants: [
          { question: '一根铁丝长45厘米，再接上55厘米正好1米，1米是多少厘米？', formula: '45 + 55 = ?', answer: 100, hint: '45加55' },
          { question: '一段路已修70厘米，还剩30厘米就是1米，1米是多少厘米？', formula: '70 + 30 = ?', answer: 100, hint: '70加30' }
        ]
      },
      {
        scene: '量身高时小亮发现自己高80厘米，他想算自己比1米（100厘米）还要矮多少才能长到1米。',
        question: '小亮高80厘米，比1米矮多少厘米？',
        formula: '100 - 80 = ?',
        answer: 20,
        choices: [20, 80, 30, 12],
        visualType: 'numberLine',
        visualData: { start: 0, end: 100, points: [{ pos: 80, label: '小亮身高', color: '#00A896' }, { pos: 100, label: '1米', color: '#F5B800' }], highlight: [80, 100] },
        knowledge: '长度单位·厘米和米',
        difficulty: 2,
        hint: '1米=100厘米，用减法算相差',
        variants: [
          { question: '一根竹竿长90厘米，比1米短多少厘米？', formula: '100 - 90 = ?', answer: 10, hint: '100减90' },
          { question: '一根绳子长75厘米，比1米短多少厘米？', formula: '100 - 75 = ?', answer: 25, hint: '100减75' }
        ]
      },
      // 单元2 100以内的加减法（进位加、加减混合）
      {
        scene: '小明的存钱罐里已经有35元，过生日时妈妈又给了他18元。他打开罐子数一数现在一共存了多少元。',
        question: '存钱罐里35元加上妈妈给的18元，一共多少元？',
        formula: '35 + 18 = ?',
        answer: 53,
        choices: [53, 43, 63, 48],
        visualType: 'barModel',
        visualData: { total: 53, parts: [{ label: '原有', val: 35, color: '#00A896' }, { label: '妈妈给', val: 18, color: '#F5B800' }] },
        knowledge: '100以内进位加法',
        difficulty: 2,
        hint: '个位5+8=13，满十向十位进1',
        variants: [
          { question: '储蓄罐里有47元，又存进26元，一共多少元？', formula: '47 + 26 = ?', answer: 73, hint: '7+6=13进位' },
          { question: '图书角有28本故事书，又买来35本，一共多少本？', formula: '28 + 35 = ?', answer: 63, hint: '8+5=13进位' }
        ]
      },
      {
        scene: '一辆公共汽车上有52人，到站后下车17人，又上车9人。司机想知道现在车上有多少人。',
        question: '下17人又上9人后，车上现在有多少人？',
        formula: '52 - 17 + 9 = ?',
        answer: 44,
        choices: [44, 26, 48, 34],
        visualType: 'numberLine',
        visualData: { start: 0, end: 60, points: [{ pos: 52, label: '原来', color: '#00A896' }, { pos: 35, label: '下车后', color: '#FB923C' }, { pos: 44, label: '上车后', color: '#F5B800' }], highlight: [52, 35, 44] },
        knowledge: '加减混合运算',
        difficulty: 2,
        hint: '先减再加，从左到右算',
        variants: [
          { question: '车上有45人，下12人又上8人，现在多少人？', formula: '45 - 12 + 8 = ?', answer: 41, hint: '45减12再加8' },
          { question: '阅览室有38人，离开14人又进6人，现在多少人？', formula: '38 - 14 + 6 = ?', answer: 30, hint: '38减14再加6' }
        ]
      },
      // 单元3 表内乘法（2/3/4/5/6 口诀）
      {
        scene: '动物园里来了4只小兔子，每只小兔子都有2只长耳朵。饲养员要数一数这些兔子一共有几只耳朵。',
        question: '4只兔子每只2只耳朵，一共有几只耳朵？',
        formula: '2 × 4 = ?',
        answer: 8,
        choices: [8, 6, 10, 16],
        visualType: 'barModel',
        visualData: { total: 8, parts: [{ label: '兔1', val: 2, color: '#00A896' }, { label: '兔2', val: 2, color: '#F5B800' }, { label: '兔3', val: 2, color: '#00A896' }, { label: '兔4', val: 2, color: '#F5B800' }] },
        knowledge: '表内乘法·2-4口诀',
        difficulty: 1,
        hint: '二四得八，4个2相加',
        variants: [
          { question: '一只手有5根手指，2只手有几根手指？', formula: '5 × 2 = ?', answer: 10, hint: '二五一十' },
          { question: '一辆三轮车有3个轮子，4辆有几轮？', formula: '3 × 4 = ?', answer: 12, hint: '三四十二' }
        ]
      },
      {
        scene: '文具店进货，每盒水彩笔装6支。老板数了5盒，想知道一共进了多少支水彩笔。',
        question: '每盒6支，5盒一共有多少支水彩笔？',
        formula: '6 × 5 = ?',
        answer: 30,
        choices: [30, 11, 35, 25],
        visualType: 'numberLine',
        visualData: { start: 0, end: 30, points: [{ pos: 6, label: '1盒', color: '#00A896' }, { pos: 12, label: '2盒', color: '#F5B800' }, { pos: 18, label: '3盒', color: '#FB923C' }, { pos: 24, label: '4盒', color: '#E8A0BF' }, { pos: 30, label: '5盒', color: '#1E3A5F' }], highlight: [0, 30] },
        knowledge: '表内乘法·5-6口诀',
        difficulty: 2,
        hint: '五六三十，5个6相加',
        variants: [
          { question: '一盒鸡蛋6个，4盒几个？', formula: '6 × 4 = ?', answer: 24, hint: '四六二十四' },
          { question: '一行种5棵树，3行几棵？', formula: '5 × 3 = ?', answer: 15, hint: '三五十五' }
        ]
      },
      // 单元4 角的初步认识
      {
        scene: '数学课上老师让大家数图形的角。三角形有3个角，长方形有4个角。老师问长方形比三角形多几个角。',
        question: '长方形4个角，三角形3个角，长方形比三角形多几个角？',
        formula: '4 - 3 = ?',
        answer: 1,
        choices: [1, 7, 2, 0],
        visualType: 'geometry',
        visualData: { shape: 'triangle', params: { base: 6, height: 5 } },
        knowledge: '角的初步认识',
        difficulty: 1,
        hint: '角的个数相减',
        variants: [
          { question: '长方形有4个直角，三角形最多1个直角，多几个？', formula: '4 - 1 = ?', answer: 3, hint: '4减1' },
          { question: '一个正方形有4个角，2个正方形一共几个角？', formula: '4 × 2 = ?', answer: 8, hint: '4加4' }
        ]
      },
      {
        scene: '小红拿一张三角形纸片做手工，沿直线剪去它的一个角。她好奇剩下的纸片一共有几个角。',
        question: '三角形剪去一个角后，剩下图形一共有几个角？',
        formula: '3 + 1 = ?',
        answer: 4,
        choices: [4, 2, 3, 5],
        visualType: 'geometry',
        visualData: { shape: 'quadrilateral', params: { sides: 4 } },
        knowledge: '角的初步认识',
        difficulty: 2,
        hint: '剪去一个角会多出一个角',
        variants: [
          { question: '长方形有4个角，沿直线剪去一个角，剩下几个角？', formula: '4 + 1 = ?', answer: 5, hint: '剪去一个多一个' },
          { question: '一个三角形3个角，3个三角形一共几个角？', formula: '3 × 3 = ?', answer: 9, hint: '3个3相加' }
        ]
      },
      // 单元5 观察物体（一）
      {
        scene: '小组活动观察一个长方体纸盒。老师告诉大家：长方体一共有6个面，从一个方向看最多能看到3个面。小明想算还有几个面看不到。',
        question: '长方体有6个面，最多看到3个，看不到几个面？',
        formula: '6 - 3 = ?',
        answer: 3,
        choices: [3, 9, 2, 6],
        visualType: 'geometry',
        visualData: { shape: 'rectangle', params: { length: 6, width: 4 } },
        knowledge: '观察物体（一）',
        difficulty: 1,
        hint: '总面数减看到的面数',
        variants: [
          { question: '看一个长方体，最少看到1个面，最多比最少多看几个？', formula: '3 - 1 = ?', answer: 2, hint: '最多减最少' },
          { question: '一个正方体6个面，从一个方向看到1个面，还有几个看不到？', formula: '6 - 1 = ?', answer: 5, hint: '6减1' }
        ]
      },
      {
        scene: '小红从前面、上面、右面三个不同方向观察一个正方体，每个方向各看到1个正方形（不重复数同一面）。她想知道一共看到几个正方形。',
        question: '从三个方向各看一个面，一共看到几个正方形？',
        formula: '1 + 1 + 1 = ?',
        answer: 3,
        choices: [3, 1, 4, 6],
        visualType: 'numberBond',
        visualData: { total: 3, parts: [{ val: 1, color: '#00A896' }, { val: 1, color: '#F5B800' }, { val: 1, color: '#FB923C' }] },
        knowledge: '观察物体（一）',
        difficulty: 2,
        hint: '三个1相加',
        variants: [
          { question: '从前、后、左、右4个方向各看到不同面，共看到几个面？', formula: '1 × 4 = ?', answer: 4, hint: '4个1' },
          { question: '从前面看到1个面，从上面看到1个不同面，共几个？', formula: '1 + 1 = ?', answer: 2, hint: '1加1' }
        ]
      },
      // 单元6 认识时间（1时=60分，几时几分）
      {
        scene: '周末全家看了一场电影，正好2小时。妈妈问小明：1时=60分，这场电影一共播了多少分钟？',
        question: '一场电影2小时，等于多少分钟？',
        formula: '60 × 2 = ?',
        answer: 120,
        choices: [120, 12, 102, 60],
        visualType: 'barModel',
        visualData: { total: 120, parts: [{ label: '第1时', val: 60, color: '#00A896' }, { label: '第2时', val: 60, color: '#F5B800' }] },
        knowledge: '认识时间·1时=60分',
        difficulty: 2,
        hint: '1时=60分，2时就是2个60',
        variants: [
          { question: '看故事书用了3小时，等于多少分钟？', formula: '60 × 3 = ?', answer: 180, hint: '3个60' },
          { question: '做手工用了4小时，等于多少分钟？', formula: '60 × 4 = ?', answer: 240, hint: '4个60' }
        ]
      },
      {
        scene: '动画片3时10分开始，播放25分钟结束。小明想算结束时的分钟数（只算分针走到的刻度）。',
        question: '10分开始再播25分，结束是几分？',
        formula: '10 + 25 = ?',
        answer: 35,
        choices: [35, 25, 15, 45],
        visualType: 'numberLine',
        visualData: { start: 0, end: 60, points: [{ pos: 10, label: '开始', color: '#00A896' }, { pos: 35, label: '结束', color: '#F5B800' }], highlight: [0, 60] },
        knowledge: '认识时间·几时几分',
        difficulty: 2,
        hint: '把分的部分相加',
        variants: [
          { question: '动画7时20分开始，播15分钟，结束是几分？', formula: '20 + 15 = ?', answer: 35, hint: '20加15' },
          { question: '10时30分开始，过20分钟，是几分？', formula: '30 + 20 = ?', answer: 50, hint: '30加20' }
        ]
      }
    ]
  },
  '2b': {
    title: '二年级下册·表内除法与混合运算',
    sub: '数与代数 · 图形与几何 · 综合实践',
    progress: 0,
    units: [
      { name: '表内除法（一）', level: 'current', children: [{ name: '用2-6乘法口诀求商', level: 'done' }, { name: '用7-9乘法口诀求商', level: 'current' }] },
      { name: '有余数的除法', level: 'locked', children: [{ name: '余数与除数关系', level: 'locked' }] },
      { name: '混合运算', level: 'locked', children: [{ name: '两步计算', level: 'locked' }] },
      { name: '万以内数的认识', level: 'locked', children: [{ name: '读数写数', level: 'locked' }, { name: '比较大小', level: 'locked' }] },
      { name: '克和千克', level: 'locked', children: [{ name: '质量单位换算', level: 'locked' }] },
      { name: '图形的运动', level: 'locked', children: [{ name: '平移旋转对称', level: 'locked' }] }
    ],
    problems: [
      // 单元1 表内除法（2-9口诀求商）
      {
        scene: '妈妈买了12颗草莓，要平均分给3个小朋友。每个小朋友能分到几颗？小明用乘法口诀算商。',
        question: '12颗草莓平均分给3人，每人几颗？',
        formula: '12 ÷ 3 = ?',
        answer: 4,
        choices: [4, 3, 8, 5],
        visualType: 'barModel',
        visualData: { total: 12, parts: [{ label: '小朋友1', val: 4, color: '#00A896' }, { label: '小朋友2', val: 4, color: '#F5B800' }, { label: '小朋友3', val: 4, color: '#FB923C' }] },
        knowledge: '表内除法·2-6口诀求商',
        difficulty: 1,
        hint: '三四十二，商是4',
        variants: [
          { question: '15颗糖平均分给5人，每人几颗？', formula: '15 ÷ 5 = ?', answer: 3, hint: '三五十五' },
          { question: '20根铅笔平均分给4人，每人几根？', formula: '20 ÷ 4 = ?', answer: 5, hint: '四五二十' }
        ]
      },
      {
        scene: '花店有45朵花，要扎成每束9朵。老板要算一共能扎几束花。',
        question: '45朵花每束9朵，能扎几束？',
        formula: '45 ÷ 9 = ?',
        answer: 5,
        choices: [5, 4, 36, 54],
        visualType: 'numberLine',
        visualData: { start: 0, end: 45, points: [{ pos: 9, label: '1束', color: '#00A896' }, { pos: 18, label: '2束', color: '#F5B800' }, { pos: 27, label: '3束', color: '#FB923C' }, { pos: 36, label: '4束', color: '#E8A0BF' }, { pos: 45, label: '5束', color: '#1E3A5F' }], highlight: [0, 45] },
        knowledge: '表内除法·7-9口诀求商',
        difficulty: 2,
        hint: '五九四十五，商是5',
        variants: [
          { question: '24朵花每束6朵，扎几束？', formula: '24 ÷ 6 = ?', answer: 4, hint: '四六二十四' },
          { question: '32颗珠子每串8颗，串几串？', formula: '32 ÷ 8 = ?', answer: 4, hint: '四八三十二' }
        ]
      },
      // 单元2 有余数的除法
      {
        scene: '妈妈把22颗草莓平均放到4个盘子里，每个盘子放5颗，最后还剩2颗放不下。妈妈让小红算这些草莓分盘前一共有多少颗。',
        question: '4盘每盘5颗再加剩2颗，草莓一共多少颗？',
        formula: '5 × 4 + 2 = ?',
        answer: 22,
        choices: [22, 20, 12, 24],
        visualType: 'barModel',
        visualData: { total: 22, parts: [{ label: '4盘', val: 20, color: '#00A896' }, { label: '剩下', val: 2, color: '#FB923C' }] },
        knowledge: '有余数的除法',
        difficulty: 2,
        hint: '先用乘法算分掉的，再加上余数',
        variants: [
          { question: '3篮每篮5个苹果剩2个，原来共几个？', formula: '5 × 3 + 2 = ?', answer: 17, hint: '先乘再加余数' },
          { question: '4人每人7块糖剩2块，原来共几块？', formula: '7 × 4 + 2 = ?', answer: 30, hint: '先乘再加余数' }
        ]
      },
      {
        scene: '23个同学去划船，每条船坐4人，已经坐满了5条船。领队要算还有几个同学没坐上船。',
        question: '23人坐满5条船（每船4人），还剩几人没坐上船？',
        formula: '23 - 4 × 5 = ?',
        answer: 3,
        choices: [3, 7, 2, 18],
        visualType: 'numberBond',
        visualData: { total: 23, parts: [{ val: 20, color: '#00A896' }, { val: 3, color: '#FB923C' }] },
        knowledge: '有余数的除法',
        difficulty: 3,
        hint: '先算5条船坐了几人（4×5），再用总数减',
        variants: [
          { question: '19人坐满6条船每船3人，还剩几人？', formula: '19 - 3 × 6 = ?', answer: 1, hint: '先乘后减' },
          { question: '25人坐满5条船每船4人，还剩几人？', formula: '25 - 4 × 5 = ?', answer: 5, hint: '先乘后减' }
        ]
      },
      // 单元3 混合运算（两步）
      {
        scene: '文具店铅笔2元一支，小明买了4支铅笔和1块3元的橡皮。他到收银台要算一共付多少元。',
        question: '4支铅笔（2元/支）加1块3元橡皮，一共付多少元？',
        formula: '2 × 4 + 3 = ?',
        answer: 11,
        choices: [11, 8, 15, 9],
        visualType: 'barModel',
        visualData: { total: 11, parts: [{ label: '铅笔', val: 8, color: '#00A896' }, { label: '橡皮', val: 3, color: '#F5B800' }] },
        knowledge: '混合运算·两步计算',
        difficulty: 2,
        hint: '先乘后加：先算2×4',
        variants: [
          { question: '3本本子4元/本加1支5元钢笔，共几元？', formula: '3 × 4 + 5 = ?', answer: 17, hint: '先乘后加' },
          { question: '2千克苹果6元/千克加1把2元香蕉，共几元？', formula: '6 × 2 + 2 = ?', answer: 14, hint: '先乘后加' }
        ]
      },
      {
        scene: '商店里有20个气球，卖出3束每束4个。店员要算还剩多少个气球。',
        question: '20个气球卖出3束每束4个，还剩多少个？',
        formula: '20 - 4 × 3 = ?',
        answer: 8,
        choices: [8, 16, 12, 2],
        visualType: 'numberBond',
        visualData: { total: 20, parts: [{ val: 12, color: '#FB923C' }, { val: 8, color: '#00A896' }] },
        knowledge: '混合运算·两步计算',
        difficulty: 3,
        hint: '先算卖出的4×3，再用总数减',
        variants: [
          { question: '30个气球卖出4束每束5个，剩几个？', formula: '30 - 5 × 4 = ?', answer: 10, hint: '先乘后减' },
          { question: '25个气球卖出3束每束6个，剩几个？', formula: '25 - 6 × 3 = ?', answer: 7, hint: '先乘后减' }
        ]
      },
      // 单元4 万以内数的认识
      {
        scene: '猜数游戏：老师报一个数，它由3个千、2个百和5个一组成。同学们要在计数器上拨出这个数。',
        question: '3个千、2个百、5个一合起来是多少？',
        formula: '3000 + 200 + 5 = ?',
        answer: 3205,
        choices: [3205, 325, 3250, 3025],
        visualType: 'barModel',
        visualData: { total: 3205, parts: [{ label: '千', val: 3000, color: '#00A896' }, { label: '百', val: 200, color: '#F5B800' }, { label: '一', val: 5, color: '#FB923C' }] },
        knowledge: '万以内数的认识·数的组成',
        difficulty: 2,
        hint: '千位3、百位2、个位5，中间用0占位',
        variants: [
          { question: '2个千、4个百、3个一合起来是多少？', formula: '2000 + 400 + 3 = ?', answer: 2403, hint: '中间十位是0' },
          { question: '5个千、1个百、6个十合起来是多少？', formula: '5000 + 100 + 60 = ?', answer: 5160, hint: '个位是0' }
        ]
      },
      {
        scene: '阳光小学有学生1240人，红星小学有学生1420人。校长想知道两所学校的人数相差多少。',
        question: '红星小学1420人比阳光小学1240人多多少人？',
        formula: '1420 - 1240 = ?',
        answer: 180,
        choices: [180, 280, 80, 1800],
        visualType: 'numberBond',
        visualData: { total: 1420, parts: [{ val: 1240, color: '#00A896' }, { val: 180, color: '#FB923C' }] },
        knowledge: '万以内数的认识·比较大小',
        difficulty: 3,
        hint: '同千位比百位，相同数位对齐相减',
        variants: [
          { question: '苹果树1050棵，梨树1200棵，相差几棵？', formula: '1200 - 1050 = ?', answer: 150, hint: '对齐相减' },
          { question: '上午到校815人，下午到校980人，相差几人？', formula: '980 - 815 = ?', answer: 165, hint: '对齐相减' }
        ]
      },
      // 单元5 克和千克（1千克=1000克）
      {
        scene: '超市里一袋食盐重500克。妈妈买了2袋食盐，她要算一共重多少克。',
        question: '2袋食盐每袋500克，一共重多少克？',
        formula: '500 × 2 = ?',
        answer: 1000,
        choices: [1000, 100, 500, 1002],
        visualType: 'barModel',
        visualData: { total: 1000, parts: [{ label: '第1袋', val: 500, color: '#00A896' }, { label: '第2袋', val: 500, color: '#F5B800' }] },
        knowledge: '克和千克',
        difficulty: 2,
        hint: '500+500=1000，正好1千克',
        variants: [
          { question: '一瓶油重300克，2瓶重几克？', formula: '300 × 2 = ?', answer: 600, hint: '300加300' },
          { question: '一包饼干250克，4包重几克？', formula: '250 × 4 = ?', answer: 1000, hint: '4个250' }
        ]
      },
      {
        scene: '水果摊上一个西瓜重4千克。小明知道1千克=1000克，他要算这个西瓜等于多少克。',
        question: '4千克等于多少克？',
        formula: '1000 × 4 = ?',
        answer: 4000,
        choices: [4000, 400, 1004, 500],
        visualType: 'numberLine',
        visualData: { start: 0, end: 4000, points: [{ pos: 1000, label: '1千克', color: '#00A896' }, { pos: 2000, label: '2千克', color: '#F5B800' }, { pos: 3000, label: '3千克', color: '#FB923C' }, { pos: 4000, label: '4千克', color: '#1E3A5F' }], highlight: [0, 4000] },
        knowledge: '克和千克·单位换算',
        difficulty: 2,
        hint: '1千克=1000克，4个1000',
        variants: [
          { question: '一袋大米3千克，等于多少克？', formula: '1000 × 3 = ?', answer: 3000, hint: '3个1000' },
          { question: '一个南瓜5千克，等于多少克？', formula: '1000 × 5 = ?', answer: 5000, hint: '5个1000' }
        ]
      },
      // 单元6 图形的运动（平移/旋转/对称）
      {
        scene: '手工课剪窗花，把一张正方形纸对折1次分成2层。老师问如果再对折1次（同一方向）一共会分成几层。',
        question: '对折1次2层，再对折1次一共分成几层？',
        formula: '2 × 2 = ?',
        answer: 4,
        choices: [4, 2, 8, 6],
        visualType: 'barModel',
        visualData: { total: 4, parts: [{ label: '1层', val: 1, color: '#00A896' }, { label: '2层', val: 1, color: '#00A896' }, { label: '3层', val: 1, color: '#F5B800' }, { label: '4层', val: 1, color: '#F5B800' }] },
        knowledge: '图形的运动·轴对称',
        difficulty: 1,
        hint: '每对折1次层数乘2',
        variants: [
          { question: '正方形纸对折3次，一共分成几层？', formula: '2 × 2 × 2 = ?', answer: 8, hint: '3次就是2乘3回' },
          { question: '轴对称蝴蝶左翅膀3个花纹，左右对称一共几个？', formula: '3 × 2 = ?', answer: 6, hint: '左右相同' }
        ]
      },
      {
        scene: '景区缆车从山脚到山腰平移了60米，再从山腰到山顶平移了40米。工作人员要算缆车一共平移了多少米。',
        question: '缆车平移60米再加40米，一共平移多少米？',
        formula: '60 + 40 = ?',
        answer: 100,
        choices: [100, 24, 20, 140],
        visualType: 'numberLine',
        visualData: { start: 0, end: 100, points: [{ pos: 60, label: '山腰', color: '#00A896' }, { pos: 100, label: '山顶', color: '#F5B800' }], highlight: [0, 60, 100] },
        knowledge: '图形的运动·平移',
        difficulty: 2,
        hint: '把两段平移距离相加',
        variants: [
          { question: '电梯从1楼到5楼平移4层每层3米，共平移几米？', formula: '3 × 4 = ?', answer: 12, hint: '4个3' },
          { question: '滑梯从顶到地平移2米，玩3次共平移几米？', formula: '2 × 3 = ?', answer: 6, hint: '3个2' }
        ]
      }
    ]
  }
};
