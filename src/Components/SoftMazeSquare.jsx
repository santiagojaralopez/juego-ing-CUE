import { useState } from "react"

export const SoftMazeSquare = ({ borders }) => {
  return (
    <div className={`w-[70px] h-[70px] border-black ${borders} hover:bg-cue-red`}>
    </div>
  )
}
