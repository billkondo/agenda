import { Dispatch } from 'redux';

import { Api } from 'api';

import {
  authenticateAction,
  startCreateAccountAction,
  endCreateAccountAction,
} from './actions';

export function createAccountThunk(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startCreateAccountAction());

      await Api.Authentication.createAccount(email, password);

      dispatch(authenticateAction(email));
      dispatch(endCreateAccountAction());
    } catch (error) {
      dispatch(endCreateAccountAction('Account creation failed'));
      throw error;
    }
  };
}
