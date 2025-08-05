import { useState } from 'react';

import { phaseChangePayloadUpdater } from './__utils__';
import { UserCookieTypes, getUserCookie } from '@utils/cookies';

import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { UsePhaseChangeProps } from './types';

const usePhaseChange = ({ payload, api }: UsePhaseChangeProps) => {
  const { culture } = useCulture();
  const { updateProfileDateByDellay } = useGetProfileData();
  const [fetchedUser, setFetchedUser] = useState<UserCookieTypes | null>(null);

  const phaseChangeSuccessHandler = () => {
    const { user } = getUserCookie();

    updateProfileDateByDellay();

    if (user) {
      user.installationPurpose = { periodStatus: payload.periodStatus, status: payload.status };
      setFetchedUser(user);
    }
  };

  const { isLoading, callApi } = useApi({
    api,
    method: 'PUT',
    onSuccess: phaseChangeSuccessHandler,
  });

  const phaseChangeHandler = () => {
    const updatedPayload = phaseChangePayloadUpdater(payload, culture.calendarType);
    callApi(updatedPayload);
  };

  return { phaseChangeHandler, isLoading, fetchedUser };
};

export default usePhaseChange;
