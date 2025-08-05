import { useState } from 'react';

import http from '@services/http';

import { UseApiErrorTypes, UseApiTypes } from './types';

const useApi = <T,>(props: UseApiTypes<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<UseApiErrorTypes | null>(null);

  const callApi = async (payload?: object) => {
    setIsLoading(true);
    setData(undefined);
    setError(null);

    const httpProps = payload ? { ...props, payload } : props;
    const response = await http<T>(httpProps);

    if (response.data) {
      setData(response.data);

      if (props.onSuccess) {
        props.onSuccess(response.data);
      }
    }

    if (response.error) {
      setError(response.error);

      if (props.onError) {
        props.onError(response.error);
      }
    }

    setIsLoading(false);
  };

  return { callApi, isLoading, error, data };
};

export default useApi;
