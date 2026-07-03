import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { useBooking } from "./booking-context";
import { BRAND } from "./data";

export function Hero() {
  const { setOpen } = useBooking();
  // Accroche à valider avec la cliente :
  // 1. "L'art du détail, au bout des doigts."
  // 2. "Votre institut de confiance à Lomé."
  // 3. "Prenez soin de vous, on s'occupe du reste."
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Intérieur de l'institut Sab' Esthétique"
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-primary" /> Institut de beauté · Lomé
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            L'art du détail,
            <br />
            <em className="font-normal text-primary">au bout des doigts.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Manucure, soins du visage, microblading, extensions de cils… Un savoir-faire
            reconnu et une hygiène irréprochable, au cœur de Hedzranawoé.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-primary-glow"
            >
              Réserver un rendez-vous
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-border bg-background/70 px-6 text-base font-medium text-foreground backdrop-blur transition hover:bg-background"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <Star className="h-4 w-4 fill-primary/50 text-primary" />
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">{BRAND.rating}/5</strong> · {BRAND.reviewCount} avis Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
