export const ECOSYSTEM_TYPES = [
  "Tools",
  "Exchanges",
  "Wallets",
  "Mining Pools",
] as const;

type Ecosystem = (typeof ECOSYSTEM_TYPES)[number];

export const ECOSYSTEM: Array<{
  type: Ecosystem;
  name: string;
  link: string;
  image: string;
}> = [
  {
    type: "Tools",
    name: "Oreoscan",
    link: "https://www.oreoscan.info/en",
    image: "/images/ecosystem/oreoscan.png",
  },
  {
    type: "Tools",
    name: "Iron Fish Block Explorer",
    link: "https://explorer.ironfish.network/",
    image: "/images/ecosystem/block-explorer.png",
  },
  {
    type: "Tools",
    name: "Network Stats Page",
    link: "https://stats.ironfish.network/",
    image: "/images/ecosystem/if-network-stats.png",
  },
  {
    type: "Tools",
    name: "Flux",
    link: "https://home.runonflux.io/",
    image: "/images/ecosystem/flux.png",
  },
  {
    type: "Mining Pools",
    name: "Kryptex",
    link: "https://pool.kryptex.com/iron",
    image: "/images/ecosystem/kryptex.png",
  },
  {
    type: "Mining Pools",
    name: "Hpool",
    link: "https://www.hpool.in/statistics/ironfish",
    image: "/images/ecosystem/hpool.png",
  },
  {
    type: "Mining Pools",
    name: "ZkWork",
    link: "https://zk.work/",
    image: "/images/ecosystem/zk-work.png",
  },
  {
    type: "Mining Pools",
    name: "Flexpool",
    link: "https://flexpool.io/",
    image: "/images/ecosystem/flexpool.png",
  },
  {
    type: "Mining Pools",
    name: "Ezil",
    link: "https://ezil.me/",
    image: "/images/ecosystem/ezil.png",
  },
  {
    type: "Mining Pools",
    name: "Mining Pool Stats",
    link: "https://miningpoolstats.stream/ironfish",
    image: "/images/ecosystem/mining-pool-stats.png",
  },
  {
    type: "Mining Pools",
    name: "F2Pool",
    link: "https://www.f2pool.com/",
    image: "/images/ecosystem/f2-pool.png",
  },
  {
    type: "Mining Pools",
    name: "TW Pool",
    link: "https://tw-pool.com/",
    image: "/images/ecosystem/tw-pool.png",
  },
  {
    type: "Mining Pools",
    name: "HashPool",
    link: "https://hashpool.com/",
    image: "/images/ecosystem/hashpool.png",
  },
  {
    type: "Mining Pools",
    name: "GPU Mine",
    link: "https://gpumine.org/",
    image: "/images/ecosystem/gpu-mine.png",
  },
  {
    type: "Mining Pools",
    name: "UnMineable",
    link: "https://unmineable.com/",
    image: "/images/ecosystem/unmineable.png",
  },
  {
    type: "Exchanges",
    name: "KuCoin",
    link: "https://www.kucoin.com/",
    image: "/images/ecosystem/kucoin.png",
  },
  {
    type: "Exchanges",
    name: "Gate.io",
    link: "https://www.gate.io/",
    image: "/images/ecosystem/gate.png",
  },
  {
    type: "Exchanges",
    name: "BitMart",
    link: "https://www.bitmart.com/",
    image: "/images/ecosystem/bitmart.png",
  },
  {
    type: "Exchanges",
    name: "SafeTrade",
    link: "https://safe.trade/",
    image: "/images/ecosystem/safe-trade.png",
  },
  {
    type: "Exchanges",
    name: "BingX",
    link: "https://bingx.com/en-us/",
    image: "/images/ecosystem/bingx.png",
  },
  {
    type: "Exchanges",
    name: "CoinEx",
    link: "https://www.coinex.com/",
    image: "/images/ecosystem/coinex.png",
  },
  {
    type: "Exchanges",
    name: "TradeOgre",
    link: "https://tradeogre.com/exchange/BTC-IRON",
    image: "/images/ecosystem/trade-ogre.png",
  },
  {
    type: "Wallets",
    name: "Fox Wallet",
    link: "https://foxwallet.com/",
    image: "/images/ecosystem/fox-wallet.png",
  },
  {
    type: "Wallets",
    name: "Node App (coming soon)",
    link: "/use/node-app",
    image: "/images/ecosystem/node-app.png",
  },
];
