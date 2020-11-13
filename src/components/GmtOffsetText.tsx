import React from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  offset: number | null;
};

const GMTOffsetText: React.FC<Props> = ({ offset }) => {
  if (offset === null) return <React.Fragment></React.Fragment>;
  const suffix = offset > 0 ? `+${offset}` : offset < 0 ? offset : '';
  return <Typography>{`GMT ${suffix}`}</Typography>;
};

export default GMTOffsetText;
