import { useEffect, useState } from 'react';

import { handleLikeInfo, replyLikeCallApi } from './__utils__';

import useApi from '@hooks/useApi';

import useLikeComment from '../useLikeComment';
import useLikeExeprience from '../useLikeExeprience';
import useLikeReply from '../useLikeReply';
import { ApiInfoTypes, LikeHandlerTypes, UseLikesProps } from './types';

const useLikes = (props: UseLikesProps) => {
  const [apiInfo, setApiInfo] = useState<null | ApiInfoTypes>(null);

  const { updateExperienceHandler } = useLikeExeprience();
  const { updateCommentHandler } = useLikeComment();
  const { updateReplyHandler } = useLikeReply();

  const likeHandler: LikeHandlerTypes = (v) => {
    const likeInfo = { state: props.state, disliked: props.disliked, likeCount: props.likeCount };
    let apiResult = '';

    const { newLikeInfo, newApi } = handleLikeInfo({ v, likeInfo });

    switch (props.type) {
      case 'experience':
        updateExperienceHandler({ ...newLikeInfo, shareId: props.shareId });
        apiResult = `shareeexperience/v3/experience/${props.shareId}/${newApi.likeType}`;
        break;

      case 'comment':
        updateCommentHandler({ ...newLikeInfo, shareId: props.shareId, commentId: props.commentId });
        apiResult = `shareeexperience/v3/experience/${props.shareId}/comments/${props.commentId}/${newApi.likeType}`;
        break;

      case 'reply':
        updateReplyHandler({
          ...newLikeInfo,
          shareId: props.shareId,
          replyId: props.replyId,
          commentId: props.commentId,
        });
        apiResult = `shareeexperience/v3/experience/${props.shareId}/comments/${props.commentId}/replies/${props.replyId}/${newApi.likeType}`;
        break;
    }

    setApiInfo({ api: apiResult, method: newApi.method });
  };

  const { callApi: likeCallApi } = useApi({ api: apiInfo?.api || '', method: apiInfo?.method || 'POST' });

  useEffect(() => {
    if (apiInfo) {
      if (props.type === 'reply') {
        replyLikeCallApi(apiInfo.api, apiInfo.method);
      } else {
        likeCallApi({});
      }
      setApiInfo(null);
    }
  }, [apiInfo]);

  return { likeHandler };
};

export default useLikes;
