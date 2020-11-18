import React from 'react';
import { Button, LinearProgress, Typography } from '@material-ui/core';

type Props = {
  text: string;
  isLoading: boolean;
  onClick: () => void;
  error?: string;
};

const SubmitButton: React.FC<Props> = ({ text, isLoading, onClick, error }) => {
  return (
    <React.Fragment>
      <Button onClick={onClick}>{text}</Button>
      {isLoading && <LinearProgress></LinearProgress>}
      {error && <Typography>{error}</Typography>}
    </React.Fragment>
  );
};

export default SubmitButton;
