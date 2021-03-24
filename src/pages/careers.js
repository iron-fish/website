import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./careers.module.css";
import OpenPositions from "../theme/components/OpenPositions";

function Employee({ firstName, title, description, linkedin, id }) {
  return (
    <div>
      <img src={`/img/careers/block-${id}.svg`} role="presentation" />
      <p>
        <a className={clsx(styles.firstName)} href={linkedin} target="_blank">
          {`${firstName}\n${title}`}
        </a>
      </p>
      <p
        className={clsx(styles.tagline)}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

function Careers() {
  return (
    <>
      <Layout
        title={"We are Hiring!"}
        description={
          "Join the team! We are growing quickly, and Iron Fish is rapidly evolving. Come join us on our path to changing the currency world!"
        }
        className={clsx(styles.careers)}
      >
        <header>
          <h1 className={clsx(styles.h1, "main--title")}>
            Careers at Iron Fish
          </h1>
        </header>
        <section className={clsx(styles.sectionCareers)}>
          <div className={clsx(styles.sectionRow)}>
            <div className={clsx(styles.intro)}>
              <p className={clsx(styles.careersSubtitle, "main--subtitle")}>
                About the team
              </p>
              <p>
                We are craftspeople who are excited to work on uncharted
                territory in decentralized computing and cutting edge
                cryptography. While currently headquartered in San Francisco, we
                are a remote-first company. We welcome talented people from all
                backgrounds, throughout the United States and Canada.
              </p>
              <Link
                className={clsx(styles.button, "button button--outline")}
                to="#open-positions"
              >
                View Open Positions
              </Link>
            </div>
            <img src="/img/careers/submarine.gif" alt="" role="presentation" />
          </div>
        </section>
        <section
          className={clsx(
            styles.sectionCareers,
            styles.sectionCareersEmployees
          )}
        >
          <p className="main--subtitle">Who you'll work with</p>
          <div className={clsx(styles.employees)}>
            <Employee
              id="1"
              firstName="Elena"
              title="CEO"
              linkedin="https://www.linkedin.com/in/elenanadolinski/"
              description=" Elena is the Founder and CEO of Iron Fish. Previously worked at Microsoft and Airbnb. She really didn't want her insurance to know when she eats pizza."
            />
            <Employee
              id="3"
              firstName="Derek"
              title="Engineer"
              linkedin="https://www.linkedin.com/in/derek-guenther/"
              description="Former Microsoft & Uber, he enjoys experimenting with new technologies when he’s not catching up on fiction or eating a bowl of Reese’s Puffs."
            />
            <Employee
              id="5"
              firstName="Jason"
              title="Engineer"
              linkedin="https://www.linkedin.com/in/jason-spafford-14892511/"
              description="Former Uber. He is capable of writing complex weighted graph algorithms while dancing to electro music. A crypto noodle straightener if you will."
            />
            <Employee
              id="2"
              firstName="Skylar"
              title="Designer"
              linkedin="https://www.linkedin.com/in/skylar-richard-1b8999a4/"
              description="International award winning designer who hates the snow and cold weather, albeit lives in Canada, complains about it relentlessly yet reluctant to move."
            />
            <Employee
              id="6"
              firstName="You?"
              title="Fish"
              linkedin="mailto:joinus@ironfish.network"
              description="We are growing quickly, and Iron Fish is rapidly evolving. If you are interested in working with Cryptocurrency and having an impact, <a href='mailto:joinus@ironfish.network'>contact us</a>."
            />
            <div></div>
          </div>
        </section>
        <section className={clsx(styles.blueSection)}>
          <div>
            <div className={clsx(styles.benefitsTitle)}>
              <p>What we value</p>
              <img
                className={clsx(styles.fish1)}
                src="/img/careers/fish-large-left.svg"
                role="presentation"
              />
              <img
                className={clsx(styles.fish2)}
                src="/img/careers/fish-small-right.svg"
                role="presentation"
              />
            </div>
            <div className={clsx(styles.benefits)}>
              <div>
                <p>Flexibility</p>
                <p>
                  We are remote first! Work where you are most comfortable, in
                  any timezone.
                </p>
              </div>
              <div>
                <p>Diversity</p>
                <p>
                  We are committed to creating and maintaining a welcoming and
                  inclusive company.
                </p>
              </div>
              <div>
                <p>Growth</p>
                <p>
                  We hire talented people, and encourage team members to learn
                  from and teach one another.
                </p>
              </div>
              <div>
                <p>Expertise</p>
                <p>
                  We are supported by some of the top VCs in the cryptocurrency
                  world with access to top cryptographers for our field.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={clsx(styles.benefitsTitle)}>
              <p>What we offer</p>
              <img
                className={clsx(styles.fish3)}
                src="/img/careers/fish-large-right.svg"
                role="presentation"
              />
              <img
                className={clsx(styles.fish4)}
                src="/img/careers/fish-small-left.svg"
                role="presentation"
              />
            </div>
            <div className={clsx(styles.benefits)}>
              <div>
                <p>Health benefits</p>
                <p>
                  100% of most insurance premiums, dental and vision, and over
                  100 plans to pick from.
                </p>
              </div>
              <div>
                <p>Family leave</p>
                <p>
                  We offer parental and family leave. We know the importance of
                  loved ones!
                </p>
              </div>
              <div>
                <p>Equipment</p>
                <p>
                  You should feel comfortable at work — from a powerful machine
                  to the right desk.
                </p>
              </div>
              <div>
                <p>Significant equity</p>
                <p>
                  We want team members to have a real stake in our success and
                  that reflects in our equity offer.
                </p>
              </div>
              <div>
                <p>Paid Time Off</p>
                <p>
                  We want you to take the time off you need to relax and
                  recharge. In addition to federal holidays, we offer accrued
                  time off of up to 15 days per calendar year, we close the
                  office for winter break, and sick time is accrued at up to 8
                  days per calendar year.
                </p>
              </div>
              <div>
                <p>Free Lunch</p>
                <p>If you’re with us in our San Francisco office!</p>
              </div>
            </div>
          </div>
        </section>
        <OpenPositions />
      </Layout>
    </>
  );
}

export default Careers;
