// src/lib/ts-fsrs.mjs · 奇趣学园 自研 FSRS 调度器（精简版，零依赖）
// 背景：ts-fsrs（npm）需构建工具或 ESM+CDN；本项目为纯静态前端（经典 <script>、零依赖、零构建），
//       故手写本精简版。2026-09-18 B-1 复核修复：公式对齐官方 open-spaced-repetition/ts-fsrs
//       algorithm.ts + constant.ts（main 分支快照，FSRS-6 语义 + default_w 默认参数），
//       保留 R(S,S)=0.9 恒等（S = 保留率 90% 时的间隔）。
//       显式产品简化（非偏差）：① 无分钟级学习步（enable_short_term=false 语义，儿童按天复习），
//       AGAIN 后强制 1 天短期重学；② enable_fuzz=false（官方默认）；③ 间隔不乘浮点修正（RR=0.9 时官方 intervalModifier=1）。
// 接口对齐：createCard() / next(card, rating, nowMs) / 各子公式可单测。
// 兼容：经典 <script> 加载 → 挂 window.QuQFSRS；文件为纯 IIFE + UMD 自决（Node 下挂 module.exports），
//       校验脚本用 `global.window = global; eval(src)` 加载（见 _verify_fsrs.js），无需 build。

(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.QuQFSRS = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DAY_MS = 86400000;
  var S_MIN = 0.001, S_MAX = 36500.0;
  var R_TARGET = 0.9; // request_retention（官方默认）

  // 官方 ts-fsrs constant.ts default_w（21 值；w[20]=FSRS6_DEFAULT_DECAY）
  var P = [
    0.212,   // W0  初始稳定度 Again
    1.2931,  // W1  初始稳定度 Hard
    2.3065,  // W2  初始稳定度 Good
    8.2956,  // W3  初始稳定度 Easy
    6.4133,  // W4  初始难度基线 D0(Good)
    0.8334,  // W5  初始难度指数
    3.0194,  // W6  难度 rating 增量系数（delta_d = -W6·(g-3)）
    0.001,   // W7  难度均值回归系数
    1.8722,  // W8  复习稳定度指数
    0.1666,  // W9  复习稳定度负幂
    0.796,   // W10 保留率指数
    1.4835,  // W11 遗忘稳定度乘子
    0.0614,  // W12 遗忘稳定度难度负幂
    0.2629,  // W13 遗忘稳定度 S 幂
    1.6483,  // W14 遗忘稳定度保留率指数
    0.6014,  // W15 Hard 惩罚乘子
    1.8729,  // W16 Easy 奖励乘子
    0.5425,  // W17 短期稳定度指数（未启用）
    0.0912,  // W18 短期稳定度指数（未启用）
    0.0658,  // W19 短期 last-stability 指数（未启用）
    0.1542,  // W20 decay（FSRS6_DEFAULT_DECAY）
  ];

  var AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;

  function clamp(x, lo, hi) { return Math.min(hi, Math.max(lo, x)); }

  // ---- decay/factor：R(t,S) = (1 + FACTOR·t/S)^DECAY，DECAY=-W20，FACTOR=e^(ln0.9/DECAY)-1 ----
  var DECAY = -P[20];
  var FACTOR = Math.exp(Math.log(R_TARGET) / DECAY) - 1;

  // 初始稳定度 S0(G) = max(W[G-1], 0.1)
  function initStability(g) {
    return Math.max(P[g - 1], 0.1);
  }

  // 初始难度 D0(G) = W4 - e^((G-1)·W5) + 1（官方不在此 clamp，调用方 clamp 到 [1,10]）
  function initDifficulty(g) {
    return P[4] - Math.exp((g - 1) * P[5]) + 1;
  }

  // 保留率 R(t,S) = (1 + FACTOR·t/S)^DECAY；t=S 时恒 = 0.9
  // 签名保留 (tDays, S, D) 以兼容旧调用；D 已不参与曲线（decay/factor 为全局参数）
  function retrievability(tDays, S, D) {
    if (S <= 0) return 0;
    var x = 1 + (FACTOR * tDays) / S;
    return Math.pow(x, DECAY);
  }

  // 难度更新 D'(D,G) = clamp( W7·D0(Easy) + (1-W7)·(D + delta_d·(10-D)/9), 1, 10 )
  function nextDifficulty(d, g) {
    var deltaD = -P[6] * (g - 3);
    var damped = d + (deltaD * (10 - d)) / 9;
    var DPrime = P[7] * initDifficulty(EASY) + (1 - P[7]) * damped;
    return clamp(DPrime, 1, 10);
  }

  // 复习成功稳定度 S'_r = S·(1 + e^W8·(11-D)·S^-W9·(e^(W10·(1-R))-1)·hardPenalty·easyBonus)
  function nextRecallStability(d, s, r, g) {
    var hardPenalty = g === HARD ? P[15] : 1;
    var easyBonus = g === EASY ? P[16] : 1;
    var sNew =
      s *
      (1 +
        Math.exp(P[8]) *
          (11 - d) *
          Math.pow(s, -P[9]) *
          (Math.exp((1 - r) * P[10]) - 1) *
          hardPenalty *
          easyBonus);
    return clamp(sNew, S_MIN, S_MAX);
  }

  // 遗忘稳定度 S'_f = W11·D^-W12·((S+1)^W13-1)·e^(W14·(1-R))
  function nextForgetStability(d, s, r) {
    var sNew =
      P[11] *
      Math.pow(d, -P[12]) *
      (Math.pow(s + 1, P[13]) - 1) *
      Math.exp((1 - r) * P[14]);
    return clamp(sNew, S_MIN, S_MAX);
  }

  var api = {
    version: 'fsrs6-quicku-lite-v1',
    params: P,
    RATINGS: { Again: AGAIN, Hard: HARD, Good: GOOD, Easy: EASY },
    DAY_MS: DAY_MS,
    decay: DECAY,
    factor: FACTOR,

    // 对外公式（可单测）
    D0: initDifficulty,
    S0: initStability,
    R: retrievability,        // R(tDays, S[, D]) —— D 忽略
    D: nextDifficulty,        // D(d, g)
    S: nextRecallStability,   // S(d, s, r, g)
    Sf: nextForgetStability,  // Sf(d, s, r)

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
        out.D = clamp(initDifficulty(r), 1, 10);
        out.R = 1;
        out.due = now + Math.max(1, Math.round(out.S)) * DAY_MS;
        return out;
      }

      // 非首次：保留率基于距上次天数 + 当前 S（D 不参与曲线）
      out.R = retrievability(tDays, card.S, card.D);
      out.D = nextDifficulty(card.D, r);
      if (r === AGAIN) {
        // 答错：稳定度取 min(S, S'_f)（enable_short_term=false 语义）；间隔强制 1 天短期重学
        var sF = nextForgetStability(card.D, card.S, out.R);
        out.S = Math.min(card.S, sF);
        out.due = now + DAY_MS;
      } else {
        out.S = nextRecallStability(card.D, card.S, out.R, r);
        out.due = now + Math.max(1, Math.round(out.S)) * DAY_MS;
      }
      return out;
    },
  };

  return api;
});
