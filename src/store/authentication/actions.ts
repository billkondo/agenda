import {
  AUTHENTICATE,
  START_SIGN_IN,
  END_SIGN_IN,
  START_CREATE_ACCOUNT,
  END_CREATE_ACCOUNT,
} from './events';

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: {
    email: string;
  };
}
export const authenticateAction = (
  email: string
): AuthenticationActionTypes => ({
  type: AUTHENTICATE,
  payload: { email },
});

interface StartSignIn {
  type: typeof START_SIGN_IN;
}
export const startSignInAction = (): AuthenticationActionTypes => ({
  type: START_SIGN_IN,
});

interface EndSignIn {
  type: typeof END_SIGN_IN;
  payload: { error_message?: string };
}
export const endSignInAction = (
  error_message?: string
): AuthenticationActionTypes => ({
  type: END_SIGN_IN,
  payload: { error_message },
});

interface StartCreateAccountAction {
  type: typeof START_CREATE_ACCOUNT;
}
export const startCreateAccountAction = (): AuthenticationActionTypes => ({
  type: START_CREATE_ACCOUNT,
});

interface EndCreateAccountAction {
  type: typeof END_CREATE_ACCOUNT;
  payload: {
    error_message?: string;
  };
}
export const endCreateAccountAction = (
  error_message?: string
): AuthenticationActionTypes => ({
  type: END_CREATE_ACCOUNT,
  payload: { error_message },
});

export type AuthenticationActionTypes =
  | AuthenticateAction
  | StartSignIn
  | EndSignIn
  | StartCreateAccountAction
  | EndCreateAccountAction;
