import { QUERY_KEYS } from '../../constants';
import { useQuery } from 'react-query';
import { getQuizById } from '../../utils/axios';

export const useQuiz = (id) => {
  const data = useQuery(
    [QUERY_KEYS.QUIZ],
    async () => getQuizById(id),
    { refetchOnWindowFocus: false, retry: 2, }
  );
  
  return data;
};