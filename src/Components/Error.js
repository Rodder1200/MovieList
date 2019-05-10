import React from 'react';

import Grid from '@material-ui/core/Grid';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';

const refreshPage = () => {
  window.location.reload();
}

const Error = () => (
  <Grid
    container
    spacing={0}
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <Button
      variant="contained"
      color="secondary"
      onClick={refreshPage}
    >
      <ErrorIcon /> Something was wrong. Please refresh the page.
    </Button>
  </Grid>
);

export default Error;
