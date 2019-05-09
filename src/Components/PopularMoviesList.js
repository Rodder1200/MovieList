import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class PopularMoviesList extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=e30307c056887eab161000975740e1ce&language=en-US&page=1'
      )
      .then(res => {
        this.setState({
          movies: res.data.results
        });
      });
  }

  redirectToSimilar = id => () => {
    this.props.history.push(`/similar/${id}`);
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
                  redirectToSimilar={this.redirectToSimilar}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

PopularMoviesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PopularMoviesList);
