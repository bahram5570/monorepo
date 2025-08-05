import { useEffect } from 'react';

import useDelayCallback from '@hooks/useDelayCallback';

import { CallbackTypes } from './types';

const useInitialValueHandler = (callback: CallbackTypes) => {
  const { startDelay } = useDelayCallback(() => {
    callback();
  });

  useEffect(() => {
    startDelay(100);
  }, []);
};

export default useInitialValueHandler;
