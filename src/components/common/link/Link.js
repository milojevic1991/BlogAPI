import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Link.module.css';

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
