import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';

type Props = {
  timeZone: TimeZone | null;
};

const SelectedTimeZone = ({ timeZone }: Props) => {
  if (!timeZone) return <React.Fragment></React.Fragment>;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>{timeZone.timezone_name}</Typography>
      </Grid>
    </Grid>
  );
};

export default SelectedTimeZone;
