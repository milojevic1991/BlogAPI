import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import Logo from '../common/logo/Logo';
import Search from './search/Search';
import NavBar from './navBar/NavBar';
import Burger from './burger/Burger';

import * as actions from '../../redux/actions/article_actions';

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.article.searchTerm);

  const burgerClickedHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const searchTermHandler = (e) => {
    dispatch(actions.SEARCH(e.target.value));
    console.log('SEARCH', e.target.value);
  };

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.navWrapp}>
        <Search value={searchTerm} searchTerm={searchTermHandler} />
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
