import images from '../assets/images';
import {getNumberHourToReturn} from '../helpers/date.helper';

const weatherFactory = {
  transformDataForCardCity(raw) {
    let rain = raw.rain ? raw.rain['1h'] * 100 : 0;
    rain = rain.toFixed(0);
    return {
      name: raw.name,
      id: raw.id,
      temp: raw.main.temp,
      coord: {
        lat: raw.coord.lat,
        lon: raw.coord.lon,
      },
      asset: raw.weather[0].main.toLowerCase(),
      subInfos: [
        {
          name: 'Humidité',
          data: raw.main.humidity,
          asset: images.humidityIcon,
          suffix: '%',
        },
        {
          name: 'Vents',
          data: raw.wind.speed,
          asset: images.windIcon,
          suffix: 'km/h',
        },
        {
          name: 'Pluie',
          data: rain,
          asset: images.rainIcon,
          suffix: '%',
        },
      ],
    };
  },

  transformDataForCitiesFavorites(raw) {
    let citiesData = [];
    raw.list.map((city) => {
      citiesData.push(this.transformDataForCardCity(city));
    });
    return citiesData;
  },

  getForecastFromFactory(raw) {
    const maxHourToReturn = getNumberHourToReturn(raw.hourly[0].dt);
    let forecastDaysList = raw.daily.map((day, item) => {
      return {
        temp: {
          day: day.temp.day,
          night: day.temp.night,
        },
        asset: day.weather[0].main.toLowerCase(),
        context: day.weather[0].description.toLowerCase(),
        date: day.dt,
      };
    });
    let forecastHoursList = [];
    for (let hour = 0; hour < maxHourToReturn; hour++) {
      forecastHoursList.push({
        temp: raw.hourly[hour].temp,
        asset: raw.hourly[hour].weather[0].main.toLowerCase(),
        date: raw.hourly[hour].dt,
      });
    }
    return {
      days: forecastDaysList,
      hours: forecastHoursList,
    };
  },
};

export {weatherFactory};
