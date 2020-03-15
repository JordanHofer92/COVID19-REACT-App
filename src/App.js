import React from 'react';
import './App.css';
import Map from './Components/Components-Map/Components-Map.js'

function App(allInfo) {
  console.log(allInfo)
  console.log(allInfo.allInfo[0])

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(allInfo.allInfo[0])}</p>
        <Map />
      </header>
    </div>
  );
}

export default App;