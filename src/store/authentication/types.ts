export const START_CREATE_ACCOUNT = 'START_CREATE_ACCOUNT';
export const END_CREATE_ACCOUNT = 'END_CREATE_ACCOUNT';

interface StartCreateAccountAction {
  type: typeof START_CREATE_ACCOUNT;
}

interface EndCreateAccountAction {
  type: typeof END_CREATE_ACCOUNT;
  payload: {
    error_message?: string;
  };
}

export type AuthenticationActionTypes =
  | StartCreateAccountAction
  | EndCreateAccountAction;

export type AuthenticationState = {
  isAuthenticated: boolean;
  email: string;

  isCreatingAccount: boolean;
  createAccountErrorMessage: string;
};
