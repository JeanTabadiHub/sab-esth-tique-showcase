import { useState, useEffect, useCallback } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const IMAGES = [
  { src: g1, alt: "Soin du visage — traitement professionnel", span: "row-span-2" },
  { src: g2, alt: "Nail art coloré — french manucure multicolore", span: "" },
  { src: g3, alt: "Soin du visage — application par éponges", span: "" },
  { src: g4, alt: "French manucure — ongles aux couleurs pastel", span: "row-span-2" },
  { src: g5, alt: "L'espace onglerie du salon Sab' Esthétique", span: "" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null)),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % IMAGES.length : null)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="max-w-xl min-w-0">
            <span className="eyebrow">Galerie</span>
            <h2 className="mt-3 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl">
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
              className={`overflow-hidden rounded-2xl bg-muted cursor-pointer ${img.span}`}
              onClick={() => setLightbox(i)}
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image */}
          <img
            key={lightbox}
            src={IMAGES[lightbox].src}
            alt={IMAGES[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl animate-in zoom-in-95 duration-200"
          />

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {lightbox + 1} / {IMAGES.length}
          </span>
        </div>
      )}
    </>
  );
}
