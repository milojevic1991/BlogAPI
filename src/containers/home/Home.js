import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Articles from '../../components/articles/Articles';
import Button from '../../components/common/button/Button';
import Popup from '../../components/popup/Popup';

import * as actions from '../../redux/actions/article_actions';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <div className={classes.entryContent}>
        <h1>Welcome to my blog</h1>
        <Button
          className={classes.addBtn}
          title={'ajmo'}
          buttonClicked={() => dispatch(actions.showPopup())}
        />
      </div>

      <div className={classes.content}>
        <Sidebar />
        <Articles />
      </div>

      <Popup />
    </main>
  );
};

export default Home;
