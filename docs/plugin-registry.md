# 插件注册表

插件注册表是插件的信息合集，你可以通过订阅多个插件注册表，来给MusicFree 安装插件

## 一、插件注册表

插件注册表是插件的信息合集的远程链接地址，你可以通过订阅多个插件注册表，来给MusicFree插件商店扩充插件数量，同时你可以将开发的插件提交到某个注册表中，分享给其他人

项目内置的注册表地址为： [https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/artifact/registry.json](https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/artifact/registry.json),你也可以订阅其他用户发布的组册表来扩充插件商店的插件数量

**注意**：当多个注册表注册了相同name和vesion的插件时，按照插件订阅的先后顺序，后面的覆盖前面的，相同name的插件只能安装一次

## 二、 注册表数据协议说明

```json
[
  {
    "name": "mf-plugin-lastfm",
    "title": "Last.fm (Python)",
    "version": "0.2.1",
    "description": "Last.fm scraper: track metadata, album/artist info, covers",
    "author": "ansgoo",
    "license": "MIT",
    "repository": "https://github.com/ansgoo/music-free-plugin/mf-plugin-lastfm",
    "features": ["ScraperSong", "GetCover", "GetAlbumInfo", "GetArtistInfo"],
    "download_url": "https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/artifact/mf-plugin-lastfm.zip",
    "icon": "https://cdn.jsdelivr.net/gh/ansgoo/music-free-plugin@main/plugin/mf-plugin-lastfm/icon.svg"
  }
]
```

- 字段说明

| 字段               | 必填 | 说明                                                                                   |
| ------------------ | ---- | -------------------------------------------------------------------------------------- |
| `name`             | 是   | 插件唯一 ID，须满足 `^[a-z][a-z0-9_-]{1,63}$`，且与 ZIP 内目录名、`manifest.name` 一致 |
| `title`            | 是   | 展示名                                                                                 |
| `version`          | 是   | 版本字符串，非空且 ≤ 64 字符                                                           |
| `download_url`     | 是   | **http(s)** ZIP 地址                                                                   |
| `description`      | 否   | 说明                                                                                   |
| `author`           | 否   | 作者                                                                                   |
| `license`          | 否   | 许可证                                                                                 |
| `repository`       | 否   | 源码仓库 URL                                                                           |
| `features`         | 否   | 能力标签（展示用，如 `ScraperSong`、`RemoteSearch`）                                   |
| `icon`             | 否   | HTTPS 图片 URL 或 base64（前端展示）                                                   |
| `id`               | 否   | **已废弃**：旧版用 `id` 作唯一键；解析时会迁移为 `name`                                |
| `sourceRegistryId` | 否   | 合并后由服务端填入，标识来源订阅                                                       |
