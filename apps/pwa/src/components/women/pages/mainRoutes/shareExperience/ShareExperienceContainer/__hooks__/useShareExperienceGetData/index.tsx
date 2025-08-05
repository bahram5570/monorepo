import { useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ShareExperienceResponseTypes } from './types';

const useShareExperienceGetData = () => {
  const [data, setData] = useState<ShareExperienceResponseTypes | undefined>(undefined);
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = (v: ShareExperienceResponseTypes) => {
    setData(v);
  };

  const { isLoading } = useApi<ShareExperienceResponseTypes>({
    queryKey: ['shareExperience'],
    api: 'shareeexperience/v3',
    onSuccess: successHandler,
    method: 'GET',
  });

  const onSuccessNewHandler = () => {
    refetchQuery({ queryKey: ['shareExperience'] });
    setData(undefined);
  };

  return { isLoading, data, onSuccessNewHandler };
};

export default useShareExperienceGetData;
