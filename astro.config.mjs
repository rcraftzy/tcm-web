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
      h1: "font-roboto mb-16",
      h2: "text-4xl font-semibold font-roboto mb-2",
      h3: "text-2xl font-bold font-roboto mb-2",
      h4: "text-lg font-bold font-roboto",
      h5: "font-bold font-roboto",
      h6: "font-bold font-roboto",
      p: "mb-6"
    }]]
  }
});
