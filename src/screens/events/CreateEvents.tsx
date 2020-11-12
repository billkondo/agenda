import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useSteps } from './hooks/steps';

import SelectUserTimeZone from './steps/SelectUserTimeZone';
import SelectEventTimeZone from './steps/SelectEventTimeZone';

const CreateEvents = () => {
  const { step, moveNextStep, movePreviousStep } = useSteps();

  return (
    <Grid container>
      <Grid item>
        <Typography>Create events</Typography>
        <Step
          step={step}
          moveNextStep={moveNextStep}
          movePreviousStep={movePreviousStep}
        ></Step>
      </Grid>
    </Grid>
  );
};

type StepProps = {
  step: number;
  moveNextStep: () => void;
  movePreviousStep: () => void;
};

const Step = ({ step, moveNextStep, movePreviousStep }: StepProps) => {
  switch (step) {
    case 0:
      return <SelectUserTimeZone moveNext={moveNextStep}></SelectUserTimeZone>;

    case 1:
      return (
        <SelectEventTimeZone
          moveNext={moveNextStep}
          movePrevious={movePreviousStep}
        ></SelectEventTimeZone>
      );
  }

  return <div></div>;
};

export default CreateEvents;
