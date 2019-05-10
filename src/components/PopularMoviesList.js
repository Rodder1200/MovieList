import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { getPopularMovies } from '../actions/moviesActions';

import MovieCard from './MovieCard';
import Preloader from './Preloader/Preloader';
import Error from './Error';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const PopularMoviesList = ({ movies, getPopularMovies }) => {
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
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Fragment>
          {error && <Error />}
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={16}>
                {movies.map(elem => (
                  <Grid key={`card${elem.id}`} item>
                    <MovieCard
                      movie_id={elem.id}
                      title={elem.title}
                      img={elem.poster_path}
                      lang={elem.original_language}
                      vote={elem.vote_average}
                      type="popular"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

PopularMoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies.results
  };
}

export default connect(
  mapStateToProps,
  { getPopularMovies }
)(withStyles(styles)(PopularMoviesList));
