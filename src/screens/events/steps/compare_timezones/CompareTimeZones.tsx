import React from 'react';
import { Grid, Button } from '@material-ui/core';

type Props = {
  onBackButtonClicked: () => void;
  onContinueButtonClicked: () => void;
};

const CompareTimeZones: React.FC<Props> = ({
  onBackButtonClicked,
  onContinueButtonClicked,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Button onClick={onBackButtonClicked}>Go Back</Button>
      </Grid>
      <Grid item>
        <Button onClick={onContinueButtonClicked}>Next Step</Button>
      </Grid>
    </Grid>
  );
};

export default CompareTimeZones;
