import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';

type Props = {
  title: string;
  dateTime: Date | null;
  setDateTime: (dateTime: Date) => void;
};

const DateTimeSelector: React.FC<Props> = ({
  title,
  dateTime,
  setDateTime,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item>
        <DatePicker date={dateTime} setDate={setDateTime}></DatePicker>
      </Grid>
      <Grid item>
        <TimePicker time={dateTime} setTime={setDateTime}></TimePicker>
      </Grid>
    </Grid>
  );
};

export default DateTimeSelector;