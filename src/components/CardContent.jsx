import React, { useEffect, useState } from 'react';

const WorldwideData = ({ setSelectedCountry }) => {
  const [worldwideData, setWorldwideData] = useState(null);

  useEffect(() => {
    const fetchWorldwideData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();
        setWorldwideData(data);
        setSelectedCountry(data);
      } catch (error) {
        console.error('Error fetching worldwide data:', error);
      }
    };

    fetchWorldwideData();
  }, [setSelectedCountry]);

  const getPercentage = (value, total) => {
    return ((value * 100) / total).toFixed(2).toString();
  };

  const addComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <div className="mb-4 flex">
        <h1 className="font-Roboto text-xl font-bold text-slate-900">
          Coronavirus Cases -
        </h1>
        <h2 className="ml-1 font-Roboto text-lg font-medium text-slate-800">
          Worldwide
        </h2>
      </div>

      <h2 className="text-xs font-semibold leading-5 tracking-widest text-slate-400">
        TOTAL CONFIRMED CASES
      </h2>
      <div className="my-1 text-3xl font-bold text-slate-700">
        {worldwideData ? addComma(worldwideData.cases) : 'Loading...'}
      </div>

      <ul className="mt-2 space-y-2">
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-purple-500"></div>
            <span className="text-slate-700">Active Cases</span>
          </div>
          <div className="font-bold text-slate-700 ">
            {worldwideData ? addComma(worldwideData.active) : 'Loading...'}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-green-300"></div>
            <span className="text-slate-700">Recovered</span>
          </div>
          <div className="font-bold text-slate-700">
            {worldwideData ? addComma(worldwideData.recovered) : 'Loading...'}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-red-500"></div>
            <span className="text-slate-700">Deaths</span>
          </div>
          <div className="font-bold text-slate-700">
            {worldwideData ? addComma(worldwideData.deaths) : 'Loading...'}
          </div>
        </li>
      </ul>

      <div className="mt-2 text-sm font-medium text-slate-800">
        The ratio of Recovery (
        {worldwideData
          ? getPercentage(worldwideData.recovered, worldwideData.cases)
          : 'Loading...'}
        %) & Deaths (
        {worldwideData
          ? getPercentage(worldwideData.deaths, worldwideData.cases)
          : 'Loading...'}
        %).
      </div>
    </>
  );
};

export default WorldwideData;
