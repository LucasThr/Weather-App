import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import CityContainer from '../components/CityContainer';
import FavoriteIcon from '../components/FavoriteIcon';
import CardCity from '../components/Home/CardCity';
import Navbar from '../components/Navbar';
import {weatherService} from '../services/weather.service';

const CityView = (props) => {
  const {city} = useParams();
  const [actualCityData, setActualCityData] = useState(city ?? props.city);

  useEffect(async () => {
    let cityData = await weatherService.getTodayCityWeather(city);
    setActualCityData(cityData);
  }, [city]);

  return (
    <main className="flex relative items-center flex-col min-h-screen h-auto bg-gray-800 dark:text-white text-black">
      <Navbar />
      <CityContainer city={actualCityData} />
    </main>
  );
};

export default CityView;
