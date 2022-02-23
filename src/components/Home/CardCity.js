import React, {useEffect, useState} from 'react';
import FavoriteIcon from '../FavoriteIcon';
import WeatherItem from './WeatherItem';
import {useAppState, useActions} from '../../overmind';
import {
  searchIfCityIsFavorite,
  toggleFavorite,
} from '../../helpers/favorites.helper';
import Spinner from '../Spinner';

const CardCity = ({cityName, weather}) => {
  console.log('weather', weather);
  const [isFav, setIsFav] = useState(false);
  const state = useAppState();
  const actions = useActions();

  useEffect(() => {
    let cityIsIn = searchIfCityIsFavorite(cityName, state.favoritesCities);
    setIsFav(cityIsIn);
  }, [cityName]);

  const onClickFavorite = (isFav) => {
    toggleFavorite(
      state.favoritesCities,
      actions,
      isFav,
      cityName,
      weather.id,
      weather.coord,
    );
    setIsFav(!isFav);
  };
  let temp = weather?.infos?.data?.toFixed(0);
  return (
    <main className=" relative h-[70vh] flex flex-col justify-between pt-5 items-center w-11/12 bg-gradient-to-b from-cyan-600 to-blue-500 shadow-lg rounded-xl mx-2">
      <div className="absolute right-10">
        <FavoriteIcon show={isFav} onClick={() => onClickFavorite(isFav)} />
      </div>
      {weather ? (
        <>
          <h2 className="text-3xl font-bold mt-10">{cityName}</h2>
          <h2 className="text-6xl font-bold mt-4">{temp ?? '~'}°C</h2>
        </>
      ) : (
        <Spinner />
      )}
      <div className="flex w-11/12 py-10 border-t ">
        {weather ? (
          weather.subInfos?.map((data, index) => {
            return <WeatherItem key={index} item={data} />;
          })
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default CardCity;
