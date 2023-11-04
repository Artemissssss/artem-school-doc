// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Навчальний бот',
  tagline: 'Перший телеграм бот для полешгення комунікації під час навчання',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://school-doc.artemissssss.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'artemissssss', // Usually your GitHub org/user name.
  projectName: 'school-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 1,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      metadata: [
        {name: 'google-site-verification', content: 'brum5cwyDaTYUy7BhXNtDjxpjTHTZWpBjdLHa4o8AiQ'},
        {name: 'msvalidate.01', content: 'CE38067298A367EC1502330F10F0774E'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Навчальний бот',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Туторіал',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Сторінки',
            items: [
              {
                label: 'Туторіал',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Посилання',
            items: [
              {
                label: 'Телеграм бот',
                href: 'https://t.me/artemisSchool_bot',
              },
              {
                label: 'Телеграм володаря',
                href: 'https://t.me/honkai_star_rails',
              },
              {
                label: 'API',
                href: 'https://school-api.artemissssss.de',
              },
            ],
          },
          {
            title: 'Соціальні мережі',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Artemissssss',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Навчальний бот`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
