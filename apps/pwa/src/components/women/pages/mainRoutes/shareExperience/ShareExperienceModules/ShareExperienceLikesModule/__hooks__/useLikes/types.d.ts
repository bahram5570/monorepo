import { ShareExperienceStateEnum } from '../../../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';
import { ShareExperienceLikesModuleProps } from '../../types';

export type UseLikesProps = ShareExperienceLikesModuleProps;

export type LikeInfoTypes = Pick<ShareExperienceLikesModuleProps, 'state' | 'likeCount' | 'disliked'>;

export type LikeHandlerTypes = (v: ShareExperienceStateEnum) => void;

export type HandleLikeCountsTypes = (no: number, action: 'plus' | 'minus') => number;

export type NewApiTypes = { likeType: 'like' | 'dislike'; method: 'POST' | 'DELETE' };

export type HandleNewApiTypes = (action: 'like' | 'dislike' | 'delete') => NewApiTypes;

export type HandleLikeInfoTypes = (props: { v: ShareExperienceStateEnum; likeInfo: LikeInfoTypes }) => {
  newApi: NewApiTypes;
  newLikeInfo: LikeInfoTypes;
};

export type ApiInfoTypes = { method: 'POST' | 'DELETE'; api: string };

export type ReplyLikeCallApiTypes = (url: string, method: Pick<NewApiTypes, 'method'>['method']) => void;
