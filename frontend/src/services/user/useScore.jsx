import { QUERY_KEYS, ROUTE_KEYS } from '../../constants';
import { useQueryClient, useMutation } from 'react-query';
import { sendResults } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

export const useScore = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postResult } = useMutation(
    sendResults,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.ASSIGNED]);
        navigate(ROUTE_KEYS.HOME);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return postResult;
};