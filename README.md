# 潮汐创作台 · Deep Sea Creator Dashboard

在 Obsidian 里，把你的作品、方法笔记、选题与草稿推导成一张**会呼吸的神经网络图谱**的个人创作看板：中心一颗光球，五只发光的水母代表五个模块，点开水母，触须像伞一样展开到每一篇内容；点开一篇，右侧弹出它的全部数据与双向链接。

> 本仓库是把原作者 **luoluo-121** 的网页看板 [neural-creator-dashboard](https://github.com/luoluo-121/neural-creator-dashboard) **插件化**后的 Obsidian 插件仓库。原作品的作者、许可与通知见 [NOTICE](NOTICE.md)。

## 功能

- **两种形态**：独立视图（侧栏 / 命令面板打开），以及笔记内 `neural-dashboard` 代码块。
- **三层交互**：水母 → 内容列表 → 分析栏（指标、出链 / 反链 / 双向、话题、二度关联），Esc / 面包屑逐层返回。
- **中英双语**，尊重系统「减少动态效果」设置。
- **本地数据**：直接读取当前 vault 的笔记；运行数据存本机（`data.json`），无联网、无统计、无 AI 调用。
- 光球 / 五只水母的动效由 `assets/` 里的视频与海报绘制到 canvas。

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
> 兼容：Obsidian ≥ 1.5.0，**仅桌面端**（`isDesktopOnly: true`）。

## 开发与构建

需要 Node.js `20.19+` 或 `22.12+`。

```bash
npm install
npm run build   # esbuild：src/main.js -> main.js（仅压缩，不改语义）
npm test        # 产物结构校验（CJS / 仅 require obsidian / 无 ESM 残留 / 作用域样式 / 素材齐全）
npm run check   # node --check src/main.js
```

目录结构：

| 路径 | 作用 |
|---|---|
| `src/main.js` | 源码（见下方「来源与限制」），唯一逻辑源 |
| `main.js` | 构建产物（已入库，便于审查与 BRAT / 手动安装） |
| `scripts/build.mjs` | esbuild 打包脚本 |
| `test/artifact.test.mjs` | 产物硬校验 |
| `.github/workflows/` | CI（push/PR 构建+测试）与 Release（打 tag 发版） |
| `assets/` | 运行时素材（必需） |
| `manifest.json` | Obsidian 插件清单 |

## 来源与限制（重要，请先读）

本仓库的 `src/main.js` 由上一版**发布产物 `main.js` 反编译格式化复原**得到（recovered source），
**并非原作者原始工程源码**。因此：

- 变量名仍保留压缩态（如 `Y1`、`ec`），不是理想的可读命名；
- 结构上是 `bundle → 格式化 → 重新压缩`，**不是**原始的多文件模块化工程；
- 构建（`npm run build`）是把复原源码重新压缩，**发布产物行为与上一版一致**；
- 后续可在此基础上**渐进重构**（重命名、拆模块）。

这是"让仓库拥有可读、可构建源码"的务实方案；如需彻底干净的多文件 TypeScript 源码，需要重写（另行评估）。

## 许可

- 本仓库为 [luoluo-121/neural-creator-dashboard](https://github.com/luoluo-121/neural-creator-dashboard) 的衍生（插件化）作品，沿用 **PolyForm Noncommercial License 1.0.0**，见 [LICENSE](LICENSE)。
- **仅限非商业用途**学习、使用与分发；商业使用需另行授权。
- 必须随分发保留上游的 Required Notice 与 MIT 历史例外说明，见 [NOTICE](NOTICE.md)。
- 致谢原作者 **luoluo-121** 及 neural-creator-dashboard 贡献者。
