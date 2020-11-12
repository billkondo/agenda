import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

type Props = {
  moveNext: () => void;
};

const SelectUserTimeZone = ({ moveNext }: Props) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>First select your Time Zone</Typography>
      </Grid>

      <Grid item>
        <Button onClick={moveNext}>Next step</Button>
      </Grid>
    </Grid>
  );
};

export default SelectUserTimeZone;
