/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // {type: 'autVogenerated', dirName: '.'},
    {
      type: 'doc',
      id: 'home',
      label: 'Introduction'
    },
    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture'
    },
    {
      type: 'category',
      label: 'DXOS',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'SDK',
          href: '/sdk'
        },
        {
          type: 'link',
          label: 'CLI',
          href: '/cli'
        },
        {
          type: 'link',
          label: 'KUBE',
          href: '/kube'
        },
        {
          type: 'link',
          label: 'DXNS',
          href: '/dxns'
        },
        {
          type: 'link',
          label: 'Braneframe',
          href: '/frames'
        }
      ]
    },
    {
      type: 'category',
      label: 'Tutorial',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'tutorial/getting-started',
        },
        {
          type: 'doc',
          id: 'tutorial/overview'
        },
        {
          type: 'doc',
          id: 'tutorial/dev-environment'
        },
        {
          type: 'doc',
          id: 'tutorial/account-setup'
        },
        {
          type: 'doc',
          id: 'tutorial/create-frame'
        },
        {
          type: 'doc',
          id: 'tutorial/deploy-frame'
        }
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
