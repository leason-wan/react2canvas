import React, { useState } from "react";
import './index.css';
// import { render } from 'react-dom';
// import { render } from "./renderer/index_dom";
import { render, Text } from "./renderer";

function App() {
  // return <h1 className='red'>Hello World!!!</h1>;
  // const [count, setCount] = useState(0);

  // return <div>
  //   <p>{count}</p>
  //   <button onClick={() => setCount((pre) => pre + 1)}>+</button>
  // </div>

  return <Text>Hello World !!!</Text>
}

render(<App />, document.getElementById("root"));
