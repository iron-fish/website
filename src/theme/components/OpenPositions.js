import React from "react";
import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./openPositions.module.css";

import { useHistory } from "@docusaurus/router";

function Position({ title, time, location, link }) {
  const history = useHistory();

  function handleClick() {
    window.open(link, "_blank");
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
        <div className={clsx(styles.positions)}>
          <Position
            title="Cryptographer"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/8c384a79-5ffe-4b27-9387-46e1410db067"
          />
          <Position
            title="Engineering Manager"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/35a389f1-0883-455b-8c19-b9e20a936e2b"
          />
          <Position
            title="Front End Engineer"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/8c7ef6a8-a8b4-40da-a5b1-7e54853f6dd9"
          />
          <Position
            title="Full Stack Engineer"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/76dd75e4-f8d9-44a7-9693-4462696a8ceb"
          />
          <Position
            title="Software Engineer"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/e0b384ba-64c6-4e31-8542-8ba0d9b01797"
          />

          <Position
            title="Executive Assistant"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/77d38d59-97f9-4ba2-95ff-ee8f8f1d3cc9"
          />
          <Position
            title="Community Manager"
            time="Full-Time"
            location="SF / Remote"
            link="https://jobs.lever.co/ironfish/21c1357b-b41e-4474-bbe8-1690b6c3ed17"
          />
        </div>
      </div>
    </section>
  );
}

export default OpenPositions;
