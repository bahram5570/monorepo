import { useEffect, useRef, useState } from 'react';

import { UseProgressTypes } from './types';

const useProgress = ({ currentTab, tabIndex, lastIndex, currentTabHandler }: UseProgressTypes) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const isLastOne = currentTab === lastIndex;
    const isProgressing = isLastOne ? tabIndex === 0 : currentTab + 1 === tabIndex;

    if (isProgressing) {
      if (progressPercentage <= 100) {
        timer.current = setInterval(() => {
          setProgressPercentage(progressPercentage + 0.1);
        }, 10);
      } else {
        currentTabHandler(tabIndex);
        setProgressPercentage(0);
        clearInterval(timer.current);
      }
    } else {
      setProgressPercentage(0);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [currentTab, tabIndex, lastIndex, progressPercentage]);

  return { progressPercentage };
};

export default useProgress;
