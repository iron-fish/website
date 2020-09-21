import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './careers.module.css';

function Careers() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title='Careers at Iron Fish'
      description="Come work with us at Iron Fish and change the way payments work">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>Come join us!</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>We are building a team of excellent individuals who are excited to work on uncharted territory in decentralized computing and cutting edge cryptography! We welcome talented people from all backgrounds, and we're now in SF and are also hiring remotely in US / Canada.
</p>
          <div className={styles.listJobs}>
            <div>
              <p>Design</p>
              <ul>
                <li><a href="/jd-designer">Principal UI/UX Designer</a></li>
              </ul>
            </div>
            <div>
              <p>Engineering</p>
              <ul>
                <li><a href="/jd-backend">Backend Engineer</a></li>
                <li><a href="/jd-senior-backend">Senior / Staff Backend Engineer</a></li>
                <li><a href="/jd-mobile">Senior / Staff Mobile Engineer</a></li>
              </ul>
            </div>
          </div>

        </div>
      </header>
      <main>
        <section className={styles.benefits}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.feature)}>
                <div className="text--center">
                  <img className={styles.benefitImage} src={'/img/careers/undraw_code_typing_7jnv.svg'} alt={'Backed by VC investors'} />
                </div>
              </div>
              <div className={clsx('col', styles.feature)}>
                <h3>About Iron Fish</h3>
                <p>Iron Fish's mission is to enable the free flow of assets through easy-to-use, accessible, private cryptocurrency. <strong>The company was founded in 2018 by Elena Nadolinski.</strong> We are a small startup and have support from some of the top VCs in the cryptocurrency world (Electric Capital, Metastable, A Capital, and many others). <strong>The team is composed of members who previously worked at Airbnb, Facebook, Microsoft, Uber.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.feature)}>
                <h3>Remote first company</h3>
                <p>We are now in San Francisco, CA and are also hiring remotely in the US / Canada. If you are located outside of the US & Canada and think you would be a great fit, please apply!</p>
              </div>
              <div className={clsx('col', styles.feature)}>
                <div className="text--center">
                  <img className={styles.benefitImage} src={'/img/careers/undraw_group_chat_unwm.svg'} alt={'Backed by VC investors'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.feature)}>
                <div className="text--center">
                  <img className={styles.benefitImage} src={'/img/careers/undraw_conference_call_b0w6.svg'} alt={'Backed by VC investors'} />
                </div>
              </div>
              <div className={clsx('col', styles.feature)}>
                <h3>Diversity and Belonging</h3>
                <p>At Iron Fish, we celebrate and support our differences. We know employing a team rich in diverse thoughts, experiences, and opinions allow our employees, our product, and our community to flourish. Iron Fish is an equal opportunity workplace. We are dedicated to equal employment opportunities regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity, or Veteran status.</p>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.benefits}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.feature)}>
                <h3>Our Benefits</h3>
                <ul>
                  <li>We cover 100% of insurance premiums and offer generous parental and family leave.</li>
                  <li>We cover your laptop and the equipment you need to perform your work at your best!</li>
                  <li>We want you to take the time you need to relax and recharge.</li>
                </ul>
              </div>
              <div className={clsx('col', styles.feature)}>
                <div className="text--center">
                  <img className={styles.benefitImage} src={'/img/careers/undraw_online_wishes_dlmr.svg'} alt={'Backed by VC investors'} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Careers;
