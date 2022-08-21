import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"

import clsx from "clsx"
import styles from "./careers.module.css"
import OpenPositions from "../theme/components/OpenPositions"
import Block from "../theme/components/Block"

const employees = [
  {
    name: "Elena",
    title: "CEO",
    linkedin: "elenanadolinski",
    description:
      "Elena is the Founder and CEO of Iron Fish. Previously worked at Microsoft and Airbnb. She really didn't want her insurance to know when she eats pizza.",
    r: "#F6A143",
    l: "#FFCD85",
    t: "#F2D8B4",
  },
  {
    name: "Derek",
    title: "Engineer",
    linkedin: "derek-guenther",
    description:
      "Former Microsoft & Uber, he enjoys experimenting with new technologies when he’s not catching up on fiction or eating a bowl of Reese’s Puffs.",
    r: "#003fbf",
    l: "#0055ff",
    t: "#C0D5ff",
  },
  {
    name: "Jason",
    title: "Engineer",
    linkedin: "jason-spafford-14892511",
    description:
      "Former Uber. He is capable of writing complex weighted graph algorithms while dancing to electro music. A crypto noodle straightener if you will.",
    r: "#cfbe00",
    l: "#ffec1f",
    t: "#fff79e",
  },
  {
    name: "Skylar",
    title: "Designer",
    linkedin: "skylar-richard-1b8999a4",
    description:
      "An international award-winning designer who hates the snow and cold weather, albeit lives in Canada, complains about it relentlessly yet is reluctant to move.",
    r: "#EB59B6",
    t: "#FDF5FB",
    l: "#F3ADDB",
  },
  {
    name: "Rohan",
    title: "Engineer",
    linkedin: "rohanjadvani",
    description:
      "Former Citadel & Snap. He enjoys biking around New York or reading about type theory while waiting for his cinnamon rolls to finish baking.",
    r: "#54952F",
    l: "#A1D77F",
    t: "#E9FDDC",
  },
  {
    name: "Jenah",
    title: "HR / Recruiting",
    linkedin: "jenahbielza",
    description:
      "Loves the letter A. Can plan your trip to Hawaii while finding the best health benefit plans and judging your resume.",
    r: "#B57E5B",
    l: "#EAB898",
    t: "#FFE2CF",
  },
  
  {
    name: "Alex",
    title: "Engineer",
    linkedin: "adcrn",
    description:
      "Resident hipster. Wrote a music player in Rust to listen to his massive (legal) music collection. Also wrote his own open-source BitTorrent tracker. No connection.",
    r: "#1D0070",
    l: "#3600CF",
    t: "#AE92FF",
  },
  {
    name: "Daniel",
    title: "Engineer",
    linkedin: "danield9tqh",
    description:
      "Enjoys a good team contact sport (maybe engineering qualifies??). Also enjoys watching math videos (3b1b) and talking about Functional Programming",
    r: "#00E2FF",
    l: "#7ff0ff",
    t: "#bff7ff",
  },

  {
    name: "Mat",
    title: "Engineer",
    linkedin: "mathew-geist-a8772851",
    description:
      "Likes interesting tech. Likes privacy. Loves when they are combined. Will probably talk to you about Rust unprompted.",
    r: "#5698f9",
    l: "#d4e5fd",
    t: "#aacbfc",
  },

  {
    name: "Lawrence",
    title: "Eng Manager",
    linkedin: "lwisne",
    description:
      "Cat herder. Aspiring Florida Man. Enjoys playing chess, running long distances, and hitting launch deadlines.",
    r: "#39703C",
    l: "#6C9E6C",
    t: "#A2C697",
  },

  {
    name: "You?",
    title: "Fish",
    linkedin: "mailto:joinus@ironfish.network",
    description: (
      <>
        We are growing quickly, and Iron Fish is rapidly evolving. If you are
        interested in working with Cryptocurrency and having an impact,{" "}
        <a href="mailto:joinus@ironfish.network">contact us</a>.
      </>
    ),
    r: "custom",
  },
]

function Employee({ name, title, description, linkedin, id, r, t, l }) {
  return (
    <div>
      <Block color={r} light={t} mid={l} />
      <p>
        {linkedin ? (
          <a
            className={clsx(styles.firstName)}
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
          >
            {`${name}\n${title}`}
          </a>
        ) : (
          <span className={clsx(styles.firstName)}>{`${name}\n${title}`}</span>
        )}
      </p>
      <p className={clsx(styles.tagline)}>{description}</p>
    </div>
  )
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
                territory in decentralized computing and cutting-edge
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
            {employees.map(e => (
              <Employee {...e} key={e.name} />
            ))}
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
                  We are remote-first! Work where you are most comfortable, in
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
                  We offer parental and family leaves. We know the importance of
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
                  We want you to take the time you need to relax and recharge.
                  In addition to 12 federal holidays and an office closure for
                  winter break, we offer a generous time-off policy. For
                  salaried employees, we have flexible vacation and sick days,
                  where you can take as much time as you think is appropriate.
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
  )
}

export default Careers
