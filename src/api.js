import axios from 'axios';

const heroku = 'https://cors-anywhere.herokuapp.com/';
const apiKey = 'e30307c056887eab161000975740e1ce';

export default {
  movies: {
    getPopular: () =>
      axios.get(
        `${heroku}https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      ),
    getSimilar: data =>
      axios.get(
        `${heroku}https://api.themoviedb.org/3/movie/${
          data.id
        }/similar?api_key=${apiKey}&language=en-US&page=1`
      )
  }
};
