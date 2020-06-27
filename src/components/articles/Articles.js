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
  console.log('provera stejta', stateArticles[0]);
  useEffect(() => {
    dispatch(actions.GET());
  }, []);

  const deleteBtnHandler = (id) => {
    dispatch(actions.DELETE(id));
  };

  return (
    <section className={classes.articles}>
      {!stateLoading ? (
        <Article articleData={stateArticles} deleteBtn={deleteBtnHandler} />
      ) : (
        <Loader type='Oval' color='#b0b0b0' height={100} width={100} />
      )}
      <Article />
    </section>
  );
};

export default Articles;
