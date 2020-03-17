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
    ReactDOM.render(<App allInfo = {allInfo} />, document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
