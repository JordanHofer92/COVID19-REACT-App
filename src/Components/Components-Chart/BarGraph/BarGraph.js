import React from 'react';
import {Polar} from 'react-chartjs-2';
const Graph = () => {
const data = {
  labels: ['Confirmed Cases', 'Confirmed Deaths', 'Critical Cases', 'New Cases/day', 'Deaths/day', 'Confirmed Recoveries'],
  datasets: [
    {
      label: 'Canada',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};
    return (
      <div className="currentPage">
        <h1>COVID-19 in Canada</h1>
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
