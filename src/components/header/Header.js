import React, { useState } from 'react';
import classes from './Header.module.css';
import Logo from '../common/logo/Logo';
import Search from './search/Search';
import NavBar from './navBar/NavBar';
import Burger from './burger/Burger';

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerClickedHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.navWrapp}>
        <Search />
        <NavBar
          isBurgerActive={isBurgerActive}
          linkClicked={burgerClickedHandler}
        />
        <Burger burgerClicked={burgerClickedHandler} active={isBurgerActive} />
      </div>
    </header>
  );
};

export default Header;
