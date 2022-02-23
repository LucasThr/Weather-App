import React from 'react';

const Spinner = () => {
  return (
    <figure className="relative flex justify-center items-center w-full h-full">
      <img
        className="animate-spin h-12 w-12"
        src={require('../assets/img/loading.png')}
      />
    </figure>
  );
};

export default Spinner;
