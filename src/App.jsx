import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, add } from "./store/counterSlice";

function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  console.log("🚀 ~ file: App.jsx:11 ~ App ~ data", data);
  return (
    <div className="App">
      <div>
        <div>{count}</div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Click
        </button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(add(text));
          }}
        >
          Send
        </button>
      </div>
      <div>{data.map((e)=>(
        <div>{e}</div>
      ))}</div>
    </div>
  );
}

export default App;
