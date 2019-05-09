import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SimilarMoviesList extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/similar?api_key=e30307c056887eab161000975740e1ce&language=en-US&page=1`
      )
      .then(res => {
        this.setState({
          movies: res.data.results
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
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
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SimilarMoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect()(withStyles(styles)(SimilarMoviesList)));
