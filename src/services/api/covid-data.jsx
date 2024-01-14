// services/covid-data.jsx

export const fetchCountryData = async (countryCode) => {
  try {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${countryCode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${countryCode}:`, error);
    throw error;
  }
};

export const fetchWorldwideData = async () => {
  try {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching worldwide data:', error);
    throw error;
  }
};
