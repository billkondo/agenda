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

      <Grid item>
        <TimeZoneOffset offset={timeZone.gmt_offset}></TimeZoneOffset>
      </Grid>
    </Grid>
  );
};

type TimeZoneOffsetProps = {
  offset: number | null;
};
const TimeZoneOffset = ({ offset }: TimeZoneOffsetProps) => {
  if (offset === null) return <React.Fragment></React.Fragment>;
  const suffix = offset > 0 ? `+${offset}` : offset < 0 ? offset : '';
  return <Typography>{`GMT ${suffix}`}</Typography>;
};

export default SelectedTimeZone;
