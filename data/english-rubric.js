// data/english-rubric.js · 奇趣学园 V5 口语评分 Rubric 配置
// 维度与权重可在此调参，无需改引擎逻辑
// 加载方式：window.EnglishRubric = {...}（由 index.html <script> 引入）
window.EnglishRubric = {
  weights: {
    accuracy: 0.45,
    completeness: 0.35,
    fluency: 0.20
  },

  thresholds: {
    accuracy: { excellent: 90, good: 75, fair: 60, weak: 40 },
    completeness: { excellent: 95, good: 80, fair: 65, weak: 45 },
    fluency: { excellent: 85, good: 70, fair: 55, weak: 40 }
  },

  gradeLabels: {
    A: { min: 85, label: '优秀！发音清晰，表达完整 🌟' },
    B: { min: 70, label: '很好！继续加油 🎉' },
    C: { min: 55, label: '不错，再多练几次 👍' },
    D: { min: 40, label: '在进步，别灰心 💪' },
    F: { min: 0,  label: '没关系，慢慢来 🌱' }
  },

  degradeFluencyWhenNoTimestamp: true
};
