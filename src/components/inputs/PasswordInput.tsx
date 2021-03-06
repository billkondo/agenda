import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  colors,
} from '@material-ui/core';
import { VisibilityRounded, VisibilityOffRounded } from '@material-ui/icons';

type Props = {
  password: string;
  setPassword: (password: string) => void;
  error?: string;
  label: string;
  disabled?: boolean;
};

const PasswordInput: React.FC<Props> = ({
  password,
  setPassword,
  error,
  label,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisibility = () => setShowPassword(!showPassword);

  const iconColor = !!error ? colors.red[400] : colors.grey.A700;

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
            <IconButton
              onClick={changePasswordVisibility}
              style={{ color: iconColor }}
            >
              {showPassword ? (
                <VisibilityRounded></VisibilityRounded>
              ) : (
                <VisibilityOffRounded></VisibilityOffRounded>
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      disabled={disabled}
    ></TextField>
  );
};

export default PasswordInput;
