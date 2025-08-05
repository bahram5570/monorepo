import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { CommentsResponseTypes } from '../../../../ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { UpdateCommentHandlerTypes } from './types';

const useLikeComment = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateCommentHandler: UpdateCommentHandlerTypes = (v) => {
    const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + v.shareId] });

    if (commentsData) {
      const commentIndex = commentsData.comments.findIndex((item) => item.id === v.commentId);

      if (commentIndex > -1) {
        const comment = commentsData.comments[commentIndex];
        comment.likeCount = v.likeCount;
        comment.disliked = v.disliked;
        comment.state = v.state;

        const payload = { ...commentsData };
        updateQuery({ queryKey: ['comments ' + v.shareId], payload });
      }
    }
  };

  return { updateCommentHandler };
};

export default useLikeComment;
