import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { themeInitScript } from "@/lib/theme";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gold-text">۴۰۴</h1>
        <h2 className="mt-4 text-xl font-semibold">صفحه پیدا نشد</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          صفحه‌ای که دنبالش می‌گردید وجود ندارد.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">صفحه بارگذاری نشد</h1>
        <p className="mt-2 text-sm text-muted-foreground">لطفاً دوباره تلاش کنید.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "موژان | کافه و رستوران بین‌المللی" },
      { name: "description", content: "تجربه‌ای متفاوت از طعم‌های بین‌المللی در سه فضای سنتی، مدرن و باز. رزرو میز در رستوران لوکس موژان." },
      { property: "og:title", content: "موژان | کافه و رستوران بین‌المللی" },
      { property: "og:description", content: "تجربه‌ای متفاوت از طعم‌های بین‌المللی در سه فضای سنتی، مدرن و باز. رزرو میز در رستوران لوکس موژان." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "موژان | کافه و رستوران بین‌المللی" },
      { name: "twitter:description", content: "تجربه‌ای متفاوت از طعم‌های بین‌المللی در سه فضای سنتی، مدرن و باز. رزرو میز در رستوران لوکس موژان." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ddca43e-4a36-4d95-8066-7a3f3c18e955/id-preview-26f41fe4--b21a661c-23f2-4531-98ab-2f0cf4a9198d.lovable.app-1778655180022.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ddca43e-4a36-4d95-8066-7a3f3c18e955/id-preview-26f41fe4--b21a661c-23f2-4531-98ab-2f0cf4a9198d.lovable.app-1778655180022.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <ScriptOnce children={themeInitScript} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
