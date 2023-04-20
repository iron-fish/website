const CATEGORIES = {
  PRESENTATION: 'Presentations',
  ON_AIR: 'On Air',
  ARTICLE: 'Articles',
  EXPLAINER: 'Explainers',
};

type MediaItem = {
  title: string;
  link: string;
  date: string;
  category: (typeof CATEGORIES)[keyof typeof CATEGORIES];
};

export const MEDIA_ITEMS: Array<MediaItem> = [
   {
    title: `"A16z-backed Iron Fish launches privacy-focused blockchain on mainnet" Iron Fish mainnet feature`,
    link: `https://www.theblock.co/post/227336/a16z-backed-iron-fish-launches-mainnet-blockchain`,
    date: `Apr, 2023`,
    category: CATEGORIES.ARTICLE,
  },
    {
    title: `"Iron Fish Network prepares for ZK Privacy layer 1 mainnet launch" CEO Elena on CryptoCoinShow`,
    link: `https://www.youtube.com/watch?v=uE3KwAdbfpM`,
    date: `Apr, 2023`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `CEO Elena on Finnovators Podcast`,
    link: `https://open.spotify.com/episode/1ldMbhz3mT7CyePNiHbEUH?si=ASHL4gFQToeWtRgqh18z9A&nd=1&utm_content=buffer1f912`,
    date: `Mar, 2023`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `"Do Crackdowns on Crypto Mixers Pose a Threat to Privacy?" CEO Elena adds perspective`,
    link: `https://beincrypto.com/can-crypto-mixer-crackdowns-harm-our-privacy/`,
    date: `Mar, 2023`,
    category: CATEGORIES.ARTICLE,
  },
  {
    title: `The Information named Iron Fish one of 2022's most promising startups`,
    link: `https://www.theinformation.com/the-information-50`,
    date: `Nov, 2022`,
    category: CATEGORIES.ARTICLE,
  },
  {
    title: `"Elena Nadolinski: Privacy for the People," feature produced by Sequoia Capital`,
    link: `https://www.sequoiacap.com/article/elena-nadolinski-spotlight/`,
    date: `Oct, 2022`,
    category: CATEGORIES.ARTICLE,
  },
  {
    title: `CEO Elena at Messari Mainnet`,
    link: `https://www.youtube.com/watch?v=kru4oLjPD-A`,
    date: `Sep, 2022`,
    category: CATEGORIES.PRESENTATION,
  },
  {
    title: `CEO Elena and General Counsel Craig on Around the Coin`,
    link: `https://www.youtube.com/watch?v=Vguia3WAI6Y`,
    date: `Sep, 2022`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `CEO Elena and General Counsel Craig on The Encrypted Economy Podcast`,
    link: `https://www.youtube.com/watch?v=x-3Cct7_SP0`,
    date: `Aug, 2022`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `CEO Elena joins fellow crypto-industry privacy experts to discuss the fallout of Tornado Cash sanctions.`,
    link: `https://www.youtube.com/watch?v=s4RMbrMvC60`,
    date: `Aug, 2022`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `“Why everyone should know about ZKPs,” CEO Elena on EthGlobal.TV`,
    link: `https://www.youtube.com/watch?v=61DuJAQXxjU`,
    date: `May, 2022`,
    category: CATEGORIES.ON_AIR,
  },
  {
    title: `"Privacy in Crypto is a 'Privilege Worth Keeping,'" Decrypt.co`,
    link: `https://decrypt.co/70129/privacy-privilege-worth-crypto-iron-fish`,
    date: `May, 2022`,
    category: CATEGORIES.ARTICLE,
  },
];
