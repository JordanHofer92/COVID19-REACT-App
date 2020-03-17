import React from "react";
import "./App.css";
import Map from "./Components/Components-Map/Components-Map.js";
import ComponentPage1 from "./Components/Components-Page1/ComponentPage1.js";
import Chart from './Components/Components-Chart/ComponentsChart.js'
import NavBar from './Components/Components-NavBar/NavBar.js'


function App(props) {
  // console.log(props);
  // console.log(props.allInfo[0]);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <ComponentPage1 />
        <Chart />
        {/* <p>{JSON.stringify(allInfo.allInfo[0])}</p> */}
        <Map />
        <NavBar/>
    </div>
  );
}

export default App;