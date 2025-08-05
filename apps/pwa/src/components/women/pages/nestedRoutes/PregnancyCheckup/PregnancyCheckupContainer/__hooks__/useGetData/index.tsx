import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['pregnancyCheckuplist'],
    api: `info/pregnancy/checkups?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
  });
  return { data, isLoading };
};

export default useGetData;
