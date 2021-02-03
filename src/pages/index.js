import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";
import Mailchimp from "./components/MailChimp";

const features = [
  {
    className: "sectionPrivacy",
    title: "We don’t take shortcuts on privacy",
    description:
      "We believe privacy is a right—offering fully-private payments, with every transaction. You will have complete control over who sees your account details. Your data is decentralized and end-to-end encrypted, ensuring that you’re safe from third parties and hackers.",
    buttonLink: "docs/whitepaper/3_transactions",
    button: "Learn more",
  },
  {
    className: "sectionCryptocurrency",
    title: "Cryptocurrency you can actually use",
    description: (
      <>
        No experience (or professional equipment) necessary—just launch our app.
        In minutes you can open a new wallet, become a full node, and start
        mining.
      </>
    ),
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Learn more",
  },
  {
    className: "sectionExperts",
    title: "Built by experts and backed by leading investors",
    description: (
      <>
        We are honored to be working with incredible investors and angels. Our
        team members are tech veterans, with resumes spanning Airbnb, Facebook,
        Uber, and more.
      </>
    ),
    buttonLink: "about",
    button: "Learn more",
  },
  {
    className: "sectionBorderless",
    title: "Borderless, private banking for everyone",
    description: (
      <>
        IRF is censorship-resistant and available to everyone—regardless of
        location, identity or citizenship. Anyone can create a wallet and be
        their own global, digital bank.
      </>
    ),
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Learn more",
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
              <br /> Cryptocurrency
            </h1>
            <Link
              className="button button--outline button--secondary"
              to={useBaseUrl("docs/whitepaper/1_introduction")}
            >
              Get Started
            </Link>
          </header>
        </div>
      </section>
      <main>
        {features && features.length > 0 && (
          <>
            {features.map((props) => (
              <Feature key={props.className} {...props} />
            ))}
          </>
        )}
        <section className={clsx(styles.section, styles.sectionNewsletter)}>
          <div className="container">
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
