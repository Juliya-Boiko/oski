import { QUERY_KEYS } from '../../constants';
import { useQuery } from 'react-query';
import { getAssigned } from '../../utils/axios';

export const useAssigned = () => {
  const result = useQuery(
    [QUERY_KEYS.ASSIGNED],
    async () => await getAssigned(),
    { refetchOnWindowFocus: true, retry: 2, }
  );

  return result;
};