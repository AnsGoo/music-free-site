---
outline: deep
---

# Music Free Serve 集成

相关文档：[歌单](/playlist) · [音乐分享](/share) · [用户](/user)

## 1. 模块概述

**MusicFreeServe 集成**（`server-sdk`）让 MusicFree 作为 [music-free-serve](https://github.com/AnsGoo/music-free-serve) 的客户端，实现**歌单同步、共享、订阅**与**远程发现库**浏览。所有能力都需要先在「用户配置」中配置并启用 serve。

集成后，歌单页新增 `发现歌单` / `共享歌单` 页签与 `推荐` 页，音乐分享也会复用同一套 serve 凭据进行引导。

![](/img/recommend-playlist.webp)

## 2. 配置（用户配置页）

在 `/settings`（用户配置）中填写：

| 配置项            | 说明                                                   |
| ----------------- | ------------------------------------------------------ |
| `serve.enabled`   | 是否启用与 serve 的集成                                |
| `serve.host_url`  | music-free-serve 的访问地址（`HOST_URL`）              |
| `serve.api_key`   | serve 的 API Key                                       |
| `serve.listen_record` | 是否上报听歌记录                                   |
| `serve.sync_playlist` | 是否将本用户的公开歌单同步到 serve                 |

- 支持**实时检测连通性**：填写地址与 API Key 后可即时测试。
- 未启用时，歌单页默认落到「我的歌单」，推荐 / 发现 / 共享页签显示为空。

![](/img/peer-swarm-config.webp)

## 3. 歌单同步

开启 `serve.sync_playlist` 后：

- 用户的**公开歌单**（`is_public=1`）会推送 / 更新 / 删除到 serve；
- 本地与远程歌单 ID 的映射自动维护；
- 除增量同步外，服务端每 **8 小时** 执行一次全量对账兜底。

> 共享中的歌单即使未设为公开，也会被同步到 serve（用于生成分享），见 [4](#4-歌单共享)。

![](/img/share-playlist.webp)

## 4. 歌单共享

在歌单详情页可开启「共享」：

- **可见性**：`unlisted`（仅凭共享码）或 `public`（公开可见）；
- **共享码**：开启后自动生成，可复制分享；
- **只读**：共享中的歌单不可编辑，需先关闭共享；
- 关闭共享会作废共享码并清理远程订阅关系。


![](/img/playlist-share.webp)

## 5. 订阅（接收方）

### 5.1 共享歌单 / 共享码

- 「共享歌单」页签浏览 serve 上的公开共享歌单，支持搜索、分页与订阅；
- 「共享码订阅」输入共享码可直接解析并订阅（含 `unlisted` 歌单）；
- 订阅会在本地生成 `external_source=serve-shared` 的只读副本。



### 5.2 发现歌单

「发现歌单」页签浏览 serve 发现库的平台 / 分类 / 歌单，支持关键词检索；订阅后导入为 `external_source=serve-discovery` 的本地只读歌单，并按标题 + 艺术家匹配曲库。

![](/img/platform-playlist.webp)

### 5.3 远程关闭共享

若远程关闭共享或删除歌单，本地订阅副本会在打开或「同步」时自动**转为自有可编辑歌单**，不会变成死链。

## 6. 推荐页

歌单页默认进入 **推荐** 页签：

- **热门歌单**：聚合各平台热度榜单（实时拉取，不缓存）；
- **推荐歌单**：公开共享歌单预览，可跳转到「共享歌单」页签。

![](/img/recommend-playlist.webp)

## 7. 常见问题

**Q：推荐 / 共享 / 发现歌单为空？**  
A：先确认已在「用户配置」启用并正确配置 serve，且远程服务可达。

**Q：共享中的歌单为什么不能编辑？**  
A：为保证本地与远程一致会锁定编辑，请先关闭共享。

**Q：未启用 serve 会影响本地歌单吗？**  
A：不会。本地自建 / 导入 / 文件夹歌单照常使用，仅远程相关页签为空。
