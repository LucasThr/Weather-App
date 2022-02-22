const getTodayCityWeather = async (cityName) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/find?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
  );
  const cityInfos = await res.json();
  return [
    {
      name: 'temp',
      data: cityInfos.list[0].main.temp,
    },
    {
      name: 'temp_max',
      data: cityInfos.list[0].main.temp_max,
    },
    {
      name: 'temp_min',
      data: cityInfos.list[0].main.temp_min,
    },
  ];
};

export {getTodayCityWeather};
