import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

//Global Styled 작성 코드
const App = () => {
  return (
    <>
      <GlobalStyle />
      <TestPage title="제목입니다." contents="내용입니다."></TestPage>
    </>
  );
};
export default App;
