import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./roadmap.module.css";
import Bitcoin from "../theme/RoadmapPage/bitcoin.svg";
import Uniswap from "../theme/RoadmapPage/uniswap.svg";
import Binance from "../theme/RoadmapPage/binance.svg";
import Ethereum from "../theme/RoadmapPage/ethereum.svg";

const { useState, useEffect, useCallback } = React;

const SOME_COPY_NEEDED = (
  <span style={{ color: "lime" }}>
    some copy needed here. some copy needed here. some copy needed here. some
    copy needed here. some copy needed here.
  </span>
);

const Breakpoint = ({ at, horizontal = true }) => {
  const value = horizontal ? at : at.slice(1);
  const isVertical = at.startsWith("v");
  return (
    <div
      className={clsx({
        [styles.breakpoint]: !isVertical,
        [styles.relativeBreakpoint]: at.indexOf("%") > -1,
        [styles.vbreakpoint]: isVertical,
      })}
      style={{ [horizontal ? "left" : "top"]: value }}
      data-value={value}
    />
  );
};

const points = [
  `450px`,
  `540px`,
  `630px`,
  `990px`,
  `1080px`,
  `1200px`,
  "10%",
  "25%",
  "50%",
  "75%",
  "90%",
  // "v64px",
  // "v128px",
  // "v192px",
  // "v256px",
  // "v320px",
  // "v384px",
  // "v448px",
  // "v512px",
  // "v576px",
  // "v640px",
  // "v704px",
  // "v768px",
  // "v832px",
  // "v896px",
  // "v960px",
  // "v1024px",
];

// With a URL like: coolwebsite.com?nice=dope
// const $nice = useQuery('nice') === 'dope'
export function useQuery(key) {
  // our state
  const [$query, $setQuery] = useState(null);

  useEffect(() => {
    // only for ze browser
    if (typeof window === "undefined") return;

    const parsed = new URLSearchParams((window.location.search || "").slice(1));

    const value = parsed.get(key);

    if (typeof value === "string") {
      $setQuery(value);
    }
  }, [$query, $setQuery, key]);
  return $query;
}

const ResponsiveToolkit = () => {
  const [$active, $setActive] = useState(true);
  const [$width, $setWidth] = useState(-1);
  const [$point, $setPoint] = useState(0);
  const toggle = () => $setActive(!$active);
  const $toolkit = useQuery("debug");
  const $customPoint = useQuery("point");
  useEffect(() => {
    const activePoints = () =>
      points
        .filter((z) => z.includes("px"))
        .map((z) => parseInt(z.slice(0, -2)))
        .reduce((x, y) => (y <= $width ? y : x), 0);
    const update = () => {
      $setWidth(window.innerWidth);
      const points = activePoints();
      console.log({ points, $customPoint });
      $setPoint(points);
    };
    if ($toolkit) {
      update();
      window.addEventListener("resize", update);
    }
    return () => window.removeEventListener("resize", update);
  }, [$width, $setWidth, $point, $setPoint, $toolkit, $customPoint]);

  const pointsPlus = $customPoint ? points.concat($customPoint) : points;
  return (
    $toolkit && (
      <>
        <div className={styles.toolkit} onClick={toggle}>
          {$point}px <span className={styles.ruler}>📐</span> {$width}px
        </div>
        {$active &&
          pointsPlus
            .filter((z) => !z.startsWith("v"))
            .map((x) => <Breakpoint key={x} at={x} />)}
        {$active &&
          pointsPlus
            .filter((z) => z.startsWith("v"))
            .map((x) => <Breakpoint key={x} at={x} horizontal={false} />)}
      </>
    )
  );
};

const ASSETS = [
  ["uniswap", <Uniswap key={"uniswap"} />],
  ["binance", <Binance key={"binance"} />],
  ["ethereum", <Ethereum key={"ethereum"} />],
  ["bitcoin", <Bitcoin key={"bitcoin"} />],
];

const range = (x) =>
  Array.from(new Array(x)).reduce(
    (a, b = 1) => a.concat(a[a.length - 1] + b),
    [0]
  );
const patch = (given, source) =>
  source.map(
    (x, i) => given[Math.round(Math.random() * given.length) % given.length]
  );

const Asset = ({ update, asset: x, name, flipped, index, data }) => {
  const [$interval, $setInterval] = useState(-1);
  const [$flipped, $setFlipped] = useState(flipped);
  /*useEffect(() => {
    if ($interval) clearInterval($interval)
    $setInterval(
      setInterval(() => {
        $setFlipped(!$flipped)
        // update(name + index, !$flipped)
      }, Math.round(Math.random() * 30e3))
    )
    return () => clearInterval($interval)
  }, [$setInterval, $flipped, $setFlipped, update, data[name + index]])
*/
  return (
    <div
      className={clsx(
        styles.asset,
        { [styles.flipped]: $flipped },
        styles[name]
      )}
      onMouseEnter={() => {
        clearInterval($interval);
        $setFlipped(!$flipped);
      }}
    >
      <div
        className={clsx(styles.assetFace, styles.front, styles[name], {
          [styles.flipped]: !$flipped,
        })}
      >
        {x}
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

const AssetConnection = ({ size = 15 }) => {
  const [$data, $setData] = useState({});
  const $update = (key, state) => {
    if ($data[key] && $data[key] === state) return;
    const newData = Object.assign({}, $data, { [key]: state });
    debugger;
    $setData(newData);
  };
  const $allFish = () =>
    Object.entries($data).reduce((yes, [k, v]) => yes && v, true);
  const cool = $allFish();
  return (
    <div className={clsx(styles.assets, { cool })}>
      <div className={styles.assetsWrapper}>
        {patch(ASSETS, range(size)).map(([x, raw], i) => {
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
          <h1 className={styles.cta}>Universal Privacy Layer for Crypto</h1>
          <p className={styles.mainIntro}>
            We’re building Iron Fish to be the universal privacy layer for
            crypto—a true SSL layer for blockchains. <br />
            <br />
            Why build a new chain? Why can’t this live on existing blockchain?{" "}
            <a href="/faq">Learn more here</a>
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
          description:
            "Proof of work chain consensus, stable syncing, 15 second block times, node and account APIs, and a default miner.",
        },
        {
          icon: "cash",
          title: "Network Layer",
          description:
            "We are building a network layer using WebRTC and Websockets for perfect, frictionless network participation.",
        },
        {
          icon: "arrow-back-and-forth",
          title: "Private Transactions",
          description:
            "We are offering fully private transactions using modified Sapling design. Privacy is at the heart of what we believe in.",
        },
      ],
    },
    phase1: {
      features: [
        {
          icon: "pan-and-zoom",
          title: "Stabilize",
          description:
            "Stabilize core node features (we want to hear from you! Join our Discord channel to provide feedback)",
        },
        {
          icon: "bank",
          title: "Incentivized Testnet",
          description:
            "Incentivized testnet dashboard and leaderboard offers users a gamified experience.",
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
          title: "Node Dashboard",
          description: SOME_COPY_NEEDED,
        },
        {
          icon: "wallet",
          title: "Desktop Wallet",
          description: SOME_COPY_NEEDED,
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
      subtitle: "Multi Asset Support",
      description: SOME_COPY_NEEDED,
      features: [],
      children: <AssetConnection />,
    },
    phase4: {
      features: [
        {
          icon: "chain",
          title: "Cross-Chain Bridge Support",
          description: SOME_COPY_NEEDED,
        },
        {
          icon: "life-preserver",
          title: "Level 2 Support",
          description: SOME_COPY_NEEDED,
        },
      ],
    },
    interlude4: {
      image: (
        <Interlude
          wrapper={styles.bridges}
          src={`/img/roadmap/infinite-bridge.svg`}
          alt="Bridges"
          className={styles.interludeBridges}
        >
          <div className={styles.interludeBall3} />
        </Interlude>
      ),
    },
    mainnet: {
      subtitle: "Iron Fish Mainnet!",
      children: (
        <div className={styles.mainblock}>
          <p>
            Our mainnet is an independent blockchain operating on its own
            network with its own technology and protocol. Fake copy fake copy.
          </p>
          <img
            className={styles.fishweb}
            src={`/img/roadmap/celebration.gif`}
            alt="Mainnet"
          />
          <p>
            Want to be a part of building the universal privacy layer for all
            crypto assets? Click here to get started with running an Iron Fish
            node, check out our github for open source contributions, join our
            Discord to ask questions or give feedback, or join the core Iron
            Fish team!
          </p>
        </div>
      ),
    },
  },
};

const Feature = ({ icon, title, description }) => (
  <div className={styles.detail}>
    <div className={styles.detailIcon}>
      <img src={`/img/roadmap/${icon}.svg`} alt={icon} />
    </div>
    <h3 className={styles.detailTitle}>{title}</h3>
    <p className={styles.detailDescription}>{description}</p>
  </div>
);

const capitalize = (x) => x[0].toUpperCase() + x.slice(1);

function Roadmap() {
  return (
    <Layout title="Roadmap">
      <ResponsiveToolkit />

      <main className={clsx(styles.main)}>
        {data.intro}

        {Object.entries(data.phases).map(
          ([
            phase,
            { image, features = [], subtitle, date, description, children },
          ]) =>
            image ? (
              <div
                key={phase}
                className={clsx(styles.imagelude, styles[phase])}
              >
                {image}
              </div>
            ) : (
              <section
                className={clsx(styles.phase, styles[phase])}
                key={phase}
              >
                <div className={styles.phaseWrapper}>
                  {date ? (
                    <time className={styles.launchdate}>Launched {date}</time>
                  ) : null}
                  <h2 className={styles.phaseTitle}>
                    {phase !== "mainnet" ? (
                      <>
                        Iron Fish Testnet <br className={styles.breakAfterSm} />
                        {capitalize(phase.replace(/(\d)/, " $1"))}
                      </>
                    ) : null}
                    {subtitle
                      ? (phase === "mainnet" ? "" : ": ") + subtitle
                      : ""}
                  </h2>
                  {description ? (
                    <p className={styles.phaseDescription}>{description}</p>
                  ) : null}
                  {features?.length === 0 ? null : (
                    <div
                      className={clsx(
                        styles.details,
                        styles["total" + features.length.toString()]
                      )}
                    >
                      {features.map((feature) => (
                        <Feature {...feature} key={feature.title} />
                      ))}
                    </div>
                  )}
                  {children}
                </div>
              </section>
            )
        )}
      </main>
    </Layout>
  );
}

export default Roadmap;
