import { sleep } from 'utils/sleep';

export const login = async (email: string, password: string) => {
  await sleep(2000);

  console.log('LOGIN');
};
