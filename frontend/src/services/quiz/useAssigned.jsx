import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';
import { getAssigned } from '../../utils/axios';

export const useAssigned = () => {
  const result = useQuery(
    [QUERY_KEYS.ASSIGNED],
    async () => await getAssigned(),
    { refetchOnWindowFocus: true, retry: 6, }
  );

  return result;
};