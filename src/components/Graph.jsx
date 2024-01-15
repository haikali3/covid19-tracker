import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart } from 'chart.js';

Chart.register(CategoryScale);

const Graph = () => {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Cases',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Deaths',
        data: [],
        borderColor: 'rgba(255,0,0,1)',
        fill: false,
      },
      {
        label: 'Recovered',
        data: [],
        borderColor: 'rgba(0,128,0,1)',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://disease.sh/v3/covid-19/historical/all?lastdays=5'
        );
        const data = await response.json();

        const labels = Object.keys(data.cases);
        const casesData = Object.values(data.cases);
        const deathsData = Object.values(data.deaths);
        const recoveredData = Object.values(data.recovered);

        setGraphData({
          ...graphData,
          labels,
          datasets: [
            {
              ...graphData.datasets[0],
              data: casesData,
            },
            {
              ...graphData.datasets[1],
              data: deathsData,
            },
            {
              ...graphData.datasets[2],
              data: recoveredData,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [graphData]);

  return (
    <div className="mx-2 flex flex-col h-full w-full rounded-md border border-gray-300 p-6 shadow">
      <Line
        data={graphData}
        options={{
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
