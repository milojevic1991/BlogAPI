import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Popup.module.css';
import Title from '../common/title/Title';
import Button from '../common/button/Button';
// import uuid from 'uuid';

import * as actions from '../../redux/actions/article_actions';

const Popup = ({ articleData }) => {
  const [formData, setFormData] = useState({ title: '', text: '' });

  const dispatch = useDispatch();
  const isPopupActive = useSelector((state) => state.article.popupActive);
  const popupFormData = useSelector((state) => state.article.popup);
  const articlesData = useSelector((state) => state.article.articles);

  const textInputHandler = (e) => {
    const { value, name } = e.target;

    dispatch(actions.popupFormInput(name, value));
  };

  const postArticleHandler = (e) => {
    if (articlesData.find((article) => article.id === popupFormData.id)) {
      dispatch(actions.EDIT(popupFormData, popupFormData.id));
    } else {
      dispatch(actions.POST(popupFormData));
    }
    e.preventDefault();
  };

  return (
    <form
      className={
        isPopupActive
          ? [classes.popupWrapp, classes.active].join(' ')
          : classes.popupWrapp
      }
      onSubmit={postArticleHandler}
    >
      <Title title={'Add/Edit blog post'} />
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

      <div className={classes.textSection}>
        <label>Text</label>
        <textarea
          required
          value={popupFormData.text}
          name='text'
          placeholder="I bet it's something interesting . . ."
          onChange={textInputHandler}
          //  className={classes.contactFormTextArea}
        ></textarea>
      </div>

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
