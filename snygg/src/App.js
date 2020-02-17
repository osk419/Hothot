import React from 'react';
import './App.css';
import Hothot from './Hothot.js'
import HeartGenerator from './HeartGenerator.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeartGenerator/>
        <Hothot/>
      </header>
    </div>
  );
}

export default App;
