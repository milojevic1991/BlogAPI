import React from 'react';
import PropTypes from 'prop-types';
import classes from './Article.module.css';

import Title from '../../common/title/Title';
import Image from '../../common/image/Image';
import Button from '../../common/button/Button';
import { motion } from 'framer-motion';
import shortid from 'shortid';

/**
 * Article component.
 */

const Article = ({ articleData = [], deleteBtn, editBtn }) => {
  let date = new Date();

  return (
    <>
      {/* Mapping Article component based by articleData prop (API resource) */}
      {articleData.map((article) => (
        <motion.article
          key={shortid.generate()}
          className={classes.article}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          <div className={classes.blogHeader}>
            <div className={classes.avatarImg}>
              <Image size={80} />
            </div>

            {/* Header of article */}
            <div className={classes.headerMain}>
              <Title title={article.title} className={classes.blogTitle} />
              <p>
                {`Posted date: 
            ${date.getDate()}.
            ${date.getMonth()}.
            ${date.getFullYear()} 
            at 
            ${date.getHours()}:
            ${date.getMinutes()} by `}
                <a href='/'>Some person</a>
              </p>
              <div className={classes.headerMainBtn}>
                {/*Edit article btn*/}
                <Button
                  className={classes.editBtn}
                  buttonClicked={() => editBtn(article.id)}
                  title={'Edit'}
                />
                {/*Delete article btn*/}
                <Button
                  buttonClicked={() => deleteBtn(article.id)}
                  className={classes.deleteBtn}
                  title={'Delete'}
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <p>{article.text}</p>

          {/*Placeholders*/}
          <div className={classes.articleImages}>
            <Image size={100} />
            <Image size={100} />
            <Image size={100} />
          </div>
        </motion.article>
      ))}
    </>
  );
};

export default Article;

Article.propTypes = {
  articleData: PropTypes.array.isRequired,
  deleteBtn: PropTypes.func,
  editBtn: PropTypes.string,
};
