import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { Steps, useLogic } from './useLogic';
import AuthenticationMenuSteps from './steps';

type Props = {
  title?: string;
};

const AuthenticationMenu: React.FC<Props> = ({ title }) => {
  const { step, setStep } = useLogic();

  return (
    <Grid container direction="column">
      {step === Steps.INITIAL && (
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
      )}
      <Grid item>
        <AuthenticationMenuSteps
          step={step}
          setStep={setStep}
        ></AuthenticationMenuSteps>
      </Grid>
    </Grid>
  );
};

export default AuthenticationMenu;
