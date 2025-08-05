import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RoutinResponseTypes } from './types';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const searchData = getQueryParams('searchData');
  const api = searchData ? `widgets/program/items?${searchData}` : '';

  const { callApi, isLoading, data } = useApi<RoutinResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['routin'],
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data };
};

export default useGetData;
