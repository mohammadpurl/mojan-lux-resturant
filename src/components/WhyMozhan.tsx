import type { LucideIcon } from "lucide-react";
import { Armchair, Coffee, Globe, Sparkles, Users, UsersRound } from "lucide-react";

type FeatureItem =
  | { icon: LucideIcon; label: string }
  | { icon: LucideIcon; title: string; subtitle: string };

const features: FeatureItem[] = [
  { icon: Sparkles, label: "فضای لوکس" },
  { icon: Globe, label: "غذاهای بین‌المللی" },
  { icon: Coffee, label: "کافی‌بار حرفه‌ای" },
  { icon: UsersRound, title: "VIP", subtitle: "میزبان" },
  { icon: Users, label: "مناسب خانواده و دوستان" },
  { icon: Armchair, label: "طراحی داخلی خاص" },
];

export function WhyMozhan() {
  return (
    <section dir="rtl" className="bg-black py-20 text-cream-100 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-gold/90 md:text-4xl">
            چرا موژان؟
          </h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
            <span className="inline-block size-2 rotate-45 border border-border bg-muted/30" />
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
          </div>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={"label" in item ? item.label : `${item.title}-${item.subtitle}`}
                className="flex min-h-38 flex-col items-center justify-center gap-3 border border-border bg-background/10 px-3 py-6 text-center transition-colors hover:border-gold/35 sm:min-h-42 sm:px-4 md:min-h-44"
              >
                <Icon
                  className="h-9 w-9 shrink-0 text-gold/90 sm:h-10 sm:w-10"
                  strokeWidth={1.15}
                  aria-hidden
                />
                {"label" in item ? (
                  <p className="text-xs font-medium leading-snug text-gold/90 sm:text-sm">
                    {item.label}
                  </p>
                ) : (
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold tracking-wide text-gold/90">{item.title}</p>
                    <p className="text-xs font-medium text-gold/90/90">{item.subtitle}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
