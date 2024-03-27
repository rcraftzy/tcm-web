import { useEffect, useRef, useState } from "react"
import useIntersectionVideoPlayer from '../hooks/useIntersectionVideoPlayer.js'

export const VideoPlayer = () => {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  return(
    <video 
      className="w-full min-h-full h-full object-cover rounded-3xl"
      loop
      controls={false}
      onClick={handlePlay}
      ref={video}
      src="/videos/xiaomi-unboxing.mp4"
    />
  )
}

const storiesData = [
  { id: 1, src: '/images/products/Set-gaming-300x300.png'},
  { id: 2, src: '/images/products/Set-gaming.png' },
];

export const StoryContainer = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          setCurrentStoryIndex((prevIndex) =>
            prevIndex < storiesData.length - 1 ? prevIndex + 1 : 0
          );
          return 0;
        }
      });
    }, 1000)
    return () => clearInterval(interval);
  }, [currentStoryIndex]);

  const handleStoryEnd = () => {
    if (currentStoryIndex < storiesData.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0)
    } else {
      setCurrentStoryIndex(0);
      setProgress(0)
    }
  };

  return (
    <>
      {storiesData.map((story, index) => (
        <Story
          key={story.id}
          src={story.src}
          isCurrent={index === currentStoryIndex}
          onStoryEnd={handleStoryEnd}
          progress={progress}
        />
      ))}
    </>
  )
}

const Story = ({ src, isCurrent, onStoryEnd, progress }) => {
  setTimeout(() => {
    if(isCurrent){
      onStoryEnd()
    }
  }, 5000)

  return (
    <div className={`story ${isCurrent ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <img src={src} alt="Story" />
      <div className="h-2 bg-gray-300 mt-2">
        <div
          className={`h-full bg-blue-500 transition-all duration-1000 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
