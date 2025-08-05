import { useEffect, useState } from 'react';

import { EXPERIENCES_PAGE_SIZE } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ExperiencesResponseTypes, QueryExperiencesDataTypes, SelectedCategoryIdTypes } from './types';

const useExperiences = (selectedCategoryId: SelectedCategoryIdTypes) => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['experiences']);

  const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

  const successHandler = (v: ExperiencesResponseTypes) => {
    setTotalCount(v.totalCount);

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['experiences'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.expirences }, queryKey: ['experiences'] });
    }
  };

  const api = `shareeexperience/v3/category/${selectedCategoryId}/${pageNo}/${EXPERIENCES_PAGE_SIZE}`;

  const { callApi, isLoading } = useApi<ExperiencesResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['experiences' + pageNo],
  });

  useEffect(() => {
    // # Calls api on category change
    if (selectedCategoryId) {
      callApi();
      removeQuery({ queryKey: ['experiences'] });
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    // # Calls api on pagingation
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const isEndBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isEndBottom && !isLoading) {
        const currentItemsCount = (pageNo + 1) * EXPERIENCES_PAGE_SIZE;
        const isAllItemsLoaded = currentItemsCount >= totalCount;

        if (!isAllItemsLoaded) {
          setPageNo(pageNo + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, pageNo, totalCount]);

  return { isLoading, experiencesData };
};

export default useExperiences;
