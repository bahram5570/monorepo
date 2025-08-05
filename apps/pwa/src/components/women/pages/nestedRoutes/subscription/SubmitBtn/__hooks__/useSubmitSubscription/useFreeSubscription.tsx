import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouter } from 'next/navigation';

import { FreeSubscriptionResponseTypes } from './types';

const useFreeSubscription = () => {
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();
  const { updateProfileDateByDellay } = useGetProfileData(() => {
    router.push('/');
  });

  const getFreeSubscription = (v: string) => {
    setId(v);
  };

  const successHandler = ({ valid }: FreeSubscriptionResponseTypes) => {
    if (valid) {
      updateProfileDateByDellay();
    }
  };

  const { isLoading, callApi, data } = useApi<FreeSubscriptionResponseTypes>({
    api: `info/subscribtions/free/${id}`,
    queryKey: ['freeSubscription'],
    onSuccess: successHandler,
    fetchOnMount: false,
    method: 'GET',
  });

  useEffect(() => {
    if (id !== null) {
      callApi();
    }
  }, [id]);

  const freeLoading = isLoading || data ? true : false;

  return { getFreeSubscription, freeLoading };
};

export default useFreeSubscription;
