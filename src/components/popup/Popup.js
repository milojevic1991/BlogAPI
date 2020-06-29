import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Popup.module.css';
import Title from '../common/title/Title';
import Button from '../common/button/Button';
// import uuid from 'uuid';

import * as actions from '../../redux/actions/article_actions';

/**
 * Popup component.
 */

const Popup = () => {
  const dispatch = useDispatch();

  /* States from Redux Store */
  const isPopupActive = useSelector((state) => state.article.popupActive);
  const popupFormData = useSelector((state) => state.article.popup);
  const articlesData = useSelector((state) => state.article.articles);

  /* Input event */
  const textInputHandler = (e) => {
    const { value, name } = e.target;
    dispatch(actions.popupFormInput(name, value));
  };

  /* Btn event */
  const postArticleHandler = (e) => {
    /* Conditional between updating and adding article */
    if (articlesData.find((article) => article.id === popupFormData.id)) {
      dispatch(actions.EDIT(popupFormData, popupFormData.id));
    } else {
      dispatch(actions.POST(popupFormData));
    }
    e.preventDefault();
  };

  return (
    <form
      /*Toggles between form visibility*/
      className={
        isPopupActive
          ? [classes.popupWrapp, classes.active].join(' ')
          : classes.popupWrapp
      }
      onSubmit={postArticleHandler}
    >
      <Title title={'Add/Edit blog post'} />

      {/*Title input*/}
      <div className={classes.titleSection}>
        <label>Title</label>
        <input
          required
          value={popupFormData.title}
          name='title'
          type='text'
          placeholder='Enter blog title'
          onChange={textInputHandler}
        ></input>
      </div>

      {/*Text input*/}
      <div className={classes.textSection}>
        <label>Text</label>
        <textarea
          required
          value={popupFormData.text}
          name='text'
          placeholder="I bet it's something interesting . . ."
          onChange={textInputHandler}
        ></textarea>
      </div>

      {/*Btn row*/}
      <div className={classes.popupBtn}>
        <Button type={'submit'} title={'Post'} />
        <Button
          title={'Cancel'}
          buttonClicked={() => dispatch(actions.cancelPopup())}
        />
      </div>
    </form>
  );
};

export default Popup;
