const searchRepository = {
  async getNamesFromApi(name) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/find?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`,
      );
      return await res.json();
    } catch (error) {
      console.log('error :', error);
      return null;
    }
  },
};

export {searchRepository};
