---
outline: deep
---

# Navidrome API

MusicFree 已实现的 Navidrome 风格 Native REST API（实验性兼容），如果相关接口和官方不兼容或者缺失，请反馈。OpenSubsonic 接口见 [OpenSubsonic API](/opensubsonic-api)；认证方式见 [用户模块](/user)。

---

## 通用约定

**认证**：`/api/*` 路由组（除下列公开接口）均经过 `AuthMiddleware`。任选其一：`X-API-Key`、`Authorization: Bearer <JWT>`、`X-ND-Authorization: Bearer <JWT>`，或 Query 同时携带 `u` + `t` + `s`（OpenSubsonic 令牌公式，`s` 长度 ≥ 6）。不支持明文 `p`。

**分页（列表类）**：React-Admin / Navidrome 风格 `_start`、`_end`。`offset = _start`（默认 0）；若缺 `_end` 或 `_end <= _start`，则 **`limit = 100`**；否则 `limit = min(_end - _start, 100)`。

**总数**：列表成功时在响应头返回 **`X-Total-Count`**（字符串整数）。

**错误响应**：列表类接口在校验失败（如非法 `_sort`）时可能返回 **`subsonic-response` **（HTTP 200，`status: failed`，见 `utils.RespondError`）。部分详情接口使用 **HTTP 404** + `{ "error": "not found" }` 等裸 JSON。

---

## keepalive / keepalive

Navidrome Web UI 常用轮询保活；**无需认证**，固定返回空对象。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/keepalive/keepalive`

- 入参

| 名称   | 描述 | 默认值 |
| ------ | ---- | ------ |
| （无） | ——   | ——     |

- 响应示例

```json
{}
```

---

## GET /album

分页返回专辑列表（Navidrome `album` 对象数组）。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/album`

- 入参

| 名称                 | 描述                                                                                         | 默认值                  |
| -------------------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| （认证）             | 见上文「通用约定」                                                                           |                         |
| `_start`             | 分页起始偏移                                                                                 | 0                       |
| `_end`               | 分页结束（不含）；见分页语义                                                                 |                         |
| `_sort`              | 排序字段：`name`、`createdAt`、`updatedAt`、`songCount`、`duration`、`albumArtist`、`random` | 空则按 name ASC         |
| `_order`             | `ASC` / `DESC`                                                                               | `ASC`（非法则回落 ASC） |
| `artist_id`          | 按艺术家 ID 过滤                                                                             |                         |
| `name`               | 专辑名或艺术家名模糊搜索                                                                     |                         |
| `starred` / `rating` | 传入任意非空值将报错「非法参数」（未实现）                                                   |                         |

- 响应示例

```json
[
  {
    "id": "album-uuid",
    "name": "Jay",
    "artistId": "artist-uuid",
    "artist": "周杰伦",
    "albumArtistId": "artist-uuid",
    "albumArtist": "周杰伦",
    "minYear": 2000,
    "maxYear": 2000,
    "date": "2000",
    "songCount": 10,
    "duration": 2580,
    "genre": "",
    "starred": false,
    "rating": 0,
    "playCount": 0,
    "compilation": false,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z",
    "orderAlbumName": "jay",
    "orderAlbumArtistName": "周杰伦"
  }
]
```

响应头：`X-Total-Count: <总数>`。

---

## GET /album/:id

按 ID 返回单张专辑。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/album/{id}`

- 入参

| 名称     | 描述              | 默认值   |
| -------- | ----------------- | -------- |
| （认证） | 见上文            |          |
| `id`     | 路径参数，专辑 ID | **必填** |

- 响应示例

```json
{
  "id": "album-uuid",
  "name": "Jay",
  "artistId": "artist-uuid",
  "artist": "周杰伦",
  "albumArtistId": "artist-uuid",
  "albumArtist": "周杰伦",
  "minYear": 2000,
  "maxYear": 2000,
  "date": "2000",
  "songCount": 10,
  "duration": 2580,
  "genre": "",
  "starred": false,
  "rating": 0,
  "playCount": 0,
  "compilation": false,
  "createdAt": "2026-01-01T00:00:00Z",
  "updatedAt": "2026-01-01T00:00:00Z"
}
```

不存在：**HTTP 404**，`{"error":"not found"}`。

---

## GET /artist

分页返回艺术家列表。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/artist`

- 入参

| 名称                 | 描述                                                     | 默认值 |
| -------------------- | -------------------------------------------------------- | ------ |
| （认证）             | 见上文                                                   |        |
| `_start` / `_end`    | 分页                                                     |        |
| `_sort`              | `name`、`createdAt`、`updatedAt`、`albumCount`、`random` |        |
| `_order`             | `ASC` / `DESC`                                           |        |
| `name`               | 艺术家名模糊搜索                                         |        |
| `starred` / `rating` | 非空即报错（未实现）                                     |        |

- 响应示例

```json
[
  {
    "id": "artist-uuid",
    "name": "周杰伦",
    "albumCount": 5,
    "songCount": 120,
    "rating": 0,
    "starred": false,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z",
    "orderArtistName": "周杰伦"
  }
]
```

响应头：`X-Total-Count`。

---

## GET /artist/:id

按 ID 返回单个艺术家。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/artist/{id}`

- 入参

| 名称     | 描述     | 默认值   |
| -------- | -------- | -------- |
| （认证） | 见上文   |          |
| `id`     | 路径参数 | **必填** |

- 响应示例

```json
{
  "id": "artist-uuid",
  "name": "周杰伦",
  "albumCount": 5,
  "songCount": 120,
  "rating": 0,
  "starred": false,
  "createdAt": "2026-01-01T00:00:00Z",
  "updatedAt": "2026-01-01T00:00:00Z"
}
```

不存在：**HTTP 404**，`{"error":"not found"}`。

---

## GET /song

分页返回曲目列表（Navidrome `mediaFile` 兼容形状）。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/song`

- 入参

| 名称              | 描述                                                                                                       | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| （认证）          | 见上文                                                                                                     |        |
| `_start` / `_end` | 分页                                                                                                       |        |
| `_sort`           | `play_date`、`artist`、`album`、`duration`、`id`、`title`、`createdAt`、`max_year`、`play_count`、`random` |        |
| `_order`          | `ASC` / `DESC`                                                                                             |        |
| `starred`         | `true`/`1` 仅收藏；`false`/`0` 仅未收藏；不传则不限                                                        |        |
| `album_id`        | 按专辑 ID 过滤                                                                                             |        |
| `title`           | 标题模糊过滤                                                                                               |        |

- 响应示例

```json
[
  {
    "id": "song-uuid",
    "title": "反方向的钟",
    "album": "Jay",
    "albumId": "album-uuid",
    "artistId": "artist-uuid",
    "artist": "周杰伦",
    "albumArtistId": "artist-uuid",
    "albumArtist": "周杰伦",
    "duration": 258,
    "bitRate": 320,
    "suffix": "mp3",
    "size": 4134309,
    "trackNumber": 1,
    "discNumber": 1,
    "year": 2000,
    "playCount": 9,
    "playDate": "2026-05-01T12:00:00.000000000Z",
    "starred": false,
    "starredAt": null,
    "hasCoverArt": true,
    "path": "/music/track.mp3",
    "libraryId": 1,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z",
    "orderTitle": "反方向的钟",
    "orderAlbumName": "jay",
    "orderArtistName": "周杰伦",
    "genre": "",
    "compilation": false,
    "rating": 0,
    "bookmarkPosition": 0,
    "date": "",
    "originalYear": 0,
    "releaseYear": 0,
    "sampleRate": 0,
    "channels": 0,
    "lyrics": "",
    "rgAlbumGain": 0,
    "rgAlbumPeak": 0,
    "rgTrackGain": 0,
    "rgTrackPeak": 0
  }
]
```

响应头：`X-Total-Count`。

---

## GET /song/:id

返回单曲 Navidrome 形状 JSON。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/song/{id}`

- 入参

| 名称     | 描述              | 默认值   |
| -------- | ----------------- | -------- |
| （认证） | 见上文            |          |
| `id`     | 路径参数，歌曲 ID | **必填** |

- 响应示例

字段集合与列表中单条一致（见「GET /song」示例对象）。

不存在：**HTTP 404**，`{"error":"not found"}`。

---

## POST /song

接收 Navidrome 形状 **`mediaFile` 对象数组** 的 JSON Body。**不落库**，用于兼容会向该路径 POST 的客户端/代理。

- HTTP方法：`POST`

- 请求url：`http://example.com/api/song`

- 入参

| 名称     | 描述                                                        | 默认值   |
| -------- | ----------------------------------------------------------- | -------- |
| （认证） | 见上文                                                      |          |
| Body     | `application/json`，数组元素结构与 `NavidromeSongJSON` 一致 | **必填** |

- 响应示例

```json
{
  "ok": true,
  "received": 0
}
```

---

## GET /playlist

分页返回当前用户可见播放列表。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/playlist`

- 入参

| 名称              | 描述                                                      | 默认值                           |
| ----------------- | --------------------------------------------------------- | -------------------------------- |
| （认证）          | 见上文                                                    |                                  |
| `_start` / `_end` | 分页                                                      |                                  |
| `_sort`           | `createdAt`、`updatedAt`、`name`、`songCount`、`duration` | 空则服务端默认 `updated_at DESC` |
| `_order`          | `ASC` / `DESC`                                            |                                  |

- 响应示例

```json
[
  {
    "id": "pl-uuid",
    "name": "我的列表",
    "comment": "",
    "duration": 2400,
    "songCount": 12,
    "ownerId": "user-uuid",
    "ownerName": "admin",
    "public": false,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-02T00:00:00Z",
    "sync": false
  }
]
```

响应头：`X-Total-Count`。

---

## GET /playlist/:id/tracks

返回指定播放列表中 **可播放且已绑定库内歌曲** 的曲目分页；每项为 Navidrome `mediaFile` 字段外加 **`mediaFileId`**（歌曲 ID）与行 **`id`**（字符串形式的行序号）。

- HTTP方法：`GET`

- 请求url：`http://example.com/api/playlist/{id}/tracks`

- 入参

| 名称              | 描述                           | 默认值   |
| ----------------- | ------------------------------ | -------- |
| （认证）          | 见上文                         |          |
| `id`              | 路径参数，播放列表 ID          | **必填** |
| `_start` / `_end` | 在**过滤后的可播放列表**上分页 |          |

- 响应示例

```json
[
  {
    "id": "1",
    "mediaFileId": "song-uuid",
    "title": "反方向的钟",
    "albumId": "album-uuid",
    "artistId": "artist-uuid",
    "duration": 258
  }
]
```

无权限：**HTTP 403**。不存在：**HTTP 404**。响应头：`X-Total-Count`（过滤后可播放条目总数）。

---

## DELETE /playlist/:id

删除播放列表（须为所有者且有权限逻辑由服务层校验）。

- HTTP方法：`DELETE`

- 请求url：`http://example.com/api/playlist/{id}`

- 入参

| 名称     | 描述     | 默认值   |
| -------- | -------- | -------- |
| （认证） | 见上文   |          |
| `id`     | 路径参数 | **必填** |

- 响应示例

成功：**HTTP 200**

```json
{}
```

无权或不存在：**HTTP 404**，`{}`。服务端异常：**HTTP 500**，`{"error":"failed to delete playlist"}`。

---

## 相关：登录换取 JWT（非 `/api` 前缀）

Navidrome Web UI 常用 **`POST /auth/login`**。成功后使用返回 JWT 调用。

---
