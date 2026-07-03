import { useBooking } from "./booking-context";

export function FinalCTA() {
  const { setOpen } = useBooking();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-bronze)] px-6 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-16 sm:py-20">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Offrez-vous un moment chez Sab' Esthétique.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Un rendez-vous, un soin choisi avec soin, une équipe qui écoute.
            La beauté sans compromis, à Lomé.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full bg-background px-8 text-base font-medium text-foreground shadow-lg transition hover:bg-secondary"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
}
