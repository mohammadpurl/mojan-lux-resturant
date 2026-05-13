import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dish1 from "@/assets/dish-1.jpg";
import events from "@/assets/events.jpg";
import mod2 from "@/assets/IMG_20260504_170316.jpg";
import dessert from "@/assets/dessert.jpg";
import cocktail from "@/assets/cocktail.jpg";
import traditional1 from "@/assets/traditional-1.jpg";
import outdoor from "@/assets/outdoor.jpg";

/** ترتیب شبیه مرجع: غذا، سرو، سالن، دسر، نوشیدنی + چند تصویر دیگر برای اسکرول کارousel */
const previewImages = [
  { src: dish1, alt: "غذای موژان" },
  { src: events, alt: "سرو موژان" },
  { src: mod2, alt: "فضای رستوران موژان" },
  { src: dessert, alt: "دسر موژان" },
  { src: cocktail, alt: "نوشیدنی موژان" },
  { src: traditional1, alt: "تالار سنتی موژان" },
  { src: outdoor, alt: "فضای باز موژان" },
] as const;

const slideFrame =
  "relative aspect-square w-full overflow-hidden border border-border bg-black/30 transition-colors hover:border-gold/40";

export function GalleryPreview() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section
      id="gallery"
      dir="rtl"
      className="scroll-mt-28 border-y border-border bg-black py-20 text-cream-100 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-gold/90 md:text-4xl">
            گالری موژان
          </h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
            <span className="inline-block size-2 rotate-45 border border-border bg-muted/30" />
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
          </div>
        </header>

        <div dir="ltr" className="relative mx-auto mt-10 w-full max-w-6xl xl:max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="hidden h-11 w-11 shrink-0 rounded-full border border-border bg-black/80 text-gold/90 hover:border-gold/40 hover:bg-muted/20 sm:flex md:h-12 md:w-12"
              aria-label="اسلاید قبلی"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="min-w-0 flex-1"
              aria-label="پیش‌نمایش گالری تصاویر"
            >
              <CarouselContent className="-ml-2 sm:-ml-2.5 md:-ml-3">
                {previewImages.map(({ src, alt }) => (
                  <CarouselItem
                    key={alt}
                    className="basis-[90%] pl-2 sm:basis-1/2 sm:pl-2.5 md:basis-1/3 md:pl-3 lg:basis-1/5 lg:pl-3"
                  >
                    <figure className={slideFrame}>
                      <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="hidden h-11 w-11 shrink-0 rounded-full border border-border bg-black/80 text-gold/90 hover:border-gold/40 hover:bg-muted/20 sm:flex md:h-12 md:w-12"
              aria-label="اسلاید بعدی"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {previewImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`رفت به اسلاید ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "w-8 bg-gold" : "w-2 bg-border hover:bg-muted-foreground/40",
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/gallery"
            className="rounded-md border border-gold bg-transparent px-8 py-3.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            مشاهده گالری کامل
          </Link>
        </div>
      </div>
    </section>
  );
}
