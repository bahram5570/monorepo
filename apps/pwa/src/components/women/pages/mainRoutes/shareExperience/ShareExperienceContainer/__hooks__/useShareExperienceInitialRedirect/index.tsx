import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useSearchParams } from 'next/navigation';

import { SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE } from '../../../constants';

const useShareExperienceInitialRedirect = () => {
  const searchParams = useSearchParams();
  const isFirstTime = useRef(isDevelopeMode());
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const redirectStorage = sessionStorage.getItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
  const queryString = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (redirectStorage) {
      const data = redirectStorage.split('=');
      newQueryParamsHandler({ [data[0]]: data[1] });
      sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
    }
  }, [queryString]);

  useEffect(() => {
    if (isFirstTime.current) {
      return;
    }

    if (!redirectStorage) {
      history.replaceState(null, '', '/protected/shareExperience');
    }

    return () => {
      sessionStorage.removeItem(SHARE_EXPERIENCE_REDIRECT_SESSION_STORAGE);
    };
  }, []);
};

export default useShareExperienceInitialRedirect;
