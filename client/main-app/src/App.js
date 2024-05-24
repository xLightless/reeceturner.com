import React, { useState } from 'react';
import './App.css';

function App() {
  // State for storing the count
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
