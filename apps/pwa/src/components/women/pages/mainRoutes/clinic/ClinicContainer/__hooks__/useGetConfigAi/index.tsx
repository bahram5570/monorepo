import useApi from '@hooks/useApi';

import { UseGetConfigAiTypes } from './type';

const useGetConfigAi = () => {
  const { data: aiConfigData, isLoading: aiConfigLoading } = useApi<UseGetConfigAiTypes>({
    api: 'feature/ai/chat/config',
    queryKey: ['configAi'],
    method: 'GET',
  });

  return { aiConfigLoading, aiConfigData };
};

export default useGetConfigAi;
