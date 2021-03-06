import React from 'react';

import { Steps } from '../useLogic';

import AuthenticationMenuButtons from './AuthenticationMenuButtons';
import AuthenticationMenuCreateAccount from './create_account';
import AuthenticationMenuLogin from './login';

type Props = {
  step: Steps;
  setStep: (step: Steps) => void;
};

const AuthenticationMenuSteps: React.FC<Props> = ({ step, setStep }) => {
  if (step === Steps.INITIAL)
    return (
      <AuthenticationMenuButtons
        onLoginButtonClicked={() => setStep(Steps.LOGIN)}
        onCreateAccountButtonClicked={() => setStep(Steps.CREATE_ACCOUNT)}
      ></AuthenticationMenuButtons>
    );

  if (step === Steps.CREATE_ACCOUNT)
    return (
      <AuthenticationMenuCreateAccount
        onBackButtonPressed={() => setStep(Steps.INITIAL)}
      ></AuthenticationMenuCreateAccount>
    );

  return (
    <AuthenticationMenuLogin
      onBackButtonPressed={() => setStep(Steps.INITIAL)}
    ></AuthenticationMenuLogin>
  );
};

export default AuthenticationMenuSteps;
