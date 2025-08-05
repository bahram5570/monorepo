import useApi from '@hooks/useApi';

import { useState } from 'react';

import { jalaaliScriptDate, toGregorianData, toJalaliData } from '@utils/dates';

import { ValuesTypes } from '../../DateModule/__hooks__/useValues/types';
import { ResponseTypes } from './types';

const useCalculatePeriod = () => {
  const [result, setResult] = useState('');

  const successHandler = (v: ResponseTypes) => {
    const jalaliDate = toJalaliData(v.period.date);
    const script = jalaaliScriptDate(jalaliDate);
    setResult(script);
  };

  const { isLoading, callApi } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    url: 'publicfeature/calculate/period',
  });

  const submitHandler = (v: ValuesTypes) => {
    const payload = {
      cycleLength: v.cycleLength,
      periodLength: v.periodLength,
      startPeriod: toGregorianData(v.lastPeriod),
    };

    callApi(payload);
  };

  const resetHandler = () => {
    setResult('');
  };

  return { submitHandler, isLoading, resetHandler, result };
};

export default useCalculatePeriod;
