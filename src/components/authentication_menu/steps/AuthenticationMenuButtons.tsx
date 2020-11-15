import React from 'react';
import { Grid, Button } from '@material-ui/core';

type Props = {
  onLoginButtonClicked: () => void;
  onCreateAccountButtonClicked: () => void;
};

const AuthenticationButtons: React.FC<Props> = ({
  onLoginButtonClicked,
  onCreateAccountButtonClicked,
}) => {
  return (
    <Grid container>
      <Grid item>
        <Button onClick={onLoginButtonClicked}>LOGIN</Button>
      </Grid>
      <Grid item>
        <Button onClick={onCreateAccountButtonClicked}>CREATE ACCOUNT</Button>
      </Grid>
    </Grid>
  );
};

export default AuthenticationButtons;
