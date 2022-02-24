import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import CityContainer from '../components/CityContainer';
import Navbar from '../components/Navbar';
import {weatherService} from '../services/weather.service';

const CityView = (props) => {
  const {city} = useParams();
  const [actualCityData, setActualCityData] = useState([]);
  console.log('city', city);
  useEffect(async () => {
    let cityData = await weatherService.getTodayCityWeather(city);
    setActualCityData(cityData);
    console.log('cityData', cityData);
  }, [city]);

  return (
    <main className="w-full flex relative items-center flex-col h-full bg-gray-800 dark:text-white text-black">
      <Navbar />
      <CityContainer city={actualCityData} />
    </main>
  );
};

export default CityView;
