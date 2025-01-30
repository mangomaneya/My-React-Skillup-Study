import useInput from "./hooks/useInput";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
const [title, onChangeTitleHandler] = useInput();
const [body, onChangeBodyHandler] = useInput();


  return (
    <div>
      <h1>customHooks</h1>
 
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <input
        type="text"
        name="body" 
        value={body}
        onChange={onChangeBodyHandler}
      />
    </div>
  );
};

export default App;
