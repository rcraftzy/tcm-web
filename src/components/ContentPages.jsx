
import { useEffect, useState } from 'react'
import {ArrowIcon} from './Icons/ArrowIcon.tsx'

export default function ContentPages ({posts: params}) {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(12)
  const [posts, setPost] = useState([])
  const [maxValue,setMaxValue] = useState(12)


  const originalWidth = 300;
  const newHeight = Math.round((originalWidth * 9) / 16);
  const minValue = 0
              
  useEffect(() =>{
    setPost(params)
    setMaxValue(params.length)
  }, [params])
  const nextPage = () => {
    setMin(min+12)
    setMax(max+12)
  }
  const prevPage = () => {

    if(minValue === min) {
    }
    setMax(max-12)
    setMin(min-12)
  }

  return (
    <>
      <header className="flex justify-between mb-6">
        <a href="videos" className="bg-[#00538F] pt-1.5 px-4 rounded-xl">Ver Videos</a>
        <div className="flex gap-1">
          {
            minValue === min 
              ?
              <div />
              :
              <button className="px-2 py-1.5 bg-white text-black rounded-xl" onClick={prevPage}>
                <div className="w-6 rotate-180 stroke-black">
                  <ArrowIcon/>
                </div>
              </button>
          }
          {
            maxValue < max 
              ?
              <div />
              :
              <button className="px-2 py-1.5 bg-white text-black rounded-xl" onClick={nextPage}>
                <div className="w-6 stroke-black">
                  <ArrowIcon/>
                </div>
              </button>
          }
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(min, max).map((post) => (
          <a href={`/contenido/${post.slug}/`} key={post.slug} className="mb-4">
            <img
              className="aspect-video border border-zinc-700 rounded-xl object-cover"
              src={post.data.heroImage}
              width={originalWidth}
              height={newHeight}
              alt="tumbnail"
            />
            <div className="mt-2 text-base font-bold">
              {post.data.title}
            </div>
            <div className="text-left opacity-70 text-sm line-clamp-3">
              {post.data.description}
            </div>
          </a>
        ))}
      </section>
      <footer className="flex justify-end mb-6">
        <div className="flex gap-1">
          {
            minValue === min 
              ?
              <div />
              :
              <button className="px-2 py-1.5 bg-white text-black rounded-xl" onClick={prevPage}>
                <div className="w-6 rotate-180 stroke-black">
                  <ArrowIcon/>
                </div>
              </button>
          }
          {
            maxValue < max 
              ?
              <div />
              :
              <button className="px-2 py-1.5 bg-white text-black rounded-xl" onClick={nextPage}>
                <div className="w-6 stroke-black">
                  <ArrowIcon/>
                </div>
              </button>
          }
        </div>
      </footer>
    </>
  )
}
