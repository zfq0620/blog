const langs = [
  { title: 'English', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
  { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
  { title: '繁體中文', path: '/zh-Hant/', matchPath: /^\/zh-Hant/ },
  { title: '日本語', path: '/ja/', matchPath: /^\/ja/ }
]

docute.init({
  landing: 'landing.html',
  announcement(route) {
    const info = { type: 'success' }
    if (/\/zh-.+$/.test(route.path)) {
      info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">捐赠!</a> 通过 Patron 或者一次性捐赠支持 Docute 的开发。'
    } else {
      info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">Donate!</a> Support Docute development by becoming a patron or one-time donation.'
    }
    return info
  },
  debug: true,
  // home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
  repo: 'honjun/hexo-theme-sakura',
  twitter: '_egoistlily',
  'edit-link': 'https://github.com/egoist/docute/blob/master/docs/',
  tocVisibleDepth: 3,
  nav: {
    default: [
      {
        title: 'Home', path: '/home'
      },
      {
        title: 'Plugins', path: '/plugins'
      },
      {
        title: 'Command-Line Tool', path: '/cli'
      },
      {
        title: 'Changelog', path: '/changelog', source: 'https://raw.githubusercontent.com/egoist/docute/master/CHANGELOG.md'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }
    ],
    'zh-Hans': [
      {
        title: '首页', path: '/zh-Hans/'
      },
      {
        title: '插件', path: '/zh-Hans/plugins'
      },
      {
        title: '命令行工具', path: '/zh-Hans/cli'
      },
      {
        title: '选择语言', type: 'dropdown', items: langs
      }
    ],
    'zh-Hant': [
      {
        title: '首頁', path: '/zh-Hant/'
      },
      {
        title: '插件', path: '/zh-Hant/plugins'
      },
      {
        title: '命令行工具', path: '/zh-Hant/cli'
      },
      {
        title: '選擇語言', type: 'dropdown', items: langs
      }
    ],
    ja: [
      {
        title: 'はじめに', path: '/ja/'
      },
      {
        title: 'プラグイン', path: '/ja/plugins'
      },
      {
        title: 'コマンドラインツール', path: '/ja/cli'
      },
      {
        title: '言語', type: 'dropdown', items: langs
      }
    ]
  },
  plugins: [
    docsearch({
      appId: '442RTGN46F',
      apiKey: '18dcdc1fddadbf6cc5e514f16d53923d',
      indexName: 'hexo-sakura',
      tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
      url: 'sakura.hojun.cn/docs/'
    }),
    evanyou()
  ]
})
