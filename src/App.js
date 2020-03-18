import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Map from "./Components/Components-Map/Components-Map.js";
// import ComponentPage1 from "./Components/Components-Page1/ComponentPage1.js";
import Chart from './Components/Components-Chart/BarGraph/BarGraph.js'
import MapButton from './Components/Components-NavBar/MapButton/MapButton.js'
import ChartButton from './Components/Components-NavBar/ChartButton/ChartButton.js'
import CheckListButton from './Components/Components-NavBar/CheckListButton/CheckListButton.js'
import LocalNewsButton from './Components/Components-NavBar/LocalNewsButton/LocalNewsButton.js'
import WatchListButton from './Components/Components-NavBar/WatchListButton/WatchListButton.js'
import CheckList from './Components/Components-CheckList/CheckList.js'
import WatchList from './Components/Components-WatchList/WatchList.js'
import LocalNews from './Components/Components-LocalNews/LocalNews.js'


function App(props) {
  // console.log(props);
  // console.log(props.allInfo[0]);

  return (
    <Router>
      <div className="App">
          {/* <ComponentPage1 /> */}
          <Switch>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/checkList">
              <CheckList /> 
            </Route>
            <Route path="/map">
              <Map allInfo={props.allInfo}/>
            </Route>
            <Route path="/watchList">
              <WatchList/>
            </Route>
            <Route path="/localNews">
              <LocalNews/>
            </Route>
          </Switch>
        <nav className="NavButtons">
          <Link to="/map"><MapButton/></Link>
          <Link to="/chart"><ChartButton/></Link>
          <Link to="/checkList"><CheckListButton/></Link>
          <Link to="/localNews"><LocalNewsButton/></Link>
          <Link to="/watchList"><WatchListButton/></Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;