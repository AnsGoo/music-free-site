# MusicFree

曾几何时你为了听音乐无损音乐要搭建各种各样服务，

- 「音乐媒体管理」用[Navidrome](https://www.navidrome.org/),
- 「音乐标刮削」用[MusicTagWeb](https://xiers-organization.gitbook.io/music-tag-web-v2),
- 「音乐搜索和下载」用[MusicDL](https://musicdl.readthedocs.io/en/latest/),

有没有更好的,有没有一个All in all的方式，**让听歌这件事变得简单一点**。

## 扩展性

我们提供了音乐全生命周期的管理功能

我们不仅支持基本音乐、专辑、艺术的管理功能，还支持各种各样的扩展功能，例如：

- 从音乐的`在线搜索`到`下载`，便捷的音乐获取功能
- 从音乐的`去重`到各种格式的`播放`，全功能的音乐管理，
- 从音乐的`封面`到`歌词`的刮削，我们提供完整的歌曲信息匹配能力，
- 我们支持各种平台的`歌单同步`功能，
- 我们支持艺术家、专辑全功能的信息`匹配`与`刮削`，自动帮你补全艺术家的头像、简介

关键是这里所有的扩展功能我们都是通过`插件实现`，因此你可以使用各种各样的插件实现自己想要的功能

## 兼容性

我们支持完整`OpenSubSonic` 和部分`Navidrome`风格的音乐API，因此不管是你在使用的是什么播放器

- [音流](https://music.aqzscn.cn/)，
- [云净听]()
- [Supersonic](https://github.com/dweymouth/supersonic)
- ...

只要支持OpenSubSonic协议的我们都支持

## 安装

```yaml
services:
  music-free:
    image: ansgoo/music-free:latest
    container_name: music-free
    restart: unless-stopped
    ports:
      - "14533 :4533"
    volumes:
      - /vol1/docker/muisc-free:/app/data
      - /vol1/music:/app/music
```
