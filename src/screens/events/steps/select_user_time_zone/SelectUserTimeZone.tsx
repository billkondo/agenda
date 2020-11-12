import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import { useSelectUserTimeZone } from './useSelectUserTimeZone';

import SelectedTimeZone from './SelectedTimeZone';

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
  const { onCurrentLocationClicked } = useSelectUserTimeZone({
    setUserTimeZone,
  });

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>First select your Time Zone</Typography>
      </Grid>

      <Grid item>
        <Button onClick={onCurrentLocationClicked}>Current Location</Button>
      </Grid>

      <Grid item>
        <SelectedTimeZone timeZone={userTimeZone}></SelectedTimeZone>
      </Grid>

      <Grid item>
        <Button onClick={moveNext}>Next step</Button>
      </Grid>
    </Grid>
  );
};

export default SelectUserTimeZone;
