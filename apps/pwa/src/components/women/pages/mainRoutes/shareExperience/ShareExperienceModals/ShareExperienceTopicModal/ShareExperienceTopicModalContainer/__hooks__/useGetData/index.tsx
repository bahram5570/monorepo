import { useCallback, useEffect, useRef, useState } from 'react';

import { EXPERIENCES_PAGE_SIZE } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import {
  ExperiencesResponseTypes,
  QueryExperiencesDataTypes,
  TopicInformationTypes,
  useGetDataPropsType,
} from './type';

const useGetData = ({ topicId }: useGetDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [topicInformation, setTopicInformation] = useState<TopicInformationTypes>({
    coverImage: '',
    name: '',
    inputText: '',
    bio: '',
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['topicExperiences']);

  const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['topicExperiences'] });

  const successHandler = (v: ExperiencesResponseTypes) => {
    setTotalCount(v.totalCount);
    setTopicInformation({ coverImage: v.coverImage, name: v.name, inputText: v.inputText, bio: v.bio });

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.expirences] };
      updateQuery({ queryKey: ['topicExperiences'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.expirences }, queryKey: ['topicExperiences'] });
    }
  };

  const api = `shareeexperience/v3/topic/${topicId}/${pageNo}/${EXPERIENCES_PAGE_SIZE}`;

  const { callApi, isLoading: apiLoading } = useApi<ExperiencesResponseTypes>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['topicExperiences' + pageNo],
  });

  useEffect(() => {
    if (topicId) {
      removeQuery({ queryKey: ['topicExperiences'] });
      setPageNo(0);
      callApi();
    }
  }, [topicId]);

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, apiLoading]);

  // Intersection Observer for infinite scrolling
  const lastExperienceRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (apiLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const currentItemsCount = (pageNo + 1) * EXPERIENCES_PAGE_SIZE;
            const isAllItemsLoaded = currentItemsCount >= totalCount;

            if (!isAllItemsLoaded) {
              setPageNo((prev) => prev + 1);
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

  return { isLoading, experiencesData, topicInformation, lastExperienceRef };
};

export default useGetData;
