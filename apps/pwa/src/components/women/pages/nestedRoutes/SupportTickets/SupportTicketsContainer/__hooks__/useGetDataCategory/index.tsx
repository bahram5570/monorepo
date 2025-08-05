import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { TicketcategoryResponseType } from '../../type';

const useGetDataCategory = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const ticketId = getQueryParams('id');
  const idList = ticketId?.split('-');
  const categoryId = idList ? idList[idList?.length - 1] : '';

  const {
    isLoading: dataLoading,
    callApi: getData,
    data,
  } = useApi<TicketcategoryResponseType>({
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['ticketCategory'],
    api: categoryId ? `support/category/${categoryId}` : 'support/category',
  });

  const getDataHandler = () => {
    const payload = {
      type: 0,
      ModelPhone: '',
      packageName: '',
      version: process.env.NEXT_PUBLIC_APP_VERSION || '',
    };

    getData(payload);
  };

  useEffect(() => {
    getDataHandler();
  }, [categoryId]);

  return { dataLoading, data, getDataHandler };
};

export default useGetDataCategory;
