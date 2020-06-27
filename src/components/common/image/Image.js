import React from 'react';

const Image = ({ size }) => {
  return (
    <img alt='placeholder' src={`https://via.placeholder.com/${size}`}></img>
  );
};

export default Image;
