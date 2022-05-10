import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./faq.module.css";

const questions = [
  {
    id: "privacy",
    title: "Why build a new privacy coin?",
    imageLeft: "/img/faq/fish.svg",
    description: {
      __html:
        "Existing privacy coins — such as Monero, Zcash, and Grin — all have drawbacks on privacy, accessibility, or both. Iron Fish does not compromise on privacy, while still being easy to access.",
    },
  },
  {
    id: "different",
    title: "How do you differ from other cryptocurrencies?",
    description: {
      __html: `Many popular cryptocurrencies are permanent ledgers that broadcast all the details of a transaction—similar to tweeting out your bank statement. Yet privacy is a requirement for a true global currency. Participating in the network of other coins is cumbersome  both to the end user and the miner.
      <br/><br/>
      Our combination of privacy and accessibility means that anyone, anywhere, can have access to private, decentralized money.
    `,
    },
  },
  {
    id: "focus",
    imageRight: "/img/faq/blocks.svg",
    title: "Why focus on privacy?",
    description: {
      __html: `Right now, digital payments are fundamentally lacking in privacy — they are surveilled, analyzed, collected, and sold. With every online purchase, your metadata for that transaction is stored (from what IP you used, to your physical location, to your purchase history, and more).
      <br/><br/>
    Privacy leads to innovation, social evolution. Much like https paved the way for entire industries through online ecommerce, we believe private transactions over a blockchain will enable frictionless global payments and new industries of borderless products and companies. Historically, this type of financial privacy has only been available to the rich, via offshore accounts. With Iron Fish, anyone can have an even better alternative to a Swiss bank account on their phone.`,
    },
  },
  {
    id: "how",
    title: "How are you achieving privacy?",
    imageLeft: "/img/faq/ghost.svg",
    description: {
      __html: `We are working with cutting edge cryptography using zero-knowledge. Zero-knowledge proofs (ZKPs) are a breakthrough tool in cryptography that prove honest computation. By using ZKPs we can build private transactions that fully hide the sender, the recipient and the amount, while providing a proof that the transaction is valid. Every transaction on Iron Fish is private—no one sees the details of an account unless the owner grants read-only permissions via view keys.
      <br/><br/>
    This level of privacy is unprecedented when compared to other cryptocurrencies or traditional banking plans.`,
    },
  },
  {
    id: "why",
    title: "Why does accessibility matter?",
    description: {
      __html: `Most cryptocurrencies are made by engineers, for engineers, which results in a high barrier to entry. There are over 4 billion internet users, on over 2 billion computers across the world. And yet, there are only around 10,000 fully active-listening Bitcoin nodes. If we want truly decentralized money, we need to make it easier to use and participate in the network.`,
    },
  },
  {
    id: "pow",
    imageRight: "/img/faq/algue.svg",
    title: "Why use Proof-of-Work (PoW)?",
    description: {
      __html: `We’ve done thorough and extensive research on the merits and drawbacks of PoW, Proof-of-Stake (PoS), and Delegated Proof of Stake systems. Ultimately, PoW systems are overall more secure, have much better understood attack vectors, and have a better path towards being fairly decentralized. PoS systems can sometimes lead to better UI/UX and faster block times, but the pros do not outweigh the cons when looking at their algorithms holistically.`,
    },
  },
  {
    id: "hiring",
    title: "Are you hiring?",
    description: {
      __html: `Yes! We’re working with some of the most exciting tools in cryptography and decentralized systems to create a frictionless, internet-native global currency system. Interested? Check out our <a href="/careers">Careers page</a>.`,
    },
  },
  {
    id: "more",
    title: "Have more questions?",
    description: {
      __html: `We have an extensive community-sourced FAQ on <a href="https://coda.io/d/Iron-Fish-Community_dvILN4uyPEb/FAQs_suOCT#_luKqk">our wiki</a>.`,
    },
  },
];

function Question({ title, id, description, imageLeft, imageRight }) {
  return (
    <section className={clsx(styles.questionSection, { [styles[id]]: true })}>
      <div className={clsx(styles.questionImage)}>
        {imageLeft && <img role="presentation" src={imageLeft} />}
      </div>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.sectionContent)}>
          <div>
            <h2>{title}</h2>
            <p
              className={clsx(styles.sectionDescription)}
              dangerouslySetInnerHTML={description}
            />
          </div>
        </div>
      </div>
      <div className={clsx(styles.questionImage)}>
        {imageRight && <img role="presentation" src={imageRight} />}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <Layout
      title="FAQ"
      description="What is Iron Fish - $IRON - Why is privacy important - Why build a new anonymous coin"
    >
      <main className={clsx(styles.faqMain)}>
        <p className={clsx(styles.mainTitle, "main--title")}>
          Frequently Asked Questions
        </p>
        {questions &&
          questions.length > 0 &&
          questions.map((props) => <Question key={props.id} {...props} />)}
      </main>
    </Layout>
  );
}

export default FAQ;
