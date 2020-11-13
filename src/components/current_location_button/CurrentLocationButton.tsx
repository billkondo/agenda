import React from 'react';
import { Button } from '@material-ui/core';

import { useLogic } from './useLogic';
import { TimeZone } from 'entities/time_zone';

type Props = {
  setTimeZone: (timeZone: TimeZone) => void;
};

const CurrentLocationButton = ({ setTimeZone }: Props) => {
  const { onCurrentLocationClicked } = useLogic({ setTimeZone });

  return (
    <Button onClick={onCurrentLocationClicked}>Use Current Location</Button>
  );
};

export default CurrentLocationButton;
