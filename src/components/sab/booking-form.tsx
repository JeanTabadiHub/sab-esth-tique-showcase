import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SERVICES } from "./data";

export function BookingForm({ onDone }: { onDone?: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return setDateError(null);
    const d = new Date(val);
    const day = d.getDay(); // 0 dim, 1 lun
    if (day === 0 || day === 1) {
      setDateError("L'institut est fermé le lundi et le dimanche.");
    } else {
      setDateError(null);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (dateError) {
      toast.error(dateError);
      return;
    }
    setSubmitting(true);
    // {/* À CONNECTER : service d'envoi (email / WhatsApp API / backend) */}
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Merci ! Nous vous recontactons rapidement.");
      (e.target as HTMLFormElement).reset();
      onDone?.();
    }, 700);
  };

  const inputCls =
    "w-full min-h-[48px] rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Nom complet *</span>
          <input required name="name" type="text" placeholder="Votre nom" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Téléphone *</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="90 00 00 00"
            className={inputCls}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">Prestation souhaitée *</span>
        <select required name="service" defaultValue="" className={inputCls}>
          <option value="" disabled>
            Choisir une prestation
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Date souhaitée *</span>
          <input
            required
            name="date"
            type="date"
            onChange={handleDate}
            min={new Date().toISOString().split("T")[0]}
            className={inputCls}
          />
          {dateError && <span className="mt-1 block text-xs text-destructive">{dateError}</span>}
        </label>
        <div>
          <span className="mb-1.5 block text-sm font-medium text-foreground">Créneau *</span>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-sm transition has-[:checked]:border-primary has-[:checked]:bg-primary/10">
              <input type="radio" name="slot" value="matin" required className="accent-primary" />
              Matin
            </label>
            <label className="flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-sm transition has-[:checked]:border-primary has-[:checked]:bg-primary/10">
              <input type="radio" name="slot" value="apres-midi" className="accent-primary" />
              Après-midi
            </label>
          </div>
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">Message (optionnel)</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Précisions, préférences..."
          className={inputCls + " resize-none"}
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full min-h-[52px] items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow disabled:opacity-60"
      >
        {submitting ? "Envoi..." : "Envoyer ma demande"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Vous pouvez aussi nous joindre directement sur WhatsApp au 91 49 46 50.
      </p>
    </form>
  );
}
