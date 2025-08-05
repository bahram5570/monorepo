import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { ShareExperenceProfileResponsePropsType } from './type';

const useShareExperenceProfileGetData = (userId: string | undefined) => {
  const { callApi, data, isLoading } = useApi<ShareExperenceProfileResponsePropsType>({
    api: `shareeexperience/v3/profile/${userId}`,
    method: 'GET',
    queryKey: ['shareExperienceProfile'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (userId) {
      callApi();
    }
  }, [userId]);

  return { data, isLoading, callApi };
};

export default useShareExperenceProfileGetData;
