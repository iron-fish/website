import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const features = [
  {
    title: 'Fully private payments.',
    description: (
      <>
        Strongest privacy guarantees on every transaction. You have full control over who sees your account details.
      </>
    ),
    button: 'Learn more about our privacy approach',
  },
  {
    title: (
      <>
        Truly Accessible.
        <br />
        Completely Decentralized.
      </>
    ),
    description: (
      <>
        Become a full node participating in the Iron Fish network with just a browser. Easy setup for a light client on mobile too!
        <br />
        <br />
        Start solo mining in minutes with a loss-less blazing-fast syncing technique via a desktop app. Connect to any mining pool with just a config setting.
      </>
    ),
    button: 'Learn more',
  },
  {
    title: (
      <>
        Browser first.
        <br />
        Compatible with every OS.
      </>
    ),
    description: (
      <>
        Full node, miner, and wallet can be started from a browser or in terminal.
        <br />
        No installation required.
      </>
    ),
    button: 'Learn more',
  },
  {
    title: (
      <>
        Backed by prominent investors.
        <br />
        Built by a top talent team.
      </>
    ),
    description: (
      <>
        We are extremely proud and honored to be working with some of the most incredible investors and angels.
        Our current team members were all previously engineers at companies such as Airbnb, Facebook, Microsoft, and Uber.
      </>
    ),
  },
];

function Feature({ button, title, description }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{description}</p>
      {button && (
        <Link
          className={clsx(
            'button button--outline'
          )}
          to={useBaseUrl('docs/whitepaper/1_introduction')}>
          {`${button} →`}
        </Link>

      )}
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={''}
      description={`${siteConfig.description}`}>
      <div className="container">
        <header className={clsx(styles.section)}>
          <h1 className={clsx('hero__title', styles.heroTitle, styles.h1Title)}>Iron Fish is a new cryptocurrency that takes no shortcuts on privacy.</h1>
          <Link
            className='button button--outline'
            to={useBaseUrl('docs/whitepaper/1_introduction')}>
              Get Started →
          </Link>
        </header>
        <main>
          {features && features.length > 0 && (
            <>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </>
          )}
        </main>
      </div>
    </Layout >
  );
}

export default Home;
