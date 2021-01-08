import React, {useState} from 'react';
import {render, Text } from './renderer/index_dom';
// import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  // return <Text size='26px' left={10} top={100}>Hello World !!!</Text>

  return <h1>
    Hello World !!!
    <p onClick={() => setCount(() => count + 1)}>{count}</p>
  </h1>
}

render(<App />, document.getElementById('root'));