import useApi from '@hooks/useApi';

import { ResponsePropsType, UseGetDataPropsType } from './type';

const useGetData = ({ id }: UseGetDataPropsType) => {
  const { data, isLoading } = useApi<ResponsePropsType>({
    api: `challenge/${id}/chat`,
    method: 'GET',
    queryKey: [`chat-${id}`],
  });
  return { data, isLoading };
};

export default useGetData;
