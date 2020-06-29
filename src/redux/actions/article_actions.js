import * as actionsType from './actionType';
import API from '../../api'; // axios HTTP with base URL

/**
 *I used a single reducer for the sake of time, usually I would split in multiply reducer, and that's why I included 'combine reducer' function in index.js.
 */

/* Get articles */
export const GET = () => {
  return async (dispatch) => {
    dispatch(requestStart());

    try {
      const result = await API.get('/BlogPosts');
      dispatch(getArticles(result.data.resultData));
    } catch (error) {
      console.log('error GET', error);
    }
  };
};

/* Add new article */
export const POST = (formData) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const result = await API.post('/BlogPosts', {
        title: formData.title,
        text: formData.text,
        categoryId: 0,
      });
      dispatch(postArticles(result));
    } catch (error) {
      console.log('error POST', error);
    }
  };
};

/* Edit  article */
export const EDIT = (formData, id) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const result = await API.put(`/BlogPosts/${id}`, {
        id: id,
        title: formData.title,
        text: formData.text,
        categoryId: 0,
      });
      dispatch(editArticles(result, id));
    } catch (error) {
      console.log('error EDIT', error);
    }
  };
};

/* Delete  article */
export const DELETE = (id) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const result = await API.delete(`/BlogPosts/${id}`);
      dispatch(deleteArticles(result, id));
    } catch (error) {}
  };
};

/* Search  article */

export const SEARCH = (searchTerm) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      /* Checks if we have a search term */
      const result = await API.get(
        `/BlogPosts${
          searchTerm.length === 0 ? `` : `/Search?term=${searchTerm}`
        }`
      );
      dispatch(searchArticle(result.data.resultData, searchTerm));
    } catch (error) {
      console.log('error SEARCH', error);
    }
  };
};

/* Article actions  */
export const getArticles = (articleData) => {
  return {
    type: actionsType.GET_ARTICLE,
    payload: articleData,
  };
};

export const postArticles = (articleData) => {
  return {
    type: actionsType.POST_ARTICLE,
    payload: articleData,
  };
};

export const editArticles = (articleData, id) => {
  return {
    type: actionsType.EDIT_ARTICLE,
    payload: articleData,
    id: id,
  };
};
export const deleteArticles = (articleData, id) => {
  return {
    type: actionsType.DELETE_ARTICLE,
    payload: articleData,
    id: id,
  };
};

/* Request actions  */

export const requestStart = () => {
  return {
    type: actionsType.REQUEST_START,
  };
};

export const requestSuccess = (articles) => {
  return {
    type: actionsType.REQUEST_SUCCESS,
    payload: articles,
  };
};

/* Popup actions  */

export const popupFormInput = (name, value) => {
  return {
    type: actionsType.POPUP_FORM_INPUT,
    name: name,
    value: value,
  };
};

export const showPopup = () => {
  return {
    type: actionsType.SHOW_POPUP,
  };
};

export const editPopup = (id) => {
  return {
    type: actionsType.EDIT_POPUP,
    id: id,
  };
};

export const cancelPopup = () => {
  return {
    type: actionsType.CANCEL_POPUP,
  };
};

/* Search actions  */
export const searchArticle = (articleData, searchTerm) => {
  return {
    type: actionsType.SEARCH_ARTICLE,
    payload: articleData,
    searchTerm: searchTerm,
  };
};

/* Close message actions  */

export const closeNotification = () => {
  return {
    type: actionsType.ClOSE_NOTIFICATION,
  };
};
