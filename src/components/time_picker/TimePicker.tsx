import React from 'react';
import { DateTime } from 'luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TimePicker } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

type Props = {
  time: DateTime | null;
  setTime: (time: DateTime) => void;
};

const AppTimePicker: React.FC<Props> = ({ time, setTime }) => {
  const onChange = (newTime: DateTime | null) => {
    if (newTime !== null) setTime(newTime);
  };

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <TimePicker
        value={time}
        onChange={onChange}
        variant="inline"
      ></TimePicker>
    </MuiPickersUtilsProvider>
  );
};

export default AppTimePicker;
