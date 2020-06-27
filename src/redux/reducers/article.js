import * as actionsType from '../actions/actionType';

const initialState = {
  articles: [],
  popupActive: false,
  isLoading: true,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.REQUEST_START:
      console.log('cao');
      return {
        ...state,
        isLoading: true,
      };

    case actionsType.REQUEST_SUCCESS:
      return {
        ...state,
        articles: [...action.payload],
      };

    case actionsType.GET_ARTICLE:
      console.log('get article', action.payload);
      return {
        ...state,
        articles: state.articles.concat(action.payload),
        popupActive: false,
        isLoading: false,
      };

    case actionsType.POST_ARTICLE:
      console.log('POST', action.payload.data);
      return {
        ...state,
        articles: [...state.articles, action.payload.data],
        popupActive: false,
        isLoading: false,
      };

    case actionsType.DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((el) => el.id !== action.id),
        isLoading: false,
      };

    case actionsType.SHOW_POPUP:
      return {
        ...state,
        popupActive: true,
      };

    case actionsType.CANCEL_POPUP:
      return {
        ...state,
        popupActive: false,
      };

    default:
      return state;
  }
};

export default article;
