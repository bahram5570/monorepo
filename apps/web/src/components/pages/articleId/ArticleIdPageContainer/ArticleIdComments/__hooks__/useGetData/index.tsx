import useApi from '@hooks/useApi';

import { useEffect, useState } from 'react';

import { ARTICLE_ID_COMMENTS_PAGE_SIZE } from './constants';
import { ArticleIdCommentResponseTypes, ArticleIdCommentsDataTypes } from './types';

const useGetData = (articleId: string) => {
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [commentsList, setCommentsList] = useState<ArticleIdCommentsDataTypes>([]);

  const successHandler = (v: ArticleIdCommentResponseTypes) => {
    setCommentsList(v.comments);
    setTotalCount(Math.ceil(v.totalCount / ARTICLE_ID_COMMENTS_PAGE_SIZE));
  };

  const { isLoading, callApi } = useApi<ArticleIdCommentResponseTypes>({
    method: 'GET',
    onSuccess: successHandler,
    url: `support/article/sp/${articleId}/comments/${pageNo}/${ARTICLE_ID_COMMENTS_PAGE_SIZE}`,
  });

  useEffect(() => {
    callApi();
  }, [pageNo]);

  const pageHandler = (p: number) => {
    setPageNo(p);
  };

  return { isLoading, commentsList, totalCount, pageNo, pageHandler };
};

export default useGetData;
