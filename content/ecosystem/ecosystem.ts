export const ECOSYSTEM_TYPES = [
  "Apps",
  "Tools",
  "Exchanges",
  "Wallets",
  "Mining Pools",
  "Mining Software",
] as const;

type Ecosystem = (typeof ECOSYSTEM_TYPES)[number];

export const ECOSYSTEM: Array<{
  type: Ecosystem;
  name: string;
  link: string;
  image: string;
  highlight?: string;
}> = [
  {
    type: "Apps",
    name: "Orescriptions",
    link: "https://www.orescriptions.com",
    image: "/images/ecosystem/orescriptions.png",
    highlight: "/learn/blog/2023-08-22-orya",
  },
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
    name: "H9",
    link: "https://www.h9.com/statistics/ironfish",
    image: "/images/ecosystem/h9.png",
    highlight: "/learn/blog/2022-12-08-Ecosystem-spotlight-Hpool",
  },
  {
    type: "Mining Pools",
    name: "Kryptex",
    link: "https://pool.kryptex.com/iron",
    image: "/images/ecosystem/kryptex.png",
  },
  {
    type: "Mining Pools",
    name: "F2Pool",
    link: "https://www.f2pool.com/",
    image: "/images/ecosystem/f2-pool.png",
  },
  {
    type: "Mining Pools",
    name: "ZK.Work",
    link: "https://zk.work/",
    image: "/images/ecosystem/zk-work.png",
    highlight: "/learn/blog/2023-06-20-zkwork-spotlight",
  },
  {
    type: "Mining Pools",
    name: "HumPool",
    link: "https://humpool.com/",
    image: "/images/ecosystem/humpool.png",
  },
  {
    type: "Mining Pools",
    name: "HeroMiners",
    link: "https://ironfish.herominers.com/",
    image: "/images/ecosystem/herominers.png",
  },
  {
    type: "Mining Pools",
    name: "Mining Pool Stats",
    link: "https://miningpoolstats.stream/ironfish",
    image: "/images/ecosystem/mining-pool-stats.png",
  },
  {
    type: "Mining Pools",
    name: "Ezil",
    link: "https://ezil.me/",
    image: "/images/ecosystem/ezil.png",
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
    name: "GPUMINE",
    link: "https://gpumine.org/",
    image: "/images/ecosystem/gpu-mine.png",
  },
  {
    type: "Mining Pools",
    name: "unMineable",
    link: "https://unmineable.com/",
    image: "/images/ecosystem/unmineable.png",
  },
  {
    type: "Exchanges",
    name: "MEXC",
    link: "https://www.mexc.com/",
    image: "/images/ecosystem/mexc.png",
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
    name: "Bitrue",
    link: "https://www.bitrue.com/",
    image: "/images/ecosystem/bitrue.png",
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
    type: "Exchanges",
    name: "StealthEX",
    link: "https://stealthex.io/?to=iron",
    image: "/images/ecosystem/stealthex.png",
  },
  {
    type: "Wallets",
    name: "FoxWallet",
    link: "https://foxwallet.com/",
    image: "/images/ecosystem/fox-wallet.png",
    highlight: "/learn/blog/2023-06-08-foxwallet-spotlight",
  },
  {
    type: "Wallets",
    name: "Node App",
    link: "/use/node-app",
    image: "/images/ecosystem/node-app.png",
  },
  {
    type: "Wallets",
    name: "Standalone Wallet",
    link: "https://github.com/iron-fish/ironfish-wallet-cli",
    image: "/images/ecosystem/iflabs-standalone-wallet.png",
  },
  {
    type: "Mining Software",
    name: "RigelMiner",
    link: "https://github.com/rigelminer/rigel/releases/",
    image: "/images/ecosystem/rigel-miner.png",
  },
  {
    type: "Mining Software",
    name: "lolMiner",
    link: "https://github.com/Lolliedieb/lolMiner-releases/",
    image: "/images/ecosystem/lol-miner.png",
  },
  {
    type: "Mining Software",
    name: "SRBMiner",
    link: "https://www.srbminer.com/",
    image: "/images/ecosystem/srb-miner.png",
  },
  {
    type: "Mining Software",
    name: "Team Red Miner",
    link: "https://www.teamredminer.com/",
    image: "/images/ecosystem/team-red-miner.png",
  },
  {
    type: "Mining Software",
    name: "ZKWork",
    link: "https://zk.work/",
    image: "/images/ecosystem/zk-work.png",
  },
  {
    type: "Mining Software",
    name: "BZ Miner",
    link: "https://www.bzminer.com/",
    image: "/images/ecosystem/bz-miner.png",
  },
  {
    type: "Mining Software",
    name: "GMiner",
    link: "https://gminer.info/",
    image: "/images/ecosystem/g-miner.png",
  },
  {
    type: "Mining Software",
    name: "H9 Miner",
    link: "https://github.com/h9-dev/ironfish-miner",
    image: "/images/ecosystem/h9.png",
  },
  {
    type: "Mining Software",
    name: "HiveOS",
    link: "https://hiveon.com/os/",
    image: "/images/ecosystem/hive-os.png",
  },
];
