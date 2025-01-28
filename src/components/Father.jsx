import React from "react";
import Child from "./Child";

const Father = ({ familyName, pocketMoney }) => {
  return (
    <div>
      <Child familyName={familyName} pocketMoney={pocketMoney} />
    </div>
  );
};

export default Father;
