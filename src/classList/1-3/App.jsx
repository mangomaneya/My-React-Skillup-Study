import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);
  //   const handleCountPlus = ()=>{
  //     setCount((현재값)=>{
  //         return 현재값 + 1;
  //     }) // 함수형 업데이트
  //   }
  return (
    <div>
      <h1>여기는 부모 컴포넌트입니다.</h1>
      <span>{count}</span>
      <Child setCount={setCount}></Child>
      <br />
    </div>
  );
};

export default App;
