import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@utils/system';

import useDelayCallback from '@hooks/useDelayCallback';

const useWheelPickerReady = () => {
  const isFirstTime = useRef(isDevelopeMode());
  const [ready, setReady] = useState(false);

  const { startDelay } = useDelayCallback(() => setReady(true));

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    startDelay(10);
  }, []);

  return { ready };
};

export default useWheelPickerReady;
