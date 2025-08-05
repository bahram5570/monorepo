import { useState } from 'react';

import { ValuesHandlerTypes, ValuesTypes } from './types';

const useValues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [values, setValues] = useState<ValuesTypes>({ cycleLength: 0, periodLength: 0, lastPeriod: '' });

  const isOpenHandler = (b: boolean) => {
    setIsOpen(b);
  };

  const valuesHandler: ValuesHandlerTypes = (v) => {
    if (v.name === 'lastPeriod') {
      setValues((state) => ({ ...state, lastPeriod: v.value.toString() }));
      isOpenHandler(false);
      return;
    }

    setValues((state) => ({ ...state, [v.name]: v.value }));
  };

  const currentDateHandler = (v: string) => {
    setCurrentDate(v);
  };

  return { currentDate, currentDateHandler, values, valuesHandler, isOpen, isOpenHandler };
};

export default useValues;
