import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { PartnerCodeResponseType } from './type';

const useGetData = () => {
  const {
    data,
    isLoading,
    callApi: getData,
  } = useApi<PartnerCodeResponseType>({
    method: 'GET',
    api: 'partner/code',
    queryKey: ['partnerCode'],
  });

  useEffect(() => {
    getData();
  }, []);

  return { data, getData, isLoading };
};

export default useGetData;
