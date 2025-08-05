import { useEffect } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { QueryKeyTypes, RefetchQueryTypes, UpdateQueryTypes } from './types';

const useCustomReactQuery = (fakeQueryKey?: [string], times?: { staleTime?: number; gcTime?: number }) => {
  const queryClient = useQueryClient();
  useQuery({
    enabled: false,
    gcTime: times?.gcTime || 0,
    queryKey: fakeQueryKey || [''],
    staleTime: times?.staleTime || 0,
    queryFn: () => {}, // # In order to eliminate the warnings.
  });

  const hasEmptyQuery = queryClient.getQueryData(['']);

  useEffect(() => {
    if (hasEmptyQuery) {
      queryClient.removeQueries({ queryKey: [''] });
    }
  }, [hasEmptyQuery]);

  const queryKeyValidation = ({ queryKey }: QueryKeyTypes) => {
    const isValid = queryClient.getQueryData(queryKey) ? true : false;
    return { isValid };
  };

  const getQuery = <T,>({ queryKey }: QueryKeyTypes) => {
    return queryClient.getQueryData<T>(queryKey);
  };

  const removeQuery = ({ queryKey }: QueryKeyTypes) => {
    queryClient.removeQueries({ queryKey });
  };

  const updateQuery = ({ queryKey, payload }: UpdateQueryTypes) => {
    const { isValid } = queryKeyValidation({ queryKey });

    if (isValid) {
      queryClient.setQueryData(queryKey, { ...payload, dummyData: Math.random() });
    }
  };

  const newQuery = ({ queryKey, payload }: UpdateQueryTypes) => {
    queryClient.invalidateQueries({ queryKey });
    queryClient.setQueryData(queryKey, payload);
  };

  const refetchQuery = ({ queryKey, gcTime }: RefetchQueryTypes) => {
    const { isValid } = queryKeyValidation({ queryKey });

    const hasGcTime = typeof gcTime === 'number';

    if (isValid) {
      queryClient.fetchQuery({ queryKey, gcTime: hasGcTime ? gcTime : 0 });
    }
  };

  return { getQuery, updateQuery, removeQuery, refetchQuery, newQuery };
};

export default useCustomReactQuery;
