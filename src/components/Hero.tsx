import { Calendar, Clock, MapPin, Menu, Phone } from "lucide-react";
import heroBg from "@/assets/heropic2.png";

export function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative isolate min-h-svh w-full overflow-hidden pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>
      {/* تیرگی بیشتر فقط پشت متن (راست)، بقیه تصویر روشن‌تر بماند */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-l from-black/52 via-black/18 to-transparent md:from-black/42 md:via-black/12 md:to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/12" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center px-6 pb-20 pt-8 md:pb-24">
        <div className="fade-in-up flex w-full justify-start">
          <div className="w-full max-w-2xl text-start">
            <h1 className="font-display text-5xl font-light tracking-tight text-gold sm:text-6xl md:text-7xl lg:text-8xl">
              موژان
            </h1>
            <p className="mt-3 font-display text-lg text-gold/95 sm:text-xl md:text-2xl">
              کافه و رستوران بین‌المللی
            </p>

            <div className="my-8 flex items-center gap-3 sm:my-10" aria-hidden>
              <span className="h-px flex-1 bg-linear-to-l from-transparent to-gold/80" />
              <span className="inline-block size-2 rotate-45 border border-gold bg-gold/30" />
              <span className="h-px flex-1 bg-linear-to-r from-transparent to-gold/80" />
            </div>

            <p className="max-w-xl text-base leading-[1.95] text-white/90 sm:text-lg">
              تجربه‌ای متفاوت از طعم‌های بین‌المللی در فضایی لوکس و دلنشین
            </p>

            <div className="mt-10 grid gap-8 border-t border-gold/25 pt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gold/25">
              <div className="flex gap-3 sm:flex-col sm:gap-2 sm:ps-0 sm:pe-6">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold sm:mt-0" strokeWidth={1.5} />
                <div>
                  <div className="text-xs tracking-wide text-gold/90">رزرو و اطلاعات</div>
                  <a
                    href="tel:021440869959"
                    className="mt-1 block font-display text-sm tracking-wide text-white/95 transition hover:text-gold sm:text-base"
                  >
                    ۰۲۱-۴۴۰۸۶۹۹۵۹
                  </a>
                </div>
              </div>
              <div className="flex gap-3 sm:flex-col sm:gap-2 sm:px-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold sm:mt-0" strokeWidth={1.5} />
                <div>
                  <div className="text-xs tracking-wide text-gold/90">آدرس</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/90 sm:text-base">
                    کوهک، مجتمع تجاری برج C، طبقه ۵
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:flex-col sm:gap-2 sm:ps-6 sm:pe-0">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold sm:mt-0" strokeWidth={1.5} />
                <div>
                  <div className="text-xs tracking-wide text-gold/90">ساعت کاری</div>
                  <p className="mt-1 text-sm text-white/90 sm:text-base">
                    ۱۲ ظهر تا ۲۴ شب همه‌روزه
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://ble.ir"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-linear-to-br from-gold to-amber-950/90 px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition hover:from-gold/95 hover:to-amber-950/80"
              >
                <Calendar className="h-4 w-4" strokeWidth={1.75} />
                رزرو میز
              </a>
              <a
                href="/menu"
                className="inline-flex items-center gap-2 rounded-md border border-gold bg-transparent px-6 py-3.5 text-sm text-gold transition hover:bg-gold/10"
              >
                <Menu className="h-4 w-4" strokeWidth={1.75} />
                مشاهده منو
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
