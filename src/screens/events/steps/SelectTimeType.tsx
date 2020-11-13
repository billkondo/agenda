import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

import { EventTimeType } from 'entities/event_time_type';

type Props = {
  onBackButtonClicked: () => void;
  onNextButtonClicked: () => void;
  eventTimeType: EventTimeType | null;
  setEventTimeType: (eventTimeType: EventTimeType) => void;
};

const SelectTimeType: React.FC<Props> = ({
  onBackButtonClicked,
  onNextButtonClicked,
  eventTimeType,
  setEventTimeType,
}) => {
  const wasEventTimeTypeSelected = eventTimeType !== null;

  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonClicked}>Go Back</Button>
      </Grid>

      <Grid item>
        <Typography>
          Will your event be a single point in time or an interval ?
        </Typography>
      </Grid>

      <Grid item container>
        <Grid item>
          <EventTimeTypeButton
            eventTimeType={EventTimeType.SINGLE_POINT}
            text={'Single Point'}
            isSelected={eventTimeType === EventTimeType.SINGLE_POINT}
            setEventTimeType={setEventTimeType}
          ></EventTimeTypeButton>
        </Grid>
        <Grid item>
          <EventTimeTypeButton
            eventTimeType={EventTimeType.INTERVAL}
            text={'Interval'}
            isSelected={eventTimeType === EventTimeType.INTERVAL}
            setEventTimeType={setEventTimeType}
          ></EventTimeTypeButton>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          onClick={onNextButtonClicked}
          disabled={!wasEventTimeTypeSelected}
        >
          Next Step
        </Button>
      </Grid>
    </Grid>
  );
};

type EventTimeTypeButtonProps = {
  eventTimeType: EventTimeType;
  setEventTimeType: (eventTimeType: EventTimeType) => void;
  isSelected: boolean;
  text: string;
};
const EventTimeTypeButton: React.FC<EventTimeTypeButtonProps> = ({
  eventTimeType,
  setEventTimeType,
  isSelected,
  text,
}) => {
  const onClick = () => setEventTimeType(eventTimeType);
  return (
    <Button variant={isSelected ? 'contained' : 'text'} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SelectTimeType;
