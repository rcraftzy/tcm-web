
export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  // ogImage?: string;
  // lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  link: string;
  published: string;
  viewTime: string;
  tags: string[];
};
