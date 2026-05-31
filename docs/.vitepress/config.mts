import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "MusicFree",
    base: "/music-free-site/",
    description: "MusicFree 文档：音乐管理、插件扩展与 OpenSubsonic API",
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ],
    vite: {
      resolve: {
        alias: [
          { find: /^dayjs$/, replacement: "dayjs/esm/index.js" },
          { find: /^dayjs\/(.+)\.js$/, replacement: "dayjs/esm/$1.js" },
          { find: "mermaid", replacement: "mermaid/dist/mermaid.esm.mjs" },
        ],
      },
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      siteTitle: false,
      nav: [
        { text: "特性", link: "/feature" },
        { text: "扩展", link: "/plugin" },
        { text: "发布日志", link: "/changelog" },
      ],

      sidebar: [
        {
          text: "MusicFree 文档",
          items: [
            { text: "功能特性", link: "/feature" },
            {
              text: "功能模块",
              items: [
                { text: "音乐", link: "/music" },
                { text: "专辑", link: "/album" },
                { text: "艺术家", link: "/artist" },
                { text: "歌单", link: "/playlist" },
                { text: "用户", link: "/user" },
                { text: "许愿", link: "/wish" },
              ],
            },
            {
              text: "扩展",
              items: [
                { text: "插件介绍", link: "/plugin" },
                { text: "注册表", link: "/plugin-registry" },
                { text: "插件开发", link: "/plugin-development" },
                { text: "插件编排", link: "/plugin-orchestration" },
                { text: "第三方插件合集", link: "/plugin-collection" },
              ],
            },
            {
              text: "API 兼容",
              items: [
                {
                  text: "OpenSubsonic",
                  link: "/opensubsonic-api",
                },
                { text: "Navidrome", link: "/navidrome-api" },
              ],
            },
            {
              text: "发布日志",
              link: "/changelog",
            },
            {
              text: "反馈",
              link: "/feedback",
            },
          ],
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/ansgoo/music-free-site" },
      ],

      search: {
        provider: "local",
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: "搜索",
                  buttonAriaLabel: "搜索文档",
                },
                modal: {
                  displayDetails: "显示详细列表",
                  resetButtonTitle: "清除搜索",
                  backButtonTitle: "关闭搜索",
                  noResultsText: "未找到相关结果",
                  footer: {
                    selectText: "选择",
                    selectKeyAriaLabel: "回车",
                    navigateText: "切换",
                    navigateUpKeyAriaLabel: "上箭头",
                    navigateDownKeyAriaLabel: "下箭头",
                    closeText: "关闭",
                    closeKeyAriaLabel: "Esc",
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
);
