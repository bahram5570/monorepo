import { useEffect, useState } from 'react';

import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { CommentsResponseTypes } from '../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { ApiInfoTypes, FollowHandlerTypes } from './types';

const useShareExperienceFollow = (experienceId?: string) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const [apiInfo, setApiInfo] = useState<null | ApiInfoTypes>(null);
  const { updateQuery, getQuery } = useCustomReactQuery(['experiences']);

  const successHandler = () => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
    const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + experienceId] });
    if (experiencesData) {
      experiencesData.expirences.forEach((item) => {
        if (item.userId === apiInfo?.userId) {
          item.isFollow = !apiInfo.isFollow;
        }
      });

      updateQuery({ queryKey: ['experiences'], payload: experiencesData });

      const exitCommentQueryData = getQuery({ queryKey: ['comments ' + experienceId] });
      const exitTopicExperienceData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['topicExperiences'] });
      const exitActivitiesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['activities'] });
      const exitSelfExperienceData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['selfExperience'] });

      if (exitCommentQueryData) {
        const findCurrentExperience = experiencesData.expirences.find((experience) => experience.id === experienceId);
        const list = { ...commentsData, isFollow: findCurrentExperience?.isFollow };
        updateQuery({ queryKey: ['comments ' + experienceId], payload: list });
      }

      if (exitTopicExperienceData) {
        exitTopicExperienceData.expirences.forEach((item) => {
          if (item.userId === apiInfo?.userId) {
            item.isFollow = !apiInfo.isFollow;
          }
        });

        updateQuery({ queryKey: ['topicExperiences'], payload: exitTopicExperienceData });
      }

      if (exitActivitiesData) {
        exitActivitiesData.expirences.forEach((item) => {
          if (item.userId === apiInfo?.userId) {
            item.isFollow = !apiInfo.isFollow;
          }
        });

        updateQuery({ queryKey: ['activities'], payload: exitActivitiesData });
      }

      if (exitSelfExperienceData) {
        exitSelfExperienceData.expirences.forEach((item) => {
          if (item.userId === apiInfo?.userId) {
            item.isFollow = !apiInfo.isFollow;
          }
        });

        updateQuery({ queryKey: ['selfExperience'], payload: exitSelfExperienceData });
      }
    }

    const isModalOpen = getQueryParams(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME);
    if (isModalOpen) {
      router.back();
    }

    setApiInfo(null);
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  const api =
    apiInfo === null ? '' : `shareeexperience/v3/profile/${apiInfo.userId}/${apiInfo.isFollow ? 'unfollow' : 'follow'}`;

  const { callApi, isLoading: isFollowLoading } = useApi({
    api,
    method: 'GET',
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
    queryKey: ['follow' + api],
  });

  useEffect(() => {
    if (apiInfo !== null) {
      callApi();
    }
  }, [apiInfo]);

  const followHandler: FollowHandlerTypes = (v) => {
    setApiInfo(v);
  };

  return { followHandler, isFollowLoading };
};

export default useShareExperienceFollow;
