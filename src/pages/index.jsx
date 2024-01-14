import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Lottie from 'lottie-react';
import animationData from '@/assets/animation-covid.json';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import Statistic from '@/components/Statistic';
import MainCard from '@/components/MainCard';

export default function Home({ countriesData, worldwideData, country }) {
  const [selectedCountry, setSelectedCountry] = useState(country);
  const additionalSelectedCountries = [458, 360, 702, 608];

  return (
    <>
      <Head>
        <title>COVID-19</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A Tracker for COVID-19." />
      </Head>
      <Navbar />

      <div className="flex flex-wrap items-center justify-center bg-gray-100">
        <MainCard addClass="bg-white">
          <CardContent
            countries={countriesData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </MainCard>
        <div style={{ width: '45%' }}>
          <Lottie animationData={animationData} height={50} width={50} />
        </div>
      </div>
      <div className="my-6 lg:mx-16">
        <h1 className="ml-8 font-Roboto text-2xl font-bold text-slate-700">
          Statistics
        </h1>
        <div className="mt-6 flex flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          {/* Statistic for additional selected countries */}
          {additionalSelectedCountries.map((countryId) => (
            <Card key={countryId}>
              <Statistic selectedCountry={countryId} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
