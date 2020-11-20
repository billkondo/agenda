import React from 'react';
import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { APP_NAME } from 'config/global';

import { PasswordInput } from 'components/inputs';
import { SubmitButton } from 'components/buttons';

import { useLogic } from './logic';

type Props = {
  onBackButtonPressed: () => void;
};

const AuthenticationMenuLogin: React.FC<Props> = ({ onBackButtonPressed }) => {
  const {
    onFormChange,
    form,
    errors,
    submit,
    isSigningIn,
    signInErrorMessage,
  } = useLogic();

  const onChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onFormChange(key, e.target.value);

  return (
    <Grid container direction="column">
      <Grid item>
        <IconButton onClick={onBackButtonPressed}>
          <ArrowBack></ArrowBack>
        </IconButton>
      </Grid>

      <Grid item>
        <Typography>Sign in to {APP_NAME}</Typography>
      </Grid>

      <Grid item>
        <TextField
          label="Email"
          type="email"
          onChange={onChange('email')}
          value={form.email}
          name="email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
          disabled={isSigningIn}
        ></TextField>
      </Grid>

      <Grid item>
        <PasswordInput
          password={form.password}
          setPassword={(password) => onFormChange('password', password)}
          error={errors.password}
          label="Password"
          disabled={isSigningIn}
        ></PasswordInput>
      </Grid>

      <Grid item>
        <SubmitButton
          text="LOGIN"
          isLoading={isSigningIn}
          onClick={submit}
          error={signInErrorMessage!}
        ></SubmitButton>
      </Grid>
    </Grid>
  );
};

export default AuthenticationMenuLogin;
