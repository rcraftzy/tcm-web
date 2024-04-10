const getSortedVideos = (posts) => {
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
