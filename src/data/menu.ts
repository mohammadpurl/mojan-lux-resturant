export type MenuItem = {
  name: string;
  /** توضیح کوتاه زیر نام (مثلاً مواد) */
  description?: string;
  /** فقط عدد به فارسی؛ «تومان» در UI اضافه می‌شود */
  price?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizer",
    title: "پیش‌غذا",
    items: [
      { name: "زیتون", price: "۷۰" },
      { name: "فرنج فرایز", price: "۱۴۰" },
      { name: "سیب‌زمینی با سس قارچ", price: "۱۱۰" },
      { name: "حمص", price: "۱۰۵" },
      { name: "چیکن فینگر", price: "۲۵۰" },
      { name: "درامایت شرمپ", price: "۴۰۰" },
    ],
  },
  {
    id: "salad",
    title: "سالاد",
    items: [
      { name: "سالاد سزار سوخاری", price: "۲۱۰" },
      { name: "سالاد سزار گریل", price: "۲۵۴" },
      { name: "سالاد فصل", price: "۸۰" },
      { name: "سالاد شیرازی", price: "۴۰" },
      { name: "سالاد گاردن", price: "۱۸۰" },
    ],
  },
  {
    id: "pizza",
    title: "پیتزا",
    items: [
      { name: "پیتزا سیرو استیک" },
      { name: "پیتزا چیکن پستو" },
      { name: "پیتزا گوشت و قارچ" },
      { name: "پیتزا مارگاریتا" },
    ],
  },
  {
    id: "kebab",
    title: "کباب",
    items: [
      { name: "جوجه کباب با استخوان", price: "۲۴۰" },
      { name: "جوجه بدون استخوان", price: "۲۱۰" },
      { name: "کباب لقمه", price: "۲۰۰" },
      { name: "برگ مخصوص", price: "۲۴۰" },
      { name: "شیشلیک", price: "۱۵۰" },
      { name: "کباب وزیری", price: "۱۸۰" },
      { name: "سینی دومیش", price: "۴۸۰" },
    ],
  },
  {
    id: "pasta-grill",
    title: "پاستا و گریل",
    items: [
      { name: "پاستا چیکن آلفردو" },
      { name: "پاستا بیف آلفردو" },
      { name: "پاستا پستو و شرمپ" },
      { name: "استیک مخصوص" },
      { name: "استیک مرغ گریل" },
      { name: "اوج چیکن" },
    ],
  },
  {
    id: "iranian",
    title: "غذای ایرانی",
    items: [
      { name: "سوپ روز" },
      { name: "بادمجان سوخاری" },
      { name: "باقالی‌پلو با گوشت و تیمبو" },
      { name: "کباب کوبیده با سماق‌پلو" },
      { name: "زرشک‌پلو با مرغ زعفرانی" },
      { name: "خوراک ماهیچه" },
      { name: "خوراک گردن مخصوص" },
      { name: "کته" },
      { name: "باقالی‌پلو" },
      { name: "زرشک‌پلو" },
    ],
  },
  {
    id: "special-drinks",
    title: "نوشیدنی‌های ویژه",
    items: [
      { name: "آپرول اسپریتز", description: "آپرول | پروسکو | سودا | پرتقال", price: "۲۰۰" },
      { name: "مورژان موکتل", price: "۱۸۰" },
      { name: "دارک اند استورمی", price: "۱۶۰" },
      { name: "لرد آف شند", price: "۲۶۰" },
      { name: "نگری", price: "۲۶۰" },
    ],
  },
  {
    id: "today-special",
    title: "نوشیدنی ویژه امروز",
    items: [
      { name: "استیک ویژه مورژان", price: "۳۹۰" },
      { name: "میکس گریل عربی", price: "۳۶۰" },
      { name: "پاستا آلفردو", price: "۲۶۰" },
      { name: "برگر دریایی", price: "۴۲۰" },
      { name: "قهوه ترک", price: "۹۰" },
    ],
  },
];

export function getCategoryById(id: string): MenuCategory | undefined {
  return menuCategories.find((c) => c.id === id);
}

/** ستون راست پیش‌نمایش: نوشیدنی‌های ویژه */
export const previewDrinks = (): MenuItem[] => {
  const c = getCategoryById("special-drinks");
  return c ? c.items.slice(0, 5) : [];
};

/** ستون چپ پیش‌نمایش: غذاهای ویژه (همان آیتم‌های ویژه امروز) */
export const previewDishes = (): MenuItem[] => {
  const c = getCategoryById("today-special");
  return c ? c.items.slice(0, 5) : [];
};

export const previewTodaySpecials = (): MenuItem[] => {
  const c = getCategoryById("today-special");
  return c ? c.items : [];
};

export const previewTodaybarbecue = (): MenuItem[] => {
  const c = getCategoryById("kebab");
  return c ? c.items : [];
};

export const previewIranian = (): MenuItem[] => {
  const c = getCategoryById("iranian");
  return c ? c.items : [];
};

export const previewPasta = (): MenuItem[] => {
  const c = getCategoryById("pasta-grill");
  return c ? c.items : [];
};