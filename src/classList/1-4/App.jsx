import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [value, setValue] = useState("");
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("hello useEffect")
    },[count])
  return (
    <div>
        <h1>useEffect</h1>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    {count}
    <button onClick={()=>{setCount((prev)=> prev+1)}}>증가</button>
    </div>
  )
}

export default App