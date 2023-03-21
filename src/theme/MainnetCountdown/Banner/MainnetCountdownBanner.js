import React from "react";
import { useTimeLeft } from "../useTimeLeft";
import styles from "./MainnetCountdownBanner.module.css";

export function MainnetCountdownBanner() {
  const timeLeft = useTimeLeft();

  if (!timeLeft) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Countdown to Mainnet!</h2>

      <div className={styles.timeWrapper}>
        <div className={styles.timeItem}>
          <span className={styles.metric}>{timeLeft.days}</span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.metric}>{timeLeft.hours}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.metric}>{timeLeft.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.metric}>{timeLeft.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
}
