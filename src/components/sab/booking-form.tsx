import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { SERVICES } from "./data";

export function BookingForm({ onDone }: { onDone?: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [dateOpen, setDateOpen] = useState(false);

  const isClosed = (d: Date) => {
    const day = d.getDay();
    return day === 0 || day === 1; // dim / lun
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateError =
    date && isClosed(date) ? "L'institut est fermé le lundi et le dimanche." : null;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Merci de choisir une date.");
      return;
    }
    if (dateError) {
      toast.error(dateError);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Merci ! Nous vous recontactons rapidement.");
      (e.target as HTMLFormElement).reset();
      setDate(undefined);
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
        <div className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">Date souhaitée *</span>
          <input
            type="hidden"
            name="date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            required
          />
          <Popover open={dateOpen} onOpenChange={setDateOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  inputCls,
                  "flex items-center justify-between gap-2 text-left",
                  !date && "text-muted-foreground/70",
                )}
              >
                <span className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  {date
                    ? format(date, "d MMMM yyyy", { locale: fr })
                    : "Choisir une date"}
                </span>
                <ChevronsUpDown className="h-4 w-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-[calc(100vw-2rem)] max-w-[340px] rounded-2xl border-border/60 bg-card p-0 shadow-[var(--shadow-elegant)]"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  if (d && !isClosed(d)) setDateOpen(false);
                }}
                locale={fr}
                weekStartsOn={1}
                disabled={(d) => d < today || isClosed(d)}
                initialFocus
                className={cn("pointer-events-auto p-3")}
              />
            </PopoverContent>
          </Popover>
          {dateError && <span className="mt-1 block text-xs text-destructive">{dateError}</span>}
        </div>
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
