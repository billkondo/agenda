import { AuthenticationState } from './state';
import {
  AUTHENTICATE,
  START_SIGN_IN,
  END_SIGN_IN,
  START_CREATE_ACCOUNT,
  END_CREATE_ACCOUNT,
  LOGOUT,
} from './events';
import { AuthenticationActionTypes } from './actions';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  email: '',

  isSigningIn: false,

  isCreatingAccount: false,
};

export const authenticationReducer = (
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        email: action.payload.email,
        isAuthenticated: true,
      };

    case START_SIGN_IN:
      return {
        ...state,
        isSigningIn: true,
        signInErrorMessage: '',
      };

    case END_SIGN_IN:
      return {
        ...state,
        isSigningIn: false,
        signInErrorMessage: action.payload.error_message,
      };

    case START_CREATE_ACCOUNT:
      return {
        ...state,
        isCreatingAccount: true,
        createAccountErrorMessage: '',
      };

    case END_CREATE_ACCOUNT:
      return {
        ...state,
        isCreatingAccount: false,
        createAccountErrorMessage: action.payload.error_message,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
