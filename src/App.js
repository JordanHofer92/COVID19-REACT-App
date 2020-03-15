import React from 'react';
import './App.css';
import Map from './Components/Components-Map/Components-Map.js'
// import API from "./Components/API-Retrieve/API.js";
// import ComponentPage1 from "./Components/Components-Page1/ComponentPage1.js";

function App(allInfo) {
  console.log(allInfo)
  console.log(allInfo.allInfo[0])

  return (
    <div className="App">
      {/* <ComponentPage1 /> */}
      <header className="App-header">
        <p>{JSON.stringify(allInfo.allInfo[0])}</p>
        <Map />
        {/* <API /> */}
      </header>
    </div>
  );
}

export default App;