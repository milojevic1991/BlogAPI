import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../common/link/Link';
import classes from '../navBar/NavBar.module.css';
import shortid from 'shortid';

/**
 * Navbar .
 */

/* Menu items data */
import { MENU_ITEMS } from '../../../data/data';

const NavBar = ({ isBurgerActive, linkClicked }) => {
  return (
    <nav role='menu' className={classes.navbar}>
      <ul
        className={
          isBurgerActive
            ? [classes.navLinks, classes.navActive].join(' ')
            : classes.navLinks
        }
      >
        {MENU_ITEMS.map((menuItem) => (
          <Link
            key={shortid.generate()}
            linkName={menuItem.text}
            linkTo={menuItem.linkTo}
            linkClicked={linkClicked}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  isBurgerActive: PropTypes.bool.isRequired,
  linkClicked: PropTypes.string,
};
