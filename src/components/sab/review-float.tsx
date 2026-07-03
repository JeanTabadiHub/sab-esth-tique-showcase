import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { BRAND } from "./data";

export function ReviewFloat({ footerRef }: { footerRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  const observed = useRef(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el || observed.current) return;
    observed.current = true;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [footerRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="review-float"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          href={BRAND.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ pointerEvents: visible ? "auto" : "none" }}
          className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow sm:bottom-6 sm:left-6"
        >
          <Star className="h-4 w-4 fill-primary-foreground" />
          Donner un avis
        </motion.a>
      )}
    </AnimatePresence>
  );
}
