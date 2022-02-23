import images from '../assets/images';

const weatherFactory = {
  transformDataForCardCity(raw) {
    return {
      name: raw.name,
      id: raw.id,
      infos: {
        name: 'temp',
        data: raw.main.temp,
      },
      coord: {
        lat: raw.coord.lat,
        lon: raw.coord.lon,
      },
      asset: raw.weather.main,
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
          data: raw.rain ?? 0,
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
    console.log('raw', raw);
    let forecastDaysList = raw.daily.map((day) => {
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
    let forecastHoursList = raw.hourly.map((hour) => {
      return {
        temp: hour.temp,
        asset: hour.weather[0].main.toLowerCase(),
        date: hour.dt,
      };
    });
    return {
      days: forecastDaysList,
      hours: forecastHoursList,
    };
  },
};

export {weatherFactory};
