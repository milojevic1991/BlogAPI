import * as actionsType from './actionType';
import API from '../../api'; // axios HTTP

export const GET = () => {
  return async (dispatch) => {
    dispatch(requestStart());

    try {
      const result = await API.get('/BlogPosts');
      dispatch(getArticles(result.data.resultData));
    } catch (error) {}
  };
};

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
      console.log('EROR POST');
    }
  };
};

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
      console.log('EDIT U ACTION,SUV objekt', result);
      dispatch(editArticles(result, id));
    } catch (error) {
      console.log('EROR EDIT ');
    }
  };
};

export const DELETE = (id) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const result = await API.delete(`/BlogPosts/${id}`);
      dispatch(deleteArticles(result, id));
    } catch (error) {}
  };
};

export const SEARCH = (searchTerm) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      // const result = await API.get(`/BlogPosts/Search?term=${searchTerm}`);

      const result = await API.get(
        `/BlogPosts${
          searchTerm.length === 0 ? `` : `/Search?term=${searchTerm}`
        }`
      );

      dispatch(searchArticle(result.data.resultData, searchTerm));
    } catch (error) {
      console.log('EROR U SEARCH', error);
    }
  };
};

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

export const popupFormInput = (name, value) => {
  return {
    type: actionsType.POPUP_FORM_INPUT,
    name: name,
    value: value,
  };
};

export const searchArticle = (articleData, searchTerm) => {
  return {
    type: actionsType.SEARCH_ARTICLE,
    payload: articleData,
    searchTerm: searchTerm,
  };
};
