import { useEffect } from "react";

export function useSmoothScrollToHash() {
  useEffect(() => {
    setTimeout(() => {
      const hashEl =
        window.location.hash && document.querySelector(window.location.hash);
      if (hashEl) {
        smoothScrollToEl(hashEl);
      }
    }, 0);
  }, []);
}

export function smoothScrollToEl(el: Element) {
  const headerOffset = 100;
  const elementPosition = window.scrollY + el.getBoundingClientRect().top;
  window.scrollTo({
    top: elementPosition - headerOffset,
    behavior: "smooth",
  });
}

export function smoothScrollToElByQuerySelector(querySelector: string) {
  const target = document.querySelector(querySelector);
  if (target) {
    smoothScrollToEl(target);
  }
}
