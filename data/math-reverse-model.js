// data/math-reverse-model.js · M2 反向建模样本（形→数）
// 给图形/情景，孩子写出对应的数量关系式（equation），判对走 rubric JSON（LLM 主 / 本地降级）。
// 每册 ≥3 道，复用母版 visualType/visualData（MathVisualV5 / MathDiagramMaster 直接可渲染）。
// 字段：
//   id           样本 id
//   grade        年级 key（与 MATH_BY_GRADE 对齐）
//   visualType   母版类型（barModel/numberBond/numberLine/geometry/fractionBar...）
//   visualData   渲染数据（含未知槽用 null 值表示）
//   scene        图片/情景文案（简短，给"形"）
//   expect       期望数量关系式（孩子应写出的规范式集合，本地判对基准）
//   rubricHint   LLM 判对 rubic 提示片段（含等价要求说明）
window.MATH_REVERSE_MODEL = {
  '3a': [
    {
      id: 'rm-3a-001',
      grade: '3a',
      visualType: 'barModel',
      visualData: { total: 30, parts: [{ label: '红球', val: 10, color: '#00A896' }, { label: '蓝球', val: 10, color: '#F5B800' }, { label: '黄球', val: 10, color: '#FB923C' }] },
      scene: '三个盒子，每个盒子里有 10 个球，一共产 30 个球。',
      expect: ['10+10+10=30', '3×10=30', '30=3×10', '30÷3=10'],
      rubricHint: '孩子应写出因数与积的关系式，例如 3×10=30 或 10+10+10=30。'
    },
    {
      id: 'rm-3a-002',
      grade: '3a',
      visualType: 'barModel',
      visualData: { total: 12, parts: [{ label: '苹果', val: 7, color: '#00A896' }, { label: '剩的', val: null, color: '#FB923C' }] },
      scene: '一筐苹果 12 个，拿走一些，还剩 7 个。',
      expect: ['12-?=7', '12-7=5', '?+7=12'],
      rubricHint: '应体现"未知部分=总量-已知部分"，如 12-7=5 或 ?+7=12。'
    },
    {
      id: 'rm-3a-003',
      grade: '3a',
      visualType: 'numberBond',
      visualData: { type: 'numberBond', total: 8, parts: [{ label: '一部分', val: 3, color: '#00A896' }, { label: '另一部分', val: null, color: '#F5B800' }] },
      scene: '一个整体 8，分成两份，已知一份是 3。',
      expect: ['3+?=8', '8-3=5', '?=8-3'],
      rubricHint: '应体现"部分+部分=整体"的逆推，如 3+?=8 或 8-3=5。'
    }
  ],
  '4a': [
    {
      id: 'rm-4a-001',
      grade: '4a',
      visualType: 'areaModel',
      visualData: { rows: 3, cols: 4, type: 'areaModel' },
      scene: '一个 3 行 4 列的点阵。',
      expect: ['3×4=12', '4×3=12', '12=3×4'],
      rubricHint: '行数×列数=总数，如 3×4=12。'
    },
    {
      id: 'rm-4a-002',
      grade: '4a',
      visualType: 'numberLine',
      visualData: { start: 0, end: 100, points: [{ pos: 0, label: '0', color: '#00A896' }, { pos: 100, label: '100', color: '#F5B800' }], highlight: [0, 100] },
      scene: '从 0 到 100 的一条数线，中间等分成 4 段。',
      expect: ['100÷4=25', '4×25=100', '25×4=100'],
      rubricHint: '把总量 100 平均分成 4 段，每段 25，如 100÷4=25。'
    },
    {
      id: 'rm-4a-003',
      grade: '4a',
      visualType: 'barModel',
      visualData: { total: 48, parts: [{ label: '每组', val: 8, color: '#00A896' }, { label: '组数', val: null, color: '#F5B800' }] },
      scene: '48 人排队，每组 8 人，排了几组？',
      expect: ['48÷8=6', '8×?=48', '48=8×6'],
      rubricHint: '应体现"总数÷每份=份数"，如 48÷8=6 或 8×?=48。'
    }
  ],
  '5a': [
    {
      id: 'rm-5a-001',
      grade: '5a',
      visualType: 'fractionStrip',
      visualData: { type: 'fractionStrip', num: 3, total: 4 },
      scene: '一条巧克力分成 4 等份，涂色 3 份。',
      expect: ['3/4=0.75', '3÷4=0.75', '3/4'],
      rubricHint: '涂色部分占整体的 3/4，即 3÷4=0.75。'
    },
    {
      id: 'rm-5a-002',
      grade: '5a',
      visualType: 'geometry',
      visualData: { shape: 'rectangle', params: { length: 6, width: 4 }, unit: 'cm' },
      scene: '一个长 6cm、宽 4cm 的长方形。',
      expect: ['6×4=24', '面积=24', '24=6×4'],
      rubricHint: '长方形面积=长×宽=6×4=24（cm²）。'
    },
    {
      id: 'rm-5a-003',
      grade: '5a',
      visualType: 'barModel',
      visualData: { total: 60, parts: [{ label: '已看', val: null, color: '#00A896' }, { label: '未看', val: 24, color: '#F5B800' }] },
      scene: '一本书 60 页，还剩 24 页没看，看了多少页？',
      expect: ['60-24=36', '?+24=60', '36=60-24'],
      rubricHint: '应体现"已看=总量-未看"，如 60-24=36。'
    }
  ],
  '6a': [
    {
      id: 'rm-6a-001',
      grade: '6a',
      visualType: 'barModel',
      visualData: { total: 90, parts: [{ label: '苹果', val: 30, color: '#00A896' }, { label: '梨', val: 60, color: '#F5B800' }] },
      scene: '苹果 30 个，梨 60 个，共 90 个。',
      expect: ['30+60=90', '90=30+60', '60-30=30'],
      rubricHint: '部分+部分=整体（30+60=90），或两量相差（60-30=30）。'
    },
    {
      id: 'rm-6a-002',
      grade: '6a',
      visualType: 'geometry',
      visualData: { shape: 'circle', params: { radius: 3, unit: 'cm' } },
      scene: '一个半径 3cm 的圆。',
      expect: ['S=π×9', '3.14×9=28.26', '面积=28.26'],
      rubricHint: '圆的面积=πr²，r=3 时 S=3.14×9=28.26（cm²）。'
    },
    {
      id: 'rm-6a-003',
      grade: '6a',
      visualType: 'numberLine',
      visualData: { start: 0, end: 1, points: [{ pos: 0, label: '0', color: '#00A896' }, { pos: 1, label: '1', color: '#F5B800' }], highlight: [0, 1] },
      scene: '0 到 1 的线段，等分成 5 份，其中 2 份涂色。',
      expect: ['2/5=0.4', '2÷5=0.4', '2/5'],
      rubricHint: '涂色占全长的 2/5，即 2÷5=0.4。'
    }
  ],
  '7a': [
    {
      id: 'rm-7a-001',
      grade: '7a',
      visualType: 'barModel',
      visualData: { total: 120, parts: [{ label: '甲', val: 72, color: '#00A896' }, { label: '乙', val: null, color: '#F5B800' }] },
      scene: '甲有 72 本书，乙和甲一共 120 本，乙有几本？',
      expect: ['72+?=120', '120-72=48', '48'],
      rubricHint: '等量关系：甲+乙=总和，未知=120-72=48。'
    },
    {
      id: 'rm-7a-002',
      grade: '7a',
      visualType: 'geometry',
      visualData: { shape: 'balance', params: { left: '5', right: 'x', balanced: true } },
      scene: '天平左边 5 本书，右边放着 x 本，天平平衡。',
      expect: ['5=x', 'x=5'],
      rubricHint: '等量关系：左=右，即 5=x（方程思想）。'
    },
    {
      id: 'rm-7a-003',
      grade: '7a',
      visualType: 'numberBond',
      visualData: { type: 'numberBond', total: 20, parts: [{ label: '红', val: null, color: '#00A896' }, { label: '蓝', val: null, color: '#F5B800' }] },
      scene: '红蓝球数量比是 2:3，共 20 个。',
      expect: ['2x+3x=20', '5x=20', '红=8,蓝=12', '8+12=20'],
      rubricHint: '按份数比设未知数：2份+3份=5份=20，x=4。'
    }
  ],
  '8a': [
    {
      id: 'rm-8a-001',
      grade: '8a',
      visualType: 'geometry',
      visualData: { shape: 'square', params: { side: 7, unit: 'cm' } },
      scene: '一个正方形边长 x，面积是 49。',
      expect: ['x²=49', 'x=7', 'x×x=49'],
      rubricHint: '正方形面积=边长的平方：x²=49，x=7（取正）。'
    },
    {
      id: 'rm-8a-002',
      grade: '8a',
      visualType: 'numberLine',
      visualData: { start: -5, end: 5, points: [{ pos: 0, label: '0', color: '#00A896' }, { pos: 3, label: '3', color: '#F5B800' }], highlight: [0, 3] },
      scene: '数轴上 0 到 3 的距离。',
      expect: ['|3-0|=3', '距离=3'],
      rubricHint: '两点间距离=|3-0|=3。'
    },
    {
      id: 'rm-8a-003',
      grade: '8a',
      visualType: 'numberBond',
      visualData: { type: 'numberBond', total: 200, parts: [{ label: 'x', val: null, color: '#00A896' }, { label: '2x', val: null, color: '#F5B800' }] },
      scene: '两个未知量 x 和 2x，加起来等于 200。',
      expect: ['x+2x=200', '3x=200', 'x=200/3'],
      rubricHint: '数量关系：x+2x=200，3x=200（方程）。'
    }
  ]
};
window.MATH_REVERSE_MODEL_LIST = Object.keys(window.MATH_REVERSE_MODEL)
  .map(function (g) {
    return (window.MATH_REVERSE_MODEL[g] || []).map(function (it) { it.grade = it.grade || g; return it; });
  })
  .reduce(function (a, b) { return a.concat(b); }, []);