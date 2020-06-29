import React from 'react';
import PropTypes from 'prop-types';
import './Title';
/**
 * Main Title component.
 */

const Title = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
