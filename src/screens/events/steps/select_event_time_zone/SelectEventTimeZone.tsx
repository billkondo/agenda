import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import TimeZoneSelector from 'components/TimeZoneSelector';

type Props = {
  movePrevious: () => void;
  moveNext: () => void;
  eventTimeZone: TimeZone | null;
  setEventTimeZone: (timeZone: TimeZone) => void;
};

const SelectEventTimeZone = ({
  movePrevious,
  moveNext,
  eventTimeZone,
  setEventTimeZone,
}: Props) => {
  const isEventTimeZoneSelected = !!eventTimeZone;

  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={movePrevious}>Go Back</Button>
      </Grid>
      <Grid item>
        <Typography>Select the event Time Zone</Typography>
      </Grid>

      <Grid item>
        <TimeZoneSelector
          timeZone={eventTimeZone}
          setTimeZone={setEventTimeZone}
        ></TimeZoneSelector>
      </Grid>

      <Grid item>
        <Button onClick={moveNext} disabled={!isEventTimeZoneSelected}>
          Next Step
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectEventTimeZone;
