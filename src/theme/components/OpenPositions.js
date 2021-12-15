import React from "react";
import Link from "@docusaurus/Link";

import axios from "axios";
import clsx from "clsx";

import styles from "./openPositions.module.css";

const LEVER_ORGANIZATION = 'ironfish';

function Position({ title, time, location, link }) {
  return (
    <Link className={clsx(styles.positionLink)} to={link}>
      <div className={clsx(styles.position)}>
        <p className={clsx(styles.title)}>{title}</p>
        <p className={clsx(styles.time)}>{time}</p>
        <p className={clsx(styles.location)}>{location}</p>
        <img src="/img/careers/arrow.svg" alt="link" />
      </div>
    </Link>
  );
}

function OpenPositions() {
  const [jobData, setJobData] = React.useState({ type: 'loading' })

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await axios.get(`https://api.lever.co/v0/postings/${LEVER_ORGANIZATION}?mode=json`)
        setJobData({ type: 'success', data: result.data.sort((a, b) => a.text - b.text) })
      } catch (error) {
        setJobData({ type: 'error', error: error })
      }
    }
    fetchJobs()
  }, [])

  return (
    <section className={clsx(styles.section)} id="open-positions">
      <div className={clsx(styles.about)}>
        <div className={clsx(styles.aboutWrap)}>
          <p className={clsx(styles.title)}>Open Positions</p>
          <p className={clsx(styles.description)}>
            Interested? We'd love to hear from you. We're currently hiring for
            the following positions. If you don’t see the right role for you but
            are passionate about our mission, please contact us at&nbsp;
            <a href="mailto:joinus@ironfish.network">joinus@ironfish.network</a>
            .
          </p>
        </div>
      </div>
      <div className={clsx(styles.container)}>
        {jobData.type === 'loading' && <div className={clsx(styles.loading)}>Loading...</div>}

        {jobData.type === 'success' &&
          <div className={clsx(styles.positions)}>
            {jobData.data.map((job) => <Position
              title={job.text}
              time={job.categories.commitment || ''}
              location={job.categories.location || ''}
              link={job.hostedUrl}
            />)}
          </div>
        }

        {jobData.type === 'error' && <div className={clsx(styles.loading)}>
          Visit our <Link to={`https://jobs.lever.co/${LEVER_ORGANIZATION}`}>Lever page</Link> to view our job listings.
        </div>}
      </div>
    </section>
  );
}

export default OpenPositions;
