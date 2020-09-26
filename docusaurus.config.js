
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: 'Iron Fish - Private, anonynous, and easy to use cryptocurrency',
  tagline: 'Enable the free flow of assets through accessible and private cryptocurrency.',
  url: 'https://ironfish.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'iron-fish', // Usually your GitHub org/user name.
  projectName: 'landing_page', // Usually your repo name.
  themeConfig: {
    image: 'img/ogimage.png',
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/shadesOfPurple'),
    },
    navbar: {
      title: 'Iron Fish',
      logo: {
        alt: 'Iron Fish logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'careers/',
          activeBasePath: 'docs',
          label: 'Careers',
          position: 'right',
        },
        {
          to: 'faq/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'right',
        },
        {
          to: 'docs/whitepaper/1_introduction',
          activeBasePath: 'docs',
          label: 'Whitepaper',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        src: 'img/logo-fish.svg',
      },
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
