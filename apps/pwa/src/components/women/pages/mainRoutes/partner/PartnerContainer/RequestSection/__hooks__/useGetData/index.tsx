import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { RequestPartnerResponseType } from './type';

const useGetData = () => {
  const {
    data,
    isLoading,
    callApi: getData,
  } = useApi<RequestPartnerResponseType>({ method: 'GET', queryKey: ['partnerRequest'], api: 'partner/requests' });

  useEffect(() => {
    getData();
  }, []);
  return { data, isLoading, getData };
};

export default useGetData;
