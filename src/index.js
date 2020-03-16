import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Fetch data from multiple sources
const getCountriesInfo = async function () {
    const response = await fetch(
        "https://corona.lmao.ninja/countries"
    );
    var countriesInfo = await response.json();
    return countriesInfo;
}

const getTotalInfo = async function () {
    const response = await fetch(
        "https://corona.lmao.ninja/all"
    );
    var totalInfo = await response.json();
    return totalInfo;
}

Promise.all([
    getCountriesInfo(),
    getTotalInfo()
]).then(allInfo => {
    // console.log(allInfo[0])
    ReactDOM.render(<App allInfo = {allInfo} />, document.getElementById('root'));
})

serviceWorker.unregister();
