// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
const vercelStatic = process.env.VERCEL === "1";

export default defineConfig({
  // روی Vercel استاتیک: پلاگین Cloudflare خروجی را به worker/index.js می‌برد و prerender به `server.js`
  // نیاز دارد؛ بدون آن پوستهٔ SPA (`/_shell.html`) ساخته نمی‌شود و کل سایت 404 می‌شود.
  cloudflare: vercelStatic ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
    ...(vercelStatic ? { spa: { enabled: true } } : {}),
  },
});
