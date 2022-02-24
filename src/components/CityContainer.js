import React, {useEffect, useState} from 'react';
import {weatherService} from '../services/weather.service';
import ForecastDailyHour from './ForecastDailyHour';
import ForecastDay from './ForecastDay';
import CardCity from './Home/CardCity';
import Spinner from './Spinner';

const CityContainer = ({city, title}) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(async () => {
    if (city.coord) {
      let forecastInfos = await weatherService.getWeatherForecast(
        city.coord.lat,
        city.coord.lon,
      );
      setForecastData(forecastInfos);
    }
  }, [city]);

  return (
    <div className="snap-center min-h-screen flex flex-col w-full items-center shrink-0">
      <h3
        className={`w-full ml-8 mb-4 text-2xl ${!title && 'text-transparent'}`}>
        {title || '_'}
      </h3>
      {city.length !== 0 ? (
        <div className="h-full w-full ">
          <CardCity cityName={city.name} weather={city} />
          <ForecastDailyHour hoursWeather={forecastData.hours} />
          <ForecastDay daysWeather={forecastData.days} />
        </div>
      ) : (
        <div className="h-screen w-full">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CityContainer;
