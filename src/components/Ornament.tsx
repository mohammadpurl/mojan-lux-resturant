export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} fill="none" aria-hidden>
      <line x1="0" y1="6" x2="46" y2="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="52" cy="6" r="3" stroke="currentColor" strokeWidth="1" />
      <path d="M58 6 q4 -4 8 0 q-4 4 -8 0z" stroke="currentColor" strokeWidth="1" />
      <line x1="74" y1="6" x2="120" y2="6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gold">
      <span className="font-display italic text-base tracking-wide">{children}</span>
      <Ornament />
    </div>
  );
}
