import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { useLogic } from './useLogic';

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

      <Grid item>
        <Button>Next Step</Button>
      </Grid>
    </Grid>
  );
};

export default SelectTitleDescription;
