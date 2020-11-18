import React from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { useLogic } from './logic';

import { PasswordInput } from 'components/inputs';
import { SubmitButton } from 'components/buttons';

type Props = {
  onBackButtonPressed: () => void;
};

const AuthenticationMenuCreateAccount: React.FC<Props> = ({
  onBackButtonPressed,
}) => {
  const {
    form,
    errors,
    onFormChange,
    submit,
    createAccountErrorMessage,
    isCreatingAccount,
  } = useLogic();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onFormChange(name, value);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <IconButton onClick={onBackButtonPressed}>
          <ArrowBack></ArrowBack>
        </IconButton>
      </Grid>

      <Grid item>
        <TextField
          label="Email"
          type="email"
          onChange={onChange}
          value={form.email}
          name="email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
          disabled={isCreatingAccount}
        ></TextField>
      </Grid>

      <Grid item>
        <PasswordInput
          password={form.password}
          setPassword={(password) => onFormChange('password', password)}
          error={errors.password}
          label="Password"
          disabled={isCreatingAccount}
        ></PasswordInput>
      </Grid>

      <Grid item>
        <PasswordInput
          password={form.confirmPassword}
          setPassword={(password) => onFormChange('confirmPassword', password)}
          error={errors.confirmPassword}
          label="Confirm Password"
          disabled={isCreatingAccount}
        ></PasswordInput>
      </Grid>

      <Grid item>
        <SubmitButton
          text="CREATE ACCOUNT"
          isLoading={isCreatingAccount}
          onClick={submit}
          error={createAccountErrorMessage!}
        ></SubmitButton>
      </Grid>
    </Grid>
  );
};

export default AuthenticationMenuCreateAccount;
