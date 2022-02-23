import moment from 'moment';
import React from 'react';
import images from '../assets/images';
import {getHourFromDate} from '../helpers/date.helper';

const CardHour = ({hourWeather}) => {
  let date = getHourFromDate(hourWeather.date);
  let temp = hourWeather.temp.toFixed(0);
  return (
    <div className="w-20 flex flex-col items-center justify-evenly shrink-0 h-36 mr-4 border border-blue-500 rounded-xl">
      <span className="text-xl font-bold"> {temp}°</span>
      <img className="h-10" src={images[hourWeather.asset]} />
      <span> {date}</span>
    </div>
  );
};

export default CardHour;
