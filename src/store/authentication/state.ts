export type AuthenticationState = {
  isAuthenticated: boolean;
  email: string;

  isCreatingAccount: boolean;
  createAccountErrorMessage: string;
};
