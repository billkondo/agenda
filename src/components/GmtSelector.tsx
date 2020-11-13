import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { TimeZone } from 'entities/time_zone';

type Props = {
  timeZone: TimeZone | null;
  onTimeZoneSelected: (timeZone: TimeZone) => void;
};

const GmtSelector = ({ timeZone, onTimeZoneSelected }: Props) => {
  const nonNegativeOffsets = gmtNonPositiveOffsets();
  const positiveOffsets = gmtPositiveOffsets();
  const selectedTimeZone = timeZone?.gmt_offset;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>GMT Zones:</Typography>
      </Grid>

      <Grid item container>
        {nonNegativeOffsets.map((offset) => (
          <Grid item key={offset}>
            <GmtItem
              offset={offset}
              isSelected={offset === selectedTimeZone}
              onTimeZoneSelected={onTimeZoneSelected}
            ></GmtItem>
          </Grid>
        ))}
      </Grid>

      <Grid item container>
        {positiveOffsets.map((offset) => (
          <Grid item key={offset}>
            <GmtItem
              offset={offset}
              isSelected={offset === selectedTimeZone}
              onTimeZoneSelected={onTimeZoneSelected}
            ></GmtItem>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const gmtNonPositiveOffsets = () => {
  const offsets = [];
  offsets.push(0);
  for (let i = -1; i > -13; i--) offsets.push(i);
  return offsets;
};

const gmtPositiveOffsets = () => {
  const offsets = [];
  for (let i = 1; i < 13; i++) offsets.push(i);
  return offsets;
};

type GmtItemProps = {
  offset: number;
  isSelected: boolean;
  onTimeZoneSelected: (timeZone: TimeZone) => void;
};
const GmtItem = ({ offset, isSelected, onTimeZoneSelected }: GmtItemProps) => {
  const label = !offset ? 'GMT' : offset;

  const onClick = () => onTimeZoneSelected(new TimeZone(offset));

  return (
    <Button variant={isSelected ? 'contained' : 'text'} onClick={onClick}>
      {label}
    </Button>
  );
};

export default GmtSelector;
