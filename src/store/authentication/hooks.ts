import { useDispatch, useSelector } from 'react-redux';

import { createAccountThunk } from './thunks';

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
