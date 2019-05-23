import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

import MovieCard from './MovieCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error';

const defaultProps = {
  loading: false,
  error: false,
  goBack: () => {},
  classes: {},
  movies: [],
  type: ''
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  goBack: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

const MovieList = ({ loading, error, classes, goBack, movies, type }) => {
  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Fragment>
          {error && <Error />}
          <Fragment>
            {type === 'similar' && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={goBack}
              >
                <ArrowLeft className={classes.backIcon} />
                Back
              </Button>
            )}
            <Grid container>
              <Grid item xs={12}>
                <Grid container justify="center">
                  {movies.map(elem => (
                    <Grid key={`card${elem.id}`} item>
                      <MovieCard
                        movie_id={elem.id}
                        title={elem.title}
                        img={elem.poster_path}
                        lang={elem.original_language}
                        vote={elem.vote_average}
                        type={type}
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

MovieList.defaultProps = defaultProps;
MovieList.propTypes = propTypes;

export default MovieList;
