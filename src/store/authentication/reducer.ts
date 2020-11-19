import {
  AuthenticationActionTypes,
  AuthenticationState,
  START_CREATE_ACCOUNT,
  END_CREATE_ACCOUNT,
} from './types';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  email: '',

  isCreatingAccount: false,
  createAccountErrorMessage: '',
};

export const authenticationReducer = (
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState => {
  switch (action.type) {
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
        createAccountErrorMessage: action.payload.error_message ?? '',
      };

    default:
      return state;
  }
};
