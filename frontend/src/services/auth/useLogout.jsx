import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS, ROUTE_KEYS } from '../../constants';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    queryClient.setQueryData([QUERY_KEYS.ACCESS], null);
    navigate(ROUTE_KEYS.AUTH);
  };

  return logout;
};