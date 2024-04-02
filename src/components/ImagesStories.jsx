import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function ImagesStories() {
  const stories = [
    {
      type: 'video',
      duration: 26000,
      url: '/videos/xiaomi-unboxing.mp4',
    },
    {
      type: 'video',
      url: '/videos/troca.mp4',
      duration: 5000,
    },
    {
      type: 'video',
      url: '/videos/download.mp4',
    },
  ];

  return (
    <Stories
      width="328px"
      height="568px"
      stories={stories}
      pauseStoryWhenInActiveWindow="true"
    />
  )
}
