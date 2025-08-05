import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ChallengeResponseType } from './type';

const useGetData = () => {
  const { newQuery, getQuery } = useCustomReactQuery(['partner']);

  const {
    isLoading,
    data: partnerInfo,
    callApi,
  } = useApi<ChallengeResponseType>({
    method: 'GET',
    queryKey: ['partnerKey'],
    api: 'challenge/v1',
  });

  const data = getQuery<ChallengeResponseType>({ queryKey: ['partner'] });

  useEffect(() => {
    if (partnerInfo) {
      newQuery({ payload: partnerInfo, queryKey: ['partner'] });
    } else {
      callApi();
    }
  }, [partnerInfo]);

  return { isLoading, data };
};

export default useGetData;
