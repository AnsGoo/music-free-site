# API

## 支持的认证方式

1. JWT Bearer  
   通过登录接口获取 token，放入 `Authorization: Bearer <token>`。

2. OpenSubsonic Token（`u+t+s`）  
   使用用户名 `u`、随机盐 `s`、签名 `t`（MD5 派生）进行认证。

3. API Key  
   在请求头传入 `X-API-Key`，适合服务间调用与长期接入。

## 已实现的 OpenSubsonic 接口范围

**路径约定**：每条接口另有同名路径后缀 `.view`（如 `/rest/ping.view`），行为与无前缀路径一致。

**响应格式**：未带 `f=json` 时默认 **XML**；带 `f=json` 时为 **JSON**。成功请求含 `status`、`version`（示例 `1.16.1`）、`serverVersion`（示例 `0.1.1`）、`openSubsonic: true`、`type: MusicFree`。

## 通用入参（除「ping」外均需认证）

下列参数可与各接口的业务参数同时使用（认证方式任选其一生效，优先级以中间件为准）：

- 入参

| 名称                 | 描述                                                                              | 默认值 |
| -------------------- | --------------------------------------------------------------------------------- | ------ |
| `X-API-Key`          | HTTP Header，用户 API Key                                                         |        |
| `Authorization`      | `Bearer <JWT>` 登录令牌                                                           |        |
| `X-ND-Authorization` | Navidrome 风格 Bearer JWT                                                         |        |
| `u`                  | 用户名；须与 `t`、`s` 同时出现                                                    |        |
| `t`                  | OpenSubsonic 令牌：`md5(明文密码+salt)` 或 `md5(md5(密码)+salt)` 等与库中字段匹配 |        |
| `s`                  | 随机盐，`u+t+s` 认证时长度须 ≥ 6                                                  |        |
| `f`                  | 设为 `json` 时响应为 JSON                                                         |        |
| `v`                  | 客户端声明的协议版本（可选，服务端可不校验）                                      |        |
| `c`                  | 客户端名（可选；`scrobble` 可作 clientId 补充）                                   |        |

---

## ping

连通性探测，无需认证。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/ping`（及 `…/ping.view`）

- 入参

| 名称            | 描述                   | 默认值 |
| --------------- | ---------------------- | ------ |
| `f`             | 同上，决定是否 JSON    |        |
| `u` / `t` / `s` | 可选；本接口不要求认证 |        |

- 响应示例

```json
{
  "subsonic-response": {
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getLicense

返回许可证信息（实现中固定为有效）。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/getLicense`（及 `…/getLicense.view`）

- 入参

| 名称     | 描述              | 默认值 |
| -------- | ----------------- | ------ |
| （认证） | 见「通用入参」    |        |
| `f`      | `json` / 默认 XML |        |

- 响应示例

```json
{
  "subsonic-response": {
    "license": { "valid": true },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getOpenSubsonicExtensions

列出本服务器声明的 OpenSubsonic 扩展（如 `transcodeOffset`）。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/getOpenSubsonicExtensions`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "openSubsonicExtensions": [{ "name": "transcodeOffset", "versions": [1] }],
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getUser

按用户名返回 OpenSubsonic 用户信息（非管理员仅可查询本人）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getUser`

- 入参

| 名称       | 描述           | 默认值   |
| ---------- | -------------- | -------- |
| （认证）   | 见「通用入参」 |          |
| `username` | 要查询的用户名 | **必填** |
| `f`        |                |          |

- 响应示例

```json
{
  "subsonic-response": {
    "user": {
      "username": "admin",
      "email": "",
      "scrobblingEnabled": "true",
      "adminRole": "true",
      "settingsRole": "true",
      "downloadRole": "true",
      "uploadRole": "false",
      "playlistRole": "true",
      "coverArtRole": "true",
      "commentRole": "false",
      "podcastRole": "false",
      "streamRole": "true",
      "jukeboxRole": "false",
      "shareRole": "false",
      "videoConversionRole": "false"
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getMusicFolders

列出已启用媒体源；若配置了 `music.library_path` 且不存在已启用本地源，会附加虚拟条目 `default-library`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getMusicFolders`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "musicFolders": {
      "musicFolder": [
        { "id": "src-uuid-1", "name": "本地库" },
        { "id": "default-library", "name": "Default Library" }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getMusicDirectory

按目录 ID 浏览：`id` 可为媒体文件夹 ID、`getArtist`/`getIndexes` 中的艺术家 ID 或专辑 ID。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getMusicDirectory`

- 入参

| 名称     | 描述               | 默认值 |
| -------- | ------------------ | ------ |
| （认证） | 见「通用入参」     |        |
| `id`     | **必填**，目录标识 |        |
| `f`      |                    |        |

- 响应示例

```json
{
  "subsonic-response": {
    "directory": {
      "id": "artist-uuid",
      "name": "示例艺术家",
      "child": [
        {
          "id": "album-uuid",
          "parent": "artist-uuid",
          "isDir": true,
          "title": "示例专辑",
          "coverArt": "al-album-uuid",
          "songCount": 12
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getIndexes

按首字母分组返回索引；支持 `ifModifiedSince` 条件响应。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getIndexes`

- 入参

| 名称              | 描述                                 | 默认值 |
| ----------------- | ------------------------------------ | ------ |
| （认证）          | 见「通用入参」                       |        |
| `musicFolderId`   | 限定在某个媒体文件夹内               |        |
| `ifModifiedSince` | 毫秒时间戳；未变更时可仅返回空业务体 |        |
| `f`               |                                      |        |

- 响应示例

```json
{
  "subsonic-response": {
    "indexes": {
      "lastModified": 1712131200000,
      "ignoredArticles": "The An A Die Das Ein Eine Les Le La",
      "index": [
        {
          "name": "Z",
          "artist": [
            {
              "id": "artist-uuid",
              "name": "周杰伦",
              "coverArt": "ar-artist-uuid",
              "albumCount": 3
            }
          ]
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getArtists

与 `getIndexes` 类似但以 `artists` 为根键返回。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getArtists`

- 入参

| 名称            | 描述           | 默认值 |
| --------------- | -------------- | ------ |
| （认证）        | 见「通用入参」 |        |
| `musicFolderId` |                |        |
| `f`             |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "artists": {
      "ignoredArticles": "The An A Die Das Ein Eine Les Le La",
      "index": [
        {
          "name": "J",
          "artist": [
            {
              "id": "artist-uuid",
              "name": "周杰伦",
              "coverArt": "ar-artist-uuid",
              "albumCount": 3
            }
          ]
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getArtist

返回指定艺术家详情及专辑列表。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getArtist`

- 入参

| 名称     | 描述           | 默认值   |
| -------- | -------------- | -------- |
| （认证） | 见「通用入参」 |          |
| `id`     | 艺术家 ID      | **必填** |
| `f`      |                |          |

- 响应示例

```json
{
  "subsonic-response": {
    "artist": {
      "id": "634330da-ecac-41fb-97d1-7d53e5863c1f",
      "name": "周杰伦",
      "albumCount": 3,
      "coverArt": "ar-634330da-ecac-41fb-97d1-7d53e5863c1f",
      "artistImageUrl": "/rest/api/v1/artists/634330da-ecac-41fb-97d1-7d53e5863c1f/avatar",
      "album": [
        {
          "id": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "name": "Jay",
          "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "coverArt": "al-2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "songCount": 10,
          "duration": 2580,
          "year": 2000
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getArtistInfo

艺术家简介与相似艺人（外链字段多为空或本地头像 URL）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getArtistInfo`

- 入参

| 名称                | 描述                                   | 默认值   |
| ------------------- | -------------------------------------- | -------- |
| （认证）            | 见「通用入参」                         |          |
| `id`                | 艺术家 ID                              | **必填** |
| `count`             | 相似艺术家数量                         | 20       |
| `includeNotPresent` | 兼容参数；本实现无外部 catalog，可忽略 |          |
| `f`                 |                                        |          |

- 响应示例

```json
{
  "subsonic-response": {
    "artistInfo": {
      "biography": "简介正文",
      "musicBrainzId": "",
      "lastFmUrl": "",
      "smallImageUrl": "/rest/api/v1/artists/634330da-ecac-41fb-97d1-7d53e5863c1f/avatar",
      "mediumImageUrl": "/rest/api/v1/artists/634330da-ecac-41fb-97d1-7d53e5863c1f/avatar",
      "largeImageUrl": "/rest/api/v1/artists/634330da-ecac-41fb-97d1-7d53e5863c1f/avatar",
      "similarArtist": {
        "artist": [
          {
            "id": "other-uuid",
            "name": "其他艺人",
            "coverArt": "ar-other-uuid",
            "albumCount": 2
          }
        ]
      }
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getArtistInfo2

在艺术家详情基础上附加 `similarArtists`、本地统计的 `topSongs`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getArtistInfo2`

- 入参

| 名称                | 描述                                         | 默认值   |
| ------------------- | -------------------------------------------- | -------- |
| （认证）            | 见「通用入参」                               |          |
| `id`                | 艺术家 ID                                    | **必填** |
| `count`             | 上限 500（服务器会截断）；用于 `topSongs` 等 | 50       |
| `includeNotPresent` | 兼容参数；本实现无外部目录，忽略             |          |
| `f`                 |                                              |          |

- 响应示例

```json
{
  "subsonic-response": {
    "artist": {
      "id": "634330da-ecac-41fb-97d1-7d53e5863c1f",
      "name": "周杰伦",
      "album": []
    },
    "similarArtists": { "artist": [] },
    "topSongs": {
      "song": [
        {
          "id": "song-uuid",
          "title": "反方向的钟",
          "duration": 258,
          "coverArt": "so-song-uuid",
          "type": "music"
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getAlbum

返回专辑信息与曲目列表。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getAlbum`

- 入参

| 名称     | 描述           | 默认值   |
| -------- | -------------- | -------- |
| （认证） | 见「通用入参」 |          |
| `id`     | 专辑 ID        | **必填** |
| `f`      |                |          |

- 响应示例

```json
{
  "subsonic-response": {
    "album": {
      "id": "album-uuid",
      "parent": "artist-uuid",
      "name": "Jay",
      "title": "Jay",
      "isDir": true,
      "coverArt": "al-album-uuid",
      "songCount": 10,
      "duration": 2580,
      "artistId": "artist-uuid",
      "artist": "周杰伦",
      "year": 2000,
      "genre": "",
      "song": [
        {
          "id": "song-uuid",
          "title": "反方向的钟",
          "artist": "周杰伦",
          "duration": 258,
          "suffix": "mp3",
          "coverArt": "so-song-uuid"
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getAlbumList

按 `type` 返回专辑列表，根字段为 `albumList`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getAlbumList`

- 入参

| 名称                  | 描述                      | 默认值                                                                                                                                               |
| --------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| （认证）              | 见「通用入参」            |                                                                                                                                                      |
| `type`                | 查询类型                  | **必填**；`random` / `newest` / `highest` / `frequent` / `recent` / `alphabeticalbyname` / `alphabeticalbyartist` / `starred` / `byyear` / `bygenre` |
| `size`                | 返回条数                  | 10                                                                                                                                                   |
| `offset`              | 分页偏移                  |                                                                                                                                                      |
| `musicFolderId`       |                           |                                                                                                                                                      |
| `fromYear` / `toYear` | `type=byyear` 时**必填**  |                                                                                                                                                      |
| `genre`               | `type=bygenre` 时**必填** |                                                                                                                                                      |
| `f`                   |                           |                                                                                                                                                      |

- 响应示例

```json
{
  "subsonic-response": {
    "albumList": {
      "album": [
        {
          "id": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "name": "Jay",
          "artist": "周杰伦",
          "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "coverArt": "al-2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "songCount": 10,
          "duration": 2580,
          "year": 2000,
          "playCount": 42
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getAlbumList2

语义同 `getAlbumList`，根字段为 `albumList2`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getAlbumList2`

- 入参

同「getAlbumList」一节表格。

- 响应示例

```json
{
  "subsonic-response": {
    "albumList2": {
      "album": [
        {
          "id": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "name": "Jay",
          "artist": "周杰伦",
          "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "coverArt": "al-2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "songCount": 10
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getSong

返回单首歌曲元数据。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getSong`

- 入参

| 名称     | 描述           | 默认值   |
| -------- | -------------- | -------- |
| （认证） | 见「通用入参」 |          |
| `id`     | 歌曲 ID        | **必填** |
| `f`      |                |          |

- 响应示例

```json
{
  "subsonic-response": {
    "song": {
      "id": "db7a8fc6-8e74-4800-a8d2-584b17a86e44",
      "parent": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
      "title": "反方向的钟",
      "artist": "周杰伦",
      "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
      "album": "Jay",
      "albumId": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
      "duration": 258,
      "bitRate": 320,
      "suffix": "mp3",
      "contentType": "audio/mpeg",
      "size": 4134309,
      "coverArt": "so-db7a8fc6-8e74-4800-a8d2-584b17a86e44",
      "path": "/music/M5000017K7gL4WYnw2.mp3",
      "playCount": 9,
      "discNumber": 1
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## stream

流媒体播放。成功时为**二进制**，非 JSON；仅在错误时返回 `subsonic-response` 包裹的错误。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/stream`

- 入参

| 名称                    | 描述                                                | 默认值 |
| ----------------------- | --------------------------------------------------- | ------ |
| （认证）                | 见「通用入参」                                      |        |
| `id`                    | **必填**，歌曲 ID                                   |        |
| `format`                | 当目标格式与歌曲原始格式不一致时，默认转码`mp3`格式 |
| `maxBitRate`            | 转码比特率                                          |        |
| `timeOffset`            | 秒；`>0` 时走 ffmpeg 链路（对齐 `transcodeOffset`） |        |
| `estimateContentLength` | `true` 时对 MP3 转码估算长度                        |        |
| `f`                     | 仅错误 JSON 时使用                                  |        |

- 响应说明

正常：`Content-Type` 为源类型或 `audio/mpeg`，本地文件可 Range。失败：与普通 Subsonic JSON/XML 错误体一致。

---

## download

触发浏览器下载同名文件（二进制）。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/download`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `id`     | **必填**       |        |
| `f`      |                |        |

- 响应说明

成功为文件流，`Content-Disposition: attachment`。失败同上。

---

## getCoverArt

按 `so-` / `al-` / `ar-` / `pl-` 前缀 ID 输出封面图片二进制。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/getCoverArt`

- 入参

| 名称     | 描述                               | 默认值     |
| -------- | ---------------------------------- | ---------- |
| （认证） | 见「通用入参」                     |            |
| `id`     | **必填**                           |            |
| `size`   | 最长边像素；不传则服务端默认缩放值 | 服务端默认 |

- 响应说明

成功为图片；可与 `If-None-Match` 配合返回 304。错误时 JSON/XML。

---

## getRandomSongs

随机曲目。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getRandomSongs`

- 入参

| 名称                  | 描述           | 默认值 |
| --------------------- | -------------- | ------ |
| （认证）              | 见「通用入参」 |        |
| `size`                | 数量           |        |
| `genre`               |                |        |
| `fromYear` / `toYear` |                |        |
| `f`                   |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "randomSongs": {
      "song": [
        {
          "id": "song-uuid",
          "title": "反方向的钟",
          "duration": 258,
          "type": "music",
          "isVideo": false
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getGenres

枚举曲库流派及曲目数。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getGenres`

- 入参

| 名称            | 描述           | 默认值 |
| --------------- | -------------- | ------ |
| （认证）        | 见「通用入参」 |        |
| `musicFolderId` |                |        |
| `f`             |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "genres": {
      "genre": [
        { "name": "Pop", "songCount": 120 },
        { "name": "Rock", "songCount": 85 }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getSongsByGenre

按流派分页取歌。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getSongsByGenre`

- 入参

| 名称            | 描述           | 默认值 |
| --------------- | -------------- | ------ |
| （认证）        | 见「通用入参」 |        |
| `genre`         | **必填**       |        |
| `count`         | 返回条数       | 10     |
| `offset`        | 分页偏移       |        |
| `musicFolderId` |                |        |
| `f`             |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "songsByGenre": {
      "song": [
        {
          "id": "song-uuid",
          "title": "反方向的钟",
          "genre": "Pop",
          "duration": 258
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getSimilarSongs

以指定歌曲为参考返回相似曲目。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getSimilarSongs`

- 入参

| 名称     | 描述                  | 默认值 |
| -------- | --------------------- | ------ |
| （认证） | 见「通用入参」        |        |
| `id`     | **必填**，参考曲目 ID |        |
| `count`  | 相似歌曲数量          | 50     |
| `f`      |                       |        |

- 响应示例

```json
{
  "subsonic-response": {
    "similarSongs": {
      "song": [
        {
          "id": "song-uuid-2",
          "title": "夜曲",
          "artist": "周杰伦",
          "duration": 226
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getTopSongs

按**艺术家名称**（库内精确名）返回播放次数较高的曲目。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getTopSongs`

- 入参

| 名称     | 描述                       | 默认值   |
| -------- | -------------------------- | -------- |
| （认证） | 见「通用入参」             |          |
| `artist` | 艺术家名称（须与库内一致） | **必填** |
| `count`  | 返回歌曲条数上限           | 50       |
| `f`      |                            |          |

- 响应示例

```json
{
  "subsonic-response": {
    "topSongs": {
      "song": [
        {
          "id": "song-uuid",
          "title": "青花瓷",
          "artist": "周杰伦",
          "playCount": 19,
          "duration": 239
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getLyrics

经典「按艺人 + 标题」查词。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getLyrics`

- 入参

| 名称               | 描述           | 默认值 |
| ------------------ | -------------- | ------ |
| （认证）           | 见「通用入参」 |        |
| `artist` / `title` | 至少一个有值   |        |
| `f`                |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "lyrics": {
      "artist": "周杰伦",
      "title": "反方向的钟",
      "value": "歌词正文……"
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getLyricsBySongId

按曲目 ID 返回结构化歌词列表。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getLyricsBySongId`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `id`     | **必填**       |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "lyricsList": {
      "structuredLyrics": [
        {
          "displayArtist": "周杰伦",
          "displayTitle": "反方向的钟",
          "lang": "und",
          "line": [{ "value": "歌词一行" }]
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## search2

搜索并得到 `searchResult2`（与 OpenSubsonic 文档一致，`query` 可空以支持离线同步场景）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/search2`

- 入参

| 名称            | 描述                             | 默认值 |
| --------------- | -------------------------------- | ------ |
| （认证）        | 见「通用入参」                   |        |
| `query`         | 关键词；可省略或为空（离线同步） |        |
| `artistCount`   | 返回艺术家条数上限               | 20     |
| `artistOffset`  | 艺术家分页偏移                   | 0      |
| `albumCount`    | 返回专辑条数上限                 | 20     |
| `albumOffset`   | 专辑分页偏移                     | 0      |
| `songCount`     | 返回歌曲条数上限                 | 20     |
| `songOffset`    | 歌曲分页偏移                     | 0      |
| `musicFolderId` |                                  |        |
| `f`             |                                  |        |

- 响应示例

结构与 `search3` 相同，仅顶层键名为 `searchResult2`：

```json
{
  "subsonic-response": {
    "openSubsonic": true,
    "searchResult2": {
      "album": [],
      "artist": [],
      "song": []
    },
    "serverVersion": "0.1.1",
    "status": "ok",
    "type": "MusicFree",
    "version": "1.16.1"
  }
}
```

---

## search3

OpenSubsonic 推荐语义；结果为 `searchResult3`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/search3`

- 入参

同「search2」表格。

- 响应示例（与仓库示例 `test.md` 对齐）

```json
{
  "subsonic-response": {
    "openSubsonic": true,
    "searchResult3": {
      "album": [
        {
          "artist": "周杰伦",
          "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "coverArt": "al-2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "created": "2026-04-03T06:08:10.487104Z",
          "duration": 258,
          "id": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "name": "Jay",
          "songCount": 1,
          "year": 0
        }
      ],
      "artist": [
        {
          "albumCount": 3,
          "coverArt": "ar-634330da-ecac-41fb-97d1-7d53e5863c1f",
          "id": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "name": "周杰伦"
        }
      ],
      "song": [
        {
          "album": "Jay",
          "albumId": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "artist": "周杰伦",
          "artistId": "634330da-ecac-41fb-97d1-7d53e5863c1f",
          "bitRate": 0,
          "contentType": "audio/mpeg",
          "coverArt": "so-db7a8fc6-8e74-4800-a8d2-584b17a86e44",
          "created": "2026-04-03T08:14:31.947065Z",
          "discNumber": 1,
          "duration": 258,
          "genre": "",
          "id": "db7a8fc6-8e74-4800-a8d2-584b17a86e44",
          "isDir": false,
          "isVideo": false,
          "parent": "2abde38e-a4be-4646-be61-58c1faa0a3ab",
          "path": "/Users/chenghaiwen/Documents/code/music-free/backend/music/M5000017K7gL4WYnw2.mp3",
          "playCount": 9,
          "size": 4134309,
          "suffix": "mp3",
          "title": "反方向的钟",
          "track": 0,
          "type": "music",
          "year": 0
        }
      ]
    },
    "serverVersion": "0.1.1",
    "status": "ok",
    "type": "MusicFree",
    "version": "1.16.1"
  }
}
```

---

## getPlaylists

当前用户可见的播放列表（可选按 `username` 过滤，非管理员仅本人）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getPlaylists`

- 入参

| 名称       | 描述           | 默认值 |
| ---------- | -------------- | ------ |
| （认证）   | 见「通用入参」 |        |
| `username` | 目标用户       |        |
| `f`        |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "playlists": {
      "playlist": [
        {
          "id": "pl-uuid",
          "name": "我的列表",
          "owner": "admin",
          "public": false,
          "created": "2026-01-01T00:00:00Z",
          "changed": "2026-04-01T12:00:00Z",
          "songCount": 10,
          "duration": 2400,
          "coverArt": "pl-pl-uuid"
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getPlaylist

单个播放列表及 `entry[]`（未绑定库内歌曲的假项 id 形如 `pls-…`，不可用于 `stream`）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getPlaylist`

- 入参

| 名称     | 描述              | 默认值 |
| -------- | ----------------- | ------ |
| （认证） | 见「通用入参」    |        |
| `id`     | **必填**，列表 ID |        |
| `f`      |                   |        |

- 响应示例

```json
{
  "subsonic-response": {
    "playlist": {
      "id": "pl-uuid",
      "name": "我的列表",
      "owner": "admin",
      "public": false,
      "songCount": 2,
      "duration": 484,
      "entry": [
        {
          "id": "db7a8fc6-8e74-4800-a8d2-584b17a86e44",
          "title": "反方向的钟",
          "duration": 258
        }
      ]
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## star

收藏歌曲（`albumId` / `artistId` 参数可被接受，服务端以曲目 id 为准持久化）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/star`

- 入参

| 名称                          | 描述           | 默认值 |
| ----------------------------- | -------------- | ------ |
| （认证）                      | 见「通用入参」 |        |
| `id` / `albumId` / `artistId` | 均可重复多条   |        |
| `f`                           |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## unstar

取消收藏，参数语义同 `star`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/unstar`

- 入参：同「star」

- 响应示例：同「star」（空载荷成功）

---

## getStarred

返回当前用户的收藏曲目；专辑、艺人数组在本实现中可为空列表。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getStarred`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "starred": {
      "song": [
        {
          "id": "song-uuid",
          "title": "反方向的钟",
          "artist": "周杰伦",
          "starred": "2026-04-01T08:00:00Z"
        }
      ],
      "album": [],
      "artist": []
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getStarred2

与 `getStarred` 相同，根字段为 `starred2`。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/getStarred2`

- 入参：同「getStarred」

- 响应示例（键名替换为 `starred2`）

```json
{
  "subsonic-response": {
    "starred2": {
      "song": [],
      "album": [],
      "artist": []
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## scrobble

写入播放记录；支持批量 `id` 与对齐的 `time`（毫秒时间戳）。

- HTTP方法：`GET`、`POST`

- 请求url：`http://example.com/rest/scrobble`

- 入参

| 名称               | 描述                                                   | 默认值 |
| ------------------ | ------------------------------------------------------ | ------ |
| （认证）           | 见「通用入参」                                         |        |
| `id`               | **必填**，可多条                                       |        |
| `time`             | 与各 `id` 下标对齐的毫秒时间戳；省略则用服务端当前时刻 |        |
| `submission`       | `false` 表示正在播放等非落库语义                       | `true` |
| `c` / `User-Agent` | 作为 client id 回退                                    |        |
| `f`                |                                                        |        |

- 响应示例

```json
{
  "subsonic-response": {
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## startScan

异步触发全库扫描。**仅当**服务启动时已注入文件监视器（`Watcher`）时路由存在。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/startScan`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "scanStatus": { "scanning": true, "message": "Full scan started" },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## getScanStatus

简易状态（实现中 `scanning` 可能恒为 false，并返回曲库总行数）。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/getScanStatus`

- 入参

| 名称     | 描述           | 默认值 |
| -------- | -------------- | ------ |
| （认证） | 见「通用入参」 |        |
| `f`      |                |        |

- 响应示例

```json
{
  "subsonic-response": {
    "scanStatus": {
      "scanning": false,
      "count": 1234,
      "lastUpdate": "2026-05-15T10:00:00Z"
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## incrementalScan

异步增量扫描。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/incrementalScan`

- 入参：同「startScan」

- 响应示例

```json
{
  "subsonic-response": {
    "scanStatus": {
      "scanning": true,
      "message": "Incremental scan started",
      "since": "2026-05-14T10:00:00Z"
    },
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```

---

## cleanupDeleted

异步清理库中已无文件的记录。

- HTTP方法：`GET`

- 请求url：`http://example.com/rest/cleanupDeleted`

- 入参：同「startScan」

- 响应示例

```json
{
  "subsonic-response": {
    "message": "Cleanup started",
    "status": "ok",
    "version": "1.16.1",
    "serverVersion": "0.1.1",
    "openSubsonic": true,
    "type": "MusicFree"
  }
}
```
