import { useState } from 'react';
import offbulb from './image/offbulb.png';
import onnbulb from './image/onnbulb.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [toogle, setBulb] = useState(false);
  const [bulbonncount, setBulbOnCount] = useState(0);
  const [bulboffcount, setBulbOffCount] = useState(0);


  return (
    <>
      <div className="bulb">
        <img src={toogle ? onnbulb : offbulb} alt="bulb" />
       <br/> <br/>
        <button onClick={() => { setBulb(true); setBulbOnCount((bulbonncount)=> toogle? bulbonncount:bulbonncount+1) }}>
          BULB Onn Count {bulbonncount}
        </button>
        <button onClick={() => { setBulb(false); setBulbOffCount((bulboffcount)=> toogle ? bulboffcount+1:bulboffcount) }}>
          BULB Off Count {bulboffcount}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((Count) => Count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          Reset Count
        </button>
      </div>
    </>
  );
}

export default App;
