import { useAuthentication } from 'store/authentication';

export const useLogic = () => {
  const { isAuthenticated } = useAuthentication();

  return {
    isAuthenticated,
  };
};
