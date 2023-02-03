const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: "Iron Fish - Private, anonymous, and easy to use cryptocurrency",
  tagline:
    "Enable the free flow of assets through accessible and private cryptocurrency.",
  url: "https://ironfish.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "iron-fish",
  projectName: "landing_page",
  themeConfig: {
    metadatas: [{ name: "twitter:card", content: "summary" }],
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
          to: "docs/whitepaper/1_introduction",
          activeBasePath: "docs",
          label: "Whitepaper",
          position: "right",
        },
        {
          to: "about/",
          activeBasePath: "docs",
          label: "About Us",
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
        { to: "blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      logo: {
        src: "img/logo-fish.svg",
      },
    },
  },

  plugins: ["./src/plugins/tailwind"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: 'https://github.com/iron-fish/website/edit/master/',

          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          // editUrl: "https://github.com/iron-fish/website/edit/master/",
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
