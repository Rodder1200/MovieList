import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

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

class SimilarMoviesList extends React.Component {
  state = {
    movies: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/similar?api_key=e30307c056887eab161000975740e1ce&language=en-US&page=1`
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({
            movies: res.data.results,
            loading: false
          });
        } else {
          this.setState({
            error: true,
            loading: false
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { movies, error, loading } = this.state;
    const { classes } = this.props;
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
                onClick={this.goBack}
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
  }
}

SimilarMoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect()(withStyles(styles)(SimilarMoviesList)));
