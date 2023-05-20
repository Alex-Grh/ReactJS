import React, { useState } from 'react';

import './App.css';
import Counter from './Counter';


let arr = useState([{},{},[]])
// let counter1 = arr[0];
// let counter2 = arr[1];

function App() {
let arr = useState(5)
let data = arr[0];
let setData = arr[1]

  return (
    <div className="App">
<button onClick={() =>{setData(data+1)}}>{data}</button>


   <Counter/>
    </div>
    
  );
}

export default App;
