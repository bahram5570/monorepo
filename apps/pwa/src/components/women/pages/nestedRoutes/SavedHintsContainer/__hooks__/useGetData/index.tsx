import useApi from '@hooks/useApi';

import { SavedHintsResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = useApi<SavedHintsResponseTypes>({
    method: 'GET',
    queryKey: ['savedHints'],
    api: 'archive/hint/bookmark',
  });

  return { isLoading, data };
};

export default useGetData;
