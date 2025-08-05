import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetPartnerName = () => {
  const { isLoading, data: partnerName } = useApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
  });

  return { isLoading, partnerName };
};

export default useGetPartnerName;
