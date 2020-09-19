import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const features = [
  {
    title: 'Accessible & Easy to Use',
    imageUrl: 'img/undraw_Devices_re_dxae.svg',
    description: (
      <>
        No obscure setup, no need to invest in specific equipment. As long as you have a browser, you can use Iron Fish!
      </>
    ),
  },
  {
    title: 'Fully private payments',
    imageUrl: 'img/undraw_two_factor_authentication_namy.svg',
    description: (
      <>
        Designed to support strong privacy guarantees on every transaction. Only you and the destination will know when you use Iron Fish.
      </>
    ),
  },
  {
    title: 'Decentralized blockchain project',
    imageUrl: 'img/undraw_Around_the_world_re_n353.svg',
    description: (
      <>
        Iron Fish is a decentralized blockchain project with a novel fast syncing technique.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.buttonWhitePaper
              )}
              to={useBaseUrl('docs/1_introduction')}>
              Whitepaper
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--outline button--lg',
                styles.buttonWhitePaper
              )}
              to={useBaseUrl('careers')}>
              JOIN US
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.feature)}>
                <div className="text--center">
                  <img className={styles.featureImage} src={'img/undraw_Savings_re_eq4w.svg'} alt={'Backed by VC investors'} />
                </div>
              </div>
              <div className={clsx('col', styles.feature)}>
                <h3>A fair & equitable project</h3>
                <p>Fully backed by reputable investors who also backed in these great companies:</p>
                <div className={clsx('row', styles.companiesList)}>
                  <img className={styles.investorImage} src={'img/companies/airbnb.svg'} alt={'Airbnb'} />
                  <img className={styles.investorImage} src={'img/companies/airtable.svg'} alt={'Airtable'} />
                  <img className={styles.investorImage} src={'img/companies/coinbase.svg'} alt={'Coinbase'} />
                  <img className={styles.investorImage} src={'img/companies/hims.svg'} alt={'Hims'} />
                  <img className={styles.investorImage} src={'img/companies/notion.svg'} alt={'Notion'} />
                  <img className={styles.investorImage} src={'img/companies/pinterest.svg'} alt={'Pinterest'} />
                  <img className={styles.investorImage} src={'img/companies/slack.svg'} alt={'Slack'} />
                  <img className={styles.investorImage} src={'img/companies/stripe.svg'} alt={'Stripe'} />
                  <img className={styles.investorImage} src={'img/companies/wish.svg'} alt={'Wish'} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
