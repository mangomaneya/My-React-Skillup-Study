import styled from "styled-components";

function TestPage(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Wrapper>
  );
}

const Title = styled.h1`
  /* font-family 와 line-height를 글로벌스타일로 만들자*/
  /* font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5; */
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.p`
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  font-size: 1rem;
`;
const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
`;

export default TestPage;
