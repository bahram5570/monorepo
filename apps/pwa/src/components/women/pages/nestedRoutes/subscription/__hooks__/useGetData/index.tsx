import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import { ResponseTypes } from './types';

const useGetData = () => {
  const [data, setData] = useState<ResponseTypes | null>(null);

  const { callApi, isLoading } = useApi<ResponseTypes>({
    api: 'info/subscribtions_v5',
    method: 'POST',
    onSuccess: (v) => {
      setData(v);
    },
  });

  useEffect(() => {
    callApi({});
  }, []);

  const loadingPage = isLoading && !data ? true : false;
  const loadingResponse = isLoading && data ? true : false;

  return { callApi, loadingPage, loadingResponse, data };
};

export default useGetData;
