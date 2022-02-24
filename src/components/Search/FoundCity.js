import React from 'react';
import {Link} from 'react-router-dom';

const FoundCity = ({city, id, hideModal}) => {
  return (
    <li>
      <Link
        onClick={hideModal}
        to={`/meteo/${id}`}
        className="flex py-3 px-3 hover:bg-gray-400 rounded-xl">
        {city}
      </Link>
    </li>
  );
};

export default FoundCity;
