import React, { useState } from "react";
import clsx from "clsx";

import { InView } from "react-intersection-observer";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./about.module.css";

function SectionStory({ date, title, description, image }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className={clsx(styles.aboutSection, { [styles[image]]: true })}>
      <div className={clsx(styles.storyContainer)}>
        <div className={clsx(styles.story)}>
          <p className={clsx(styles.date)}>{date}</p>
          <p className={clsx(styles.title)}>{title}</p>
          <p className={clsx(styles.description)}>{description}</p>
        </div>
      </div>
      <div className={clsx(styles.backgroundContainer)}>
        <InView as="span" onChange={(visible) => setIsVisible(visible)}>
          <img
            src={`/img/about/${image}.svg`}
            alt=""
            role="presentation"
            className={clsx(styles.backgroundImg, {
              [styles.backgroundImgVisible]: isVisible,
            })}
          />
        </InView>
      </div>
    </section>
  );
}

function Feature({ title, link, description, image }) {
  return (
    <div className={clsx(styles.feature)}>
      <img src={`/img/about/${image}.svg`} alt="" role="presentation" />
      <p className={clsx(styles.title)}>{title}</p>
      <p className={clsx(styles.description)}>
        {description}
        <br />
        <Link to={useBaseUrl(link)}>
          {`Learn How `}
          <img src={`/img/about/next.svg`} alt="" role="presentation" />
        </Link>
      </p>
    </div>
  );
}

function AboutUs() {
  return (
    <>
      <Layout
        title={"About us"}
        description={
          "Who is behind Iron Fish - a fully secure, private, and untraceable cryptocurrency. Iron Fish is rapidly evolving. Our team and investors are experts in their fields."
        }
      >
        <header>
          <h1 className="main--title">
            {`We are making private crypto accessible & global`}
          </h1>

          <p className="tagline">
            The need for a private cryptocurrency is now. At Iron Fish we know
            the direction the world has been heading in. It’s been an ongoing
            tale:
          </p>
        </header>

        <SectionStory
          date="1990"
          title="The introduction of e-Commerce"
          description={
            <>
              In just a few years after the arrival of the internet, the first
              transaction on an e-commerce site was made. The convenience of
              shopping online quickly spread to account to 20%+ of total retail
              sales today. But it was still a risky operation at that time,
              vulnerable to many types of attack over the network until the
              adoption of the SSL layer. However, governments were worried about
              this new security technology preventing them from controlling what
              was happening online. To this day, many governments are still
              censoring websites that are using HTTPS.
            </>
          }
          image="ecommerce"
        />
        <SectionStory
          date="2008"
          title={`Bitcoin & the housing bubble`}
          description={
            <>
              Following the 2008 financial collapse, the trust in the
              centralized economic system declined. The sentiment spreads across
              the world after various events like the Greek government-debt
              crisis or the Venezuelan bolivar depreciation. The Bitcoin network
              started in 2009 as a medium for daily transactions or digital cash
              without the traditional centralized banking infrastructure.
              However, to this day, Bitcoin has been primarily used as a store
              of value and a hedge against inflation because of the lack of
              privacy, slow transaction time, and costly transaction cost.
            </>
          }
          image="houses"
        />
        <SectionStory
          date="2020"
          title="Digital only payments"
          description={
            <>
              Day to day payments accelerated their progression to being
              digital-only. Following the pandemic, cash is replaced by
              contactless payments in stores. Credit card companies are now able
              to track and share your data like never before. Governments and
              users are slowly realizing that privacy matters and how tech
              companies are profiting from the data they collect. But major
              cryptocurrencies like Bitcoin or Ethereum are still not private.
              Other privacy coins have major flaws and are difficult to use for
              most.
            </>
          }
          image="donuts"
        />
        <SectionStory
          date="TODAY"
          title="Iron Fish to the rescue!"
          description={
            <>
              Why ‘Iron Fish’? During WW2, the US recruited Native Americans to
              use their tribal languages to send secret communications to and
              from the battlefield. One of their code systems contained words
              that were directly translated from English to Navajo for military
              words. The term for ‘submarine’ became what directly translates to
              as ‘iron fish’. We chose this as our name because it shows the
              power of cryptography and how a complex modern concept can be
              described using relatively simple words.
            </>
          }
          image="coins"
        />

        <section className={clsx(styles.featuresSection)}>
          <p className="main--subtitle">How we plan to change the world</p>
          <div>
            <Feature
              title="Make it Private"
              image="key"
              link="docs/whitepaper/6_transaction"
              description={
                <>
                  We decided to not cut any corners and adopt the highest
                  privacy-guaranteed technique – using shielded transactions
                  with the help of zero-knowledge proofs. All of our
                  transactions are fully private and anonymous. Each Iron Fish
                  account comes with a set of view keys allowing the user to
                  give out read-only access to their account, or disclose a
                  particular transaction in the case of a dispute.
                </>
              }
            />
            <Feature
              title="Make it Accessible"
              image="hands"
              link="docs/onboarding/iron-fish-tutorial"
              description={
                <>
                  Most cryptocurrencies are made by engineers, for engineers,
                  which results in a high barrier to entry. We are working on
                  developing an improved user experience and offering a full end
                  to end product: from your mobile phone wallet to your own bank
                  account in a tab of your browser. If we want to have a truly
                  decentralized banking system, we need to make it easier to use
                  for anyone.
                </>
              }
            />
          </div>
        </section>

        <section className={clsx(styles.blueAboutSection)}>
          <div>
            <p className="main--subtitle">Who we are today</p>
            <p>
              We are growing quickly, and Iron Fish is rapidly evolving. Our
              team members and investors are experts in their fields, and each
              person brings a diverse set of skills and experiences.
            </p>
            <Link
              className="button button--outline button--secondary"
              to={useBaseUrl("/docs/whitepaper/1_introduction")}
            >
              Get Started
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AboutUs;
