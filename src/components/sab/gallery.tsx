import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

// À REMPLACER : photos réelles du salon fournies par la cliente
const IMAGES = [
  { src: g1, alt: "Manucure nude glossy", span: "row-span-2" },
  { src: g2, alt: "Extensions de cils", span: "" },
  { src: g3, alt: "Pédicure soignée", span: "" },
  { src: g4, alt: "Station de maquillage", span: "" },
  { src: g5, alt: "Sourcils microblading", span: "row-span-2" },
  { src: g6, alt: "Ambiance soin & bien-être", span: "" },
];

export function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="max-w-xl min-w-0">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Galerie</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Un aperçu de l'institut.
          </h2>
        </div>
        <a
          href="https://www.instagram.com/sabesthetique_/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Voir plus sur Instagram →
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl bg-muted ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
