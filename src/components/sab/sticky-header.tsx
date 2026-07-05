import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useBooking } from "./booking-context";
import logo from "@/assets/sab-logo.png.asset.json";

export function StickyHeader() {
  const hidden = useScrollDirection(80);
  const { setOpen } = useBooking();

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 rounded-full border border-border/70 bg-background/90 py-2 pl-2 pr-2 shadow-[var(--shadow-soft)] backdrop-blur-md sm:py-2.5 sm:pl-4 sm:pr-3">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src={logo.url}
            alt="Sab' Esthétique"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="hidden font-serif text-xl italic text-foreground sm:inline">
            Sab' <span className="text-primary">Esthétique</span>
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#prestations" className="transition hover:text-foreground">Prestations</a>
          <a href="#avis" className="transition hover:text-foreground">Avis</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow md:ml-4"
        >
          Réserver
        </button>
      </div>
    </motion.header>
  );
}
