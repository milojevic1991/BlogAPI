import React from 'react';
import classes from './Sidebar.module.css';
import Link from '../common/link/Link';
import shortid from 'shortid';
import { SIDEBAR_MENU_ITEM } from '../../data/data';

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h3>Nesto</h3>
      <nav className={classes.sidebarNav}>
        {SIDEBAR_MENU_ITEM.map((menuItem) => (
          <Link
            style={{ color: 'black' }}
            key={shortid.generate()}
            linkName={menuItem.text}
            linkTo={menuItem.linkTo}
            // linkClicked={linkClicked}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
