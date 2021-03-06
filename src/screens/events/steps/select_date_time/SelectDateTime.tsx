import React from 'react';
import { DateTime } from 'luxon';
import { Grid, Typography, Button } from '@material-ui/core';

import { TimeZone } from 'entities/time_zone';
import DateTimeSelector from './DateTimeSelector';
import GmtOffsetText from 'components/GmtOffsetText';

type Props = {
  onBackButtonClicked: () => void;
  onContinueButtonClicked: () => void;

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
  onContinueButtonClicked,
  userDateTime,
  setUserDateTime,
  eventDateTime,
  setEventDateTime,
  baseTimeZone,
  setBaseTimeZone,
  userTimeZone,
  eventTimeZone,
}) => {
  const wasBaseTimeZoneSelected =
    baseTimeZone === userTimeZone || baseTimeZone === eventTimeZone;

  const wasDateTimeSelected = userDateTime !== null && eventDateTime !== null;

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
          <Grid item container xs={6} direction="column">
            <Grid item>
              <GmtOffsetText offset={userTimeZone!.gmt_offset}></GmtOffsetText>
            </Grid>
            <Grid item>
              <DateTimeSelector
                title="Your Location"
                dateTime={userDateTime}
                setDateTime={setUserDateTime}
                disabled={baseTimeZone !== userTimeZone}
              ></DateTimeSelector>
            </Grid>
          </Grid>

          <Grid item container xs={6} direction="column">
            <Grid item>
              <GmtOffsetText offset={eventTimeZone!.gmt_offset}></GmtOffsetText>
            </Grid>
            <Grid item>
              <DateTimeSelector
                title="Event Location"
                dateTime={eventDateTime}
                setDateTime={setEventDateTime}
                disabled={baseTimeZone !== eventTimeZone}
              ></DateTimeSelector>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item>
        <Button
          disabled={!wasBaseTimeZoneSelected || !wasDateTimeSelected}
          onClick={onContinueButtonClicked}
        >
          Next Step
        </Button>
      </Grid>
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
