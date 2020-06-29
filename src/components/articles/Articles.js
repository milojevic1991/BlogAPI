import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Article from './article/Article';
import Loader from 'react-loader-spinner';
import Title from '../common/title/Title';
import classes from './Articles.module.css';
import * as actions from '../../redux/actions/article_actions';

/**
 * Articles component.
 */

const Articles = () => {
  const dispatch = useDispatch();

  /* States from Redux Store */
  const articlesData = useSelector((state) => state.article.articles);
  const isLoading = useSelector((state) => state.article.isLoading);
  const isEdited = useSelector((state) => state.article.isEdited);
  const searchData = useSelector((state) => state.article.search);

  useEffect(() => {
    dispatch(actions.GET());
  }, [isEdited, dispatch]);

  /* Btn events */
  const deleteBtnHandler = (id) => {
    dispatch(actions.DELETE(id));
  };

  const editBtnHandler = (id) => {
    dispatch(actions.editPopup(id));
  };

  return (
    <section className={classes.articles}>
      {/* Message when articles are zero. */}

      {searchData.searchStarted && articlesData.length === 0 ? (
        <Title title={'Sorry, no results were found.'} />
      ) : null}

      {/*Toggles between articles, and search results.*/}
      {!isLoading &&
      articlesData.length === 0 &&
      searchData.searchTerm.length === 0 ? (
        <Title title={`Its quiet here, add something :)`} />
      ) : !isLoading ? (
        <Article
          articleData={articlesData}
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
