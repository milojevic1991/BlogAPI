import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Link.module.css';

/**
 * Main Link component.
 */

const Link = ({ linkName, linkTo, linkClicked, style }) => {
  return (
    <NavLink
      style={style}
      className={classes.navLink}
      to={linkTo}
      onClick={linkClicked}
    >
      {linkName}
    </NavLink>
  );
};

export default Link;
Link.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  style: PropTypes.object,
  linkClicked: PropTypes.func,
};
