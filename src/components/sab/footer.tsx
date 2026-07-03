import { forwardRef } from "react";
import { Instagram, Facebook } from "lucide-react";
import { BRAND } from "./data";

// TikTok icon (Lucide n'en fournit pas de version épurée)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.4 8.4 0 0 1-4.5-1.3v6.5a6.3 6.3 0 1 1-6.3-6.3c.3 0 .6 0 .8.1v3.2a3.1 3.1 0 1 0 2.2 3V3h3.3Z" />
    </svg>
  );
}

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="border-t border-border/60 bg-foreground text-background/85">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="min-w-0 max-w-md">
            <p className="font-serif text-3xl text-background">{BRAND.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              Institut de beauté à Hedzranawoé, Lomé. Manucure, soins, microblading, extensions de cils et bien-être.
            </p>
            <a
              href={BRAND.phoneHref}
              className="mt-4 inline-block text-sm text-background hover:text-primary-glow"
            >
              {BRAND.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
            <nav className="flex flex-col gap-2 text-sm">
              <span className="mb-1 text-xs uppercase tracking-[0.2em] text-background/50">Navigation</span>
              <a href="#prestations" className="hover:text-primary-glow">Prestations</a>
              <a href="#avis" className="hover:text-primary-glow">Avis</a>
              <a href="#contact" className="hover:text-primary-glow">Contact</a>
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <span className="mb-1 text-xs uppercase tracking-[0.2em] text-background/50">Suivez-nous</span>
              <div className="flex gap-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border border-background/20 transition hover:border-primary-glow hover:text-primary-glow"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="grid h-11 w-11 place-items-center rounded-full border border-background/20 transition hover:border-primary-glow hover:text-primary-glow"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full border border-background/20 transition hover:border-primary-glow hover:text-primary-glow"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-xs text-background/60">
          © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
