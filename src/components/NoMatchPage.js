import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

const Error = () => (
  <Grid
    container
    spacing={0}
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <NavLink to="/" style={{textDecoration: 'none'}}>
      <Button variant="contained" color="primary">
        <InfoIcon /> Sorry, the page you are looking for could not be found.
      </Button>
    </NavLink>
  </Grid>
);

export default Error;
