import React from 'react';
import { Grid } from '@material-ui/core';

import { TextFieldInput } from 'components/inputs';

type Props = {
  title: string;
  setTitle: (title: string) => void;

  description: string;
  setDescription: (description: string) => void;
};

const Form: React.FC<Props> = ({
  title,
  description,
  setTitle,
  setDescription,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <TextFieldInput
          text={title}
          setText={setTitle}
          label="Title"
        ></TextFieldInput>
      </Grid>
      <Grid item>
        <TextFieldInput
          text={description}
          setText={setDescription}
          label={'Description'}
          multiline={true}
        ></TextFieldInput>
      </Grid>
    </Grid>
  );
};

export default Form;
