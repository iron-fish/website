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
    title: "Find your Use Case",
    description: (
      <>
        Iron Fish is built for everyone. We build with the understanding that decentralized currency
        should be easy-to-use and convenient while offering developers a needed base for building
        sophisticated applications on our encrypted network.
      </>
    ),
    buttonLink: "/docs/onboarding/iron-fish-tutorial",
    button: "Get Started",
  },
  {
    id: "privacy-roadmap",
    className: "sectionPrivacyLayer",
    title: "Encrypt your Crypto",
    description: (
      <>
        Multi-asset support means that, with bridge provider support, any crypto asset can be imported
        to the Iron Fish network for private transactions.
      </>
    ),
    buttonLink: "/docs/whitepaper/1_introduction",
    button: "Read the Whitepaper",
  },
  {
    id: "privacy",
    className: "sectionCryptocurrency",
    title: "Connect with a Global Community",
    description: (
      <>
        Iron Fish is open-source and community-focused. Connect with us on Discord
        and join a lively collective known for its openness and engagement.  
      </>
    ),
    buttonLink: "https://discord.ironfish.network/",
    button: "Join the Community",
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
    Component() {
      return (
        <section className={clsx(styles.section, styles.sectionTestnet, 'sectionTestnet')}>
          <CustomBox>

            <div className={clsx(styles.sectionContainer, styles.sectionCardContainer)}>
              <div className={clsx(styles.sectionContent, styles.sectionCardContent)}>
                <div>
                  <div className={clsx(styles.sectionTitle, styles.sectionCardTitle)}>
                    Testnet Questions?
                  </div>
                  <p className={clsx(styles.sectionDescription, styles.sectionCardDescription)}>
                    Have questions about converting your Iron Fish testnet points? Click here for answers. 
                  </p>
                  <Link
                    className={clsx(styles.button, "button button--outline")}
                    to="https://testnet.ironfish.network/faq"
                  >
                    Testnet FAQ
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
      )
    }
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

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={""} description={siteConfig.tagline}>
      <section className={clsx(styles.section, styles.sectionHomePage)}>
        <div className={clsx(styles.sectionContainer)}>
          <header>
            <h1 className={clsx(styles.h1Title)}>
              Safe, seamless crypto
            </h1>
            <h2 className={clsx(styles.h2Title)}>Iron Fish encrypts <em>every</em> transaction</h2>
            <Link
              className="button button--outline button--secondary button--main"
              to="/docs/onboarding/iron-fish-tutorial"
            >
              Get Started
            </Link>
          </header>
        </div>
      </section>
      <main>
        {features &&
          features.length > 0 &&
          features.map((props, i) => {
            const Component = props.Component
            if (Component) {
              // return null;
              return <Component key={i} />
            }
            return <Feature key={props.className} {...props} />;
          })}
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
