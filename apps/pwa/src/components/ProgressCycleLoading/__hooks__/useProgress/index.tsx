import { useEffect, useRef, useState } from 'react';

import { ProgressCycleEnums } from '@components/ProgressCycleLoading/enums';
import { TimerTypes } from '@hooks/useDelayCallback/types';

import { MAX_STROKE_DASHOFFSET, START_MODE_LOADING_PERCENTAGE } from './constants';
import { UseProgressProps } from './types';

const useProgress = ({ loadingStatus, onComplete }: UseProgressProps) => {
  const timer1 = useRef<TimerTypes>(null);
  const timer2 = useRef<TimerTypes>(null);
  const timer3 = useRef<TimerTypes>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    timer1.current = setInterval(() => {
      if (percentage < START_MODE_LOADING_PERCENTAGE) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(timer1.current || '');
      }
    }, 70);

    return () => {
      clearInterval(timer1.current || '');
    };
  }, [loadingStatus, percentage]);

  useEffect(() => {
    if (loadingStatus === ProgressCycleEnums.Complete && percentage >= START_MODE_LOADING_PERCENTAGE) {
      timer2.current = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        } else {
          clearInterval(timer2.current || '');
        }
      }, 70);
    }

    return () => {
      clearInterval(timer2.current || '');
    };
  }, [loadingStatus, percentage]);

  useEffect(() => {
    if (percentage === 100) {
      timer3.current = setTimeout(() => {
        onComplete();
      }, 500);
    }

    return () => {
      clearTimeout(timer3.current || '');
    };
  }, [percentage]);

  const strokeDashoffset = `${((100 - percentage) * MAX_STROKE_DASHOFFSET) / 100}px`;

  return { strokeDashoffset, percentage };
};

export default useProgress;
