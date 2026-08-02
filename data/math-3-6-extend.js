// 三-六年级数学题扩充数据 · 奇趣学园 V5
// 覆盖各学期 units 中尚未出题的知识点，每学期 4 道主题目，每题带 2 个 variants
// 全局变量：window.MATH_EXTEND_3_6 = { '3a_e':[4题], '3b_e':[4题], ..., '6b_e':[4题] }
// 颜色：#00A896(主) #F5B800(辅) #FB923C(珊瑚) #E8A0BF(粉) #1E3A5F(深蓝)
window.MATH_EXTEND_3_6 = {
  // ========== 三年级上册（3a）补充：测量 / 秒的认识 / 多位数乘一位数口算 / 分数比较大小 ==========
  '3a_e': [
    {
      scene: '粮仓运来一车稻谷共2000千克，保管员要把它换算成吨来登记入账。他想起老师教过千克和吨的换算关系。',
      question: '这些稻谷合多少吨？',
      formula: '2000 ÷ 1000 = ?',
      answer: 2,
      choices: [2, 20, 200, 2000],
      visualType: 'numberLine',
      visualData: { start: 0, end: 4, points: [{ pos: 1, label: '1吨=1000kg', color: '#00A896' }, { pos: 2, label: '2吨=2000kg', color: '#F5B800' }], highlight: [0, 2] },
      knowledge: '吨的认识与单位换算',
      difficulty: 2,
      hint: '1吨=1000千克',
      variants: [
        { question: '3000千克合多少吨？', formula: '3000÷1000=?', answer: 3, hint: '1吨=1000千克' },
        { question: '5000千克合多少吨？', formula: '5000÷1000=?', answer: 5, hint: '满1000千克是1吨' }
      ]
    },
    {
      scene: '体育课上老师用秒表给小刚计时，小刚跑400米用了3分钟。老师问他这3分钟合多少秒。',
      question: '3分钟合多少秒？',
      formula: '3 × 60 = ?',
      answer: 180,
      choices: [180, 120, 240, 300],
      visualType: 'numberLine',
      visualData: { start: 0, end: 240, points: [{ pos: 60, label: '1分=60秒', color: '#00A896' }, { pos: 120, label: '2分', color: '#F5B800' }, { pos: 180, label: '3分', color: '#FB923C' }], highlight: [0, 180] },
      knowledge: '秒的认识与时间换算',
      difficulty: 2,
      hint: '1分=60秒',
      variants: [
        { question: '2分钟合多少秒？', formula: '2×60=?', answer: 120, hint: '1分=60秒' },
        { question: '4分钟合多少秒？', formula: '4×60=?', answer: 240, hint: '1分=60秒' }
      ]
    },
    {
      scene: '学校买来整捆的练习本发给同学，每捆200本，共买了3捆。老师让小红口算一共买了多少本。',
      question: '一共买了多少本练习本？',
      formula: '200 × 3 = ?',
      answer: 600,
      choices: [600, 60, 500, 800],
      visualType: 'barModel',
      visualData: { total: 600, parts: [{ label: '第1捆', val: 200, color: '#00A896' }, { label: '第2捆', val: 200, color: '#F5B800' }, { label: '第3捆', val: 200, color: '#FB923C' }] },
      knowledge: '多位数乘一位数口算',
      difficulty: 2,
      hint: '2×3=6，再添两个0',
      variants: [
        { question: '300×4=?', formula: '300×4=?', answer: 1200, hint: '3×4=12添两个0' },
        { question: '400×2=?', formula: '400×2=?', answer: 800, hint: '4×2=8添两个0' }
      ]
    },
    {
      scene: '妈妈把一个披萨平均切成8块。小明吃了3块，小红吃了2块。妈妈问谁吃得多，多吃的占整块披萨的八分之几。',
      question: '小明比小红多吃了这块披萨的八分之几？（填分子）',
      formula: '3 - 2 = ?',
      answer: 1,
      choices: [1, 5, 6, 8],
      visualType: 'fractionStrip',
      visualData: { num: 3, total: 8, color: '#00A896' },
      knowledge: '分数比较大小',
      difficulty: 2,
      hint: '3块比2块多1块，即多八分之一',
      variants: [
        { question: '披萨分6份，甲吃4份乙吃2份甲多吃几分之几？（填分子）', formula: '4-2=?', answer: 2, hint: '4块比2块多2块' },
        { question: '披萨分5份，甲吃3份乙吃1份甲多吃几分之几？（填分子）', formula: '3-1=?', answer: 2, hint: '3块比1块多2块' }
      ]
    }
  ],

  // ========== 三年级下册（3b）补充：小数读写 / 24时计时法 / 面积单位换算 / 两位数乘两位数估算 ==========
  '3b_e': [
    {
      scene: '文具店货架上标着一本笔记本3元5角。小红要把它写成以元为单位的小数来记账。',
      question: '3元5角写成以元为单位的小数是多少元？',
      formula: '3 + 5 ÷ 10 = ?',
      answer: 3.5,
      choices: [3.5, 35, 3.05, 5.3],
      visualType: 'numberLine',
      visualData: { start: 0, end: 5, points: [{ pos: 3, label: '3元', color: '#00A896' }, { pos: 3.5, label: '3.5元', color: '#F5B800' }], highlight: [0, 3.5] },
      knowledge: '小数的读写',
      difficulty: 2,
      hint: '5角=0.5元，合起来3.5元',
      variants: [
        { question: '2元8角=?元', formula: '2+8÷10=?', answer: 2.8, hint: '8角=0.8元' },
        { question: '4元3角=?元', formula: '4+3÷10=?', answer: 4.3, hint: '3角=0.3元' }
      ]
    },
    {
      scene: '小明坐的高铁下午3时从北京出发。老师让同学们用24时计时法表示这个出发时间。',
      question: '下午3时用24时计时法表示是几时？',
      formula: '12 + 3 = ?',
      answer: 15,
      choices: [15, 3, 13, 14],
      visualType: 'numberLine',
      visualData: { start: 0, end: 24, points: [{ pos: 3, label: '凌晨3时', color: '#00A896' }, { pos: 15, label: '下午3时', color: '#F5B800' }], highlight: [12, 15] },
      knowledge: '24时计时法',
      difficulty: 2,
      hint: '下午时间用12时加普通时',
      variants: [
        { question: '下午5时是24时制几点？', formula: '12+5=?', answer: 17, hint: '下午加12' },
        { question: '下午8时是24时制几点？', formula: '12+8=?', answer: 20, hint: '下午加12' }
      ]
    },
    {
      scene: '小红量得书桌桌面长6分米、宽4分米。老师让她先算出面积，再换算成平方厘米。',
      question: '桌面面积合多少平方厘米？',
      formula: '6 × 4 × 100 = ?',
      answer: 2400,
      choices: [2400, 240, 24, 24000],
      visualType: 'geometry',
      visualData: { shape: 'rectangle', params: { length: 6, width: 4 } },
      knowledge: '面积单位换算',
      difficulty: 3,
      hint: '1平方分米=100平方厘米',
      variants: [
        { question: '长5宽3分米面积合多少平方厘米？', formula: '5×3×100=?', answer: 1500, hint: '1平方分米=100平方厘米' },
        { question: '长8宽2分米面积合多少平方厘米？', formula: '8×2×100=?', answer: 1600, hint: '1平方分米=100平方厘米' }
      ]
    },
    {
      scene: '学校组织看电影，全校有22个班，每班大约40人。老师让小刚估算一共大约多少人。',
      question: '全校大约一共多少人？',
      formula: '20 × 40 = ?',
      answer: 800,
      choices: [800, 200, 80, 8000],
      visualType: 'areaModel',
      visualData: { a: 20, b: 40, parts: [800], result: 800 },
      knowledge: '两位数乘两位数估算',
      difficulty: 2,
      hint: '把22看成20再乘40',
      variants: [
        { question: '38×20大约多少？', formula: '40×20=?', answer: 800, hint: '38约等于40' },
        { question: '29×30大约多少？', formula: '30×30=?', answer: 900, hint: '29约等于30' }
      ]
    }
  ],

  // ========== 四年级上册（4a）补充：大数改写 / 平行四边形特征 / 条形统计图 / 烙饼问题 ==========
  '4a_e': [
    {
      scene: '老师告诉同学们：我国某年小学生人数约有10560000人。她让同学们把这个大数改写成以"万"为单位的数。',
      question: '10560000改写成以万为单位是多少万？',
      formula: '10560000 ÷ 10000 = ?',
      answer: 1056,
      choices: [1056, 105, 10560, 105600],
      visualType: 'numberBond',
      visualData: { total: 1056, parts: [{ val: 1000, color: '#00A896' }, { val: 56, color: '#F5B800' }] },
      knowledge: '大数的改写',
      difficulty: 3,
      hint: '去掉末尾4个0，加上万字',
      variants: [
        { question: '20400000改写成万为单位是多少？', formula: '20400000÷10000=?', answer: 2040, hint: '去掉4个0' },
        { question: '38000000改写成万为单位是多少？', formula: '38000000÷10000=?', answer: 3800, hint: '去掉4个0' }
      ]
    },
    {
      scene: '数学课上老师拿出一个平行四边形卡片，量得一组对边都是12厘米，另一组对边都是8厘米。老师问这个平行四边形的周长是多少。',
      question: '平行四边形的周长是多少厘米？',
      formula: '(12 + 8) × 2 = ?',
      answer: 40,
      choices: [40, 20, 96, 48],
      visualType: 'geometry',
      visualData: { shape: 'parallelogram', params: { base: 12, side: 8, height: 7 } },
      knowledge: '平行四边形的特征与周长',
      difficulty: 3,
      hint: '对边相等，周长=两组邻边之和×2',
      variants: [
        { question: '一组对边15一组对边10周长？', formula: '(15+10)×2=?', answer: 50, hint: '对边相等' },
        { question: '一组对边9一组对边6周长？', formula: '(9+6)×2=?', answer: 30, hint: '对边相等' }
      ]
    },
    {
      scene: '老师统计四年级各班图书角的本数并画成条形统计图：一班45本，二班38本，三班42本，四班35本。老师问四个班一共多少本。',
      question: '四个班图书角一共有多少本？',
      formula: '45 + 38 + 42 + 35 = ?',
      answer: 160,
      choices: [160, 150, 170, 140],
      visualType: 'barModel',
      visualData: { total: 160, parts: [{ label: '一班', val: 45, color: '#00A896' }, { label: '二班', val: 38, color: '#F5B800' }, { label: '三班', val: 42, color: '#FB923C' }, { label: '四班', val: 35, color: '#E8A0BF' }] },
      knowledge: '条形统计图读图',
      difficulty: 3,
      hint: '把四个数依次相加',
      variants: [
        { question: '30+40+35+25=?', formula: '30+40+35+25=?', answer: 130, hint: '逐步相加' },
        { question: '50+45+48+37=?', formula: '50+45+48+37=?', answer: 180, hint: '逐步相加' }
      ]
    },
    {
      scene: '妈妈用平底锅烙饼，每次最多烙2张饼，每张饼两面都要烙，每面要烙3分钟。妈妈要烙3张饼，小刚帮她算最少要几分钟。',
      question: '烙3张饼最少需要几分钟？',
      formula: '3 × 3 = ?',
      answer: 9,
      choices: [9, 12, 6, 18],
      visualType: 'numberLine',
      visualData: { start: 0, end: 9, points: [{ pos: 3, label: '第1阶段', color: '#00A896' }, { pos: 6, label: '第2阶段', color: '#F5B800' }, { pos: 9, label: '第3阶段', color: '#FB923C' }], highlight: [0, 9] },
      knowledge: '烙饼问题（优化）',
      difficulty: 4,
      hint: '每次都烙两张不同的面，共3个3分钟',
      variants: [
        { question: '每次2张每面2分钟烙3张最少几分？', formula: '3×2=?', answer: 6, hint: '3次每次2分' },
        { question: '每次2张每面4分钟烙3张最少几分？', formula: '3×4=?', answer: 12, hint: '3次每次4分' }
      ]
    }
  ],

  // ========== 四年级下册（4b）补充：乘法分配律 / 小数点移动 / 三角形内角和 / 鸡兔同笼（列表法）==========
  '4b_e': [
    {
      scene: '学校买奖品，每套25元，先订了40套，又补订4套，共44套。老师让小美用乘法分配律简便计算一共多少元。',
      question: '一共要花多少元？',
      formula: '25 × (40 + 4) = ?',
      answer: 1100,
      choices: [1100, 1000, 1200, 4400],
      visualType: 'barModel',
      visualData: { total: 1100, parts: [{ label: '25×40', val: 1000, color: '#00A896' }, { label: '25×4', val: 100, color: '#F5B800' }] },
      knowledge: '乘法分配律',
      difficulty: 3,
      hint: '25×40加25×4',
      variants: [
        { question: '25×(20+3)=?', formula: '25×(20+3)=?', answer: 575, hint: '25×20加25×3' },
        { question: '25×(30+4)=?', formula: '25×(30+4)=?', answer: 850, hint: '25×30加25×4' }
      ]
    },
    {
      scene: '一根绳子长0.85米，老师把10根这样的绳子首尾相连接成一根长绳。小红想到小数点移动规律来算总长。',
      question: '10根绳子一共多少米？',
      formula: '0.85 × 10 = ?',
      answer: 8.5,
      choices: [8.5, 0.85, 85, 0.085],
      visualType: 'numberLine',
      visualData: { start: 0, end: 10, points: [{ pos: 0.85, label: '1根', color: '#00A896' }, { pos: 8.5, label: '10根', color: '#F5B800' }], highlight: [0, 8.5] },
      knowledge: '小数点移动规律',
      difficulty: 3,
      hint: '小数点右移一位，扩大10倍',
      variants: [
        { question: '2.5×10=?', formula: '2.5×10=?', answer: 25, hint: '小数点右移一位' },
        { question: '0.6×100=?', formula: '0.6×100=?', answer: 60, hint: '小数点右移两位' }
      ]
    },
    {
      scene: '小亮画了一个三角形，量得其中两个角分别是50°和60°。他想知道第三个角是多少度。',
      question: '第三个角是多少度？',
      formula: '180 - 50 - 60 = ?',
      answer: 70,
      choices: [70, 110, 60, 80],
      visualType: 'numberBond',
      visualData: { total: 180, parts: [{ val: 50, color: '#00A896' }, { val: 60, color: '#F5B800' }, { val: 70, color: '#FB923C' }] },
      knowledge: '三角形内角和',
      difficulty: 3,
      hint: '内角和180°，减去两个已知角',
      variants: [
        { question: '两角40°和70°第三角？', formula: '180-40-70=?', answer: 70, hint: '180减两角' },
        { question: '两角35°和65°第三角？', formula: '180-35-65=?', answer: 80, hint: '180减两角' }
      ]
    },
    {
      scene: '饲养员把鸡和兔子关在一个笼子里，数一数头共8个、脚共22只。他用列表法从全鸡开始，一行行试，算出兔子有多少只。',
      question: '兔子有多少只？',
      formula: '(22 - 8 × 2) ÷ 2 = ?',
      answer: 3,
      choices: [3, 5, 8, 6],
      visualType: 'barModel',
      visualData: { total: 22, parts: [{ label: '假设全鸡', val: 16, color: '#00A896' }, { label: '换兔补脚', val: 6, color: '#F5B800' }] },
      knowledge: '鸡兔同笼（列表法）',
      difficulty: 4,
      hint: '从全鸡列表，逐步把鸡换成兔',
      variants: [
        { question: '6头16脚兔几只？', formula: '(16-6×2)÷2=?', answer: 2, hint: '先假设全鸡' },
        { question: '9头26脚兔几只？', formula: '(26-9×2)÷2=?', answer: 4, hint: '先假设全鸡' }
      ]
    }
  ],

  // ========== 五年级上册（5a）补充：循环小数 / 解方程应用 / 可能性大小 / 多边形面积综合 ==========
  '5a_e': [
    {
      scene: '小红用计算器算10÷3，发现商是3.3333…一直循环下去。老师让她把结果保留两位小数。',
      question: '10÷3的商保留两位小数约是多少？',
      formula: '10 ÷ 3 = ?',
      answer: 3.33,
      choices: [3.33, 3.34, 3.3, 0.33],
      visualType: 'numberLine',
      visualData: { start: 3, end: 3.5, points: [{ pos: 3.33, label: '≈3.33', color: '#00A896' }], highlight: [3, 3.33] },
      knowledge: '循环小数',
      difficulty: 3,
      hint: '10÷3=3.333…保留两位看第三位',
      variants: [
        { question: '20÷3保留两位小数？', formula: '20÷3=?', answer: 6.67, hint: '20÷3=6.666…' },
        { question: '5÷6保留两位小数？', formula: '5÷6=?', answer: 0.83, hint: '5÷6=0.833…' }
      ]
    },
    {
      scene: '妈妈买了5千克苹果共付32.5元。妈妈让小芳列出方程5x=32.5，再算出每千克苹果多少元。',
      question: '每千克苹果多少元？',
      formula: '32.5 ÷ 5 = ?',
      answer: 6.5,
      choices: [6.5, 6, 7.5, 5.5],
      visualType: 'barModel',
      visualData: { total: 32.5, parts: [{ label: '第1千克', val: 6.5, color: '#00A896' }, { label: '第2千克', val: 6.5, color: '#F5B800' }, { label: '第3千克', val: 6.5, color: '#FB923C' }, { label: '第4千克', val: 6.5, color: '#E8A0BF' }, { label: '第5千克', val: 6.5, color: '#1E3A5F' }] },
      knowledge: '解方程应用题',
      difficulty: 3,
      hint: '5x=32.5，两边同时除以5',
      variants: [
        { question: '4x=18，x=?', formula: '18÷4=?', answer: 4.5, hint: '两边除以4' },
        { question: '6x=42，x=?', formula: '42÷6=?', answer: 7, hint: '两边除以6' }
      ]
    },
    {
      scene: '盒子里有6个红球和4个白球，老师让小红闭眼摸一个。老师问：要让摸到红球和白球的可能性一样大，至少要再放入几个白球？',
      question: '至少要再放入几个白球？',
      formula: '6 - 4 = ?',
      answer: 2,
      choices: [2, 1, 10, 6],
      visualType: 'barModel',
      visualData: { total: 6, parts: [{ label: '红球', val: 6, color: '#00A896' }, { label: '白球', val: 4, color: '#F5B800' }] },
      knowledge: '可能性大小',
      difficulty: 3,
      hint: '让两种球数量相等',
      variants: [
        { question: '8红5白要使可能性相同再放几个白？', formula: '8-5=?', answer: 3, hint: '让数量相等' },
        { question: '7红3白要使可能性相同再放几个白？', formula: '7-3=?', answer: 4, hint: '让数量相等' }
      ]
    },
    {
      scene: '学校有一块梯形花圃，上底4米、下底10米、高5米。园丁在中间挖了一个三角形小池塘（底4米、高5米）养鱼，剩下种花。老师让小红算种花的面积。',
      question: '种花的面积是多少平方米？',
      formula: '(4 + 10) × 5 ÷ 2 - 4 × 5 ÷ 2 = ?',
      answer: 25,
      choices: [25, 35, 10, 45],
      visualType: 'geometry',
      visualData: { shape: 'trapezoid', params: { top: 4, bottom: 10, height: 5 } },
      knowledge: '多边形面积综合',
      difficulty: 4,
      hint: '梯形面积减去三角形池塘面积',
      variants: [
        { question: '梯形(3+9)×4÷2减三角形3×4÷2剩多少？', formula: '(3+9)×4÷2-3×4÷2=?', answer: 18, hint: '梯形减三角形' },
        { question: '梯形(5+9)×6÷2减三角形5×6÷2剩多少？', formula: '(5+9)×6÷2-5×6÷2=?', answer: 27, hint: '梯形减三角形' }
      ]
    }
  ],

  // ========== 五年级下册（5b）补充：质数合数 / 长方体体积 / 通分 / 折线统计图读图 ==========
  '5b_e': [
    {
      scene: '数学课上老师让小刚把10以内（含10）所有质数加起来。小刚要先找出这些质数，再求和。',
      question: '10以内所有质数的和是多少？',
      formula: '2 + 3 + 5 + 7 = ?',
      answer: 17,
      choices: [17, 25, 4, 10],
      visualType: 'numberBond',
      visualData: { total: 17, parts: [{ val: 2, color: '#00A896' }, { val: 3, color: '#F5B800' }, { val: 5, color: '#FB923C' }, { val: 7, color: '#E8A0BF' }] },
      knowledge: '质数与合数',
      difficulty: 3,
      hint: '10以内质数有2、3、5、7',
      variants: [
        { question: '20以内所有质数的和？', formula: '2+3+5+7+11+13+17+19=?', answer: 77, hint: '20以内有8个质数' },
        { question: '15以内所有质数的和？', formula: '2+3+5+7+11+13=?', answer: 41, hint: '15以内有6个质数' }
      ]
    },
    {
      scene: '爸爸买了一个长方体收纳箱，长8分米、宽5分米、高4分米。他想算算这个收纳箱能装多少立方分米的物品。',
      question: '收纳箱的体积是多少立方分米？',
      formula: '8 × 5 × 4 = ?',
      answer: 160,
      choices: [160, 17, 40, 320],
      visualType: 'barModel',
      visualData: { total: 160, parts: [{ label: '第1层(8×5)', val: 40, color: '#00A896' }, { label: '第2层', val: 40, color: '#F5B800' }, { label: '第3层', val: 40, color: '#FB923C' }, { label: '第4层', val: 40, color: '#E8A0BF' }] },
      knowledge: '长方体的体积',
      difficulty: 3,
      hint: '体积=长×宽×高',
      variants: [
        { question: '长6宽4高5体积？', formula: '6×4×5=?', answer: 120, hint: '长乘宽乘高' },
        { question: '长10宽3高3体积？', formula: '10×3×3=?', answer: 90, hint: '长乘宽乘高' }
      ]
    },
    {
      scene: '小亮要把1/2和1/3通分相加。他先要找出这两个分数的最小公分母（即分母的最小公倍数）。',
      question: '1/2和1/3的最小公分母是多少？',
      formula: '2 × 3 = ?',
      answer: 6,
      choices: [6, 5, 2, 3],
      visualType: 'fractionStrip',
      visualData: { num: 3, total: 6, color: '#00A896' },
      knowledge: '通分与约分',
      difficulty: 3,
      hint: '2和3互质，最小公倍数是乘积',
      variants: [
        { question: '1/3和1/5的最小公分母？', formula: '3×5=?', answer: 15, hint: '互质两数乘积' },
        { question: '1/2和1/7的最小公分母？', formula: '2×7=?', answer: 14, hint: '互质两数乘积' }
      ]
    },
    {
      scene: '小红记录自己一周跳绳个数并画成折线统计图：周一80下，周二95下，周三110下，周四125下，周五140下。老师问从周一到周五跳绳个数增加了多少。',
      question: '周五比周一多跳了多少下？',
      formula: '140 - 80 = ?',
      answer: 60,
      choices: [60, 40, 220, 20],
      visualType: 'numberLine',
      visualData: { start: 0, end: 150, points: [{ pos: 80, label: '周一', color: '#00A896' }, { pos: 140, label: '周五', color: '#F5B800' }], highlight: [80, 140] },
      knowledge: '折线统计图读图',
      difficulty: 3,
      hint: '用周五的数减周一的数',
      variants: [
        { question: '周一90周五150增多少？', formula: '150-90=?', answer: 60, hint: '相减' },
        { question: '周一70周五135增多少？', formula: '135-70=?', answer: 65, hint: '相减' }
      ]
    }
  ],

  // ========== 六年级上册（6a）补充：分数除法 / 圆环面积 / 百分数与小数互化 / 扇形统计图应用 ==========
  '6a_e': [
    {
      scene: '小红有3/4升果汁，要倒进每个能装1/8升的小杯子里。她算一算能倒满几杯。',
      question: '能倒满几杯？',
      formula: '(3/4) ÷ (1/8) = ?',
      answer: 6,
      choices: [6, 3, 12, 8],
      visualType: 'fractionStrip',
      visualData: { num: 6, total: 8, color: '#00A896' },
      knowledge: '分数除法',
      difficulty: 3,
      hint: '除以一个数等于乘它的倒数',
      variants: [
        { question: '2/3÷1/6=?', formula: '(2/3)÷(1/6)=?', answer: 4, hint: '乘倒数' },
        { question: '5/8÷1/4=?', formula: '(5/8)÷(1/4)=?', answer: 2.5, hint: '乘倒数' }
      ]
    },
    {
      scene: '公园有一个圆形喷泉广场，外圆半径8米，内圆（喷泉）半径5米。园丁要在外圆和内圆之间的环形区域种花，先算这个环形面积。',
      question: '环形种花区域的面积是多少平方米？',
      formula: '3.14 × (8² - 5²) = ?',
      answer: 122.46,
      choices: [122.46, 122.4, 78.5, 200.96],
      visualType: 'geometry',
      visualData: { shape: 'circle', params: { radius: 8 } },
      knowledge: '圆环的面积',
      difficulty: 4,
      hint: '圆环面积=π×(R²-r²)',
      variants: [
        { question: '外10内6圆环面积？', formula: '3.14×(10²-6²)=?', answer: 200.96, hint: 'R²减r²' },
        { question: '外7内3圆环面积？', formula: '3.14×(7²-3²)=?', answer: 125.6, hint: 'R²减r²' }
      ]
    },
    {
      scene: '体育老师测得六(1)班同学体育达标率为0.85，老师让小刚把这个小数换算成百分数。',
      question: '0.85换算成百分数是多少？（填百分号前的数）',
      formula: '0.85 × 100 = ?',
      answer: 85,
      choices: [85, 8.5, 850, 0.85],
      visualType: 'numberLine',
      visualData: { start: 0, end: 100, points: [{ pos: 85, label: '85%', color: '#00A896' }], highlight: [0, 85] },
      knowledge: '百分数与小数互化',
      difficulty: 3,
      hint: '小数化百分数，小数点右移两位加%',
      variants: [
        { question: '0.6化成百分数（填数）？', formula: '0.6×100=?', answer: 60, hint: '小数点右移两位' },
        { question: '0.07化成百分数（填数）？', formula: '0.07×100=?', answer: 7, hint: '小数点右移两位' }
      ]
    },
    {
      scene: '六年级共120人，老师用扇形统计图统计最喜欢的科目，其中语文占25%。老师问喜欢语文的有多少人。',
      question: '喜欢语文的有多少人？',
      formula: '120 × 25% = ?',
      answer: 30,
      choices: [30, 25, 300, 95],
      visualType: 'barModel',
      visualData: { total: 120, parts: [{ label: '语文25%', val: 30, color: '#00A896' }, { label: '其他75%', val: 90, color: '#F5B800' }] },
      knowledge: '扇形统计图应用',
      difficulty: 3,
      hint: '总数乘语文所占百分比',
      variants: [
        { question: '200人中文科35%多少人？', formula: '200×35%=?', answer: 70, hint: '总数乘百分比' },
        { question: '150人中音乐20%多少人？', formula: '150×20%=?', answer: 30, hint: '总数乘百分比' }
      ]
    }
  ],

  // ========== 六年级下册（6b）补充：比例应用 / 负数认识比较 / 统计图选择 / 抽屉原理综合 ==========
  '6b_e': [
    {
      scene: '妈妈买3千克苹果用了24元。现在想买同样的苹果7千克，单价不变。小芳要算要用多少元。',
      question: '买7千克要用多少元？',
      formula: '24 ÷ 3 × 7 = ?',
      answer: 56,
      choices: [56, 48, 21, 72],
      visualType: 'barModel',
      visualData: { total: 56, parts: [{ label: '3千克24元', val: 24, color: '#00A896' }, { label: '多4千克32元', val: 32, color: '#F5B800' }] },
      knowledge: '正比例应用',
      difficulty: 3,
      hint: '先算1千克多少元',
      variants: [
        { question: '4千克32元，6千克多少元？', formula: '32÷4×6=?', answer: 48, hint: '先算单价' },
        { question: '5千克40元，8千克多少元？', formula: '40÷5×8=?', answer: 64, hint: '先算单价' }
      ]
    },
    {
      scene: '冬天郑州最低气温-2℃，北京最低气温-8℃。老师问郑州比北京高多少摄氏度。同学们要比一比这两个负数。',
      question: '郑州比北京高多少摄氏度？',
      formula: '-2 - (-8) = ?',
      answer: 6,
      choices: [6, -6, 10, -10],
      visualType: 'numberLine',
      visualData: { start: -10, end: 5, points: [{ pos: -8, label: '北京', color: '#00A896' }, { pos: -2, label: '郑州', color: '#F5B800' }], highlight: [-8, -2] },
      knowledge: '负数的认识与比较',
      difficulty: 3,
      hint: '-2比-8高，相减得正数',
      variants: [
        { question: '-3比-10高几度？', formula: '-3-(-10)=?', answer: 7, hint: '大数减小数' },
        { question: '-4比-9高几度？', formula: '-4-(-9)=?', answer: 5, hint: '大数减小数' }
      ]
    },
    {
      scene: '小亮记录了寒假5天的最低气温：-5℃、-3℃、-4℃、-2℃、-1℃，他想画统计图清楚地看出气温的变化趋势。同学们给了几种建议。',
      question: '选哪种统计图最合适？（1=条形 2=折线 3=扇形 4=统计表）',
      formula: '1条形/2折线/3扇形/4统计表',
      answer: 2,
      choices: [2, 1, 3, 4],
      visualType: 'numberLine',
      visualData: { start: -6, end: 0, points: [{ pos: -5, label: '第1天', color: '#00A896' }, { pos: -3, label: '第2天', color: '#F5B800' }, { pos: -4, label: '第3天', color: '#FB923C' }, { pos: -2, label: '第4天', color: '#E8A0BF' }, { pos: -1, label: '第5天', color: '#1E3A5F' }], highlight: [-5, -1] },
      knowledge: '统计图的选择',
      difficulty: 3,
      hint: '折线统计图最能反映变化趋势',
      variants: [
        { question: '要展示6个班捐款金额的多少，选哪种最合适？（1条形2折线3扇形）', formula: '1条形/2折线/3扇形', answer: 1, hint: '条形图比数量多少' },
        { question: '要展示各项目支出占总支出的百分比，选哪种？（1条形2折线3扇形）', formula: '1条形/2折线/3扇形', answer: 3, hint: '扇形图看部分占整体的百分比' }
      ]
    },
    {
      scene: '体育老师把11个足球放进4个球筐里，不管怎么放，老师问总有一个球筐里至少放进了几个足球。这是抽屉原理问题。',
      question: '至少有一个球筐里放进了几个足球？',
      formula: '11 ÷ 4 = 2 余 3，至少 ?',
      answer: 3,
      choices: [3, 2, 4, 11],
      visualType: 'numberBond',
      visualData: { total: 11, parts: [{ val: 3, color: '#00A896' }, { val: 3, color: '#F5B800' }, { val: 3, color: '#FB923C' }, { val: 2, color: '#E8A0BF' }] },
      knowledge: '抽屉原理（数学广角）',
      difficulty: 4,
      hint: '平均分后有剩余，至少=商+1',
      variants: [
        { question: '10本书放3个抽屉至少一个放几本？', formula: '10÷3=3余1，至少4', answer: 4, hint: '商加1' },
        { question: '13支笔放4个笔筒至少一个放几支？', formula: '13÷4=3余1，至少4', answer: 4, hint: '商加1' }
      ]
    }
  ]
};