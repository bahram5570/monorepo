import { useEffect, useState } from 'react';

import useProfileData from '@hooks/__profile__/useProfileData';

const useGetDataSupport = () => {
  const [supportPhone, setSupportPhone] = useState<string>();
  const { isLoading, profileData } = useProfileData();

  useEffect(() => {
    if (profileData) {
      setSupportPhone(profileData.supportPhone);
    }
  }, [profileData]);

  return { supportPhone, isLoading };
};

export default useGetDataSupport;
