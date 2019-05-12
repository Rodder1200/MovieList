import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getPopularMovies } from '../../actions/moviesActions';
import MovieList from './MovieList';

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const defaultProps = {
  classes: {},
  movies: [],
  history: {},
  match: {},
  getSimilarMovies: () => {}
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getSimilarMovies: PropTypes.func.isRequired
};

const PopularMovies = ({ movies, getPopularMovies }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then(res => {
        if (res.status === 200) {
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [getPopularMovies]);

  return (
    <MovieList loading={loading} error={error} movies={movies} type="popular" />
  );
};

PopularMovies.defaultProps = defaultProps;
PopularMovies.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies.results
  };
}

export default connect(
  mapStateToProps,
  { getPopularMovies }
)(withStyles(styles)(PopularMovies));
