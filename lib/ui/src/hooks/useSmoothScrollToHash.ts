import { useEffect } from "react";

export function useSmoothScrollToHash() {
  useEffect(() => {
    setTimeout(() => {
      const hashEl =
        window.location.hash && document.querySelector(window.location.hash);
      if (hashEl) {
        const headerOffset = 100;
        const elementPosition = hashEl.getBoundingClientRect().top;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  }, []);
}
