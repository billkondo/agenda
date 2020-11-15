import { Events, AuthenticationActionTypes, LoginForm } from './types';

export const login = (form: LoginForm): AuthenticationActionTypes => ({
  type: Events.LOGIN,
  payload: form,
});
