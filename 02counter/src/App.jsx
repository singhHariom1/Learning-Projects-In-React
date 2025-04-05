import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  };

  const decreaseValue = () => {
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
  };

  return (
    <>
      <h1>React course with Hariom {counter} </h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add 2 value</button>{" "}
      <button onClick={decreaseValue}>Remove 2 value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
