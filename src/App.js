import React from "react";
import "./App.css";
import Map from "./Components/Components-Map/Components-Map.js";
import API from "./Components/API-Retrieve/API.js";
import ComponentPage1 from "./Components/Components-Page1/ComponentPage1.js";
function App() {
  return (
    <div className="App">
      <ComponentPage1 />
      <header className="App-header">
        <h1>Hey</h1>
        <Map />
        <API />
      </header>
    </div>
  );
}

export default App;
