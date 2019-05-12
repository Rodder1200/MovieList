import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getSimilarMovies } from '../../actions/moviesActions';
import MovieList from './MovieList';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  backIcon: {
    marginLeft: theme.spacing.unit
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

const SimilarMovies = ({
  classes,
  movies,
  history,
  match,
  getSimilarMovies
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSimilarMovies({ id: match.params.id })
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
  }, [getSimilarMovies, match]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <MovieList
      loading={loading}
      error={error}
      classes={classes}
      goBack={goBack}
      movies={movies}
      type={'similar'}
    />
  );
};

SimilarMovies.defaultProps = defaultProps;
SimilarMovies.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies.results
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getSimilarMovies }
  )(withStyles(styles)(SimilarMovies))
);
