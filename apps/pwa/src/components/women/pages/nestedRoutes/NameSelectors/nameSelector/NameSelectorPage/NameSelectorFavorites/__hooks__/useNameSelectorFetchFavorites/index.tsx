import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';

import useNameSelectorData from '../../../../__hooks__/useNameSelectorData';
import { FavoriteResponseTypes } from './types';

const useNameSelectorFetchFavorites = () => {
  const [api, setApi] = useState('');
  const { setData, favoriteFilters, setFavoriteFilters } = useNameSelectorData();

  const successHandler = (v: FavoriteResponseTypes) => {
    setData((state) => ({ ...state, favorites: v.items, favoritesTotalCount: v.totalCount }));
    setFavoriteFilters((state) => ({ ...state, paneNo: state.paneNo + 1 }));
  };

  const errorHandler = () => {
    setApi('');
  };

  const { callApi, isLoading } = useApi({
    api,
    method: 'GET',
    queryKey: [api],
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
  });

  const paginationHandler = () => {
    const pageSize = 1000;
    let pageNo = 0;

    if (favoriteFilters.paneNo > 0) {
      return;
    }

    const result = `feature/babyname/favorites?pageSize=${pageSize}&pageNo=${pageNo}`;
    setApi(result);
  };

  useEffect(() => {
    if (api) {
      callApi();
    }
  }, [api]);

  return { paginationHandler, isLoading };
};

export default useNameSelectorFetchFavorites;
