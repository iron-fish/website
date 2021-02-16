const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title:
    "Iron Fish - $IRON - Private, anonymous, and easy to use cryptocurrency",
  tagline:
    "Enable the free flow of assets through accessible and private cryptocurrency.",
  url: "https://ironfish.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "iron-fish",
  projectName: "landing_page",
  themeConfig: {
    gtag: {
      trackingID: "G-GJD73W9V3M",
      anonymizeIP: true,
    },
    image: "img/ogimage.png",
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Iron Fish",
      logo: {
        alt: "Iron Fish logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: 'https://explorer.ironfish.network',
        //   label: 'Explorer',
        //   position: 'right',
        // },
        {
          to: "docs/onboarding/iron-fish-tutorial",
          activeBasePath: "docs",
          label: "Get started",
          position: "right",
        },
        {
          to: "about/",
          activeBasePath: "docs",
          label: "About",
          position: "right",
        },
        {
          to: "careers/",
          label: "Careers",
          position: "right",
        },
        {
          to: "faq/",
          activeBasePath: "docs",
          label: "FAQ",
          position: "right",
        },
        {
          to: "docs/whitepaper/1_introduction",
          activeBasePath: "docs",
          label: "Whitepaper",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        src: "img/logo-fish.svg",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',

          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 3600 * 1000, // 1hr cache purge period
          changefreq: "weekly",
          priority: 1,
          trailingSlash: false,
        },
      },
    ],
  ],
};
