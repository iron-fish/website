import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./crypto-privacy-comparison.module.css";

function PrivacyComponent({ title, children }) {
  return (
    <div className={clsx(styles.privacyComponent)}>
      <div>
        <p className={clsx(styles.title)}>{title}</p>
        {children}
      </div>
    </div>
  );
}

function PrivacyList({ name, bullets, link, linkName }) {
  const image = (enabled) =>
    enabled ? (
      <img alt="Yes" src="/img/privacy/good.svg" />
    ) : (
      <img alt="No" src="/img/privacy/bad.svg" />
    );

  return (
    <div>
      <p className={clsx(styles.title)}>{name}</p>
      <div>
        {bullets &&
          bullets.map(({ good, value }, index) => (
            <p key={index}>
              {image(good)} <span>{value}</span>
            </p>
          ))}
      </div>
      <p className={clsx(styles.link)}>
        <a href={link}>Learn More about {linkName}</a>
      </p>
    </div>
  );
}

function Privacy() {
  return (
    <Layout
      title="Private Cryptocurrencies comparison"
      description="Learn how different cryptocurrencies handle privacy and how is Iron Fish a better private coin"
    >
      <main className={clsx(styles.faqMain)}>
        <header>
          <h1 className="main--title">
            We take privacy features to a whole new level
          </h1>

          <p className="tagline">
            For a cryptocurrency to truly be private, it needs to be able to do
            each of the things listed below.
          </p>
        </header>

        <p className={clsx(styles.privacySubtitle, "main--subtitle")}>
          Privacy mechanisms
        </p>

        <div className={clsx(styles.privacyComponentList)}>
          <PrivacyComponent title="Sapling Zero Knowledge Proofs">
            <PrivacyList
              name="Iron Fish"
              link="#ironfish"
              linkName="Sapling Zero Knowledge Proofs (Iron Fish)"
              bullets={[
                {
                  good: true,
                  value:
                    "All transactions private with strongest zk-SNARK based privacy mechanism (Sapling)",
                },
                {
                  good: true,
                  value: "View key and memo field support for compliance",
                },
                {
                  good: true,
                  value: "Full node can be ran entirely in the browser",
                },
                {
                  good: true,
                  value: "Future support for custom assets, fully private",
                },
                {
                  good: true,
                  value:
                    "Built to be simple — 15s block times, WebRTC based networking layer ",
                },
              ]}
            />
            <PrivacyList
              name="Zcash"
              link="#zcash"
              linkName="Learn More about Sapling Zero Knowledge Proofs (Zcash)"
              bullets={[
                {
                  good: true,
                  value:
                    "Pioneered ZKP-based privacy and invented Sapling with the help of world leading cryptographers",
                },
                {
                  good: true,
                  value:
                    "Optional privacy (95% of Zcash transactions are not fully shielded)",
                },
                {
                  good: true,
                  value: "View key and memo field support for compliance",
                },
              ]}
            />
          </PrivacyComponent>
          <PrivacyComponent title="Ethereum Smart Contracts">
            <PrivacyList
              name="Zether, EY's Nightfall, Tornado Cash, and others"
              link="#ethereum"
              linkName="Ethereum Smart Contracts"
              bullets={[
                {
                  good: true,
                  value:
                    "Smart contract solutions with ZKPs to provide some privacy",
                },
                {
                  good: false,
                  value: "Linkable in practice",
                },
                {
                  good: true,
                  value: "View key and memo field support for compliance",
                },
              ]}
            />
          </PrivacyComponent>
          <PrivacyComponent title="Mimblewimble">
            <PrivacyList
              name="Grin, Beam, Tari (upcoming)"
              link="#mimblewimble"
              linkName="Mimblewimble"
              bullets={[
                {
                  good: false,
                  value: "Linkable transactions by design weakens privacy",
                },
                {
                  good: false,
                  value:
                    "Interactive protocol requires both parties to be online to form a transaction (Note: Beam uses a variation that abstracts the interactive nature of Mimblewimble)",
                },
              ]}
            />
          </PrivacyComponent>
          <PrivacyComponent title="Bitcoin Privacy Tools">
            <PrivacyList
              name="Mixers, Coinjoin"
              link="#bitcoin"
              linkName="Bitcoin privacy tools"
              bullets={[
                {
                  good: false,
                  value: "Can send to offline recipient",
                },
                {
                  good: false,
                  value: "Slow down the transaction time. Can be expensive",
                },
              ]}
            />
          </PrivacyComponent>
        </div>

        <div className={clsx(styles.textContent)}>
          <h2 id="bitcoin">Bitcoin Privacy Tools (Mixers, CoinJoin, etc)</h2>

          <p>
            Transacting in Bitcoin is akin to tweeting out your transaction
            details to the world. From very early on, Bitcoin developers have
            worked on privacy preserving tools for Bitcoin and came up with
            concepts of Mixers, CoinJoin, CoinSwap, and many others.
          </p>
          <p>
            A Mixer (aka tumbler), is used to hide a direct link between a
            sender and the recipient. If Alice wanted to send 1 bitcoin to Bob,
            instead of sending it directly, she can instead use a Mixer. A Mixer
            service will wait to collect such requests from other users, and
            eventually distribute intended funds to recipients, but not from
            their original senders.
          </p>

          <img src="/img/privacy/bitcoin-privacy-tools.svg" />

          <p>
            A Mixer is custodial which means that users must trust the Mixing
            service to honor a user’s request to send the appropriate amount to
            the intended recipient, and not keep any records after all the
            transactions are settled.
          </p>
          <p>
            CoinJoin is a non-custodial service and works very similarly to a
            Mixer, but users have to coordinate among themselves to manually
            execute mixing their transactions together. Wallet services like
            Wasabi for Bitcoin help with that coordination.
          </p>
          <p>
            Mixers, CoinJoin, and other such services ultimately do NOT provide
            strong privacy guarantees. Static analysis can be applied to
            identify Mixers, tumblers, and even CoinJoin transactions. Multiple
            research papers have shown using various, and oftentimes simple,
            techniques that a{" "}
            <strong>
              great majority (>90%) of transactions using a mixer or coinjoin
              services are identified (
              <a href="https://arxiv.org/pdf/2010.16274.pdf" target="_blank">
                source
              </a>
              )
            </strong>
            .
          </p>

          <h2 id="ethereum">Ethereum Smart Contracts (Tornado Cash, etc)</h2>

          <p>
            <a href="/blog/2021/03/03/bitcoin-ethreum-privacy">
              Ethereum does not give any privacy guarantees
            </a>
            . However, Ethereum does support smart contracts (arbitrary programs
            validated on the blockchain) and various projects have created
            “shielded pool” smart contracts to obfuscate ether (ETH) and other
            Ethereum assets. Some examples of these are Zether, EY’s Nightfall,
            and Tornado Cash. These privacy mechanisms vary, but a high level
            perspective they all work something like this:
          </p>
          <p>
            A user wanting to obfuscate their funds would first deposit funds
            into a shielded pool smart contract (e.g. Tornado Cash). They can
            then move those funds privately within that smart contract to other
            accounts. The recipient would then withdraw those funds when they’re
            ready.
          </p>

          <img src="/img/privacy/ethereum-smart-contract.svg" />

          <p>
            (Note that Tornado Cash requires deposits and withdraws to be
            strictly in set denominations of .1, 1, 10, 100 ETH)
          </p>
          <p>
            There are several caveats to this design: moving funds inside the
            privacy preserving smart contract still requires a transaction, and
            in Ethereum all transactions are public and reveal which address
            made what action. Even the action of moving funds within the
            shielded pool smart contract leaks some information. A user also has
            to remember that if a specific amount (like 1.337 ETH) is deposited
            and withdrawn, that could potentially link the sender and the
            recipient.
          </p>
          <p>
            The bigger flaw however, is that these protocols suffer from being
            built on top of a fundamentally transparent system where deposits
            and withdraws must be made public. From a practical standpoint, the
            overall design for all privacy preserving solutions on top of
            Ethereum, even those that use zero-knowledge proofs, closely
            resemble the privacy guarantees of previously mentioned Mixers.
          </p>
          <p>
            “While mixers, CoinJoins and solutions like Tornado Cash can make
            tracing funds more difficult, Chainalysis can often still follow
            funds through them,” Maddie Kennedy from Chainalysis via Coindesk (
            <a
              href="https://www.coindesk.com/developers-of-ethereum-privacy-tool-tornado-cash-smash-their-keys"
              target="_blank"
            >
              source
            </a>
            )
          </p>
          <p>
            Ultimately all privacy preserving tools that are built on top of
            transparent systems like Bitcoin or Ethereum result in transactions
            that can be linked, traced, and identified.
          </p>

          <h2 id="confidential_transactions">
            Confidential Transactions and Ring Signatures (Monero, Mobilecoin)
          </h2>

          <p>
            Privacy coins are projects designed from the ground up to focus on
            preserving privacy, the oldest being Monero.
          </p>

          <h3>Monero</h3>

          <p>
            Monero was initially an implementation of the Cryptonote protocol,
            which had many significant flaws rendering a large majority of its
            transactions traceable, according to a research paper from
            Princeton, Carnegie Mellon, Boston University, MIT, and the
            University of Illinois at Urbana-Champaign (
            <a href="https://arxiv.org/pdf/1704.04299/" target="_blank">
              source
            </a>
            ). Since then, Monero transitioned to rely on Confidential
            Transactions and Ring Signatures for its main privacy technique (for
            a detailed description see the{" "}
            <a
              href="https://web.getmonero.org/library/Zero-to-Monero-2-0-0.pdf"
              target="_blank"
            >
              Zero to Monero paper
            </a>
            ).
          </p>
          <p>
            Despite Monero’s improvements and transition to using Confidential
            Transactions and Ring Signatures, the protocol is still
            fundamentally susceptible to deanonymization attacks due to the
            nature of how Monero works. A Bitcoin transaction directly reveals
            which UTXO (output) is being spent, while Monero obfuscates that
            information by mixing in other such outputs and using them as
            decoys.
          </p>

          <img src="/img/privacy/ring-signature.svg" />

          <p>
            Researchers have{" "}
            <a href="https://youtu.be/9s3EbSKDA3o" target="_blank">
              criticized decoys
            </a>{" "}
            for privacy guarantees and numerous research and papers have since
            come out further exploring Monero vulnerabilities (such as this{" "}
            <a
              href="https://twitter.com/MihailoBjelic/status/1126878887886106629"
              target="_blank"
            >
              one
            </a>{" "}
            and this{" "}
            <a href="https://eprint.iacr.org/2020/593.pdf" target="_blank">
              one
            </a>
            ). Monero vulnerabilities go past being just theoretical —
            <a
              href="https://www.coindesk.com/ciphertrace-monero-cryptocurrency-payments-tracing-dhs"
              target="_blank"
            >
              CipherTrace
            </a>{" "}
            claims to have de-anonymized Monero transactions and IRS gave away
            over $1M in grants to Chainalysis and Integra FCC to further provide
            de-anonymization tools for Monero.
          </p>

          <h3>Mobilecoin</h3>

          <p>
            Mobilecoin a privacy coin that took Mobero’s privacy technique and
            relies on SGX technology to provide mobile support. Unfortunately,{" "}
            <a
              href="https://www.wired.com/story/plundervolt-intel-chips-sgx-hack/"
              target="_blank"
            >
              time
            </a>{" "}
            and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Foreshadow_(security_vulnerability)"
              target="_blank"
            >
              time
            </a>{" "}
            and{" "}
            <a
              href="https://www.theregister.com/2020/11/14/intel_sgx_physical_security/"
              target="_blank"
            >
              time
            </a>{" "}
            again, new{" "}
            <a
              href="https://arstechnica.com/information-technology/2020/03/hackers-can-steal-secret-data-stored-in-intels-sgx-secure-enclave/"
              target="_blank"
            >
              SGX vulnerabilities
            </a>{" "}
            have been discovered, so much so that it can’t be seriously
            recommended for production use anymore.
          </p>

          <h2 id="mimblewimble">Mimblewimble (Grin, Beam)</h2>

          <h3>Grin</h3>

          <p>
            Grin is a privacy coin that uses an interactive protocol and
            Pedersen Commitments to hide transaction details. Since the protocol
            is interactive, both the sender and the receiver must be online for
            a transaction to be formed. The protocol also does not natively
            support public addresses, and so usually the user’s public IP is
            used as a “wallet address” instead which might reveal the user’s
            physical location.
          </p>

          <h3>Beam</h3>

          <p>
            Beam is a privacy coin that also implemented the Mimblewimble
            protocol, however they modified the protocol to handle pseudo public
            addresses.
          </p>
          <p>
            From a privacy standpoint, the biggest flaw is that most outputs and
            inputs of a Mimblewimble transaction are traceable (similar to how a{" "}
            <a href="/blog/2021/03/03/bitcoin-ethreum-privacy">
              Bitcoin transaction is traceable
            </a>
            ). One experiment showed that{" "}
            <a href="https://medium.com/dragonfly-research/breaking-mimblewimble-privacy-model-84bcd67bfe52">
              96% of Grin transactions can be traced
            </a>
            .
          </p>

          <h2 id="zcash">Sapling with Zero Knowledge Proofs (Zcash)</h2>

          <p>
            The Sapling protocol utilizing Zero-Knowledge Proofs (specifically
            zk-SNARKs) has the highest privacy guarantees when compared to all
            other privacy techniques. This protocol allows transactions to have
            all sensitive data encrypted and completely unlikable.
          </p>
          <p>
            Zcash is a privacy coin project and predecessor to the Zerocash
            protocol. In Zcash a transaction can be transparent (identical to a
            Bitcoin transaction from a privacy preserving perspective) and
            shielded.
          </p>
          <p>
            Although the privacy guarantees of the Sapling protocol are very
            strong, in Zcash less than 5% of all transactions are fully
            shielded. This is due to Zcash shielded transactions being fairly
            difficult for a normal user to use, with limited wallet support.
          </p>

          <h2 id="ironfish">Sapling with Zero Knowledge Proofs (Iron Fish)</h2>

          <p>
            Iron Fish is built on top of the Sapling protocol utilizing
            Zero-Knowledge Proofs (specifically zk-SNARKs). As mentioned
            earlier, the Sapling protocol has the highest privacy guarantees of
            all other privacy techniques. To learn more, check out how Iron Fish
            creates <a href="/docs/whitepaper/5_account">Accounts</a> and{" "}
            <a href="/docs/whitepaper/6_transaction">Transactions</a> using the
            Sapling protocol.
          </p>
          <p>
            In contrast to Zcash, all Iron Fish transactions are fully shielded.
            Iron Fish always protects the user with a strong focus on usability
            to make privacy accessible and easy to use.
          </p>
          <p>
            We believe privacy is a right—offering fully-private payments, with
            every transaction. We also understand that regulatory compliance is
            necessary. Every Iron Fish account provides view keys for optional
            disclosure. Individual transaction details can also be shared with
            the help of transaction decryption keys.
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Privacy;
