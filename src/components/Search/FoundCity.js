import React from 'react';
import {Link} from 'react-router-dom';

const FoundCity = ({city}) => {
  return (
    <Link
      to={`/meteo/${city}`}
      className="flex py-3 px-3 hover:bg-gray-400 rounded-xl">
      {city}
    </Link>
  );
};

export default FoundCity;
