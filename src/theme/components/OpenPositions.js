import React from "react";
import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./openPositions.module.css";

import { useHistory } from "@docusaurus/router";

function Position({ title, time, location, link }) {
  const history = useHistory();

  function handleClick() {
    history.push(link);
  }

  return (
    <div className={clsx(styles.position)} onClick={handleClick}>
      <p className={clsx(styles.title)}>
        <Link className={clsx(styles.button)} to={link}>
          {title}
        </Link>
      </p>
      <p className={clsx(styles.time)}>{time}</p>
      <p className={clsx(styles.location)}>{location}</p>
      <img src="/img/careers/arrow.svg" alt="link" />
    </div>
  );
}

function OpenPositions() {
  return (
    <section className={clsx(styles.section)} id="open-positions">
      <div className={clsx(styles.background)} />
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.about)}>
          <p className={clsx(styles.title)}>Open Positions</p>
          <p className={clsx(styles.description)}>
            Interested? We'd love to hear from you. We're currently hiring for
            the following positions. If you don’t see the right role for you but
            are passionate about our mission, please contact us at&nbsp;
            <a href="mailto:joinus@ironfish.network">joinus@ironfish.network</a>
            .
          </p>
        </div>
        <div className={clsx(styles.positions)}>
          <Position
            title="Cryptographer"
            time="Full-Time"
            location="SF / Remote"
            link="/jd-cryptographer"
          />
          <Position
            title="Full-Stack Engineer"
            time="Full-Time"
            location="SF / Remote"
            link="/jd-full-stack"
          />
          <Position
            title="Backend Engineer"
            time="Full-Time"
            location="SF / Remote"
            link="/jd-backend"
          />
        </div>
      </div>
    </section>
  );
}

export default OpenPositions;
