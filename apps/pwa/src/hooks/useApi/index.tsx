import { UseApiPorps } from './types';
import useHelperMutate from './useHelperMutate';
import useHelperQuery from './useHelperQuery';

const useApi = <T,>(props: UseApiPorps<T>) => {
  if (props.method === 'GET') {
    return useHelperQuery<T>(props);
  } else {
    return useHelperMutate<T>(props);
  }
};

export default useApi;
