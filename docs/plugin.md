---
outline: deep
---

# MusicFree 插件

**插件是 MusicFree 的核心扩展机制**：平台搜索下载、元数据刮削、歌单导入等能力均由第三方 WASM 插件提供，通过 [插件注册表](/plugin-registry) 订阅安装。

相关文档：[注册表](/plugin-registry) · [第三方插件合集](/plugin-collection) · [插件编排](/plugin-orchestration) · [插件开发](/plugin-development)

## 插件提供的能力

| 产品能力               | 宿主接口                               | 典型插件                                    |
| ---------------------- | -------------------------------------- | ------------------------------------------- |
| 在线搜索 / 下载入库    | `RemoteSearch`、`RemoteDownload`       | `mf-plugin-gomusicdl` 等                    |
| 单曲元数据、封面、歌词 | `ScraperSong`、`GetCover`、`GetLyrics` | 网易云、QQ 音乐、MusicBrainz 等             |
| 专辑信息刮削           | `GetAlbumInfo`                         | 同上刮削类插件                              |
| 艺术家信息与头像       | `GetArtistInfo`                        | 同上刮削类插件                              |
| 歌单 URL 导入 / 同步   | `FetchPlaylist`                        | `mf-plugin-netease`、`mf-plugin-qqmusic` 等 |

后期与第三方平台的交互也将主要通过插件扩展。

![](/img/remote-seach.webp)

## 插件商店

插件商店展示已订阅注册表中的全部插件，支持安装、启用、配置 JSON 凭据。

- **订阅注册表**：在商店设置中添加一个或多个 `registry.json` URL，详见 [插件注册表](/plugin-registry)。
- **常用注册表与插件说明**：见 [第三方插件合集](/plugin-collection)。

![](/img/plugin-store.webp)

---

## 插件编排

当多个插件实现同一类能力时，可在 **插件编排** 中为五个维度（基础信息、歌词、封面、专辑、艺术家）分别指定**有序插件链**，按链尝试直至命中。

- 远程搜索 / 下载、歌单导入**不走**五维编排，见各功能页说明。
- 详细规则、配置 JSON 与排错：见 [插件编排](/plugin-orchestration)。

![](/img/plugin-orin.webp)

---

## 快速开始

1. 确认已订阅所需 [注册表](/plugin-registry)（内置 + 可选社区）。
2. 在插件商店安装插件，填写配置项并启用。
3. 在 **插件编排** 中调整各维度插件顺序（可选）。
4. 在 [音乐管理](/music)、[歌单](/playlist) 等页面验证搜索、刮削或导入效果。

自行开发插件请参考 [插件开发](/plugin-development) 与示例仓库 [music-free-plugin](https://github.com/ansgoo/music-free-plugin)。
