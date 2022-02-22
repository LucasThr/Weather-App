import React from 'react';

const WeatherItem = ({data}) => {
  return (
    <div className="flex flex-col w-full  mx-2 bg-sky-500 justify-center items-center rounded">
      <span className="font-bold">{data.data}</span>
      <span>{data.name}</span>
    </div>
  );
};

export default WeatherItem;
