import React from 'react';
import { Moment } from 'moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

type Props = {
  date: Moment | null;
  setDate: (date: Moment) => void;
};

const AppDatePicker: React.FC<Props> = ({ date, setDate }) => {
  const onChange = (newDate: Moment | null) => {
    if (newDate !== null) setDate(newDate);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        disableToolbar
        variant="inline"
        margin="normal"
        label="Date"
        format="MM/DD/yyyy"
        value={date}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default AppDatePicker;
