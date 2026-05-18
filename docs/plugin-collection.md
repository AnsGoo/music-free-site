---
outline: deep
---

# 第三方插件合集

本文档汇总 MusicFree **常用插件注册表**中的插件能力，便于选型与配置。

相关文档：[插件](/plugin) · [插件注册表](/plugin-registry) · [插件编排](/plugin-orchestration) · [插件开发](/plugin-development)

插件以 [Extism WASI WASM](/plugin-development) 形式运行。

**能力图例**（下文能力矩阵）：✓ = `manifest.json` 中已声明；— = 未声明。

| 列     | 对应宿主能力 / manifest 键 |
| ------ | -------------------------- |
| 歌曲   | `ScraperSong`              |
| 封面   | `GetCover`                 |
| 歌词   | `GetLyrics`                |
| 专辑   | `GetAlbumInfo`             |
| 艺术家 | `GetArtistInfo`            |
| 歌单   | `FetchPlaylist`            |
| 搜索   | `RemoteSearch`             |
| 下载   | `RemoteDownload`           |

---

## 1. 内置注册表（官方）

MusicFree 默认订阅 [music-free-plugin](https://github.com/ansgoo/music-free-plugin) 注册表：

[https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/artifact/registry.json](https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/artifact/registry.json)

当前收录 **2** 个插件，均为 **元数据刮削** 类型（无远程搜索/下载、无歌单导入）。

**注意：官方注册表不会收录可能存在侵权的插件**

### 1.1 一览

| 插件 ID                 | 展示名           | 语言   | 外部数据源                      | 类型 |
| ----------------------- | ---------------- | ------ | ------------------------------- | ---- |
| `mf-plugin-musicbrainz` | MusicBrainz (Go) | Go     | MusicBrainz + Cover Art Archive | 刮削 |
| `mf-plugin-lastfm`      | Last.fm (Python) | Python | Last.fm API                     | 刮削 |

### 1.2 能力矩阵

| 插件                    | 歌曲 | 封面 | 歌词 | 专辑 | 艺术家 | 歌单 | 搜索 | 下载 |
| ----------------------- | :--: | :--: | :--: | :--: | :----: | :--: | :--: | :--: |
| `mf-plugin-musicbrainz` |  ✓   |  ✓   |  —   |  ✓   |   ✓    |  —   |  —   |  —   |
| `mf-plugin-lastfm`      |  ✓   |  ✓   |  —   |  ✓   |   ✓    |  —   |  —   |  —   |

### 1.3 `mf-plugin-musicbrainz`

**定位**：开源 [MusicBrainz](https://musicbrainz.org/) 权威元数据 + [Cover Art Archive](https://coverartarchive.org/) 封面；**不提供歌词**。

**导出能力**：`ScraperSong`、`GetCover`、`GetAlbumInfo`、`GetArtistInfo`。

**适用场景**：ISRC / 精确匹配、专辑与艺术家维度的元数据补全。

**配置项**

| 字段                 | 说明                                                   |
| -------------------- | ------------------------------------------------------ |
| `api_base_url`       | MusicBrainz API 根地址，默认 `https://musicbrainz.org` |
| `cover_art_base_url` | 封面归档地址，默认 `https://coverartarchive.org`       |
| `user_agent`         | 公开 API 要求的 User-Agent，建议包含联系邮箱或项目 URL |

### 1.4 `mf-plugin-lastfm`

**定位**：[Last.fm](https://www.last.fm/) track / album / artist API 元数据与封面；**无歌词 API**。

**导出能力**

| 能力            | 说明                               |
| --------------- | ---------------------------------- |
| `ScraperSong`   | `track.getInfo` 等，含流派、年份等 |
| `GetCover`      | 优先专辑封面，其次艺人头像         |
| `GetAlbumInfo`  | `album.getinfo` / `album.search`   |
| `GetArtistInfo` | `artist.getinfo`                   |

**配置项**（必填）：`api_key`、`shared_secret`；可选 `session_key`（[Last.fm API 申请](https://www.last.fm/api/account/create)）。

> **编排说明**：前端将 Last.fm 标记为 **不支持** 单曲编排中的 basic / cover / lyrics 字段（避免误用）；专辑、艺术家维度仍可通过 `GetAlbumInfo`、`GetArtistInfo` 使用。

---

## 2. 社区注册表推荐（musicfree-plugin）

除内置注册表外，可额外订阅 [musicfree-plugin](https://www.npmjs.com/package/musicfree-plugin) 社区注册表以扩充插件商店：

[https://cdn.jsdelivr.net/npm/musicfree-plugin@latest/artifact/registry.json](https://cdn.jsdelivr.net/npm/musicfree-plugin@latest/artifact/registry.json)

当前收录 **3** 个插件：1 个远程搜索/下载 + 2 个国内平台刮削与歌单。

### 2.1 一览

| 插件 ID               | 展示名     | 语言 | 外部数据源        | 类型          |
| --------------------- | ---------- | ---- | ----------------- | ------------- |
| `mf-plugin-gomusicdl` | GoMusicDL  | Go   | 多平台（见 §2.3） | 远程搜索/下载 |
| `mf-plugin-netease`   | 网易云音乐 | Rust | 网易云音乐        | 刮削 + 歌单   |
| `mf-plugin-qqmusic`   | QQ 音乐    | Go   | QQ 音乐           | 刮削 + 歌单   |

### 2.2 能力矩阵

| 插件                  | 歌曲 | 封面 | 歌词 | 专辑 | 艺术家 | 歌单 | 搜索 | 下载 |
| --------------------- | :--: | :--: | :--: | :--: | :----: | :--: | :--: | :--: |
| `mf-plugin-gomusicdl` |  —   |  —   |  —   |  —   |   —    |  —   |  ✓   |  ✓   |
| `mf-plugin-netease`   |  ✓   |  ✓   |  ✓   |  ✓   |   ✓    |  ✓   |  —   |  —   |
| `mf-plugin-qqmusic`   |  ✓   |  ✓   |  ✓   |  ✓   |   ✓    |  ✓   |  —   |  —   |

### 2.3 `mf-plugin-gomusicdl`（GoMusicDL）

**定位**：从多个国内及部分国际音源 **搜索并下载** 音频到媒体库；下载完成后由后端补元数据并触发扫描。

**导出能力**

- **`RemoteSearch`**：按关键词在配置来源上并行搜索，返回标题、专辑、码率、格式、歌手、平台、时长等。
- **`RemoteDownload`**：按选中记录下载到缓存，再移动到目标目录并扫描入库。

**支持平台**（`config.sources` 逗号分隔；未配置时使用默认子集）：

`qq`、`netease`、`kugou`、`kuwo`、`migu`、`qianqian`、`soda`、`jamendo`、`joox`

默认常见子集：`qq, netease, kugou, kuwo, migu, soda`（以实际构建与配置为准）。

**配置项**

| 字段      | 说明                            |
| --------- | ------------------------------- |
| `sources` | 逗号分隔的来源列表              |
| `limit`   | 每个来源的搜索结果上限，默认 10 |

### 2.4 `mf-plugin-netease`（网易云音乐）

**定位**：网易云 **元数据刮削** 与 **歌单 URL 导入**。

**导出能力**

| 能力            | 说明                                 |
| --------------- | ------------------------------------ |
| `ScraperSong`   | 曲目元数据（标题、艺人、专辑等）     |
| `GetCover`      | 封面写入 `/coverArt`，返回哈希文件名 |
| `GetLyrics`     | 歌词（含翻译等，依实现而定）         |
| `GetAlbumInfo`  | 专辑信息与曲目列表                   |
| `GetArtistInfo` | 艺人信息与头像                       |
| `FetchPlaylist` | 解析网易云歌单链接，拉取完整曲目列表 |

**配置项**：`timeoutMs`（默认 8000）、`userAgent`。

### 2.5 `mf-plugin-qqmusic`（QQ 音乐）

**定位**：与网易云对称的 QQ 音乐 **元数据刮削** 与 **歌单导入**。

**导出能力**：与 `mf-plugin-netease` 相同的六项能力。manifest 中歌单 WASM 导出名为 `FetchPlay`，宿主侧能力名仍为 `FetchPlaylist`。

**配置项**：`timeoutMs`、`userAgent`（与网易云插件类似，以 manifest 为准）。

---

## 3. 按产品功能选型

| 产品功能（管理后台）         | 依赖能力                                  | 推荐插件                                    |
| ---------------------------- | ----------------------------------------- | ------------------------------------------- |
| 远程搜索 / 下载入库          | `RemoteSearch`、`RemoteDownload`          | `mf-plugin-gomusicdl`                       |
| 单曲元数据 + 封面 + 歌词刮削 | `ScraperSong`、`GetCover`、`GetLyrics`    | `mf-plugin-netease`、`mf-plugin-qqmusic`    |
| 单曲 / 专辑元数据（无歌词）  | `ScraperSong`、`GetCover`、`GetAlbumInfo` | `mf-plugin-musicbrainz`、`mf-plugin-lastfm` |
| 专辑信息刮削                 | `GetAlbumInfo`                            | 上述刮削类插件均可                          |
| 艺术家信息与头像             | `GetArtistInfo`                           | 上述刮削类插件均可                          |
| 歌单 URL 导入与同步          | `FetchPlaylist`                           | `mf-plugin-netease`、`mf-plugin-qqmusic`    |

同一能力可订阅多个插件并在 [插件编排](/plugin) 中设置优先级；具体接口协议见 [插件开发](/plugin-development)。

---

## 4. 快速开始

1. 打开管理后台 **插件商店**，确认已订阅所需注册表（内置 + 可选社区地址，见上文 §1、§2）。
2. 安装目标插件，在插件详情中填写对应配置项。
3. 启用插件后，在 **插件编排** 中为对应能力调整顺序。
4. 前往 [音乐管理](/music)（搜索/刮削）或 [歌单](/playlist)（歌单导入）验证效果。

更多注册表字段与冲突规则见 [插件注册表](/plugin-registry)；自行开发插件见 [插件开发](/plugin-development) 与参考仓库 [music-free-plugin](https://github.com/ansgoo/music-free-plugin)。

## 5. 免责声明

**如果本文档中插件存在侵权行为，请联系本作者，我们将会第一时间删除对应文档说明**
