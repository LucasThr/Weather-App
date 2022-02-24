import React from 'react';

const WeatherItem = ({item}) => {
  const {asset, data, suffix, name} = item;
  return (
    <div className="flex flex-col w-full mx-2 justify-between items-center rounded">
      <img className="h-10 w-10 mb-1" src={asset} />
      <span className="font-bold">{data + suffix}</span>
      <span>{name}</span>
    </div>
  );
};

export default WeatherItem;
