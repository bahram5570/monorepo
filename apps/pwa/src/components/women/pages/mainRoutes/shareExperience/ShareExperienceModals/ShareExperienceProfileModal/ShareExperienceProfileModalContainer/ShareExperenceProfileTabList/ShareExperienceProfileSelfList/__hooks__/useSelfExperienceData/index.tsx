import { useEffect, useState } from 'react';

import useShareExperiencePageNo from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/__hooks__/useShareExperiencePageNo';
import {
  EXPERIENCES_PROFILE_PAGE_SIZE,
  SHARE_EXPERIENCE_PROFILE_CONTAINER_ID,
} from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { QuerySelfExperiencesDataTypes, SelfExperienceDataType, UseSelfExperienceDataPropsType } from './type';

const useSelfExperienceData = ({ id, isSelf }: UseSelfExperienceDataPropsType) => {
  const [totalCount, setTotalCount] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['selfExperience']);
  const { pageNoInfo, updatePageNo } = useShareExperiencePageNo(`${id}-selfExperience`);

  const experiencesData = getQuery<QuerySelfExperiencesDataTypes>({ queryKey: ['selfExperience'] });

  const successHandler = (v: SelfExperienceDataType) => {
    setTotalCount(v.totalCount);

    if (experiencesData) {
      const list = { expirences: [...experiencesData.expirences, ...v.list] };
      updateQuery({ queryKey: ['selfExperience'], payload: list });
    } else {
      newQuery({ payload: { expirences: v.list }, queryKey: ['selfExperience'] });
    }
  };

  const currentPageNo = pageNoInfo?.pageNo || 0;

  const api = isSelf
    ? `shareeexperience/v3/experience/self/${currentPageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`
    : `shareeexperience/v3/profile/${id}/self/${currentPageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = useApi<SelfExperienceDataType>({
    api: api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`shareExperienceSelfExperienceProfile-${id}-${currentPageNo}`],
  });

  // useEffect(() => {
  //   if (!isLoading && pageNoInfo?.pageNo !== undefined && pageNoInfo.pageNo > 0) {
  //     callApi();
  //   }
  // }, [pageNoInfo?.pageNo, isLoading, id]);

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

export default useSelfExperienceData;
