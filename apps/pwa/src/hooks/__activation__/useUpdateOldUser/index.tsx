import { useState } from 'react';

import { UserCookieTypes, getUserCookie } from '@utils/cookies';
import { registerPayloadUpdater } from '@utils/register';

import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

import { UpdateOldUserSuccessHandlerTypes } from './types';

const useUpdateOldUser = (payload: ActivationPayloadTypes) => {
  const { culture } = useCulture();
  const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);

  const [pair, setPair] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<UserCookieTypes | null>(null);

  const updateOldUserSuccessHandler: UpdateOldUserSuccessHandlerTypes = (v) => {
    const { user } = getUserCookie();

    if (user) {
      setFetchedUser(user);
      setPair(v.pair);
    }
  };

  const { isLoading, callApi } = useApi({
    method: 'PUT',
    api: 'info/v2/update',
    onSuccess: updateOldUserSuccessHandler,
  });

  const updateHandler = () => {
    callApi(updatedPayload);
  };

  return { updateHandler, isLoading, pair, fetchedUser };
};

export default useUpdateOldUser;
