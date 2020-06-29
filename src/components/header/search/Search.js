import React from 'react';
import PropTypes from 'prop-types';
import classes from './Search.module.css';

const Search = ({ value, searchTerm }) => {
  return (
    <input
      className={classes.inputSearch}
      onChange={searchTerm}
      type='text'
      value={value}
      placeholder='Search term...'
    ></input>
  );
};

export default Search;

Search.propTypes = {
  value: PropTypes.string,
  searchTerm: PropTypes.func.isRequired,
};
