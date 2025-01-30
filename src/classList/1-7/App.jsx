import { useState } from "react";
import Box3 from "./Box3";
import Box2 from "./Box2";
import Box1 from "./Box1";
import { useCallback } from "react";

const App = () => {
  console.log(`앱 컴포넌트가 렌더링 되었습니다.`);
  const [count, setCount] = useState(0);

  const onPlusBtnHandler = () => {
    setCount(count + 1);
  };
  const onMinusBtnHandler = () => {
    setCount((prev) => prev - 1);
  };

  const initCount = useCallback(() => {
    setCount(0);
    console.log(`카운트 변경 ${count}에서 0으로 변경되었습니다.`);
  }, [count]);

  return (
    <div>
      <h1>카운트 예제입니다.</h1>
      <p>현재 카운트 {count}</p>
      <button onClick={onPlusBtnHandler}>+</button>
      <button onClick={onMinusBtnHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
};

export default App;
