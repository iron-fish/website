import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./tokenomics.module.css";

function Img({
  src,
  alt = "",
  maxWidth = "100%"
}) {
  return <img className={styles.img} src={src} alt={alt} style={{ maxWidth: maxWidth }} />;
}

function Divider() {
  return <hr className={styles.divider} />
}

function Tokenomics() {
  return (
    <Layout
      title="Tokenomics"
      description="Distribution details of the Iron Fish token"
    >
      <main className={styles.main}>
        <p className={clsx("main--title")}>
          Tokenomics
        </p>
        <div className={styles.wrapper}>
          <p>
            Iron Fish is a Layer-1 chain based on Proof of Work. <em>Every single</em>{" "}
            Iron Fish transaction is encrypted, hiding sensitive user information on who
            the sender, recipient, or the amount of transaction was with an accompanying
            zero-knowledge proof (ZKP). Every Iron Fish wallet has a private key, public
            key, and a viewing key. The creator of the wallet has the ability to share
            out this view key and reveal their transactional history.
          </p>
          <p>
            Our mission is for Iron Fish to be the privacy layer for <em>all</em>{" "}
            crypto, letting assets from other chains be transferred over to Iron Fish to
            gain the benefit of privacy. The Iron Fish community spans countries,
            languages, and backgrounds — including miners, engineers, and privacy
            advocates.
          </p>
          <p>
            The Iron Fish Incentivized Testnet ran December 2021 - February 2023 in
            three phases; during Phase 2, we surpassed 39m fully shielded transactions,
            making Iron Fish one of the largest processor of ZKPs.
          </p>
          <p>Mainnet launches April 20, 2023.</p>
          <Divider />
          <h2 id="token-supply--distribution-data">
            Token Supply &amp; Distribution Data
          </h2>
          <p>
            In this document, we present a breakdown of our token supply and
            distribution. Note that this is a high level overview — we provide
            visualizations as often as possible, but there is nuance within distribution
            that may not be within the scope of this post. We have rounded numbers where
            necessary for better overall understanding.
          </p>
          <Divider />
          <h2 id="context--definitions">Context &amp; Definitions</h2>
          <ul>
            <li>
              <strong>Genesis Block:</strong> The first block in the Iron Fish
              blockchain. The Iron Fish genesis block includes 42M tokens.
            </li>
            <li>
              <strong>Emissions Curve:</strong> The Emissions curve describes how the
              total supply changes over time due to token economics. For Iron Fish,
              every time a miner mines a block, they are rewarded with new coins that
              contribute to an inflation schedule, meaning that with each block the
              total supply of tokens increases. More on the emissions curve below.
            </li>
            <li>
              <strong>Circulating Supply:</strong> The total number of coins that are
              available for transfer (not locked up).
            </li>
          </ul>
          <Divider />
          <h2 id="emissions-curve">Emissions Curve</h2>
          <p>
            The mining reward (how many coins a miner is allocated for successfully
            mining a block) is tied to the Iron Fish emissions curve. The emissions
            curve starts out with 42M coins in the genesis. After the first year, the
            total for new coins created due to mining rewards is 1/4th of the genesis,
            or 10.5M coins. Every subsequent year fewer and fewer coins will be created,
            until a terminal supply of 256,970,400 coins is reached (roughly at year 150
            post genesis).
          </p>
          <p>
            The formula to determine how many new coins will be minted for a particular
            year after launch is:
          </p>
          <Img src="/img/whitepaper/tokenomics/01-mint-formula.avif" maxWidth="400px" />
          <p>
            Where <em>s</em> is the initial supply of the genesis block of 42 million
            coins, <em>k</em> is the decay factor of -.05, and <em>x</em> is the year
            after mainnet launch (starting from 0).
          </p>
          <p>
            The Iron Fish “year” in block count is 525,600 blocks to one calendar year
            (assuming 60-second block times). We use the above formula to calculate the
            block reward using the Iron Fish "year", rounded to the nearest .125 of a
            coin:
          </p>
          <Img src="/img/whitepaper/tokenomics/02-block-reward.avif" maxWidth="600px" />
          <p>
            Therefore, the block reward and total supply for the first few years after
            launch would be:
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Years after launch</strong>
                </td>
                <td>
                  <strong>Block reward (60s block times)</strong>
                </td>
                <td>
                  <strong>Total supply</strong>
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>42,000,000.00</td>
              </tr>
              <tr>
                <td>0-1</td>
                <td>20</td>
                <td>52,512,000.00</td>
              </tr>
              <tr>
                <td>1-2</td>
                <td>19</td>
                <td>62,498,400.00</td>
              </tr>
              <tr>
                <td>2-3</td>
                <td>18.125</td>
                <td>72,024,900.00</td>
              </tr>
            </tbody>
          </table>
          <p>
            The emissions curve using the block reward formula mentioned above, with a
            cap of 256,970,400 coins for total supply, would look like this:
          </p>
          <Img
            src="/img/whitepaper/tokenomics/03-emissions-curve.avif"
            alt=""
          />
          <p>
            The inflation graph below shows how the circulating supply is redistributed.
          </p>
          <p>
            Unlike most Proof-of-Stake Layer-1s, Iron Fish has aggressive inflation in
            the first couple of years — this shifts the majority of token supply to
            miners and other community members more quickly.
          </p>
          <Img
            src="/img/whitepaper/tokenomics/04-inflation.avif"
            alt=""
          />
          <Divider />
          <h2 id="allocation--supply-overview">Allocation &amp; Supply Overview</h2>
          <p>
            The Iron Fish genesis block contains 42M tokens. We provide a deeper look at
            these sections later in the article.
          </p>
          <Img
            src="/img/whitepaper/tokenomics/05-genesis-distribution.avif"
            alt=""
          />
          <p>The chart below shows the 4-year circulating supply.</p>
          <Img
            src="/img/whitepaper/tokenomics/06-circulating-supply.avif"
            alt=""
          />
          <p>Relevant notes:</p>
          <ul>
            <li>
              For every insider (investor, advisor, employee) there is a 1-year lock-up
              period, meaning that no tokens can be traded or transferred by an insider
              for 12 months after the mainnet event.
            </li>
            <li>
              For every insider (investor or employee) <em>vested tokens</em> will
              become eligible for transfer monthly over a 24-month period (including the
              mandatory 12-month lock-up period) post mainnet.
            </li>
            <li>
              For every employee there is a 4 year vesting, 1 year cliff on top of the
              lockup schedules.
            </li>
          </ul>
          <p>
            We can also look at the circulating supply broken up over the next few years.
          </p>
          <Img
            src="/img/whitepaper/tokenomics/07-distribution-12-mo.avif"
            alt=""
          />
          <Img
            src="/img/whitepaper/tokenomics/08-distribution-24-mo.avif"
            alt=""
          />
          <Img
            src="/img/whitepaper/tokenomics/09-distribution-36-mo.avif"
            alt=""
          />
          <Img
            src="/img/whitepaper/tokenomics/10-distribution-48-mo.avif"
            alt=""
          />
          <p>
            As time goes on, the vast majority of coins will be in the hands of miners
            and other community members, as shown in the graph below.
          </p>
          <Img
            src="/img/whitepaper/tokenomics/11-distribution-terminal-supply.avif"
            alt=""
          />
          <Divider />
          <h2 id="genesis-block-category-explanations">
            Genesis Block Category Explanations
          </h2>
          <p>
            <em>
              Note: As noted above, all insiders have 12 month lockup, followed by an 12
              month unlock period. This includes investors, employees, and advisors.
            </em>
          </p>
          <h3 id="iron-fish-foundation--18">Iron Fish Foundation — 18%</h3>
          <p>
            The tokens allocated to the Iron Fish Foundation (founded on April 20th,
            2023) are to enable the Foundation in its goal of engaging and growing the
            Iron Fish community, encouraging ecosystem growth, and increasing open
            source development
          </p>
          <h3 id="testnet-airdrop--225">Testnet Airdrop — 2.25%</h3>
          <p>
            The <em>Testnet Airdrop</em> consists of 945,000 tokens distributed to
            eligible testnet participants.
          </p>
          <h3 id="future-airdrops--225">Future Airdrops — 2.25%</h3>
          <p>
            These tokens are being held by the Iron Fish Foundation for future community
            incentivization and engagement. The Foundation is committed to distributing
            the airdrops impartially, within any associated parameters. While we do not
            currently have specifics for these airdrops, your best bet to be an active
            and contributing community member.
          </p>
          <h3 id="series-preseed--51">Series Preseed — 5.1%</h3>
          <p>
            None of this would have been possible without the financial support and
            continuous mentoring of our preseed investors. Thank you 🙏.
          </p>
          <h3 id="series-seed--99">Series Seed — 9.9%</h3>
          <p>
            When Iron Fish needed to grow, these investors were there to help. In this
            round we welcomed Electric Capital, Balaji, and other leaders in the crypto
            space.
          </p>
          <h3 id="series-a--145">Series A — 14.5%</h3>
          <p>
            a16z Crypto, Sequoia, and Elad Gil led our Series A. Their belief in us
            provided the resources to accelerate towards mainnet.
          </p>
          <h3 id="advisors--6">Advisors — 0.6%</h3>
          <p>
            We are thankful for our advisors' guidance and support as we've continued to
            grow.
          </p>
          <h3 id="core-team--374">Core Team — 37.4%</h3>
          <p>
            The Iron Fish core builders are passionate, determine people who put in
            hours, sweat, and, occasionally, swearing to ensure we created the strongest
            product possible. Iron Fish would, quite literally, not exist without them.
          </p>
          <h3 id="if-labs--5">IF Labs — 5%</h3>
          <p>
            IF Labs is a wholly independent company, focused on building and maintaining
            the Iron Fish product. IF Labs will be able to use its portion of the
            genesis block to appeal to talent, incentivizing top developers to join.
            Guided and advised by the community, IF Labs developers and creators will
            expand the Iron Fish ecosystem and ensure it only grows stronger.
          </p>
          <h3 id="future-endowment--5">Future Endowment — 5%</h3>
          <p>
            This additional supply of tokens for the Iron Fish Foundation will help
            ensure continued Foundation operation. It is subject to the 12 month
            lockup/12 month unlock periods.
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Tokenomics;
