import { useEffect, useState } from 'react';
import { useTimeLeft } from '../useTimeLeft';
import styles from './MainnetCountdownBanner.module.css';
import { LOCAL_STORAGE_KEY, MODAL_DISMISS_EVENT } from '../constants';
import { useIsClient } from 'usehooks-ts';
import { Collapse } from '@/lib/ui';

function useRenderOnCustomEvent() {
  const [, setRender] = useState(false);

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
  useRenderOnCustomEvent();
  const timeLeft = useTimeLeft();
  const isClient = useIsClient();
  const hasLocalstorage = typeof localStorage !== 'undefined';

  if (!timeLeft || !hasLocalstorage || !isClient) return null;

  const hasSeen = localStorage.getItem(LOCAL_STORAGE_KEY) === 'true';

  return (
    <Collapse in={hasSeen}>
      <div className={`${styles.wrapper}`}>
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
    </Collapse>
  );
}
