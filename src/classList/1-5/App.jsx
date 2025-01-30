import { useState } from "react";
import { useRef } from "react"

const App = () => {
    const ref = useRef("초기값");
    const [count, setCount] = useState(0);
    console.log('ref', ref)

    ref.current="바꾼 값";
    console.log('current', ref)

    
  return (
    <div>
        <h1>useRef</h1>
        {count}
        <button onClick={()=>{setCount((prev)=>prev+1)}}>증가</button>
    </div>
  )
}

export default App