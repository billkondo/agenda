export type AuthenticationState = {
  isAuthenticated: boolean;
  email: string;

  isSigningIn: boolean;
  signInErrorMessage?: string;

  isCreatingAccount: boolean;
  createAccountErrorMessage?: string;
};
