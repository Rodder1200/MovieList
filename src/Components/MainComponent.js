import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PopularMoviesList from './PopularMoviesList';
import SimilarMoviesList from './SimilarMoviesList';
import NoMatchPage from './NoMatchPage';

const MainComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={PopularMoviesList} />
      <Route path="/similar/:id" component={SimilarMoviesList} />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default MainComponent;
