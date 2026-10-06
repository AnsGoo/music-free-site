---
outline: deep
---

# Music Assistant 集成

相关文档：[设备](/device) · [MusicFreeServe 集成](/serve) · [用户](/user)

## 1. 模块概述

[Music Assistant](https://music-assistant.io/) 是一个开源的本地音乐媒体管理器，像一个音乐界的「万能遥控器」，支持 **AirPlay、Chromecast、DLNA、Snapcast、MQTT** 等多种协议，兼容新老设备。

MusicFree 原生只支持 **DLNA** 设备；AirPlay、Chromecast 等其他协议因社区第三方库实现差异无法直接集成。接入 Music Assistant 后，即可把 **单曲、专辑、歌单** 播放到 Music Assistant 发现的任意 Player，从而把音乐推送到更多硬件设备。

![Music Assistant](/img/music-assistant.webp)

> 设备侧的完整说明见 [设备模块](/device)；该能力自 **V1.2.3** 起提供。

## 2. 前置条件

1. 部署 **Music Assistant**（一般以 Docker `host` 网络模式部署，Web 访问端口为 `8095`）。
2. 在 Music Assistant 中获取访问授权 **token**。
3. 在 Music Assistant 中添加音乐源，选择 **OpenSubsonic Media Server Library** 插件，配置 MusicFree 的地址、用户名与密码，等待同步完成。

> **重要**：Music Assistant 默认使用**自己的音乐库**播放。因此推送到 Music Assistant 的曲目必须已存在于其库中——请确保上面的 OpenSubsonic 音乐源已同步。MusicFree 支持完整的 OpenSubsonic 协议，可被 Music Assistant 作为媒体库接入。

## 3. 在 MusicFree 中配置（管理员）

进入「系统配置」，填写 Music Assistant 的访问地址与 token 并启用：

| 配置项             | 说明                                              | 默认值     |
| ------------------ | ------------------------------------------------- | ---------- |
| `enabled`          | 是否启用 Music Assistant 集成                      | `false`    |
| `server_url`       | Music Assistant 服务地址，如 `http://host:8095`    |            |
| `token`            | Music Assistant 访问授权 token                     |            |
| `refresh_interval` | 设备刷新间隔（Go duration，如 `30s`）              | `30s`      |

- 保存后会**热更新**：立即重启 Music Assistant 客户端，无需重启 MusicFree 服务。
- 配置持久化到数据库（数据库优先，`config.yaml` 兜底）。

![Music Assistant 配置](/img/music-assistant-option.webp)

> 也可直接通过管理接口读写配置：`GET` / `PUT /rest/api/v1/music-assistant/config`（需管理员认证）。

## 4. 添加与使用 Player

1. 启用后，进入「设备发现」页即可看到 Music Assistant 发现的局域网 Player；
2. 在设备管理页将其 **加入设备列表**；
3. 管理员可将设备 **授权** 给某个普通用户，授权后该用户即可用此设备播放。

![Music Assistant Player](/img/music-assistant-device.webp)

普通用户在音乐、专辑、歌单等页面点击播放到设备时，即可选择 Music Assistant 的 Player。

## 5. 播放原理

播放时，MusicFree 会：

1. 按曲目的 **标题 + 艺术家** 在 Music Assistant 库中查找（`library_only`，仅库内匹配）；
2. 解析出对应的 `library://` URI；
3. 通过 `player_queues/play_media` 将曲目推送到目标 Player。

因此，**在 Music Assistant 库中不存在的曲目无法播放**，会表现为「曲目不存在」或无声音。请先在 Music Assistant 中完成 MusicFree 音乐源的同步。

## 6. 常见问题

**Q：设备发现页看不到 Music Assistant 的 Player？**  
A：请确认：已在「系统配置」中填写地址与 token 并**启用**；Music Assistant 已正常部署且与 MusicFree 处于同一局域网；Music Assistant 中已配置音乐源并同步完成。可稍等片刻后重新进入发现页或刷新。

**Q：推送到 Music Assistant 后没有声音或提示「曲目不存在」？**  
A：Music Assistant 默认使用自己的音乐库播放，只有其库中存在的曲目才能播放。请在 Music Assistant 中通过 `OpenSubsonic Media Server Library` 插件配置 MusicFree 并等待同步完成。

**Q：修改配置需要重启服务吗？**  
A：不需要。保存配置后 Music Assistant 客户端会热更新重启，新的设备发现使用最新配置。

**Q：普通用户能自己配置 Music Assistant 吗？**  
A：不能。配置为管理员能力；普通用户只能使用管理员已添加并授权给他们的 Player。
