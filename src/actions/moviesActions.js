import api from '../api';
import { GET_POPULAR_MOVIES, GET_SIMILAR_MOVIES } from '../constants';

export const getPopularMovies = data => dispatch =>
    api.movies.getPopular(data).then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_POPULAR_MOVIES,
          payload: res.data
        });
      }
      return res;
    }),
  getSimilarMovies = data => dispatch =>
    api.movies.getSimilar(data).then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_SIMILAR_MOVIES,
          payload: res.data
        });
      }
      return res;
    });
