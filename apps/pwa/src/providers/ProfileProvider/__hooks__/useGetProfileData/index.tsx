import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@utils/system';

import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ProfileResponseTypes, UseGetProfileDataPropsType } from './type';

const useGetProfileData = (onComplete?: UseGetProfileDataPropsType) => {
  const { cultureHandler } = useCulture();
  const isFirstTime = useRef(isDevelopeMode());
  const { newQuery, getQuery } = useCustomReactQuery(['profile']);

  const successHandler = (v: ProfileResponseTypes) => {
    newQuery({ payload: v, queryKey: ['profile'] });
    cultureHandler('calendarType', v.calendarType);

    if (onComplete) {
      onComplete();
    }
  };

  const { isLoading: dataLoading, callApi: getData } = useApi<ProfileResponseTypes>({
    method: 'POST',
    api: 'profile/woman/info',
    onSuccess: successHandler,
  });

  const data = getQuery<ProfileResponseTypes>({ queryKey: ['profile'] });

  const getDataHandler = () => {
    const payload = {
      type: 0,
      packageName: '',
      version: process.env.NEXT_PUBLIC_APP_VERSION || '',
    };

    getData(payload);
  };

  const updateProfileData = () => {
    getDataHandler();
  };

  const [countingDown, setCountingDown] = useState(false);

  useEffect(() => {
    if (countingDown) {
      const timer = setTimeout(() => {
        setCountingDown(false);
        getDataHandler();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [countingDown]);

  const updateProfileDateByDellay = () => {
    setCountingDown(true);
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (!data) {
      getDataHandler();
    } else {
      newQuery({ payload: data, queryKey: ['profile'] });
    }
  }, []);

  return { isLoading: dataLoading, data, updateProfileData, updateProfileDateByDellay };
};

export default useGetProfileData;
