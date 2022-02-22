import React from 'react';
import {useParams} from 'react-router';
import Navbar from '../components/Navbar';

const CityWeather = (props) => {
  const {city} = useParams();
  console.log('city', city);
  return (
    <main className="flex relative items-center flex-col h-screen bg-gray-800 dark:text-white text-black">
      <Navbar />
      {city}
    </main>
  );
};

export default CityWeather;
