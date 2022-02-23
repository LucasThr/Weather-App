const weatherRepository = {
  async getWeatherWithCity(name) {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/find?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
    );
    return await res.json();
  },

  async getWeatherFavoritesCities(cities) {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/group?id=${cities}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
    );
    return await res.json();
  },

  async getWeatherForecast(lat, lon) {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
    );
    return await res.json();
  },
};

export {weatherRepository};
