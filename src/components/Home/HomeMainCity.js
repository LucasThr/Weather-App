import React from 'react';
import WeatherItem from './WeatherItem';

const HomeMainCity = ({cityName, weather}) => {
  console.log('weather', weather);
  return (
    <main className="h-[70vh] flex flex-col justify-between py-5 items-center w-11/12 bg-gradient-to-b from-cyan-600 to-blue-500 shadow-lg rounded-xl mx-2">
      <h2 className="text-3xl font-bold mt-4">{cityName}</h2>
      <div className="flex w-full">
        {weather.map((data, index) => {
          return <WeatherItem key={index} data={data} />;
        })}
      </div>
    </main>
  );
};

export default HomeMainCity;
