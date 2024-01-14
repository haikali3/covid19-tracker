import React, { useEffect, useState } from 'react';
import { fetchCountryData } from '@/services/api/covid-data';

const Statistic = ({ selectedCountry }) => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const getStatistic = async () => {
      try {
        const data = await fetchCountryData(selectedCountry);
        setStatistics(data);
        console.log(`API Response for ${selectedCountry}:`, data);
      } catch (error) {
        console.error(
          `Error fetching statistics for ${selectedCountry}:`,
          error
        );
      }
    };

    getStatistic();
  }, [selectedCountry]);

  if (!statistics) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center flex flex-col">
      <div>
        <img
          className="mx-auto shadow-lg rounded-s-sm"
          src={statistics.countryInfo.flag}
          alt={`Flag of ${statistics.country}`}
          style={{ maxWidth: '100px' }}
        />
      </div>

      <div>
        <h1 className="my-2 text-xl font-semibold">{statistics.country}</h1>
        <h1>Cases: {statistics.cases}</h1>
        <h1>Deaths: {statistics.deaths}</h1>
        <h1>Recovered: {statistics.recovered}</h1>
        {/* Add more properties as needed */}
      </div>
    </div>
  );
};

export default Statistic;
