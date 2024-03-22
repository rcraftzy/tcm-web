const getSortedVideos = (posts) => {
  return posts
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.pubDate).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.pubDate).getTime() / 1000
        )
    );
};

export default getSortedVideos;
