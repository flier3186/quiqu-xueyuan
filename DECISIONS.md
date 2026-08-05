# 项目关键决策记录

> 记录影响项目架构、技术选型的关键决策，便于后续会话快速恢复上下文。

---

## 2026-08-05 · 数学可视化引擎修复

### 决策：分步渲染器数据格式统一

**背景**：题库数据有两种格式混用
- `{a:38, b:45}` （直接参数）
- `{parts:[{val:386}, {val:247}]}` （parts 数组）

**决定**：所有分步渲染器（baseTenBlocks, barModelStep, areaModelStep, numberBondStep）兼容两种格式，内部统一提取 a、b 值。

**影响范围**：math-visual-v5.js 中的 7 个分步渲染器函数

---

## 2026-08-05 · 模型家族路由机制

### 决策：新增 _resolveModelFamily 统一入口

**背景**：_resolveType 返回分步渲染器名（如 barModelStep），但 renderStep 需要模型家族名（如 barModel）

**决定**：
1. 新增 _getModelFamilyFromStep 反向映射
2. 新增 _resolveModelFamily 统一入口，供 math-flow-v5.js 调用
3. renderExplain 和 _updateStepVisual 统一使用 _resolveModelFamily

**影响范围**：math-visual-v5.js、math-flow-v5.js

---

## 2026-08-05 · 分步渲染器重写

### 决策：barModelStep / areaModelStep 完全重写

**背景**：原实现使用固定像素单位（unit=14），三位数时条宽溢出 SVG 视口

**决定**：
1. barModelStep：改用自适应缩放 `scale = availW / total`
2. areaModelStep：根据位数自适应格子大小（8-22px）
3. 两个渲染器均显示实际数值和汇总公式

**影响范围**：math-visual-v5.js

---

## 项目架构决策

### 决策：纯前端静态站点架构

**背景**：项目定位为 8-12 岁小学生学习工具

**决定**：
- 不引入后端依赖
- 不使用需要 API Key 的付费服务
- 数据持久化使用 localStorage（key: ququxv4_state_v1）
- 部署在 GitHub Pages + Gitee Pages

**影响范围**：全项目

---

## 多 Agent 团队架构

### 决策：PM Agent 统筹 + 子 Agent 并行

**背景**：项目需要多模块协同开发

**决定**：
- PM Agent：需求分析、方案制定、任务分配、质量验收
- Code Agent：代码实现、Bug 修复
- Test Agent：语法校验、浏览器验证、多端测试
- Content Agent：题库审核、内容检查
- Deploy Agent：双仓库部署、CI 监控

**影响范围**：全项目工作流

---

## 2026-08-05 · 2a 数据合并脚本修复

### 决策：const 改为 var 以跨脚本块访问

**背景**：合并脚本（index.html 行 6948-6977）无法访问上一 script 块中用 `const` 声明的 `MATH_BY_GRADE`，导致 `math-2a-2b.js` 中的 2a/2b 数据合并失败。

**决定**：
1. 将 `const MATH_BY_GRADE` 改为 `var MATH_BY_GRADE`（函数作用域，跨 script 块可访问）
2. 合并脚本中 `MATH_GRADE_2` 显式加 `window.` 前缀

**影响范围**：index.html 第 1394 行、第 6951-6953 行

---
