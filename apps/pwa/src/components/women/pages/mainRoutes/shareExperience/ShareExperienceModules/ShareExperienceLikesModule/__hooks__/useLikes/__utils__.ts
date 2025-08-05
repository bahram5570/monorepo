import http from '@services/http';

import { ShareExperienceStateEnum } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';

import {
  HandleLikeCountsTypes,
  HandleLikeInfoTypes,
  HandleNewApiTypes,
  LikeInfoTypes,
  NewApiTypes,
  ReplyLikeCallApiTypes,
} from './types';

const handleLikeCounts: HandleLikeCountsTypes = (no, action) => {
  let result = no;

  if (action === 'plus') {
    result = result + 1;
  }

  if (action === 'minus') {
    if (result > 0) {
      result = result - 1;
    }
  }

  return result;
};

const handleNewApi: HandleNewApiTypes = (action) => {
  const method = action === 'delete' ? 'DELETE' : 'POST';
  const likeType = action === 'delete' ? 'like' : action;
  return { likeType, method };
};

export const handleLikeInfo: HandleLikeInfoTypes = ({ v, likeInfo }) => {
  const newLikeInfo: LikeInfoTypes = { ...likeInfo };
  let newApi: NewApiTypes = { likeType: 'like', method: 'POST' };

  if (v === ShareExperienceStateEnum.Like) {
    switch (likeInfo.state) {
      case ShareExperienceStateEnum.None:
        newLikeInfo.likeCount = handleLikeCounts(likeInfo.likeCount, 'plus');
        newLikeInfo.state = ShareExperienceStateEnum.Like;
        newApi = handleNewApi('like');
        break;

      case ShareExperienceStateEnum.Like:
        newLikeInfo.likeCount = handleLikeCounts(likeInfo.likeCount, 'minus');
        newLikeInfo.state = ShareExperienceStateEnum.None;
        newApi = handleNewApi('delete');
        break;

      case ShareExperienceStateEnum.Dislike:
        newLikeInfo.likeCount = handleLikeCounts(likeInfo.likeCount, 'plus');
        newLikeInfo.disliked = handleLikeCounts(likeInfo.disliked, 'minus');
        newLikeInfo.state = ShareExperienceStateEnum.Like;
        newApi = handleNewApi('like');
        break;
    }
  }

  if (v === ShareExperienceStateEnum.Dislike) {
    switch (likeInfo.state) {
      case ShareExperienceStateEnum.None:
        newLikeInfo.disliked = handleLikeCounts(likeInfo.disliked, 'plus');
        newLikeInfo.state = ShareExperienceStateEnum.Dislike;
        newApi = handleNewApi('dislike');
        break;

      case ShareExperienceStateEnum.Like:
        newLikeInfo.likeCount = handleLikeCounts(likeInfo.likeCount, 'minus');
        newLikeInfo.disliked = handleLikeCounts(likeInfo.disliked, 'plus');
        newLikeInfo.state = ShareExperienceStateEnum.Dislike;
        newApi = handleNewApi('dislike');
        break;

      case ShareExperienceStateEnum.Dislike:
        newLikeInfo.disliked = handleLikeCounts(likeInfo.disliked, 'minus');
        newLikeInfo.state = ShareExperienceStateEnum.None;
        newApi = handleNewApi('delete');
        break;
    }
  }

  return { newLikeInfo, newApi };
};

export const replyLikeCallApi: ReplyLikeCallApiTypes = async (url, method) => {
  const updatedMethod = method === 'POST' ? 'GET' : 'DELETE';
  await http({ url, method: updatedMethod, payload: updatedMethod === 'DELETE' ? {} : undefined });
};
