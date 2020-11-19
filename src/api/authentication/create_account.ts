import { sleep } from 'utils/sleep';

export const createAccount = async (email: string, password: string) => {
  await sleep(2000);
  console.log('create account');
};
