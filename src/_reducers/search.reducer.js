import { UPDATE_SEARCH, SEARCH, ERROR } from '../_actions/';

const initialState = {
  num: 0,
  data: {
    books: [],
    count: 0,
  },
  page: 1,
  itemsPerPage: 5,
  error: "",
  text: "",
  isLoading: false,
}

export const search = (state = initialState, action) => {
  switch (action.type) {
        case UPDATE_SEARCH:
        return {
          ...state,
          text: action.text,
        };
    case SEARCH:
        return { ...state, 
          data: action.data,
          page: action.page,
          itemsPerPage: action.itemsPerPage,
          isLoading: false, 
        }
    case ERROR:
        return { ...state, error: action.msg }
      default:
        return state;
    }
};