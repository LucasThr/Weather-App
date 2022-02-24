import React, {useState} from 'react';
import FoundCity from './FoundCity';
import {searchService} from '../../services/search.service';
import {useNavigate} from 'react-router-dom';

const SearchModal = ({hideModal}) => {
  let navigate = useNavigate();
  const [cityInput, setCityInput] = useState('');
  const [foundCity, setFoundCity] = useState(null);

  const handeChangeInput = async (target) => {
    setCityInput(target.value);
    setFoundCity(await searchService.getName(target.value.toLowerCase()));
  };

  const handlePressEnter = (key) => {
    if (key === 'Enter' && foundCity) {
      hideModal();
      navigate(`/meteo/${foundCity[0]}`);
    }
  };

  return (
    <main
      onClick={(e) => {
        if (e.target === e.currentTarget) hideModal();
      }}
      className="flex w-full min-h-screen bg-opacity-50 justify-center bg-black absolute ">
      <div className="absolute z-40 w-10/12 top-20 h-auto text-white flex flex-col justify-start rounded-xl bg-gray-600 ">
        <div className="flex justify-center items-center w-full h-10 rounded-xl border-2 border-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-2 text-sky-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            autoFocus
            onKeyDown={(e) => handlePressEnter(e.key)}
            value={cityInput}
            onChange={(e) => handeChangeInput(e.target)}
            className="w-full px-2 py-1 focus:outline-none rounded bg-transparent"
            placeholder="Recherche..."
          />
        </div>
        <div>
          {foundCity ? (
            foundCity.map((city) => (
              <FoundCity hideModal={() => hideModal()} city={city} />
            ))
          ) : (
            <>
              {cityInput ? (
                <div className="flex py-3 px-3 hover:bg-gray-400 rounded-xl">
                  Aucun résultat
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchModal;
