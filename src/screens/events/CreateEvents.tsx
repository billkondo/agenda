import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useForm, Form } from './hooks/form';
import { useSteps } from './hooks/useSteps';

import SelectUserTimeZone from './steps/select_user_time_zone/SelectUserTimeZone';
import SelectEventTimeZone from './steps/select_event_time_zone/SelectEventTimeZone';
import SelectTimeType from './steps/SelectTimeType';
import SelectDateTime from './steps/select_date_time/SelectDateTime';
import CompareTimeZones from './steps/compare_timezones';
import SelectTitleDescription from './steps/select_title_description';

const CreateEvents = () => {
  const { step, moveNextStep, movePreviousStep } = useSteps();
  const form = useForm();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Create events</Typography>
      </Grid>
      <Grid item>
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

    case 3:
      return (
        <SelectDateTime
          onBackButtonClicked={movePreviousStep}
          onContinueButtonClicked={moveNextStep}
          userDateTime={form.userDateTime}
          setUserDateTime={form.setUserDateTime}
          eventDateTime={form.eventDateTime}
          setEventDateTime={form.setEventDateTime}
          baseTimeZone={form.baseTimeZone}
          setBaseTimeZone={form.setBaseTimeZone}
          userTimeZone={form.userTimeZone!}
          eventTimeZone={form.eventTimeZone!}
        ></SelectDateTime>
      );

    case 4:
      return (
        <CompareTimeZones
          onBackButtonClicked={movePreviousStep}
          onContinueButtonClicked={moveNextStep}
        ></CompareTimeZones>
      );

    case 5:
      return (
        <SelectTitleDescription
          onBackButtonPressed={movePreviousStep}
          title={form.title}
          setTitle={form.setTitle}
          description={form.description}
          setDescription={form.setDescription}
        ></SelectTitleDescription>
      );
  }

  return <div></div>;
};

export default CreateEvents;
