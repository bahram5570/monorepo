import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { REPLIES_PAGE_SIZE, REPLIES_SKIP } from './constants';
import { DataRepliesListTypes, RepliesListResponseTypes, UseReplyListProps } from './types';

const useReplyList = (props: UseReplyListProps) => {
  const repliesQueryKey: [string] = [`repliesList ${props.shareId} ${props.commentId}`];

  const { newQuery, getQuery, updateQuery } = useCustomReactQuery(repliesQueryKey);

  const data = getQuery<DataRepliesListTypes>({ queryKey: repliesQueryKey });

  useEffect(() => {
    newQuery({ queryKey: repliesQueryKey, payload: { repliesList: props.replies } });
  }, [props.replies]);

  const [currentRepliesCount, setCurrentRepliesCount] = useState(1);
  const [pageNo, setPageNo] = useState(0);

  const successHandler = (v: RepliesListResponseTypes) => {
    if (data) {
      const newData = { repliesList: [...data.repliesList, ...v.replies] };
      updateQuery({ queryKey: repliesQueryKey, payload: newData });
      setCurrentRepliesCount((state) => state + REPLIES_PAGE_SIZE);
      setPageNo((state) => state + 1);
    }
  };

  const api = `shareeexperience/v3/experience/${props.shareId}/comment/${props.commentId}/replies/${REPLIES_SKIP}/${pageNo}/${REPLIES_PAGE_SIZE}`;
  const showMoreQueryKey: [string] = [`repliesList ${currentRepliesCount} ${props.shareId} ${props.commentId}`];

  const { isLoading, callApi } = useApi({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: showMoreQueryKey,
  });

  const showMoreHandler = () => {
    callApi();
  };

  return { data, currentRepliesCount, showMoreHandler, isLoading };
};

export default useReplyList;
