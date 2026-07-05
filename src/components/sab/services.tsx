import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES } from "./data";
import { useBooking } from "./booking-context";

export function Services() {
  const [openId, setOpenId] = useState<string | null>(SERVICE_CATEGORIES[0].id);
  const { setOpen } = useBooking();

  return (
    <section id="prestations" className="bg-[var(--gradient-blush)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Nos prestations</span>
          <h2 className="mt-3 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl">
            Une carte complète, un soin à la fois.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Onze prestations pensées pour prendre soin de vous, dans le respect de votre peau et de votre temps.
          </p>
          {/* À COMPLÉTER : tarifs en attente du client */}
          <p className="mt-2 text-xs italic text-muted-foreground">
            Tarifs communiqués sur demande, ou directement à l'institut.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
          {SERVICE_CATEGORIES.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left transition hover:bg-muted/40 sm:px-8"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl text-foreground sm:text-3xl">{cat.title}</h3>
                    <p className="mt-1 truncate text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 px-5 pb-6 sm:px-8">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dashed border-border/60 pb-2 last:border-0"
                          >
                            <span className="truncate text-foreground">{item}</span>
                            {/* À COMPLÉTER : tarifs en attente du client */}
                            <span className="shrink-0 text-sm italic text-muted-foreground">
                              Tarif sur demande
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-8 font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow"
          >
            Réserver une prestation
          </button>
        </div>
      </div>
    </section>
  );
}
