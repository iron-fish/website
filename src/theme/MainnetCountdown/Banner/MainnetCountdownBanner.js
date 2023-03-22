import React, { useEffect } from "react";
import { useTimeLeft } from "../useTimeLeft";
import styles from "./MainnetCountdownBanner.module.css";
import { SESSION_STORAGE_KEY, MODAL_DISMISS_EVENT } from "../constants";

function useRenderOnCustomEvent() {
  const [, setRender] = React.useState(false);

  useEffect(() => {
    function handleEvent() {
      setRender((r) => !r);
    }

    window.addEventListener(MODAL_DISMISS_EVENT, handleEvent);

    return () => {
      window.removeEventListener(MODAL_DISMISS_EVENT, handleEvent);
    };
  }, []);
}

export function MainnetCountdownBanner() {
  const timeLeft = useTimeLeft();
  useRenderOnCustomEvent();

  if (!timeLeft) return null;

  if (typeof sessionStorage === "undefined") return null;

  const hasSeen = sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";

  return (
    <div
      className={`${styles.wrapper} ${!hasSeen ? styles.wrapperHidden : ""}`}
    >
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
