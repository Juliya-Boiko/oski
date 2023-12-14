import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';
import { getQuizById } from '../../utils/axios';

export const useQuiz = (id) => {
  const data = useQuery(
    [QUERY_KEYS.QUIZ],
    // () => console.log('useQuiz incoming id', id),
    async () => getQuizById(id),
    { refetchOnWindowFocus: false, retry: 2, }
  );
  
  return data;
};