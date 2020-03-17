import React from 'react';
import {Bar} from 'react-chartjs-2';
const Graph = () => {
const data = {
  labels: ['Confirmed Cases', 'Confirmed Deaths', 'Hospitalizations', 'New Cases/day', 'New Cases/week', 'Confirmed Recoveries'],
  datasets: [
    {
      label: 'Dataset1',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
    return (
      <div>
        <h2>COVID-19 in Canada</h2>
        <Bar
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
