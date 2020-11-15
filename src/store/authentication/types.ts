export const Events = {
  LOGIN: 'LOGIN',
};

export type LoginForm = {
  email: string;
  password: string;
};

interface LoginAction {
  type: typeof Events.LOGIN;
  payload: LoginForm;
}

export type AuthenticationActionTypes = LoginAction;

export type AuthenticationState = {
  isAuthenticated: boolean;
};
