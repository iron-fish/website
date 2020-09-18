
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: 'Iron Fish is a new cryptocurrency that takes no shortcuts on privacy.',
  tagline: 'Enable the free flow of assets through easy-to-use, accessible, private cryptocurrency.',
  url: 'https://ironfish.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'iron-fish', // Usually your GitHub org/user name.
  projectName: 'landing_page', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Iron Fish',
      logo: {
        alt: 'Iron Fish logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/whitepaper/1_introduction',
          activeBasePath: 'docs',
          label: 'Whitepaper',
          position: 'right',
        },
        {
          to: 'faq/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'right',
        },
        {
          to: 'careers/',
          activeBasePath: 'docs',
          label: 'Careers',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More info',
          items: [
            {
              label: 'Join us!',
              to: 'careers',
            },
            {
              label: 'Iron Fish specs',
              to: 'docs/whitepaper/1_introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/leanthebean',
            },
          ],
        },
        {
          title: 'Stay in touch',
          items: [
            {
              label: 'Email',
              href: 'mailto:contact@ironfish.network',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iron Fish`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',

          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
  ]
};
