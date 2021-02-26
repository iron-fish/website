import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import clsx from "clsx";
import styles from "./faucetAd.module.css";

function FaucetAd() {
  return (
    <div className={clsx(styles.adContainer)}>
      <h1>Get ready for some $IRON</h1>
      <Link
        className={clsx(styles.button, "button button--outline")}
        to={useBaseUrl('docs/onboarding/iron-fish-faucet')}
      >
        Turn on the faucet
      </Link>
    </div>
  );
}

export default FaucetAd;
