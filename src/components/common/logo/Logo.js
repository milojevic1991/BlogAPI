import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <h1 className={classes.logoText}>My blog</h1>
    </div>
  );
};

export default Logo;
