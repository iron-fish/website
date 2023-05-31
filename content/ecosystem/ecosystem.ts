type Ecosystem = "Exchanges" | "Integrators" | "Mining Pools";

export const ECOSYSTEM_TYPES: Array<Ecosystem> = [
  "Exchanges",
  "Integrators",
  "Mining Pools",
];

export const ECOSYSTEM: Array<{
  type: Ecosystem;
  name: string;
  link: string;
  image: string;
}> = [
  {
    type: "Exchanges",
    name: "Kucoin",
    link: "https://www.kucoin.com/",
    image: "/images/ecosystem/kucoin.png",
  },
  {
    type: "Exchanges",
    name: "Gate",
    link: "https://www.gate.io/",
    image: "/images/ecosystem/gate.png",
  },
  {
    type: "Exchanges",
    name: "Bitmart",
    link: "https://www.bitmart.com/",
    image: "/images/ecosystem/bitmart.png",
  },
  {
    type: "Integrators",
    name: "Fox Wallet",
    link: "https://foxwallet.com/",
    image: "/images/ecosystem/fox-wallet.png",
  },
  {
    type: "Integrators",
    name: "Flux",
    link: "https://runonflux.io/",
    image: "/images/ecosystem/flux.png",
  },
  {
    type: "Mining Pools",
    name: "Herominers",
    link: "https://herominers.com/",
    image: "/images/ecosystem/herominers.png",
  },
  {
    type: "Mining Pools",
    name: "Kryptex",
    link: "https://www.kryptex.com/",
    image: "/images/ecosystem/kryptex.png",
  },
  {
    type: "Mining Pools",
    name: "Flexpool",
    link: "https://www.flexpool.io/",
    image: "/images/ecosystem/flexpool.png",
  },
];
