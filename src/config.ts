import type { Site } from './types'

export const SITE_TITLE = "TeamCellmania"
export const SITE_DESCRIPTION= "Reparación y venta de celulares, personalizados, mantenimiento y reparación de computadoas en Cañar Azogues"
export const HOMEPAGE_URL = "https://teamcellmania.com"
export const STOREPAGE_URL = "https://tienda.teamcellmania.com"

export const SITE: Site = {
  website: HOMEPAGE_URL, // replace this with your deployed domain
  author: "rcraftzy",
  desc: SITE_DESCRIPTION,
  title: SITE_TITLE,
  // ogImage: "astropaper-og.jpg",
  // lightAndDarkMode: true,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;
