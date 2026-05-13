import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = { href: string; label: string } | { to: "/gallery" | "/menu"; label: string };

const links: NavLink[] = [
  { href: "/#home", label: "خانه" },
  { href: "/#about", label: "درباره" },
  { href: "/#spaces", label: "فضاها" },
  { to: "/menu", label: "منو" },
  { to: "/gallery", label: "گالری" },
  { href: "/#private-events", label: "مراسم خصوصی" },
  { href: "/#contact", label: "تماس" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-wider gold-text">موژان</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">Mozhan</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs uppercase tracking-[0.2em] text-foreground/75 transition hover:text-gold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-foreground/75 transition hover:text-gold"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a href="https://ble.ir" target="_blank" rel="noreferrer"
            className="border border-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-primary-foreground transition">
            رزرو میز
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="منو">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="flex flex-col gap-1 px-6 py-5">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-sm uppercase tracking-[0.2em] hover:text-gold"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-sm uppercase tracking-[0.2em] hover:text-gold"
                >
                  {l.label}
                </a>
              ),
            )}
            <a href="https://ble.ir" target="_blank" rel="noreferrer"
              className="mt-4 border border-gold px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-gold">
              رزرو میز
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
