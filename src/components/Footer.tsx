import { Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl gold-text">موژان</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Mozhan · Fine Dining
            </div>
            <p className="mt-6 max-w-xs text-sm leading-[1.9] text-muted-foreground">
              تجربه‌ای متفاوت از طعم‌های بین‌المللی در فضایی لوکس و دلنشین.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">دسترسی سریع</div>
            <ul className="space-y-3 font-display text-base">
              <li>
                <a href="/#about" className="hover:text-gold">
                  درباره موژان
                </a>
              </li>
              <li>
                <a href="/#spaces" className="hover:text-gold">
                  فضاها
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-gold">
                  منو
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gold">
                  گالری
                </a>
              </li>
              <li>
                <a href="/#private-events" className="hover:text-gold">
                  مراسم خصوصی
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-gold">
                  تماس و رزرو
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
              اطلاعات تماس
            </div>
            <ul className="space-y-3 font-display text-base">
              <li>۰۲۱-۴۶۰۸۶۹۵۹</li>
              <li>کوهک · مجتمع طوبی · برج C</li>
              <li>۱۲:۰۰ تا ۲۳:۰۰ — همه روزه</li>
            </ul>
            <div className="mt-6 flex items-center gap-4 text-gold">
              <a
                href="https://instagram.com/mozhan_lounge"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://ble.ir" target="_blank" rel="noreferrer" aria-label="بله">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Mozhan Lounge</div>
          <div className="font-display italic normal-case tracking-normal">
            Crafted with passion · طراحی شده با ذوق
          </div>
        </div>
      </div>
    </footer>
  );
}
