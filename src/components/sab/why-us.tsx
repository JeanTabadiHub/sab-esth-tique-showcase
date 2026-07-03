import { Sparkles, HeartHandshake, ShieldCheck, Ear } from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Hygiène irréprochable",
    text: "Un cadre soigné de la tête aux pieds — nos clientes le remarquent en premier.",
  },
  {
    icon: Sparkles,
    title: "Un vrai savoir-faire",
    text: "Manucures parfaites, soins pointus, extensions et microblading maîtrisés.",
  },
  {
    icon: Ear,
    title: "À l'écoute, transparente",
    text: "On explique, on adapte, on refuse quand un soin n'est pas fait pour vous.",
  },
  {
    icon: HeartHandshake,
    title: "L'accueil qui fait revenir",
    text: "Une équipe chaleureuse qui donne envie de prendre soin de soi.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Pourquoi Sab'</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Ce que nos clientes retiennent de nous.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Ces quatre piliers ressortent, encore et encore, dans les avis laissés sur Google.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-bronze)] text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
