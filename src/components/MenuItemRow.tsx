import type { MenuItem } from "@/data/menu";

type Props = {
  item: MenuItem;
  /** فاصله عمودی کمتر برای پیش‌نمایش */
  dense?: boolean;
};

export function MenuItemRow({ item, dense }: Props) {
  const hasPrice = Boolean(item.price?.trim());

  return (
    <div className={`border-b border-border/50 text-start ${dense ? "py-2.5" : "py-3"}`}>
      <div className="flex items-end gap-2">
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm text-gold/95 md:text-base">{item.name}</div>
          {item.description ? (
            <p className="mt-0.5 text-[11px] leading-relaxed text-soft-200 md:text-xs">
              {item.description}
            </p>
          ) : null}
        </div>
        {hasPrice ? (
          <>
            <span
              className="mb-1.5 min-w-[0.75rem] flex-1 border-b border-dotted border-gold/30"
              aria-hidden
            />
            <div className="shrink-0 font-display text-sm tabular-nums text-cream-100 md:text-base">
              {item.price}
              <span className="ms-1 text-[10px] font-sans text-cream-200">تومان</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
