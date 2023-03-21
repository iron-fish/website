import React, { useEffect, useState } from "react";
import { useMailchimpSubscribe } from "./useMailchimpSubscribe";
import { useTimeLeft } from "./useTimeLeft";
import styles from "./MainnetCountdown.module.css";

const SESSION_STORAGE_KEY = "hasSeenMainnetCountdown";

const MESSAGES = {
  EMAIL_ERROR: "Please provide a valid email address.",
  SUBMITTING: "Submitting...",
  ERROR: "Something went wrong, please try again.",
  DUPLICATE: "You are already subscribed.",
  SUCCESS: "Success!",
};

export function MainnetCountdownContent({ onDismiss }) {
  const { subscribe, status, handleEmailChange } = useMailchimpSubscribe();
  const timeLeft = useTimeLeft();

  useEffect(() => {
    if (timeLeft) {
      document.body.style.overflow = "hidden";
    } else {
      onDismiss();
    }

    return () => {
      document.body.style.overflow = "initial";
    };
  }, [timeLeft, onDismiss]);

  if (!timeLeft) return null;

  return (
    <div className={styles.shade}>
      <div className={styles.modal}>
        <div className={styles.closeButtonWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            role="button"
            onClick={onDismiss}
          >
            <path
              stroke="#fff"
              strokeOpacity=".8"
              strokeWidth="2.5"
              d="M1 24 24 1M24.0002 24l-23-23"
            />
          </svg>
        </div>
        <div className={styles.contentSizer}>
          <h2 className={styles.title}>
            Countdown
            <br />
            to Mainnet!
          </h2>

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

          {["IDLE", "EMAIL_ERROR"].includes(status) && (
            <div className={styles.emailWrapper}>
              <input
                className={styles.input}
                placeholder="Your Email Address"
                type="text"
                onChange={handleEmailChange}
              />
              <button className={styles.button} onClick={subscribe}>
                Get Notified
              </button>
            </div>
          )}

          {status in MESSAGES && (
            <div className={styles.message}>{MESSAGES[status]}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function MainnetCountdown() {
  const [hasDismissed, setHasDismissed] = useState(false);

  if (typeof sessionStorage === "undefined") return null;

  const hasSeen = sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";

  return hasDismissed || hasSeen ? null : (
    <MainnetCountdownContent
      onDismiss={() => {
        setHasDismissed(true);
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      }}
    />
  );
}
