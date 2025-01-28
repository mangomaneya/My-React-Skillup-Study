import React from "react";
import Father from "./Father";
import { FamilyContext } from "../../context/FamilyContext";

const GrandFather = () => {
  const familyName = "sparta";
  const pocketMoney = 10000;

  return (
    <div>
      <FamilyContext.Provider
        value={{
          familyName,
          pocketMoney,
        }}
      >
        <Father familyName={familyName} pocketMoney={pocketMoney} />
      </FamilyContext.Provider>
    </div>
  );
};

export default GrandFather;
