import type { VideoYoutube } from "../types";

const getSortedVideos = (posts: VideoYoutube[]) => {
  return posts
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.published).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.published).getTime() / 1000
        )
    );
};

export default getSortedVideos;
