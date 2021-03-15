import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";
import Mailchimp from "../theme/components/MailChimp";

const features = [
  {
    className: "sectionPrivacy",
    title: "A new chain with the strongest privacy",
    description:
      "Iron Fish is a Layer 1 blockchain that provides the strongest privacy guarantees on every single transaction. Leveraging zero-knowledge proofs (zk-SNARKs), and the highest industry standards for encryption, Iron Fish gives you complete control over who sees transaction details via account view keys or transaction decryption keys. Your data. Your information. Your coins.",
    buttonLink: "crypto-privacy-comparison",
    button: "Privacy Features Comparison",
  },
  {
    className: "sectionCryptocurrency",
    title: "We care about usability",
    description:
      "Cryptocurrencies have struggled with usability. Iron Fish is built to be intuitive for both developers and users alike. We are building a complete set of tools for you to have the best end-to-end experience running and transacting $IRON on every platform, while always guaranteeing your privacy.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    className: "sectionBorderless",
    title: "Borderless, decentralized, built for everyone",
    description:
      "We care about decentralization. Iron Fish is a proof-of-work (PoW) chain that is censorship-resistant and available to everyone—regardless of location, identity or citizenship. Anyone can create a wallet, run their own node, and mine $IRON. With Iron Fish you own the bank.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    className: "sectionRegulatory",
    title: "Regulatory compliance",
    description:
      "Privacy doesn't mean that Iron Fish can't be compliant. Every Iron Fish account comes with a set of view keys allowing an exchange or financial organization to see a full audit of the accounts they manage and comply with all their AML obligations.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    className: "sectionExperts",
    title: "Built by experts and backed by leading investors",
    description:
      "We are honored to be working with incredible investors and angels. Our team members are tech veterans, with experience spanning Airbnb, Microsoft, Uber, and more.",
    buttonLink: "about",
    button: "About Us",
  },
];

function Feature({ className, button, buttonLink, title, description }) {
  return (
    <section className={clsx(styles.section, { [styles[className]]: true })}>
      <div className={clsx(styles.sectionContainer)}>
        <div className={clsx(styles.sectionContent)}>
          <div>
            <h2 className={clsx(styles.sectionTitle)}>{title}</h2>
            <p className={clsx(styles.sectionDescription)}>{description}</p>
            {button && (
              <Link
                className={clsx(styles.button, "button button--outline")}
                to={useBaseUrl(buttonLink)}
              >
                {button}
              </Link>
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
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={""} description={siteConfig.tagline}>
      <section className={clsx(styles.section, styles.sectionHomePage)}>
        <div className={clsx(styles.sectionContainer)}>
          <header>
            <h1 className={clsx(styles.h1Title)}>
              The Private
              <br />
              Cryptocurrency
            </h1>
            <Link
              className="button button--outline button--secondary"
              to={useBaseUrl("/docs/whitepaper/1_introduction")}
            >
              Get Started
            </Link>
          </header>
        </div>
      </section>
      <main>
        {features &&
          features.length > 0 &&
          features.map((props) => <Feature key={props.className} {...props} />)}
        <section className={clsx(styles.section, styles.sectionNewsletter)}>
          <div className={clsx(styles.sectionContainer)}>
            <p className={clsx(styles.newsletterTitle)}>
              Stay up to date with Iron Fish
            </p>
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
        </section>
      </main>
    </Layout>
  );
}

export default Home;
