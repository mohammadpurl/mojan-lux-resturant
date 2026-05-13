import { Crown, Globe, Sparkles, Users } from "lucide-react";
import aboutImage from "@/assets/IMG_20260504_170615.jpg";

const features = [
  { icon: Sparkles, label: "فضای لوکس" },
  { icon: Globe, label: "غذاهای بین‌المللی" },
  { icon: Crown, label: "تجربه VIP" },
  { icon: Users, label: "مناسب خانواده‌ها" },
] as const;

export function About() {
  return (
    <section id="about" dir="rtl" className="scroll-mt-28 bg-black py-20 text-cream-100 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* متن: در RTL ستون اول سمت راست صفحه */}
          <div className="flex flex-col text-start">
            <p className="text-sm font-medium tracking-wide text-gold/40">درباره موژان</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-gold/90 sm:text-4xl md:text-5xl">
              بیش از یک رستوران
            </h2>
            <p className="mt-6 max-w-xl text-base leading-loose text-cream-200 md:text-lg">
              موژان جایی است که معماری سنتی، نور گرم لوسترها و جزئیات چوب‌کاری، فضایی آرام و باشکوه
              می‌سازد. منوی بین‌المللی با استانداردی دقیق سرو می‌شود تا هر وعده، ترکیبی از اصالت و
              تجمل باشد — برای قرارهای مهم، شام خانوادگی یا لحظه‌ای که می‌خواهید فراتر از یک رستوران
              معمولی تجربه کنید.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gold-500/30 pt-10 sm:grid-cols-4 sm:gap-6   justify-center items-center text-center">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon
                    className="h-8 w-8 shrink-0 text-gold/90 sm:h-9 sm:w-9"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <span className="mt-3 text-xs font-medium leading-snug text-gold/90 sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* تصویر: ستون دوم در RTL سمت چپ */}
          <div className="relative w-full overflow-hidden lg:min-h-88">
            <img
              src={aboutImage}
              alt="فضای رستوران موژان"
              className="h-full w-full object-cover object-center lg:aspect-4/3 lg:min-h-104"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
