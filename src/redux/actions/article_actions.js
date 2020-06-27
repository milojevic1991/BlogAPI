import * as actionsType from './actionType';
import API from '../../api';

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

export const DELETE = (id) => {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      const result = await API.delete(`/BlogPosts/${id}`);
      console.log('delete request', result);
      console.log('delete request id', id);
      dispatch(deleteArticles(result, id));
    } catch (error) {
      console.log('EROR POST DELETE');
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

export const cancelPopup = () => {
  return {
    type: actionsType.CANCEL_POPUP,
  };
};
