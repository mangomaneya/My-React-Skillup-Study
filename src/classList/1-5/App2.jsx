import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const plusStateHandler = ()=>{

        setCount((prev)=>prev+1);
    }
    const plusRefHandler = ()=>{
        countRef.current++;
    }
  return (
    <div>
        state {count}
        <button onClick={plusStateHandler}>
            state plus 1
        </button>
        ref {countRef.current}
        <button onClick={plusRefHandler}>
            ref plus 1 
        </button>
    </div>
  )
}

export default App2;