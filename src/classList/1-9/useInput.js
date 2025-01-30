import { useState } from "react";
//input에 들어가는 요소들에 대한 커스텀 훅 생성

const useInput = () => {
  // 2. value를 useState로 관리
  const [value, setValue] = useState("");

  //3. handler 로직을 구현
  const handler = (e) => {
    setValue(e.target.value);
  };

  //1. 이 hook은 []를 반환하는데, 첫번째는 value, 두번째는 handler 이다.
  return [value, handler];
};
export default useInput;
