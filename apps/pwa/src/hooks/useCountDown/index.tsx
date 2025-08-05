import { useEffect, useRef, useState } from 'react';

import { UseCountDownProps } from './types';

const useCountDown = (props: UseCountDownProps) => {
  const timerRef = useRef<NodeJS.Timeout>();
  const [count, setCount] = useState(-1);

  useEffect(() => {
    if (count > 0) {
      timerRef.current = setInterval(() => {
        setCount((s) => s - 1);
      }, 1000);
    }

    if (count === 0 && props.onCallBack) {
      props.onCallBack();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [count]);

  const startCounter = () => {
    if (count <= 0) {
      setCount(props.time);
    }
  };

  return { count, startCounter };
};

export default useCountDown;
