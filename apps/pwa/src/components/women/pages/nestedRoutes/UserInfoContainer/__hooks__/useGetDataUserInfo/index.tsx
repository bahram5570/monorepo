import { useEffect, useState } from 'react';

import useProfileData from '@hooks/__profile__/useProfileData';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

const useGetDataUserInfo = () => {
  const { profileData: queryData, isLoading } = useProfileData();
  const [profileData, setProfileData] = useState<ProfileResponseTypes>();

  useEffect(() => {
    if (queryData) {
      setProfileData(queryData);
    }
  }, [queryData]);

  return { profileData, loading: isLoading };
};

export default useGetDataUserInfo;
