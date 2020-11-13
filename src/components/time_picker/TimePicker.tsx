import React from 'react';
import { Moment } from 'moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

type Props = {
  time: Moment | null;
  setTime: (time: Moment) => void;
};

const AppTimePicker: React.FC<Props> = ({ time, setTime }) => {
  const onChange = (newTime: Moment | null) => {
    if (newTime !== null) setTime(newTime);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TimePicker
        value={time}
        onChange={onChange}
        variant="inline"
      ></TimePicker>
    </MuiPickersUtilsProvider>
  );
};

export default AppTimePicker;
