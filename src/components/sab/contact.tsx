import { MapPin, Phone, Clock } from "lucide-react";
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

          <div className="mt-10 space-y-6">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gradient-rose)] text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-foreground">Adresse</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{BRAND.address}</p>
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Voir l'itinéraire sur Google Maps →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gradient-rose)] text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-foreground">Téléphone</p>
                <a
                  href={BRAND.phoneHref}
                  className="mt-1 block text-sm text-primary underline-offset-4 hover:underline"
                >
                  {BRAND.phone}
                </a>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs text-muted-foreground hover:text-foreground"
                >
                  Ou écrivez-nous sur WhatsApp →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gradient-rose)] text-primary-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-foreground">Horaires</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"
                    >
                      <span className={h.closed ? "text-muted-foreground italic" : "text-foreground"}>
                        {h.day}
                      </span>
                      <span className={h.closed ? "text-muted-foreground italic" : "text-foreground"}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
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
