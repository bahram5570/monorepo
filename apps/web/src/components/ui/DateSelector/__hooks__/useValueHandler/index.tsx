import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import { UseValueHandlerProps } from './types';

const useValueHandler = ({ values, valueHandler }: UseValueHandlerProps) => {
  const isFirstTime = useRef(isDevelopeMode());

  const stringMaker = () => {
    if (values.year === '' || values.month === '' || values.day === '') {
      return null;
    }

    return `${values.year}/${values.month}/${values.day}`;
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      const result = stringMaker();

      if (result) {
        valueHandler(result);
      }
    }
  }, [values.year, values.month, values.day]);
};

export default useValueHandler;
