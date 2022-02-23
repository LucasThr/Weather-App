const toggleFavorite = (list, action, isFav, name, id, coord) => {
  let filteredList = list.map((item) => {
    return item;
  });
  if (isFav) {
    filteredList = filteredList.filter(
      (city) => city.name.toLowerCase() !== name.toLowerCase(),
    );
  } else {
    filteredList.push({id: id, name: name, lat: coord.lat, lon: coord.lon});
  }
  action.setFavorites(filteredList);
};

const searchIfCityIsFavorite = (name, list) => {
  if (!name || !list) return false;
  let filterArray = list.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );
  return filterArray.length === 0 ? false : true;
};

export {searchIfCityIsFavorite, toggleFavorite};
