import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const t = localStorage.getItem("mozhan-theme") || "dark";
    setDark(t === "dark");
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mozhan-theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="تغییر تم"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:text-gold hover:border-gold/60"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
