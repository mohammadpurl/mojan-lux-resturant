import { Send } from "lucide-react";

export function FloatingBale() {
  return (
    <a
      href="https://ble.ir"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 border border-gold bg-background px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-gold shadow-2xl transition hover:bg-gold hover:text-primary-foreground"
      aria-label="رزرو با بله"
    >
      <Send className="h-3.5 w-3.5" />
      رزرو میز
    </a>
  );
}
