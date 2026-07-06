import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { BRAND, HOURS } from "./data";
import { BookingForm } from "./booking-form";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">Nous trouver</span>
          <h2 className="mt-3 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl">
            Passez nous voir.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Nous vous accueillons du mardi au samedi, dans un cadre soigné pensé pour votre bien-être.
          </p>

          <div className="mt-8 space-y-4">
            {/* Adresse */}
            <div className="group rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)] transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-rose)] text-primary-foreground shadow-[var(--shadow-soft)] transition group-hover:scale-105">
                  <MapPin className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Adresse</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{BRAND.address}</p>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Voir l'itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="group rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)] transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-rose)] text-primary-foreground shadow-[var(--shadow-soft)] transition group-hover:scale-105">
                  <Phone className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Téléphone</p>
                  <a
                    href={BRAND.phoneHref}
                    className="mt-1 block text-base font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {BRAND.phone}
                  </a>
                  <a
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Écrivez-nous sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="group rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)] transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-rose)] text-primary-foreground shadow-[var(--shadow-soft)] transition group-hover:scale-105">
                  <Clock className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Horaires</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {HOURS.map((h) => (
                      <li
                        key={h.day}
                        className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border/40 pb-1 last:border-0 last:pb-0"
                      >
                        <span className={h.closed ? "text-muted-foreground italic" : "text-foreground"}>
                          {h.day}
                        </span>
                        <span
                          className={
                            h.closed
                              ? "text-muted-foreground italic"
                              : "font-medium text-foreground"
                          }
                        >
                          {h.h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <iframe
                title="Localisation Sab' Esthétique"
                src="https://www.google.com/maps?q=Sab'+Esth%C3%A9tique,+H%C3%A9dzranaw%C3%A9,+Lom%C3%A9&hl=fr&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 border-t border-border/60 px-5 py-3 text-sm font-medium text-primary transition hover:bg-muted/40"
            >
              <span className="inline-flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                Ouvrir dans Google Maps
              </span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Réservation</p>
          <h3 className="mt-2 font-serif text-3xl text-foreground">
            Réservez votre rendez-vous.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Nous vous confirmons votre créneau rapidement.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
