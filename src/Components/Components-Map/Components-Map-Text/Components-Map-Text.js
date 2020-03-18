import React from 'react'
import "./Components-Map-Text.css"

const Text = (props) => {
    console.log(props.allInfo[0][0])
    var country, cases, todayCases, deaths, todayDeaths, recovered, critical;
    props.allInfo[0].forEach(element => {
        if (element.country === props.clickedCountry){
            country = element.country;
            cases = element.cases;
            todayCases = element.todayCases;
            deaths = element.deaths;
            todayDeaths = element.todayDeaths;
            recovered = element.recovered;
            critical = element.critical;
        }
    });
    return (
        <section className="components-map-text">
            <h1>COVID-19 Global Cases Update</h1>
            <span>Country: {country}</span>
            <span>Cases: {cases}</span>
            <span>Today Cases: {todayCases}</span>
            <span>Death: {deaths}</span>
            <span>Today Death: {todayDeaths}</span>
            <span>Recovered: {recovered}</span>
            <span>Critical: {critical}</span>
        </section>
    )
}

export default Text
