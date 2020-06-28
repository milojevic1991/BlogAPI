import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Articles.module.css';
import Article from './article/Article';
import * as actions from '../../redux/actions/article_actions';
import Loader from 'react-loader-spinner';

const Articles = () => {
  const dispatch = useDispatch();
  const stateArticles = useSelector((state) => state.article.articles);
  const stateLoading = useSelector((state) => state.article.isLoading);

  const isEdited = useSelector((state) => state.article.isEdited);

  useEffect(() => {
    dispatch(actions.GET());
    console.log('GET OBJECT', stateArticles);
  }, [isEdited, dispatch]);

  console.log('article');

  const deleteBtnHandler = (id) => {
    dispatch(actions.DELETE(id));
  };

  const editBtnHandler = (id) => {
    dispatch(actions.editPopup(id));
  };

  return (
    <section className={classes.articles}>
      {!stateLoading ? (
        <Article
          articleData={stateArticles}
          deleteBtn={deleteBtnHandler}
          editBtn={editBtnHandler}
        />
      ) : (
        <Loader type='Oval' color='#b0b0b0' height={100} width={100} />
      )}
      <Article />
    </section>
  );
};

export default Articles;
