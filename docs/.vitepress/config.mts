import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "MusicFree",
    base: "/music-free-site/",
    description: "MusicFree Site",
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
      nav: [
        { text: "特性", link: "/feature" },
        { text: "扩展", link: "/plugin" },
      ],

      sidebar: [
        {
          text: "关于MusicFree",
          items: [
            { text: "特性", link: "/feature" },
            {
              text: "扩展",
              items: [
                { text: "插件", link: "/plugin" },
                { text: "注册表", link: "/plugin-registry" },
                { text: "插件开发", link: "/plugin-development" },
              ],
            },
            {
              text: "API兼容列表",
              items: [
                {
                  text: "OpenSubsonic",
                  link: "/opensubsonic-api",
                },
                { text: "Navidrome", link: "/navidrome-api" },
              ],
            },
            { text: "插件开发", link: "/plugin-development" },
          ],
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/ansgoo/music-free-site" },
      ],
    },
  }),
);
