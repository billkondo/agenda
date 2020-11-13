import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useForm, Form } from './hooks/form';
import { useSteps } from './hooks/steps';

import SelectUserTimeZone from './steps/select_user_time_zone/SelectUserTimeZone';
import SelectEventTimeZone from './steps/select_event_time_zone/SelectEventTimeZone';
import SelectTimeType from './steps/SelectTimeType';

const CreateEvents = () => {
  const { step, moveNextStep, movePreviousStep } = useSteps();
  const form = useForm();

  return (
    <Grid container>
      <Grid item>
        <Typography>Create events</Typography>
        <Step
          step={step}
          moveNextStep={moveNextStep}
          movePreviousStep={movePreviousStep}
          form={form}
        ></Step>
      </Grid>
    </Grid>
  );
};

type StepProps = {
  step: number;
  moveNextStep: () => void;
  movePreviousStep: () => void;
  form: Form;
};

const Step = ({ step, moveNextStep, movePreviousStep, form }: StepProps) => {
  switch (step) {
    case 0:
      return (
        <SelectUserTimeZone
          moveNext={moveNextStep}
          userTimeZone={form.userTimeZone}
          setUserTimeZone={form.setUserTimeZone}
        ></SelectUserTimeZone>
      );

    case 1:
      return (
        <SelectEventTimeZone
          moveNext={moveNextStep}
          movePrevious={movePreviousStep}
          eventTimeZone={form.eventTimeZone}
          setEventTimeZone={form.setEventTimeZone}
        ></SelectEventTimeZone>
      );

    case 2:
      return (
        <SelectTimeType
          onBackButtonClicked={movePreviousStep}
          onNextButtonClicked={moveNextStep}
          eventTimeType={form.eventTimeType}
          setEventTimeType={form.setEventTimeType}
        ></SelectTimeType>
      );
  }

  return <div></div>;
};

export default CreateEvents;
