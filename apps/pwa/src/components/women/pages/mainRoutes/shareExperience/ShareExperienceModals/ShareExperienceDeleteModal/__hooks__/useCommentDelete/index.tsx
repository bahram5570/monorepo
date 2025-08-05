import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { CommentsResponseTypes } from '../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { IdInfoTypes } from './types';

const useCommentDelete = () => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  const [idInfo, setIdInfo] = useState<null | IdInfoTypes>(null);

  const commentApplyHandler = ({ shareId, commentId }: IdInfoTypes) => {
    setIdInfo({ shareId, commentId });
  };

  const successHandler = () => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
    if (experiencesData) {
      const experienceIndex = experiencesData.expirences.findIndex((item) => item.id === idInfo?.shareId);

      if (experienceIndex > -1) {
        experiencesData.expirences[experienceIndex].commentCount--;
        updateQuery({ queryKey: ['experiences'], payload: experiencesData });
      }
    }

    const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + idInfo?.shareId] });
    if (commentsData) {
      const filteredCommentsList = commentsData.comments.filter((item) => item.id !== idInfo?.commentId);
      commentsData.comments = filteredCommentsList;
      updateQuery({ queryKey: ['comments ' + idInfo?.shareId], payload: commentsData });
    }

    setIdInfo(null);
    router.back();
  };

  const errorHandler = () => {
    setIdInfo(null);
  };

  const api = `shareeexperience/v3/experience/${idInfo?.shareId}/comments/${idInfo?.commentId}`;
  const { callApi, isLoading: isCommentLoading } = useApi({
    api,
    method: 'DELETE',
    onError: errorHandler,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (idInfo !== null) {
      callApi({});
    }
  }, [idInfo]);

  return { commentApplyHandler, isCommentLoading };
};

export default useCommentDelete;
