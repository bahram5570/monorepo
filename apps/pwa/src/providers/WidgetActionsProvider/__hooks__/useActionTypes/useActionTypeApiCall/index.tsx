import { useEffect, useState } from 'react';

import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useActionComplete from '../useActionComplete';

const useActionTypeApiCall = (onActionComplete: () => void) => {
  const { removeQuery } = useCustomReactQuery();
  const [api, setApi] = useState<string | null>(null);
  const { cycleCardStatusHandler } = useUpdateCycleCard();
  const [queryKey, setQueryKey] = useState<[string]>(['']);
  const { onComplete } = useActionComplete(onActionComplete);

  const callApiCallHandler = (v: string) => {
    setApi(v);
    onComplete();
    setQueryKey([`apiCall-${v}-${Math.random()}`]);
  };

  const successHandler = () => {
    const isCyclePage = location.pathname.includes('cycle');
    if (isCyclePage) {
      cycleCardStatusHandler('refetch');
    }

    setApi(null);
    setQueryKey(['']);
    removeQuery({ queryKey });
  };

  const { callApi } = useApi({
    method: 'GET',
    api: api || '',
    queryKey: queryKey,
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (api !== null) {
      callApi();
    }
  }, [api]);

  return { callApiCallHandler };
};

export default useActionTypeApiCall;
