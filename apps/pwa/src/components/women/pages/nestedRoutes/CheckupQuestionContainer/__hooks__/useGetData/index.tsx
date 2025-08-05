import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { ResponsePropsType, UseGetDataPropsType } from './type';

const useGetData = ({ type, week }: UseGetDataPropsType) => {
  const { isLoading, callApi, data } = useApi<ResponsePropsType>({
    method: 'POST',
    api: 'info/pregnancy/checkup/data',
  });

  const getDataHandler = () => {
    const payload = {
      type,
      week,
    };
    callApi(payload);
  };

  useEffect(() => {
    if (!isNaN(Number(type)) && !isNaN(Number(week))) {
      getDataHandler();
    }
  }, [type, week]);

  return { data, isLoading };
};

export default useGetData;
