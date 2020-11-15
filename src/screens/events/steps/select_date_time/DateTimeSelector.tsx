import React from 'react';
import { DateTime } from 'luxon';
import { Grid, Typography } from '@material-ui/core';

import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';

type Props = {
  title: string;
  dateTime: DateTime | null;
  setDateTime: (dateTime: DateTime) => void;
  disabled?: boolean;
};

const DateTimeSelector: React.FC<Props> = ({
  title,
  dateTime,
  setDateTime,
  disabled,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item>
        <DatePicker
          date={dateTime}
          setDate={setDateTime}
          disabled={disabled}
        ></DatePicker>
      </Grid>
      <Grid item>
        <TimePicker
          time={dateTime}
          setTime={setDateTime}
          disabled={disabled}
        ></TimePicker>
      </Grid>
    </Grid>
  );
};

export default DateTimeSelector;
