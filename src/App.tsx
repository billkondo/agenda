import React from 'react';
import { Grid, Button } from '@material-ui/core';

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button>Sign Up</Button>
      </Grid>
      <Grid item>
        <Button>Sign In</Button>
      </Grid>
      <Grid item>
        <Button>Skip</Button>
      </Grid>
    </Grid>
  );
};

export default App;
