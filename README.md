# 潮汐创作台 · Deep Sea Creator Dashboard

> 一个把作品、方法笔记、选题与草稿推导成**可交互神经网络图谱**的 Obsidian 插件。
> An Obsidian plugin that turns your works, notes, ideas and drafts into a living neural-network dashboard.

在 Obsidian 里，中心一颗光球、五只发光的水母代表五个模块；点开水母，触须像伞一样展开到每一篇内容；点开一篇，右侧弹出它的全部数据与双向链接。

## 功能与用法

- **两种打开方式**
  - 命令面板搜索「潮汐创作台」，或点击左侧栏的**神经网络图标**，打开独立视图。
  - 点击左侧栏的**最大化图标**可一键最大化：自动收起左右侧栏，让看板铺满主区域。
  - 在任意笔记中插入代码块，即可在笔记内嵌一个看板实例（同一时刻最多 2 个活跃实例）：
    ````
    ```neural-dashboard
    ```
    ````
- **三层交互**：水母（模块）→ 内容列表 → 分析栏（出链 / 反链 / 双向、话题、二度关联）；`Esc` 或面包屑逐层返回。
- **中英双语**，尊重系统「减少动态效果」设置。
- **本地数据**：直接读取当前 vault 的笔记；运行数据保存在插件的 `data.json`；**不联网、无遥测、无 AI 调用**。

## 兼容性

- Obsidian ≥ **1.5.0**；**仅桌面端**（`isDesktopOnly: true`）。
- 动效依赖 `assets/` 中的视频素材。

## 安装

### 方式一：Release 整包（推荐）

1. 到 [Releases](../../releases) 下载 `deep-sea-creator-dashboard-<版本>.zip`。
2. 解压，把 `deep-sea-creator-dashboard` 文件夹放到 `<你的 vault>/.obsidian/plugins/` 下，
   使其路径为 `.obsidian/plugins/deep-sea-creator-dashboard/manifest.json`。
3. 重启 Obsidian，或到「设置 → 第三方插件」关闭再打开「受限模式」，启用「潮汐创作台」。

### 方式二：手动放置

把仓库根目录的 `manifest.json`、`main.js`、`avatar.svg`、`assets/` 一起放进
`<你的 vault>/.obsidian/plugins/deep-sea-creator-dashboard/`。

> ⚠️ `assets/`（光球 / 水母的 mp4 与 jpg，约 9 MB）是运行时**必需**素材，必须与主程序放在一起，否则动效会缺失。
> 因为包含素材，**部分自动安装器（如 BRAT）只会下载 `main.js` / `manifest.json`，拿不到 `assets/`**，请用整包方式安装。

## 开发与构建

需要 Node.js `20.19+` 或 `22.12+`。

```bash
npm install
npm run build   # esbuild transform：src/main.js -> main.js（仅压缩，不改语义）
npm test        # 产物结构校验
npm run check   # node --check src/main.js
```

| 路径 | 作用 |
|---|---|
| `src/main.js` | 源码（见下方「源码来源与限制」），唯一逻辑源 |
| `main.js` | 构建产物（已入库，便于审查与 BRAT / 手动安装） |
| `scripts/build.mjs` | esbuild 打包脚本（单文件压缩） |
| `test/artifact.test.mjs` | 产物硬校验 |
| `.github/workflows/` | CI（push/PR 构建+测试）与 Release（打 tag 发版） |
| `assets/` | 运行时素材（必需） |
| `manifest.json` | Obsidian 插件清单 |

## 来源、授权与署名（重要）

- 本插件是 **luoluo-121** 的网页看板 [neural-creator-dashboard](https://github.com/luoluo-121/neural-creator-dashboard) 的**插件化衍生作品**，派生自其代码。
- 沿用 **PolyForm Noncommercial License 1.0.0**（见 [LICENSE](LICENSE)）：**仅限非商业用途**学习、使用与分发；商业使用需另行授权。
- 必须随分发保留上游的 Required Notice 与 MIT 历史例外说明，见 [NOTICE](NOTICE.md)。
- 致谢原作者 **luoluo-121** 及 neural-creator-dashboard 贡献者。

> ⚠️ **关于上架 Obsidian 官方目录**：Obsidian 开发者政策对 **Fork / 衍生**有明确限制——**未经原作者明确书面许可（公开可验证）的衍生仓库不允许进入官方社区目录**（或需证明原作者失联满 6 个月，而本上游仍在更新，不满足）。
> 因此若要上架官方社区目录，请先取得 luoluo-121 的公开授权；否则建议仅在 GitHub Releases / BRAT 自行分发。

## 源码来源与限制（重要，请先读）

本仓库的 `src/main.js` 由上一版**发布产物 `main.js` 反编译格式化复原**得到（recovered source），
**并非原作者原始工程源码**。因此：

- 变量名仍保留压缩态（如 `Y1`、`ec`），不是理想的可读命名；
- 结构上是 `bundle → 格式化 → 重新压缩`，**不是**原始的多文件模块化工程；
- 构建（`npm run build`）是把复原源码重新压缩，**发布产物行为与上一版一致**；
- 后续可在此基础上**渐进重构**（重命名、拆模块）。

这是“让仓库拥有可读、可构建源码”的务实方案；如需彻底干净的多文件 TypeScript 源码，需要重写（另行评估）。
