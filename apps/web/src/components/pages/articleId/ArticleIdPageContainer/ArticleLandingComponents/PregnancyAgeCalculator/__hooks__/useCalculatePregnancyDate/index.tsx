import useApi from '@hooks/useApi';

import { useEffect, useState } from 'react';

import { jalaaliScriptDate, toGregorianData, toJalaliData } from '@utils/dates';

import { PregnancyDate1ResponseTypes, PregnancyDate2ResponseTypes, PregnancyDatePayloadTypes } from './types';

const useCalculatePregnancyDate = () => {
  const [payload, setPayload] = useState<PregnancyDatePayloadTypes | null>(null);

  const submitHandler = (v: string) => {
    const pregnancyDate = toGregorianData(v);
    setPayload({ isDelivery: false, pregnancyDate });
  };

  const [pregnancyDateResult, setPregnancyDateResult] = useState<string | null>(null);
  const [weeksResult, setWeeksResult] = useState<PregnancyDate1ResponseTypes | null>(null);

  const successHandler1 = (v: PregnancyDate1ResponseTypes) => {
    setWeeksResult(v);
  };

  const { isLoading: isLoading1, callApi: callApi1 } = useApi<PregnancyDate1ResponseTypes>({
    method: 'POST',
    onSuccess: successHandler1,
    url: 'publicfeature/calculate/Pregnancy',
  });

  const successHandler2 = (v: PregnancyDate2ResponseTypes) => {
    const lastWeek = v.items.find((item) => item.week === 40);

    if (lastWeek) {
      const jalaliDate = toJalaliData(lastWeek.to);
      const result = jalaaliScriptDate(jalaliDate);
      setPregnancyDateResult(result);
    }
  };

  const { callApi: callApi2, isLoading: isLoading2 } = useApi<PregnancyDate2ResponseTypes>({
    method: 'POST',
    onSuccess: successHandler2,
    url: 'publicfeature/calculate/Pregnancy/weeksdate',
  });

  useEffect(() => {
    if (payload) {
      callApi1(payload);
      callApi2(payload);
    }
  }, [payload]);

  const resetHandler = () => {
    setPayload(null);
    setWeeksResult(null);
    setPregnancyDateResult(null);
  };

  const isLoading = isLoading1 || isLoading2;

  return { submitHandler, isLoading, weeksResult, pregnancyDateResult, resetHandler };
};

export default useCalculatePregnancyDate;
