import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Routes } from 'config/routes';

import AuthenticationMenu from 'components/authentication_menu';

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <AuthenticationMenu></AuthenticationMenu>
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
