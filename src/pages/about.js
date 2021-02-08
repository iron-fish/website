import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import OpenPositions from "./components/OpenPositions";
import styles from "./about.module.css";

function AboutUs() {
  return (
    <>
      <Layout
        title={"About us"}
        description={
          "Who is behind Iron Fish - a fully secure, private, and untraceable cryptocurrency. Iron Fish is rapidly evolving. Our team and investors are experts in their fields."
        }
      >
        <header className={clsx(styles.header, "blue--header")}>
          <div
            className={clsx(
              styles.headerBackground,
              "blue--header--background"
            )}
          />
          <div className={clsx(styles.container)}>
            <p className={clsx(styles.mainTitle, "main--title")}>About Us</p>
            <img
              src="/img/about/about-3.png"
              role="decorative"
              className={clsx(styles.mainImage)}
            />
          </div>
        </header>
        <section className={clsx(styles.mainSection)}>
          <p className={clsx(styles.subTitle)}>Who we are today</p>
          <p>
            We are growing quickly, and Iron Fish is rapidly evolving. Our team
            members and investors are experts in their fields, and each person
            brings a diverse set of skills and experiences.
          </p>
          <p className={clsx(styles.subTitle2)}>Why ‘Iron Fish’?</p>
          <p>
            During WW2, the US recruited Native Americans to use their tribal
            languages to send secret communications to and from the battlefield
            – a system that was unbroken until it was declassified in the late
            60s. One of their code systems contained words that were directly
            translated from English to Navajo for common military words. Certain
            modern military words didn’t have a direct translation to Navajo,
            and so they had to improvise. The term for ‘submarine’ therefore
            became what directly translates to as ‘iron fish’.
            <br />
            <br />
            We chose this as our name because it shows the power of
            cryptography, how a complex modern concept can be described using
            relatively simple words, and it even has two tradable commodities
            (iron and fish) right in its name.
            <br />
            <br />
            Interested in learning more? Read more about the Code Talkers on the
            companion website to the traveling Smithsonian Institution
            exhibition, Native Words, Native Warriors.
          </p>
        </section>
        <OpenPositions />
      </Layout>
    </>
  );
}

export default AboutUs;
