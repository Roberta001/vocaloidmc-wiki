import { defineConfig } from 'vitepress';

export default defineConfig({
  // 网站基本信息
  title: '术力口聚集地 Minecraft 服务器文档',
  description: '欢迎来到术力口聚集地，一个专注于Vocaloid文化的Minecraft服务器。',
  lang: 'zh-CN',

  // 头部 <head> 标签
  head: [
    ['link', { rel: 'icon', href: 'http://p.qlogo.cn/gh/731192205/731192205/0' }] // 请在 docs/public 目录下放置一个 favicon.ico
  ],

  // 主题配置
  themeConfig: {
    // 网站Logo (可选)
    // logo: '/logo.png',

    // 导航栏 (顶部)
    nav: [
      { text: '首页', link: '/' },
      { text: '如何加入服务器', link: '/guide/join' },
      { text: '服务器特色', link: '/features/music-scoreboard' },
      {
        text: '高级功能',
        items: [
          { text: '投稿与称号定制', link: '/advanced/minimessage' },
          { text: '地图画制作', link: '/advanced/mapify' },
          { text: 'MiniMessage 基础语法', link: '/advanced/minimessage-basics' },
        ]
      },
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '新手入门',
          items: [
            { text: '如何加入服务器', link: '/guide/join' },
          ]
        }
      ],
      '/features/': [
        {
          text: '服务器特色',
          items: [
            { text: '点歌功能', link: '/features/music-scoreboard#点歌功能' },
            { text: '计分板开关', link: '/features/music-scoreboard#计分板开关' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '自定义与高级功能',
          items: [
            { text: '投稿与称号定制', link: '/advanced/minimessage' },
            { text: '地图画制作', link: '/advanced/mapify' },
            { text: 'MiniMessage 基础语法', link: '/advanced/minimessage-basics' },
          ]
        }
      ],
    },

    // 搜索功能 (本地搜索)
    search: {
      provider: 'local'
    },
    
    // 其他主题配置
    footer: {
      message: '术力口聚集地 © 2024. 保留所有权利。',
      copyright: '由 Vocaloid 爱好者共同构建。'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  vite:{
    server:{
      allowedHosts:["server.lisfox.top"]
    }
  }
});