import * as actionsType from '../actions/actionType';

const initialState = {
  articles: [],
  popup: { title: '', text: '' },
  popupActive: false,
  isLoading: true,
  isEdited: false,
  searchTerm: '',
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.REQUEST_START:
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
      //  let updatedArray = state.art
      return {
        ...state,
        articles: [...action.payload],
        // articles: {
        //   ...state.articles,
        //   ...action.payload,
        // },
        popupActive: false,
        isLoading: false,
      };

    case actionsType.POST_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload.data],
        popupActive: false,
        isLoading: false,
      };

    case actionsType.EDIT_ARTICLE:
      return {
        ...state,
        popupActive: false,
        isLoading: false,
        isEdited: true,
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
        popup: { title: '', text: '' },
        popupActive: true,
      };

    case actionsType.EDIT_POPUP:
      const popupFormData = state.articles.find((el) => el.id === action.id);

      return {
        ...state,
        popup: popupFormData,
        popupActive: true,
        isLoading: false,
      };

    case actionsType.CANCEL_POPUP:
      return {
        ...state,
        popupActive: false,
      };

    case actionsType.POPUP_FORM_INPUT:
      return {
        ...state,
        popup: {
          ...state.popup,
          [action.name]: action.value,
        },
        popupActive: true,
      };

    case actionsType.SEARCH_ARTICLE:
      return {
        ...state,
        articles: [...action.payload],
        searchTerm: action.searchTerm,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default article;
