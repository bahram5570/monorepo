import { ArticlesTypes } from '@app/types';
import useApi from '@hooks/useApi';
import useCustomPagination from '@hooks/useCustomPagination';

import { useEffect, useState } from 'react';

import { AUTHOR_PAGE_SIZE } from './constants';
import { AuthorResponseTypes } from './types';

const useCategoryGetData = (authorId: string) => {
  const { page, pageHandler } = useCustomPagination();
  const [data, setData] = useState<ArticlesTypes[]>([]);
  const [totalPage, setTotalPage] = useState<number | null>(null);

  const onSuccess = (v: AuthorResponseTypes) => {
    const totalPageResult = Math.ceil(v.totalCount / AUTHOR_PAGE_SIZE);
    setTotalPage(totalPageResult);
    setData(v.articles);
  };

  const { callApi, isLoading } = useApi<AuthorResponseTypes>({
    onSuccess,
    method: 'GET',
    cache: 'no-store',
    url: `support/article/articles/author/${authorId}/${page}/${AUTHOR_PAGE_SIZE}`,
  });

  useEffect(() => {
    callApi();
  }, [page]);

  return { isLoading, data, totalPage, page, pageHandler };
};

export default useCategoryGetData;
