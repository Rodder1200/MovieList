import React, { Fragment } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import PopularMoviesList from './PopularMoviesList';
import SimilarMoviesList from './SimilarMoviesList';
import NoMatchPage from './NoMatchPage';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    marginBottom: '30px'
  },
  navLink: {
    textDecoration: 'none'
  }
});

const MainComponent = ({ classes }) => {
  return (
    <Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <NavLink to="/" className={classes.navLink}>
              Movie List
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={PopularMoviesList} />
        <Route path="/similar/:id" component={SimilarMoviesList} />
        <Route component={NoMatchPage} />
      </Switch>
    </Fragment>
  );
};

export default withStyles(styles)(MainComponent);
