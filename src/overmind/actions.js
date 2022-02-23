export const setFavorites = async ({state}, array) => {
  console.log('array,', array);
  if (!array) return;
  state.favoritesCities = array;
};

export const removeFavorite = async ({state}, array) => {
  state.favoritesCities = array;
};
