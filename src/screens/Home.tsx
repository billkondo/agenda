import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Routes } from 'config/routes';

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button>Sign Up</Button>
      </Grid>
      <Grid item>
        <Button>Sign In</Button>
      </Grid>
      <Grid item>
        <Link to={Routes.CREATE_EVENTS}>
          <Button>Skip</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
