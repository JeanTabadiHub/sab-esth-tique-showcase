import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useBooking } from "./booking-context";
import { BRAND } from "./data";

export function StickyHeader() {
  const hidden = useScrollDirection(80);
  const { setOpen } = useBooking();

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-3 flex max-w-6xl items-center gap-3 rounded-full border border-border/60 bg-background/85 px-4 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:mx-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--gradient-bronze)] font-serif text-lg text-primary-foreground">
            S
          </span>
          <span className="truncate font-serif text-lg text-foreground sm:text-xl">
            {BRAND.name}
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#prestations" className="transition hover:text-foreground">Prestations</a>
          <a href="#avis" className="transition hover:text-foreground">Avis</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow md:ml-4"
        >
          Réserver
        </button>
      </div>
    </motion.header>
  );
}
