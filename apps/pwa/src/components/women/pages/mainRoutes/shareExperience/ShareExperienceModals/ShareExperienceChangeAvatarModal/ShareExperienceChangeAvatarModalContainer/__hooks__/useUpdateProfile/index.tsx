import { useState } from 'react';

import { ShareExperienceResponseTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/__hooks__/useShareExperienceGetData/types';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { onProfileChangeHandlerPropsType } from './type';

const useUpdateProfile = () => {
  const [payloadShareExperienceData, setPayloadShareExperienceData] = useState<ShareExperienceResponseTypes>();
  const { refetchQuery, updateQuery, getQuery } = useCustomReactQuery();
  const shareExperienceData = getQuery<ShareExperienceResponseTypes>({ queryKey: ['shareExperience'] });
  const { onToast } = useCustomToast();
  const route = useRouter();

  const successHandler = () => {
    refetchQuery({ queryKey: ['shareExperienceProfile'] });

    if (payloadShareExperienceData) {
      updateQuery({ queryKey: ['shareExperience'], payload: payloadShareExperienceData });
    }
    route.back();
  };

  const { callApi, isLoading } = useApi({
    api: 'shareeexperience/v3/profile',
    method: 'POST',
    onSuccess: successHandler,
  });

  const onProfileChangeHandler = ({ avatarImage, username }: onProfileChangeHandlerPropsType) => {
    if (!username) {
      onToast({ message: 'نام کاربری را وارد کنید', type: 'error' });
      return;
    }

    if (shareExperienceData) {
      setPayloadShareExperienceData({
        ...shareExperienceData,
        profile: { ...shareExperienceData.profile, username, avatarImage: avatarImage || '' },
      });
    }

    const payload = {
      username,
      avatarImage,
    };

    callApi(payload);
  };

  return { onProfileChangeHandler, isLoading };
};

export default useUpdateProfile;
