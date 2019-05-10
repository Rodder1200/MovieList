import { GET_POPULAR_MOVIES, GET_SIMILAR_MOVIES } from '../constants';

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
