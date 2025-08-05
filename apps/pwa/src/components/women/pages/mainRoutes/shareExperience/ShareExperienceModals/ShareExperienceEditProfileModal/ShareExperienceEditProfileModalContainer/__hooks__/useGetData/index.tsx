import { useEffect, useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useShareExperenceProfileGetData from '../../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData';
import { ShareExperenceProfileResponsePropsType } from '../../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';

const useGetData = (userId: string | undefined) => {
  const [profileData, setProfileData] = useState<ShareExperenceProfileResponsePropsType>();
  const [loading, setLoading] = useState(true);
  const { getQuery } = useCustomReactQuery(['shareExperienceProfile'], { gcTime: 1000 * 60 * 5 });
  const queryData = getQuery<ShareExperenceProfileResponsePropsType>({ queryKey: ['shareExperienceProfile'] });
  const { callApi } = useShareExperenceProfileGetData(userId);

  useEffect(() => {
    if (queryData) {
      setProfileData(queryData);
    } else {
      callApi();
    }
  }, [queryData]);

  return { profileData, loading };
};

export default useGetData;
