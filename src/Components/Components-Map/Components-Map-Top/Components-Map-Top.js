import React from 'react'
import "./Components-Map-Top.css"
import Button from "./Component-Map-Button/Component-Map-Top-Button.js"


const Text = (props) => {
    var countryData;
    var clickedCountry = props.clickedCountry;
    var countryNames = props.allInfo[0].map(x => x.country);

    props.allInfo[0].forEach(element => {
        if (countryNames.includes(clickedCountry) && element.country === clickedCountry){
            countryData = element;
        } else if (!countryNames.includes(clickedCountry)) {
            countryData = {
                country: "no data",
                cases: "no data",
                todayCases: "no data",
                deaths: "no data",
                todayDeaths: "no data",
                recovered: "no data",
                critical: "no data"
            }
        }
        
    });
    return (
        <section className="components-map-top">
            <h1>COVID-19 Global Cases Update</h1>
            <div className="components-map-infoAndButton">
                <div>
                    <span>Country: {countryData.country}</span>
                    <span>Cases: {countryData.cases}</span>
                    <span>Today Cases: {countryData.todayCases}</span>
                    <span>Death: {countryData.deaths}</span>
                    <span>Today Death: {countryData.todayDeaths}</span>
                    <span>Recovered: {countryData.recovered}</span>
                    <span>Critical: {countryData.critical}</span>
                </div>
                <div>
                    <label for="zoomButtons">Map Zoom:</label>
                    <Button 
                        id="zoomButtons" 
                        increaseViewBoxWidth={props.increaseViewBoxWidth} 
                        decreaseViewBoxWidth={props.decreaseViewBoxWidth}
                        increaseViewBoxHeight={props.increaseViewBoxHeight}
                        decreaseViewBoxHeight={props.decreaseViewBoxHeight} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Text
