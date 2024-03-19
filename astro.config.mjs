import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold front-mplus",
          h2: "text-2xl font-bold front-mplus",
          h3: "text-xl font-bold front-mplus",
          h4: "text-lg font-bold front-mplus",
          h5: "font-bold front-mplus",
          h5: "font-bold front-mplus",
          p: "mb-6",
        }
      ]
    ],
  }
});
