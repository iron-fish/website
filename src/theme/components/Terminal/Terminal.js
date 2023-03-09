import React, { useCallback, useRef, createRef } from "react";
import clsx from "clsx";

import { InView } from "react-intersection-observer";

import styles from "./terminal.module.css";
import Termynal from "./termynal";

function Terminal({ command, options }) {
  let terminal = null;

  const elRefs = useRef([]);

  const children = command.map((element, i) => ({
    ...element,
    key: `span-${i}`,
    ref: elRefs.current[i] || createRef(),
  }));

  const ref = useCallback((node) => {
    if (node === null) return;
    terminal = new Termynal(node, children, options);
  }, []);

  const playAnimation = () => {
    terminal.restart(children);
  };

  const startAnimation = (inView) => {
    if (!inView) return;
    playAnimation();
  };

  return (
    <InView as="div" onChange={startAnimation}>
      <div className={clsx(styles.terminalContainer)}>
        <img
          src="/img/refresh.svg"
          className={clsx(styles.refreshButton)}
          onClick={playAnimation}
          alt="Restart the animation"
        />

        <div ref={ref} data-termynal>
          {children}
        </div>
      </div>
    </InView>
  );
}

export default Terminal;
