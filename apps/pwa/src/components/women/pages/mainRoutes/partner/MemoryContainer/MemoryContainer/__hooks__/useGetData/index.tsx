import { useCallback, useEffect, useRef, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { MEMORY_PAGE_SIZE, PAGE_NO } from './constants';
import { MemoriesDataType, ResponsePropsType } from './type';

const useGetData = () => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['meories']);

  const memoriesData = getQuery<MemoriesDataType>({ queryKey: ['meories'] });

  const successHandler = (v: ResponsePropsType) => {
    sessionStorage.setItem(PAGE_NO, JSON.stringify(pageNo));
    setTotalCount(v.count);

    if (memoriesData) {
      const list = { memories: [...memoriesData.memories, ...v.memories] };
      updateQuery({ queryKey: ['meories'], payload: list });
    } else {
      newQuery({ payload: { memories: v.memories }, queryKey: ['meories'] });
    }
  };

  const api = `memory/${pageNo}/${MEMORY_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = useApi<ResponsePropsType>({
    api,
    method: 'GET',
    onSuccess: successHandler,
    queryKey: ['meories' + pageNo],
  });

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, apiLoading]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(PAGE_NO);
    };
  }, []);

  const lastExperienceRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (apiLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const currentItemsCount = (pageNo + 1) * MEMORY_PAGE_SIZE;
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

  return { lastExperienceRef, memoriesData, isLoading };
};

export default useGetData;
