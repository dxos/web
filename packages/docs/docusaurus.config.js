// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// https://docusaurus.io/docs/api/docusaurus-config

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DXOS',
  tagline: 'The Decentralized Operating System',
  url: 'https://dxos.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dxos',
  projectName: 'DXOS',
  // TODO(zarco): Try fixing webpack to use DXOS Stack.
  plugins: [
    './plugins/webpack-plugin.js'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dxos/web/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/dxos/web/edit/main/website/blog/',
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
        logo: {
          alt: 'DXOS',
          src: 'img/dxos-horizontal.svg',
          srcDark: 'img/dxos-horizontal-white.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/dxos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/home',
              },
              {
                label: 'Reference',
                to: '/docs/ref-sdk/client',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6kzjEMTd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dxos_org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dxos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DXOS.org`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;