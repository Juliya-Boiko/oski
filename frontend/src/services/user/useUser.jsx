import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { QUERY_KEYS } from '../../constants';
import { saveUserInfo, getUserInfo, removeUserInfo } from '../../utils/storage';
import { getUser } from '../../utils/axios';

export const useUser = () => {
  const { data: user } = useQuery(
    [QUERY_KEYS.USER],
    () => {
      console.log('useUser income user', user);
      getUser(user);
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      initialData: getUserInfo,
      onError: () => removeUserInfo(),
    }
  );

  useEffect(() => {
    if (!user) removeUserInfo();
    else saveUserInfo(user);
  }, [user]);

  return user ? user : null;
};