import {mande} from 'mande';
import {transformDataToListCityName} from '../helpers/search.helper';
import {searchRepository} from '../repository/search.repository';

const searchService = {
  async getName(name = '') {
    const cityName = await searchRepository.getNamesFromApi(name);
    if (cityName.count >= 1) return transformDataToListCityName(cityName.list);
    else return null;
  },
};

export {searchService};
