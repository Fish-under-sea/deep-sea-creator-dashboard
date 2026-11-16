# 潮汐创作台（Deep Sea Creator Dashboard）

在 Obsidian 中把**作品、方法笔记、选题与草稿**推导成一张**神经网络图谱**的个人创作工作台。
提供「独立视图」与「笔记内代码块」两种形态，数据源直接读取当前 vault 的笔记。

> 本仓库为**成品分发仓库**：包含可直接安装的插件产物（`main.js` 等），用于手动安装与 Release 分发。
> 源码/构建脚本未包含在本仓库中。

## 安装

### 方式一：Release 整包（推荐）

1. 到 [Releases](../../releases) 下载 `deep-sea-creator-dashboard-<版本>.zip`。
2. 解压，把 `deep-sea-creator-dashboard` 文件夹放到 `<你的 vault>/.obsidian/plugins/` 下，
   使路径为 `.obsidian/plugins/deep-sea-creator-dashboard/manifest.json`。
3. 重启 Obsidian，或到「设置 → 第三方插件」关闭再打开「受限模式」，启用「潮汐创作台」。

### 方式二：手动放置

把本仓库根目录的 `manifest.json`、`main.js`、`avatar.svg`、`assets/` 一起放进
`<你的 vault>/.obsidian/plugins/deep-sea-creator-dashboard/`。

> ⚠️ `assets/`（光球/水母的 mp4 与 jpg，约 9MB）是运行时必需素材，必须与主程序放在一起，否则动效会缺失。
> 因为包含素材，**部分自动安装器（如 BRAT）只会下载 `main.js`/`manifest.json`，无法取得 `assets/`**，建议用整包方式安装。

## 兼容性

- `minAppVersion`：1.5.0
- 仅桌面端（`isDesktopOnly: true`）

## 数据

- 插件运行数据保存在自身的 `data.json`，**不随本仓库分发**。

## 许可

本项目沿用原项目的 **PolyForm Noncommercial License 1.0.0**，详见 [LICENSE](LICENSE)。
非商业用途可自由使用、修改与分发；商业使用前请先确认授权。

## 致谢

- 感谢原作者 **luoluo-121**（<https://github.com/luoluo-121>）创作了本项目；本仓库在其成果基础上以新名称整理发布。
- 感谢 PolyForm 项目提供的许可证文本（<https://polyformproject.org>）。

---

# 潮汐创作台 · 发包说明（维护者）

- 插件 id：`deep-sea-creator-dashboard`
- 显示名：潮汐创作台
- 版本：0.1.0
- 作者：fish-under-sea
- 包内文件：`manifest.json`、`main.js`、`avatar.svg`、`assets/`；不含 `data.json`。

改动：`manifest.json` 的 `id`/`name`/`author`/`authorUrl` 已更新；`main.js` 内 3 处界面文案「创作神经网络看板」替换为「潮汐创作台」，逻辑未改动。
