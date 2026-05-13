import { Eyebrow } from "./Ornament";
import traditional1 from "@/assets/traditional-1.jpg";
import modernSpace from "@/assets/modern-space.jpg";
import outdoor from "@/assets/outdoor.jpg";

type Space = {
  id: string;
  number: string;
  title: string;
  en: string;
  description: string;
  features: string[];
  cover: string;
};

const spaces: Space[] = [
  {
    id: "traditional",
    number: "۰۱",
    title: "فضای سنتی",
    en: "Heritage Hall",
    description:
      "گره‌چینی، شیشه‌های رنگی و فواره‌ی مرکزی — معماری اصیل ایرانی برای شام‌های رسمی و عکس‌های ماندگار.",
    features: ["معماری گره‌چینی", "شیشه‌های رنگی", "فواره مرکزی", "ظرفیت ۸۰ نفر"],
    cover: traditional1,
  },
  {
    id: "modern",
    number: "۰۲",
    title: "فضای مدرن",
    en: "Modern Lounge",
    description:
      "خطوط تمیز، نور طلایی و میزهای مرمری — فضایی معاصر برای جلسات کاری، قرارهای مهم و تجربه‌ی بین‌المللی.",
    features: ["نورپردازی طلایی", "میز مرمر", "بار حرفه‌ای", "VIP اختصاصی"],
    cover: modernSpace,
  },
  {
    id: "outdoor",
    number: "۰۳",
    title: "فضای باز",
    en: "Open Garden",
    description:
      "زیر آسمان با ریسه‌های گرم و فضای سبز — مناسب شب‌نشینی آرام، دورهمی صمیمی و مراسم در باغ.",
    features: ["ریسه‌های گرم", "آلاچیق چوبی", "فضای دنج", "مناسب چهار فصل"],
    cover: outdoor,
  },
];

export function Spaces() {
  return (
    <section
      id="spaces"
      className="relative scroll-mt-28 border-y border-border bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>سه فضا · یک مقصد</Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            فضاهای <span className="gold-text italic">اختصاصی</span> موژان
          </h2>
         
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {spaces.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col overflow-hidden border border-border bg-background/80 shadow-sm ring-0 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-gold/55 hover:bg-background hover:shadow-2xl hover:ring-1 hover:ring-gold/25 motion-reduce:transform-none motion-reduce:hover:ring-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/80">
                <img
                  src={s.cover}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-90"
                  aria-hidden
                />
                {/* <span className="pointer-events-none absolute start-4 top-4 font-display text-4xl font-light italic text-gold/90 drop-shadow-md md:text-5xl">
                  {s.number}
                </span> */}
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="font-display text-sm italic text-gold md:text-base">{s.en}</p>
                <h3 className="mt-1 font-display text-2xl font-light text-foreground md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-loose text-muted-foreground">
                  {s.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="ویژگی‌ها">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="border border-border bg-surface/50 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground transition group-hover:border-gold/35 group-hover:text-foreground/90 md:text-xs"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                  <a
                    href="https://ble.ir"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center border border-gold px-5 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-gold transition group-hover:bg-gold group-hover:text-primary-foreground sm:flex-1"
                  >
                    رزرو این فضا
                  </a>
                  <a
                    href="/gallery"
                    className="inline-flex justify-center border border-transparent py-3 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 transition hover:text-gold hover:underline sm:flex-1 sm:border-border sm:px-4 group-hover:border-gold/30"
                  >
                    گالری تصاویر
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
