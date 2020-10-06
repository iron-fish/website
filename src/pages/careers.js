import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const features = [
  {
    title: 'Open positions',
    description: (
      <>
          <p><strong>Design</strong></p>
          <ul>
            <li><a href="/jd-designer">Principal UI/UX Designer</a></li>
          </ul>
          <p><strong>Engineering</strong></p>
          <ul>
            <li><a href="/jd-backend">Backend Engineer</a></li>
            <li><a href="/jd-senior-backend">Senior / Staff Backend Engineer</a></li>
            <li><a href="/jd-mobile">Senior / Staff Mobile Engineer</a></li>
          </ul>
      </>
    ),
  },
  {
    title: 'About Iron Fish',
    description: (
      <>
        Iron Fish's mission is to enable the free flow of assets through easy-to-use, accessible, private cryptocurrency. <strong>The company was founded in 2018 by Elena Nadolinski.</strong>
        <br />
        We are a small startup and have support from some of the top VCs in the cryptocurrency world (Electric Capital, Metastable, A Capital, and many others). <strong>The team is composed of members who previously worked at Airbnb, Facebook, Microsoft, Uber.</strong>
      </>
    ),
  },
  {
    title: 'Remote first company',
    description: (
      <>
        We are now in San Francisco, CA and are also hiring remotely in the US / Canada. If you are located outside of the US & Canada and think you would be a great fit, please apply!
      </>
    ),
  },
  {
    title: 'Diversity and Belonging',
    description: (
      <>
        At Iron Fish, we celebrate and support our differences. We know employing a team rich in diverse thoughts, experiences, and opinions allow our employees, our product, and our community to flourish. Iron Fish is an equal opportunity workplace. We are dedicated to equal employment opportunities regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity, or Veteran status.
      </>
    ),
  },
  {
    title: 'Our Benefits',
    description: (
      <>
        <p>We cover 100% of insurance premiums and offer generous parental and family leave.</p>
        <span class="split" />
        <p>We cover your laptop and the equipment you need to perform your work at your best!</p>
        <span class="split" />
        <p>We want you to take the time you need to relax and recharge.</p>
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

function Careers() {
  return (
    <Layout
      title='Careers at Iron Fish'
      description="Come work with us at Iron Fish and change the way payments work">
      <div className="container">
        <header className={clsx(styles.section)}>
          <h1 className={clsx('hero__title', styles.heroTitle, styles.h1Title)}>
            Come join us!
          </h1>
          <p>We are building a team of excellent individuals who are excited to work on uncharted territory in decentralized computing and cutting edge cryptography! We welcome talented people from all backgrounds, and we're now in SF and are also hiring remotely in US / Canada.</p>
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

export default Careers;
