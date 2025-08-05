import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PAGE_QUERY_NAME } from './constants';

const useCustomPagination = () => {
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();

  const query = getQueryParams(PAGE_QUERY_NAME);
  const page = query === null ? 1 : Number(query);

  const pageHandler = (p: number) => {
    newQueryParamsHandler({ [PAGE_QUERY_NAME]: p });
  };

  return { page, pageHandler };
};

export default useCustomPagination;
