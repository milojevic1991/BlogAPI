import React from 'react';
import Title from '../../common/title/Title';
import classes from './Article.module.css';
import Image from '../../common/image/Image';
import Button from '../../common/button/Button';
import shortid from 'shortid';

const Article = ({ articleData = [], deleteBtn, editBtn }) => {
  let date = new Date();

  return (
    <>
      {articleData.map((article) => (
        <article key={shortid.generate()} className={classes.article}>
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
                <Button
                  className={classes.editBtn}
                  buttonClicked={() => editBtn(article.id)}
                  title={'Edit'}
                />
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

          <div className={classes.articleImages}>
            <Image size={100} />
            <Image size={100} />
            <Image size={100} />
          </div>
        </article>
      ))}
    </>
  );
};

export default Article;
