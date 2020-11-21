import { Dispatch } from 'redux';

import { Api } from 'api';

import {
  authenticateAction,
  startSignInAction,
  endSignInAction,
  startCreateAccountAction,
  endCreateAccountAction,
  logoutAction,
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

export function loginThunk(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startSignInAction());

      await Api.Authentication.login(email, password);

      dispatch(authenticateAction(email));
      dispatch(endSignInAction());
    } catch (error) {
      dispatch(endSignInAction('Login failed'));
      throw error;
    }
  };
}

export function logoutThunk() {
  return async (dispatch: Dispatch) => {
    await Api.Authentication.logout();
    dispatch(logoutAction());
  };
}
