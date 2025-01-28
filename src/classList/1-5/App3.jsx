import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

const App3 = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const idRef = useRef("");
    const pwRef = useRef("");

    useEffect(()=>{
        idRef.current.focus();
    },[]);

    useEffect(()=>{
        if(id.length>=10){
            pwRef.current.focus()
        }
    },[id])

    const idChangeHandler = (e)=>{
        setId(e.target.value);
    }
  return (
    <div>
        <div>아이디:<input type='text' ref={idRef} value={id} onChange={idChangeHandler}></input></div>
        <div>비밀번호 :<input type='password' ref={pwRef}></input></div>
    </div>
  )
}

export default App3