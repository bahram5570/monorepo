import { newCommentMaker } from './__utils__';

import { QueryExperiencesDataTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { DataRepliesListTypes } from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/CommentsGenerator/ReplyGenerator/__hooks__/useReplyList/types';
import { CommentsResponseTypes } from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { NewCommentResponseTypes, NewReplyResponseTypes, UseSubmitProps } from './types';

const useSubmit = ({ text, data }: UseSubmitProps) => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();

  const successHandler = (v: unknown) => {
    if (data.type === 'comment') {
      const response = v as NewCommentResponseTypes;

      const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });
      if (experiencesData) {
        const experienceIndex = experiencesData.expirences.findIndex((item) => item.id === data.shareId);

        if (experienceIndex > -1) {
          experiencesData.expirences[experienceIndex].commentCount++;
          updateQuery({ queryKey: ['experiences'], payload: experiencesData });
        }
      }

      const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + data.shareId] });
      if (commentsData) {
        const newComment = newCommentMaker({
          commentId: response.commentId,
          shareId: data.shareId,
          avatar: data.avatar,
          name: data.name,
          text,
        });

        commentsData.comments.unshift(newComment);
        updateQuery({ queryKey: ['comments ' + data.shareId], payload: commentsData });
      }
    } else if (data.type === 'reply') {
      const response = v as NewReplyResponseTypes;

      const queryKey: [string] = [`repliesList ${data.shareId} ${data.commentId}`];
      const repliesData = getQuery<DataRepliesListTypes>({ queryKey: queryKey });

      if (repliesData) {
        const newReply = { ...response.reply, selfExperience: true, userId: data.userId };
        repliesData.repliesList.unshift(newReply);
        updateQuery({ queryKey: queryKey, payload: repliesData });
      }
    }

    router.back();
  };

  let api = '';
  switch (data.type) {
    case 'comment':
      api = `shareeexperience/v3/experience/${data.shareId}/comments`;
      break;

    case 'reply':
      api = `shareeexperience/v3/experience/${data.shareId}/comment/${data.commentId}/reply`;
      break;
  }

  const { callApi, isLoading } = useApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler = () => {
    callApi({ text });
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
