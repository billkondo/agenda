import React from 'react';
import { DateTime } from 'luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

type Props = {
  date: DateTime | null;
  setDate: (date: DateTime) => void;
};

const AppDatePicker: React.FC<Props> = ({ date, setDate }) => {
  const onChange = (newDate: DateTime | null) => {
    if (newDate !== null) setDate(newDate);
  };

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePicker
        disableToolbar
        variant="inline"
        margin="normal"
        label="Date"
        format="MM/dd/yy"
        value={date}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default AppDatePicker;
