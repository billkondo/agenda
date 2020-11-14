import React from 'react';
import { DateTime } from 'luxon';
import { Grid, Typography, Button } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import DateTimeSelector from './DateTimeSelector';
import GmtOffsetText from 'components/GmtOffsetText';

type Props = {
  onBackButtonClicked: () => void;

  userDateTime: DateTime | null;
  setUserDateTime: (dateTime: DateTime) => void;

  eventDateTime: DateTime | null;
  setEventDateTime: (dateTime: DateTime) => void;

  baseTimeZone: TimeZone | null;
  setBaseTimeZone: (timeZone: TimeZone) => void;

  userTimeZone: TimeZone;
  eventTimeZone: TimeZone;
};

const SelectDateTime: React.FC<Props> = ({
  onBackButtonClicked,
  userDateTime,
  setUserDateTime,
  eventDateTime,
  setEventDateTime,
  baseTimeZone,
  setBaseTimeZone,
  userTimeZone,
  eventTimeZone,
}) => {
  const wasBaseTimeZoneSelected = !!baseTimeZone;

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
          <TimeZoneButton
            text="Your Location"
            value={userTimeZone}
            setValue={setBaseTimeZone}
            selectedValue={baseTimeZone}
          ></TimeZoneButton>
        </Grid>
        <Grid item>
          <TimeZoneButton
            text="Event Location"
            value={eventTimeZone}
            setValue={setBaseTimeZone}
            selectedValue={baseTimeZone}
          ></TimeZoneButton>
        </Grid>
      </Grid>
      {wasBaseTimeZoneSelected && (
        <Grid item container>
          <Grid item container xs={6}>
            <Grid item>
              <GmtOffsetText offset={userTimeZone!.gmt_offset}></GmtOffsetText>
            </Grid>
            <Grid item>
              <DateTimeSelector
                title="Your Location"
                dateTime={userDateTime}
                setDateTime={setUserDateTime}
              ></DateTimeSelector>
            </Grid>
          </Grid>

          <Grid item container xs={6}>
            <Grid item>
              <GmtOffsetText offset={eventTimeZone!.gmt_offset}></GmtOffsetText>
            </Grid>
            <Grid item>
              <DateTimeSelector
                title="Event Location"
                dateTime={eventDateTime}
                setDateTime={setEventDateTime}
              ></DateTimeSelector>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

type TimeZoneButtonProps = {
  text: string;
  value: TimeZone;
  setValue: (timeZone: TimeZone) => void;
  selectedValue: TimeZone | null;
};

const TimeZoneButton: React.FC<TimeZoneButtonProps> = ({
  text,
  value,
  setValue,
  selectedValue,
}) => {
  const onClick = () => setValue(value);
  const isSelected = value === selectedValue;
  return (
    <Button onClick={onClick} variant={isSelected ? 'contained' : 'text'}>
      {text}
    </Button>
  );
};

export default SelectDateTime;
