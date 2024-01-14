import { useEffect, useState } from 'react';

const WorldwideData = ({ countries, selectedCountry, setSelectedCountry }) => {
  // useEffect(() => {
  //   const country = countries.find(
  //     (country) => country.countryInfo.iso3 === selectedCountry
  //   );
  //   setSelectedCountryData(country);
  // }, [selectedCountry]);

  const getPercentage = (value, total) => {
    return ((value * 100) / total).toFixed(2).toString();
  };
  const addComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <div className="mb-4 flex ">
        <h1 className="font-Roboto text-xl font-bold text-slate-900	">
          Coronavirus Cases -
        </h1>
        <h2 className="ml-1 font-Roboto text-lg font-medium text-slate-800">
          Malaysia
        </h2>
      </div>

      <h2 className="text-xs font-semibold leading-5 tracking-widest text-slate-400	">
        TOTAL CONFIRMED CASES
      </h2>
      <div className="my-1 text-3xl font-bold text-slate-700">
        {/* {addComma(selectedCountryData.cases)} */}
      </div>
      {/* <ProgressBar /> */}
      <ul className="mt-2 space-y-2">
        <li className="flex justify-between ">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-purple-500"></div>
            <span className="text-slate-700">Active Cases</span>
          </div>
          <div className="font-bold text-slate-700 ">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-600">
              {/* +{addComma(selectedCountryData.todayCases)} */}
            </span>
            {/* {addComma(selectedCountryData.cases)} */}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-green-300"></div>
            <span className="text-slate-700">Recovered</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-600">
              {/* +{addComma(selectedCountryData.todayRecovered)} */}
            </span>
            {/* {addComma(selectedCountryData.recovered)} */}
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-sm bg-red-500"></div>
            <span className="text-slate-700">Deaths</span>
          </div>
          <div className="font-bold text-slate-700">
            <span className="mr-1 rounded-md bg-gray-100 p-1 text-xs text-slate-600">
              {/* +{addComma(selectedCountryData.todayDeaths)} */}
            </span>
            {/* {addComma(selectedCountryData.deaths)} */}
          </div>
        </li>
      </ul>
      <div className="mt-2 text-sm font-medium text-slate-800">
        {/* The ratio of Recovery (
        {getPercentage(
          selectedCountryData.recovered,
          selectedCountryData.cases
        )}
        %) & Deaths (
        {getPercentage(selectedCountryData.deaths, selectedCountryData.cases)}
        %). */}
      </div>
    </>
  );
};

export default WorldwideData;
