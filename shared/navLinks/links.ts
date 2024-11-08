import { messages } from "./messages";

export const links = [
  {
    label: messages.use,
    color: "orange",
    items: [
      {
        title: messages.nodeAppTitle,
        description: messages.nodeAppDescription,
        href: "/use/node-app",
        image: "/images/nav/use-key-fish.svg",
      },
      {
        title: messages.cliTitle,
        description: messages.cliDescription,
        href: "/developers/documentation/install-npm",
        image: "/images/nav/use-submarine.svg",
      },
      {
        title: messages.mineIronTitle,
        description: messages.mineIronDescription,
        href: "/use/get-started/mining",
        image: "/images/nav/use-strangely-normal-looking-fish.svg",
      },
      {
        title: messages.blockExplorerTitle,
        description: messages.blockExplorerDescription,
        href: "https://explorer.ironfish.network/",
        image: "/images/nav/use-block.svg",
      },
      {
        title: messages.ecosystemTitle,
        description: messages.ecosystemDescription,
        href: "/use/ecosystem",
        image: "/images/nav/use-ecosystem.svg",
      },
    ],
  },
  {
    label: messages.learn,
    color: "blue",
    items: [
      {
        title: messages.getStartedTitle,
        description: messages.getStartedDescription,
        href: "/use/get-started",
        image: "/images/nav/learn-book-fish.svg",
      },
      {
        title: messages.faqTitle,
        description: messages.faqDescription,
        href: "/learn/faq",
        image: "/images/nav/learn-mag-glass.svg",
      },
      {
        title: messages.whitepaperTitle,
        description: messages.whitepaperDescription,
        href: "/learn/whitepaper",
        image: "/images/nav/learn-whitepaper.svg",
      },
      {
        title: messages.tokenomicsTitle,
        description: messages.tokenomicsDescription,
        href: "/learn/tokenomics",
        image: "/images/nav/learn-tokenomics.svg",
      },
    ],
  },
  {
    label: messages.community,
    color: "green",
    items: [
      {
        title: messages.foundationTitle,
        description: messages.foundationDescription,
        href: "/community/foundation",
        image: "/images/nav/community-foundation.svg",
      },
      {
        title: messages.governanceTitle,
        description: messages.governanceDescription,
        href: "/community/governance",
        image: "/images/nav/community-governance.svg",
      },
      {
        title: messages.grantsTitle,
        description: messages.grantsDescription,
        href: "/community/grants",
        image: "/images/nav/community-grants.svg",
      },
      {
        title: messages.communityTitle,
        description: messages.communityDescription,
        href: "/community/our-community",
        image: "/images/nav/community-earth.svg",
      },
    ],
  },
  {
    label: messages.developers,
    color: "yellow",
    items: [
      {
        title: messages.documentationTitle,
        description: messages.documentationDescription,
        href: "/developers/documentation",
        image: "/images/nav/dev-blowfish.svg",
      },
      {
        title: messages.githubTitle,
        description: messages.githubDescription,
        href: "https://github.com/iron-fish/ironfish",
        image: "/images/nav/dev-tv-fish.svg",
      },
    ],
  },
  {
    label: messages.blogTitle,
    href: "/learn/blog",
  },
] as const;
