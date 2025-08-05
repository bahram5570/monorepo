import { useContext } from 'react';

import { ProfileContext } from '@providers/ProfileProvider';

const useProfileData = () => {
  return useContext(ProfileContext);
};

export default useProfileData;
