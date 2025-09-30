import { defineConfig } from 'vitepress';

export default defineConfig({
  // 网站基本信息
  title: '术力口聚集地 Minecraft 服务器文档',
  description: '欢迎来到术力口聚集地，一个专注于Vocaloid文化的Minecraft服务器。',
  lang: 'zh-CN',

  // 头部 <head> 标签
  head: [
    ['link', { rel: 'icon', href: 'http://p.qlogo.cn/gh/731192205/731192205/0' }]
  ],

  // 主题配置
  themeConfig: {
    // 网站Logo (可选)
    // logo: '/logo.png',

    // 导航栏 (顶部)
    nav: [
      { text: '首页', link: '/' },
      { text: '如何加入', link: '/guide/join' },
      {
        text: '服务器 Wiki',
        items: [
          { text: '怪物 Wiki', link: '/wiki/mobs/oushi' }, // 修改链接到第一个怪物
          { text: 'NPC Wiki', link: '/wiki/npcs/soul-forger' },
          { text: 'Boss Wiki', link: '/wiki/bosses/dead-master' },
          { text: '物品 Wiki', link: '/wiki/items/diamond-sword' }
        ]
      },
      { text: '小游戏介绍', link: '/minigames/bedwars' },
      { text: '指令帮助', link: '/commands/basic' },
      { text: '特别玩法', link: '/gameplay/custom-enchanting' }
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
      // 为新增的 Wiki 设计侧边栏
      '/wiki/': [
        {
          text: '怪物 Wiki',
          // collapsible: true, // 如果条目太多，可以开启折叠
          // collapsed: false,
          items: [
            // 在这里列出你的所有怪物
            { text: '积木人偶 (OuShi)', link: '/wiki/mobs/oushi' },
            { text: '筒尸 (TongShi)', link: '/wiki/mobs/tongshi' },
            { text: '儒尸 (RuShi)', link: '/wiki/mobs/rushi' },
            { text: '舞蹈尸骸 (DancingSkeleton)', link: '/wiki/mobs/dancingskeleton' },
            { text: '姬蛛 (PrincessSpider)', link: '/wiki/mobs/princessspider' },
            { text: '恶意程序 (Malware)', link: '/wiki/mobs/malware' },
            { text: '海绵人 (SpongeMan)', link: '/wiki/mobs/spongeman' },
            { text: '悲しみの溺者 (SorrowDrowned)', link: '/wiki/mobs/sorrowdrowned' },
            { text: '机械海豚 (AutoMatonDolphin)', link: '/wiki/mobs/automatondolphin' },
            { text: '尸潮 (Hordes)', link: '/wiki/mobs/hordes' },
          ]
        },
        {
          text: 'NPC Wiki',
          items: [
            // 更新为新的NPC链接
            { text: '灵魂锻造者', link: '/wiki/npcs/soul-forger' },
            { text: '晶体锻造者', link: '/wiki/npcs/crystal-forger' },
            { text: '拾荒者', link: '/wiki/npcs/waste-picker' },
            { text: '虚弱的骷髅', link: '/wiki/npcs/weak-skeleton' },
            { text: '医生', link: '/wiki/npcs/doctor' },
          ]
        },
        {
          text: 'Boss Wiki',
          items: [
            { text: '死亡主宰 (Dead Master)', link: '/wiki/bosses/dead-master' },
          ]
        },
        {
          text: '物品 Wiki',
          items: [
            { text: '旋风之剑 (Breeze Sword)', link: '/wiki/items/breeze-sword' },
            { text: '风暴战锤 (Storm Hammer)', link: '/wiki/items/storm-hammer' },
          ]
        }
      ],
      // 小游戏侧边栏
      '/minigames/': [
        {
          text: '服务器小游戏',
          items: [
            { text: '起床战争', link: '/minigames/bedwars' },
            { text: 'TNT 跑酷', link: '/minigames/tnt-run' },
          ]
        }
      ],
      // 指令侧边栏
      '/commands/': [
        {
          text: '指令帮助',
          items: [
            { text: '基础指令', link: '/commands/basic' },
            { text: '领地指令', link: '/commands/residence' },
            { text: '经济指令', link: '/commands/economy' },
          ]
        }
      ],
      // 特别玩法侧边栏
      '/gameplay/': [
        {
          text: '特别玩法',
          items: [
            { text: '自定义附魔', link: '/gameplay/custom-enchanting' },
            { text: '公会系统', link: '/gameplay/guilds' },
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