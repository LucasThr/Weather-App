// const removeDuplicate = (array) => [...new Set(array)];
const removeDuplicate = (array) => {
  return array.filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i);
};

const transformDataToListCityName = (raw) => {
  let listOfName = raw.map((item) => {
    return {name: item.name, id: item.id};
  });

  return removeDuplicate(listOfName);
};

export {removeDuplicate, transformDataToListCityName};
