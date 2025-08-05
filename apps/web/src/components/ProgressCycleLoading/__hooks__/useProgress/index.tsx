import { useEffect, useRef, useState } from 'react';

import { MAX_STROKE_DASHOFFSET } from './constants';
import { UseProgressProps } from './types';

const useProgress = ({ onComplete }: UseProgressProps) => {
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const completeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 70);

    return () => {
      clearInterval(timerRef.current || '');
    };
  }, [percentage]);

  useEffect(() => {
    if (percentage >= 100) {
      completeRef.current = setTimeout(() => {
        onComplete();
      }, 2000);
    }

    return () => {
      clearTimeout(completeRef.current || '');
    };
  }, [percentage]);

  const strokeDashoffset = `${((100 - percentage) * MAX_STROKE_DASHOFFSET) / 100}px`;

  return { strokeDashoffset, percentage };
};

export default useProgress;
