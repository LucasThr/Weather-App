import {data} from 'autoprefixer';
import {mande} from 'mande';
import {useEffect, useState} from 'react';
import HomeMainCity from '../components/Home/HomeMainCity';
import Navbar from '../components/Navbar';
import SearchModal from '../components/Search/SearchModal';
import {searchCity} from '../services/searchCity';
import {getCities, getCity} from '../helpers/localStorage';
import {getTodayCityWeather} from '../services/weather';

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState('Aix-noulette');
  const [dataCity, setDataCity] = useState([]);

  useEffect(() => {
    getApiInfo();
  }, []);

  const getApiInfo = async () => {
    let cityData = await getTodayCityWeather(city);
    setDataCity(cityData);
  };

  return (
    <main className="flex relative items-center flex-col h-screen bg-gray-800 dark:text-white text-black ">
      {modalVisible && (
        <SearchModal setModalVisible={() => setModalVisible(false)} />
      )}

      <Navbar setModalVisible={() => setModalVisible(!modalVisible)} />
      <HomeMainCity cityName={city} weather={dataCity} />
      <h1
        onClick={() => console.log('oko')}
        className="text-4xl text-indigo-400 text-white my-10 font-bold">
        {city}
      </h1>
      {/* <h2 className="text-white"><span></span> Ville: {city} </h2> */}
      {/* <h2>Température : {dataCity.temp ?? ''} </h2>
      <h2>Température Minimum : {dataCity.temp_min ?? ''} </h2>
      <h2>Température Maximal: {dataCity.temp_max ?? ''} </h2> */}
    </main>
  );
};

export default Home;
