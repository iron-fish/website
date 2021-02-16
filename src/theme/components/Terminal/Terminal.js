import React, { useCallback, useRef, createRef } from "react";

import { InView } from "react-intersection-observer";

import styles from "./terminal.module.css";
import Termynal from "./termynal";

function Terminal({ command }) {
  let terminal = null;

  const elRefs = useRef([]);

  const children = command.map((element, i) => ({
    ...element,
    key: `span-${i}`,
    ref: elRefs.current[i] || createRef(),
  }));

  const ref = useCallback((node) => {
    if (node === null) return;
    terminal = new Termynal(node, children);
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
      <div
        ref={ref}
        onClick={playAnimation}
        title="Restart the animation"
        data-termynal
      >
        {children}
      </div>
    </InView>
  );
}

export default Terminal;
