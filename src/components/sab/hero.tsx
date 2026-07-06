import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/sab-logo.png.asset.json";
import { useBooking } from "./booking-context";
import { BRAND } from "./data";

export function Hero() {
  const { setOpen } = useBooking();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--gradient-blush)]" />
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
        {/* décorations florales douces */}
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[var(--nude)]/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--blush)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <img
              src={logo.url}
              alt="Sab' Esthétique"
              className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
            />
            <div className="min-w-0">
              <span className="eyebrow block text-[var(--gold)]">
                Institut de beauté · Lomé
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />
                {BRAND.rating}/5 · {BRAND.reviewCount} avis Google
              </span>
            </div>
          </div>

          <h1 className="font-serif text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            <em className="font-normal italic">Beauté</em>
            <span className="text-primary"> &amp; </span>
            <em className="font-normal italic">éclat naturel</em>
            <span className="block text-primary italic">au bout des doigts.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Manucure, soins visage, microblading, extensions de cils…
            Un savoir-faire reconnu et une hygiène irréprochable, au cœur de Hedzranawoé.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-primary-glow"
            >
              Réserver un rendez-vous
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-border bg-card/70 px-6 text-base font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
