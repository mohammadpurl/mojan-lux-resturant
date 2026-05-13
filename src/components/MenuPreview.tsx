import { Link } from "@tanstack/react-router";
import { Utensils } from "lucide-react";
import { MenuItemRow } from "@/components/MenuItemRow";
import { previewDishes, previewDrinks, previewTodaybarbecue, previewTodaySpecials,previewIranian, previewPasta } from "@/data/menu";
import cocktail from "@/assets/menuimage.png";

export function MenuPreview() {
  const drinks = previewDrinks();
  const dishes = previewDishes();
  const barbecue = previewTodaybarbecue();
  const today = previewTodaySpecials();
  const iranian = previewIranian();
  const pasta = previewPasta();
  return (
    <section
      id="menu"
      dir="rtl"
      className="scroll-mt-28 border-y border-border bg-black py-20 text-cream-100 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start lg:gap-10">
          {/* RTL: سلول اول = سمت راست — نوشیدنی‌های ویژه */}
          <div className="order-2 lg:order-0">
            <h3 className="text-center font-display text-xl font-medium text-gold/90 md:text-2xl">
              نوشیدنی‌های ویژه
            </h3>
            <div className="mt-6">
              {drinks.map((item) => (
                <MenuItemRow key={item.name} item={item} dense />
              ))}
            </div>
            <h3 className="text-center font-display text-xl font-medium text-gold/90 md:text-2xl">
            کباب
            </h3>
            <div className="mt-6">
              {barbecue.map((item) => (
                <MenuItemRow key={item.name} item={item} dense />
              ))}
            </div>
          </div>

          <div className="order-first flex flex-col items-center lg:order-0">
            <Utensils className="h-6 w-6 text-gold/80" strokeWidth={1.25} aria-hidden />
            <h2 className="mt-3 text-center font-display text-2xl font-medium text-gold/90 md:text-3xl">
              پیشنهاد ویژه امروز
            </h2>
            <div
              className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3"
              aria-hidden
            >
              <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
              <span className="inline-block size-2 rotate-45 border border-border bg-muted/30" />
              <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
            </div>
            <figure className="mt-6 w-full max-w-sm overflow-hidden border border-border lg:max-w-none">
              <img
                src={cocktail}
                alt="نوشیدنی ویژه موژان"
                className="aspect-3/4 w-full object-cover sm:aspect-4/5 lg:max-h-[min(32rem,70vh)]"
                loading="lazy"
              />
            </figure> 
            <Link
              to="/menu"
              className="mt-8 rounded-md border border-gold bg-transparent px-8 py-3.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              مشاهده منوی کامل
            </Link>
          </div>

          <div className="order-3 lg:order-0">
            <h3 className="text-center font-display text-xl font-medium text-gold/90 md:text-2xl">
              غذاهای ویژه
            </h3>
            <div className="mt-6">
              {dishes.map((item) => (
                <MenuItemRow key={item.name} item={item} dense />
              ))}
            </div>
            <h3 className="text-center font-display text-xl font-medium text-gold/90 md:text-2xl">
            پاستا و گریل
            </h3>
            <div className="mt-6">
              {pasta.map((item) => (
                <MenuItemRow key={item.name} item={item} dense />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
