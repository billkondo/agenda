import React from 'react';
import { Grid, Button } from '@material-ui/core';

type Props = {
  onBackButtonPressed: () => void;
};

const SelectTitleDescription: React.FC<Props> = ({ onBackButtonPressed }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonPressed}>Go Back</Button>
      </Grid>
    </Grid>
  );
};

export default SelectTitleDescription;
