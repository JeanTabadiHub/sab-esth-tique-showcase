import { forwardRef } from "react";
import { Instagram, Facebook } from "lucide-react";
import { BRAND } from "./data";
import logo from "@/assets/logo.png";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.4 8.4 0 0 1-4.5-1.3v6.5a6.3 6.3 0 1 1-6.3-6.3c.3 0 .6 0 .8.1v3.2a3.1 3.1 0 1 0 2.2 3V3h3.3Z" />
    </svg>
  );
}

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-[var(--prune)]/40 bg-[var(--prune)] text-[var(--nude)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div className="min-w-0 max-w-md">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--creme)] p-1.5">
                <img src={logo} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="font-serif text-3xl italic text-[var(--creme)]">
                {BRAND.name}
              </p>
            </div>
            <p className="eyebrow mt-4 text-[var(--gold)]">Beauté &amp; éclat naturel</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--nude)]/80">
              Institut de beauté à Hedzranawoé, Lomé. Manucure, soins, microblading,
              extensions de cils et bien-être.
            </p>
            <a
              href={BRAND.phoneHref}
              className="mt-5 inline-block text-sm text-[var(--creme)] underline-offset-4 hover:underline"
            >
              {BRAND.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
            <nav className="flex flex-col gap-2 text-sm">
              <span className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Navigation
              </span>
              {[
                { id: "prestations", label: "Prestations" },
                { id: "avis", label: "Avis" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[var(--nude)]/90 hover:text-[var(--creme)]"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <span className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Suivez-nous
              </span>
              <div className="flex gap-3">
                {[
                  { href: BRAND.instagram, label: "Instagram", Icon: Instagram },
                  { href: BRAND.tiktok, label: "TikTok", Icon: TikTokIcon },
                  { href: BRAND.facebook, label: "Facebook", Icon: Facebook },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--nude)]/25 text-[var(--nude)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--nude)]/15 pt-6 text-xs text-[var(--nude)]/60">
          © {new Date().getFullYear()} {BRAND.name} — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
