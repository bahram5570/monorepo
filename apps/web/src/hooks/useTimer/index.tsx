import { useEffect, useRef, useState } from 'react';

/**
 * @param  initialTime - By seconds
 */

const useTimer = (initialTime: number, onFinish: () => void) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      timerRef.current = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onFinish();
      stopTimer();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, time, onFinish]);

  const startTimer = () => {
    setIsActive(true);
    setTime(initialTime);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsActive(false);
    setTime(initialTime);
  };

  return { startTimer, stopTimer };
};

export default useTimer;
