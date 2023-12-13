import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';
import { getQuizById } from '../../utils/axios';

export const useQuiz = (id) => {
  const { data } = useQuery(
    [QUERY_KEYS.QUIZ],
    async () => getQuizById(id),
    { refetchOnWindowFocus: true, retry: 6, refetchOnMount: true }
  );
  
  return data;
};