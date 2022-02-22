const setCities = (city) => {
  console.log("city", city)

  localStorage.setItem('Cities', "[]");
}

const getCities = () => {
  console.log(' localStorage.get("cities")')
  // if( !localStorage.getItem("cities"))  localStorage.setItem("cities",'[]')
  return JSON.parse( localStorage.getItem("cities")) ?? []
}

const getCity = (city) => {
  console.log('city', city)
}

export { setCities, getCities, getCity }