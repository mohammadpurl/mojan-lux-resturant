import { menuCategories } from "@/data/menu";
import { MenuItemRow } from "@/components/MenuItemRow";

export function MenuPage() {
  return (
    <div dir="rtl" className="min-h-svh bg-black pb-20 pt-28 text-cream-100 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <header className="text-center">
          <p className="text-xs tracking-[0.25em] text-soft-200">Mozhan Lounge</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-gold/90 sm:text-4xl md:text-5xl">
            منوی موژان
          </h1>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
            <span className="inline-block size-2 rotate-45 border border-border bg-muted/30" />
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
          </div>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-loose text-soft-200">
            قیمت‌ها به تومان است. برای آیتم‌های بدون قیمت، لطفاً از سالن بپرسید.
          </p>
        </header>

        <div className="mt-14 space-y-14">
          {menuCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              <h2 className="border-b border-border pb-3 text-center font-display text-2xl text-gold/90 md:text-3xl">
                {cat.title}
              </h2>
              <div className="mt-2">
                {cat.items.map((item) => (
                  <MenuItemRow key={`${cat.id}-${item.name}`} item={item} />
                ))}
              </div>
            </section>
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
