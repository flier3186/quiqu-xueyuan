# 奇趣学园 项目部署操作手册

> 版本：v1.0 | 更新日期：2026-08-07
> 适用仓库：https://github.com/flier3186/quiqu-xueyuan（主）
>           https://gitee.com/leo318600/quiqu-xueyuan（镜像）
> 线上地址：https://flier3186.github.io/quiqu-xueyuan/

---

## 目录

1. [项目概述](#1-项目概述)
2. [环境要求](#2-环境要求)
3. [仓库结构](#3-仓库结构)
4. [本地开发](#4-本地开发)
5. [测试验证](#5-测试验证)
6. [部署流程](#6-部署流程)
7. [问题排查](#7-问题排查)
8. [日常维护](#8-日常维护)

---

## 1. 项目概述

**奇趣学园**（quiqu-xueyuan）是面向 8-12 岁小学生的趣味学习工具，提升数学与英语「能力」，非应试刷题。

- **技术形态**：纯前端静态站点（HTML + CSS + JS，无后端）
- **部署平台**：GitHub Pages（主）+ Gitee 代码镜像
- **核心引擎**：MathVisual / MathFlowV5 / WeaknessDetector / ProgressTracker / TimeController / SpeakEngine
- **数据持久化**：localStorage（key: `ququxv4_state_v1`）

### 教学内容

| 板块 | 内容量 |
|---|---|
| 数学题库 | 862 题（1-9 年级） |
| 英语词汇 | 567 词 |
| 口语场景 | 20 个 |
| 绘本库 | 16 本（150 页交互内容） |

### 可视化类型

barModel / areaModel / numberBond / fractionStrip / numberLine / geometry（sphere/cone/sector/regularPolygon/prism）

---

## 2. 环境要求

### 开发环境

- **Node.js**：v18+（当前已验证 v26.5.0）
- **npm**：v7+（内置于 Node.js）
- **浏览器**：Chrome / Edge / Firefox（最新 2 个版本）

### 测试依赖

```json
{
  "playwright": "^1.40.0"
}
```

### 部署要求

- **GitHub 账号**：用于 push 和 GitHub Pages 自动部署
- **Gitee 账号**：用于代码镜像备份
- **HTTPS SSH Key**：已配置 `mirror` remote 使用 SSH 推送

---

## 3. 仓库结构

```
quiqu-xueyuan/
├── index.html              # 单文件应用（所有代码）
├── README.md               # 最终验收报告
├── state.json              # 项目协作状态（AGENTS 规则）
├── DECISIONS.md            # 关键决策记录
├── AGENTS.md               # 项目规则（宪法）
├── package.json            # 测试依赖
├── vercel.json             # Vercel 配置（保留）
├── .github/workflows/      # GitHub Actions（自动部署）
├── engine/                 # 引擎模块
│   ├── math-visual-v5.js   # 数形结合可视化引擎
│   ├── math-flow-v5.js     # 数学教学流程引擎
│   ├── weaknes-sdetector.js
│   ├── progress-tracker.js
│   ├── time-controller.js
│   └── speak-engine-v5.js  # 口语引擎
├── data/                   # 数据文件
│   ├── math-data.js        # 数学题库
│   ├── math-data-3a.js     # 3a 年级题
│   ├── word-dict.js        # 英语词汇
│   ├── storybooks.js       # 绘本数据
│   └── speak-scenarios.js  # 口语场景
└── scripts/                # 脚本与测试
    ├── fraction-geometry-test.js  # 分数条/几何用户路径测试
    ├── user-sim-test.js           # 真实用户操作模拟测试
    ├── full-sim-test.js           # 全链路模拟测试
    ├── audit.js                   # 数据审计脚本
    ├── count-data.js              # 数据统计脚本
    ├── fix-new-problems.js        # 数据格式修复脚本
    └── test-results/              # 测试打包目录
```

---

## 4. 本地开发

### 4.1 启动本地服务器

```bash
# 方法一：使用 Node.js 内置 http-server
npx http-server -p 8080 -c-1

# 方法二：使用 Python
python -m http.server 8080

# 方法三：使用 VS Code Live Server 插件
```

访问：http://127.0.0.1:8080/

### 4.2 运行测试

```bash
# 分数条/几何分步动画测试（36项）
node scripts/fraction-geometry-test.js

# 真实用户操作模拟测试（20项）
node scripts/user-sim-test.js

# 全链路模拟测试（30项）
node scripts/full-sim-test.js

# 数据审计（题库/词汇/场景完整性）
node scripts/audit.js
```

### 4.3 测试通过标准

- 所有测试脚本返回 `全部通过！` 或 `Exit code: 0`
- 测试汇总：86/86 通过（36 + 20 + 30）
- 无 `❌` 标记的失败项
- 无 `PAGE_ERROR` 或 `CONSOLE_ERR`

---

## 5. 测试验证

### 5.1 L1：JS 语法校验

```bash
# 验证所有 JS 文件语法正确
node --check engine/math-visual-v5.js
node --check engine/math-flow-v5.js
node --check scripts/fraction-geometry-test.js
```

### 5.2 L2：浏览器运行测试

```bash
# 启动本地服务器
npx http-server -p 8080 -c-1 &

# 运行 Playwright 测试
node scripts/full-sim-test.js
```

### 5.3 L3：多端验证

在桌面浏览器和手机浏览器中打开线上地址，确认布局正常。

### 5.4 L4：教学逻辑验证

- 数学题：数形结合 SVG 是否正确渲染
- 英语题：闪卡图片是否正确加载
- 口语对话：场景选择 + 对话流程是否完整

### 5.5 测试日志打包

```bash
# 测试日志已打包到 scripts/test-results/
# 完整包：scripts/test-results-20260807_0950.zip
```

包含文件：
- fraction-geometry-test.js（36项测试）
- user-sim-test.js（20项测试）
- full-sim-test.js（30项测试）
- user-sim-report.json（测试结果报告）
- audit.js（数据审计脚本）
- validate-math-data.js（数学数据校验）

---

## 6. 部署流程

### 6.1 推送代码

```bash
# 1. 确认本地状态干净
git status

# 2. 提交变更
git add .
git commit -m "<type>: <描述>"

# 3. 推送到 origin（GitHub SSH）
git push origin master

# 4. 推送到 mirror（GitHub SSH，与 origin 相同，双保险）
git push mirror master

# 5. 推送到 gitee（国内镜像）
git push gitee master
```

> **注意**：origin 已切换为 SSH 协议（`git@github.com:...`），如果原 HTTPS 连接仍然超时，
> 请直接使用 mirror 或 gitee 推送，无需重试 origin。

### 6.2 验证部署

```bash
# 验证 GitHub Pages 200 OK
curl -s -o /dev/null -w "%{http_code}" https://flier3186.github.io/quiqu-xueyuan/

# 预期输出：200
```

### 6.3 部署触发机制

- **GitHub Pages**：push 到 master 分支后自动触发（`push` 事件）
- **Vercel**：已配置 vercel.json，push 后自动部署（已不再使用，保留配置）
- **Gitee Pages**：已取消个人版，仅做代码镜像

### 6.4 部署完成后检查清单

- [ ] GitHub Pages 返回 200 OK
- [ ] 浏览器打开线上地址页面正常
- [ ] 数学模块可以进入 warmup 阶段
- [ ] 英语模块可以查看闪卡
- [ ] 口语模块可以选择场景
- [ ] localStorage 数据未丢失

---

## 7. 问题排查

### 7.1 GitHub Pages 404

**原因**：GitHub Actions 部署失败或分支未正确设置

**排查**：
```bash
# 查看 Actions 运行日志
gh run list --repo flier3186/quiqu-xueyuan
gh run view <run-id> --log-failed

# 检查 Pages 设置
gh api repos/flier3186/quiqu-xueyuan/pages
```

### 7.2 本地通过但线上异常

**原因**：缓存问题或部署未生效

**解决**：
```bash
# 清除缓存重新访问
# 方法一：Hard Reload（Ctrl+Shift+R）
# 方法二：访问 ?v=<timestamp> 绕过缓存
# 方法三：检查 GitHub Actions 是否成功触发
```

### 7.3 数学可视化不显示

**原因**：`renderExplain()` 与 `_updateStepVisual()` 路由不匹配

**排查**：
```javascript
// 检查当前阶段
console.log(MathFlowV5._sess.stage)
// 检查可视化类型
console.log(MathFlowV5._sess.problem?.visualType)
```

### 7.4 语音无法播放

**原因**：移动端需要用户手势触发

**排查**：确认页面有用户交互（点击）后才触发语音播放，不自动播放。

### 7.5 Gitee Pages 404

**原因**：Gitee 个人版已取消 Pages 功能

**解决**：Gitee 仅做代码镜像，不验证 Pages 状态。国内访问使用 GitHub Pages。

---

## 8. 日常维护

### 8.1 添加新题目

1. 在 `data/math-data.js` 或对应年级文件中添加题目
2. 确保 `visualType` 字段有效（barModel/areaModel/fractionStrip/geometry/numberLine/numberBond）
3. 运行 `node scripts/fix-new-problems.js` 修复可能的格式问题
4. 运行测试验证

### 8.2 添加新英语词汇

1. 在 `data/word-dict.js` 中添加词汇条目
2. 确保包含：id、word、pos、cn、example、collocation、synonyms
3. 运行 `node scripts/audit.js` 验证字段完整性

### 8.3 添加新口语场景

1. 在 `data/speak-scenarios.js` 中添加场景
2. 确保包含：id、title、icon、teacherLines、studentExpected
3. 运行测试验证对话流程

### 8.4 更新 state.json

每次完成阶段性任务后更新：
```json
{
  "current": { "task": "...", "stage": "..." },
  "next": "...",
  "completed": [...],
  "updated": "ISO 时间戳"
}
```

### 8.5 关键文件保护（AGENTS.md 红线）

- ❌ 不修改 `defaultState` 的现有字段
- ❌ 不删除已部署的引擎对象
- ❌ 不引入后端依赖
- ❌ 不删除 localStorage key `ququxv4_state_v1`

---

## 附录：Git Remote 配置

```bash
# 查看当前 remote
git remote -v

# 预期输出：
# origin  git@github.com:flier3186/quiqu-xueyuan.git（SSH，主推送通道）
# mirror  git@github.com:flier3186/quiqu-xueyuan.git（SSH，镜像备份）
# gitee   https://gitee.com/leo318600/quiqu-xueyuan.git（国内镜像）
```

## 附录：测试覆盖率

| 测试文件 | 测试项 | 结果 | 覆盖场景 |
|---|---|---|---|
| fraction-geometry-test.js | 36 | 36/36 ✅ | 分数条用户路径、几何3种形状、分步动画 |
| user-sim-test.js | 20 | 20/20 ✅ | 首页、数学答题、英语、口语、响应式 |
| full-sim-test.js | 30 | 30/30 ✅ | 数学全流程、英语闪卡、配色、线上地址 |
| audit.js | — | — | 数据完整性审计（题库/词汇/场景） |
| validate-math-data.js | — | — | 数学数据格式校验 |

---

**最后更新**：2026-08-07 | **测试版本**：L4（教学逻辑验证通过）
