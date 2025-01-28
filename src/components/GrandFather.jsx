import React from 'react'
import Father from './Father';

const GrandFather = () => {
    const familyName = "sparta";
    const pocketMoney = 10000;

  return (
    <div>
        <Father familyName={familyName} pocketMoney={pocketMoney}/>
    </div>
  )
}

export default GrandFather