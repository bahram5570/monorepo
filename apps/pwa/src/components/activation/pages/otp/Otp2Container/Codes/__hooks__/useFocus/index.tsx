import { useEffect, useState } from 'react';

import { UseFocusProps } from './types';

const useFocus = ({ steps }: UseFocusProps) => {
  const [focusInfo, setFocusIndex] = useState({ index: 0 });

  const focusIndexHandler = () => {
    let index = 0;
    steps.forEach((s) => s !== '' && index++);
    setFocusIndex({ index });
  };

  useEffect(() => {
    focusIndexHandler();
  }, [steps]);

  const isFocusHandler = () => {
    focusIndexHandler();
  };

  return { focusInfo, isFocusHandler };
};

export default useFocus;
