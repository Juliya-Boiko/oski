import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTE_KEYS, QUERY_KEYS } from '../../constants';
import { loginUser } from '../../utils/axios';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation(
    (values) => loginUser(values),
    {
      onSuccess: (data) => {
        queryClient.setQueryData([QUERY_KEYS.ACCESS], data);
        navigate(ROUTE_KEYS.HOME);
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  return loginMutation;
};