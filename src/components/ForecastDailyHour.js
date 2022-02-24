import React from 'react';
import CardHour from './CardHour';
import Spinner from './Spinner';

const ForecastDailyHour = ({hoursWeather}) => {
  if (hoursWeather) {
    return (
      <div className="flex w-full h-40 overflow-scroll  pl-4 mt-4">
        {hoursWeather.map((hour, item) => {
          return <CardHour key={item} id={item} hourWeather={hour} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default ForecastDailyHour;
