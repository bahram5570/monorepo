import { useEffect, useRef, useState } from 'react';

import { useTimerPropsType } from './type';

const useTimer = ({ timer }: useTimerPropsType) => {
  const [progress, setProgress] = useState(0.02);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timer);
  const timerRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>(0);
  const duration = timer || 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isRunning) return;

    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const newProgress = Math.min(elapsed / duration, 1);

      setProgress(newProgress);

      const remaining = Math.max(0, Math.ceil(duration - elapsed));
      setRemainingTime(remaining);

      if (newProgress === 1) {
        clearInterval(timerRef.current!);
        setIsRunning(false);
        setRemainingTime(0);
      }
    }, 100);

    return () => clearInterval(timerRef.current!);
  }, [isRunning]);

  const dashoffset = circumference * (1 - progress);
  const angle = progress * 2 * Math.PI - Math.PI / 2;
  const centerX = 60 + radius * Math.cos(angle);
  const centerY = 60 + radius * Math.sin(angle);

  const handleStart = () => {
    clearInterval(timerRef.current!);
    setProgress(0);
    setRemainingTime(duration);
    setIsRunning(true);
  };

  return { handleStart, remainingTime, centerY, centerX, dashoffset, circumference, progress, isRunning };
};

export default useTimer;
