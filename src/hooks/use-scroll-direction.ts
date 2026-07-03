import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < threshold) {
          setHidden(false);
        } else if (y > last + 4) {
          setHidden(true);
        } else if (y < last - 4) {
          setHidden(false);
        }
        last = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}
