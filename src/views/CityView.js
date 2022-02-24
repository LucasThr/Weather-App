import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import CityContainer from '../components/CityContainer';
import Navbar from '../components/Navbar';
import {weatherService} from '../services/weather.service';

const CityView = (props) => {
  const {city} = useParams();
  const [actualCityData, setActualCityData] = useState([]);

  useEffect(async () => {
    let cityData = await weatherService.getTodayCityWeather(city);
    setActualCityData(cityData);
  }, [city]);

  return (
    <main className="overflow-hidden w-full flex relative items-center flex-col h-full bg-gray-800 text-white ">
      <Navbar />
      <div className="flex w-full snap-x mx-auto h-auto overflow-scroll ">
        <CityContainer city={actualCityData} />
      </div>
    </main>
  );
};

export default CityView;
