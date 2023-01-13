import React, { useState, useEffect } from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"

import styles from "./index.module.css"
import Mailchimp from "../theme/components/MailChimp"

const features = [
  {
    id: "privacy",
    className: "sectionPrivacy",
    title: "Empowering users to choose privacy",
    description: (
      <>
        We’re putting back the power of choice into the hands of users. Whether
        you want to keep your information public or private, that should be your
        choice &mdash; on any chain.
      </>
    ),
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    id: "privacy-roadmap",
    className: "sectionPrivacyLayer",
    title: "We're making privacy universal",
    description: (
      <>
        We’re building a new Layer 1 blockchain to become the universal privacy
        layer for all of web3. Using zero-knowledge proofs (zk-SNARKs) and the
        highest industry standards for encryption, we enable users to have fully
        private transactions &mdash; a true SSL layer for all blockchains.
      </>
    ),
    buttonLink: "/roadmap",
    button: "See Our Roadmap",
  },
  {
    id: "privacy",
    className: "sectionCryptocurrency",
    title: "Borderless, decentralized, and built for everyone",
    description: (
      <>
        Privacy should be a right. Iron Fish’s simplicity gives everyone that
        right. Confidentiality shouldn’t be reserved for the powerful or
        technically gifted. Anyone can create a wallet and run their own node
        &mdash; try it here:
      </>
    ),
    buttonLink: "docs/onboarding/installation-iron-fish",
    button: "Download Iron Fish",
  },
  {
    id: "regulatory",
    className: "sectionRegulatory",
    title: (
      <>
        Regulatory compliance,
        <br className={styles.implicitBreak} />
        built in
      </>
    ),
    description:
      "Privacy and compliance don’t have to be at odds. Every Iron Fish account comes with a set of view keys allowing an exchange or financial organization to provide a full audit of the accounts they manage and comply with all their AML obligations.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    id: "investors",
    className: "sectionExperts",
    title: "World-class builders and backers",
    companies: [
      ["/img/index/investor-a16z.svg", "a16z.com"],
      ["/img/index/investor-electric-capital.svg", "electriccapital.com"],
      ["/img/index/investor-sequoia.svg", "sequoiacap.com"],
    ],
    investors: [
      ["/img/index/twitter.svg", "twitter.com/eladgil"],
      ["/img/index/twitter.svg", "twitter.com/ljxie"],
      ["/img/index/twitter.svg", "twitter.com/balajis"],
    ],
    description:
      "Our team members have decades of experience building some of the world’s most beloved products at Airbnb, Facebook, Google, Uber, and more. Our angels include founders across the crypto space (L1s, bridges, custody). And our investors have a track record of partnering early with the world’s most transformational technologies.",
  },
]

const lookup = x => (x !== "sectionExperts" ? styles : styles)

export function CustomBox({
  children,
}) {
  return (
    <div className={clsx(styles.customBoxContainer)} >
      <div className={clsx(styles.customBoxBack)} />
      <div className={clsx(styles.customBoxFront)} />
      <div className={clsx(styles.customBoxContent)} >
        {children}
      </div>
    </div>
  )
}

const Investor = ({ data: [img, site], prefix = "company" }) => {
  const twitterName =
    site.indexOf("twitter") > -1 ? site.split(".com/")[1] : null
  return (
    <a
      href={`https://${site}`}
      className={clsx(styles[`${prefix}Link`], {
        [styles[`${prefix}LinkTwitter`]]: twitterName,
      })}
    >
      <img
        className={clsx(
          twitterName ? styles[`${prefix}Twitter`] : styles[`${prefix}Image`]
        )}
        src={img}
        role="presentation"
      />
      {twitterName && <span style={{ width: "8px" }} />}
      {twitterName && <span className={styles.twitterName}>{twitterName}</span>}
    </a>
  )
}

function Feature({
  id,
  className,
  button,
  buttonLink,
  disabledButton,
  title,
  description,
  companies = [],
  investors = [],
}) {
  return (
    <section
      id={id}
      className={clsx(styles.section, styles[className], className)}
    >
      <div className={clsx(styles.sectionContainer)}>
        <div className={clsx(styles.sectionContent)}>
          <div>
            <h2 className={clsx(styles.sectionTitle)}>{title}</h2>
            <p className={clsx(styles.sectionDescription)}>{description}</p>
            {companies.length > 0 && (
              <div className={styles.companies}>
                {companies.map(([img, site]) => (
                  <Investor key={site} data={[img, site]} prefix="company" />
                ))}
              </div>
            )}
            {investors.length > 0 && (
              <div className={styles.investors}>
                {investors.map(([img, site]) => (
                  <Investor key={site} data={[img, site]} prefix="investor" />
                ))}
              </div>
            )}
            {button && (
              <Link
                className={clsx(styles.button, "button button--outline")}
                to={useBaseUrl(buttonLink)}
              >
                {button}
              </Link>
            )}
            {disabledButton && (
              <div className="button button--outline button--disabled">{disabledButton}</div>
            )}
          </div>
        </div>
        <div
          className={clsx(styles.sectionImg, {
            [styles[`${className}Img`]]: true,
          })}
        />
      </div>
    </section>
  )
}
function useWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return width;
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const width = useWidth();
  return (
    <Layout title={""} description={siteConfig.tagline}>
      <section className={clsx(styles.section, styles.sectionHomePage)}>
        <div className={clsx(styles.sectionContainer)}>
          <header>
            <h1 className={clsx(styles.h1Title)}>
              The Privacy Platform
              <br />
              for web3
            </h1>
            <h2 className={clsx(styles.h2Title)}>Coming to a chain near you</h2>
            <Link
              className="button button--outline button--secondary button--main"
              to="https://testnet.ironfish.network/about"
            >
              Join the Incentivized Testnet
            </Link>
          </header>
        </div>
      </section>
      <main>
        <section className={clsx(styles.section, styles.sectionTestnet, 'sectionTestnet')}>
          <CustomBox>

            <div className={clsx(styles.sectionContainer, styles.sectionCardContainer)}>
              <div className={clsx(styles.sectionContent, styles.sectionCardContent)}>
                <div>
                  <div className={clsx(styles.sectionTitle, styles.sectionCardTitle)}>
                    Incentivized Testnet Phase 3 has started!
                  </div>
                  <p className={clsx(styles.sectionDescription, styles.sectionCardDescription)}>
                    Join the final phase and become part of our community. Now including multi-asset, our testnet is ready for you to mint and burn assets, find bugs, and more. Start earning points that we’ll translate into tokens upon mainnet launch.
                  </p>
                  <Link
                    className={clsx(styles.button, "button button--outline")}
                    to="https://testnet.ironfish.network/about"
                  >
                    {width < 550 ? "Join the testnet": "Join the Incentivized Testnet"}
                  </Link>
                </div>
              </div>
              <div />
              <div
                className={clsx(styles.sectionImg, styles.sectionTestnetImg)}
              />
            </div>
          </ CustomBox>

        </section>
        {features &&
          features.length > 0 &&
          features.map(props => <Feature key={props.className} {...props} />)}
        <section className={clsx(styles.section, styles.sectionNewsletter)}>
          <div className={clsx(styles.sectionContainer)}>
            <p className={clsx(styles.newsletterTitle)}>
              Stay up to date with Iron Fish
            </p>
            <div id="email-signup">
              <Mailchimp
                buttonClassName="button button--outline button--secondary"
                action="https://network.us20.list-manage.com/subscribe/post?u=faf0318a641ddbad058a4ad2f&amp;id=25c9feb0f4"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Enter your email...",
                    type: "email",
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
