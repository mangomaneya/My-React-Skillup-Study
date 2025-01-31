import { useSelector } from "react-redux"

const App = () => {
  const counterReducer = useSelector((state)=>{ return state.counter});
  console.log(counterReducer)
  return (

    <div>App</div>
  )
}

export default App