import { useEffect, useState } from 'react';

import {
  EXPERIENCES_COMMENTS_PAGE_SIZE,
  SHARE_EXPERIENCE_COMMENTS_CONTAINER_ID,
} from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import useShareExperiencePageNo from '../../../__hooks__/useShareExperiencePageNo';
import { CommentsIdTypes, CommentsResponseTypes } from './types';

const useCommentsList = (id: CommentsIdTypes) => {
  const [commentCount, setCommentCount] = useState(0);
  const { pageNoInfo, updatePageNo } = useShareExperiencePageNo(id);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['comments ' + id]);

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + id] });

  const successHandler = (v: CommentsResponseTypes) => {
    setCommentCount(v.commentCount);

    if (commentsData) {
      const list = { ...v, comments: [...commentsData.comments, ...v.comments] };
      updateQuery({ queryKey: ['comments ' + id], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['comments ' + id] });
    }
  };

  const currentPageNo = pageNoInfo?.pageNo || 0;

  const { callApi, isLoading } = useApi<CommentsResponseTypes>({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['comments' + currentPageNo + id],
    api: `shareeexperience/v3/experience/${id}/comments/${currentPageNo}/${EXPERIENCES_COMMENTS_PAGE_SIZE}`,
  });

  useEffect(() => {
    if (!isLoading) {
      callApi();
    }
  }, [currentPageNo, isLoading, id]);

  useEffect(() => {
    const el = document.getElementById(SHARE_EXPERIENCE_COMMENTS_CONTAINER_ID);

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;

      if (target) {
        const isEndBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 100;

        if (isEndBottom && !isLoading) {
          const currentItemsCount = (currentPageNo + 1) * EXPERIENCES_COMMENTS_PAGE_SIZE;
          const isAllItemsLoaded = currentItemsCount >= commentCount;

          if (!isAllItemsLoaded) {
            updatePageNo(currentPageNo + 1);
          }
        }
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => el?.removeEventListener('scroll', handleScroll);
  }, [isLoading, currentPageNo, commentCount]);

  // const lastCommentRef = useCallback(
  //   (node: HTMLDivElement | null) => {
  //     if (apiLoading) return;
  //     if (observerRef.current) observerRef.current.disconnect();

  //     observerRef.current = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           const currentItemsCount = ((pageNo?.pageNo ?? 0) + 1) * COMMENTS_PAGE_SIZE;
  //           const isAllItemsLoaded = currentItemsCount >= commentCount;

  //           if (!isAllItemsLoaded) {
  //             const newPageNo = (pageNo?.pageNo ?? 0) + 1;
  //             updatePageNo(newPageNo);
  //           }
  //         }
  //       },
  //       { threshold: 1.0 },
  //     );

  //     if (node) observerRef.current.observe(node);
  //   },

  //   [apiLoading, commentCount, pageNo],
  // );

  // const isLoading = apiLoading && pageNo?.pageNo === 0;

  return { isLoading, commentsData };
};

export default useCommentsList;
