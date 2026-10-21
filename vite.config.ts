// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { cloudflare } from "@cloudflare/vite-plugin";

// Lovable's managed build already has a Cloudflare adapter. Only use the
// Cloudflare Vite adapter for standalone deployments so adapters never overlap.
const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" || Boolean(process.env["DEV_SERVER__PROJECT_PATH"]);

export default defineConfig({
  plugins: [
    ...(isLovableSandbox ? [] : cloudflare({ viteEnvironment: { name: "ssr" } })),
  ],
  nitro: isLovableSandbox,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
