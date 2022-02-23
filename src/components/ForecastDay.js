import React from 'react';
import CardDay from './CardDay';
import Spinner from './Spinner';

const ForecastDay = ({daysWeather = []}) => {
  if (daysWeather) {
    return (
      <div className="w-full px-4">
        {daysWeather.map((day, item) => {
          return <CardDay key={item} dayWeather={day} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default ForecastDay;
