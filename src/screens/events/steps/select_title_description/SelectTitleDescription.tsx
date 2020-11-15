import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { useLogic } from './useLogic';

import AuthenticationMenu from 'components/authentication_menu';

type Props = {
  onBackButtonPressed: () => void;
};

const SelectTitleDescription: React.FC<Props> = ({ onBackButtonPressed }) => {
  const { isAuthenticated } = useLogic();

  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonPressed}>Go Back</Button>
      </Grid>

      {!isAuthenticated && (
        <Grid item>
          <AuthenticationMenu title="To save your events and receive notifications,"></AuthenticationMenu>
        </Grid>
      )}

      <Grid item>
        <Button>Next Step</Button>
      </Grid>
    </Grid>
  );
};

export default SelectTitleDescription;
