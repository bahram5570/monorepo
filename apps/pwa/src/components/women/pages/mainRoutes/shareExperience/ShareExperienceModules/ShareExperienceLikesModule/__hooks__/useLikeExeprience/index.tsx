import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { QueryExperiencesDataTypes } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { CommentsResponseTypes } from '../../../../ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { UpdateExercieseHandlerTypes } from './types';

const useLikeExeprience = () => {
  const { updateQuery, getQuery, refetchQuery } = useCustomReactQuery();

  const updateExperienceHandler: UpdateExercieseHandlerTypes = (v) => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    if (experiencesData) {
      const exitProfileQueryKey = getQuery({ queryKey: ['shareExperienceProfile'] });
      const exitCommentQueryKey = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + v.shareId] });
      const index = experiencesData.expirences.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = experiencesData.expirences[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...experiencesData };
        updateQuery({ queryKey: ['experiences'], payload });
      }

      if (exitProfileQueryKey) {
        refetchQuery({ queryKey: ['shareExperienceProfile'] });
      }
      if (exitCommentQueryKey) {
        updateQuery({
          queryKey: ['comments ' + v.shareId],
          payload: { ...exitCommentQueryKey, likeCount: v.likeCount, disliked: v.disliked, state: v.state },
        });
      }
    }
  };

  return { updateExperienceHandler };
};

export default useLikeExeprience;
