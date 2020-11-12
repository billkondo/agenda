import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

type Props = {
  movePrevious: () => void;
  moveNext: () => void;
};

const SelectEventTimeZone = ({ movePrevious, moveNext }: Props) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={movePrevious}>Go Back</Button>
      </Grid>
      <Grid item>
        <Typography>Select the event Time Zone</Typography>
      </Grid>
      <Grid item>
        <Button onClick={moveNext}>Next Step</Button>
      </Grid>
    </Grid>
  );
};

export default SelectEventTimeZone;
