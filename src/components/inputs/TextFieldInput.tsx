import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  text: string;
  setText: (text: string) => void;

  label: string;
  multiline?: boolean;
};

const TextFieldInput: React.FC<Props> = ({
  text,
  setText,
  label,
  multiline = false,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  return (
    <TextField
      value={text}
      onChange={onChange}
      label={label}
      multiline={multiline}
    ></TextField>
  );
};

export default TextFieldInput;
