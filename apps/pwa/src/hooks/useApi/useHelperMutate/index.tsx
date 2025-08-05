import http from '@services/http';

import useCustomToast from '@hooks/useCustomToast';
import { useMutation } from '@tanstack/react-query';

import { ERROR_SERVER } from '../constants';
import { UseHelperMutateProps } from './types';

const useHelperMutate = <T,>(props: UseHelperMutateProps<T>) => {
  const { onToast } = useCustomToast();

  const mutationFn = async (payload?: object) => {
    const contentType = props.method === 'POST' || props.method === 'PUT' ? props.contentType : undefined;

    const res = await http<T>({
      method: props.method,
      url: props.api,
      contentType,
      payload,
    });

    if (res.error) {
      onToast({ message: ERROR_SERVER, type: 'error' });
      throw res.error;
    }

    return res.data as T;
  };

  const { data, error, isPending, mutate } = useMutation({
    onSuccess: props.onSuccess,
    onError: props.onError,
    mutationFn,
  });

  const callApi = (payload?: object) => {
    mutate(payload);
  };

  const isLoading = isPending;

  return { data, error, isLoading, callApi };
};

export default useHelperMutate;
