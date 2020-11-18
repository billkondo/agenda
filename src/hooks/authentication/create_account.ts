import firebase from 'firebase';

import { delayedCall } from 'utils/delayedCall';
import { sleep } from 'utils/sleep';

export const useCreateAccount = () => {
  const createAccount = async (email: string, password: string) => {
    await delayedCall(_signUp(email, password));
  };

  const _signUp = async (email: string, password: string) => {
    await sleep(2000);
  };

  return {
    createAccount,
  };
};
