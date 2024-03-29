import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes';
import react from "@astrojs/react";
import { remarkReadingTime } from './remark-reading-time.mjs';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db()],
  image: {
    service: squooshImageService()
  },
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[addClasses, {
      h1: "font-mplus mb-16",
      h2: "text-4xl font-semibold font-mplus mb-2",
      h3: "text-2xl font-bold font-mplus mb-2",
      h4: "text-lg font-bold font-mplus",
      h5: "font-bold font-mplus",
      h6: "font-bold font-mplus",
      p: "mb-6"
    }]]
  }
});
