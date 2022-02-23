import {useEffect, useState} from 'react';
import CityContainer from '../components/CityContainer';
import Navbar from '../components/Navbar';
import {useAppState} from '../overmind';
import {weatherService} from '../services/weather.service';

const HomeView = (props) => {
  const [dataCities, setDataCities] = useState([]);
  const [actualCity, setActualCity] = useState([]);
  const {favoritesCities} = useAppState();
  useEffect(() => {
    getApiInfo();
    getActualPostition();
  }, [favoritesCities]);

  const getActualPostition = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  };

  const getApiInfo = async () => {
    let citiesData = await weatherService.getWeatherFavoritesCities(
      favoritesCities,
    );
    setDataCities(citiesData);
  };

  return (
    <main className="overflow-hidden  w-full flex relative items-center flex-col min-h-screen h-auto bg-gray-800 dark:text-white text-black">
      <Navbar />
      <div className="flex w-screen snap-x mx-auto h-auto overflow-scroll">
        <CityContainer city={actualCity} />
        {dataCities.map((city, item) => {
          return <CityContainer key={item} city={city} />;
        })}
      </div>
    </main>
  );
};

export default HomeView;
