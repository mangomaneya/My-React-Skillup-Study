const Child = ({ setCount }) => {
    const handleAddCount = ()=>{
        setCount((prev)=>prev +1);
    }

  return (
    <div>
      여기는 자식 컴포넌트 입니다.
      <button onClick={handleAddCount}>증가</button>
      {/* <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button> */}
    </div>
  );
};

export default Child;
