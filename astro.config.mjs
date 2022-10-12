import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import autoPreprocess from "svelte-preprocess";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte({ preprocess: autoPreprocess() })],
  site: "https://knowit.github.io",
  base: "/Fagseminar-2022",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
