import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ size }) => {
  return (
    <img alt='placeholder' src={`https://via.placeholder.com/${size}`}></img>
  );
};

export default Image;
Image.propTypes = {
  size: PropTypes.number.isRequired,
};
