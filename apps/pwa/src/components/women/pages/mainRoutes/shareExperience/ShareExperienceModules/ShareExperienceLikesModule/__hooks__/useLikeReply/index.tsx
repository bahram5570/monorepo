import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { DataRepliesListTypes } from '../../../../ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/CommentsGenerator/ReplyGenerator/__hooks__/useReplyList/types';
import { UpdateReplyHandlerTypes } from './types';

const useLikeReply = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateReplyHandler: UpdateReplyHandlerTypes = (v) => {
    const repliesQueryKey: [string] = [`repliesList ${v.shareId} ${v.commentId}`];
    const repliesData = getQuery<DataRepliesListTypes>({ queryKey: repliesQueryKey });

    if (repliesData) {
      const replyIndex = repliesData.repliesList.findIndex((item) => item.id === v.replyId);

      if (replyIndex > -1) {
        const reply = repliesData.repliesList[replyIndex];
        reply.likeCount = v.likeCount;
        reply.disliked = v.disliked;
        reply.state = v.state;

        updateQuery({ queryKey: repliesQueryKey, payload: repliesData });
      }
    }
  };

  return { updateReplyHandler };
};

export default useLikeReply;
