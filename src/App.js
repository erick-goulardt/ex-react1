import pokeball from './pokeball.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {setCount(count + 1)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <p className="text">
          O botão foi clicado {count} vezes!
        </p>
        <button onClick={increaseCount}>Clique-me</button>
      </header>
    </div>
  );
}

export default App;
