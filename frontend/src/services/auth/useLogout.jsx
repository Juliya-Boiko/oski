import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS, ROUTE_KEYS } from '../../constants';
import { useCallback } from 'react';
import { logoutUser } from '../../utils/axios';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    await logoutUser();
    queryClient.setQueryData([QUERY_KEYS.USER], null);
    navigate(ROUTE_KEYS.AUTH);
  }, [navigate, queryClient]);

  return logout;
};