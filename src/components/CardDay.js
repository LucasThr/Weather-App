import React from 'react';
import images from '../assets/images';
import {getDayFromDate} from '../helpers/date.helper';

const CardDay = ({dayWeather}) => {
  let date = getDayFromDate(dayWeather.date);
  let context = dayWeather.context;
  let dayTemp = dayWeather.temp.day.toFixed(0);
  let nightTemp = dayWeather.temp.night.toFixed(0);
  return (
    <div className="flex justify-between items-center w-full rounded-xl px-4 my-4 border h-20">
      <span>{date}</span>
      <div className="flex justify-center items-center gap-2">
        <img className="h-10" src={images[dayWeather.asset]} />
        <span className="capitalize">{context}</span>
      </div>
      <div>
        <span className="font-bold text-lg">{dayTemp}°</span>/
        <span className="font-light"> {nightTemp}°</span>
      </div>
    </div>
  );
};

export default CardDay;
