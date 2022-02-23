import React, {useEffect, useState} from 'react';
import {weatherService} from '../services/weather.service';
import ForecastDailyHour from './ForecastDailyHour';
import ForecastDay from './ForecastDay';
import CardCity from './Home/CardCity';

const CityContainer = ({city}) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(async () => {
    let forecastInfos = await weatherService.getWeatherForecast(
      city.coord.lat,
      city.coord.lon,
    );
    setForecastData(forecastInfos);
  }, [city]);

  return (
    <div className="snap-center h-auto flex flex-col w-screen items-center shrink-0">
      <CardCity cityName={city.name} weather={city} />
      <ForecastDailyHour hoursWeather={forecastData.hours} />
      <ForecastDay daysWeather={forecastData.days} />
    </div>
  );
};

export default CityContainer;
