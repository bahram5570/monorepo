import { useEffect, useState } from 'react';

import useShareExperiencePageNo from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/__hooks__/useShareExperiencePageNo';
import {
  EXPERIENCES_PROFILE_PAGE_SIZE,
  SHARE_EXPERIENCE_PROFILE_CONTAINER_ID,
} from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { QueryExperiencesDataTypes, SelfExperienceDataType, UseActivitiesDataPropsType } from './type';

const useActivitiesData = ({ id }: UseActivitiesDataPropsType) => {
  const [totalCount, setTotalCount] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['activities']);
  const { pageNoInfo, updatePageNo } = useShareExperiencePageNo(`${id}-activities`);

  const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['activities'] });

  const successHandler = (v: SelfExperienceDataType) => {
    setTotalCount(v.totalCount);

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.list] };
      updateQuery({ queryKey: ['activities'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.list }, queryKey: ['activities'] });
    }
  };

  const currentPageNo = pageNoInfo?.pageNo || 0;

  const api = `shareeexperience/v3/profile/${id}/activity/${currentPageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = useApi<SelfExperienceDataType>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`shareExperienceActivitiesExperienceProfile-${id}`],
  });

  useEffect(() => {
    if (!isLoading && id !== undefined) {
      callApi();
    }
  }, [id, currentPageNo]);

  // useEffect(() => {
  //   if (id) {
  //     callApi();
  //   }
  // }, [id]);

  useEffect(() => {
    const el = document.getElementById(SHARE_EXPERIENCE_PROFILE_CONTAINER_ID);

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;

      if (target) {
        const isEndBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 100;

        if (isEndBottom && !isLoading) {
          const currentItemsCount = (currentPageNo + 1) * EXPERIENCES_PROFILE_PAGE_SIZE;
          const isAllItemsLoaded = currentItemsCount >= totalCount;

          if (!isAllItemsLoaded) {
            updatePageNo(currentPageNo + 1);
          }
        }
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => el?.removeEventListener('scroll', handleScroll);
  }, [isLoading, currentPageNo, totalCount]);

  return { isLoading, experiencesData };
};

export default useActivitiesData;
