import useApi from '@hooks/useApi';

import { PartnerCodeResponseType } from '../useGetdata/type';

const useRefreshCode = () => {
  const {
    data: refreshCode,
    isLoading: refreshLoading,
    callApi,
  } = useApi<PartnerCodeResponseType>({
    method: 'PUT',
    api: 'partner/code',
  });

  const onRefreshCodeHandler = () => {
    callApi({});
  };

  return { onRefreshCodeHandler, refreshCode, refreshLoading };
};

export default useRefreshCode;
