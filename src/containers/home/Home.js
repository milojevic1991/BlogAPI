import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Articles from '../../components/articles/Articles';
import Button from '../../components/common/button/Button';
import Popup from '../../components/popup/Popup';
import Notification from '../../components/notification/Notification';
import Title from '../../components/common/title/Title';

import * as actions from '../../redux/actions/article_actions';

const Home = () => {
  const dispatch = useDispatch();

  /* State from Redux Store */
  const notificationData = useSelector((state) => state.article.notification);

  /* Removes the Notification component after 4s */
  useEffect(() => {
    let removeNotification = setTimeout(() => {
      dispatch(actions.closeNotification());
    }, 4000);

    return () => {
      clearTimeout(removeNotification);
    };
  }, [dispatch, notificationData]);

  return (
    <main>
      {/*Welcome title*/}
      <div className={classes.entryContent}>
        <Title className={classes.mainTitle} title={'Welcome to my blog'} />

        {/*Shows notification message*/}
        {notificationData.length !== 0 ? (
          <Notification
            closeNotification={() => dispatch(actions.closeNotification())}
            message={notificationData}
          />
        ) : null}

        {/*Add post btn */}
        <Button
          className={classes.addBtn}
          title={'Add post'}
          buttonClicked={() => dispatch(actions.showPopup())}
        />
      </div>

      {/*Main content */}
      <div className={classes.content}>
        <Sidebar />
        <Articles />
      </div>

      {/*Popup component */}
      <Popup />
    </main>
  );
};

export default Home;
