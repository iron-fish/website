import React from "react"
import Layout from "@theme/Layout"
import clsx from "clsx"
import styles from "./roadmap.module.css"

const { useState, useEffect } = React

const SOME_COPY_NEEDED = (
  <span style={{ color: "lime" }}>some copy needed here.</span>
)

const ASSETS = ["unicorn", "x", "diamond", "bitcoin"]

const range = x =>
  Array.from(new Array(x)).reduce(
    (a, b = 1) => a.concat(a[a.length - 1] + b),
    [0]
  )
const patch = (given, source) =>
  source.map(
    (x, i) => given[Math.round(Math.random() * given.length) % given.length]
  )

const Asset = ({ asset: x }) => {
  const [$flipped, $setFlipped] = useState(Math.round(Math.random() * 1))
  const [$interval, $setInterval] = useState(-1)
  useEffect(() => {
    if ($interval) clearInterval($interval)
    $setInterval(
      setInterval(
        () => $setFlipped(!$flipped),
        Math.round(Math.random() * 30e3)
      )
    )
    return () => clearInterval($interval)
  }, [$setInterval, $flipped, $setFlipped])
  return (
    <div
      className={clsx(styles.asset, { [styles.flipped]: $flipped })}
      onMouseEnter={() => {
        clearInterval($interval)
        $setFlipped(false)
      }}
      onMouseOut={() => {}}
    >
      <div
        className={clsx(styles.assetFace, styles[x], {
          [styles.flipped]: !$flipped,
        })}
      >
        <img src={`img/roadmap/asset-${x}.png`} />
      </div>
      <div
        className={clsx(styles.assetFace, styles.hexfish, {
          [styles.flipped]: $flipped,
        })}
      >
        <img src={`img/roadmap/asset-hexfish.png`} className={styles.flipped} />
      </div>
    </div>
  )
}

const AssetConnection = ({ size = 15 }) => (
  <div className={styles.assets}>
    {patch(ASSETS, range(size)).map((x, i) => (
      <Asset asset={x} key={x + i} />
    ))}
  </div>
)

const data = {
  intro: (
    <>
      The ultimate goal for Iron Fish is to be a universal privacy layer to
      support not only many different types of native assets on Iron Fish, but
      also assets on other chains through bridges. A true SSL layer for
      blockchains.
      <br />
      <br />
      Why build a new chain? Why can’t this live on Ethereum, Solana, Celo, or
      any other blockchain?
    </>
  ),
  phases: {
    interlude0: {
      image: (
        <img
          src={`/img/roadmap/infinite-hexfish.png`}
          alt="Infinite hexfish"
          className={styles.interlude}
        />
      ),
    },
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
        <img
          src={`/img/roadmap/leaderboard.png`}
          alt="Testnet Leaderboard"
          className={styles.interlude}
        />
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
        <img
          src={`/img/roadmap/wallet.png`}
          alt="Wallet"
          className={styles.interlude}
        />
      ),
    },
    phase3: {
      subtitle: "Multi Asset Support",
      description: SOME_COPY_NEEDED,
      features: [],
      children: <AssetConnection />,
    },
  },
}

const Feature = ({ icon, title, description }) => (
  <div className={styles.detail}>
    <div className={styles.detailIcon}>
      <img src={`/img/roadmap/${icon}.svg`} alt={icon} />
    </div>
    <h3 className={styles.detailTitle}>{title}</h3>
    <p className={styles.detailDescription}>{description}</p>
  </div>
)

const capitalize = x => x[0].toUpperCase() + x.slice(1)

function Roadmap() {
  return (
    <Layout title="Roadmap" description={data.intro}>
      <main className={clsx(styles.main)}>
        <h1 className={styles.cta}>Check out our Roadmap</h1>
        <p className={styles.mainIntro}>
          {data.intro} <a href="#">Learn more here</a>
        </p>
        <button className={styles.ctaButton}>Explore the Roadmap</button>

        {Object.entries(data.phases).map(
          ([
            phase,
            { image, features, subtitle, date, description, children },
          ]) =>
            image ? (
              <>{image}</>
            ) : (
              <section className={clsx(styles.phase)} key={phase}>
                <>
                  {date ? (
                    <time className={styles.launchdate}>Launched {date}</time>
                  ) : null}
                  <h2 className={styles.phaseTitle}>
                    Iron Fish Testnet {capitalize(phase.replace(/(\d)/, " $1"))}
                    {subtitle ? ": " + subtitle : ""}
                  </h2>
                  {description ? (
                    <p className={styles.phaseDescription}>{description}</p>
                  ) : null}
                  {features?.length === 0
                    ? null
                    : features.map(feature => (
                        <Feature {...feature} key={feature.title} />
                      ))}
                  {children}
                </>
              </section>
            )
        )}
      </main>
    </Layout>
  )
}

export default Roadmap
