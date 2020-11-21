import { useAuthentication, useLogout } from 'store/authentication';

export const useLogic = () => {
  const { isAuthenticated } = useAuthentication();
  const { logout } = useLogout();

  return { isAuthenticated, logout };
};
