import {weatherFactory} from '../factory/weather.factory';
import {weatherRepository} from '../repository/weather.repository';

const weatherService = {
  async getWeatherCityWithId(id) {
    const rawData = await weatherRepository.getWeatherWithId(id);
    const cityInfos = weatherFactory.transformDataForCardCity(rawData.list[0]);
    return cityInfos;
  },

  async getWeatherFavoritesCities(cities) {
    let citiesJoin = cities.map((city) => {
      return city.id;
    });
    citiesJoin = citiesJoin.join(',');
    const raw = await weatherRepository.getWeatherFavoritesCities(citiesJoin);
    if (raw.count <= 0 || raw.cod === '404') return [];
    const citiesInfos = weatherFactory.transformDataForCitiesFavorites(raw);
    return citiesInfos;
  },

  async getWeatherWithPosition(lat, lon) {
    const rawData = await weatherRepository.getWeatherWithCoords(lat, lon);
    const cityInfos = weatherFactory.transformDataForCardCity(rawData.list[0]);
    return cityInfos;
  },

  async getWeatherForecast(lat, lon) {
    const raw = await weatherRepository.getWeatherForecast(lat, lon);
    let forecastWeather = weatherFactory.getForecastFromFactory(raw);
    return forecastWeather;
  },
};

export {weatherService};
