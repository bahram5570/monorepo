import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { GetQueryTypes, newQueryParamsHandlerTypes, removeQueryParamsHandlerTypes } from './types';

const useQueryParamsHandler = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const newQueryParamsHandler: newQueryParamsHandlerTypes = (q) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryList = Object.entries(q);

    queryList.forEach((query) => {
      params.set(query[0], query[1].toString());
    });

    router.push(pathname + '?' + params, { scroll: false });
  };

  const getQueryParams: GetQueryTypes = (queryName) => {
    return searchParams.get(queryName);
  };

  const removeQueryParamsHandler: removeQueryParamsHandlerTypes = (q) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(q);
    router.push(pathname + '?' + params);
  };

  return { newQueryParamsHandler, removeQueryParamsHandler, getQueryParams };
};

export default useQueryParamsHandler;
