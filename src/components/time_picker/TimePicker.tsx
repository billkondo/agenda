import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

type Props = {
  time: Date | null;
  setTime: (time: Date) => void;
};

const AppTimePicker: React.FC<Props> = ({ time, setTime }) => {
  const onChange = (newTime: any) => {
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
