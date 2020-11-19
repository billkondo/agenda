import {
  AUTHENTICATE,
  START_CREATE_ACCOUNT,
  END_CREATE_ACCOUNT,
} from './events';

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: {
    email: string;
  };
}
export const authenticateAction = (email: string) => ({
  type: AUTHENTICATE,
  payload: { email },
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
  | StartCreateAccountAction
  | EndCreateAccountAction;
