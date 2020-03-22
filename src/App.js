import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import "./App.css";
import Map from "./Components/Components-Map/Components-Map.js";
import ComponentPage1 from "./Components/Components-Header/Header.js";
import Graph from './Components/Components-Chart/BarGraph/BarGraph.js'
import MapButton from './Components/Components-NavBar/MapButton/MapButton.js'
import ChartButton from './Components/Components-NavBar/ChartButton/ChartButton.js'
import CheckListButton from './Components/Components-NavBar/CheckListButton/CheckListButton.js'
import LocalNewsButton from './Components/Components-NavBar/LocalNewsButton/LocalNewsButton.js'
import WatchListButton from './Components/Components-NavBar/WatchListButton/WatchListButton.js'
import CheckList from './Components/Components-CheckList/CheckList.js'
// import WatchList from './Components/Components-WatchList/WatchList.js'
import LocalNews from './Components/Components-LocalNews/LocalNews.js'


function App(props) {
  const [headerColour, setHeaderColour] = React.useState("#d7263d");

  // Assign API data to variables
  const countryData = [props.allInfo[0], props.allInfo[1]];
  const newsData = props.allInfo[2].articles;


  return (
    <Router>
      <div className="App">
        <ComponentPage1 />
        <Switch>
          <Route path="/chart">
            <Graph allInfo={props.allInfo}/>
          </Route>
          <Route path="/checkList">
            <CheckList
              handleAllChecked={() => {
                setHeaderColour("green");
              }}
            />
          </Route>
          <Route path="/map">
            <Map allInfo={countryData} />
          </Route>
          <Route path="/watchList">
            {/* <WatchList /> */}
          </Route>
          <Route path="/localNews">
            <LocalNews newsData={newsData}/>
          </Route>
        </Switch>
        <nav className="NavButtons">
          <Link to="/map">
            <MapButton />
          </Link>
          <Link to="/chart">
            <ChartButton />
          </Link>
          <Link to="/checkList">
            <CheckListButton />
          </Link>
          <Link to="/localNews">
            <LocalNewsButton />
          </Link>
          <Link to="/watchList">
            <WatchListButton />
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
