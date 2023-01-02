// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '厕所总部',
  tagline: '高版本 Minecraft 服务器',
  url: 'https://toiletmc.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ToiletMC', // Usually your GitHub org/user name.
  projectName: 'toiletmc.net', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ToiletMC/toiletmc.net/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ToiletMC/toiletmc.net/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '厕所总部',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '备忘录',
          },
          {to: '/blog', label: '博客', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '宣传',
            items: [
              {
                label: 'MCBBS',
                href: 'https://www.mcbbs.net/thread-1385657-1-1.html',
              },
              {
                label: '我的世界中文站',
                href: 'https://www.minecraftzw.com/27108.htmll',
              },
              {
                label: 'MC百科',
                href: 'https://play.mcmod.cn/sv20183361.html',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群聊',
                href: 'https://jq.qq.com/?_wv=1027&k=Uc4Zt2F1',
              },
              {
                label: 'Github',
                href: 'https://github.com/ToiletMC',
              },
            ],
          },
          {
            title: '其它',
            items: [
              {
                label: '澜舟云',
                href: 'https://mclzyun.com/',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 厕所总部，使用 💙 和 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
