import React from 'react';
import { Grid } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import CurrentLocationButton from 'components/current_location_button/';
import GmtSelector from 'components/GmtSelector';
import SelectedTimeZone from 'components/SelectedTimeZone';

type Props = {
  timeZone: TimeZone | null;
  setTimeZone: (timeZone: TimeZone) => void;
};

const TimeZoneSelector = ({ timeZone, setTimeZone }: Props) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <CurrentLocationButton
          setTimeZone={setTimeZone}
        ></CurrentLocationButton>
      </Grid>

      <Grid item container>
        <GmtSelector
          timeZone={timeZone}
          onTimeZoneSelected={setTimeZone}
        ></GmtSelector>
      </Grid>

      <Grid item>
        <SelectedTimeZone timeZone={timeZone}></SelectedTimeZone>
      </Grid>
    </Grid>
  );
};

export default TimeZoneSelector;
