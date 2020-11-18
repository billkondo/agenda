import { sleep } from 'utils/sleep';

export const delayedCall = async (func: any) => {
  const results = await Promise.all([await func, await sleep(800)]);
  return results[0];
};
