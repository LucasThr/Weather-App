const weatherRepository = {
  async getWeatherWithCity(name) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/find?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
      );
      return await res.json();
    } catch (error) {
      console.log('error : ', error);
    }
  },

  async getWeatherFavoritesCities(cities) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/group?id=${cities}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
      );
      return await res.json();
    } catch (error) {
      console.log('error : ', error);
    }
  },

  async getWeatherWithCoords(lat, lon) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/find?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
      );
      return await res.json();
    } catch (error) {
      console.log('error : ', error);
    }
  },
  async getWeatherForecast(lat, lon) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
      );
      return await res.json();
    } catch (error) {
      console.log('error : ', error);
    }
  },
};

export {weatherRepository};
