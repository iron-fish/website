import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import clsx from "clsx";
import styles from "./quickLinks.module.css";

function QuickLink({ link, title, seeMore, icon }) {
  return (
    <Link className={clsx(styles.quickLinkContainer)} to={useBaseUrl(link)}>
      <img
        className={clsx(styles.fish3)}
        src={`/img/onboarding/${icon}.svg`}
        role="decorative"
      />
      <div>
        <h2>{title}</h2>
        <span>{seeMore} ⭢</span>
      </div>
    </Link>
  );
}
function QuickLinks() {
  return (
    <div className={clsx(styles.quickLinksContainer)}>
      <QuickLink
        link="/docs/onboarding/installation-iron-fish"
        title="Install Iron Fish"
        seeMore="First steps"
        icon="disks"
      />
      <QuickLink
        link="/docs/onboarding/start-an-iron-fish-node"
        title="Spin up a node"
        seeMore="Get started"
        icon="spin"
      />
      <QuickLink
        link="/docs/onboarding/miner-iron-fish"
        title="Mine $IRON"
        seeMore="Get to work"
        icon="block"
      />
      <QuickLink
        link="/docs/onboarding/send-receive-iron-fish-transactions"
        title="$IRON transactions"
        seeMore="Read more"
        icon="transactions"
      />
    </div>
  );
}

export default QuickLinks;
