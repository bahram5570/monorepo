import { ArticlesTypes } from '@app/types';
import useApi from '@hooks/useApi';
import useCustomPagination from '@hooks/useCustomPagination';

import { useEffect, useState } from 'react';

import { CATEGORY_PAGE_SIZE } from './constants';
import { CategoryArticlesResponseTypes } from './types';

const useCategoryGetData = (categoryId: string) => {
  const { page, pageHandler } = useCustomPagination();
  const [data, setData] = useState<ArticlesTypes[]>([]);
  const [totalPage, setTotalPage] = useState<number | null>(null);

  const onSuccess = (v: CategoryArticlesResponseTypes) => {
    const totalPageResult = Math.ceil(v.totalCount / CATEGORY_PAGE_SIZE);
    setTotalPage(totalPageResult);
    setData(v.articles);
  };

  const { callApi, isLoading } = useApi<CategoryArticlesResponseTypes>({
    onSuccess,
    method: 'GET',
    cache: 'no-store',
    url: `support/article/articles/category/${categoryId}/${page}/${CATEGORY_PAGE_SIZE}`,
  });

  useEffect(() => {
    callApi();
  }, [page]);

  return { isLoading, data, totalPage, page, pageHandler };
};

export default useCategoryGetData;
