import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import Map from "./Components/Components-Map/Components-Map.js";
// import ComponentPage1 from "./Components/Components-Page1/ComponentPage1.js";
// import Chart from './Components/Components-Chart/BarGraph/BarGraph.js'
import NavBar from './Components/Components-NavBar/NavBar.js'
// import CheckList from './Components/Components-CheckList/CheckList.js'
// import WatchList from './Components/Components-WatchList/WatchList.js'


function App(props) {
  // console.log(props);
  // console.log(props.allInfo[0]);

  return (
    
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        {/* <ComponentPage1 /> */}
        {/* <Chart /> */}
        {/* <CheckList />  */}
        {/* <p>{JSON.stringify(allInfo.allInfo[0])}</p> */}
        {/* <Map allInfo={props.allInfo}/> */}
        {/* <WatchList/> */}
        <NavBar/>
    </div>
  );
}

export default App;