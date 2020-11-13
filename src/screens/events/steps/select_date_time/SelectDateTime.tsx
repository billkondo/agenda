import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import DateTimeSelector from './DateTimeSelector';

type Props = {
  onBackButtonClicked: () => void;

  userDateTime: Date | null;
  setUserDateTime: (dateTime: Date) => void;

  eventDateTime: Date | null;
  setEventDateTime: (dateTime: Date) => void;
};

const SelectDateTime: React.FC<Props> = ({
  onBackButtonClicked,
  userDateTime,
  setUserDateTime,
  eventDateTime,
  setEventDateTime,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonClicked}>Go Back</Button>
      </Grid>
      <Grid item>
        <Typography>Select the base time zone</Typography>
      </Grid>
      <Grid item container>
        <Grid item>
          <Button>Your Location</Button>
        </Grid>
        <Grid item>
          <Button>Event Location</Button>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={6}>
          <DateTimeSelector
            title="Your Location"
            dateTime={userDateTime}
            setDateTime={setUserDateTime}
          ></DateTimeSelector>
        </Grid>

        <Grid item xs={6}>
          <DateTimeSelector
            title="Event Location"
            dateTime={eventDateTime}
            setDateTime={setEventDateTime}
          ></DateTimeSelector>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectDateTime;
