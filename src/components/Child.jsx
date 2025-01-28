import React from 'react'

const Child = ({familyName, pocketMoney}) => {
  return (
    <div>나는 이집안의 막내에료
        <span>{familyName}</span>
        용돈도 <span>{pocketMoney}</span>만큼 받았어요.
    </div>
  )
}

export default Child