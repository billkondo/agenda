import { useState } from 'react';

import { useAuthentication } from 'store/authentication';

export enum Steps {
  INITIAL,
  LOGIN,
  CREATE_ACCOUNT,
}

export const useLogic = () => {
  const { isAuthenticated } = useAuthentication();

  const [step, setStep] = useState(Steps.INITIAL);

  return { step, setStep, isAuthenticated };
};
