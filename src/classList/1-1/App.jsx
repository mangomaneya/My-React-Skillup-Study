//styled component 작성 예시

import styled from "styled-components";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid
    ${(props) => {
      return props.borderColor;
    }}; //함수를 넣어줘야함...
  margin: 20px;
`;

//박스의 색을 배열에 담음
const boxList = ["red", "green", "blue"];

//색을 넣으면 이름을 반환해주는 함수
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간박스";
    case "blue":
      return "파란박스";
    case "green":
      return "초록박스";

    default:
      return "검정박스";
  }
};
function App() {
  return (
    <>
      {/* <StBox borderColor="red">빨간박스</StBox>
      <StBox borderColor="blue">파란박스</StBox>
      <StBox borderColor="green">초록박스</StBox> */}
      {/* 리팩토링 */}
      {boxList.map((boxColor) => {
        return (
          <StBox borderColor={boxColor} key={boxColor}>
            {getBoxName(boxColor)}
          </StBox>
        );
      })}
    </>
  );
}

export default App;
