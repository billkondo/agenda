import { useDispatch, useSelector } from 'react-redux';

import { createAccountThunk, loginThunk } from './thunks';

import { RootState } from 'store';

export const useCreateAccount = () => {
  const dispatch = useDispatch();
  const { isCreatingAccount, createAccountErrorMessage } = useSelector(
    (state: RootState) => {
      const {
        isCreatingAccount,
        createAccountErrorMessage,
      } = state.authentication;

      return { isCreatingAccount, createAccountErrorMessage };
    }
  );

  const createAccount = (email: string, password: string) =>
    dispatch(createAccountThunk(email, password));

  return { createAccount, isCreatingAccount, createAccountErrorMessage };
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const { isSigningIn, signInErrorMessage } = useSelector(
    (state: RootState) => {
      const { isSigningIn, signInErrorMessage } = state.authentication;

      return { isSigningIn, signInErrorMessage };
    }
  );

  const login = (email: string, password: string) =>
    dispatch(loginThunk(email, password));

  return { login, isSigningIn, signInErrorMessage };
};
