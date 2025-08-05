import { useEffect, useState } from 'react';

import useDelayCallback from '@hooks/useDelayCallback';

const useInitialDelay = () => {
  const [isInitialRendered, setIsInitialRendered] = useState(false);

  const { startDelay } = useDelayCallback(() => setIsInitialRendered(true));

  useEffect(() => {
    startDelay(100);
  }, []);

  return { isInitialRendered };
};

export default useInitialDelay;
