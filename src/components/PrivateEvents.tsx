import { Clock, MapPin, Phone, Send } from "lucide-react";

import vipImage from "@/assets/VIP.png";

const phoneDisplay = "۰۲۱-۴۴۰۸۶۹۵۹";
const phoneTel = "tel:02144086959";

const infoItems = [
  {
    icon: Phone,
    lines: [phoneDisplay, "رزرو و اطلاعات"],
    href: phoneTel,
  },
  {
    icon: MapPin,
    lines: ["کوهک، مجتمع تجاری طوبی", "برج C، طبقه ۵"],
  },
  {
    icon: Clock,
    lines: ["ساعت کاری", "۱۲ ظهر تا ۲۴ شب"],
  },
] as const;

const footerLinks = [
  { label: "دسترسی سریع", href: "/#menu" },
  { label: "ساعات کاری", href: "/#contact" },
  { label: "اطلاعات تماس", href: "/#contact" },
  { label: "موقعیت ما", href: "/#contact" },
] as const;

export function PrivateEvents() {
  return (
    <section
      id="private-events"
      dir="rtl"
      className="relative scroll-mt-28 border-y border-border bg-zinc-950 py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-sm border border-gold/80 bg-black shadow-[0_0_0_1px_color-mix(in_oklab,var(--gold)_12%,transparent),0_24px_48px_-12px_rgba(0,0,0,0.65)]">
          <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2 lg:min-h-[min(520px,78svh)]">
            {/* در RTL ستون اول = سمت راست = تصویر */}
            <div className="relative order-1 aspect-5/4 min-h-[220px] sm:aspect-16/10 lg:aspect-auto lg:min-h-[360px]">
              <img
                src={vipImage}
                alt="فضای VIP و میز آراسته با نور ملایم در موژان"
                className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[80%_center] lg:object-right"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-l from-zinc-950 via-zinc-950/40 to-transparent lg:from-zinc-950/90 lg:via-zinc-950/20 lg:to-transparent"
                aria-hidden
              />
            </div>

            <div className="order-2 flex flex-col justify-between gap-10 bg-zinc-950 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div>
                <p className="text-sm font-medium tracking-wide text-gold/85">
                  همین حالا میز خود را رزرو کنید
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-gold sm:text-4xl md:text-[2.35rem]">
                  ظرفیت VIP محدود است
                </h2>
                <p className="mt-2 text-lg font-medium text-gold/90 sm:text-xl">همه شب‌ها</p>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gold/25 pt-8 sm:grid-cols-3 sm:gap-4">
                  {infoItems.map((item) => {
                    const body = (
                      <>
                        <item.icon
                          className="mx-auto h-5 w-5 text-gold sm:mx-0"
                          strokeWidth={1.35}
                          aria-hidden
                        />
                        <div className="mt-3 space-y-1 text-center sm:mt-3 sm:text-start">
                          <div className="font-display text-sm font-medium leading-snug text-gold sm:text-[13px]">
                            {item.lines[0]}
                          </div>
                          <div className="text-xs leading-relaxed text-gold/65 sm:text-[11px]">
                            {item.lines[1]}
                          </div>
                        </div>
                      </>
                    );
                    const className =
                      "flex flex-col items-center sm:items-start rounded-sm border border-transparent px-2 py-1 transition hover:border-gold/20 hover:bg-gold/4";
                    if ("href" in item && item.href) {
                      return (
                        <a key={item.lines[0]} href={item.href} className={className}>
                          {body}
                        </a>
                      );
                    }
                    return (
                      <div key={item.lines[0]} className={className}>
                        {body}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href={phoneTel}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-md transition hover:bg-gold/90"
                  >
                    <Phone className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    تماس: {phoneDisplay}
                  </a>
                  <a
                    href="https://ble.ir"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-transparent px-5 py-3.5 text-sm font-medium text-gold transition hover:bg-gold/10"
                  >
                    <Send className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    رزرو با بله
                  </a>
                </div>
              </div>

              <nav
                className="flex flex-col gap-4 border-t border-gold/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
                aria-label="دسترسی سریع VIP"
              >
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-gold transition hover:text-gold/80"
                >
                  <span
                    className="inline-block size-1.5 rotate-45 border border-gold bg-gold/40"
                    aria-hidden
                  />
                  <span className="font-display text-base tracking-wide">موژان</span>
                </a>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-gold/60 sm:justify-end">
                  {footerLinks.map((l) => (
                    <a key={l.label} href={l.href} className="transition hover:text-gold">
                      {l.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
