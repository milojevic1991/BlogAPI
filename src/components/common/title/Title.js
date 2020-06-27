import React from 'react';
import './Title';

const Title = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

export default Title;
