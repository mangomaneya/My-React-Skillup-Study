import React from "react";
import { useContext } from "react";
import { FamilyContext } from "../../context/FamilyContext";

const Child = () => {
  const { familyName, pocketMoney } = useContext(FamilyContext);

  return (
    <div>
      나는 이집안의 막내에료
      <span>{familyName}</span>
      용돈도 <span>{pocketMoney}</span>만큼 받았어요.
    </div>
  );
};

export default Child;
