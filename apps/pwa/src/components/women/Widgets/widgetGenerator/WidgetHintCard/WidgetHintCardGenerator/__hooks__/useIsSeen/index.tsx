import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useApi from '@hooks/useApi';

import { UseIsSeenProps } from './types';

const useIsSeen = (props: UseIsSeenProps) => {
  const initialCounterTime = typeof props.minReadingDuration === 'number' ? props.minReadingDuration : 10;

  const { ref, inView } = useInView();
  const timer = useRef<NodeJS.Timeout>();
  const [isSeen, setIsSeen] = useState(props.isSeen);
  const [counter, setCounter] = useState(initialCounterTime);
  const { callApi } = useApi({ api: 'archive/hint/seen', method: 'POST' });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!isSeen && inView) {
        if (counter > 0) {
          setCounter((state) => state - 1);
        } else {
          setIsSeen(true);
          callApi({ id: props.id });
        }
      } else {
        setCounter(props.minReadingDuration);
      }
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [counter, isSeen, inView, timer.current]);

  return { ref };
};

export default useIsSeen;
