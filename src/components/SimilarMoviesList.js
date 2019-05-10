import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

import { getSimilarMovies } from '../actions/moviesActions';

import MovieCard from './MovieCard';
import Preloader from './Preloader/Preloader';
import Error from './Error';

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

const SimilarMoviesList = ({
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
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Fragment>
          {error && <Error />}
          <Fragment>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={goBack}
            >
              <ArrowLeft className={classes.backIcon} />
              Back
            </Button>
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
                        type="similar"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

SimilarMoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies.results
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getSimilarMovies }
  )(withStyles(styles)(SimilarMoviesList))
);
