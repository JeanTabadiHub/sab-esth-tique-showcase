import { Star } from "lucide-react";
import { BRAND, REVIEWS } from "./data";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            "h-4 w-4 " +
            (i <= n ? "fill-primary text-primary" : "fill-muted text-muted")
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="avis" className="bg-[var(--gradient-blush)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Avis clients</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Ce que vous en dites.
            </h2>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl text-foreground">{BRAND.rating}</span>
              <div>
                <Stars n={4} />
                <p className="mt-1 text-xs text-muted-foreground">
                  Basé sur {BRAND.reviewCount} avis Google
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-t border-border/60 pt-4">
                <span className="truncate font-medium text-foreground">{r.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Voir tous les avis sur Google →
          </a>
        </div>
      </div>
    </section>
  );
}
