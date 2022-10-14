import React from "react";
import { useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./roadmap.module.css";
import pkg from "../../package.json";
import { shuffle } from "shuffle-seed";

import Bitcoin from "../theme/RoadmapPage/icon-bitcoin";
import Uniswap from "../theme/RoadmapPage/icon-uniswap";
import Dai from "../theme/RoadmapPage/icon-dai";
import Ethereum from "../theme/RoadmapPage/icon-ethereum";
import Aave from "../theme/RoadmapPage/icon-aave";
import Solana from "../theme/RoadmapPage/icon-solana";
import Compound from "../theme/RoadmapPage/icon-compound";
import Filecoin from "../theme/RoadmapPage/icon-filecoin";
import Fei from "../theme/RoadmapPage/icon-fei";
import Polygon from "../theme/RoadmapPage/icon-polygon";
import Avalanche from "../theme/RoadmapPage/icon-avalanche";

const ASSETS = [
  ["uniswap", Uniswap],
  ["dai", Dai],
  ["ethereum", Ethereum],
  ["bitcoin", Bitcoin],
  ["aave", Aave],
  ["solana", Solana],
  ["compound", Compound],
  ["filecoin", Filecoin],
  ["fei", Fei],
  ["polygon", Polygon],
  ["avalanche", Avalanche],
];

const range = (x) => {
  const arr = [];
  while (x > 0) {
    arr.push(--x);
  }
  return arr;
};

const patch = (given, source) => {
  const copy = shuffle(given, pkg.version);
  return source.map((x) => copy[x % copy.length]);
};

const Asset = ({ update, asset: X, name, flipped, index, data }) => {
  const [$flipped, $setFlipped] = useState(flipped);
  return (
    <div
      id={name + "-" + index}
      className={clsx(
        styles.asset,
        { [styles.flipped]: $flipped },
        styles[name]
      )}
      onMouseEnter={() => {
        $setFlipped(!$flipped);
      }}
    >
      <div
        className={clsx(styles.assetFace, styles.front, styles[name], {
          [styles.flipped]: !$flipped,
        })}
      >
        <X key={name + "-" + index + "-asset"} />
      </div>
      <div
        className={clsx(styles.assetFace, styles.back, styles.hexfish, {
          [styles.flipped]: $flipped,
        })}
      >
        <img src={`img/roadmap/asset-hexfish.png`} />
      </div>
    </div>
  );
};

const AssetConnection = ({ size = 16 }) => {
  const patchedAssets = patch(ASSETS, range(size));
  const [$data, $setData] = useState({});
  const $update = (key, state) => {
    if ($data[key] && $data[key] === state) return;
    const newData = Object.assign({}, $data, { [key]: state });
    debugger;
    $setData(newData);
  };
  return (
    <div className={clsx(styles.assets)}>
      <div className={styles.assetsWrapper}>
        {patchedAssets.map(([x, raw], i) => {
          const flipped = !!Math.round(Math.random() * 1);
          return (
            <Asset
              asset={raw}
              key={x + "-" + i}
              flipped={flipped}
              update={$update}
              name={x}
              index={i}
              data={$data}
            />
          );
        })}
      </div>
    </div>
  );
};

const Interlude = ({ src, wrapper = "", alt, className, children }) => (
  <div className={clsx(styles.interlude, wrapper)}>
    <img src={src} alt={alt} />
    {children ? (
      <div className={className}>{children}</div>
    ) : (
      <div className={className} />
    )}
  </div>
);

const data = {
  intro: (
    <div className={styles.roadmap}>
      <div className={clsx(styles.halfbox, styles.halfboxOne)}>
        <div className={styles.halfboxOneWrapper}>
          <h1 className={styles.cta}>
            Roadmap to Universal Privacy Layer for Crypto
          </h1>
          <p className={styles.mainIntro}>
            We’re building Iron Fish to be the universal privacy layer for
            crypto—a true SSL layer for blockchains. We believe the first step
            towards that goal is to build a solid foundation of shipping an
            easy-to-use, privacy-first layer 1 blockchain.
          </p>
          <p className={styles.mainIntro}>
            The{" "}
            <a href="https://airtable.com/shrNxbu0YxXL0G1qt">
              roadmap
            </a>{" "}
            and <a href="https://airtable.com/shrcTNHeo0I12OR1U">
              project definitions
            </a>{" "} are living documents, and they *will* change as scope gets more
            defined.
          </p>
        </div>
      </div>
      <div className={clsx(styles.halfbox, styles.halfboxTwo)}>
        <img src="/img/roadmap/infinite-hexfish.png" alt="Infinite hexfish" />
        <div className={styles.boxFiller} />
      </div>
    </div>
  ),
  phases: {
    phase0: {
      date: "April 6, 2021",
      features: [
        {
          icon: "core-node",
          title: "Core Node Features",
          itemList: [
            "Proof of Work consensus",
            "Stable syncing",
            "Rich CLI for node and wallet support",
            "Built in miner for faster onboarding",
          ],
        },
        {
          icon: "cash",
          title: "Private Transactions",
          description:
            "The Iron Fish node uses zero-knowledge proofs to provide the strongest privacy guarantees available on every transaction.",
        },
        {
          icon: "arrow-back-and-forth",
          title: "Frictionless Network Layer",
          description:
            "The Iron Fish network layer uses WebRTC with Websockets for a user-friendly and frictionless network participation.",
        },
      ],
    },
    phase1: {
      features: [
        {
          icon: "bank",
          title: "Incentivized Testnet",
          description: `The incentivized testnet will track member participation in leaderboard points and help us stabilize the node. Points will lead to future mainnet Iron Fish coins for eligible participants.`,
          ctaLink: "https://testnet.ironfish.network/about",
          ctaText: "Curious? Learn more",
        },
      ],
    },
    interlude2: {
      image: (
        <Interlude
          wrapper={styles.leaderboard}
          src={`/img/roadmap/leaderboard.png`}
          alt="Testnet Leaderboard"
          className={styles.interludeTestnetLeaderboard}
        >
          <div className={styles.interludeBall} />
        </Interlude>
      ),
    },
    interlude3alt: {
      image: (
        <Interlude
          wrapper={styles.walletAlt}
          src={`/img/roadmap/wallet.png`}
          alt="Iron Fish Wallet"
          className={styles.interludeWallet}
        >
          <div className={styles.interludeBall2} />
        </Interlude>
      ),
    },
    phase2: {
      features: [
        {
          icon: "foursquare",
          title: "Node Dashboard & Desktop Wallet",
          description:
            "A core belief at Iron Fish is that privacy and ease-of-use are not in opposition. We'll be working hard on releasing an intuitive and beautiful Node Dashboard and Desktop Wallet. ",
          ctaText:
            "Want a preview? Join our design channel on Discord",
          ctaLink: "https://discord.gg/6kQdGZdm7S",
        },
      ],
    },
    interlude3: {
      image: (
        <Interlude
          wrapper={styles.wallet}
          src={`/img/roadmap/wallet.png`}
          alt="Iron Fish Wallet"
          className={styles.interludeWallet}
        >
          <div className={styles.interludeBall2} />
        </Interlude>
      ),
    },
    phase3: {
      subtitle: "Multi-Asset & Bridge Support",
      description:
        "At Iron Fish we have one goal: enable private cryptocurrency transactions. We’ll work on enabling multi-asset support and bridges between Iron Fish and other chains, letting users transfer assets from other blockchains to Iron Fish for fully private transactions on any asset. We’re building Iron Fish to be the universal privacy layer for crypto—a true SSL layer for blockchains.",
      features: [],
      children: <AssetConnection />,
    },
    mainnet: {
      subtitle: "Final Phase—Iron Fish Mainnet!",
      children: (
        <div className={styles.mainblock}>
          <p>
            Iron Fish is a new Layer-1 Proof of Work blockchain that uses
            zero-knowledge proofs to provide the strongest privacy guarantees
            available on every transaction, even for assets on other chains.
          </p>
          <img
            className={styles.fishweb}
            src={`/img/roadmap/celebration.gif`}
            alt="Mainnet"
          />
          <p>
            Want to be a part of building the universal privacy layer for all
            crypto assets? Click&nbsp;
            <a href="https://ironfish.network/docs/onboarding/iron-fish-tutorial">
              here
            </a>
            &nbsp;to get started with running an Iron Fish node, check out
            our&nbsp;
            <a href="https://github.com/iron-fish/ironfish">GitHub</a> for open
            source contributions, join our&nbsp;
            <a href="https://discord.gg/EkQkEcm8DH">Discord</a> to ask questions
            or give feedback, or check out our&nbsp;
            <a href="https://angel.co/company/iron-fish">Careers</a> to join the
            core Iron Fish team!
          </p>
        </div>
      ),
    },
  },
};

const Feature = ({
  icon,
  title,
  description,
  itemList = [],
  ctaLink,
  ctaText,
}) => (
  <div className={styles.detail}>
    <div className={styles.detailIcon}>
      <img src={`/img/roadmap/${icon}.svg`} alt={icon} />
    </div>
    <h3 className={styles.detailTitle}>{title}</h3>
    <p className={styles.detailDescription}>{description}</p>
    <ul>
      {itemList.map((element) => (
        <li className={styles.detailDescription}>{element}</li>
      ))}
    </ul>

    <a className={styles.detailDescription} href={ctaLink}>
      {ctaText}
    </a>
  </div>
);

const capitalize = (x) => x[0].toUpperCase() + x.slice(1);

function Roadmap() {
  return (
    <Layout title="Roadmap">
      <main className={clsx(styles.main)}>{data.intro}</main>
    </Layout>
  );
}

export default Roadmap;
