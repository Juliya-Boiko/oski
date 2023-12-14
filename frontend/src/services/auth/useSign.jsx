import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTE_KEYS, QUERY_KEYS } from '../../constants';
import { signUser } from '../../utils/axios';

export const useSign = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signMutation } = useMutation(
    (values) => signUser(values),
    {
      onSuccess: ({ data }) => {
        console.log('useSign income data', data);
        queryClient.setQueryData([QUERY_KEYS.USER], data);
        navigate(ROUTE_KEYS.HOME);
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  return signMutation;
};