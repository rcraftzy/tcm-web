import { useState } from "react"

export interface Props{
  currentIndex: number
  children: React.ReactNode
}

const ButtonStory: React.FC<Props> = ({currentIndex, children}) => {
  const [index, setIndex] = useState<number>(0)

  return (
    <>
      <button class="h-full w-full bg-zinc-900 rounded-full" onClick={() => setIndex(currentIndex)}>
        {children}
      </button>
    </>
  )
}
export default ButtonStory
