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
            The need for a private cryptocurrency is now. At Iron Fish, we know
            the direction the world has been heading in. It’s been an ongoing
            tale:
          </p>
        </header>

        <SectionStory
          date="1990"
          title="The introduction of e-Commerce"
          description={
            <>
              Almost as soon as the internet was created, so was e-commerce. For
              financial transactions to happen online, a secure communication
              channel was needed to protect user credit card data. The invention
              and adoption of SSL, what is now HTTPS, opened up the floodgates
              to e-commerce. Today, online shopping accounts for 20% of all
              retail sales, with HTTPS being the standard for almost all
              websites. At the time, however, governments put heavy restrictions
              on even this type of encryption, scrutinizing it for being used
              for nefarious purposes.
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
              centralized economic system declined. The Greece government had a
              debt crisis, the Venezuelan bolivar depreciated, and many
              economies went into a recession. It was during this time that
              Bitcoin, a decentralized and trust-less cryptocurrency system was
              born — a true innovation in forming a new type of currency. Today
              Bitcoin is primarily used as a store of value and a hedge against
              inflation. However, Bitcoin lacks privacy and suffers from slow
              transaction time and costly transaction cost.
            </>
          }
          image="houses"
        />
        <SectionStory
          date="2020"
          title="Digital only payments"
          description={
            <>
              Day-to-day payments accelerated their progression to being
              digital-only. Following the pandemic, cash was replaced by
              contactless or online payments. Never before in human history has
              an individual been this traced in what we do, what we buy, or
              where we go, and credit card companies profit greatly from selling
              your payments data. While major cryptocurrencies like Bitcoin or
              Ethereum offer alternative solutions to payments, they are
              fundamentally not private, allowing anyone in the world to view
              all transaction details. Though privacy-preserving tools and other
              privacy coins exist, they all have flaws that prevent them to be
              safe or usable.
            </>
          }
          image="donuts"
        />
        <SectionStory
          date="TODAY"
          title="Iron Fish"
          description={
            <>
              Bitcoin was born out of the 2008 recession. Iron Fish is being
              born out of the 2020 pandemic, during a time when digital payments
              are dominant and our privacy has never before been this violated.
              We are working on providing a currency that makes privacy
              approachable and easy to use, while providing the strongest
              privacy guarantees available. Not only is privacy a right, but it
              also leads to innovation, creativity, and safety. We chose the
              name ‘Iron Fish’ because during WW2 the US Navajo Code Talkers
              used it as a codename for a submarine — displaying the power of
              cryptography to protect and defend.
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
                  We have decided to not cut any corners and adopt the highest
                  privacy-guaranteed technique – using shielded transactions
                  with the help of zero-knowledge proofs. All of our
                  transactions are fully private and anonymous. Each Iron Fish
                  account comes with a set of view keys allowing the user to
                  give out read-only access to their account, or disclose a
                  particular transaction in the case of a dispute or regulatory
                  compliance.
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
                  which results in a high barrier to entry for most users. We are working on
                  developing an improved user experience and offering a full end-
                  to-end product: from your mobile phone wallet to your bank
                  account in a tab of your browser. If we want to have a truly
                  decentralized banking system, we need to make it easy for
                  anyone to use and accessible.
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
              to={useBaseUrl("/careers/")}
            >
              Explore Careers
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AboutUs;
