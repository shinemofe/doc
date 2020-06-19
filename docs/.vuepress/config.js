module.exports = {
  title: '讯盟IOC小程序开发手册',
  description: '讯盟IOC小程序开发手册',
  base: '/',
  themeConfig: {
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/shinemofe/doc',
    repoLabel: 'Git地址',
    nav: [
      { text: '小程序SDK文档', link: 'https://mp.neitherzhu.now.sh/index.html' }
    ],
    sidebar: [
      '/',
      {
        title: '本地开发',
        collapsable: false,
        children: [
          '/local/base',
          '/local/card-sdk',
          '/local/card',
          '/local/mp'
        ]
      },
      {
        title: '发布',
        collapsable: false,
        children: [
          '/build/base',
          '/build/card-sdk',
          '/build/card',
          '/build/mp'
        ]
      },
      {
        title: '组件更新',
        collapsable: false,
        children: [
          '/update/'
        ]
      },
      {
        title: '教程',
        collapsable: false,
        children: [
          '/tutorial/card',
          '/tutorial/mp',
          '/tutorial/admin',
        ]
      }
    ]
  }
}