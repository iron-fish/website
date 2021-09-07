import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import clsx from "clsx";
import styles from "./testnetAd.module.css";

function TestnetAd() {
  // TODO: Replace this
  const url = useBaseUrl('docs/onboarding/iron-fish-faucet')

  return (
    <div className={clsx(styles.testnetAdContainer)}>
      <h1>Earn points. Earn $IRON</h1>
      <Link
        className={clsx(styles.button, "button button--outline")}
        to={url}
      >
        Get Incentivized
      </Link>
    </div>
  );
}

export default TestnetAd;
