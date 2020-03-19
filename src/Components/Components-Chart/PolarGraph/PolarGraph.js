import React from 'react';
import {Polar} from 'react-chartjs-2';

const Graph = (props) => {
  let country, cases, todayCases, deaths, todayDeaths, recovered, critical;
  const data = {
  labels: ['Total Cases', 'New Cases Today', 'Critical Cases', 'Total Deaths', 'Deaths Today', 'Confirmed Recoveries'],
  datasets: [
    {
      label: {country},
      backgroundColor: ['rgba(100,99,132,0.7)', 'rgba(255,99,132,0.7)', ],
      borderColor: ['rgba(100,99,132,1)', 'rgba(255,99,132,1)', ],
      borderWidth: 1,
      hoverBackgroundColor: ['rgba(100,99,132,1)', 'rgba(255,99,132,1)'],
      hoverBorderColor: ['rgba(100,99,132,1)', 'rgba(255,99,132,1)'],
      data: [{cases}, {todayCases}, {critical}, {deaths}, {todayDeaths}, {recovered}]
    }
  ]
};
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
      <div className="currentPage">
        <h1>COVID-19 in {country}</h1>
        <Polar
          data={data}
          width={400}
          height={400}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }


export default Graph
