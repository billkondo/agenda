import {
  AuthenticationActionTypes,
  AuthenticationState,
  Events,
} from './types';

const initialState: AuthenticationState = {
  isAuthenticated: false,
};

export const authenticationReducer = (
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState => {
  switch (action.type) {
    case Events.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};
