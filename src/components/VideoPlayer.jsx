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
      autoPlay
      ref={video}
      src="/videos/xiaomi-unboxing.mp4"
    />
  )
}

