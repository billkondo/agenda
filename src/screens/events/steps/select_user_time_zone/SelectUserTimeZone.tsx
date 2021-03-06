import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import TimeZoneSelector from 'components/TimeZoneSelector';

type Props = {
  moveNext: () => void;
  userTimeZone: TimeZone | null;
  setUserTimeZone: (timeZone: TimeZone) => void;
};

const SelectUserTimeZone = ({
  moveNext,
  userTimeZone,
  setUserTimeZone,
}: Props) => {
  const isUserTimeZoneSelected = !!userTimeZone;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>First select your Time Zone</Typography>
      </Grid>

      <Grid item>
        <TimeZoneSelector
          timeZone={userTimeZone}
          setTimeZone={setUserTimeZone}
        ></TimeZoneSelector>
      </Grid>

      <Grid item>
        <Button onClick={moveNext} disabled={!isUserTimeZoneSelected}>
          Next step
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectUserTimeZone;
