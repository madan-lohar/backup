import React from 'react';
import './App.css';
import TueriProvider, { Img } from './TueriProvider'

function App() {
  return (
    <div className="App">
      <h1>Optimize images</h1>
      <TueriProvider>
        <Img src="images" alt="Court" />
      </TueriProvider>
    </div>
  );
}

export default App;
