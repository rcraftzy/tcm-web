import type { Site } from './types'

export const SITE_TITLE = "TeamCellmania"
export const SITE_DESCRIPTION= "A curated list of the tech I use"
export const HOMEPAGE_URL = "https://teamcellmania.com"

export const SITE: Site = {
  website: "https://teamcellmania.com", // replace this with your deployed domain
  author: "rcraftzy",
  desc: "A curated list of the tech I use",
  title: "TeamCellmania",
  // ogImage: "astropaper-og.jpg",
  // lightAndDarkMode: true,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;
