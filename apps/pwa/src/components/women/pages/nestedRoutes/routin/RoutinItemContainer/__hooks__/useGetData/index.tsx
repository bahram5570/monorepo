import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RoutinItemResponseTypes } from './types';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const searchData = getQueryParams('searchData');
  const api = searchData ? `widgets/program/item/info?${searchData}` : '';

  const { callApi, isLoading, data } = useApi<RoutinItemResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['routinItem'],
  });

  useEffect(() => {
    if (api.length > 0) {
      callApi();
    }
  }, [api]);

  return { isLoading, data };
};

export default useGetData;
