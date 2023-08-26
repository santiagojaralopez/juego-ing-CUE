import { useState } from "react"

import { Button } from "@nextui-org/react"

const MemberSelection = ({ memberName, onMemberClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onMemberClick(memberName);
  }

  return (
    <Button
      className='h-16 font-cocogoose text-lg'
      color={`${isSelected ? 'secondary' : 'default'}`}
      onClick={handleClick}
    >
      {memberName}
    </Button>
  )
}

export default MemberSelection