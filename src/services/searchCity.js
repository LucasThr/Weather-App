import {mande} from 'mande';

const searchCity = {
  async getName(name = '') {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/find?q=${name}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      const cityName = await res.json();
      if (cityName.count >= 1) return cityName.list[0].name;
      else return null;
    } catch (error) {
      console.log('error', error);
      return null;
    }
  },
};

export {searchCity};
