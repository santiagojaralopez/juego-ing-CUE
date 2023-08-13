import { useState } from "react"

export const SoftMazeSquare = ({ borders, coordinate, onSquareClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onSquareClick(coordinate[0], coordinate[1]);
  }

  return (
    <div
      onClick={handleClick}
      className={`w-[70px] h-[70px] flex justify-center items-center border-white ${borders} hover:cursor-pointer`}
    >
      <div className={`w-[50px] h-[50px] rounded-full ${isSelected ? 'bg-turquoise animate-jump animate-once' : ''} hover:bg-turquoise`} />
    </div>
  )
}