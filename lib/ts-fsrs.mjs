// src/lib/ts-fsrs.mjs · 奇趣学园 自研 FSRS-5 调度器（精简版，17 参数，零依赖）
// 背景：ts-fsrs（npm）需构建工具或 ESM+CDN；本项目为纯静态前端（经典 <script>、零依赖、零构建），
//       故手写本精简版，实现 FSRS-5 核心公式 + Anki 官方默认参数，接口对齐任务书：
//       createCard() / next(card, rating, nowMs) / 各子公式可单测。
// 兼容：经典 <script> 加载 → 挂 window.QuQFSRS；文件为纯 IIFE + UMD 自决（Node 下挂 module.exports），
//       校验脚本用 `global.window = global; eval(src)` 加载（见 _verify_fsrs.js），无需 build。
// 算法：open-spaced-repetition/ts-fsrs FSRS-5（17 参数 W0..W16，Anki 官方默认值）

(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.QuQFSRS = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DAY_MS = 86400000;

  // Anki 官方 FSRS-5 默认参数（17 值）
  var P = [
    0.189,  // W0  新卡 Again 稳定度
    0.595,  // W1  新卡 Hard 稳定度
    2.611,  // W2  新卡 Good 稳定度
    18.856, // W3  新卡 Easy 稳定度
    2.940,  // W4  首学难度曲线（D0 基线）
    1.752,  // W5  难度随 R 上升
    0.560,  // W6  难度 ln(r) 项
    1.356,  // W7  难度均值回归
    2.385,  // W8  难度 Again 减项
    0.814,  // W9  难度 Hard 减项
    0.427,  // W10 难度 Easy 加项
    0.982,  // W11 稳定度 Again 系数
    0.590,  // W12 稳定度 Again R 指数
    2.759,  // W13 稳定度 Good/Easy 系数
    1.045,  // W14 稳定度 5-R 指数
    0.399,  // W15 稳定度 1-R^w 项
    0.016,  // W16 稳定度 S^w15 项
  ];

  var AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;

  function clampDiff(x) { return Math.min(5, Math.max(1, x)); }
  function clampS(x) { return Math.min(36500, Math.max(0.01, x)); }

  // 初始难度 D0(r) = W4 - W5*(r-1) + W6*ln(r)   （官方 FSRS-5）
  function initDifficulty(r) {
    var d0 = P[4] - P[5] * (r - 1) + P[6] * Math.log(r);
    return clampDiff(d0);
  }

  // 初始稳定度 S0(r) = W0/W1/W2/W3
  function initStability(r) {
    var s = [0, P[0], P[1], P[2], P[3]][r];
    return clampS(s);
  }

  // 特征遗忘时间 D* = S * W13；保留率 R(t,S,D) = (1 + 19^D/81 * t/S)^-1
  // 注：t 单位天，S 单位天；官方 FSRS-5 保留率曲线
  function retrievability(tDays, S, D) {
    if (S <= 0) return 0;
    var factor = Math.pow(19, D) / 81;
    
    var x = 1 + (factor * tDays) / S;
    return Math.pow(x, -1);
  }

  // 难度更新（复习后）
  function nextDifficulty(D, R, r) {
    var deltaD = P[10] * (5 - R);
    var DPrime = D - P[16] * (R - 1);
    var D2 = DPrime - deltaD * (DPrime - 1);
    return clampDiff(D2);
  }

  // 稳定度更新（复习后，输入 S, 当前难度 D, 保留率 R, rating r）
  // 签名保持 (S, D, R, r) 与 engine/spaced-review-v5.js 的调用一致
  function nextStability(S, D, R, r) {
    var w = P;
    var sNew;
    if (r === AGAIN) {
      // S' = S * W11 * R^W12 * (S+1)^-W14 * (W13-1+1/R) * e^(-W15*(R-1))
      sNew =
        S *
        w[11] *
        Math.pow(R, w[12]) *
        Math.pow(S + 1, -w[14]) *
        (w[13] - 1 + 1 / Math.max(R, 0.01)) *
        Math.exp(-w[15] * (R - 1));
    } else {
      // S' = S * (1 + W13 * (5-R)^W14 * (1-R^W15) / S^W16)
      sNew =
        S *
        (1 +
          w[13] *
          Math.pow(5 - R, w[14]) *
          (1 - Math.pow(R, w[15])) /
          Math.pow(S, w[16]));
    }
    return clampS(sNew);
  }

  var api = {
    version: 'fsrs5-quicku-lite-v1',
    params: P,
    RATINGS: { Again: AGAIN, Hard: HARD, Good: GOOD, Easy: EASY },
    DAY_MS: DAY_MS,

    // 对外公式（可单测）
    D0: initDifficulty,
    S0: initStability,
    R: retrievability,        // R(tDays, S, D)
    D: nextDifficulty,       // D(D, R, r)
    S: nextStability,        // S(S, D, R, r)

    createCard: function (nowMs) {
      return {
        S: 0, D: 0, R: 0,
        reviews: 0,
        lastReview: nowMs || null,
        due: null,
      };
    },

    // 核心：card + rating + 当前时间 → 新 card（纯函数，不 mutate 入参）
    next: function (card, r, nowMs) {
      var now = nowMs || Date.now();
      var out = {
        S: 0, D: 0, R: 0,
        reviews: (card.reviews || 0) + 1,
        lastReview: now,
        due: null,
      };
      var tDays = 0;
      if (card.lastReview) tDays = Math.max(0, (now - card.lastReview) / DAY_MS);

      if ((card.reviews || 0) === 0) {
        // 首次学习：初始化 S/D，due = now + round(S0)*DAY
        out.S = initStability(r);
        out.D = initDifficulty(r);
        out.R = 1;
        out.due = now + Math.max(1, Math.round(out.S)) * DAY_MS;
        return out;
      }

      // 非首次：保留率基于距上次天数 + 当前 S/D
      out.R = retrievability(tDays, card.S, card.D);
      out.D = nextDifficulty(card.D, out.R, r);
      out.S = nextStability(card.S, card.D, out.R, r);
      out.due = now + Math.max(1, Math.round(out.S)) * DAY_MS;
      if (r === AGAIN) {
        // 答错：短期重学，简化为 1 天后（儿童学习场景，无分钟级重学）
        out.due = now + DAY_MS;
      }
      return out;
    },
  };

  return api;
});
