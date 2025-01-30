import styled from "styled-components"
import HeavyComponent from "./components/HeavyComponent"

const App = () => {
    const StBox = styled.div`
        background-color: yellow;
        margin-bottom: 30px;

    `
   
  return (
    <div>
        <h1>useMemo</h1>
        <StBox> 네비게이션 바
        </StBox>
          <HeavyComponent />
          <footer style={{backgroundColor :"green ",marginTop:"30px"}} >푸터 영역이에요</footer>
    </div>
  )
}

export default App