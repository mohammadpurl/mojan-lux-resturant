import traditional1 from "@/assets/traditional-1.jpg";
import traditional2 from "@/assets/traditional-2.jpg";
import modernSpace from "@/assets/modern-space.jpg";
import outdoor from "@/assets/outdoor.jpg";
import bar from "@/assets/bar.jpg";
import dish1 from "@/assets/dish-1.jpg";
import cocktail from "@/assets/cocktail.jpg";
import dessert from "@/assets/dessert.jpg";
import events from "@/assets/events.jpg";
import socialA from "@/assets/14.jpg";
import amb2 from "@/assets/IMG_20260430_141147.jpg";
import mod2 from "@/assets/IMG_20260504_170316.jpg";
import out1 from "@/assets/IMG_20260504_170515.jpg";
import out5 from "@/assets/IMG_20260504_170800.jpg";
import img615 from "@/assets/IMG_20260504_170615.jpg";
import img627 from "@/assets/IMG_20260504_170627.jpg";
import img642 from "@/assets/IMG_20260504_170642.jpg";
import img701 from "@/assets/IMG_20260504_170701.jpg";
import img813 from "@/assets/IMG_20260504_170813.jpg";

type GalleryEntry =
  | { kind: "image"; src: string; alt: string; className?: string }
  | { kind: "video"; src: string; alt: string; poster: string; className?: string };

/** قاب ثابت با نسبت تصویر — تصویر/ویدیو داخل قاب crop می‌شود تا ارتفاع غیرقابل‌کنترل نگیرد */
const frameBase =
  "group relative isolate w-full overflow-hidden rounded-md border border-border bg-zinc-950/80 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-gold/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--gold)_25%,transparent)]";

function GalleryMediaCell({ item }: { item: GalleryEntry }) {
  const mediaClass =
    "absolute inset-0 size-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]";

  if (item.kind === "video") {
    return (
      <video
        className={mediaClass}
        controls
        playsInline
        preload="metadata"
        poster={item.poster}
        aria-label={item.alt}
      >
        <source src={item.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt}
      className={mediaClass}
      loading="lazy"
      decoding="async"
    />
  );
}

/** تصویر و ویدئو؛ ویدئوها از public/videos با پوستر تصویر مرتبط */
const galleryEntries: GalleryEntry[] = [
  {
    kind: "image",
    src: dish1,
    alt: "غذای موژان",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-2/1 lg:col-span-2 lg:aspect-21/9",
  },
  {
    kind: "video",
    src: "/videos/hero.mp4",
    poster: mod2,
    alt: "نمای ویدیویی از فضای موژان",
    className: "aspect-video sm:col-span-2 lg:col-span-2",
  },
  { kind: "image", src: traditional1, alt: "فضای سنتی موژان", className: "aspect-4/3" },
  { kind: "image", src: mod2, alt: "سالن موژان", className: "aspect-4/3" },
  {
    kind: "video",
    src: "/videos/traditional.mp4",
    poster: traditional1,
    alt: "ویدیوی فضای سنتی",
    className: "aspect-video sm:col-span-2 lg:col-span-2",
  },
  {
    kind: "image",
    src: dessert,
    alt: "دسر موژان",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-2/1 lg:col-span-2",
  },
  { kind: "image", src: cocktail, alt: "کوکتل موژان", className: "aspect-4/3" },
  { kind: "image", src: bar, alt: "بار موژان", className: "aspect-4/3" },
  {
    kind: "video",
    src: "/videos/events.mp4",
    poster: events,
    alt: "ویدیوی مراسم و میز آراسته",
    className: "aspect-video sm:col-span-2 lg:col-span-2",
  },
  { kind: "image", src: modernSpace, alt: "فضای مدرن", className: "aspect-4/3" },
  { kind: "image", src: outdoor, alt: "فضای باز", className: "aspect-4/3" },
  { kind: "image", src: events, alt: "مراسم در موژان", className: "aspect-4/3" },
  { kind: "image", src: traditional2, alt: "جزئیات تالار", className: "aspect-square sm:aspect-4/3" },
  {
    kind: "image",
    src: out1,
    alt: "تراس موژان",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-2/1 lg:col-span-2",
  },
  { kind: "image", src: socialA, alt: "موژان از نمای نزدیک", className: "aspect-4/3" },
  { kind: "image", src: amb2, alt: "نور و فضا", className: "aspect-4/3" },
  {
    kind: "image",
    src: out5,
    alt: "شب در موژان",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-2/1 lg:col-span-2",
  },
  { kind: "image", src: img615, alt: "تالار موژان", className: "aspect-4/3" },
  { kind: "image", src: img627, alt: "فضای غذاخوری", className: "aspect-4/3" },
  { kind: "image", src: img642, alt: "جزئیات دکور", className: "aspect-square sm:aspect-4/3" },
  {
    kind: "image",
    src: img701,
    alt: "میز و چیدمان",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-2/1 lg:col-span-2",
  },
  { kind: "image", src: img813, alt: "موژان", className: "aspect-4/3" },
];

export function GalleryPage() {
  return (
    <div dir="rtl" className="min-h-svh bg-black pb-20 pt-28 text-cream-100 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-gold-500 sm:text-4xl md:text-5xl">
            گالری موژان
          </h1>
          <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
            <span className="inline-block size-2 rotate-45 border border-border bg-muted/30" />
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-soft-200 md:text-base">
            تصاویر و ویدیوهایی از فضاها و لحظه‌های موژان — روی ویدیوها پخش را بزنید.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 grid-flow-dense gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {galleryEntries.map((item, index) => (
            <figure
              key={`${index}-${item.kind}-${item.alt}`}
              className={`${frameBase} ${item.className ?? "aspect-4/3"}`}
            >
              <GalleryMediaCell item={item} />
            </figure>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/"
            className="rounded-md border border-gold bg-transparent px-8 py-3.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}
