import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

const selectAuthenticationState = (state: RootState) => state.authentication;

export const useLogic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { isAuthenticated } = useSelector(selectAuthenticationState);

  return {
    title,
    description,
    isAuthenticated,
  };
};
