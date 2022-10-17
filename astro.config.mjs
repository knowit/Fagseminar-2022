import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import autoPreprocess from "svelte-preprocess";
import image from "@astrojs/image";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import a11yEmoji from "@fec/remark-a11y-emoji";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte({ preprocess: autoPreprocess() }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  site: "https://roma.knowit.no",

  markdown: {
    remarkPlugins: [a11yEmoji],
  },

  vite: {
    plugins: [
      Icons({
        iconCustomizer(collection, icon, props) {
          // customize all icons in this collection
          if (collection === "knowit-icons") {
            props.width = "100%";
            props.height = "100%";
          }
        },
        compiler: "svelte",
        customCollections: {
          "knowit-icons": FileSystemIconLoader("./src/icons"),
        },
      }),
    ],
    ssr: {
      external: ["svgo"],
    },
  },
});
