import { Star } from "lucide-react";
import { Eyebrow } from "./Ornament";

const reviews = [
  { name: "پریسا ن.", text: "یکی از بهترین کافه‌رستوران‌های تهران. فضا، برخورد پرسنل و کیفیت غذا فوق‌العاده بود." },
  { name: "امیرحسین م.", text: "شب فوق‌العاده‌ای داشتیم. همه چیز عالی بود، حتماً دوباره میایم." },
  { name: "سارا ک.", text: "غذاهای خوشمزه، محیط آرام و شیک. به همه پیشنهاد می‌کنم." },
];

export function Reviews() {
  return (
    <section className="border-y border-border bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="flex justify-center"><Eyebrow>نظرات مهمانان</Eyebrow></div>
          <h2 className="mt-6 font-display text-5xl font-light md:text-6xl">
            آنچه <span className="gold-text italic">می‌گویند</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="text-center">
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display italic text-xl leading-[1.7] text-foreground/90">
                « {r.text} »
              </blockquote>
              <div className="mx-auto my-6 h-px w-12 bg-gold" />
              <figcaption className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
