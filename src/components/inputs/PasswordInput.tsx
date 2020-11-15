import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { VisibilityRounded, VisibilityOffRounded } from '@material-ui/icons';

type Props = {
  password: string;
  setPassword: (password: string) => void;
  error?: string;
  label: string;
};

const PasswordInput: React.FC<Props> = ({
  password,
  setPassword,
  error,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <TextField
      label={label}
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
      error={!!error}
      helperText={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={changePasswordVisibility}>
              {showPassword ? (
                <VisibilityRounded></VisibilityRounded>
              ) : (
                <VisibilityOffRounded></VisibilityOffRounded>
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default PasswordInput;
