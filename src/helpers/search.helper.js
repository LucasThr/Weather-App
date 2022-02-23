const removeDuplicate = (array) => [...new Set(array)];

const transformDataToListCityName = (raw) => {
  let listOfName = raw.map((item) => {
    return item.name;
  });

  return removeDuplicate(listOfName);
};

export {removeDuplicate, transformDataToListCityName};
