import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const features = [
  {
    title: 'We take no shortcuts on privacy',
    description: (
      <>
        We believe privacy is a right—offering fully-private payments, with every transaction. You will have complete control over who sees your account details. Your data is decentralized and end-to-end encrypted, ensuring that you’re safe from third parties and hackers.
      </>
    ),
    buttonLink: 'docs/whitepaper/3_transactions',
    button: 'How we guarantee privacy with zero-knowledge proofs',
  },
  {
    title: (
      <>
        Cryptocurrency you can actually use
      </>
    ),
    description: (
      <>
        No experience (or professional equipment) necessary—just launch our app or open a browser. In minutes you can open a new wallet, become a full node, and start mining.
      </>
    ),
    buttonLink: 'docs/whitepaper/1_introduction',
    button: 'Learn more',
  },
  {
    title: (
      <>
        Borderless, private banking for everyone
      </>
    ),
    description: (
      <>
        IRF is censorship-resistant and available to everyone—regardless of location, identity or citizenship. Anyone can create a wallet and be their own global, digital bank.
      </>
    ),
  },
  {
    title: (
      <>
        Backed by prominent investors. Built by experts
      </>
    ),
    description: (
      <>
        We are honored to be working with incredible investors and angels. Our team members are tech veterans, with resumes spanning Airbnb, Facebook, Uber, and more.
      </>
    ),
  },
];

function Feature({ button, buttonLink, title, description }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>{description}</p>
      {button && (
        <Link
          className={clsx(
            'button button--outline'
          )}
          to={useBaseUrl(buttonLink)}>
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
      description={siteConfig.tagline}>
      <div className="container">
        <section className="section">
          <header className={clsx('section', styles.sectionHomePage)}>
            <h1 className={clsx('hero__title', styles.heroTitle, styles.h1Title)}>Iron Fish is a novel cryptocurrency<br />focused on privacy and accessibility</h1>
            <Link
              className='button button--outline'
              to={useBaseUrl('docs/whitepaper/1_introduction')}>
              Get Started →
            </Link>
          </header>
        </section>
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
