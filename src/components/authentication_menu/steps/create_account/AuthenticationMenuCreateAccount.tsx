import React from 'react';
import { Grid, TextField, IconButton, Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { useForm } from './form';

import { PasswordInput } from 'components/inputs';

type Props = {
  onBackButtonPressed: () => void;
};

const AuthenticationMenuCreateAccount: React.FC<Props> = ({
  onBackButtonPressed,
}) => {
  const { form, errors, onFormChange, submit } = useForm();

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
        ></TextField>
      </Grid>

      <Grid item>
        <PasswordInput
          password={form.password}
          setPassword={(password) => onFormChange('password', password)}
          error={errors.password}
          label="Password"
        ></PasswordInput>
      </Grid>

      <Grid item>
        <PasswordInput
          password={form.confirmPassword}
          setPassword={(password) => onFormChange('confirmPassword', password)}
          error={errors.confirmPassword}
          label="Confirm Password"
        ></PasswordInput>
      </Grid>

      <Grid item>
        <Button onClick={submit}>CREATE ACCOUNT</Button>
      </Grid>
    </Grid>
  );
};

export default AuthenticationMenuCreateAccount;
