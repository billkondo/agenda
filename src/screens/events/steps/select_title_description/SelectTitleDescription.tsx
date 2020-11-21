import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { useLogic } from './useLogic';

import AuthenticationMenu from 'components/authentication_menu';
import Form from './Form';

type Props = {
  onBackButtonPressed: () => void;

  title: string;
  setTitle: (title: string) => void;

  description: string;
  setDescription: (description: string) => void;
};

const SelectTitleDescription: React.FC<Props> = ({
  onBackButtonPressed,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const { isAuthenticated } = useLogic();
  const wasTitleAndDescriptionSelected =
    title.length > 0 && description.length > 0;

  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonPressed}>Go Back</Button>
      </Grid>

      {!isAuthenticated && (
        <Grid item>
          <AuthenticationMenu title="To save your events and receive notifications,"></AuthenticationMenu>
        </Grid>
      )}

      {isAuthenticated && (
        <Grid item>
          <Form
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          ></Form>
        </Grid>
      )}

      <Grid item>
        <Button disabled={!isAuthenticated || !wasTitleAndDescriptionSelected}>
          Next Step
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectTitleDescription;
