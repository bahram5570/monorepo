import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@utils/system';

import useDelayCallback from '@hooks/useDelayCallback';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { MODAL_QUERY_NAME } from './constants';

const useModalRendered = () => {
  const [isDelayPassed, setIsdelayPassed] = useState(false);
  const { getQueryParams } = useQueryParamsHandler();
  const firstTime = useRef(isDevelopeMode());
  const router = useRouter();

  const { startDelay } = useDelayCallback(() => setIsdelayPassed(true));

  const hasModalQuery = getQueryParams(MODAL_QUERY_NAME) !== null;

  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
    } else {
      startDelay(200);

      if (hasModalQuery) {
        router.back();
      }
    }
  }, []);

  return { isDelayPassed };
};

export default useModalRendered;
