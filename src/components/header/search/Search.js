import React from 'react';
import PropTypes from 'prop-types';
import classes from './Search.module.css';

const Search = ({ value, onChange }) => {
  return (
    <input
      className={classes.inputSearch}
      onChange={onChange}
      type='text'
      value={value}
      placeholder='Search term...'
    ></input>
  );
};

export default Search;

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
