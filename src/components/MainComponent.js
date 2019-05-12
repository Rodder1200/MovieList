import React, { Fragment } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import PopularMovies from './MovieList/PopularMovies';
import SimilarMovies from './MovieList/SimilarMovies';
import NoMatchPage from './NoMatchPage';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  appBar: {
    marginBottom: '30px'
  }
});

const defaultProps = {
  classes: {}
};

const propTypes = {
  classes: PropTypes.object.isRequired
};

const MainComponent = ({ classes }) => {
  return (
    <Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <NavLink to="/">Movie List</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route path="/similar/:id" component={SimilarMovies} />
        <Route component={NoMatchPage} />
      </Switch>
    </Fragment>
  );
};

MainComponent.defaultProps = defaultProps;
MainComponent.propTypes = propTypes;

export default withStyles(styles)(MainComponent);
