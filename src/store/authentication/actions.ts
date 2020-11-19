import {
  AuthenticationActionTypes,
  START_CREATE_ACCOUNT,
  END_CREATE_ACCOUNT,
} from './types';

export const startCreateAccountAction = (): AuthenticationActionTypes => ({
  type: START_CREATE_ACCOUNT,
});

export const endCreateAccountAction = (
  error_message?: string
): AuthenticationActionTypes => ({
  type: END_CREATE_ACCOUNT,
  payload: { error_message },
});
