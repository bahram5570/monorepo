import { useEffect, useRef, useState } from 'react';

import { TimerTypes, UseTimerTypes } from './types';

const useDelayCallback = (callBack: UseTimerTypes) => {
  const [count, setCount] = useState<null | number>(null);
  const ref = useRef<TimerTypes>();

  useEffect(() => {
    if (count !== null) {
      if (count <= 0) {
        clearInterval(ref.current || '');
        setCount(null);
        callBack();
      }

      if (count > 0) {
        ref.current = setInterval(() => {
          setCount(count - 1);
        }, 1);
      }
    }

    return () => {
      clearInterval(ref.current || '');
    };
  }, [count]);

  useEffect(() => {
    return () => {
      clearInterval(ref.current || '');
      setCount(null);
    };
  }, []);

  const startDelay = (timeOut: number) => {
    setCount(timeOut);
  };

  return { startDelay };
};

export default useDelayCallback;
