import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import { Eyebrow } from "./Ornament";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>تماس و موقعیت</Eyebrow>
            <h2 className="mt-8 font-display text-5xl font-light leading-tight md:text-6xl">
              همین حالا <br />
              <span className="gold-text italic">میز خود را</span> رزرو کنید
            </h2>
            <p className="mt-6 max-w-md leading-[2] text-muted-foreground">
              ظرفیت VIP محدود است. برای رزرو میز، سالن خصوصی مراسم یا اطلاع از مناسبت‌های ویژه از طریق بله یا تماس مستقیم اقدام کنید.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="#private-events" className="font-display italic text-gold underline-offset-4 hover:underline">
                فضای اختصاصی تولد و سالگرد
              </a>
              — مشاهده جزئیات و درخواست مشاوره.
            </p>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              {[
                { icon: MapPin, label: "آدرس", value: "تهران، کوهک، مجتمع تجاری طوبی، برج C، طبقه ۵" },
                { icon: Phone, label: "تلفن", value: "۰۲۱-۴۶۰۸۶۹۵۹", href: "tel:02146086959" },
                { icon: Clock, label: "ساعت کاری", value: "همه روزه ۱۲:۰۰ تا ۲۳:۰۰" },
              ].map((it, i) => (
                <a key={i} href={it.href ?? "#"} className="flex items-start gap-5 group">
                  <it.icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{it.label}</div>
                    <div className="mt-1 font-display text-lg group-hover:text-gold">{it.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://ble.ir" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-primary-foreground">
                <Send className="h-4 w-4" /> رزرو با بله
              </a>
              <a href="https://instagram.com/mozhan_lounge" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-display italic text-foreground/80 hover:text-gold">
                <Instagram className="h-4 w-4" /> @mozhan_lounge
              </a>
            </div>
          </div>

          <div className="relative frame-gold">
            <div className="relative aspect-square overflow-hidden">
              <iframe
                title="نقشه موژان"
                src="https://www.google.com/maps?q=Toobi+Tower+C+Tehran+Kouhak&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[60%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute bottom-6 right-6 border border-gold bg-background px-5 py-4 text-xs">
                <div className="font-display text-base text-gold">موژان</div>
                <div className="text-muted-foreground mt-1">کوهک · مجتمع طوبی · برج C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
