import { useCallback, useEffect, useRef, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { CHALLENGE_PAGE_SIZE } from './constants';
import { ChallengeDataPropsType, ResponsePropsType } from './type';

const useGetData = () => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['challenges']);

  const challengeData = getQuery<ChallengeDataPropsType>({ queryKey: ['challenges'] });

  const successHandler = (v: ResponsePropsType) => {
    setTotalCount(v.totalCount);

    if (challengeData) {
      const list = { items: [...challengeData.items, ...v.items] };
      updateQuery({ queryKey: ['challenges'], payload: list });
    } else {
      newQuery({ payload: { items: v.items }, queryKey: ['challenges'] });
    }
  };

  const api = `challenge/archive/${pageNo}/${CHALLENGE_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = useApi<ResponsePropsType>({
    api,
    method: 'GET',
    onSuccess: successHandler,
    queryKey: ['challenges' + pageNo],
  });

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, apiLoading]);

  const lastExperienceRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (apiLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const currentItemsCount = (pageNo + 1) * CHALLENGE_PAGE_SIZE;
            const isAllItemsLoaded = currentItemsCount >= totalCount;

            if (!isAllItemsLoaded) {
              setPageNo(pageNo + 1);
            }
          }
        },
        { threshold: 1.0 },
      );

      if (node) observerRef.current.observe(node);
    },
    [apiLoading, totalCount, pageNo],
  );

  const isLoading = apiLoading && pageNo === 0;

  return { challengeData, isLoading, lastExperienceRef };
};

export default useGetData;
