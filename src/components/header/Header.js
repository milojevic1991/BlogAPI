import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import Logo from '../common/logo/Logo';
import Search from './search/Search';
import NavBar from './navBar/NavBar';
import Burger from './burger/Burger';
import { debounce } from 'lodash';
import * as actions from '../../redux/actions/article_actions';

/**
 * Header component
 */

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const dispatch = useDispatch();

  const burgerClickedHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  /* Search input event */

  const searchTermHandler = (e) => {
    dispatch(actions.SEARCH(e));
  };

  /* Debounce API calls */
  const debounceSearchTerm = useCallback(debounce(searchTermHandler, 300), []);

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.navWrapp}>
        <Search searchTerm={(e) => debounceSearchTerm(e.target.value)} />

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
