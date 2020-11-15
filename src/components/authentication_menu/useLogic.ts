import { useState } from 'react';

export enum Steps {
  INITIAL,
  LOGIN,
  CREATE_ACCOUNT,
}

export const useLogic = () => {
  const [step, setStep] = useState(Steps.INITIAL);

  return { step, setStep };
};
