import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import CountrySelector from '../CountrySelector/CountrySelector.js'


var country, cases, todayCases, deaths, todayDeaths, recovered, critical;
const Graph = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
	function changeSelectedCountry() {
		setSelectedCountry(document.getElementById("graphCountry").value);
  }
	props.allInfo[0].forEach(element => {
		if (element.country === selectedCountry) {
			country = element.country;
			cases = element.cases;
			todayCases = element.todayCases;
			deaths = element.deaths;
			todayDeaths = element.todayDeaths;
			recovered = element.recovered;
			critical = element.critical;
		}
  });
 
	const dataa = {
		labels: [
			"Total Cases",
			"New Cases Today",
			"Critical Cases",
			"Total Deaths",
			"Deaths Today",
			"Confirmed Recoveries"
    ],
		datasets: [{
      label: country,
      // data: [12, 1, 2, 3, 2, 3],
			backgroundColor: [
				"rgba(100,99,200,0.7)",
				"rgba(22, 30, 181, 0.5)",
				"rgba(255,99,132,0.7)",
				"rgba(239, 9, 36, 0.7)",
				"rgba(239, 9, 36, 0.7)",
				"rgba(32, 243, 106, 0.7)"
			],
			borderColor: [
				"rgba(100,99,132,1)",
				"rgba(22, 30, 181, 1)",
				"rgba(255,99,132,1)",
				"rgba(239, 9, 36, 1)",
				"rgba(239, 9, 36, 1)",
				"rgba(32, 243, 106, 1)"
			],
			borderWidth: 1,
			hoverBackgroundColor: [
				"rgba(100,99,132,1)",
				"rgba(22, 30, 181, 0.7)",
				"rgba(255,99,132,1)",
				"rgba(239, 9, 36, 1)",
				"rgba(239, 9, 36, 1)",
				"rgba(32, 243, 106, 1)"
			],
			hoverBorderColor: [
				"rgba(100,99,132,1)",
				"rgba(22, 30, 181, 1)",
				"rgba(255,99,132,1)",
				"rgba(239, 9, 36, 1)",
				"rgba(239, 9, 36, 1)",
				"rgba(32, 243, 106, 1)"
			],
			data: [cases, todayCases, critical, deaths, todayDeaths, recovered]
    }]
	};
	return (
		<div className="currentPage">
			<h2>COVID-19 in {country}</h2>
			<Bar
				data={dataa}
				width={300}
				height={250}
				options={{
					maintainAspectRatio: true
				}}
			/>
			<form>
				<button className="graphCountryButton" onClick={changeSelectedCountry}>Select Country</button>
				<CountrySelector/>
			</form>
		</div>
	);
};
export default Graph;