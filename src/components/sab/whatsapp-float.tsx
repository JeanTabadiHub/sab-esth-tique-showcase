import { BRAND } from "./data";

export function WhatsAppFloat() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.4.7 4.7 1.9 6.7L3 29l7.2-2.3a12.4 12.4 0 0 0 5.8 1.5h.1c6.9 0 12.5-5.5 12.5-12.4C28.6 8.6 22.9 3 16 3Zm0 22.6a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-4.3 1.4 1.4-4.2-.3-.4a10.2 10.2 0 0 1-1.6-5.4c0-5.6 4.6-10.2 10.4-10.2 2.8 0 5.4 1.1 7.3 3 2 2 3 4.6 3 7.3 0 5.6-4.6 10.1-10.3 10.1Zm5.7-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8.3 8.3 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.7l-.1-.3c0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5 0-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.1.2 2.3 3.5 5.5 4.9 2.2.9 3 1 4 .9.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    </a>
  );
}
