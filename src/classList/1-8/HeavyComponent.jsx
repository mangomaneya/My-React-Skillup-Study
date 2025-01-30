import { useMemo } from "react";
import { useState } from "react";

const HeavyComponent = () => {
  const [value, setValue] = useState(0);
  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };
  const sampleValue = useMemo(() => heavyWork(), []); 
  return (
    <div>
      <p>나는{sampleValue}를 가져오는 엄청 무거운 작업을 하는 컴포넌트야</p>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        {" "}
        누르면 아래 카운트가 올라가요
      </button>
      <p>{value}</p>
    </div>
  );
};

export default HeavyComponent;
