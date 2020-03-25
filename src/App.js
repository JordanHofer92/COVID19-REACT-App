import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import "./App.css";
import Map from "./Components/Components-Map/Components-Map.js";
import Header from "./Components/Components-Header/Header.js";
import Graph from './Components/Components-Chart/BarGraph/BarGraph.js'
import MapButton from './Components/Components-NavBar/MapButton/MapButton.js'
import ChartButton from './Components/Components-NavBar/ChartButton/ChartButton.js'
import CheckListButton from './Components/Components-NavBar/CheckListButton/CheckListButton.js'
import LocalNewsButton from './Components/Components-NavBar/LocalNewsButton/LocalNewsButton.js'
import WatchListButton from './Components/Components-NavBar/WatchListButton/WatchListButton.js'
import CheckList from './Components/Components-CheckList/CheckList.js'
import WatchList from './Components/Components-WatchList/WatchList.js'
import TopNews from './Components/Components-TopNews/TopNews.js'


function App(props) {
  const [logoColor, setLogoColor] = useState('red');
  function youAreReady() {
    setLogoColor('green');
    alert('You are very well prepared!');
  }
  function youArentReady() {
    setLogoColor('red')
  }

  // Assign API data to variables
  const countryData = [props.allInfo[0], props.allInfo[1]];
  const newsData = props.allInfo[2].articles;
  console.log(countryData)

  return (
    <Router>
      <div className="App">
        <Header logoColor={logoColor} />
        <Switch>
          <Route exact path="/">
            <CheckList youAreReady={youAreReady}
              youArentReady={youArentReady}
              />
          </Route>
          <Route path="/chart">
            <Graph allInfo={countryData}/>
          </Route>
          <Route path="/checkList">
            <CheckList
              youAreReady={youAreReady}
              youArentReady={youArentReady}
            />
          </Route>
          <Route path="/map">
            <Map allInfo={countryData} />
          </Route>
          <Route path="/watchList">
            <WatchList allInfo={countryData}/>
          </Route>
          <Route path="/localNews">
            <TopNews newsData={newsData}/>
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
