import { useEffect, useState } from 'react';

import { initialEnabledValue } from './__utils__';
import http from '@services/http';

import useCustomToast from '@hooks/useCustomToast';
import { useQuery } from '@tanstack/react-query';

import { ERROR_SERVER } from '../constants';
import { UseHelperQueryProps } from './types';

const useHelperQuery = <T,>(props: UseHelperQueryProps<T>) => {
  // # Toggling the "enabled" by "callApi" will call the api
  const [enabled, setEnabled] = useState(initialEnabledValue(props.fetchOnMount));
  const { onToast } = useCustomToast();

  const callApi = () => {
    setEnabled(true);
  };

  const queryFn = async () => {
    const res = await http<T>({
      revalidate: props.cache === 'force-cache' ? props.revalidate : undefined,
      cache: props.cache,
      url: props.api,
      method: 'GET',
    });

    if (res.error) {
      throw res.error;
    }

    return res.data;
  };

  const {
    data,
    error,
    isError,
    isSuccess,
    isFetching,
    isLoading: loading,
  } = useQuery({
    initialData: props.initialData,
    gcTime: props.cacheTime || 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryKey: props.queryKey,
    refetchOnMount: false,
    enabled,
    queryFn,
  });

  const isLoading = isFetching || loading;

  useEffect(() => {
    if (enabled && !isLoading) {
      setEnabled(false);
    }
  }, [enabled, isLoading]);

  useEffect(() => {
    if (isSuccess && !isLoading && data && props.onSuccess) {
      props.onSuccess(data);
    }
  }, [isSuccess, isLoading, data]);

  useEffect(() => {
    if (isError && !isLoading && props.onError) {
      onToast({ message: ERROR_SERVER, type: 'error' });
      props.onError();
    }
  }, [isError, isLoading]);

  return { data, error, isLoading, callApi };
};

export default useHelperQuery;
