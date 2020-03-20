import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Fetch data from multiple sources
// data for each country
const getCountriesInfo = async function () {
    const response = await fetch(
        "https://corona.lmao.ninja/countries"
    );
    var countriesInfo = await response.json();
    return countriesInfo;
}
// data for the whole world
const getTotalInfo = async function () {
    const response = await fetch(
        "https://corona.lmao.ninja/all"
    );
    var totalInfo = await response.json();
    return totalInfo;
}
// news
const getNewsInfo = async function () {
    const response = await fetch(
        "http://newsapi.org/v2/everything?q=covid&apiKey=edb83b12b2e5430587a7c61b12a1a186"
    );
    var newsInfo = await response.json();
    return newsInfo;
}


Promise.all([
    getCountriesInfo(),
    getTotalInfo(),
    getNewsInfo()
]).then(allInfo => {
    ReactDOM.render(<App allInfo = {allInfo} />, document.getElementById('root'));
})

serviceWorker.unregister();